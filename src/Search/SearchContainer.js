import React, {Component} from 'react'
import LocationSearch from './LocationSearch'
import Buttons from './Buttons'

export default class SearchContainer extends Component {

   render() {
     const searches = this.props.searches
      return (
        <div className="location-search-div">
          {searches.map((search, idx) => <LocationSearch key={idx} name={idx} handleSearchChange={this.props.handleSearchChange}/>)}
          <Buttons handleAddSearch={this.props.handleAddSearch} handleSubmit={this.props.handleSubmit}/>
        </div>
      )
  }

}
