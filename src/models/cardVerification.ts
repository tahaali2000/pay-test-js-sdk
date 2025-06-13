/**
 * PayPal REST APIsLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema } from '../schema';
import {
  CardVerificationMethod,
  cardVerificationMethodSchema,
} from './cardVerificationMethod';

/** The API caller can opt in to verify the card through PayPal offered verification services (e.g. Smart Dollar Auth, 3DS). */
export interface CardVerification {
  /** The method used for card verification. */
  method?: CardVerificationMethod;
}

export const cardVerificationSchema: Schema<CardVerification> = object({
  method: ['method', optional(cardVerificationMethodSchema)],
});
