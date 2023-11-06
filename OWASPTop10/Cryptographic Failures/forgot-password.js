app.post('/forgot-password', (req, res) => {
    username = req.query.username
    token = crypto.createHash('md5').update(username).digest("hex")
    allow_password_reset(username)
    send_password_reset_email(username, token)
    res.send('Check your email!')
  })