import React from 'react';

import './App.css';
import UserForm from './UserForm';
import Greetings from './Greetings';

class App extends React.Component {
  state = {
    isSubmit: false,
    name: '',
    birthday: ''
  };

  handleChange = (event) => {
    const { id, value } = event.target;
    this.setState({ [id]: value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState(state => ({ isSubmit: !state.isSubmit }));
  }

  render() {
    const { name, birthday, isSubmit } = this.state;

    return (
      <div className="App">
        {isSubmit ?
          <Greetings
            name={name}
            birthday={birthday}
            onClick={this.handleSubmit}
          />
          :
          <UserForm
            name={name}
            birthday={birthday}
            onChange={this.handleChange}
            onSubmit={this.handleSubmit}
          />
        }
      </div>
    );
  }
}

export default App;