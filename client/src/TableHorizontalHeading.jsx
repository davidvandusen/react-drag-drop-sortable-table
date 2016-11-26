import React, {Component} from 'react';
import {connect} from 'react-redux';

class TableHorizontalHeading extends Component {
  render() {
    return (
      <div
        data-item-id={this.props.item.id}
        className={
          'table-horizontal-heading-component' +
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
    handleMouseDown: function (event) {
      dispatch({
        type: 'UPDATE_UI',
        data: {
          draggedItemId: this.props.item.id,
          offsetX: event.clientX - event.target.offsetParent.offsetLeft
        }
      })
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TableHorizontalHeading);
