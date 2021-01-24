import React, { useState} from 'react'
import styled from 'styled-components';
import { NavLink,Link } from 'react-router-dom'
import { CgMenuRightAlt } from "react-icons/cg";
import logo from '../../media/images/logo.png'
import SideBar from './SideBar';
import { MdClose } from "react-icons/md";

const NavBar = styled.nav`
display:flex;
position:fixed;
justify-content:space-between;
height:80px;
width:100%;
z-index:2;
back
`
const NavLeft = styled.div``

const NavRight = styled.div`
padding:16px 16px;
display:inline-flex;
`

const BrandLogo = styled(Link)`
    text-decoration:none;
    padding-left:22px;
`
const BrandImage = styled.img`
width:64px;
height:64px;
object-fit:cover;
margin-top:10px;
margin-left:25px;
`

const NavList = styled.div`
display:flex;
padding:16px;
align-items:center;

@media screen and (max-width:768px){
    display:none;
}`

const NavLinks = styled(NavLink)`
display:flex;
color:#fff;
text-decoration:none;
align-items:center;
padding:8px 16px;
font-size:20px;
font-weight:600;
height:max-content;

&.active{
    border-bottom:3px solid #C9AA6A;
}
`//#343561 - blue
const MobileMenu = styled(CgMenuRightAlt)`
display:none;

@media screen and (max-width:768px){
    display:block;
    cursor:pointer;
    color:#fff;
    padding-right:8px;
    height:38px;
    width:38px
}
`
const SideBarClose = styled(MdClose)`
color:#fff;
width:38px;
height:38px
`
const Icon = styled.div`
position:absolute;
top:1.2rem;
right:1.5rem;
cursor:pointer;
display:none;

@media screen and (max-width:768px){
     display:block;
}
`

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
    const handleSideBa = () => {
    setShowMenu(!showMenu);
    }
    return (
        <NavBar>
            <NavLeft>
            <BrandLogo to='/'>
                <BrandImage src={logo} alt="brand Logo"/>
                </BrandLogo>
            </NavLeft>
            <NavRight>
                <NavList>
                    <NavLinks to='/' sel>Home</NavLinks>
                    <NavLinks to='/about'>About</NavLinks>
                    <NavLinks to='/services'>Services</NavLinks>
                    <NavLinks to='/contact-us'>Contact us</NavLinks>
                </NavList>
                {!showMenu ? <MobileMenu onClick={() => handleSideBa()} /> : ( 
                    <Icon>
                        <SideBarClose onClick={() => handleSideBa()} />
                        <SideBar/>
                    </Icon>
                    )}
                </NavRight>
        </NavBar>
    )
}

export default Navbar
