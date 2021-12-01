const express = require('express');
const router = express.Router();

const authController = require('../controllers/auth.controller')
const version = 'v1';

router.post(`/${version}/signin`,authController.postSignin);

module.exports = router;