/**
 * PayPal REST APIsLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

/** Information about the decrypted apple pay payment data for the token like cryptogram, eci indicator. */
export interface ApplePayPaymentData {
  /** Online payment cryptogram, as defined by 3D Secure. The pattern is defined by an external party and supports Unicode. */
  cryptogram?: string;
  /** ECI indicator, as defined by 3- Secure. The pattern is defined by an external party and supports Unicode. */
  eciIndicator?: string;
  /** Encoded Apple Pay EMV Payment Structure used for payments in China. The pattern is defined by an external party and supports Unicode. */
  emvData?: string;
  /** Bank Key encrypted Apple Pay PIN. The pattern is defined by an external party and supports Unicode. */
  pin?: string;
}

export const applePayPaymentDataSchema: Schema<ApplePayPaymentData> = object({
  cryptogram: ['cryptogram', optional(string())],
  eciIndicator: ['eci_indicator', optional(string())],
  emvData: ['emv_data', optional(string())],
  pin: ['pin', optional(string())],
});
