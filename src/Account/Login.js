import React, {Component} from 'react'

export default class Login extends Component {

  render() {
    return (
      <div>
        Login
        <form>
          <input type="email" name="email" onChange={(e) => this.props.updateLogin(e.target.value)}/>
        </form>
        <button onClick={this.props.submitLogin}>Login</button><br/><br/>
        <span>Not a member?</span><br/>
        <button onClick={this.props.toggleSignup}>Signup</button>
      </div>
    )
  }
}
