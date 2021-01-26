let router = require('express').Router();

const userController = require('../controllers/user.controller');

router.post('/', (req, res) => {
  userController.create(req, res);
});


module.exports = router;