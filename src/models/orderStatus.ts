/**
 * PayPal REST APIsLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for OrderStatus
 */
export enum OrderStatus {
  CREATED = 'CREATED',
  SAVED = 'SAVED',
  APPROVED = 'APPROVED',
  VOIDED = 'VOIDED',
  COMPLETED = 'COMPLETED',
  PAYERACTIONREQUIRED = 'PAYER_ACTION_REQUIRED',
}

/**
 * Schema for OrderStatus
 */
export const orderStatusSchema: Schema<OrderStatus> = stringEnum(
  OrderStatus,
  true
);
