/**
 * PayPal REST APIsLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

/** The date and time stamps that are common to authorized payment, captured payment, and refund transactions. */
export interface ActivityTimestamps {
  /** The date and time, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6). Seconds are required while fractional seconds are optional.<blockquote><strong>Note:</strong> The regular expression provides guidance but does not reject all invalid dates.</blockquote> */
  createTime?: string;
  /** The date and time, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6). Seconds are required while fractional seconds are optional.<blockquote><strong>Note:</strong> The regular expression provides guidance but does not reject all invalid dates.</blockquote> */
  updateTime?: string;
}

export const activityTimestampsSchema: Schema<ActivityTimestamps> = object({
  createTime: ['create_time', optional(string())],
  updateTime: ['update_time', optional(string())],
});
