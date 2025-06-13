/**
 * PayPal REST APIsLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for PayPalWalletAccountVerificationStatus
 */
export enum PayPalWalletAccountVerificationStatus {
  VERIFIED = 'VERIFIED',
  UNVERIFIED = 'UNVERIFIED',
}

/**
 * Schema for PayPalWalletAccountVerificationStatus
 */
export const payPalWalletAccountVerificationStatusSchema: Schema<PayPalWalletAccountVerificationStatus> = stringEnum(
  PayPalWalletAccountVerificationStatus,
  true
);
