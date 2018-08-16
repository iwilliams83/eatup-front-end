import React, { Component } from 'react';
import Signup from '../src/Components/Signup'
import Results from '../src/Components/Results'

import './App.css';

class App extends Component {

  state = {
    user_id: 0,
    search: '',
    location: []
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
        <Signup />
        <Results handleSubmit={this.handleSubmit}/>
      </div>
    );
  }
}

export default App;
