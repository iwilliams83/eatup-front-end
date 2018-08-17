import React from 'react'

const NavBar = (props) => {

    return (
      <div>
        <h2>EAT UP</h2>
        { props.activeUser.id === 0 ? null : <button onClick={props.handleLogout}>Logout</button>}
      </div>
    )

}

export default NavBar
