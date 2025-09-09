const router = require('express').Router();
const { createShipment, addHop, addFlight } = require('../controllers/shipment.controller');

router.post('/create', createShipment);
router.post('/:shipment_number/hops/add', addHop);
router.post('/:id/flights/add', addFlight);

module.exports = router;