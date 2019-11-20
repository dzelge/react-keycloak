import Keycloak from 'keycloak-js';
import React from 'react';

import { KeycloakProvider } from '../lib';

import { AppRouter } from './routes';

// const keycloak = new Keycloak({
//   realm: "master",
//   url: "https://192.171.139.54.xip.io/auth",
//   clientId: 'xcube',
//   clientSecret: "db479856-b07b-48e0-b4ce-676ba2173ee9"
// });

const keycloak = new Keycloak({
  realm: "master",
  url: "https://192.171.139.54.xip.io/auth",
  clientId: 'react-test',
});


const keycloakProviderInitConfig = {
  onLoad: 'check-sso',
};

class PersistedApp extends React.PureComponent {
  onKeycloakEvent = (event, error) => {
    console.log('onKeycloakEvent', event, error);
  };

  onKeycloakTokens = tokens => {
    console.log('onKeycloakTokens', tokens);
  };

  render() {
    console.log('Im here');
    return (
      <KeycloakProvider
        keycloak={keycloak}
        initConfig={keycloakProviderInitConfig}
        onEvent={this.onKeycloakEvent}
        onTokens={this.onKeycloakTokens}
      >
        <AppRouter />
      </KeycloakProvider>
    );
  }
}

export default PersistedApp;
