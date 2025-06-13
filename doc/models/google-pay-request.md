
# Google Pay Request

Information needed to pay using Google Pay.

## Structure

`GooglePayRequest`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `name` | `string \| undefined` | Optional | The full name representation like Mr J Smith.<br><br>**Constraints**: *Minimum Length*: `3`, *Maximum Length*: `300` |
| `emailAddress` | `string \| undefined` | Optional | The internationalized email address.<blockquote><strong>Note:</strong> Up to 64 characters are allowed before and 255 characters are allowed after the <code>@</code> sign. However, the generally accepted maximum length for an email address is 254 characters. The pattern verifies that an unquoted <code>@</code> sign exists.</blockquote><br><br>**Constraints**: *Minimum Length*: `3`, *Maximum Length*: `254`, *Pattern*: ``^(?:[A-Za-z0-9!#$%&'*+/=?^_`{\|}~-]+(?:\.[A-Za-z0-9!#$%&'*+/=?^_`{\|}~-]+)*\|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]\|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?\.)+[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?\|\[(?:(?:25[0-5]\|2[0-4][0-9]\|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]\|2[0-4][0-9]\|[01]?[0-9][0-9]?\|[A-Za-z0-9-]*[A-Za-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]\|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$`` |
| `phoneNumber` | [`PhoneNumberWithCountryCode \| undefined`](../../doc/models/phone-number-with-country-code.md) | Optional | The phone number in its canonical international [E.164 numbering plan format](https://www.itu.int/rec/T-REC-E.164/en). |
| `card` | `unknown \| undefined` | Optional | The payment card information. |
| `decryptedToken` | [`GooglePayDecryptedTokenData \| undefined`](../../doc/models/google-pay-decrypted-token-data.md) | Optional | Details shared by Google for the merchant to be shared with PayPal. This is required to process the transaction using the Google Pay payment method. |
| `assuranceDetails` | `unknown \| undefined` | Optional | - |
| `attributes` | [`GooglePayCardAttributes \| undefined`](../../doc/models/google-pay-card-attributes.md) | Optional | Additional attributes associated with the use of this card. |

## Example (as JSON)

```json
{
  "name": "name4",
  "email_address": "email_address2",
  "phone_number": {
    "country_code": "country_code2",
    "national_number": "national_number6"
  },
  "card": {
    "key1": "val1",
    "key2": "val2"
  },
  "decrypted_token": {
    "message_id": "message_id0",
    "message_expiration": "message_expiration2",
    "payment_method": "CARD",
    "authentication_method": "PAN_ONLY",
    "cryptogram": "cryptogram6",
    "eci_indicator": "eci_indicator0"
  }
}
```

