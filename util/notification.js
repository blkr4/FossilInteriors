const sendgrid = require('../config/app-config').sendgrid_api_key;
const nodemailer = require('nodemailer');
const sendgridTransport = require('nodemailer-sendgrid-transport');
const sgMail = require('@sendgrid/mail');
const fs = require('fs')

// Configure Nodemailer SendGrid Transporter
const transporter = nodemailer.createTransport(
  sendgridTransport({
    auth: {
      api_key: sendgrid
    }
  })
);


const singleDynamicMail = async (from, content, subject, tempId) => {
  sgMail.setApiKey(sendgrid);
  sgMail.setSubstitutionWrappers('{{', '}}');
  const msg = {
    personalizations: content,
    from: from,
    subject: '{{subject}}',
    templateId: tempId
  };
  try {
    await sgMail.send(msg);
  }
  catch (e) {
    console.log(e);
    return {errMsg: 'Mail not sent.',err: e}
  }
}




module.exports = {
  singleDynamicMail
};
