import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../../SharePage/Loading/Loading';

const RequireAuth = ({ children }) => {
    // const [user, loading, error] = useAuthState(auth);
    const [user, loading, error] = useAuthState(auth);
    const location = useLocation();
    const [sendEmailVerification, sending, error1] = useSendEmailVerification(auth);
    //console.log(location);
    // console.log(loading);
    if (loading || sending) {
        return <Loading></Loading>
    }
    if (user) {
        return children;
    }
    else {
        return <Navigate to="/signin" state={{ from: location }} replace />;
    }
};

export default RequireAuth;

