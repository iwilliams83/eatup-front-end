import React, {Component} from 'react'

export default class Buttons extends Component {
  render(){
    return(
      <div >
      <button className="search-buttons" onClick={this.props.handleAddSearch}>Add My Friend's Location</button>
      <button className="search-buttons space" onClick={this.props.handleSubmit}>Find A Place To Eat!</button>
      </div>
    )
  }

}
