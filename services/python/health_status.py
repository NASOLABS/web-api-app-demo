from flask import Blueprint

health_status_blueprint = Blueprint('health_status_blueprint', __name__, url_prefix="")

@health_status_blueprint.route('/health')
def get_health_status():
    print("Calling /health Endpoint")
    return "Python Server HEALTH STATUS is ok"
