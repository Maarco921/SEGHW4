import React from 'react'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'

const SignedInLinks = () => {
  return (
    <div>
      <ul className="right">
        <li><NavLink to='/NewPost'>New Story</NavLink></li>
        <li><NavLink to='/'>Log Out</NavLink></li>
        <li><Link to='/' className="btn btn-floating black">NN</Link></li>
      </ul>
    </div>
  )
}

export default SignedInLinks