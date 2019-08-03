import React from 'react';
import { Button, Container, Menu } from 'semantic-ui-react';

import { SignUpButton } from './components/SignUpButton';

function App() {
  return (
    <Container>
      <Menu pointing secondary>
        <Menu.Item as='a' active>Home</Menu.Item>
        <Menu.Item as='a'>Work</Menu.Item>
        <Menu.Item as='a'>Company</Menu.Item>
        <Menu.Item as='a'>Careers</Menu.Item>
        <Menu.Item position='right'>
          <Button as='a'>
            Log in
          </Button>
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
}

export default App;
