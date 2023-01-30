import React from "react";

import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/footer.css";
import car  from "../../assets/all-images/lion-logo-transparent-8.png";
const quickLinks = [
  {
    path: "/about",
    display: "О нас",
  },

  {
    path: "#",
    display: "Политика конфиденциальности",
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

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4" md="4" sm="12">
            <div className="logo footer__logo">
              <h1>
                <Link to="/home" className=" d-flex align-items-center gap-2">
                <img className="hhh" src={car} alt="логотип" />
                  <span>
                    Perspective
                  </span>
                </Link>
              </h1>
            </div>
            <p className="footer__logo-content">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, ipsa, blanditiis totam excepturi suscipit at veritatis molestias eligendi architecto cupiditate ad illum. Quaerat quo, vel repellendus itaque error aliquam. Praesentium!
            </p>
          </Col>

          <Col lg="2" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title">Другие страницы</h5>
              <ListGroup>
                {quickLinks.map((item, index) => (
                  <ListGroupItem key={index} className="p-0 mt-3 quick__link">
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </div>
          </Col>

          <Col lg="3" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title mb-4">Главный офис</h5>
              <p className="office__info">Ош, ул. Ленина 318</p>
              <p className="office__info">Phone: +996559007650</p>

              <p className="office__info">Email: Itpark@gmail.com</p>

              <p className="office__info">Открыто: с 10:00 утра до 19:00 вечера
              </p>
            </div>
          </Col>

          <Col lg="3" md="4" sm="12">
            <div className="mb-4">
              <h5 className="footer__link-title">Новости</h5>
              <p className="section__description">Подписаться на наши ленту новостей</p>
              <div className="newsletter">
                <input type="email" placeholder="Email" />
                <span>
                  <i class="ri-send-plane-line"></i>
                </span>
              </div>
            </div>
          </Col>

          <Col lg="12">
            <div className="footer__bottom">
              <p className="section__description d-flex align-items-center justify-content-center gap-1 pt-4">
                <i class="ri-copyright-line"></i>Авторские права {year}, Разработано академией ItPark. Все права защищены.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
