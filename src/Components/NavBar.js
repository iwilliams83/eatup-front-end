import React from 'react'
import logo from '../Eat-Up-Logo.png'

const NavBar = (props) => {

    return (
      <div>
        <img src={logo} />
        { props.activeUser.id === 0 ? <h2>Welcome</h2> : <div><h2>Hi, {props.activeUser.name}!</h2><br/><button onClick={props.handleLogout}>Logout</button></div>}
      </div>
    )

}

export default NavBar
