import React from 'react';
import PropTypes from 'prop-types';

import './Profile.css';
import FormGroup from './FormGroup';

class Profile extends React.Component {
  shouldComponentUpdate(nextProps) {
    if (nextProps.value !== this.props.value ||
        nextProps.disabledProfile !== this.props.disabledProfile) {
      return true;
    }
    return false;
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmit();
  }

  render() {
    // console.log('Profile render');
    const { value, disabledProfile, onChange } = this.props;

    return (
      <form className='Profile' onSubmit={this.handleSubmit}>
        <fieldset disabled={disabledProfile}>
          <FormGroup
            label='Enter user-id (available from 1 to 10):'
            inputAttributes={{
              type: 'number',
              id: 'userId',
              placeholder: 'user-id',
              value
            }}
            invalidFeedbackText='Woops! You should enter user-id to continue'
            onChange={onChange}
          />
          <button className='btn btn-primary' type='submit'>Submit</button>
        </fieldset>
      </form>
    );
  }
}

Profile.propTypes = {
  value: PropTypes.string.isRequired,
  disabledProfile: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

Profile.defaultProps = {
  disabledProfile: false
};

export default Profile;