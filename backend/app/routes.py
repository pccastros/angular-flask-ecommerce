import os

from flask import jsonify, request, json
from app import app



@app.route('/hello', methods=['GET'])
def hello():

    return 'Hello Python!', 200


@app.route('/getProducts', methods=['GET'])
def getProducts():

    path = os.path.realpath(os.path.dirname(__file__)) + '/data.json'
    data = json.load(open(path))
    return json.dumps(data), 200



'''
@app.route('/getUsers', methods=['GET'])
def getUsers():

    users = User.query.all()
    res = jsonify([
        {
            "name": u.name,
            "phone": u.phone,
            "age": u.age
        } for u in users]
    )
    return res, 200
'''
