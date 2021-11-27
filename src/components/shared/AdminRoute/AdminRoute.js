import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';

const AdminRoute = ({children, ...rest}) => {
    const {user, admin, loading} = useAuth();
    const location = useLocation();
    if(loading) {return <Spinner animation="border" variant="success"/>}
    if(user.email && admin){
        return children;
    }
    return <Navigate to="/" state={{state: location}}/>
};

export default AdminRoute;