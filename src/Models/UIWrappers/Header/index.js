import React , {useEffect , useState} from 'react';
import { Link } from 'react-router-dom';
import * as Icons from "react-icons/io";
import './header.css';
import { navItems  , navItemsAdmin} from './NavbarItems';
import Axios from 'axios';
import {useNavigate} from 'react-router-dom';
import {useCustomer } from '/Volumes/Data/projeler/crm/client/src/Controllers/StoreSession'
Axios.defaults.withCredentials = true;




const Header = () => {

  const {customer , setCustomer } = useCustomer();
  let navigate = useNavigate();

      const handleClick = () => {
      Axios.get(''+process.env.REACT_APP_URL+'/api/logout');
      navigate('/');
      setCustomer(null);
      }

  if(customer.isAdmin){
    return(
<>
      <nav className='navbar'>
        <Link
          to='/'
          className ='navbar-logo'
        > SerinCRM
        <Icons.IoIosBriefcase/>
        </Link>
        <ul className='nav-Items'>
          {navItemsAdmin.map(item => {
            return(
            <li key={item.id} className ={item.cName}>
              <Link to={item.path}>{item.title}</Link>
            </li>
            )
          })}
          <li className='logout'>
              <button onClick = {handleClick
                  
              }> Çıkış </button>
          </li>
        </ul>


      </nav>
      
    </>
    )
  }else{
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
          <li className='logout'>
              <button onClick = {handleClick
                  
              }> Çıkış </button>
          </li>
        </ul>


      </nav>
      
    </>
  );
}
};

export default Header;