const router = require('express').Router();
const { updateFlight } = require('../controllers/flight.controller');

router.post('/:flight_id/status', updateFlight);

module.exports = router;