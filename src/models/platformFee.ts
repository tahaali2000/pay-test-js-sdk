/**
 * PayPal REST APIsLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, optional, Schema } from '../schema';
import { Money, moneySchema } from './money';
import { PayeeBase, payeeBaseSchema } from './payeeBase';

/** The platform or partner fee, commission, or brokerage fee that is associated with the transaction. Not a separate or isolated transaction leg from the external perspective. The platform fee is limited in scope and is always associated with the original payment for the purchase unit. */
export interface PlatformFee {
  /** The currency and amount for a financial transaction, such as a balance or payment due. */
  amount: Money;
  /** The details for the merchant who receives the funds and fulfills the order. The merchant is also known as the payee. */
  payee?: PayeeBase;
}

export const platformFeeSchema: Schema<PlatformFee> = object({
  amount: ['amount', lazy(() => moneySchema)],
  payee: ['payee', optional(lazy(() => payeeBaseSchema))],
});
