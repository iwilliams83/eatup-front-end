import React, {Component} from 'react'

export default class Login extends Component {

  render() {
    return (
      <div>
        Login
        <form>
          <input type="email" />
        </form>
        <button>Login</button>
        <button onClick={this.props.toggleSignup}>Signup</button>
      </div>
    )
  }
}
