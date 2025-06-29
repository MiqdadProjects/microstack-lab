from flask import Flask, jsonify
import os

app = Flask(__name__)

@app.route('/greet', methods=['GET'])
def greet():
    user = os.environ.get('USER_NAME', 'World')
    return jsonify(message=f"Hello, {user} from Flask!")

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000)