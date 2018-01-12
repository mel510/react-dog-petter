import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="Nav">
      <NavLink to='/' header>DogPetter</NavLink>
      <NavLink to='/dogs' name='Dogs'></NavLink>
      <NavLink to='/about' name='About'></NavLink>
    </div>
  )
}

export default Navbar;
