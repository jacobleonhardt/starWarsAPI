from flask import Flask
from .config import Config
import requests

app = Flask(__name__)

app.config.from_object(Config)
base = app.config["BASE"]


@app.route('/')
def hello():
    req = requests.get(f"{base}/people/1")
    res = req.json()
    print('>>>>>>>>>>', res)
    return '<h1>Hello, world!</h1>'


# @app.route('/luke-skywalker')
# def hello():
