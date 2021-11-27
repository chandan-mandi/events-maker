import React from 'react';
import { Image } from 'react-bootstrap';
import lazyLoadSpinner from '../../images/loadingSpinner.svg';

const LazyLoadingSpinner = () => {
    return (
        <section className="vh-100 vw-100 d-flex justify-content-center align-items-center">
            <Image src={lazyLoadSpinner} />
        </section>
    );
};

export default LazyLoadingSpinner;