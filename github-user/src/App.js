import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import UserCard from './components/UserCard';

class App extends Component {
  state = {
    user: [],
    followers: [],
  };

  componentDidMount() {
    axios
      .get('https://api.github.com/users/jvaldezdipre')
      .then(res => {
        console.log(res.data);
        this.setState({ user: res.data });
      })
      .catch(err => {
        console.log(err);
      });

    axios
      .get(`https://api.github.com/users/jvaldezdipre/followers`)
      .then(res => {
        console.log('Im am the follower for each user', res.data);
        this.setState({ followers: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className='App'>
        <h1>GitHub Users</h1>
        <UserCard user={this.state.user} followers={this.state.followers} />
      </div>
    );
  }
}

export default App;
