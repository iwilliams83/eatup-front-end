import React, { Component } from 'react';
import AccountContainer from './Account/AccountContainer'
import SearchContainer from './Search/SearchContainer'
import NavBar from './Components/NavBar'
import ResultsContainer from './Results/ResultsContainer'
import FavoritesContainer from './Favorites/FavoritesContainer'

import './App.css';

class App extends Component {

  state = {
    user: {id: 0, name: '', favorites: []}, //no need to store favorites on state
    searches: [''],
    results: [],
    showFaves: false
  }

  setUser = (obj) => {
    this.setState({
      user: {id: obj.id, name: obj.attributes.name, favorites: obj.attributes.favorites.map(favorite => favorite.restaurant)}
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

  addFavorite = (id) => {
    fetch('http://localhost:3000/api/v1/favorites',
    {method: "POST",
     headers: {"Content-Type": "application/json", "Accept": "application/json"},
     body: JSON.stringify({restaurant: id, user: this.state.user.id})
   })
   .then(res => res.json())
   .then(res => {
     this.setState(prevState => {
       return {
         user: {...prevState.user, favorites: [...prevState.user.favorites, id]}
       }
     })
   })
 }

  showComponent = () => {
    if (this.state.showFaves === true){
      return <FavoritesContainer favorites={this.state.user.favorites} userId={this.state.user.id}/>
    }
    else if (this.state.results.length === 0){
      return <div className="background" ><SearchContainer handleSearchChange={this.handleSearchChange}
        handleAddSearch={this.handleAddSearch} handleSubmit={this.handleSubmit} className="background"
      searches={this.state.searches}/></div>
    }
    else {
      return <ResultsContainer addFavorite={this.addFavorite} results={this.state.results}/>
    }
  }

  newSearch = () => {
    this.setState({
      searches: [''],
      results: [],
    })
  }


toggleFaves = () => {
  this.setState(prevState => {
    return {showFaves: !prevState.showFaves}
  })
}

  render() {
    return (
      <div className="App">
      <NavBar toggleFaves={this.toggleFaves} activeUser={this.state.user} handleLogout={this.handleLogout} newSearch={this.newSearch} currentResults={this.state.results}/>
         { this.state.user.id === 0 ? <AccountContainer className="background" setUser={this.setUser}/> : this.showComponent() }
      </div>
    );
  }
}

export default App;
