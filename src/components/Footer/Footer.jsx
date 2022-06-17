import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <nav class="navbar">
          <div class="logo">
            <a href="/">
              {" "}
              <img src="http://sports.com.kg/img/logo-light-grey.png" alt="" />
            </a>
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
              <a href="/">
                <img src="http://sports.com.kg/icon/facebook.png" alt="ff" />
              </a>
            </li>
            <li>
              <a href="/">
                <img src="http://sports.com.kg/icon/instagram.png" alt="ff" />
              </a>
            </li>
          </ul>
        </nav>

        <div className="copyright">
            <p>Copyright © 2021 by Еrmek Omorov</p>
        </div>
      </div>


    </div>
  );
};

export default Footer;
