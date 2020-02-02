import React from 'react';

import {
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import routes from './routes';
import PrivateRoute from './private';

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