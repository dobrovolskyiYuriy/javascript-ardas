import React from 'react';
import PropTypes from 'prop-types';

class FormGroup extends React.Component {
  shouldComponentUpdate(nextProps) {
    if (nextProps.inputAttributes.value !== this.props.inputAttributes.value) {
      return true;
    }
    return false;
  }

  handleChange = event => {
    this.props.onChange(event.target.value);
  }

  render() {
    // console.log('FormGroup render');
    const { label, inputAttributes, invalidFeedbackText } = this.props;
    const inputIsEmpty = !inputAttributes.value;

    return (
      <div className='form-group'>
        <label htmlFor={inputAttributes.id}>{label}</label>
        <input
          className={`form-control ${inputIsEmpty ? 'is-invalid' : ''}`}
          onChange={this.handleChange}
          {...inputAttributes}
        />
        {inputIsEmpty ? 
          <div className='invalid-feedback'>
            {invalidFeedbackText}
          </div>
          :
          null
        }
      </div>
    );
  }
}

FormGroup.propTypes = {
  label: PropTypes.string.isRequired,
  inputAttributes: PropTypes.shape({
    value: PropTypes.string.isRequired,
    type: PropTypes.string,
    id: PropTypes.string.isRequired,
    placeholder: PropTypes.string
  }).isRequired,
  onChange: PropTypes.func.isRequired,
  invalidFeedbackText: PropTypes.string.isRequired
};

export default FormGroup;