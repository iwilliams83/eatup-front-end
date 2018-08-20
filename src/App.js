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
      user: {id: 0, name: ''},
      searches: [''],
      results: []
    })
  }

  handleAddSearch = () => {
    this.setState(prevState => {
      return {
        searches: [...prevState.searches, '']
      }
    })
  }

  handleSearchChange = (string, index) => {
    this.setState(prevState => {
      console.log(string, index);
      let prevSearches = [...prevState.searches]
      prevSearches[index] = string
      return {searches: [...prevSearches]}
    })
  }

   handleSubmit = () => {
     let search = this.state.searches
     fetch('http://localhost:3000/api/v1/search',
     {method: "POST",
      headers: {"Content-Type": "application/json", "Accept": "application/json"},
      body: JSON.stringify({locations: search})
    })
    .then(res => res.json())
    .then(res => this.setState({results: res.businesses}))
  }

  addFavorite = () => {
    fetch('http://localhost:3000/api/v1/favorites',
    {method: "POST",
     headers: {"Content-Type": "application/json", "Accept": "application/json"},
     body: JSON.stringify({locations: search})
   })
   .then(res => res.json())
   .then(res => this.setState({results: res.businesses}))
 }

  showComponent = () => {
    if (this.state.results.length === 0){
      return <SearchContainer handleSearchChange={this.handleSearchChange}
        handleAddSearch={this.handleAddSearch} handleSubmit={this.handleSubmit}
      searches={this.state.searches}/>
    } else {
      return <ResultsContainer addFavorite={this.addFavorite} results={this.state.results}/>
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
