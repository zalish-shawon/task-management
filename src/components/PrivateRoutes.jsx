/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const PrivateRoutes = ({children}) => {

    const { user, loading } = useContext(AuthContext)
    const location = useLocation()


    if (loading) {
        return <span className="loading loading-spinner loading-lg"></span>

    }
    if (user) {
        return children
    }
    return (
        <div>
            <Navigate state={location.pathname} to={"/login"}></Navigate>
        </div>
    );
};

export default PrivateRoutes;