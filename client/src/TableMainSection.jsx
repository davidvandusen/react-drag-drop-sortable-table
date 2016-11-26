import React, {Component} from 'react';
import TableHorizontalHeadings from './TableHorizontalHeadings.jsx';
import TableBody from './TableBody.jsx';

class TableMainSection extends Component {
  render() {
    return (
      <div className="table-main-section-component">
        {
          this.props.showHorizontalHeadings &&
          <TableHorizontalHeadings
            enablePlaceholder={this.props.enablePlaceholder}
            itemOrder={this.props.itemOrder}
            items={this.props.items} />
        }
        <TableBody
          itemOrder={this.props.itemOrder}
          fieldOrder={this.props.fieldOrder}
          enablePlaceholder={this.props.enablePlaceholder}
          fields={this.props.fields}
          items={this.props.items} />
      </div>
    );
  }
}

TableMainSection.defaultProps = {
  showHorizontalHeadings: true,
  enablePlaceholder: true,
  items: [],
  fields: []
};

export default TableMainSection;
