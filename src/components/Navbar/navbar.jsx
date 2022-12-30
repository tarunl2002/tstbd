import React from 'react';
import {Nav,NavLink,Bars,NavMenu,NavBtn,NavBtnLink,} from './NavbarElements';

const Navbar = () => {
   
    return (<>
	<Nav>
    <Bars />
		<NavMenu>
            <NavLink href="#Home">
                Home
            </NavLink>
            <NavLink to='/about' activeStyle>
                About
            </NavLink>
            <NavLink to='/events' activeStyle>
                Events
            </NavLink>
            <NavLink to='/dommains' activeStyle>
                Domains
            </NavLink>
            <NavLink to='/team' activeStyle>
                Team
            </NavLink>
            <NavLink to='/contact' activeStyle>
                Contact Us
            </NavLink>
		</NavMenu>
		<NavBtn>
		    <NavBtnLink to='/Register'>Register</NavBtnLink>
	    </NavBtn>
	</Nav>
    
	</>
);
};

export default Navbar;
