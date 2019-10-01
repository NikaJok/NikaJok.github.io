import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <div className='nav-wrapper red lighten-2'>
        <Link to='/' className='brand-logo'>
          <i className='material-icons'>cloud</i>Logo
        </Link>
        <ul className='right hide-on-med-and-down'>
          <li>
            <Link to=''>
              <i className='material-icons'>search</i>
            </Link>
          </li>
          <li>
            <Link to='/registration'>Sign In</Link>
          </li>
          <li>
            <Link to='/registration'>Sign Up</Link>
          </li>
          <li>
            <Link to='/about'>
              <i className='material-icons'>view_module</i>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
