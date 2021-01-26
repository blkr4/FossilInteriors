const RESPONSE = require('../util/construct-response');

const { User } = require("../models");

const notify = require('../util/notification');

const admin_emails = [
  { "email": 'bhagyalakshmi.k.raju@gmail.com' },
  { "email": 'thefossilinteriors@gmail.com'}
];

exports.create = (req, res) => {
  const toCreate = req.body;
  User.create(toCreate).then(async (created) => {
    // Email trigger to admin for notifying the form submission
    let dynamicContentForAdmin = [{
      "to": admin_emails,
      "subject": `Form Submission`,
      "dynamic_template_data": {
        "name": toCreate.name || '',
        "email": toCreate.email || '',
        "mobileNo": toCreate.mobileNo || '',
        "description": toCreate.description || '',
        "budget": toCreate.budget || '',
        "subject": `Form Submission`
      }
    }];
    await notify.singleDynamicMail(
      toCreate.email,
      dynamicContentForAdmin,
      `Form Submission`,
      'd-f92720a5b14f47278b09b1008a88090d'
    );
    RESPONSE.success(res, 200, 'Submitted form successfully', {
      created
    });
  }).catch(error => {
    RESPONSE.error(res, 400, 'Bad Request', error);
  })
}

exports.getAll = (req, res) => {
  User.findAll().then((users) => {
    RESPONSE.success(res, 200, 'List of Users', {
      users
    });
  }).catch(error => {
    RESPONSE.error(res, 400, 'Bad Request', error);
  })
}
