import React, {Component} from 'react'
import { Grid } from 'semantic-ui-react'
import Result from '../Results/Result'

export default class FavoritesContainer extends Component {

  state = {
    favorites:[]
  }

  componentDidMount(){
    const id = this.props.userId
    fetch(`http://localhost:3000/api/v1/users/${id}`)
      .then(res => res.json()).then(res => this.setState({favorites: res}))
  }

  render(){
    console.log('FavoritesContainer:', this.state.favorites)
    const faves = this.state.favorites
    faves.shift()

    return(
      <div >
        {faves.map(fave => {
          return <Result key={fave.id} result={fave}/>
        })}
        </div>
    )
  }
}
