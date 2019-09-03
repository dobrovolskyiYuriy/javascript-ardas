import React from 'react';
import PropTypes from 'prop-types';

import Column from './Column';
import Loading from '../Loading';
import Error from '../Error';

export default WrappedComponent =>
  class WithBoard extends React.Component {
    static propTypes = {
      columns: PropTypes.object.isRequired,
      getBoard: PropTypes.func.isRequired
    };

    componentDidMount() {
      this.props.getBoard();
    }

    render() {
      const { columns, getBoard, ...props } = this.props;
      const { data, error, loading } = columns;
      let render;

      if (loading) {
        render = <Loading />;
      } else if (error) {
        render = <Error error={error} />
      } else {
        render = data.map(column =>
          <Column key={column.id} {...column} />);
      }

      return <WrappedComponent {...props}>{render}</WrappedComponent>;
    }
  }