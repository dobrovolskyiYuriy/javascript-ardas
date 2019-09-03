import React from 'react';
import PropTypes from 'prop-types';

export default WrappedComponent =>
  class WithColumn extends React.Component {
    static propTypes = {
      addCard: PropTypes.func.isRequired
    };

    addCard = () => {
      const { id } = this.props;
      const title = prompt('Card title:', '');
      title && this.props.addCard({ title, columnId: id });
    }

    render() {
      const { addCard, ...props } = this.props;
      return <WrappedComponent {...props} onAddCard={this.addCard} />
    }
  }