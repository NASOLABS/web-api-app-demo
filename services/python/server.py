from flask import Flask
# from flask_cors import CORS
from health_status import health_status_blueprint

app = Flask(__name__)
# CORS(app)

print("Registering endpoint")

app.register_blueprint(health_status_blueprint)


@app.route("/", methods=["GET"])
def top_func():
    print("Calling / Endpoint")
    return "Python Server ok - Hello Intens"


if __name__ == "__main__":
    app.run(host="0.0.0.0", debug=True)
