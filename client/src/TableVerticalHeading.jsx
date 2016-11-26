import React, {Component} from 'react';
import {connect} from 'react-redux';

class TableVerticalHeading extends Component {
  render() {
    return (
      <div
        data-field-id={this.props.field.id}
        onMouseDown={this.props.handleMouseDown.bind(this, this.props.field.id)}
        className={
          'table-vertical-heading-component' +
          (this.props.enablePlaceholder && this.props.ui.draggedFieldId === this.props.field.id ? ' placeholder' : '')
        }>
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
    handleMouseDown: function (fieldId, event) {
      dispatch({
        type: 'UPDATE_UI',
        data: {
          draggedFieldId: fieldId,
          offsetY: event.clientY - event.target.offsetTop
        }
      })
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TableVerticalHeading);
