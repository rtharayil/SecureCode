from flask import Flask, make_response

app = Flask(__name__)

@app.route('/')
def hello_world():
    resp = make_response('Hello, World!')
    resp.set_cookie('username', 'flask', secure=True,samesite='None', httponly=True)
    return resp