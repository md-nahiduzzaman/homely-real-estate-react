import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();
  console.log(location);
  console.log(user);

  if (loading) {
    return <h1>loading......</h1>;
  }
  if (!user) {
    return <Navigate to="/login" state={location?.pathname || "/"} />;
  }
  return <div>{children}</div>;
};

export default PrivateRoute;