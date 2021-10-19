import os


class Config(object):
    APP = os.environ.get('FLASK_APP')
    DEV = os.environ.get('FLASK_ENV')
    BASE = os.environ.get('API_BASE_URL')
