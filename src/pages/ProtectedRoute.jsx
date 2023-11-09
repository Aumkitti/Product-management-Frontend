import { Navigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

const ProtectedRouts = ({children}) =>{
    const {user} = useAuthContext();
    if (!user) {
        return <Navigate to="/signin/"/>

    }
    return children
}
export default ProtectedRouts;