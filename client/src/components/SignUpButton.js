import React from 'react';
import { Mutation } from 'react-apollo';
import { Button } from 'semantic-ui-react';

import { authRegistration } from '../queries';

const SignUp = () => (
  <Button as='a' primary style={{ marginLeft: '0.5em' }}>
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
    {(loading, error, data) => {
      if (loading) {
        return <SignUpLoading />
      }
      return <SignUp />
    }}
  </Mutation>
);
