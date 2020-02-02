import React, { Component } from 'react';
import {
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import  { AuthContext, AuthProvider } from '../contexts/login-context';
import routes from './routes';

export class PrivateComponent extends Component {
/*   loginPath = '/login';

  state = {
    isAuthorized: false,
  };

  authorize = () => {
    this.setState({ isAuthorized: true });
  }; 
*/

  render() {
    return (
      <AuthProvider>
        <Switch>
            {
                routes.map( route => {
                    return route.private ? <PrivateRoute path={route.url} component={route.component} /> :
                                           <Route path={route.url} component={route.component} />
                })
            }
          <Redirect to="**" />
        </Switch>
      </AuthProvider>
    );
  }
}

/* let LoginPage = ({ isAuthorized, authorize }) =>
  isAuthorized ? (
    <Redirect to="/" />
  ) : (
    <button onClick={authorize}>Authorize</button>
  ); 

LoginPage = withAuth(LoginPage);
*/

function withAuth(WrappedComponent) {
  return class AuthHOC extends Component {
    render() {
      const { ...rest } = this.props;
      return (
        <AuthContext.Consumer>
          {contextProps => (
            <WrappedComponent {...contextProps} {...rest} />
          )}
        </AuthContext.Consumer>
      );
    }
  };
}

let PrivateRoute = ({
  component: RouteComponent,
  isAuthorized,
  defaultUrl,
  ...rest
}) => (
  <Route
    {...rest}
    render={routeProps =>
      isAuthorized ? (
        <RouteComponent {...routeProps} />
      ) : (
        <Redirect to={defaultUrl} />
      )
    }
  />
);

PrivateComponent = withAuth(PrivateComponent);

export default PrivateComponent; 