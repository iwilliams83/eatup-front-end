import React, {Component} from 'react'
import { Grid } from 'semantic-ui-react'
import FavResult from './FavResult'

export default class FavoritesContainer extends Component {

   state = {
     myFaves: []
   }

   componentDidMount(){
     const id = this.props.userId
     fetch(`http://localhost:3000/api/v1/users/${id}`)
    .then(res => res.json()).then(res => this.setState({ myFaves: res.data }))
   }

  render(){

      const allFaves = this.state.myFaves
      const standardResults = allFaves.map(res => {
      return {
         dataId: res.id, yelpId: res["attributes"]["yelp-id"], name: res["attributes"]["name"], image_url: res["attributes"]["image-url"], location: res["attributes"]["location"], phone: res["attributes"]["display-phone"]}
      })

      let results = standardResults.map(result => <FavResult dataId={result.dataId} key={result.yelpId}
       userId={this.props.userId} result={result} deleteFav={this.props.deleteFav}/>)

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
              {results[0]}
            </Grid.Column>
            <Grid.Column>
              {results[1]}
            </Grid.Column>
            <Grid.Column>
              {results[2]}
            </Grid.Column>
            <Grid.Column>
              {results[3]}
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column>
              {results[4]}
            </Grid.Column>
            <Grid.Column>
              {results[5]}
            </Grid.Column>
            <Grid.Column>
              {results[6]}
            </Grid.Column>
            <Grid.Column>
              {results[7]}
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column>
              {results[8]}
            </Grid.Column>
            <Grid.Column>
              {results[9]}
            </Grid.Column>
            <Grid.Column>
              {results[10]}
            </Grid.Column>
            <Grid.Column>
              {results[11]}
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column>
              {results[12]}
            </Grid.Column>
            <Grid.Column>
              {results[13]}
            </Grid.Column>
            <Grid.Column>
              {results[14]}
            </Grid.Column>
            <Grid.Column>
              {results[15]}
            </Grid.Column>
          </Grid.Row>

          <Grid.Row>
            <Grid.Column>
              {results[16]}
            </Grid.Column>
            <Grid.Column>
              {results[17]}
            </Grid.Column>
            <Grid.Column>
              {results[18]}
            </Grid.Column>
            <Grid.Column>
              {results[19]}
            </Grid.Column>
          </Grid.Row>

        </Grid>
        </div>
    )
  }
}

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
