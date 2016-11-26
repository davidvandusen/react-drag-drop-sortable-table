import React, {Component} from 'react';
import {connect} from 'react-redux';

class TableHorizontalHeading extends Component {
  render() {
    return (
      <div
        data-item-id={this.props.item.id}
        onClick={this.props.handleClick.bind(this)}
        className={
          'table-horizontal-heading-component' +
          (this.props.ui.highlightItemId === this.props.item.id ? ' highlight' : '') +
          (this.props.enablePlaceholder && this.props.ui.draggedItemId === this.props.item.id ? ' placeholder' : '')
        }>
        <div
          onMouseDown={this.props.handleMouseDown.bind(this)}
          className="gripper" />
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
    handleClick: function () {
      dispatch({
        type: 'UPDATE_UI',
        data: {
          highlightItemId: this.props.item.id
        }
      })
    },
    handleMouseDown: function (event) {
      const offsetY = event.pageY - event.target.offsetParent.offsetTop;
      const offsetX = event.pageX - event.target.offsetParent.offsetLeft;
      dispatch({
        type: 'UPDATE_UI',
        data: {
          draggedItemId: this.props.item.id,
          offsetX: offsetX,
          offsetY: offsetY
        }
      })
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TableHorizontalHeading);
