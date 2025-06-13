/**
 * PayPal REST APIsLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for CardType
 */
export enum CardType {
  CREDIT = 'CREDIT',
  DEBIT = 'DEBIT',
  PREPAID = 'PREPAID',
  STORE = 'STORE',
  UNKNOWN = 'UNKNOWN',
}

/**
 * Schema for CardType
 */
export const cardTypeSchema: Schema<CardType> = stringEnum(CardType, true);
