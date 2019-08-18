import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Button';
import { daysToDate } from '../../services/date';

function Greetings(props) {
  const {
    name,
    birthday,
    onClick
  } = props;

  const userName = name || 'Anonymous';

  let label = `Hello, ${userName}!`;
  if (birthday) {
    const days = daysToDate(birthday);
    const isBirthdayToday = days === 0;

    label = isBirthdayToday ?
      `Happy Birthday, ${userName}!`
      :
      `Hello, ${userName}! It's ${days} days left until your birthday`;
  }
  
  return (
    <div>
      <Button className="Greetings-button" onClick={onClick}>←</Button>
      <span>{label}</span>
    </div>
  );
}

Greetings.propTypes = {
  name: PropTypes.string,
  birthday: PropTypes.string,
  onClick: PropTypes.func.isRequired
};

export default Greetings;