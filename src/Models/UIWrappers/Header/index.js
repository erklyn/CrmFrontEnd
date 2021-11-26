import React from 'react';
import { Link } from 'react-router-dom';
import * as Icons from "react-icons/io";
import './header.css';
import { navItems } from './NavbarItems';

const Header = ({ }) => {
  return (
    <>
      <nav className='navbar'>
        <Link
          to='/'
          className ='navbar-logo'
        > SerinCRM
        <Icons.IoIosBriefcase/>
        </Link>
        <ul className='nav-Items'>
          {navItems.map(item => {
            return(
            <li key={item.id} className ={item.cName}>
              <Link to={item.path}>{item.title}</Link>
            </li>
            )
          })}
        </ul>


      </nav>
    </>
  );
};

export default Header;