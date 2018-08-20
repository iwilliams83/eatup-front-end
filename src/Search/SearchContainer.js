import React, {Component} from 'react'
import LocationSearch from './LocationSearch'
import Buttons from './Buttons'

export default class SearchContainer extends Component {

//Location Search eventually will have a button where we can add multiple inputs for search. Use map!
// handleSearchChange = (search, idx) => {
//   this.props.handleSearchChange(search, idx)
// }
   render() {
     const searches = this.props.searches
      return (
        <div>
          {searches.map((search, idx) => <LocationSearch key={idx} name={idx} handleSearchChange={this.props.handleSearchChange}/>)}
          <Buttons handleAddSearch={this.props.handleAddSearch} handleSubmit={this.props.handleSubmit}/>
        </div>
      )
  }

}
