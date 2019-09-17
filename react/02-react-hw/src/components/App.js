import React from 'react';
import axios from 'axios';

import './App.css';
import Profile from './Profile';
import AlertDanger from './AlertDanger';
import Table from './Table';
import { isSameObjects } from '../services/functionsForObjects';

class App extends React.Component {
  state = {
    userId: '',
    disabledProfile: false,
    hasWarning: false,
    data: {}
  };

  shouldComponentUpdate(nextProps, nextState) {
    if (isSameObjects(nextState, this.state)) {
      return false;
    }
    return true;
  }

  getUser(userId) {
    return axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then(res => res.data);
  }

  setWarningFromStatus = status => {
    if (status === 404) {
      this.warning = 'User not found!';
    } else {
      this.warning = 'Something went wrong. Please try again';
    }
  }

  showWarning = () => {
    if (this.timerId) {
      clearTimeout(this.timerId);
    } else {
      this.setState({ hasWarning: true });
    }

    this.timerId = setTimeout(() => {
      this.setState({ hasWarning: false});
      this.timerId = null;
    }, 2000);
  }

  handleChange = userId => {
    this.setState({
      userId
    });
  }

  handleSubmit = () => {
    const { userId } = this.state;

    if (!userId) {
      return;
    }

    this.setState({ disabledProfile: true });
    this.getUser(userId)
      .then(data => {
        this.setState({ data });
      })
      .catch(error => {
        this.setWarningFromStatus(error.response.status);
        this.showWarning();
      })
      .finally(() => {
        this.setState({ disabledProfile: false });
      });
  }

  render() {
    // console.log('App render');
    const { userId, disabledProfile, hasWarning, data } = this.state;

    return (
      <div className="App">
        <div className="App-profile-container">
          {hasWarning ?
            <AlertDanger message={this.warning} />
            :
            null
          }
          <Profile
            value={userId}
            disabledProfile={disabledProfile}
            onChange={this.handleChange}
            onSubmit={this.handleSubmit}
          />
        </div>
        <Table title='basic information' data={data} />
      </div>
    );
  }
}

export default App;