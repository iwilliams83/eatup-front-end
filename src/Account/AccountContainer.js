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
     }, () => console.log(this.state))
   }

   updateLogin = (string) => {

   }

   updateSignup = (key, value) => {
     this.setState({
       signupInfo: {
         key: value
       }
     })
   }

   submitSignup = () => {
     console.log("Getting there")
   }

   render() {
    return (
      <div>
      { this.state.showSignup ? <Signup toggleSignup={this.toggleSignup} updateSignup={this.updateSignup} submitSignup={this.submitSignup}/> :
         <Login toggleSignup={this.toggleSignup}/>}
      </div>
    )
 }
}
