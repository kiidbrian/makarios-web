import React from 'react';
import { GoogleLogout } from 'react-google-login';
import { DropdownItem } from 'reactstrap';

const clientId =
  process.env.NODE_ENV === 'production'
    ? process.env.REACT_APP_OAUTH_CLIENT_ID_PROD
    : process.env.REACT_APP_OAUTH_CLIENT_ID_DEV;

function Logout({ dispatch }) {
  const onSuccess = () => {
    dispatch({ type: 'REMOVE_CURRENT_USER' });
  };

  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
        render={(renderProps) => (
          <DropdownItem
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
          >
            Log out
          </DropdownItem>
        )}
      />
    </div>
  );
}

export default Logout;
