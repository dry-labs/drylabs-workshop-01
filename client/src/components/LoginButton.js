import React from 'react';
import { Mutation } from 'react-apollo';
import { Button } from 'semantic-ui-react';

import { authLogin } from '../queries';

const Login = ({ handler }) => (
  <Button as='a' onClick={handler}>
    Log in
  </Button>
);

const LoginLoading = () => (
  <Button as='a' loading>
    Log in
  </Button>
);

export const LoginButton = (loginForm) => (
  <Mutation mutation={authLogin} variables={loginForm}>
    {(authLogin, { loading, data }) => {
      if (loading) return <LoginLoading />;
      if (data) return null;

      return <Login handler={authLogin} />;
    }}
  </Mutation>
);
