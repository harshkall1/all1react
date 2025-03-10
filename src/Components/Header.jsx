import React, { useState } from 'react';
import logo from '../assets/img/logo.jpg'
import { Link, NavLink } from 'react-router-dom';
import './style.css'

import { TiArrowSortedDown } from "react-icons/ti";
import { IoSearchSharp } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";
import { CgMenuRightAlt } from "react-icons/cg";


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <>
      <div className="header-top">
        <div className="container">
          <div className="row">
            {/* Top Left */}
            <div className="col-lg-6 align-self-center">
              <div className="top-info-left">
                <span><i className="fas fa-map-marker-alt"></i>All 1 Digital</span>
                <span><i className="far fa-envelope"></i> info@ALL1DIGITAL.com</span>
              </div>
            </div>
            {/* Top Right */}
            <div className="col-lg-6 align-self-center text-right">
              <div className="top-info-right">
                <div className="office-time">
                  <span><i className="far fa-clock"></i> Office Hour : 10:00am - 6:30pm</span>
                </div>
                <div className="top-social">
                  <ul>
                    <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                    <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                    <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                    <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
                    <li><a href="#"><i className="fas fa-phone"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <header>
        <div className="container innerHeader">
          <div className="logoarea">
            <Link to={'/'}>
              <img src={logo} alt="" className="logo" />
            </Link>
          </div>
          <nav className={isMenuOpen ? "shownav" : ''} >
            <button onClick={toggleMenu} className="closebtn">
              <IoCloseSharp size={35} />
            </button>
            <NavLink onClick={toggleMenu} to={'/'} >
              Home
            </NavLink  >
            <NavLink onClick={toggleMenu} to={'/about'} >
              About Us
            </NavLink >

            <NavLink onClick={toggleMenu} to={'/services'} className={"Dropdown"} >
              Services   
              <ul>
                <li>

                  <Link onClick={toggleMenu} to={'/services/marketing'}>Digital Marketing</Link>
                  <TiArrowSortedDown />
                </li>
                <li>

                  <Link onClick={toggleMenu} to={'/services/webbuild'}>Website Build</Link>
                  <TiArrowSortedDown />

                </li>
              </ul>
            </NavLink >
            <NavLink onClick={toggleMenu} to={'/faqs'} >
              Faqs
            </NavLink >
            <NavLink onClick={toggleMenu} to={'/projects'} >
              Projects
            </NavLink >
            <NavLink onClick={toggleMenu} to={'/career'} >
              Careers
            </NavLink >
            <NavLink onClick={toggleMenu} to={'/contact'} >
              Contact Us
            </NavLink >

            <button onClick={toggleSearch} className="navButton">
              {
                isSearchOpen ? <IoCloseSharp size={16} /> : <IoSearchSharp size={16} />
              }
            </button>
          </nav>
          <div onClick={toggleMenu} className={isMenuOpen ? "navoverlay showoverlay" : 'navoverlay'} ></div>
          <div className='navbtns'>

            <button onClick={toggleSearch} className="navButton">
              {
                isSearchOpen ? <IoCloseSharp size={32} /> : <IoSearchSharp size={32} />
              }
            </button>
            <button onClick={toggleMenu} className='menubtn'><CgMenuRightAlt size={35} /></button>
          </div>
        </div>
        <div className={isSearchOpen ? "container show-searchbox searchBar-area" : "container searchBar-area"}>
          <form >
            <input className='searchinput' type="text" placeholder='search your desired Service' />
            <button className='searchbuton' type="submit">Search</button>
          </form>
        </div>
      </header >

    </>
  );
};

export default Header;
