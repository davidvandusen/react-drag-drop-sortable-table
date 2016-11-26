import React, {Component} from 'react';
import TableRow from './TableRow.jsx';

class TableBody extends Component {
  render() {
    return (
      <div className="table-body-component">
        {
          this.props.fieldOrder.map(fieldId =>
            <TableRow
              key={fieldId}
              enablePlaceholder={this.props.enablePlaceholder}
              itemOrder={this.props.itemOrder}
              field={this.props.fields.find(field => field.id === fieldId)}
              items={this.props.items} />
          )
        }
      </div>
    );
  }
}

TableBody.defaultProps = {
  enablePlaceholder: true
};

export default TableBody;
