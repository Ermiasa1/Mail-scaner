require('dotenv').config()
var mail = {
        user_name : process.env.MAIL_ID,
        pass_word : process.env.MAIL_PASS,
        host : process.env.MA_HOST
    };
module.exports ={
    mail : mail
};