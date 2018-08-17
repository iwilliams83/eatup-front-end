import React, {Component} from 'react'
import LocationSearch from './LocationSearch'
import Buttons from './Buttons'

export default class SearchContainer extends Component {

//Location Search eventually will have a button where we can add multiple inputs for search. Use map!

   render() {
      return (
        <div>
          <LocationSearch handleSearchChange={this.props.handleSearchChange}/>
          <Buttons handleAddSearch={this.props.handleAddSearch} handleSubmit={this.props.handleSubmit}/>
        </div>
      )
  }

}
