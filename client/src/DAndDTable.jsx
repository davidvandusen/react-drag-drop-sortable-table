import React, {Component} from 'react';
import {connect} from 'react-redux';
import TableContainer from './TableContainer.jsx';

class DAndDTable extends Component {
  constructor() {
    super();
    this.handleMouseMove = this.handleMouseMove.bind(this);
  }

  handleMouseMove(event) {
    if (this.floatingColumn) {
      this.floatingColumn.el.style.left = event.clientX - this.props.ui.offsetX + 'px';
      const headingTargets = Array.from(this.mainTable.el.querySelectorAll('.table-horizontal-heading-component'));
      const target = headingTargets.find(target => target.offsetLeft <= event.pageX && target.offsetLeft + target.offsetWidth >= event.pageX);
      if (target && target.dataset.itemId != this.props.ui.draggedItemId) {
        this.props.handleReorderItems(headingTargets.indexOf(target));
        this.forceUpdate();
      }
    }
    if (this.floatingRow) {
      this.floatingRow.el.style.top = event.clientY - this.props.ui.offsetY + 'px';
      const headingTargets = Array.from(this.mainTable.el.querySelectorAll('.table-vertical-heading-component'));
      const target = headingTargets.find(target => target.offsetTop <= event.pageY && target.offsetTop + target.offsetHeight >= event.pageY);
      if (target && target.dataset.fieldId != this.props.ui.draggedFieldId) {
        this.props.handleReorderFields(headingTargets.indexOf(target));
        this.forceUpdate();
      }
    }
  }

  initializeFloatingTables() {
    if (this.floatingColumn) {
      const draggedHeading = this.mainTable.el.querySelector(`.table-horizontal-heading-component[data-item-id="${this.props.ui.draggedItemId}"]`);
      this.floatingColumn.el.style.width = draggedHeading.offsetWidth + 'px';
      this.floatingColumn.el.style.top = draggedHeading.offsetTop + 'px';
      this.floatingColumn.el.style.left = draggedHeading.offsetLeft + 'px';
    }
    if (this.floatingRow) {
      const draggedHeading = this.mainTable.el.querySelector(`.table-vertical-heading-component[data-field-id="${this.props.ui.draggedFieldId}"]`);
      this.floatingRow.el.style.width = this.mainTable.el.offsetWidth + 'px';
      this.floatingRow.el.style.top = draggedHeading.offsetTop + 'px';
      this.floatingRow.el.style.left = draggedHeading.offsetLeft + 'px';
    }
  }

  componentDidMount() {
    this.initializeFloatingTables();
    document.body.addEventListener('mouseup', this.props.handleMouseUp);
    document.body.addEventListener('mousemove', this.handleMouseMove);
  }

  componentDidUpdate() {
    this.initializeFloatingTables();
  }

  componentWillUnmount() {
    document.body.removeEventListener('mouseup', this.props.handleMouseUp);
    document.body.removeEventListener('mousemove', this.handleMouseMove);
  }

  render() {
    return (
      <div className="d-and-d-table-component">
        <TableContainer
          ref={component => this.mainTable = component}
          itemOrder={this.props.ui.itemOrder}
          fieldOrder={this.props.ui.fieldOrder}
          fields={this.props.fields}
          items={this.props.items} />
        {
          this.props.ui.draggedItemId &&
          <TableContainer
            ref={component => this.floatingColumn = component}
            movable={true}
            enablePlaceholder={false}
            itemOrder={[this.props.ui.draggedItemId]}
            fieldOrder={this.props.ui.fieldOrder}
            items={this.props.items.filter(item => item.id === this.props.ui.draggedItemId)}
            fields={this.props.fields}
            showVerticalHeadings={false} />
        }
        {
          this.props.ui.draggedFieldId &&
          <TableContainer
            ref={component => this.floatingRow = component}
            movable={true}
            enablePlaceholder={false}
            fieldOrder={[this.props.ui.draggedFieldId]}
            itemOrder={this.props.ui.itemOrder}
            fields={this.props.fields.filter(field => field.id === this.props.ui.draggedFieldId)}
            items={this.props.items}
            showHorizontalHeadings={false} />
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    ui: state.ui,
    fields: state.fields,
    items: state.items
  };
}

function mapDispatchToProps(dispatch) {
  return {
    handleReorderItems(newDraggedItemIndex) {
      dispatch({
        type: 'REORDER_ITEMS',
        data: {
          newDraggedItemIndex: newDraggedItemIndex
        }
      });
    },
    handleReorderFields(newDraggedFieldIndex) {
      dispatch({
        type: 'REORDER_FIELDS',
        data: {
          newDraggedFieldIndex: newDraggedFieldIndex
        }
      });
    },
    handleMouseUp() {
      dispatch({
        type: 'UPDATE_UI',
        data: {
          draggedItemId: null,
          draggedFieldId: null
        }
      });
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DAndDTable);
