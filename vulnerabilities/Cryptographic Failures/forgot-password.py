@app.route('/forgot-password', methods=['POST'])
def forgot_password():
    username = request.args.get('username')
    token = hashlib.md5(username.encode()).hexdigest()
    allow_password_reset(username)
    send_password_reset_email(username, token)
    return 'Check your email!'