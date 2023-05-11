import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectIsLoggedIn, selectIsRefreshing } from "redux/auth/selectors";

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
    const isRefreshing = useSelector(selectIsRefreshing);
    const isLoggedIn = useSelector(selectIsLoggedIn);

    const shouldRedirect = !isLoggedIn && !isRefreshing; 

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
