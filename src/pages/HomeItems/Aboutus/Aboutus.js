import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './Aboutus.css';
const AboutUS = () => {
    return (
        <div className="container">
            <Row className="about">
                <h2>About US</h2>
                <Col xs={12} lg={6} ><img src="https://i.ibb.co/W619snn/mechanic-1.png" alt="bike-mechanic" className="img-fluid" /></Col>
                <Col xs={12} lg={6} className="text">We are <span>RA-MOTO</span>. We give you all time best offer and best service warrenty. We have 10 exprienced MotorCycle Mechanic. They have more than 10 years exprienced in this feild. Any kind of probelm they help you repair your bike and help by giving advise about maintaining your bike.</Col>
            </Row>
        </div>
    );
};

export default AboutUS;