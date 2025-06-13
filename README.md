
# Getting Started with PayPal REST APIs

## Introduction

An order represents a payment between two or more parties. Use the Orders API to create, update, retrieve, authorize, and capture orders., Call the Payments API to authorize payments, capture authorized payments, refund payments that have already been captured, and show payment information. Use the Payments API in conjunction with the <a href="/docs/api/orders/v2/">Orders API</a>. For more information, see the <a href="/docs/checkout/">PayPal Checkout Overview</a>., The Payment Method Tokens API saves payment methods so payers don't have to enter details for future transactions. Payers can check out faster or pay without being present after they agree to save a payment method.<br><br>The API associates a payment method with a temporary setup token. Pass the setup token to the API to exchange the setup token for a permanent token.<br><br>The permanent token represents a payment method that's saved to the vault. This token can be used repeatedly for checkout or recurring transactions such as subscriptions.<br><br>The Payment Method Tokens API is available in the US only.

Find out more here: [https://developer.paypal.com/docs/api/orders/v2/](https://developer.paypal.com/docs/api/orders/v2/)

## Install the Package

Run the following command from your project directory to install the package from npm:

```bash
npm install pay-test-sdk@14.2.9
```

For additional package details, see the [Npm page for the pay-test-sdk@14.2.9 npm](https://www.npmjs.com/package/pay-test-sdk/v/14.2.9).

## Initialize the API Client

**_Note:_** Documentation for the client can be found [here.](https://www.github.com/tahaali2000/pay-test-js-sdk/tree/14.2.9/doc/client.md)

The following parameters are configurable for the API Client:

| Parameter | Type | Description |
|  --- | --- | --- |
| environment | `Environment` | The API environment. <br> **Default: `Environment.Sandbox`** |
| timeout | `number` | Timeout for API calls.<br>*Default*: `0` |
| httpClientOptions | [`Partial<HttpClientOptions>`](https://www.github.com/tahaali2000/pay-test-js-sdk/tree/14.2.9/doc/http-client-options.md) | Stable configurable http client options. |
| unstableHttpClientOptions | `any` | Unstable configurable http client options. |
| logging | [`PartialLoggingOptions`](https://www.github.com/tahaali2000/pay-test-js-sdk/tree/14.2.9/doc/partial-logging-options.md) | Logging Configuration to enable logging |
| clientCredentialsAuthCredentials | [`ClientCredentialsAuthCredentials`](https://www.github.com/tahaali2000/pay-test-js-sdk/tree/14.2.9/doc/auth/oauth-2-client-credentials-grant.md) | The credential object for clientCredentialsAuth |

The API client can be initialized as follows:

```ts
const client = new Client({
  clientCredentialsAuthCredentials: {
    oAuthClientId: 'OAuthClientId',
    oAuthClientSecret: 'OAuthClientSecret'
  },
  timeout: 0,
  environment: Environment.Sandbox,
  logging: {
    logLevel: LogLevel.Info,
    logRequest: {
      logBody: true
    },
    logResponse: {
      logHeaders: true
    }
  },
});
```

## Environments

The SDK can be configured to use a different environment for making API calls. Available environments are:

### Fields

| Name | Description |
|  --- | --- |
| Production | PayPal Live Environment |
| Sandbox | **Default** PayPal Sandbox Environment |

## Authorization

This API uses the following authentication schemes.

* [`Oauth2 (OAuth 2 Client Credentials Grant)`](https://www.github.com/tahaali2000/pay-test-js-sdk/tree/14.2.9/doc/auth/oauth-2-client-credentials-grant.md)

## List of APIs

* [Orders](https://www.github.com/tahaali2000/pay-test-js-sdk/tree/14.2.9/doc/controllers/orders.md)
* [Payments](https://www.github.com/tahaali2000/pay-test-js-sdk/tree/14.2.9/doc/controllers/payments.md)
* [Vault](https://www.github.com/tahaali2000/pay-test-js-sdk/tree/14.2.9/doc/controllers/vault.md)

## SDK Infrastructure

### Configuration

* [HttpClientOptions](https://www.github.com/tahaali2000/pay-test-js-sdk/tree/14.2.9/doc/http-client-options.md)
* [RetryConfiguration](https://www.github.com/tahaali2000/pay-test-js-sdk/tree/14.2.9/doc/retry-configuration.md)
* [PartialLoggingOptions](https://www.github.com/tahaali2000/pay-test-js-sdk/tree/14.2.9/doc/partial-logging-options.md)
* [PartialRequestLoggingOptions](https://www.github.com/tahaali2000/pay-test-js-sdk/tree/14.2.9/doc/partial-request-logging-options.md)
* [PartialResponseLoggingOptions](https://www.github.com/tahaali2000/pay-test-js-sdk/tree/14.2.9/doc/partial-response-logging-options.md)
* [LoggerInterface](https://www.github.com/tahaali2000/pay-test-js-sdk/tree/14.2.9/doc/logger-interface.md)

### HTTP

* [HttpRequest](https://www.github.com/tahaali2000/pay-test-js-sdk/tree/14.2.9/doc/http-request.md)

### Utilities

* [ApiResponse](https://www.github.com/tahaali2000/pay-test-js-sdk/tree/14.2.9/doc/api-response.md)
* [ApiError](https://www.github.com/tahaali2000/pay-test-js-sdk/tree/14.2.9/doc/api-error.md)

