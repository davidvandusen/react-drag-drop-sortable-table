import React, {Component} from 'react';
import {connect} from 'react-redux';

class TableVerticalHeading extends Component {
  render() {
    return (
      <div
        data-field-id={this.props.field.id}
        className={
          'table-vertical-heading-component' +
          (this.props.enablePlaceholder && this.props.ui.draggedFieldId === this.props.field.id ? ' placeholder' : '')
        }>
        <div
          onMouseDown={this.props.handleMouseDown.bind(this)}
          className="gripper" />
        {this.props.field.name}
      </div>
    );
  }
}

TableVerticalHeading.defaultProps = {
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
      const offsetY = event.pageY - event.target.offsetParent.offsetTop;
      const offsetX = event.pageX - event.target.offsetParent.offsetLeft;
      dispatch({
        type: 'UPDATE_UI',
        data: {
          draggedFieldId: this.props.field.id,
          offsetX: offsetX,
          offsetY: offsetY
        }
      })
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TableVerticalHeading);
