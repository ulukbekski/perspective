import React from "react";

import Slider from "react-slick";
import { Container } from "reactstrap";
import { Link } from "react-router-dom";

import "../../styles/hero-slider.css";

const HeroSlider = () => {
  const settings = {
    fade: true,
    speed: 3000,
    autoplaySpeed: 5000,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
  };
  return (
    <Slider {...settings} className="hero__slider">
      <div className="slider__item slider__item-01 mt0">
        <Container>
          <div className="slider__content ">
            <h4 className="text-light mb-3">{}</h4>
            <h1 className="text-light mb-4">
              Получи индивидуальную программу поступления в США и Канаду
            </h1>
            <h5 className="text_light_p">Основана 2009 году</h5>
            <div className="consalting">
              <input placeholder="ФИО" className="for_registr" type="text" />
              <input
                placeholder="Телефон"
                className="for_registr"
                type="text"
              />
              <input placeholder="Email" className="for_registr" type="text" />
              <button className="button_for_registr">Консультация</button>
            </div>
            {/* <button className="btn reserve__btn mt-4">
              <Link to="/cars">Посмотреть</Link>
            </button> */}
          </div>
        </Container>
      </div>

      <div className="slider__item slider__item-02 mt0">
        <Container>
          <div className="slider__content ">
            <h4 className="text-light mb-3">{}</h4>
            <h1 className="text-light mb-4">
              Получи индивидуальную программу поступления в США и Канаду
            </h1>
            <h5 className="text_light_p">Основана 2009 году</h5>
            <div className="consalting">
              <input placeholder="ФИО" className="for_registr" type="text" />
              <input
                placeholder="Телефон"
                className="for_registr"
                type="text"
              />
              <input placeholder="Email" className="for_registr" type="text" />
              <button className="button_for_registr">Консультация</button>
            </div>
            {/* <button className="btn reserve__btn mt-4">
              <Link to="/cars">Посмотреть</Link>
            </button> */}
          </div>
        </Container>
      </div>

      <div className="slider__item slider__item-03 mt0">
        <Container>
          <div className="slider__content ">
            <h4 className="text-light mb-3">{/*Text*/}</h4>
            <h1 className="text-light mb-4">
              Получи индивидуальную программу поступления в США и Канаду
            </h1>
            <h5 className="text_light_p">Основана 2009 году</h5>
            <div className="consalting">
              <input placeholder="ФИО" className="for_registr" type="text" />
              <input
                placeholder="Телефон"
                className="for_registr"
                type="text"
              />
              <input placeholder="Email" className="for_registr" type="text" />
              <button className="button_for_registr">Консультация</button>
            </div>
            {/* <button className="btn reserve__btn mt-4">
              <Link to="/cars">Посмотреть</Link>
            </button> */}
          </div>
        </Container>
      </div>
    </Slider>
  );
};

export default HeroSlider;
