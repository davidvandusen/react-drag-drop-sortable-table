import React, {Component} from 'react';
import {connect} from 'react-redux';

class TableCell extends Component {
  render() {
    return (
      <div
        className={
          'table-cell-component' +
          (this.props.enablePlaceholder && this.props.item.id === this.props.ui.draggedItemId ? ' placeholder' : '')
        }>
        {this.props.item.fieldData.find(field => field.fieldId === this.props.fieldId).value}
      </div>
    );
  }
}

TableCell.defaultProps = {
  enablePlaceholder: true
};

function mapStateToProps(state) {
  return {
    ui: state.ui
  };
}

export default connect(mapStateToProps)(TableCell);
