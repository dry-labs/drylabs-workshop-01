import React from 'react';
import { Mutation } from 'react-apollo';
import { Button } from 'semantic-ui-react';

import { authRegistration } from '../queries';

const SignUp = ({ handler }) => (
  <Button as='a' onClick={handler} primary style={{ marginLeft: '0.5em' }}>
    Sign Up
  </Button>
);

const SignUpLoading = () => (
  <Button as='a' primary loading style={{ marginLeft: '0.5em' }}>
    Sign Up
  </Button>
);

export const SignUpButton = (registrationForm) => (
  <Mutation mutation={authRegistration} variables={registrationForm}>
    {(authRegistration, { loading, data }) => {
      if (loading) return <SignUpLoading />;
      if (data) return null;

      return <SignUp handler={authRegistration} />;
    }}
  </Mutation>
);
