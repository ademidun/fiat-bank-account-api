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
  "chain_id": 1,
  "token_address": "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE", #0xEe is the placeholder for the native currency of a respective blockchain. https://github.com/DePayFi/widgets/issues/57#issuecomment-1166229695
  "source_amount": 100,
  "destination_address": "abcde"
}

# mock responses

MOCK_ASSET_DATA = {
  "account_id": "non-registered-crypto-123",
  "currency_symbol": "CAD",
  "amount": 100,
  "label": "crypto"
}

MOCK_LOGIN_RESPONSE = {
  "jwt": "abcde12345",
  "user_id": "user-123"
}

MOCK_BALANCES_RESPONSE = {
  "assets": [MOCK_ASSET_DATA]
}

MOCK_TRANSFER_RESPONSE = {
  "transaction_hash": "abcdefghijklmn",
  "chain_id": "1",
}

