import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  if (!user) {
    //The user is not authenticated
    return <Navigate to="/login" />;
  }
  return children;
};

export default ProtectedRoute;