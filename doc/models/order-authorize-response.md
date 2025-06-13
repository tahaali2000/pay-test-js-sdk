
# Order Authorize Response

## Structure

`OrderAuthorizeResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `createTime` | `string \| undefined` | Optional | The date and time, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6). Seconds are required while fractional seconds are optional.<blockquote><strong>Note:</strong> The regular expression provides guidance but does not reject all invalid dates.</blockquote><br><br>**Constraints**: *Minimum Length*: `20`, *Maximum Length*: `64`, *Pattern*: `^[0-9]{4}-(0[1-9]\|1[0-2])-(0[1-9]\|[1-2][0-9]\|3[0-1])[T,t]([0-1][0-9]\|2[0-3]):[0-5][0-9]:([0-5][0-9]\|60)([.][0-9]+)?([Zz]\|[+-][0-9]{2}:[0-9]{2})$` |
| `updateTime` | `string \| undefined` | Optional | The date and time, in [Internet date and time format](https://tools.ietf.org/html/rfc3339#section-5.6). Seconds are required while fractional seconds are optional.<blockquote><strong>Note:</strong> The regular expression provides guidance but does not reject all invalid dates.</blockquote><br><br>**Constraints**: *Minimum Length*: `20`, *Maximum Length*: `64`, *Pattern*: `^[0-9]{4}-(0[1-9]\|1[0-2])-(0[1-9]\|[1-2][0-9]\|3[0-1])[T,t]([0-1][0-9]\|2[0-3]):[0-5][0-9]:([0-5][0-9]\|60)([.][0-9]+)?([Zz]\|[+-][0-9]{2}:[0-9]{2})$` |
| `id` | `string \| undefined` | Optional | The ID of the order. |
| `paymentSource` | [`OrderAuthorizeResponsePaymentSource \| undefined`](../../doc/models/order-authorize-response-payment-source.md) | Optional | The payment source used to fund the payment. |
| `intent` | [`CheckoutPaymentIntent \| undefined`](../../doc/models/checkout-payment-intent.md) | Optional | The intent to either capture payment immediately or authorize a payment for an order after order creation. |
| `processingInstruction` | [`ProcessingInstruction \| undefined`](../../doc/models/processing-instruction.md) | Optional | The instruction to process an order.<br><br>**Default**: `ProcessingInstruction.NOINSTRUCTION`<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `36`, *Pattern*: `^[0-9A-Z_]+$` |
| `payer` | [`Payer \| undefined`](../../doc/models/payer.md) | Optional | - |
| `purchaseUnits` | [`PurchaseUnit[] \| undefined`](../../doc/models/purchase-unit.md) | Optional | An array of purchase units. Each purchase unit establishes a contract between a customer and merchant. Each purchase unit represents either a full or partial order that the customer intends to purchase from the merchant.<br><br>**Constraints**: *Minimum Items*: `1`, *Maximum Items*: `10` |
| `status` | [`OrderStatus \| undefined`](../../doc/models/order-status.md) | Optional | The order status.<br><br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `255`, *Pattern*: `^[0-9A-Z_]+$` |
| `links` | [`LinkDescription[] \| undefined`](../../doc/models/link-description.md) | Optional | An array of request-related [HATEOAS links](/api/rest/responses/#hateoas-links) that are either relevant to the issue by providing additional information or offering potential resolutions.<br><br>**Constraints**: *Minimum Items*: `1`, *Maximum Items*: `4` |

## Example (as JSON)

```json
{
  "processing_instruction": "NO_INSTRUCTION",
  "create_time": "create_time0",
  "update_time": "update_time4",
  "id": "id4",
  "payment_source": {
    "card": {
      "name": "name6",
      "last_digits": "last_digits0",
      "brand": "SYNCHRONY",
      "available_networks": [
        "DELTA"
      ],
      "type": "UNKNOWN"
    },
    "paypal": {
      "email_address": "email_address0",
      "account_id": "account_id4",
      "account_status": "VERIFIED",
      "name": {
        "given_name": "given_name2",
        "surname": "surname8"
      },
      "phone_type": "FAX"
    },
    "apple_pay": {
      "id": "id0",
      "token": "token6",
      "name": "name0",
      "email_address": "email_address8",
      "phone_number": {
        "national_number": "national_number6"
      }
    },
    "google_pay": {
      "name": "name8",
      "email_address": "email_address6",
      "phone_number": {
        "country_code": "country_code2",
        "national_number": "national_number6"
      },
      "card": {
        "name": "name6",
        "last_digits": "last_digits0",
        "type": "UNKNOWN",
        "brand": "SYNCHRONY",
        "billing_address": {
          "address_line_1": "address_line_12",
          "address_line_2": "address_line_28",
          "admin_area_2": "admin_area_28",
          "admin_area_1": "admin_area_14",
          "postal_code": "postal_code0",
          "country_code": "country_code8"
        }
      }
    },
    "venmo": {
      "email_address": "email_address4",
      "account_id": "account_id8",
      "user_name": "user_name2",
      "name": {
        "given_name": "given_name2",
        "surname": "surname8"
      },
      "phone_number": {
        "national_number": "national_number6"
      }
    }
  },
  "intent": "CAPTURE"
}
```

