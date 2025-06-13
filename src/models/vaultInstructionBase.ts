/**
 * PayPal REST APIsLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema } from '../schema';
import {
  StoreInVaultInstruction,
  storeInVaultInstructionSchema,
} from './storeInVaultInstruction';

/** Basic vault instruction specification that can be extended by specific payment sources that supports vaulting. */
export interface VaultInstructionBase {
  /** Defines how and when the payment source gets vaulted. */
  storeInVault?: StoreInVaultInstruction;
}

export const vaultInstructionBaseSchema: Schema<VaultInstructionBase> = object({
  storeInVault: ['store_in_vault', optional(storeInVaultInstructionSchema)],
});
