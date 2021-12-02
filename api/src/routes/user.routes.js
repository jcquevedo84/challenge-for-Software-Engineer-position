const express = require('express');
const jwt = require("../utils/jwt.utils");
const router = express.Router();
const userController = require('../controllers/user.controller')
const version = 'v1';

//console.log(req.headers.authorization)
router.post(`/${version}/user`,userController.postUser);
router.get(`/${version}/user`,userController.getUser)
router.get(`/${version}/user/:id`,userController.getUserById)
router.put(`/${version}/user/:id`,userController.putUserById)
router.delete(`/${version}/user/:id`,userController.deleteUserById)

module.exports = router;