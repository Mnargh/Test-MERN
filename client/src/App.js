import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = { users: []}
  }

  componentDidMount(){
    fetch('/users')
      .then(res => res.json())
      .then(users => this.setState({users}));
  }
// test individuallly component did mount and test each individual function within it
// check that it is being called and that it is setting the state


//within render, there is a way of manually feeding in what the render function receives
// i.e. can feed it a state, then just need to test that it is rendering the html in the correct way
  render() {
    return (
      <div className="App">
        <h1>Users</h1>
        <ul>{this.state.users.map(user =>
          <li key={user.id}>{user.name}</li>
          )}
        </ul>
      </div>
    );
  }
}

export default App;
