/**
 * PayPal REST APIsLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, optional, Schema } from '../schema';
import {
  Level2CardProcessingData,
  level2CardProcessingDataSchema,
} from './level2CardProcessingData';
import {
  Level3CardProcessingData,
  level3CardProcessingDataSchema,
} from './level3CardProcessingData';

/** Merchants and partners can add Level 2 and 3 data to payments to reduce risk and payment processing costs. For more information about processing payments, see <a href="https://developer.paypal.com/docs/checkout/advanced/processing/">checkout</a> or <a href="https://developer.paypal.com/docs/multiparty/checkout/advanced/processing/">multiparty checkout</a>. */
export interface CardSupplementaryData {
  /** The level 2 card processing data collections. If your merchant account has been configured for Level 2 processing this field will be passed to the processor on your behalf. Please contact your PayPal Technical Account Manager to define level 2 data for your business. */
  level2?: Level2CardProcessingData;
  /** The level 3 card processing data collections, If your merchant account has been configured for Level 3 processing this field will be passed to the processor on your behalf. Please contact your PayPal Technical Account Manager to define level 3 data for your business. */
  level3?: Level3CardProcessingData;
}

export const cardSupplementaryDataSchema: Schema<CardSupplementaryData> = object(
  {
    level2: ['level_2', optional(lazy(() => level2CardProcessingDataSchema))],
    level3: ['level_3', optional(lazy(() => level3CardProcessingDataSchema))],
  }
);
