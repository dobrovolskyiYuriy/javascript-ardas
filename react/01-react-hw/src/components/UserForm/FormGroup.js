import React from 'react';
import PropTypes from 'prop-types';

function FormGroup(props) {
  const { label, ...attributes } = props;

  return (
    <div className={'form-group'}>
      <label htmlFor={attributes.id}>{label}</label>
      <input className="form-control" {...attributes} />
    </div>
  );
}

FormGroup.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string.isRequired,
  type: PropTypes.string,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired
};

FormGroup.defaultValue = {
  label: ''
};

export default FormGroup;