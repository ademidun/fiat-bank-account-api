# mock params

MOCK_LOGIN_PARAM = {
  "exchange": "Wealthsimple",
  "username": "me@wealthsimple.com",
  "password": "amazing_api"
}

MOCK_BALANCES_PARAM = {
  "user_id": "user-123"
}

MOCK_TRANSFER_PARAMS = {
  "account_id": "non-registered-crypto-123",
  "source_currency": "CAD",
  "destination_currency": "ETH",
  "source_amount": 100,
  "destination_address": "abcde"
}

# mock responses

MOCK_ACCOUNT_DATA = {
  "account_id": "non-registered-crypto-123",
  "currency": "CAD",
  "balance": 100,
  "label": "crypto"
}

MOCK_LOGIN_RESPONSE = {
  "jwt": "abcde12345",
  "user_id": "user-123"
}

MOCK_BALANCES_RESPONSE = {
  "accounts": [MOCK_ACCOUNT_DATA]
}

MOCK_TRANSFER_RESPONSE = {
  "transaction_hash": "abcdefghijklmn",
  "chain_id": "1",
}

