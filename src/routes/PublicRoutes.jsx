import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router";

const PublicRoute = ({ component: Component, layout: Layout, path, ...rest }) => {
  const { user, loading } = useSelector((state) => state.userAuth);

  if (loading) {
    return null; // Prevent rendering during loading
  }

  const ComponentWithLayout = Layout ? Layout(Component) : Component;

  return user && path !== '*' ? <Navigate to="/" /> : <ComponentWithLayout {...rest} />;
};

export default PublicRoute;