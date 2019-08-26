import React from 'react';

export default WrappedComponent =>
  class WithColumn extends React.Component {
    addCard = () => {
      const { columnId } = this.props;
      const title = prompt('Card title:', '');
      title && this.props.addCard({ title, columnId });
    }

    render() {
      const { addCard, ...props } = this.props;
      return <WrappedComponent {...props} onAddCard={this.addCard} />;
    }
  }