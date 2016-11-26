import React, {Component} from 'react';
import TableVerticalHeadings from './TableVerticalHeadings.jsx';
import TableMainSection from './TableMainSection.jsx';

class TableContainer extends Component {
  render() {
    return (
      <div
        ref={el => this.el = el}
        className={
          'table-container-component' +
          (this.props.movable ? ' movable' : '')
        }>
        {
          this.props.showVerticalHeadings &&
          <TableVerticalHeadings
            fieldOrder={this.props.fieldOrder}
            enablePlaceholder={this.props.enablePlaceholder}
            showHorizontalHeadings={this.props.showHorizontalHeadings}
            fields={this.props.fields} />
        }
        <TableMainSection
          showHorizontalHeadings={this.props.showHorizontalHeadings}
          enablePlaceholder={this.props.enablePlaceholder}
          itemOrder={this.props.itemOrder}
          fieldOrder={this.props.fieldOrder}
          items={this.props.items}
          fields={this.props.fields} />
      </div>
    );
  }
}

TableContainer.defaultProps = {
  movable: false,
  showHorizontalHeadings: true,
  showVerticalHeadings: true,
  enablePlaceholder: true,
  items: [],
  fields: []
};

export default TableContainer;
