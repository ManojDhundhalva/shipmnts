const router = require('express').Router();
const { trackShipment } = require('../controllers/track.controller');

router.get('/shipment/:shipment_number', trackShipment);

module.exports = router;