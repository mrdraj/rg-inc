const withPWA = require('next-pwa');
require('dotenv').config();

module.exports = withPWA({
    pwa: {
        dest: 'public'
    },
    env: {
        "PROD_DB_HOST": process.env.PROD_DB_HOST,
        "PROD_DB_USERNAME": process.env.PROD_DB_USERNAME,
        "PROD_DB_PASSWORD": process.env.PROD_DB_PASSWORD,
        "PROD_DB_NAME": process.env.PROD_DB_NAME,
        "PROD_URL": "http://13.126.193.106",
        "DEV_URL": "http://localhost:3000",
        "API_URL": process.env.API_URL,
        "OTP_API": "https://www.joincongress.in/API/membership/sent_otp"
    },
    devIndicators: {
        autoPrerender: false
    }
});