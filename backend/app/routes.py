import os

from flask import jsonify, request, json
from app import app

orders = []

@app.route('/hello', methods=['GET'])
def hello():

    return 'Hello Python!', 200


@app.route('/getProducts', methods=['GET'])
def getProducts():

    path = os.path.realpath(os.path.dirname(__file__)) + '/data.json'
    data = json.load(open(path))
    return json.dumps(data), 200


@app.route('/createOrder', methods=['POST'])
def createOrder():

    # Validate JSON format
    if request.is_json:
        data = request.get_json()
        order = {
            'customer': data['customer'],
            'items': data['items']
        }
        orders.append(order)
        res = jsonify({'msg': 'Order created successfully'})
        return res

    # Invalid JSON format
    else:
        return {"msg": "Invalid JSON format"}


@app.route('/getOrders', methods=['GET'])
def getOrders():
    return json.dumps(orders), 200

