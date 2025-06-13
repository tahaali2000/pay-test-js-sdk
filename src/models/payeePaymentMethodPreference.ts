/**
 * PayPal REST APIsLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for PayeePaymentMethodPreference
 */
export enum PayeePaymentMethodPreference {
  UNRESTRICTED = 'UNRESTRICTED',
  IMMEDIATEPAYMENTREQUIRED = 'IMMEDIATE_PAYMENT_REQUIRED',
}

/**
 * Schema for PayeePaymentMethodPreference
 */
export const payeePaymentMethodPreferenceSchema: Schema<PayeePaymentMethodPreference> = stringEnum(
  PayeePaymentMethodPreference,
  true
);
