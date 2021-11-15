import React from 'react';
import './Footer.css';
import { MdLocationOn } from 'react-icons/md';
import { ImMobile } from 'react-icons/im';
import { FaFacebookSquare } from 'react-icons/fa';
import { BsTwitter } from 'react-icons/bs';
import { AiFillInstagram } from 'react-icons/ai';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className="container pt-3">
            < Container>
                <Row className="footer-text">
                    <Col sm={12} md={12} lg={4} >
                        <h3>Our Partner</h3>
                        <ul>
                            <li>Honda</li>
                            <li>Yamaha</li>
                            <li>Hero</li>
                            <li>TVS</li>
                            <li>Bajaj</li>
                            <li>Lifan</li>
                        </ul>
                    </Col>
                    <Col sm={12} md={12} lg={4}>
                        <h3>Contact US</h3>
                        <p><MdLocationOn size="25px" /> 1212, Kadamtoli, Beside Jamuna Bank, 4201 Chottogram, Bangladesh</p>
                        <p> <ImMobile size="20px" /> +008801256988789</p>
                        <p><ImMobile size="20px" />  +008801256988710</p>
                    </Col>
                    <Col sm={12} md={12} lg={4}>
                        <h3>Follow Us</h3>
                        <p><FaFacebookSquare /> Facebook</p>
                        <p><AiFillInstagram /> Instagram</p>
                        <p><BsTwitter /> Twitter</p>
                    </Col>
                </Row>
            </Container >
        </div>

    );
};

export default Footer;