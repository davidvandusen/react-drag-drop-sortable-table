import React, {Component} from 'react';
import TableVerticalHeading from './TableVerticalHeading.jsx';

class TableVerticalHeadings extends Component {
  render() {
    return (
      <div className="table-vertical-headings-component">
        <TableVerticalHeading key="this-is-cheating-dont-do-this" field={{}} />
        {this.props.fields.map(field => <TableVerticalHeading key={field.id} field={field} />)}
      </div>
    );
  }
}

TableVerticalHeadings.defaultProps = {
  fields: []
};

export default TableVerticalHeadings;
