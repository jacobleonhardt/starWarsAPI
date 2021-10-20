import os
from flask import Blueprint, jsonify, request
import requests

character_routes = Blueprint('character', __name__)

base = os.environ.get('API_BASE_URL')


@character_routes.route('/luke-skywalker')
def luke():
    print('>>>>>>> HERE <<<<<<<<')
    req = requests.get(f"{base}/people/1/")
    res = req.json()
    return res
