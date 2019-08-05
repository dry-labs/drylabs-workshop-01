import React from 'react';
import { Container, Menu } from 'semantic-ui-react';

import { LoginButton } from './components/LoginButton';
import { SignUpButton } from './components/SignUpButton';

const App = () => (
  <Container>
    <Menu pointing secondary>
      <Menu.Item as='a' active>Home</Menu.Item>
      <Menu.Item as='a'>Work</Menu.Item>
      <Menu.Item as='a'>Company</Menu.Item>
      <Menu.Item as='a'>Careers</Menu.Item>
      <Menu.Item position='right'>
        <LoginButton loginForm={{
          username: 'master',
          email: 'master@example.com',
          password: 'onion3157',
        }} />
        <SignUpButton registrationForm={{
          username: 'master',
          password1: 'onion3157',
          password2: 'onion3157',
          email: 'master@example.com',
        }} />
      </Menu.Item>
    </Menu>
  </Container>
);

export default App;
