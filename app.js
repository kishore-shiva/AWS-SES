// const nodemailer = require('nodemailer');

// var transporter = nodemailer.createTransport({
//     service: 'email-smtp.us-east-2.amazonaws.com',
//     port: 25,
//     auth: {
//         user: 'AKIA2QOR6OGVGYJAS3NM',
//         pass: 'BORm7Bs1dsaOkkkH0nK+pCEYz70K4/O+7cLl4IOuUZT0'
//     }
// });

// var mailOptions = {
//     from: 'kishoreshiva.s@gmail.com',
//     to: 'kishoreshiva.s@gmail.com',
//     subject: 'Sending Email using Node.js',
//     text: 'this was a trial mail'
// };

// transporter.sendMail(mailOptions, function(error, info){
//     if (error) {
//         console.log(error);
//     } else {
//         console.log('Email sent: ' + info.response);
//     }
// });

// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
// Set the region 
AWS.config.update({region: 'us-east-2'});

// Create sendEmail params 
var params = {
  Destination: { /* required */
    ToAddresses: [
      //'jagajeetkuppala99@gmail.com',
      'kishoreshiva.s@gmail.com',
      'mageshsk16@gmail.com'
      /* more items */
    ]
  },
  Message: { /* required */
    Body: { /* required */
      Html: {
       Charset: "UTF-8",
       Data: "<h1>Test email from AWS SES</h1>"
      },
      Text: {
       Charset: "UTF-8",
       Data: "TEXT_FORMAT_BODY"
      }
     },
     Subject: {
      Charset: 'UTF-8',
      Data: 'Test email'
     }
    },
  Source: 'kishoreshiva.s@gmail.com', /* required */
};

// Create the promise and SES service object
var sendPromise = new AWS.SES({apiVersion: '2010-12-01'}).sendEmail(params).promise();

// Handle promise's fulfilled/rejected states
sendPromise.then(
  function(data) {
    console.log(data.MessageId);
  }).catch(
    function(err) {
    console.error(err, err.stack);
  });
