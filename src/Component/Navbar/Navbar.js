import React from 'react';
import { Link} from 'react-router-dom';
import './Navbar.css';

function Navbar(
    
) {
    return (
        <div>
            <nav>
         <div class="menu-icon">
            <span class="fas fa-bars"></span>
         </div>
         <div class="logo">
           PBC
         </div>
         <div class="nav-items">
            <li><Link to='/'>Home </Link></li>
            <li><Link to='/about'>About Us </Link></li>
            <li><Link to='/contact'>Contact Us </Link></li>
            <li><Link to='/blog'>Blog </Link></li>
            <li><Link to='/events'>Events </Link></li>
         </div>
         <div class="search-icon">
            <span class="fas fa-search"></span>
         </div>
         <div class="cancel-icon">
            <span class="fas fa-times"></span>
         </div>
         <form action="#">
            <input type="search" class="search-data" placeholder="Search" required />
            <button type="submit" class="fas fa-search"></button>
         </form>
      </nav>
        </div>
    )
}

export default Navbar
