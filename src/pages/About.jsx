import React from "react";

import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import AboutSection from "../components/UI/AboutSection";
import { Container, Row, Col } from "reactstrap";
import iimg from "../assets/all-images/USAImages/IMG_6300.jpeg";
import OurMembers from "../components/UI/OurMembers";
import "../styles/about.css";

const About = () => {
  return (
    <Helmet title="О нас">
      <CommonSection title="О нас" />
      <AboutSection aboutClass="aboutPage" />

      <section className="about__page-section">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12">
              <div className="about__page-img">
                <img src={iimg} alt="" className="w-100 rounded-3" />
              </div>
            </Col>

            <Col lg="6" md="6" sm="12">
              <div className="about__page-content">
                <h2 className="section__titlen">
                  Обучение в США
                </h2>

                <p className="section__description">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Eveniet veniam assumenda aperiam accusantium ex autem
                  perferendis repellendus nostrum delectus. Nemo et dolore est
                  tempore rem minima adipisci magni dolorum ipsam.
                </p>

                <p className="section__description">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Eveniet veniam assumenda aperiam accusantium ex autem
                  perferendis repellendus nostrum delectus. Nemo et dolore est
                  tempore rem minima adipisci magni dolorum ipsam.
                </p>

               
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle">Эксперты</h6>
              <h2 className="section__title">Наша команда</h2>
            </Col>
            <OurMembers />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default About;
