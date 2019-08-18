import React from 'react';
import PropTypes from 'prop-types';

import './AlertDanger.css';

class AlertDanger extends React.PureComponent {
  render() {
    // console.log('AlertDanger render');
    const { message } = this.props;

    return (
      <div className="alert-danger" role="alert">
        <h4 className="alert-heading">{message}</h4>
      </div>
    );
  }
}

AlertDanger.propTypes = {
  message: PropTypes.string.isRequired
};

export default AlertDanger;