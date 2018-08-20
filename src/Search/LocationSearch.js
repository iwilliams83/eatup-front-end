import React, {Component} from 'react'

export default class LocationSearch extends Component {

   render(){
     return (
       <div>
          <input type="text" onChange={(e) => this.props.handleSearchChange(e.target.value, this.props.name)}/>
       </div>
     )
   }

}
