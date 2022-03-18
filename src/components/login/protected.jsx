import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { Context } from '../../store';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const [state] = useContext(Context);
  return (
    <Route
      {...rest}
      render={(props) => {
        if (state.currentUser) {
          return <Component {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: '/',
                state: {
                  from: props.location,
                },
              }}
            />
          );
        }
      }}
    />
  );
};

export default ProtectedRoute;
