import React from "react";
import "../Navbar/Header.css";
const Header = () => {
  return (
    <div className="container">
      <nav class="navbar">
        <div class="logo">
         <a href="/"> <img src="http://sports.com.kg/img/logo.png" alt="" /></a> 
        </div>

        <ul class="nav-links">
          <input type="checkbox" id="checkbox_toggle" />
          <label for="checkbox_toggle" class="hamburger">
            &#9776;
          </label>

          <div class="menu">
            <li>
              <a href="/">Главная</a>
            </li>
            <li>
              <a href="/">Площадки</a>
            </li>
            <li class="services">
              <a href="/">На карте</a>
            </li>
            <li>
              <a href="/">Новости</a>
            </li>
          </div>
        </ul>

        <ul className="account">
          <li>
            <img src="http://sports.com.kg/icon/avatar.png" alt="ff" />
          </li>
        </ul>
      </nav>
    </div>







    
  );
};

export default Header;
