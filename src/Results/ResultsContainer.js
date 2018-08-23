import React, {Component} from 'react'
import { Grid } from 'semantic-ui-react'
import Result from './Result'

export default class ResultsContainer extends Component {

  render(){
    const allResults = this.props.results
    const standardResults = allResults.map(res => {
      return {yelpId: res.id, name: res.name, image_url: res.image_url, location: res.location.display_address.join(' '), phone: res.display_phone}
    })

    let results = standardResults.map(result => <Result key={result.yelpId}
      addFavorite={this.props.addFavorite} result={result}
      saveFavorite={this.props.saveFavorite}/>)

    let style = {
      width: '90%',
      margin: 'auto',
      paddingTop: '20px'
    }

    return(
      <div style={style}>
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
