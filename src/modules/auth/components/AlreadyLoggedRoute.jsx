import { Navigate, Outlet } from "react-router";

import { AppRoutes } from "../../core/lib/AppRoutes";
import { useAuth } from "../hook/useAuth";

export function AlreadyLoggedRoute() {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <Navigate to={AppRoutes.homePage} replace />;
  }

  return <Outlet />;
}
