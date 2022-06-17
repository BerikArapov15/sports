/* eslint-disable no-undef */
import { Carousel } from "react-bootstrap";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./Homepage.css";
import { dataDigitalBestSeller } from "./data";
import { itemDigital } from "./items";
import { rewievs } from "./revievs";

const HomePage = () => {
  const news = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const settings = {
    focusOnSelect: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 2,
    speed: 500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <div className="hero">
        <Carousel card bg-dark text-white border-0>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="http://admin.sports.com.kg/media/sliders/%D1%81%D0%BB%D0%B0%D0%B9%D0%B4%D0%B5%D1%80.jpg"
              alt="First slide"
              width="150px"
              height="500px"
            />
            <Carousel.Caption>
              <h3>Men's clothing</h3>
              <p>Shop men's clothing at La collection</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://media.istockphoto.com/photos/women-clothes-hanging-on-hangers-clothing-rails-fashion-design-picture-id916092484?b=1&k=20&m=916092484&s=170667a&w=0&h=ZhslL_Qlwarbz-GF6dQ-DWswjhle_vzKQsNwpppVmic="
              alt="First slide"
              width="150px"
              height="500px"
            />
            <Carousel.Caption>
              <h3>Women's clothing</h3>
              <p>Shop women's clothing at La collection</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1554047310-ab6170fc7b10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8amV3ZWxsZXJ5JTIwYmFja2dyb3VuZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60 "
              alt="Second slide"
              width="150px"
              height="500px"
            />

            <Carousel.Caption>
              <h3>Jewellery</h3>
              <p>
                Shop The Season's Hottest Trends. Free shipping all over the
                Kyrgyzstan.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://media.istockphoto.com/photos/online-shopping-and-payment-man-using-tablet-with-shopping-cart-icon-picture-id1206800961?k=20&m=1206800961&s=612x612&w=0&h=hcPoUKhWtzHXR3PIAHVgPVZDZaO7R8yZ1wNPkUSsgwU="
              alt="Third slide"
              width="150px"
              height="500px"
            />

            <Carousel.Caption>
              <h3>Electronic</h3>
              <p>Electronic-Shop - We love Electronics.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      <div className="container">
        <div className="big-buttons">
          <div className="block-inner">
            <div className="item">
              <a href="/">
                <div className="big-button">
                  <div>
                    <img
                      src="http://sports.com.kg/icon/soccer-court.png"
                      alt=""
                    />
                    <p>Смотреть площадки</p>
                  </div>
                </div>
              </a>
            </div>
            <div className="item">
              <a href="/">
                <div className="big-button">
                  <div>
                    <img
                      src="http://sports.com.kg/icon/marker-icon.png"
                      alt=""
                    />
                    <p>Показать на карте</p>
                  </div>
                </div>
              </a>
            </div>
            <div className="item">
              <a href="/">
                <div className="big-button">
                  <div>
                    <img src="http://sports.com.kg/icon/news-icon.png" alt="" />
                    <p>Читать новости</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <section className="vid_square">
        <div className="container">
          <div className="header">
            <h1>Вид площадки</h1>
            <a href="/">ПОКАЗАТЬ ВСЕ</a>
          </div>

          <div className="slider">
            <div className="slick">
              <Slider {...settings}>
                {dataDigitalBestSeller.map((item) => (
                  <div className="card current">
                    <div className="card-top">
                      <img className="img" src={item.img} alt="" />
                      <div className="footers">
                        <a href="/">{item.category}</a>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </section>

      <section className="sports_grounds">
        <div className="container">
          <div className="sports-area">
            <div className="header">
              <h1>Спортивные площадки</h1>
              <a href="/">ПОКАЗАТЬ ВСЕ</a>
            </div>
          </div>

          <div className="sport-area-blog">
            <div className="inner">
              {itemDigital.map((elem) => (
                <div className="card">
                  <div className="sport-area-cart">
                    <a href="/">
                      <div className="img">
                        <img src={elem.img} alt="" />
                      </div>
                    </a>
                    <h2>{elem.name}</h2>
                    <p>{elem.location}</p>
                    <div className="area-price">
                      <p>{elem.price}</p>
                    </div>

                    <div className="footerr">
                      <a href="/">
                        <img
                          src="http://sports.com.kg/icon/favorites.png"
                          alt=""
                        />
                      </a>
                      <a className="btn" href="/">
                        Подробнее{" "}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="news">
        <div className="container">
          <div className="sports-area">
            <div className="header">
              <h1>Новости</h1>
              <a href="/">ПОКАЗАТЬ ВСЕ</a>
            </div>
          </div>
        </div>
      </section>

      <section className="reviews">
        <div className="container">
          <div className="sports-area">
            <div className="header">
              <h1>Отзывы</h1>
              <a href="/">Оставить отзыв</a>
            </div>
          </div>
           
          <div className="review-blog">
            <div className="carusel">
              <Slider {...news}>
                {rewievs.map((item) => (
                  <div className="carusel_item">
                    <div className="inner">
                      <div className="rewivew">
                        <p>{item.title}</p>
                        <div className="avatar">
                          <img src="http://sports.com.kg/icon/avatar.png" alt="" />
                          <p>{item.name}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
              dffsdf
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;