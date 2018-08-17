import React, {Component} from 'react'

export default class LocationSearch extends Component {

  state = {
    term: ''
  }

  changeSearch = (string) => {
    this.setState({
       term: string
    }, () => console.log(this.state.term))
  }

   render(){
     return (
       <div>
          <input type="text" onChange={(e) => this.changeSearch(e.target.value)}/>
          <button onClick={() => this.props.handleSubmit(this.state.term)}>Get Results</button>
       </div>
     )
   }

}
