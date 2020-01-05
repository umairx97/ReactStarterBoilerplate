import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { configureStore } from '~/core/store';
import nestPairs from '~/shared/nest-pairs';
import Routes, { history } from '~/core/Router';

// const language = navigator.language.split(/[-_]/)[0];
// import { IntlProvider } from 'react-intl';
// import { MuiThemeProvider } from '@material-ui/core/styles';
// import i18n from '~/core/i18n';
// import { theme } from '~/core/material';

const store = configureStore();
const Providers = nestPairs(
  [Provider, { store }],
  [ConnectedRouter, { history }],
  // [IntlProvider, { locale: language, messages: i18n[language] }],
  // [MuiThemeProvider, { theme }],
);

render(
  <Providers>
    <Routes />
  </Providers>,
  document.querySelector('#app'),
);
