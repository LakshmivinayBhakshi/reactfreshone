import React from 'react';
import '../component/NavBar.css';
import Logo from '../images/avigna-logo.jpg'
// import {} 
const NavBar = () => {
    return (
        <body>
        <navbar>
            <div className='navbardiv'>
            <div className='navbarlogodiv'> 
                <img src={Logo} className='navbarlogo'></img>
            </div>
            <div className='navcontentdiv'>
                <a href='/'>Home</a>
                <a href='/About' >About</a>
                <a href='/contactus'>Contact Us</a>
            </div>
            </div>
        </navbar>
        </body>
    );
};

export default NavBar;