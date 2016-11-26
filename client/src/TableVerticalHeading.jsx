import React, {Component} from 'react';

class TableVerticalHeading extends Component {
  render() {
    return (
      <div className="table-vertical-heading-component">
        {this.props.field.name}
      </div>
    );
  }
}

export default TableVerticalHeading;
