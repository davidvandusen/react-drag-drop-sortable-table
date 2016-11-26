import React, {Component} from 'react';
import TableHorizontalHeading from './TableHorizontalHeading.jsx';

class TableHorizontalHeadings extends Component {
  render() {
    return (
      <div className="table-horizontal-headings-component">
        {
          this.props.itemOrder.map(itemId =>
            <TableHorizontalHeading
              key={itemId}
              enablePlaceholder={this.props.enablePlaceholder}
              item={this.props.items.find(item => item.id === itemId)} />
          )
        }
      </div>
    );
  }
}

TableHorizontalHeadings.defaultProps = {
  enablePlaceholder: true,
  items: []
};

export default TableHorizontalHeadings;
