import React, { useContext } from 'react';
import { GoogleLogin } from 'react-google-login';
import { Context } from '../../store';

const EMAIL_WHITELIST = [
  'brnpaintsil@gmail.com',
];

const clientId =
  process.env.NODE_ENV === 'production'
    ? process.env.REACT_APP_OAUTH_CLIENT_ID_PROD
    : process.env.REACT_APP_OAUTH_CLIENT_ID_DEV;

const Login = ({ history }) => {
  const [state, dispatch] = useContext(Context);
  const isSignedIn = Boolean(state.currentUser);

  const onSuccess = (res) => {
    if (res.profileObj && EMAIL_WHITELIST.includes(res.profileObj.email)) {
      dispatch({ type: 'SET_CURRENT_USER', payload: res.profileObj });
      history.push('/dashboard');
    } else {
      dispatch({ type: 'SET_ERROR', payload: 'Login Failed. Contact Admin!' });
    }
  };

  const onFailure = (res) => {
    if (res) {
      dispatch({ type: 'SET_ERROR', payload: res.error });
    }
  };

  return (
    <div style={{ textAlign: 'center', padding: '10px', margin: '30px 0' }}>
      <GoogleLogin
        clientId={clientId}
        buttonText="Log in using Google"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={'single_host_origin'}
        isSignedIn={isSignedIn}
      />
    </div>
  );
};

export default Login;
