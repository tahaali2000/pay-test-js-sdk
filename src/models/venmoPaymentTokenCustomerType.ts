/**
 * PayPal REST APIsLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for VenmoPaymentTokenCustomerType
 */
export enum VenmoPaymentTokenCustomerType {
  CONSUMER = 'CONSUMER',
  BUSINESS = 'BUSINESS',
}

/**
 * Schema for VenmoPaymentTokenCustomerType
 */
export const venmoPaymentTokenCustomerTypeSchema: Schema<VenmoPaymentTokenCustomerType> = stringEnum(
  VenmoPaymentTokenCustomerType,
  true
);
