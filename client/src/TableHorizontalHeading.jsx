import React, {Component} from 'react';
import {connect} from 'react-redux';

class TableHorizontalHeading extends Component {
  render() {
    return (
      <div
        data-item-id={this.props.item.id}
        onMouseDown={this.props.handleMouseDown.bind(this, this.props.item.id)}
        className={
          'table-horizontal-heading-component' +
          (this.props.enablePlaceholder && this.props.ui.draggedItemId === this.props.item.id ? ' placeholder' : '')
        }>
        {this.props.item.name}
      </div>
    );
  }
}

TableHorizontalHeading.defaultProps = {
  enablePlaceholder: true
};

function mapStateToProps(state) {
  return {
    ui: state.ui
  };
}

function mapDispatchToProps(dispatch) {
  return {
    handleMouseDown: function (itemId, event) {
      dispatch({
        type: 'UPDATE_UI',
        data: {
          draggedItemId: itemId,
          offsetX: event.clientX - event.target.offsetLeft
        }
      })
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TableHorizontalHeading);
