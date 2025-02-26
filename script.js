function generateOTP() {
    const otpLength = 4;
    let otp = '';
    const characters = '0123456789'; 

    for (let i = 0; i < otpLength; i++) {
        otp += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    document.getElementById('otp').value = otp;
}
