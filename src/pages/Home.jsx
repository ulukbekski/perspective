import React from "react";

import HeroSlider from "../components/UI/HeroSlider";
import Helmet from "../components/Helmet/Helmet";

import { Container, Row, Col } from "reactstrap";

import AboutSection from "../components/UI/AboutSection";
import ServicesList from "../components/UI/ServicesList";

import Testimonial from "../components/UI/Testimonial";
import BlogList from "../components/UI/BlogList";
import "../styles/hero-slider.css";
import AboutSection2 from "../components/UI/AboutSection2";

const Home = () => {
  const [name, setName] = React.useState("")
  const [city, setCity] = React.useState("")
  const [tel, setTel] = React.useState("")
  console.log(name)
  return (
    <Helmet title="Главная">
      <section className="p-0 hero__slider-section">
        <HeroSlider />
        <form className="consalting" >
          <input placeholder="ФИО" onChange={()=>setName((event)=> event.target.value)} className="for_registr" type="text" name="name" />
          <input placeholder="Телефон" className="for_registr" type="tel"  id="phone" name="phone" pattern="996[\d]{9}" />
          <input placeholder="Город" className="for_registr" type="text" name="city" />
          <button className="button_for_registr" type="submit">Консультация</button>
        </form>

        
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
      <AboutSection2/>

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
