const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'youremail@gmail.com',
    pass: 'yourpassword'
  }
});

const  mailOptions = {
  from: 'youremail@gmail.com',
  to: 'other@yahoo.com',
  subject: 'Sending Email using Node.js',
  //for text mail
 text: 'That was easy!',
 // for html mail
// html:`<p>this is html mail</p>`
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
