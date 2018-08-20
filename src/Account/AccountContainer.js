import React, {Component} from 'react'
import Signup from './Signup'
import Login from './Login'

export default class AccountContainer extends Component {

   state = {
     showSignup: true,
     loginInfo: '',
     signupInfo: {name: '', email: ''}
   }

   toggleSignup = () => {
     this.setState(prevState => {
       return {
         showSignup: !prevState.showSignup
       }
     })
   }

   updateSignup = (key, value) => {
     this.setState(prevState => {
       return {
       signupInfo: {
         ...prevState.signupInfo,
         [key]: value
       }
     }})
   }

   updateLogin = (email) => {
     this.setState({
       loginInfo: email
     })
   }

   submitLogin = () => {
     let email = this.state.loginInfo
     fetch('http://localhost:3000/api/v1/login',
     {method: "POST",
      headers: {"Content-Type": "application/json", "Accept": "application/json"},
      body: JSON.stringify({email})
    })
    .then(res => res.json())
    .then(res => {
      this.props.setUser(res.data)
    }
  )
   }

   submitSignup = () => {
     let obj = this.state.signupInfo
     fetch('http://localhost:3000/api/v1/signup',
     {method: "POST",
      headers: {"Content-Type": "application/json", "Accept": "application/json"},
      body: JSON.stringify(obj)
    })
    .then(res => res.json())
    .then(res => {
      this.props.setUser(res.data)
    })
   }

   render() {
    return (
      <div>
      { this.state.showSignup ? <Signup toggleSignup={this.toggleSignup} updateSignup={this.updateSignup} submitSignup={this.submitSignup}/> :
         <Login toggleSignup={this.toggleSignup} submitLogin={this.submitLogin} updateLogin={this.updateLogin}/>}
      </div>
    )
 }
}
