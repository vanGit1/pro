import React from 'react'
import {NavLink} from 'react-router-dom'
import './Navbar.scss'

const Navbar = () => {
  return (
		<div>
				<nav className="nav">
					<NavLink className="site_title" to="/">Home</NavLink>
					<NavLink to="/contacts">Contacts</NavLink>
					<NavLink to="/cart">Cart</NavLink>
				</nav>
		</div>
	);
}

export default Navbar;