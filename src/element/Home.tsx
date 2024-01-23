import { NavLink } from 'react-router-dom'
import React from 'react'

const Home = () => {
  return (
    <div>
        <h1> welcome </h1>
        <div>
            <NavLink to={'/login'}> login </NavLink>
            <NavLink to={'/signup'}> signup </NavLink>
        </div>
    </div>
  )
}

export default Home