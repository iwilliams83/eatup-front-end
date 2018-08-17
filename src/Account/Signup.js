import React from 'react'

const Signup = ( props ) => {

  const { toggleSignup, submitSignup, updateSignup} = props

    return (
      <div>
        Signup
        <form >
          <input type="text" name="name" onChange={(e) => updateSignup(e.target.name, e.target.value)} placeholder="Name"/>
          <input type="email" name="email" onChange={(e) => updateSignup(e.target.name, e.target.value)} placeholder="Email"/>
        </form>
        <button type="submit" onClick={submitSignup}>Signup</button><br/><br/>
        <span>Already have an account?</span><br/>
        <button onClick={toggleSignup}>Login</button>
      </div>
    )
}

export default Signup
