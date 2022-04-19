import json

from flask import Flask

app = Flask(__name__)

payments = [
  {
    'position': 1,
    'date': '28.03.2022',
    'payment': '30250',
    'status': 'оплачено'
  },
  {
    'position': 2,
    'date': '28.02.2022',
    'payment': '30250',
    'status': 'оплачено',
  },
  {
    'position': 3,
    'date': '28.01.2022',
    'payment': '30250',
    'status': 'оплачено',
  },
  {
    'position': 4,
    'date': '28.12.2021',
    'payment': '30250',
    'status': 'оплачено',
  },
  {
    'position': 5,
    'date': '28.11.2021',
    'payment': '30250',
    'status': 'оплачено',
  }
]


@app.route('/payments/1')
def get_payments():
  return json.dumps(payments)
