// components/Navbar/index.js
//npm i react-router-dom react-icons styled-components@5.3.10

import React from "react";
import "./index.css";
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from "./NavbarElements";

const Navbar = () => {
    // const h1style = {
    //     color: 'red',
    //     padding: '10px',
    //     fontFamily: 'Arial',
    //     left:"18px",
    //  fontWeight:500,
    //  fontSize:'30px',
    //  marginLeft:'-4rem',
    //  fontfamily: 'Arial, sansserif',
    //  textalign: 'center',
        
    
        
    //   };
      const NavMenustyle={
        padding: '10px',
    margin: '5px',
    display: 'flex',
    justifyContent: 'flex-start',
    color:'white',
    

    padding: '10px',
    marginLeft:"30rem",
    textTransform: "uppercase",
      };
      const linkStyle = {
        margin: '0 20px', // Adjust the margin as needed
        color:'white'
        
      };
      const navstyle ={
        background:'rgba(0,0,0,0.2)',
      }

      return (
        <>
            <Nav style={navstyle}>

                <Bars />
                <h1 >Markshop</h1>
                
                <NavMenu style={NavMenustyle}>
                
                    
                    <NavLink to="/home" >
                        Home
                    </NavLink>
                    <NavLink to="/gallery" style={linkStyle} activeStyle>
                        Gallery
                    </NavLink>
                    <NavLink to="/about"  style={linkStyle} activeStyle>
                        About
                    </NavLink>
                    <NavLink to="/contact" style={linkStyle} activeStyle>
                        Contact
                    </NavLink>
                    {/* <NavLink to="/sign-up" activeStyle>
                        Sign Up
                    </NavLink> */}
                    {/* Second Nav */}
                    {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
                </NavMenu>
                {/* <NavBtn>
                    <NavBtnLink to="/signin">
                        Sign In
                    </NavBtnLink>
                </NavBtn> */}
            </Nav>
        </>
    );
};

export default Navbar;

