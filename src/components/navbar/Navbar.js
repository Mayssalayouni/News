import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../navbar/Navbar.css";
import { useTranslation } from 'react-i18next';


const Header = () => {
  const { t, i18n } = useTranslation();

  const [Toggle, setToggle] = useState(false);



  return (
    <header className="header posit_rela">
      <div className="Header_container _container">
        <div className="logo">
          <Link to={"/"}>
            <img src="src/components/navbar/img/logo.jpg" className="logo_nav" alt="" />
          </Link>
          <div className="menu_mobile">
            {Toggle ? (
              <button className="btn_menu" onClick={() => setToggle(!Toggle)}>
                <i className="fa-regular fa-xmark-large"></i>
              </button>
            ) : (
              <button className="btn_menu" onClick={() => setToggle(!Toggle)}>
                <i className="fa-light fa-bars"></i>
              </button>
            )}
          </div>
        </div>
        <div className={Toggle ? "shaw menu w-full " : "menu w-full"}>
          <ul className="nav_items h-fit  ">
            <li className="nav_item">
              <Link to={"/"} className="nav_link">
                {t("Header.Home")}
              </Link>
            </li>
            <li className="nav_item">
              <Link to={"/recherche"} className={"nav_link"}>
                {t("Header.Find_Doctor")}
              </Link>
            </li>
            <li className="nav_item">
              <Link to={"/about"} className="nav_link">
                {t("Header.About")}
              </Link>
            </li>
            <li className="nav_item">
              <Link to={"/contact"} className={"nav_link"}>
                {t("Header.Contact")}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
