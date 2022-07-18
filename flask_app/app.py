from audioop import add
from flask import Flask, request
from flask_cors import CORS

from mocks import SUPPORTED_EXCHANGES, MOCK_BALANCES_RESPONSE, MOCK_LOGIN_RESPONSE, MOCK_TRANSFER_RESPONSE

app = Flask(__name__)
CORS(app) # supports_credentials=True

# another method/route to get exchanges we support

@app.route("/")
def home():
    return "Flask is working!", 200

@app.route("/api/v1/login", methods=["POST"])
# log into the crypto exchange service
def login():
  args = request.args
  exchange = args.get("exchange")
  username = args.get("username")
  password = args.get("password")
  exchange_api = SUPPORTED_EXCHANGES[exchange]

  print(exchange_api, username, password)

  # send request to API
  return MOCK_LOGIN_RESPONSE

@app.route("/api/v1/balances", methods=['GET'])
def balances():
  args = request.args
  user_id = args.get("user_id")

  if(user_id):
    return MOCK_BALANCES_RESPONSE

@app.route("/api/v1/transfer", methods=['POST'])
def transfer():
  args = request.args
  account_id = args.get("account_id")
  source_currency = args.get("source_currency")
  destination_currency = args.get("destination_currency")
  source_amount = args.get("source_amount")
  address = args.get("address")

  print(account_id, source_currency, destination_currency, source_amount, address)

  return MOCK_TRANSFER_RESPONSE


if __name__ == '__main__':
  app.run(debug=True, host='0.0.0.0', port=8000)