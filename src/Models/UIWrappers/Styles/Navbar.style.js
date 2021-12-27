import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const NavbarContainer = styled.nav`
    width: 100%;
    height: ${(props) => (props.extendNavbar ? "100vh" : "80px")};
    background-color: white;
    display: flex;
    flex-direction: column;
    border-bottom-style: solid ;
    border-color: #2E8BC0;
   @media (min-width: 800px) {
    height: 80px;
  }
`

export const LeftContainer = styled.div`
 flex: 70%;
 display: flex;
 align-items: center;
 padding-left: 5%;
`

export const RightContainer = styled.div`
flex: 30%;
display: flex;
justify-content:flex-end;
padding-right: 50px;

`

export const NavbarExtension = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 800px) {
    display: none;
  }

`
export const NavbarLinkExtended = styled(Link)`
  color: #2E8BC0;
  font-size: x-large;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  margin: 10px;
  
`;

export const NavbarLinkContainer = styled.div`
    display: flex;
`



export const NavbarInnerContainer = styled.div`
width: 100%;
height: 80px;
display: flex;
`

export const NavbarLink = styled(Link)`
    color: #2E8BC0;
    font-size: x-large;
    text-decoration: none;
    margin: 10px;
    
    @media (max-width: 800px) {
        display: none;
    }
`
export const NavbarLinkAdmin = styled(Link)`
    color: #2E8BC0;
    font-size: x-large;
    text-decoration: none;
    margin: 10px;
    display: ${(props) => (props.isAdmin ? "block" : "none")};
    @media (max-width: 800px) {
        display: none;
    } 
`
export const NavbarLinkAdminExtended = styled(Link)`
    color: #2E8BC0;
    font-size: x-large; 
    text-decoration: none;
    margin: 10px;
    display: ${(props) => (props.isAdmin ? "block" : "none")};

`

export const Logo = styled.img`
    margin: 10px;
    max-width: 180px;
    height: auto;
`
export const OpenLinksButton = styled.button`
    width: 70px;
    background: none;
    height: 50px;
    border: none;
    color: #2E8BC0;
    font-size: 45px;
    cursor: pointer;

    @media (min-width: 800px) {
        display: none;
    } 
`
export const Logout = styled.button`
    width: 50px;
    background: none;
    height: 30px;
    border: none;
    color: #2E8BC0;
    font-size: x-large;
    cursor: pointer;
    margin: 10px;

    @media (max-width: 800px) {
        display: none;
    } 
`
export const LogoutExtended = styled.button`
    width: 50px;
    background: none;
    height: 30px;
    border: none;
    color: #2E8BC0;
    font-size: x-large;
    cursor: pointer;
    margin: 10px;
`