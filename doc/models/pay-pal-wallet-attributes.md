
# Pay Pal Wallet Attributes

Additional attributes associated with the use of this PayPal Wallet.

## Structure

`PayPalWalletAttributes`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `customer` | [`PayPalWalletCustomerRequest \| undefined`](../../doc/models/pay-pal-wallet-customer-request.md) | Optional | - |
| `vault` | [`PayPalWalletVaultInstruction \| undefined`](../../doc/models/pay-pal-wallet-vault-instruction.md) | Optional | - |

## Example (as JSON)

```json
{
  "customer": {
    "id": "id0",
    "email_address": "email_address2",
    "phone": {
      "phone_type": "OTHER",
      "phone_number": {
        "national_number": "national_number6"
      }
    },
    "merchant_customer_id": "merchant_customer_id2"
  },
  "vault": {
    "store_in_vault": "ON_SUCCESS",
    "description": "description6",
    "usage_pattern": "THRESHOLD_PREPAID",
    "usage_type": "MERCHANT",
    "customer_type": "CONSUMER",
    "permit_multiple_payment_tokens": false
  }
}
```

