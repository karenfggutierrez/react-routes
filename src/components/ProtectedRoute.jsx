import React from 'react';
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({
    canActivate,
    redirectPath = '/login'
}) => {
    console.log("canActivate: " + canActivate);
    if (!!canActivate) {
        return <Navigate to={redirectPath} replace />
    }
    return <Outlet />;
}

export default ProtectedRoute;