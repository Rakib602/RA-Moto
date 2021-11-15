import React from 'react';
import './Banner.css';
import { Carousel, Col, Container, Row } from 'react-bootstrap';
import { RiEBikeFill } from 'react-icons/ri';

import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div className="banner">
      <Container>
        <Row>
          <Col sm={12} md={12} lg={6} className="banner-text">
            <h1>Ready to Run</h1>
            <p>
              Biking is not just a passion, it is a lifestyle.It’s your road
              others can ride it with you but no one can ride it for you.Biker heaven, Free road, Full tank, Full throttle.
            </p>
            <Link to="/allBikes"><button className="btn"><RiEBikeFill />Exprole All Bikes</button></Link>

          </Col>
          <Col sm={12} md={12} lg={6} className="banner-img">
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://i.ibb.co/C8C8wt1/R-15.png"
                  alt="Yamaha R15"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://i.ibb.co/fYkDcFj/Suzuki.png"
                  alt="Suzuki GSX-R"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://i.ibb.co/4RCWgKT/KTM.png"
                  alt="KTM Duke"
                />
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </div>
  );
}


export default Banner;