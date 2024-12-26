import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router";

const PrivateRoute = ({ component: Component, layout: Layout, ...rest }) => {
  const { user, loading } = useSelector((state) => state.userAuth);

  if (loading) {
    return null; // Prevent rendering during loading
  }

  const ComponentWithLayout = Layout ? Layout(Component) : Component;

  return user ? <ComponentWithLayout {...rest} /> : <Navigate to="/login" />;
};

export default PrivateRoute;
