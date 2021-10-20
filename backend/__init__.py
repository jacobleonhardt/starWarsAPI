from flask import Flask
from .config import Config
from .api.routes import character_routes

app = Flask(__name__)

app.config.from_object(Config)

app.register_blueprint(character_routes, url_prefix='/api/character')
