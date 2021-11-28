import React ,{useState}from 'react';
import { Link } from 'react-router-dom';
import * as Icons from "react-icons/io";
import './header.css';
import { navItems } from './NavbarItems';
import Dropdown from './Dropdown';

const Header = () => {
  const [dropdown, setDropdown] = useState(false);

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
            if (item.title === "Müşteriler") {
              return (
                <li
                  key={item.id}
                  className={item.cName}
                  onMouseEnter={() => setDropdown(true)}
                  onMouseLeave={() => setDropdown(false)}
                >
                  <Link to={item.path}>{item.title}</Link>
                  {dropdown && <Dropdown />}
                </li>
              );
            }


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