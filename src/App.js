import React, { Component } from 'react';
import AccountContainer from './Account/AccountContainer'
import SearchContainer from './Search/SearchContainer'
import NavBar from './Components/NavBar'
import ResultsContainer from './Results/ResultsContainer'
import FavoritesContainer from './Favorites/FavoritesContainer'

import './App.css';

class App extends Component {

  state = {
    user: {id: 0, name: '', favorites: []},
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
      results: [],
      showFaves: false
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

  //Send all restaurant data through here: back end will persist to restaurant table
  addFavorite = (id, name, image_url, address, display_phone) => {
    fetch('http://localhost:3000/api/v1/favorites',
    {method: "POST",
     headers: {"Content-Type": "application/json", "Accept": "application/json"},
     body: JSON.stringify({ restaurant:id, user: this.state.user.id })
   })
   .then(res => res.json())
   .then(res => {
     this.setState(prevState => {
       return {
         user: {...prevState.user, favorites: [...prevState.user.favorites, id]}
       }
     })
   })

   this.saveFavorite(id, name, image_url, address, display_phone)
 }

 saveFavorite = (id, name, image_url, address, display_phone, props) => {
   fetch('http://localhost:3000/api/v1/restaurants',
   {method: "POST",
    headers: {"Content-Type": "application/json", "Accept": "application/json"},
    body: JSON.stringify({yelpId: id, name: name,
      image_url: image_url, location: address, phone: display_phone
    })
  })
 }

 toggleFaves = () => {
   this.setState(prevState => {
     return {showFaves: !prevState.showFaves}
   })
 }

  showComponent = () => {
    if (this.state.showFaves === true){
      return <FavoritesContainer  userId={this.state.user.id}/>
    }
    else if (this.state.results.length === 0){
      return <div className="background" ><SearchContainer handleSearchChange={this.handleSearchChange}
        handleAddSearch={this.handleAddSearch} handleSubmit={this.handleSubmit} className="background"
      searches={this.state.searches}/></div>
    }
    else {
      return <ResultsContainer addFavorite={this.addFavorite} results={this.state.results}
      saveFavorite={this.saveFavorite}/>
    }
  }

  newSearch = () => {
    this.setState({
      searches: [''],
      results: [],
    })
  }



  render() {
    return (
      <div className="App">
      <NavBar toggleFaves={this.toggleFaves} activeUser={this.state.user}
        handleLogout={this.handleLogout} newSearch={this.newSearch} currentResults={this.state.results}/>
         { this.state.user.id === 0 ? <AccountContainer className="background" setUser={this.setUser}/> : this.showComponent() }
      </div>
    );
  }
}

export default App;
