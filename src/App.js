import React, { Component } from 'react';
import AccountContainer from './Account/AccountContainer'
import SearchContainer from './Search/SearchContainer'
import NavBar from './Components/NavBar'

import './App.css';

class App extends Component {

  state = {
    user: {id: 0, name: ''},
    search: '',
    location: []
  }

  setUser = (obj) => {
    this.setState({
      user: {id: obj.id, name: obj.attributes.name}
    })
  }

  handleLogout = () => {
    this.setState({
      user: {id: 0, name: ''}
    })
  }

  changeSearch = (string) => {
    this.setState({
       search: string
    }, () => console.log(this.state.search))
  }

   handleSubmit = (search) => {
     fetch('http://localhost:3000/api/v1/restaurants',
     {method: "POST",
      headers: {"Content-Type": "application/json", "Accept": "application/json"},
      body: JSON.stringify({location: search})
    })
    .then(res => res.json())
    .then(console.log)
  }

  render() {
    return (
      <div className="App">
      <NavBar activeUser={this.state.user} handleLogout={this.handleLogout}/>
         { this.state.user.id === 0 ? <AccountContainer setUser={this.setUser}/> : <SearchContainer />}
      </div>
    );
  }
}

export default App;
