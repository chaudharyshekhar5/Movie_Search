import React from 'react'
import "./Button.css"
import { NavLink } from 'react-router-dom'
function Button() {
  return (
    <div>
      <button> <span className="text"><NavLink to="/">Go Back</NavLink></span>
  <span className="blob"></span>
  <span className="blob"></span>
  <span className="blob"></span>
  <span className="blob"></span>
</button>
    </div>
  )
}

export default Button
