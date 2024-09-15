import React from 'react';
import {  Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
    children:React.ReactNode;
}


const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
    console.log(localStorage.getItem('user'))
    

    return (
            localStorage.getItem('user')? children : <Navigate to="/login" />
    );
};

export default ProtectedRoute;
