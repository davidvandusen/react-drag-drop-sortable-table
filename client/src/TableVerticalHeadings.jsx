import React, {Component} from 'react';
import TableVerticalHeading from './TableVerticalHeading.jsx';

class TableVerticalHeadings extends Component {
  render() {
    return (
      <div className="table-vertical-headings-component">
        {
          this.props.showHorizontalHeadings &&
          <div className="table-placeholder-heading" />
        }
        {
          this.props.fieldOrder.map(fieldId =>
            <TableVerticalHeading
              enablePlaceholder={this.props.enablePlaceholder}
              key={fieldId}
              field={this.props.fields.find(field => field.id === fieldId)} />
          )
        }
      </div>
    );
  }
}

TableVerticalHeadings.defaultProps = {
  enablePlaceholder: true,
  showHorizontalHeadings: true,
  fields: []
};

export default TableVerticalHeadings;
