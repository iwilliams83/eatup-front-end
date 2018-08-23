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
      results: []
    })
  }

  handleAddSearch = () => {
    if (this.state.searches.length > 0 && this.state.searches.length <= 3) {
    this.setState(prevState => {
      return {
        searches: [...prevState.searches, '']
      }
    }) } else {
      null
    }
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
  //Makes Connection between Restaurant & User
  addFavorite = (id, name, image_url, address, display_phone) => {
    fetch('http://localhost:3000/api/v1/favorites',
    {method: "POST",
     headers: {"Content-Type": "application/json", "Accept": "application/json"},
     body: JSON.stringify({ restaurant: id, user: this.state.user.id })
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

//Makes New Restaurant
 saveFavorite = (id, name, image_url, address, display_phone, props) => {
   fetch('http://localhost:3000/api/v1/restaurants',
   {method: "POST",
    headers: {"Content-Type": "application/json", "Accept": "application/json"},
    body: JSON.stringify({yelpId: id, name: name,
      image_url: image_url, location: address, phone: display_phone
    })
  })
 }

 //Deletes Favorite
//  deleteFav = (userId, FavId) => {
//    fetch(`http://localhost:3000/api/v1/users/${userId}`,
//    {method: "DELETE",
//     headers: {"Content-Type": "application/json", "Accept": "application/json"},
//     body: JSON.stringify({yelpId: id })
//  })
// }

 toggleFaves = () => {
   this.setState(prevState => {
     return {showFaves: !prevState.showFaves}
   })
 }

  showComponent = () => {
    if (this.state.showFaves === true){
      return <FavoritesContainer userId={this.state.user.id} username={this.state.user.name} deleteFav={this.deleteFav}/>
    }
    else if (this.state.results.length === 0){
      return <SearchContainer handleSearchChange={this.handleSearchChange}
        handleAddSearch={this.handleAddSearch} handleSubmit={this.handleSubmit}
      searches={this.state.searches}/>
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
