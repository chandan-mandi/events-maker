import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import './TopBanner.css';

const TopBanner = () => {
    return (
        <div className="top-banner">
            <Container>
                <Row className="align-items-center justify-content-center">
                    <Col lg={6} md={6} sm={12}>
                        <Fade left duration={2000} distance="40px">
                            <div className="party-text">
                                <h6>let's have a party</h6>
                                <h2>Enjoy Your <br /> Celebration!</h2>
                                <div className="btn-book">Online Request</div>
                            </div>
                        </Fade>
                    </Col>
                    <Col lg={6} md={6} sm={12}>
                        <Fade right duration={2000} distance="40px">
                            <div className="party-img">
                                <img src="https://freepngimg.com/save/94310-jockey-dj-photography-graphic-mixer-disc-design/799x853" alt="" />
                            </div>
                        </Fade>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default TopBanner;