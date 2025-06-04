import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    if(loading){
        return <div className="grid relative top-40 justify-center">
            <span className="loading  loading-infinity loading-xl"></span>
            
        </div>
    }
    if(user){
        return children;
    }
    return (
        <Navigate to="/login"></Navigate>
    );
};

export default PrivateRoute;