import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  //If the user is not authenticated
  if (!user) {
    return <Navigate to="/Page404" />;
  }
  return children;
};

export default ProtectedRoute;