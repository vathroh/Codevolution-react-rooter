import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth } from './Auth'

const Navbar = () => {

  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? 'bold' : 'normal',
    }
  }

  const auth = useAuth()

  return (
    <nav className='primary-nav'>
      <NavLink to="/" style={navLinkStyles}>Home</NavLink>
      <NavLink to="/about" style={navLinkStyles}>About</NavLink>
      <NavLink to="/products" style={navLinkStyles}>Products</NavLink>
      <NavLink to="/users" style={navLinkStyles}>Users</NavLink>
      <NavLink to="/blog" style={navLinkStyles}>Blog</NavLink>
      {
        auth.user && (
          <NavLink to="/profile" style={navLinkStyles}>Profile</NavLink>
        )
      }
      {
        !auth.user && (
          <NavLink to="/login" style={navLinkStyles}>login</NavLink>
        )
      }

    </nav>
  )
}

export default Navbar