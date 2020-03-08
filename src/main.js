import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { configureStore } from '~/core/store';
import nestPairs from '~/shared/nest-pairs';
import Routes, { history } from '~/core/Router';

const store = configureStore();

// Add Parent component with props 
const Providers = nestPairs(
  [Provider, { store }],
  [ConnectedRouter, { history }],
);

render(
  <Providers>
    <Routes />
  </Providers>,
  document.querySelector('#app'),
);
