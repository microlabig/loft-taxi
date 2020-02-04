import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { getAuthed } from "../store/user";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const authed = useSelector(state => getAuthed(state));

  return (
    <Route
      {...rest}
      render={props =>
        authed ? <Component {...props} /> : <Redirect to="**" />
      }
    />
  );
};

export default PrivateRoute;
