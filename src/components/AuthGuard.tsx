import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { selectCurrentUser } from "../state/authSlice";
import { User } from "../types";

function AuthGuard({ children }: { children: JSX.Element }) {
  const location = useLocation();
  const user: User = useSelector(selectCurrentUser);

  if (user === null) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return children;
}

export default AuthGuard;
