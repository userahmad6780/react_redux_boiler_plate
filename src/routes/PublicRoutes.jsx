import React from "react";
import { Navigate } from "react-router";

const PublicRoute = ({ component: Component, layout: Layout, path, ...rest }) => {
  let isAuthenticated = JSON.parse(localStorage.getItem('user'));
  if (isAuthenticated && path != '*') {
    return <Navigate to="/" />;
  }
  
  // here giving component as a prop to layout coponent
  const ComponentWithLayout = Layout ? Layout(Component) : Component;

  return <ComponentWithLayout {...rest} />;
};

export default PublicRoute;