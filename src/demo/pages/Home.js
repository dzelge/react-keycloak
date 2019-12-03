import React, { useCallback } from 'react';

import { useKeycloak } from '../../lib';

import { useAxios } from '../utils/hooks';

export default () => {
  const { keycloak } = useKeycloak();
  const axiosInstance = useAxios('https://cate-auth-test.192.171.139.57.nip.io/backend'); // see https://github.com/panz3r/jwt-checker-server for a quick implementation
  const callApi = useCallback(() => {
    axiosInstance.get('/');
  }, [axiosInstance]);

  console.log("Calling https://cate-auth-test.192.171.139.57.nip.io/backend")
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
