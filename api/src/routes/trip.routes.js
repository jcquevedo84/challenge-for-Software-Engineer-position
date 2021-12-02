const express = require('express');
const router = express.Router();

const tripController = require('../controllers/trip.controller')
const version = 'v1';

router.post(`/${version}/trip`,tripController.postTrip);
router.get(`/${version}/trip`,tripController.getTrip)


module.exports = router;