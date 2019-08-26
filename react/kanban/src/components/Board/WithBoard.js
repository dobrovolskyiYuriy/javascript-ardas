import React from 'react';
import PropTypes from 'prop-types';

import Column from './Column';
import Loading from '../Loading';
import Error from '../Error';

export default WrappedComponent =>
  class WithBoard extends React.Component {
    static propTypes = {
      board: PropTypes.object.isRequired,
      fetchBoard: PropTypes.func.isRequired
    };

    componentDidMount() {
      this.props.fetchBoard();
    }

    getCardsForColumn(columnId) {
      return this.props.board.data.cards
        .filter(card => card.columnId === columnId);
    }

    render() {
      const { data, loading, error } = this.props.board;
      let render;

      if (loading) {
        render = <Loading />;
      } else if (error) {
        render = <Error error={error} />
      } else {
        render = data.columns.map(({ id, ...props }) =>
          <Column key={id} columnId={id} cards={this.getCardsForColumn(id)} {...props} />);
      }

      return <WrappedComponent render={render} />
    }
  }