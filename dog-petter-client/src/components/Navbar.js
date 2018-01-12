import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="Nav">
      <NavLink to='/' header>DogPetter</NavLink>
      &#124;
      <NavLink to='/dogs' name='Dogs'>Dogs</NavLink>
      &#124;
      <NavLink to='/about' name='About'>About</NavLink>
    </div>
  )
}

export default Navbar;
