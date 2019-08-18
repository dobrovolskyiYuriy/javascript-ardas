import React from 'react';
import PropTypes from 'prop-types';

import FormGroup from './FormGroup';
import Button from '../Button';

function UserForm(props) {
  const {
    name,
    birthday,
    onChange,
    onSubmit
  } = props;

  return (
    <form className={'user-form'} onSubmit={onSubmit}>
      <FormGroup
        label={'What is your name?'}
        value={name}
        type="text"
        id="name"
        placeholder="Name"
        onChange={onChange}
      />
      <FormGroup
        label={'Enter your birthday'}
        value={birthday}
        type="date"
        id="birthday"
        placeholder="Birthday"
        onChange={onChange}
      />
      <Button className="btn btn-primary" type="submit">Submit</Button>
    </form>
  );
}

UserForm.propTypes = {
  name: PropTypes.string.isRequired,
  birthday: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default UserForm;