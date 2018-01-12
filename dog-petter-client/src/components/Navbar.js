import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="Nav">
      <ul>
        <li><NavLink to='/' header>DogPetter</NavLink></li>
        <li><NavLink to='/dogs' name='Dogs'>Dogs</NavLink></li>
        <li><NavLink to='/greeting-dogs' name='GreetingDogs'>Greeting Dogs</NavLink></li>
        <li><NavLink to='/about' name='About'>About</NavLink></li>
      </ul>
    </div>
  )
}

export default Navbar;
