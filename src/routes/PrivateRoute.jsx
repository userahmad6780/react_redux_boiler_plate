import React from "react";
import { Navigate } from "react-router";

const PrivateRoute = ({ component: Component, layout: Layout, ...rest }) => {
  let isAuthenticated = JSON.parse(localStorage.getItem('user'));
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  // here giving component as a prop to layout coponent
  const ComponentWithLayout = Layout ? Layout(Component) : Component;

  return <ComponentWithLayout {...rest}  />;
};

export default PrivateRoute;
