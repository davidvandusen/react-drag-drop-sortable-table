import React, {Component} from 'react';
import TableCell from './TableCell.jsx';

class TableRow extends Component {
  render() {
    return (
      <div className="table-row-component">
        {
          this.props.itemOrder.map(itemId =>
            <TableCell
              key={itemId}
              enablePlaceholder={this.props.enablePlaceholder}
              field={this.props.field}
              item={this.props.items.find(item => item.id === itemId)} />
          )
        }
      </div>
    );
  }
}

TableRow.defaultProps = {
  enablePlaceholder: true
};

export default TableRow;
