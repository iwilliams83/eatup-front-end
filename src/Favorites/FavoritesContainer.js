import React, {Component} from 'react'
import { Grid } from 'semantic-ui-react'
import FavResult from './FavResult'

export default class FavoritesContainer extends Component {

   state = {
     favorites: []
   }

  componentDidMount(){
    const id = this.props.userId
    fetch(`http://localhost:3000/api/v1/users/${id}`)
      .then(res => res.json()).then(res => this.setState({favorites: res.data}))
  }

  render(){

    console.log('FavoritesContainer:', this.state.favorites)
    const faves = this.state.favorites
    const allFaves = faves.map(fave => {
      return <FavResult key={fave.id} dataId={fave.id} userId={this.props.userId} result={fave.attributes} deleteFav={this.props.deleteFav}/>
    })

    let style = {
      width: '90%',
      margin: 'auto',
      paddingTop: '50px'
    }

    return(
        <div style={style}>
           <h2>{this.props.username}'s Favorites</h2>
          <Grid relaxed columns={4}>
            <Grid.Row>
              <Grid.Column>
                {allFaves[0]}
              </Grid.Column>
              <Grid.Column>
                {allFaves[1]}
              </Grid.Column>
              <Grid.Column>
                {allFaves[2]}
              </Grid.Column>
              <Grid.Column>
                {allFaves[3]}
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column>
                {allFaves[4]}
              </Grid.Column>
              <Grid.Column>
                {allFaves[5]}
              </Grid.Column>
              <Grid.Column>
                {allFaves[6]}
              </Grid.Column>
              <Grid.Column>
                {allFaves[7]}
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column>
                {allFaves[8]}
              </Grid.Column>
              <Grid.Column>
                {allFaves[9]}
              </Grid.Column>
              <Grid.Column>
                {allFaves[10]}
              </Grid.Column>
              <Grid.Column>
                {allFaves[11]}
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column>
                {allFaves[12]}
              </Grid.Column>
              <Grid.Column>
                {allFaves[13]}
              </Grid.Column>
              <Grid.Column>
                {allFaves[14]}
              </Grid.Column>
              <Grid.Column>
                {allFaves[15]}
              </Grid.Column>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column>
                {allFaves[16]}
              </Grid.Column>
              <Grid.Column>
                {allFaves[17]}
              </Grid.Column>
              <Grid.Column>
                {allFaves[18]}
              </Grid.Column>
              <Grid.Column>
                {allFaves[19]}
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
    )
  }
}

//       const allFaves = this.state.myFaves
//       const standardResults = allFaves.map(res => {
//       return {
//          dataId: res.id, yelpId: res["attributes"]["yelp-id"], name: res["attributes"]["name"], image_url: res["attributes"]["image-url"], location: res["attributes"]["location"], phone: res["attributes"]["display-phone"]}
//       })
//
//       let results = standardResults.map(result => <FavResult dataId={result.dataId} key={result.yelpId}
//        userId={this.props.userId} result={result} deleteFav={this.props.deleteFav}/>
//
// =======

// state = {
//   favorites:[]
// }

// componentDidMount(){
//   const id = this.props.userId
//   fetch(`http://localhost:3000/api/v1/users/${id}`)
//     .then(res => res.json()).then(res => this.setState({favorites: res}))
// }

// const faves = this.state.favorites
// faves.shift()
