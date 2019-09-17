import React from 'react';
import PropTypes from 'prop-types';

import Column from './Column';
import Error from '../Error';
import Loading from '../Loading';

class Board extends React.Component {
  componentDidMount() {
    this.props.getBoard();
  }

  render() {
    const { data, error, loading } = this.props.columns;

    let render;
    if (loading) {
      render = <Loading />;
    } else if (error) {
      render = <Error error={error} />;
    } else {
      render = data.map(column =>
        <Column key={column.id} column={column} />);
    }

    return (
      <div className='board'>
        {render}
      </div>
    );
  }
}

Board.propTypes = {
  columns: PropTypes.shape({
    data: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        color: PropTypes.string.isRequired
      }).isRequired
    ).isRequired,
    error: PropTypes.object,
    loading: PropTypes.bool.isRequired
  }).isRequired,
  getBoard: PropTypes.func.isRequired
};

export default Board;