import { NavLink } from 'react-router-dom'
import React from 'react'

const WrongPage = () => {
  return (
    <div>
        WrongPage go back to  <NavLink className={' bg-blue-400 text-center p-2 rounded-md'} to='/' >  home page </NavLink>
    </div>
  )
}

export default WrongPage