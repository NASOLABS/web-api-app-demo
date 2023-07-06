from flask import Flask
from flask_cors import CORS
from health_status import health_status_blueprint

app = Flask(__name__)
CORS(app)
app.register_blueprint(health_status_blueprint)

@app.route('/',methods=['GET'])
def top_func():
        return "Python Server ok"

if __name__ == '__main__':
    app.run(debug=True)