import { BrowserRouter } from 'react-router-dom';

import { ApolloProvider } from '@apollo/client';

import { apolloClient } from './lib/apollo';
import { Router } from './router';

function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
