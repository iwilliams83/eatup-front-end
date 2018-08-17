import React, {Component} from 'react'

export default class Buttons extends Component {
  render(){
    return(
      <div>
      <button onClick={this.props.handleAddSearch}>Add Another Location</button>
      <button onClick={this.props.handleSubmit}>Find A Place To Eat!!</button>
      </div>
    )
  }

}
