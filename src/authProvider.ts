/**
 * PayPal REST APIsLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  compositeAuthenticationProvider,
  OAuthConfiguration,
  requestAuthenticationProvider,
} from './authentication';
import { ClientCredentialsAuthManager } from './clientCredentialsAuthManager';
import { Configuration } from './configuration';
import { OAuthToken } from './models/oAuthToken';

export function createAuthProviderFromConfig(
  config: Partial<Configuration>,
  oauth2: () => ClientCredentialsAuthManager
) {
  const authConfig = {
    oauth2:
      config.clientCredentialsAuthCredentials &&
      requestAuthenticationProvider(
        config.clientCredentialsAuthCredentials.oAuthToken,
        oauth2TokenProvider(
          oauth2,
          config.clientCredentialsAuthCredentials.oAuthTokenProvider
        ),
        config.clientCredentialsAuthCredentials.oAuthOnTokenUpdate,
        {
          clockSkew: config.clientCredentialsAuthCredentials.oAuthClockSkew,
        } as OAuthConfiguration
      ),
  };

  return compositeAuthenticationProvider<
    keyof typeof authConfig,
    typeof authConfig
  >(authConfig);
}

function oauth2TokenProvider(
  oauth2: () => ClientCredentialsAuthManager,
  defaultProvider:
    | ((
        lastOAuthToken: OAuthToken | undefined,
        authManager: ClientCredentialsAuthManager
      ) => Promise<OAuthToken>)
    | undefined
): ((token: OAuthToken | undefined) => Promise<OAuthToken>) | undefined {
  return (token: OAuthToken | undefined) => {
    const manager = oauth2();
    if (defaultProvider === undefined) {
      return manager.updateToken(token);
    }
    return defaultProvider(token, manager);
  };
}
