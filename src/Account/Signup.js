import React, {Component} from 'react'

export default class Signup extends Component {

  render() {
    return (
      <div>
          <input type="email" onChange={(e) => this.props.changeSearch(e.target.value)}/>
        <button>Signup</button>
      </div>
    )
  }

}
