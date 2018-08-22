import React, {Component} from 'react'
import { Grid } from 'semantic-ui-react'
import Result from './Result'
import ResultsMapContainer from './GoogleMaps/ResultsMapContainer'

export default class ResultsContainer extends Component {
  render(){
    console.log(this.props.results)
    let results = this.props.results.map(result => <Result key={result.id} addFavorite={this.props.addFavorite} result={result} />)
    let style = {
      width: '90%',
      margin: 'auto',
      paddingTop: '20px'
    }
    return(
      <div>
      <ResultsMapContainer results={this.props.results} />
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
        </div>
    )
  }
}
