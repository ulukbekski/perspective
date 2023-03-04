import React from "react";

import HeroSlider from "../components/UI/HeroSlider";
import Helmet from "../components/Helmet/Helmet";

import { Container, Row, Col } from "reactstrap";

import AboutSection from "../components/UI/AboutSection";
import ServicesList from "../components/UI/ServicesList";

import Testimonial from "../components/UI/Testimonial";
import BlogList from "../components/UI/BlogList";
import "../styles/hero-slider.css";

const Home = () => {
  return (
    <Helmet title="Главная">
      <section className="p-0 hero__slider-section">
        <HeroSlider />

        <div className="consalting">
          <input placeholder="ФИО" className="for_registr" type="text" />
          <input placeholder="Телефон" className="for_registr" type="text" />
          <input placeholder="Email" className="for_registr" type="text" />
          <button className="button_for_registr">Консультация</button>
        </div>

        {/* <div className="hero__form">
          <Container>
            <Row className="form__row">
              <Col lg="4" md="4">
                <div className="find__cars-left">
                  <h2>Find your best car here</h2>
                </div>
              </Col>

              <Col lg="8" md="8" sm="12">
                <FindCarForm />
              </Col>
            </Row>
          </Container>
        </div> */}
      </section>

      <AboutSection />

      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle"></h6>
              <h2 className="section__title">Наши лучшие стороны</h2>
            </Col>

            <ServicesList />
          </Row>
        </Container>
      </section>

      {/* <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center mb-5">
              <h6 className="section__subtitle">Come with</h6>
              <h2 className="section__title">Hot Offers</h2>
            </Col>

            {[1,2,3,4,5,6,7].slice(0, 6).map((item) => (
              <CarItem item={item} key={item.id} />
            ))}
          </Row>
        </Container>
      </section> */}

      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-4 text-center">
              <h6 className="section__subtitle"> </h6>
              <h2 className="section__title">Отзывы наших студентов</h2>
            </Col>

            <Testimonial />
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle"></h6>
              <h2 className="section__title">Последние блоги</h2>
            </Col>

            <BlogList />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
