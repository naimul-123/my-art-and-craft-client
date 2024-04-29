import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <div className="min-h-screen flex flex-col items-center justify-center"><span className="loading loading-lg loading-spinner text-secondary "></span></div>
    }
    if (user) {
        return children;
    }
    return (
        <Navigate state={location.pathname} to='/login'></Navigate>
    );
};


PrivateRoute.propTypes = {
    children: PropTypes.node
}
export default PrivateRoute;