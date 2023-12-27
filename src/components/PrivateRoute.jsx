import { Navigate } from "react-router-dom";

const PrivateRoute = ({ element }) => {
    const currentUser = localStorage.getItem("TOKEN");;
    // console.log("user : ", currentUser)
    return currentUser ? (
    <div>{element}</div>
    ) : (
        <Navigate to="/loginpage" />
    );
};

export default PrivateRoute;