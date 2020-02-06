import React from 'react';
import { withRouter } from "react-router";
import {
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import routes from './routes';
import PrivateRoute from './private';

export const LocationDisplay = withRouter(({ location }) => (
  <div data-testid="location-display">{location.pathname}</div>
))

const RouterComponent = () => {
  return (
    <Switch>
        {
            routes.map( route => {
                return route.private ? 
                  <PrivateRoute 
                    path={route.url} 
                    component={route.component} 
                    exact={route.exact} 
                    key={route.name}
                  /> :
                  <Route 
                    path={route.url} 
                    component={route.component} 
                    exact={route.exact} 
                    key={route.name}
                  />
            })
        }
        <Redirect to="**" />
    </Switch>
  );
}

export default RouterComponent; 