import React from 'react';
import PropTypes from 'prop-types';

function Error({ error }) {
  return <div className='error'>{`${error}`}</div>;
}

Error.propTypes = {
  error: PropTypes.object.isRequired
};

export default Error;