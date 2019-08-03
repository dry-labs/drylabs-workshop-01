import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { RestLink } from 'apollo-link-rest';
import 'semantic-ui-css/semantic.min.css';

import App from './App';

const restLink = new RestLink({uri: 'http://localhost:8000/api'});

const cache = new InMemoryCache();

const client = new ApolloClient({link: restLink, cache: cache,});

const app = (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

ReactDOM.render(app, document.getElementById('root'));
