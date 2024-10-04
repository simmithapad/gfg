import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from "../../assets/logo.png";
import './Navbar.css';

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  // Change background color on scroll
  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeBackground);
    return () => {
      window.removeEventListener('scroll', changeBackground);
    };
  }, []);

  return (
    <nav className={navbar ? 'navbar navbar-active' : 'navbar'}>
      <div className="navbar-logo">
        <Link to="/" className="logo">
          <img src={Logo} alt="Sports Rental Logo" className="logo-image" />
        </Link>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/rentals">Rentals</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;






// import React, { useState } from 'react'
// import './Navbar.css'
// import { assets } from '../../../src/assets/assets.js'
// const Navbar = () => {

//   const [menu, setMenu]  = useState("home")
//   return (
//     <div className='navbar' >
//       <img src={assets.logo} alt = "" className = "logo"/>
//       <ul className = "navbar-menu">
//         <li onClick={()=>setMenu("home")} className={menu ==="home"?"active":""}>home</li>
//         <li onClick={()=>setMenu("menu")} className={menu ==="menu"?"active":""}>menu</li>
//         <li onClick={()=>setMenu("mobile-app")} className={menu ==="mobile-app"?"active":""}>mobile-app</li>
//         <li onClick={()=>setMenu("contact us")} className={menu ==="contact us"?"active":""}>contact us</li>
//       </ul>
//       <div className= "navbar-right">
//       <img src = {assets.search_icon} alt="" />
//       <div className = "navbar-search-icon">
//         <img src = {assets.basket_icon} alt="" />
//         <div className = "dot"></div>
//       </div>
//       <button>sign in</button>
//       </div>
//     </div>
//   )
// }

// export default Navbar
