const router = require('express').Router();
const { createShipment } = require('../controllers/shipment.controller');

router.post('/create', createShipment);

module.exports = router;