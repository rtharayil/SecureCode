app.get('/', (req,res)=>{

    // Set cookie options
    let options = {
        maxAge: 1000 * 60 * 60 * 24,
        httpOnly: true,
    }

    // Convert user details to Base64
    let buff = userDetails;
    let base64data = buff.toString('base64');

    // Set cookie
    res.cookie('user', base64data, options) // options is optional
    res.send('')

})