import React, {Component} from 'react';
import {connect} from 'react-redux';

class TableCell extends Component {
  render() {
    const value = this.props.item.fieldData.find(field => field.fieldId === this.props.field.id).value;
    const highlightValue = this.props.ui.highlightItemId ?
      this.props.items
        .find(item => item.id === this.props.ui.highlightItemId).fieldData
        .find(field => field.fieldId === this.props.field.id).value :
      value;
    return (
      <div
        className={
          'table-cell-component' +
          (this.props.ui.highlightItemId === this.props.item.id ? ' highlight' : '') +
          (this.props.enablePlaceholder && (
            this.props.item.id === this.props.ui.draggedItemId ||
            this.props.field.id === this.props.ui.draggedFieldId
          ) ? ' placeholder' : '') +
          (value === highlightValue ? ' neutral' : value < highlightValue ? ' better' : ' worse')
        }>
        {value}
      </div>
    );
  }
}

TableCell.defaultProps = {
  enablePlaceholder: true
};

function mapStateToProps(state) {
  return {
    items: state.items,
    ui: state.ui
  };
}

export default connect(mapStateToProps)(TableCell);
