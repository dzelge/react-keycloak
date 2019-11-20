import React, { useCallback } from 'react';

import { useKeycloak } from '../../lib';

import { useAxios } from '../utils/hooks';

export default () => {
  const { keycloak } = useKeycloak();
  const axiosInstance = useAxios('https://127.0.0.1/keycloak'); // see https://github.com/panz3r/jwt-checker-server for a quick implementation
  const callApi = useCallback(() => {
    axiosInstance.get('/');
  }, [axiosInstance]);

  return (
    <div>
      <div>User is {!keycloak.authenticated ? 'NOT ' : ''} authenticated</div>

      {!!keycloak.authenticated && (
        <button type="button" onClick={() => keycloak.logout()}>
          Logout
        </button>
      )}

      <button type="button" onClick={callApi}>
        Call API
      </button>
    </div>
  );
};
