import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <div className='nav-wrapper'>
        <Link to='/' href='#!' className='brand-logo'>
          <i className='material-icons'>cloud</i>Logo
        </Link>
        <ul className='right hide-on-med-and-down'>
          <li>
            <Link to='' href='sass.html'>
              <i className='material-icons'>search</i>
            </Link>
          </li>
          <li>
            <Link to='/About' href='badges.html'>
              <i className='material-icons'>view_module</i>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
