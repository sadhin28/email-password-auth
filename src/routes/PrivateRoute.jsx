import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useNavigate } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    const navigate=useNavigate()
    if(loading){
        return <div className="grid relative top-40 justify-center">
            <span className="loading  loading-infinity loading-xl"></span>
            
        </div>
    }
    if(user){
        return children;
    }
    return (
        navigate('/login')
    );
};

export default PrivateRoute;