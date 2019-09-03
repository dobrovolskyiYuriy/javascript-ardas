import React from 'react';
import PropTypes from 'prop-types';

import Card from './Card';
import Error from '../../../Error';
import Loading from '../../../Loading';

export default WrappedComponent =>
  class WithColumnSectionCards extends React.Component {
    static propTypes = {
      cards: PropTypes.object.isRequired
    };

    render() {
      const { cards, ...props } = this.props;
      const { data, error, loading } = cards;
      let render;

      if (loading) {
        render = <Loading className='column-section-cards-loading' />;
      } else if (error) {
        render = <Error error={error} />
      } else {
        render = data.map(({columnId, ...card}) =>
          <Card key={card.id} {...card} />);
      }

      return <WrappedComponent {...props}>{render}</WrappedComponent>
    }
  }