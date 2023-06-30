from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/health',methods=['GET'])
def health():
        return "ok"

if __name__ == '__main__':
    app.run(debug=True)