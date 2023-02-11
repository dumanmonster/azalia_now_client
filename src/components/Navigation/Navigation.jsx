import React from 'react'
import { Link } from 'react-router-dom'
import './Navigation.scss'

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to='/message'>Message Board</Link>
        </li>
        <li>
          <Link to='/average'>Average Numbers</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation