import React from 'react'

const Signup = ( props ) => {

  const { toggleSignup, submitSignup, updateSignup} = props

    return (
      <div>
        Signup
        <form >
          <input type="text" name="name" onChange={(e) => updateSignup(e.target.name, e.target.value)}/>
          <input type="email" name="email" onChange={(e) => updateSignup(e.target.name, e.target.value)}/>
        </form>
        <button type="submit" onClick={submitSignup}>Signup</button>
        <button onClick={toggleSignup}>Login</button>
      </div>
    )
}

export default Signup
