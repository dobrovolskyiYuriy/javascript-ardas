import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  const {
    children,
    ...attributes
  } = props;

  return (
    <button {...attributes}>{children}</button>
  );
}

Button.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func
};

Button.defaultProps = {
  children: ''
};

export default Button;