import React from 'react';
import Register from './components/Register'
import Login from './components/Login'
import Chat from './components/Chat'
import Cookies from 'js-cookie'
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      isLoggedIn: false,
    }
  }
  async logOut() {
    const response = await fetch('/api/v1/rest-auth/logout/', {
      method: 'POST',
      headers: {
        'X-CSRFToken': Cookies.get('csrftoken'),
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state)
    });

    const data = await response.json();
    Cookies.remove('Authorization')
  }
  render() {
    return (
      <React.Fragment>
        <Chat isLoggedIn={this.state.isLoggedIn}/>
        <Login />
        <button onClick={() => this.logOut()}>Logout</button>
        <Register />

      </React.Fragment>
    );
  }


}

export default App;
