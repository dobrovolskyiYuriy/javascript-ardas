import React from 'react';
import PropTypes from 'prop-types';

import './Table.css';
import { isSameObjects } from '../services/functionsForObjects';

class Table extends React.Component {
  shouldComponentUpdate(nextProps) {
    if (isSameObjects(nextProps.data, this.props.data)) {
      return false;
    }
    return true;
  }

  getFirstUP(word) {
    return word.slice(0, 1).toUpperCase() + word.slice(1);
  }

  getSplitData(data) {
    const tBody = [];
    const tables = [];

    for (let key in data) {
      if (typeof data[key] === 'object') {
        const table = <Table key={key} title={key} data={data[key]} />;
        tables.push(table);
        continue;
      }

      const prop = this.getFirstUP(key);
      const value = data[key];
      const tr = (
        <tr key={key}>
          <th scope='row'>{prop}</th>
          <td>{value}</td>
        </tr>
      );

      tBody.push(tr);
    }

    return [tBody, tables];
  }

  render() {
    // console.log('Table render');
    const { title, data } = this.props;
    const [ tBody, tables ] = this.getSplitData(data);

    return (
      <>
        <table className='table table-striped'>
          <thead className='thead-dark'>
            <tr>
              <th colSpan='2' scope='col'>{this.getFirstUP(title)}</th>
            </tr>
          </thead>
          <tbody>
            {tBody}
          </tbody>
        </table>
        {tables}
      </>
    );
  }
}

Table.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired
};

export default Table;