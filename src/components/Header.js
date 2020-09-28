import React from 'react';
import { NavLink } from 'react-router-dom';


const Header = () => (
  <header>
    <h1>Expensify</h1>
    <NavLink to='/'>Go to the home page</NavLink>
    <NavLink to='/create'>Go to the create page</NavLink>
    <NavLink to='/help'>Go to the help page</NavLink>
  </header>
)

export default Header;