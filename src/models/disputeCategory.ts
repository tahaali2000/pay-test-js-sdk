/**
 * PayPal REST APIsLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for DisputeCategory
 */
export enum DisputeCategory {
  ITEMNOTRECEIVED = 'ITEM_NOT_RECEIVED',
  UNAUTHORIZEDTRANSACTION = 'UNAUTHORIZED_TRANSACTION',
}

/**
 * Schema for DisputeCategory
 */
export const disputeCategorySchema: Schema<DisputeCategory> = stringEnum(
  DisputeCategory,
  true
);
