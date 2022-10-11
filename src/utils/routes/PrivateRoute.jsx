import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

export default function PublicRoute(props) {
  const isAuthenticated = localStorage.getItem("token");
  const location = useLocation();
  const user = useSelector((state) => state.user);
  const roleUser = user.data.role;

  if (!isAuthenticated) {
    return <Navigate to="/signin" state={{ from: location }} replace />;
  }

  if (props.isAdmin && roleUser !== "admin") {
    return <Navigate to="/notfound" state={{ from: location }} replace />;
  }

  return <Outlet />;
}
