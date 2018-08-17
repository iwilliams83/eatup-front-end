import React, { Component } from 'react';
import AccountContainer from './Account/AccountContainer'
import SearchContainer from './Search/SearchContainer'
import NavBar from './Components/NavBar'
import ResultsContainer from './Results/ResultsContainer'

import './App.css';

class App extends Component {

  state = {
    user: {id: 0, name: ''},
    searches: [''],
    results: []
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

  handleAddSearch = () => {
    this.setState(prevState => {
      return {
        searches: [...prevState.searches, '']
      }
    })
  }

  handleSearchChange = (string) => {
    this.setState({
      searches: [string]
    }, () => console.log(this.state))
  }

   handleSubmit = () => {
     let search = this.state.searches[0]
     fetch('http://localhost:3000/api/v1/search',
     {method: "POST",
      headers: {"Content-Type": "application/json", "Accept": "application/json"},
      body: JSON.stringify({location: search})
    })
    .then(res => res.json())
    .then(res => this.setState({results: res.businesses}))
  }

  showComponent = () => {
    if (this.state.results.length === 0){
      return <SearchContainer handleSearchChange={this.handleSearchChange} handleAddSearch={this.handleAddSearch} handleSubmit={this.handleSubmit} />
    } else {
      return <ResultsContainer />
    }
  }

  render() {
    return (
      <div className="App">
      <NavBar activeUser={this.state.user} handleLogout={this.handleLogout}/>
         { this.state.user.id === 0 ? <AccountContainer setUser={this.setUser}/> : this.showComponent() }
      </div>
    );
  }
}

export default App;
