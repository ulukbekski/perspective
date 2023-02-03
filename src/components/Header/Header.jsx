import React, { useRef } from "react";
import sperma from '../../assets/all-images/fa.png'
import { Container, Row, Col } from "reactstrap";
import { Link, NavLink } from "react-router-dom";
import "../../styles/header.css";
import logo from '../../assets/all-images/logo.png'
const navLinks = [
  {
    path: "/home",
    display: "Главная",
  },
  {
    path: "/about",
    display: "О нас",
  },
  {
    path: "/blogs",
    display: "Блоги",
  },
  {
    path: "/contact",
    display: "Связаться",
  },
];

const Header = () => {
  const menuRef = useRef(null);

  const toggleMenu = () => menuRef.current.classList.toggle("menu__active");

  return (
    <header className="header">

     

  
     

      <div className="header__parent">
      <div className="main__navbar">
        <Container>
         
          <div className="navigation__wrapper d-flex align-items-center justify-content-between">
            <span className="mobile__menu">
              <i class="ri-menu-line" onClick={toggleMenu}></i>
            </span>

            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
              <div className="menu">
              <Link to='/home'>
              <img className="logos" src={logo} alt="Картинка не загружено" />
              </Link>
                {navLinks.map((item, index) => (
                  <NavLink
                  
                    to={item.path}
                    className={(navClass) =>
                      navClass.isActive ? "nav__active nav__item" : "nav__item"
                    }
                    key={index}
                  >
                    {item.display}
                  </NavLink>
                ))}
              </div>
            </div>
            <button className="header__btn btn ">
                <Link to="/contact">
                  <i class="ri-phone-line"></i> Позвоните нам
                </Link>
              </button>
            {/* <div className="nav__right">
              <div className="search__box">
                <input type="text" placeholder="Search" />
                <span>
                  <i class="ri-search-line"></i>
                </span>
              </div>
            </div> */}
          </div>
        </Container>
      </div>
      </div>
    </header>
  );
};

export default Header;
