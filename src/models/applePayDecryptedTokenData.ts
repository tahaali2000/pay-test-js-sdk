/**
 * PayPal REST APIsLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, optional, Schema, string } from '../schema';
import {
  ApplePayPaymentData,
  applePayPaymentDataSchema,
} from './applePayPaymentData';
import {
  ApplePayPaymentDataType,
  applePayPaymentDataTypeSchema,
} from './applePayPaymentDataType';
import {
  ApplePayTokenizedCard,
  applePayTokenizedCardSchema,
} from './applePayTokenizedCard';
import { Money, moneySchema } from './money';

/** Information about the Payment data obtained by decrypting Apple Pay token. */
export interface ApplePayDecryptedTokenData {
  /** The currency and amount for a financial transaction, such as a balance or payment due. */
  transactionAmount?: Money;
  /** The payment card to use to fund a payment. Can be a credit or debit card. */
  tokenizedCard: ApplePayTokenizedCard;
  /** Apple Pay Hex-encoded device manufacturer identifier. The pattern is defined by an external party and supports Unicode. */
  deviceManufacturerId?: string;
  /** Indicates the type of payment data passed, in case of Non China the payment data is 3DSECURE and for China it is EMV. */
  paymentDataType?: ApplePayPaymentDataType;
  /** Information about the decrypted apple pay payment data for the token like cryptogram, eci indicator. */
  paymentData?: ApplePayPaymentData;
}

export const applePayDecryptedTokenDataSchema: Schema<ApplePayDecryptedTokenData> = object(
  {
    transactionAmount: [
      'transaction_amount',
      optional(lazy(() => moneySchema)),
    ],
    tokenizedCard: ['tokenized_card', lazy(() => applePayTokenizedCardSchema)],
    deviceManufacturerId: ['device_manufacturer_id', optional(string())],
    paymentDataType: [
      'payment_data_type',
      optional(applePayPaymentDataTypeSchema),
    ],
    paymentData: [
      'payment_data',
      optional(lazy(() => applePayPaymentDataSchema)),
    ],
  }
);
