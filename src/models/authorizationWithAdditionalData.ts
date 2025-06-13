/**
 * PayPal REST APIsLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, optional, Schema, string } from '../schema';
import {
  AuthorizationStatus,
  authorizationStatusSchema,
} from './authorizationStatus';
import {
  AuthorizationStatusDetails,
  authorizationStatusDetailsSchema,
} from './authorizationStatusDetails';
import { LinkDescription, linkDescriptionSchema } from './linkDescription';
import { Money, moneySchema } from './money';
import {
  NetworkTransactionReference,
  networkTransactionReferenceSchema,
} from './networkTransactionReference';
import {
  ProcessorResponse,
  processorResponseSchema,
} from './processorResponse';
import { SellerProtection, sellerProtectionSchema } from './sellerProtection';

/** The authorization with additional payment details, such as risk assessment and processor response. These details are populated only for certain payment methods. */
export interface AuthorizationWithAdditionalData {
  /** The status for the authorized payment. */
  status?: AuthorizationStatus;
  /** The details of the authorized payment status. */
  statusDetails?: AuthorizationStatusDetails;
  /** The PayPal-generated ID for the authorized payment. */
  id?: string;
  /** The currency and amount for a financial transaction, such as a balance or payment due. */
  amount?: Money;
  /** The API caller-provided external invoice number for this order. Appears in both the payer's transaction history and the emails that the payer receives. */
  invoiceId?: string;
  /** The API caller-provided external ID. Used to reconcile API caller-initiated transactions with PayPal transactions. Appears in transaction and settlement reports. */
  customId?: string;
  /** Reference values used by the card network to identify a transaction. */
  networkTransactionReference?: NetworkTransactionReference;
  /** The level of protection offered as defined by [PayPal Seller Protection for Merchants](https://www.paypal.com/us/webapps/mpp/security/seller-protection). */
  sellerProtection?: SellerProtection;
  /** The date and time, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6). Seconds are required while fractional seconds are optional.<blockquote><strong>Note:</strong> The regular expression provides guidance but does not reject all invalid dates.</blockquote> */
  expirationTime?: string;
  /** An array of related [HATEOAS links](/docs/api/reference/api-responses/#hateoas-links). */
  links?: LinkDescription[];
  /** The date and time, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6). Seconds are required while fractional seconds are optional.<blockquote><strong>Note:</strong> The regular expression provides guidance but does not reject all invalid dates.</blockquote> */
  createTime?: string;
  /** The date and time, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6). Seconds are required while fractional seconds are optional.<blockquote><strong>Note:</strong> The regular expression provides guidance but does not reject all invalid dates.</blockquote> */
  updateTime?: string;
  /** The processor response information for payment requests, such as direct credit card transactions. */
  processorResponse?: ProcessorResponse;
}

export const authorizationWithAdditionalDataSchema: Schema<AuthorizationWithAdditionalData> = object(
  {
    status: ['status', optional(authorizationStatusSchema)],
    statusDetails: [
      'status_details',
      optional(lazy(() => authorizationStatusDetailsSchema)),
    ],
    id: ['id', optional(string())],
    amount: ['amount', optional(lazy(() => moneySchema))],
    invoiceId: ['invoice_id', optional(string())],
    customId: ['custom_id', optional(string())],
    networkTransactionReference: [
      'network_transaction_reference',
      optional(lazy(() => networkTransactionReferenceSchema)),
    ],
    sellerProtection: [
      'seller_protection',
      optional(lazy(() => sellerProtectionSchema)),
    ],
    expirationTime: ['expiration_time', optional(string())],
    links: ['links', optional(array(lazy(() => linkDescriptionSchema)))],
    createTime: ['create_time', optional(string())],
    updateTime: ['update_time', optional(string())],
    processorResponse: [
      'processor_response',
      optional(lazy(() => processorResponseSchema)),
    ],
  }
);
