/**
 * PayPal REST APIsLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for VenmoPaymentTokenUsagePattern
 */
export enum VenmoPaymentTokenUsagePattern {
  IMMEDIATE = 'IMMEDIATE',
  DEFERRED = 'DEFERRED',
  RECURRINGPREPAID = 'RECURRING_PREPAID',
  RECURRINGPOSTPAID = 'RECURRING_POSTPAID',
  THRESHOLDPREPAID = 'THRESHOLD_PREPAID',
  THRESHOLDPOSTPAID = 'THRESHOLD_POSTPAID',
}

/**
 * Schema for VenmoPaymentTokenUsagePattern
 */
export const venmoPaymentTokenUsagePatternSchema: Schema<VenmoPaymentTokenUsagePattern> = stringEnum(
  VenmoPaymentTokenUsagePattern,
  true
);
