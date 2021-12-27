import React , {useState}from 'react'
import {
    NavbarContainer , 
    LeftContainer  , 
    RightContainer ,
    NavbarExtension , 
    NavbarInnerContainer, 
    NavbarLinkContainer,
    Logo,
    NavbarLink,
    OpenLinksButton,
    NavbarLinkExtended,
    Logout,
    LogoutExtended,
    NavbarLinkAdmin,
    NavbarLinkAdminExtended
} from '../Styles/Navbar.style';
import { useNavigate } from 'react-router-dom';
import LogoImage from '../Assets/Logo.png';
import Axios from 'axios';
import {useCustomer } from '/Volumes/Data/projeler/crm/client/src/Controllers/StoreSession'
Axios.defaults.withCredentials = true;




function Navbar() {
    const {customer , setCustomer } = useCustomer();
    let navigate = useNavigate();
    const [extendNavbar , setExtendNavbar] = useState(false);


    
        const handleClick = () => {
            Axios.get(''+process.env.REACT_APP_URL+'/api/auth/logout');
           navigate('/');
              setCustomer(null);
         }



    return (
       <NavbarContainer extendNavbar={extendNavbar} >
           <NavbarInnerContainer>
           <LeftContainer>
               <NavbarLinkContainer >
                    <NavbarLink to='/'>
                        Anasayfa
                    </NavbarLink>
                    <NavbarLink to='/musteriler'>
                        Müşteriler
                    </NavbarLink>
                    <NavbarLink to='/yeni-musteri'>
                        Yeni Müşteri 
                    </NavbarLink>
                    <NavbarLinkAdmin isAdmin = {customer.isAdmin} to='/register' >
                        Yeni Temsilci Oluştur
                    </NavbarLinkAdmin>
                    {customer &&(
                            <Logout onClick={handleClick}>Çıkış</Logout>
                        )
                    }
                    <OpenLinksButton
              onClick={() => {
                setExtendNavbar((curr) => !curr);
              }}
            >
              {extendNavbar ? <>&#10005;</> : <> &#8801;</>}
            </OpenLinksButton>
               </NavbarLinkContainer>
           </LeftContainer>
           <RightContainer>
               <Logo src={LogoImage}>
               </Logo>
           </RightContainer>
           </NavbarInnerContainer>
           {extendNavbar && (
           <NavbarExtension>
           <NavbarLinkExtended to='/'>
                        Anasayfa
                    </NavbarLinkExtended>
                    <NavbarLinkExtended to='/musteriler'>
                        Müşteriler
                    </NavbarLinkExtended>
                    <NavbarLinkExtended to='/yeni-musteri'>
                        Yeni Müşteri 
                    </NavbarLinkExtended>
                    <NavbarLinkAdminExtended to='/register' isAdmin = {customer.isAdmin}>
                        Yeni Temsilci Oluştur
                    </NavbarLinkAdminExtended>
                    {customer &&(
                            <LogoutExtended onClick={handleClick}>Çıkış</LogoutExtended>
                        )
                    }
           </NavbarExtension>
            )}
       </NavbarContainer>
    );
}
export default Navbar;
