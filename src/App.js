import './App.css';
import { Routes, Route } from "react-router";
import { routes } from './routes';
import PublicRoute from './routes/PublicRoutes';
import PrivateRoute from './routes/PrivateRoute';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from './redux/authSlice';

function App() {
  const dispatch = useDispatch()
  const { loading } = useSelector((state) => state.userAuth);

  useEffect(() => {
    
    dispatch(getUser())
    
  }, [dispatch])
  
  if (loading) {
    // Show a loader or splash screen until the user state is initialized
    return (
      <div className="text-center">
        <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }
  
  return (
    <div className="App">
      <Routes>
        {routes.map(({ path, component, isPublic, layout }, index) => {
          const RouteComponent = isPublic ? PublicRoute : PrivateRoute;
          return (
            <Route
              key={index}
              path={path}
              element={
                <RouteComponent
                  path={path}
                  component={component}
                  layout={layout}
                />
              }
            />
          );
        })}
      </Routes>
    </div>
  );
}

export default App;
