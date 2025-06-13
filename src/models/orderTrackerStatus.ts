/**
 * PayPal REST APIsLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for OrderTrackerStatus
 */
export enum OrderTrackerStatus {
  CANCELLED = 'CANCELLED',
  SHIPPED = 'SHIPPED',
}

/**
 * Schema for OrderTrackerStatus
 */
export const orderTrackerStatusSchema: Schema<OrderTrackerStatus> = stringEnum(
  OrderTrackerStatus,
  true
);
