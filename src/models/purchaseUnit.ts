/**
 * PayPal REST APIsLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, optional, Schema, string } from '../schema';
import {
  AmountWithBreakdown,
  amountWithBreakdownSchema,
} from './amountWithBreakdown';
import { Item, itemSchema } from './item';
import { Payee, payeeSchema } from './payee';
import {
  PaymentCollection,
  paymentCollectionSchema,
} from './paymentCollection';
import {
  PaymentInstruction,
  paymentInstructionSchema,
} from './paymentInstruction';
import {
  ShippingWithTrackingDetails,
  shippingWithTrackingDetailsSchema,
} from './shippingWithTrackingDetails';
import {
  SupplementaryData,
  supplementaryDataSchema,
} from './supplementaryData';

/** The purchase unit details. Used to capture required information for the payment contract. */
export interface PurchaseUnit {
  /** The API caller-provided external ID for the purchase unit. Required for multiple purchase units when you must update the order through `PATCH`. If you omit this value and the order contains only one purchase unit, PayPal sets this value to `default`. <blockquote><strong>Note:</strong> If there are multiple purchase units, <code>reference_id</code> is required for each purchase unit.</blockquote> */
  referenceId?: string;
  /** The total order amount with an optional breakdown that provides details, such as the total item amount, total tax amount, shipping, handling, insurance, and discounts, if any.<br/>If you specify `amount.breakdown`, the amount equals `item_total` plus `tax_total` plus `shipping` plus `handling` plus `insurance` minus `shipping_discount` minus discount.<br/>The amount must be a positive number. For listed of supported currencies and decimal precision, see the PayPal REST APIs <a href="/docs/integration/direct/rest/currency-codes/">Currency Codes</a>. */
  amount?: AmountWithBreakdown;
  /** The merchant who receives the funds and fulfills the order. The merchant is also known as the payee. */
  payee?: Payee;
  /** Any additional payment instructions to be consider during payment processing. This processing instruction is applicable for Capturing an order or Authorizing an Order. */
  paymentInstruction?: PaymentInstruction;
  /** The purchase description. */
  description?: string;
  /** The API caller-provided external ID. Used to reconcile API caller-initiated transactions with PayPal transactions. Appears in transaction and settlement reports. */
  customId?: string;
  /** The API caller-provided external invoice ID for this order. */
  invoiceId?: string;
  /** The PayPal-generated ID for the purchase unit. This ID appears in both the payer's transaction history and the emails that the payer receives. In addition, this ID is available in transaction and settlement reports that merchants and API callers can use to reconcile transactions. This ID is only available when an order is saved by calling <code>v2/checkout/orders/id/save</code>. */
  id?: string;
  /** The payment descriptor on account transactions on the customer's credit card statement, that PayPal sends to processors. The maximum length of the soft descriptor information that you can pass in the API field is 22 characters, in the following format:<code>22 - len(PAYPAL * (8)) - len(<var>Descriptor in Payment Receiving Preferences of Merchant account</var> + 1)</code>The PAYPAL prefix uses 8 characters.<br/><br/>The soft descriptor supports the following ASCII characters:<ul><li>Alphanumeric characters</li><li>Dashes</li><li>Asterisks</li><li>Periods (.)</li><li>Spaces</li></ul>For Wallet payments marketplace integrations:<ul><li>The merchant descriptor in the Payment Receiving Preferences must be the marketplace name.</li><li>You can't use the remaining space to show the customer service number.</li><li>The remaining spaces can be a combination of seller name and country.</li></ul><br/>For unbranded payments (Direct Card) marketplace integrations, use a combination of the seller name and phone number. */
  softDescriptor?: string;
  /** An array of items that the customer purchases from the merchant. */
  items?: Item[];
  /** The order shipping details. */
  shipping?: ShippingWithTrackingDetails;
  /** Supplementary data about a payment. This object passes information that can be used to improve risk assessments and processing costs, for example, by providing Level 2 and Level 3 payment data. */
  supplementaryData?: SupplementaryData;
  /** The collection of payments, or transactions, for a purchase unit in an order. For example, authorized payments, captured payments, and refunds. */
  payments?: PaymentCollection;
}

export const purchaseUnitSchema: Schema<PurchaseUnit> = object({
  referenceId: ['reference_id', optional(string())],
  amount: ['amount', optional(lazy(() => amountWithBreakdownSchema))],
  payee: ['payee', optional(lazy(() => payeeSchema))],
  paymentInstruction: [
    'payment_instruction',
    optional(lazy(() => paymentInstructionSchema)),
  ],
  description: ['description', optional(string())],
  customId: ['custom_id', optional(string())],
  invoiceId: ['invoice_id', optional(string())],
  id: ['id', optional(string())],
  softDescriptor: ['soft_descriptor', optional(string())],
  items: ['items', optional(array(lazy(() => itemSchema)))],
  shipping: [
    'shipping',
    optional(lazy(() => shippingWithTrackingDetailsSchema)),
  ],
  supplementaryData: [
    'supplementary_data',
    optional(lazy(() => supplementaryDataSchema)),
  ],
  payments: ['payments', optional(lazy(() => paymentCollectionSchema))],
});
