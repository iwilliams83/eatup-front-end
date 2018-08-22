import React, {Component} from 'react'
import { Grid } from 'semantic-ui-react'
import Result from '../Results/Result'

export default class FavoritesContainer extends Component {

  componentDidMount(){
    const id = this.props.userId
    fetch(`http://localhost:3000/api/v1/users/${id}`)
  }

  render(){

    // RUNNING INTO CORS ISSUES TRYING TO FETCH FROM HERE
    // working on saving restaurants to back end so we can pull faves from our db


    return(
      <div >
        {/* Result Cards Here ..? */}
        </div>
    )
  }
}
