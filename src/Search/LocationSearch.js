import React, {Component} from 'react'

export default class LocationSearch extends Component {

   render(){
     return (
       <div className="location-search">
          <input className="location-input" type="text" placeHolder="Lower East Side, NYC" onChange={(e) => this.props.handleSearchChange(e.target.value, this.props.name)}/>
       </div>
     )
   }

}
