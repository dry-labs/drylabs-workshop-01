import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { RestLink } from 'apollo-link-rest';
import 'semantic-ui-css/semantic.min.css';

import App from './App';
import { authRegistration } from './queries';

const restLink = new RestLink({uri: 'http://localhost:8000/api'});

const cache = new InMemoryCache();

const client = new ApolloClient({link: restLink, cache: cache,});

client
  .mutate({
    mutation: authRegistration,
    variables: {
      registrationForm: {
        username: 'master',
        password1: 'onion3157',
        password2: 'onion3157',
        email: 'master@example.com',
      },
    },
  })
  .then(result => console.log(result))
  .catch(error => console.log(error));

ReactDOM.render(<App />, document.getElementById('root'));
