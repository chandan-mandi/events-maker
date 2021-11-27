import React from 'react';
import { useParams } from 'react-router';

const SpServiceDetails = () => {
    const {id} = useParams();
    console.log(id)
    return (
        <div>
            <h2>Special Service Details : {id}</h2>
        </div>
    );
};

export default SpServiceDetails;