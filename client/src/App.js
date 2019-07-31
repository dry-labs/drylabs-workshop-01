import React from 'react';
import { Button, Container, Menu } from 'semantic-ui-react';

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
          <Button as='a' primary style={{ marginLeft: '0.5em' }}>
            Sign Up
          </Button>
        </Menu.Item>
      </Menu>
    </Container>
  );
}

export default App;
