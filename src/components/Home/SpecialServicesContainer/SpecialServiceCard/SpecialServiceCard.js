import React from 'react';
import { Card, Col } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { useNavigate } from 'react-router';
import SpecialServiceLoader from '../../../Spinner/SpecialServiceLoader';

const SpecialServiceCard = ({ service, loading }) => {
    const { eventName, img, _id } = service;
    const navigate = useNavigate();
    const handleServiceDetails = (id) => {
        const uri = `/specialServiceDetails/${id}`;
        navigate(uri);
    }
    return (
        <>

            <Col lg={3} md={4} sm={6} xs={12} className="p-2">
                {
                    loading ? <SpecialServiceLoader /> :
                        <Fade bottom duration={2000} distance="40px">
                            <Card onClick={() => handleServiceDetails(_id)} style={{ cursor: 'pointer' }}>
                                <Card.Img variant="top" style={{ height: '12rem' }} src={img} />
                                <Card.Body>
                                    <Card.Title className="text-center">{eventName}</Card.Title>
                                </Card.Body>
                            </Card>
                        </Fade>
                }
            </Col>
        </>
    );
};

export default SpecialServiceCard;