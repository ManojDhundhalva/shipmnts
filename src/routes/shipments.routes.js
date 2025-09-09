const router = require('express').Router();
const { createShipment, addHop } = require('../controllers/shipment.controller');

router.post('/create', createShipment);
router.post('/:shipment_number/hops/add', addHop);

module.exports = router;