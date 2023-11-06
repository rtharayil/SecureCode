@app.route('/forgot-password', methods=['POST'])
def forgot_password():
    username = request.args.get('username')
    token = str(uuid.uuid4())
    allow_password_reset(username)
    get_user(username).set_user_reset_token(token)
    send_password_reset_email(username, token)
    return 'Check your email!'


















app.post('/forgot-password', (req, res) => {
  username = req.query.username
  token = uuidv4(); 
  allow_password_reset(username)
  get_user(username).set_user_reset_token(token)
  send_password_reset_email(username, token)
  res.send('Check your email!')
})