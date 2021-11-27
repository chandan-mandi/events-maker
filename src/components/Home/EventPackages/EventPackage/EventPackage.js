import { faMeetup } from '@fortawesome/free-brands-svg-icons';
import { faBirthdayCake, faBusinessTime, faCheck, faHandHolding, faHandHoldingHeart, faPaperPlane, faPeopleArrows, faPeopleCarry, faPlane, faRocket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './EventPackage.css';

const EventPackage = () => {
    return (
        <div className="event-package">
            <Container>
                <div className="party-text">
                    <h6>Choose your holiday</h6>
                    <h2>Our Events Packages</h2>
                </div>
                <Row>
                    <Col lg={3} md={4} sm={6} xs={12} className="package">
                        <div className="pricing-card">
                            <div className="title">
                                <FontAwesomeIcon className="fa-icon" icon={faBirthdayCake}></FontAwesomeIcon>
                                <h2>Birthday Parties</h2>
                            </div>
                            <div className="price">
                                <h4>$ <span>150</span> </h4>
                            </div>
                            <div className="option">
                                <ul>
                                    <li><FontAwesomeIcon className="fa-icon" icon={faCheck}></FontAwesomeIcon> 4 Hours</li>
                                    <li><FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>Up to 10 Persons</li>
                                    <li><FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>Decoration</li>
                                    <li><FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>Catering</li>
                                </ul>
                            </div>
                            <Link to="">Order Now</Link>
                        </div>
                    </Col>
                    <Col lg={3} md={4} sm={6} xs={12} className="package">
                        <div className="pricing-card">
                            <div className="title">
                                <FontAwesomeIcon className="fa-icon" icon={faPeopleCarry}></FontAwesomeIcon>
                                <h2>Family Celebration</h2>
                            </div>
                            <div className="price">
                                <h4>$ <span>150</span> </h4>
                            </div>
                            <div className="option">
                                <ul>
                                    <li><FontAwesomeIcon icon={faCheck}></FontAwesomeIcon> 4 Hours</li>
                                    <li><FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>Up to 10 Persons</li>
                                    <li><FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>Decoration</li>
                                    <li><FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>Catering</li>
                                </ul>
                            </div>
                            <Link to="">Order Now</Link>
                        </div>
                    </Col>
                    <Col lg={3} md={4} sm={6} xs={12} className="package">
                        <div className="pricing-card">
                            <div className="title">
                                <FontAwesomeIcon className="fa-icon" icon={faHandHoldingHeart}></FontAwesomeIcon>
                                <h2>Weddings Celebration</h2>
                            </div>
                            <div className="price">
                                <h4>$ <span>150</span> </h4>
                            </div>
                            <div className="option">
                                <ul>
                                    <li><FontAwesomeIcon icon={faCheck}></FontAwesomeIcon> 4 Hours</li>
                                    <li><FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>Up to 10 Persons</li>
                                    <li><FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>Decoration</li>
                                    <li><FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>Catering</li>
                                </ul>
                            </div>
                            <Link to="">Order Now</Link>
                        </div>
                    </Col>
                    <Col lg={3} md={4} sm={6} xs={12}>
                        <div className="pricing-card">
                            <div className="title">
                                <FontAwesomeIcon className="fa-icon" icon={faBusinessTime}></FontAwesomeIcon>
                                <h2>Corporate Events</h2>
                            </div>
                            <div className="price">
                                <h4>$ <span>150</span> </h4>
                            </div>
                            <div className="option">
                                <ul>
                                    <li><FontAwesomeIcon icon={faCheck}></FontAwesomeIcon> 4 Hours</li>
                                    <li><FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>Up to 10 Persons</li>
                                    <li><FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>Decoration</li>
                                    <li><FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>Catering</li>
                                </ul>
                            </div>
                            <Link to="">Order Now</Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default EventPackage;