import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Navigate, useNavigate } from 'react-router';
import './WhatWeOffer.css';

const WhatWeOffer = () => {
    const [hover, setHover] = useState(false);
    const [services, setServices] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    const handleHover = () => {
        setHover(!hover)
    }
    const handleDetails = (id) => {
        const uri = `/service/${id}`
        navigate(uri)
    }
    return (
        <div className="what-we-offer py-5">
            <Container>
                <Row>
                    <Col lg={8} md={6} sm={12}>
                        <Row className="service-icon-row">
                            {
                                services.map(service =>
                                    <Col lg={4} md={6} sm={6} className="service-icon-box-container">
                                        <div className="service-icon-box">
                                            <div onClick={() => handleDetails(service._id)} >
                                                <div onMouseOver={handleHover} onMouseOut={handleHover} className="service-icon">
                                                    <img src={hover ? service.serviceHoverIcon : service.serviceIcon} alt="" />
                                                </div>
                                            </div>
                                            <div className="servicon-icon-text">
                                                <h6>{service.serviceName}</h6>
                                            </div>
                                        </div>
                                    </Col>
                                )
                            }
                        </Row>
                    </Col>
                    <Col lg={4} md={6} sm={12} className="text-box">
                        <h2>What We Offer</h2>
                        <p>Each event and client is unique, and we believe our services should be as well. We know what hiring a planner is all about!</p>
                        <div className="offer-img">
                            <img src="https://i.ibb.co/pW8g84G/shutterstock-1680158791-removebg-preview.png" alt="" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default WhatWeOffer;