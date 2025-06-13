/**
 * PayPal REST APIsLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, optional, Schema, string } from '../schema';
import { Address, addressSchema } from './address';
import { Name, nameSchema } from './name';
import {
  PayPalWalletAttributes,
  payPalWalletAttributesSchema,
} from './payPalWalletAttributes';
import {
  PayPalWalletExperienceContext,
  payPalWalletExperienceContextSchema,
} from './payPalWalletExperienceContext';
import { PhoneWithType, phoneWithTypeSchema } from './phoneWithType';
import { TaxInfo, taxInfoSchema } from './taxInfo';

/** A resource that identifies a PayPal Wallet is used for payment. */
export interface PayPalWallet {
  /** The PayPal-generated ID for the vaulted payment source. This ID should be stored on the merchant's server so the saved payment source can be used for future transactions. */
  vaultId?: string;
  /** The internationalized email address.<blockquote><strong>Note:</strong> Up to 64 characters are allowed before and 255 characters are allowed after the <code>@</code> sign. However, the generally accepted maximum length for an email address is 254 characters. The pattern verifies that an unquoted <code>@</code> sign exists.</blockquote> */
  emailAddress?: string;
  /** The name of the party. */
  name?: Name;
  /** The phone information. */
  phone?: PhoneWithType;
  /** The stand-alone date, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6). To represent special legal values, such as a date of birth, you should use dates with no associated time or time-zone data. Whenever possible, use the standard `date_time` type. This regular expression does not validate all dates. For example, February 31 is valid and nothing is known about leap years. */
  birthDate?: string;
  /** The tax ID of the customer. The customer is also known as the payer. Both `tax_id` and `tax_id_type` are required. */
  taxInfo?: TaxInfo;
  /** The portable international postal address. Maps to [AddressValidationMetadata](https://github.com/googlei18n/libaddressinput/wiki/AddressValidationMetadata) and HTML 5.1 [Autofilling form controls: the autocomplete attribute](https://www.w3.org/TR/html51/sec-forms.html#autofilling-form-controls-the-autocomplete-attribute). */
  address?: Address;
  /** Additional attributes associated with the use of this PayPal Wallet. */
  attributes?: PayPalWalletAttributes;
  /** Customizes the payer experience during the approval process for payment with PayPal.<blockquote><strong>Note:</strong> Partners and Marketplaces might configure <code>brand_name</code> and <code>shipping_preference</code> during partner account setup, which overrides the request values.</blockquote> */
  experienceContext?: PayPalWalletExperienceContext;
  /** The PayPal billing agreement ID. References an approved recurring payment for goods or services. */
  billingAgreementId?: string;
}

export const payPalWalletSchema: Schema<PayPalWallet> = object({
  vaultId: ['vault_id', optional(string())],
  emailAddress: ['email_address', optional(string())],
  name: ['name', optional(lazy(() => nameSchema))],
  phone: ['phone', optional(lazy(() => phoneWithTypeSchema))],
  birthDate: ['birth_date', optional(string())],
  taxInfo: ['tax_info', optional(lazy(() => taxInfoSchema))],
  address: ['address', optional(lazy(() => addressSchema))],
  attributes: [
    'attributes',
    optional(lazy(() => payPalWalletAttributesSchema)),
  ],
  experienceContext: [
    'experience_context',
    optional(lazy(() => payPalWalletExperienceContextSchema)),
  ],
  billingAgreementId: ['billing_agreement_id', optional(string())],
});
