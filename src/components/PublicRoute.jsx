import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const PublicRoute = ({ children }) => {
  const { user } = useAuth();
  //If the user is authenticated- can't access login, send to movies or page404
  if (user) {
    return <Navigate to="/Page404" />;
  }
  return children;
};

export default PublicRoute;