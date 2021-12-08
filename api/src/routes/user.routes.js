const express = require('express');
const jwt = require("../utils/jwt.utils");
const router = express.Router();
const userController = require('../controllers/user.controller')
const config = require('../config')
const version = 'v1';

router.post(`/${version}/user`, jwt.authorize([config.roles.Admin,config.roles.Adviser]),userController.postUser);
router.get(`/${version}/user`, jwt.authorize([config.roles.Admin,config.roles.Adviser]), userController.getUser)
router.get(`/${version}/user/:id`, jwt.authorize([config.roles.Admin,config.roles.Adviser]), userController.getUserById)
router.put(`/${version}/user/:id`, jwt.authorize([config.roles.Admin,config.roles.User]), userController.putUserById)
router.delete(`/${version}/user/:id`, jwt.authorize([config.roles.Admin]), userController.deleteUser)

module.exports = router;