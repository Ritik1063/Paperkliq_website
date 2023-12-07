import React from 'react';
import { ReactDOM } from 'react';
import {BsMicrosoft} from "react-icons/bs";
import "./Navbar.css";
import Logo from "../Assets/PAPERKLIQ-logo.png";

const Navbar = () => {
  return (
    <section className='headerSection'>
      <div className='header flex'>
        <div className='brand'>
          <img src={Logo} alt='' className='logo'></img>
        </div>

        <div className='navbar'>
          <ul className='navList flex'>
            <li className='navListItem'>
              <a href='#' className='navLink'>Home</a>
            </li>
            <li className='navListItem'>
              <a href='#' className='navLink'>About</a>
            </li>
            <li className='navListItem'>
              <a href='#' className='navLink'>Products</a>
            </li>
            <li className='navListItem'>
              <a href='#' className='navLink'>Reviews</a>
            </li>
            <li className='navListItem'>
              <a href='#' className='navLink'>Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Navbar