import React from 'react';

const loading = [
  ' ...',
  '. ..',
  '.. .',
  '....'
];

class Loading extends React.Component {
  state = {
    loading: '....'
  };

  componentDidMount() {
    let i = 0;
    this.intervalId = setInterval(() => {
      if (i === loading.length) {
        i = 0;
      }
      this.setState({ loading: loading[i] });
      i++;
    }, 300);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    const { className } = this.props;
    return <div className={(className || '') + ' loading'}>Loading{this.state.loading}</div>
  }
}

export default Loading;