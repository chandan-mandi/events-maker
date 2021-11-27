import React, { useEffect, useState } from 'react';
import { Card, Col, Row, Spinner } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import SpecialServiceCard from '../SpecialServiceCard/SpecialServiceCard';

const SpecialServices = () => {
    /*  const services = [
         {
             "eventName": "Birthdays",
             "img": "http://partymaker.ancorathemes.com/wp-content/uploads/2017/10/service-1-1170x658.jpg"
         },
         {
             "eventName": "Weddings",
             "img": "http://partymaker.ancorathemes.com/wp-content/uploads/2017/10/service-2-1170x658.jpg"
         },
         {
             "eventName": "Engagements",
             "img": "http://partymaker.ancorathemes.com/wp-content/uploads/2017/10/service-3-1170x658.jpg"
         },
         {
             "eventName": "Corporate",
             "img": "http://partymaker.ancorathemes.com/wp-content/uploads/2017/10/service-4-1170x658.jpg"
         },
     ] */
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('http://localhost:5000/specialServices')
            .then(res => res.json())
            .then(data => {
                setServices(data)
                setLoading(false)
            })
    }, [])
    return (
        <div className="sp-services py-5 container  text-center">
            <div className="title w-50 mx-auto">
                <div className="party-text">
                    <h6>Hello there!</h6>
                    <h2 style={{ fontSize: "38px" }}>We’ll make your next celebration
                        <br />  very special!</h2>
                </div>
            </div>
            <div className="sp-card-container py-5">
                <Row>
                    {
                        loading ?   <Spinner className="mx-auto" animation="border" variant="success" /> :
                        services.map(service =>
                            <SpecialServiceCard
                                key={service._id}
                                service={service}
                                loading={loading}
                            ></SpecialServiceCard>
                        )
                    }
                </Row>
            </div>
            <div className="btn-book">
                View Info
            </div>
        </div>
    );
};

export default SpecialServices;