/**
 * PayPal REST APIsLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for CheckoutPaymentIntent
 */
export enum CheckoutPaymentIntent {
  CAPTURE = 'CAPTURE',
  AUTHORIZE = 'AUTHORIZE',
}

/**
 * Schema for CheckoutPaymentIntent
 */
export const checkoutPaymentIntentSchema: Schema<CheckoutPaymentIntent> = stringEnum(
  CheckoutPaymentIntent,
  true
);
