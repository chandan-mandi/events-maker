import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import MenuBar from '../../shared/MenuBar/MenuBar';
import ServiceCard from '../ServiceCard/ServiceCard';

const Services = () => {
    const serviceCollect = [
        {
            "serviceName" : "Invitation Cards",
            "img": "http://partymaker.ancorathemes.com/wp-content/uploads/2017/10/service-6-1170x658.jpg",
            "serviceIcon": "https://cdn-icons.flaticon.com/png/512/3369/premium/3369012.png?token=exp=1637956037~hmac=0489f02b12582bcac4968d50949417f7",
            "serviceHoverIcon": "https://cdn-icons.flaticon.com/png/512/3369/premium/3369022.png?token=exp=1637956040~hmac=244d0dfb4c7a4332e0b69b0efe11b66a",
            "tags": "cards, invitation",
            "about": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi."
        },
        {
            "serviceName" : "Entertainments",
            "img": "http://partymaker.ancorathemes.com/wp-content/uploads/2017/10/service-8-1170x658.jpg",
            "serviceIcon": "https://cdn-icons-png.flaticon.com/512/864/864837.png",
            "serviceHoverIcon": "https://cdn-icons-png.flaticon.com/512/864/864763.png",
            "tags": "entertainments, party, dj",
            "about": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi."
        }
    ]
    const [services, setServices] = useState([]);
    useEffect(()=> {
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div className="our-services">
            <MenuBar />
            <Container>
                <h2 style={{ padding: "100px 0 50px", textAlign: "center" }}>Our Services</h2>
                <Row>
                    {
                        services.map(service => <ServiceCard
                            service={service}
                            key={service._id}
                        ></ServiceCard>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Services;