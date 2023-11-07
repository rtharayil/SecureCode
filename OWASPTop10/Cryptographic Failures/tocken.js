function generateForgotPasswordToken(username) {
    var time = new Date();

    return createHash('sha256').update(time.getHours() + ":" + time.getMinutes() + username).digest('hex');
}