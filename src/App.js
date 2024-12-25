import './App.css';
import { Routes, Route } from "react-router";
import { routes } from './routes';
import PublicRoute from './routes/PublicRoutes';
import PrivateRoute from './routes/PrivateRoute';

function App() {

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
