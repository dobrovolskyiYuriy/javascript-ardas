import React from 'react';

import './App.css';
import UserForm from './UserForm';
import Greetings from './Greetings';

class App extends React.Component {
  state = {
    isSubmit: false,
    payload: {
      name: '',
      birthday: ''
    }
  };

  handleChange = (event) => {
    const { target } = event;
    this.setState(state => {
      const newState = { ...state };
      newState.payload[target.id] = target.value;
      return newState;
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState(state => ({
      ...state,
      isSubmit: !state.isSubmit 
    }));
  }

  render() {
    const {
      payload: {
        name,
        birthday
      },
      isSubmit
    } = this.state;

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