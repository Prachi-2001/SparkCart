import { useNavigate } from "react-router"



const ProtectedRoutes = ({isAuthenticated, childeren}) => {
    const navigate = useNavigate();

    if(isAuthenticated === false){
        return navigate("/login");
    }

    return childeren;
};

export default ProtectedRoutes;
