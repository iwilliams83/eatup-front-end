import React, {Component} from 'react'

export default class LocationSearch extends Component {

   render(){
     return (
       <div>
       <h3>hi</h3>
          <input type="text" onChange={(e) => this.props.handleSearchChange(e.target.value)}/>
       </div>
     )
   }

}
