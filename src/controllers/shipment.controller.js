let shipments = require("../data/shipment");

const createShipment = (req, res) => {

    const data = req.body;

    if(!data?.origin || !data?.destination || !data?.shipment_number) {
        return res.status(400).json({ success: false, message: "Origin and destination are required fields." });
    }

    const { origin, destination, shipment_number } = data;

    if(origin.trim() === "" || destination.trim() === "" || shipment_number.trim() === "") {
        return res.status(400).json({ success: false, message: "Origin and destination are required fields." });
    }

    // can check, if already exist shipment_number

    const shipment = {
        shipment_number,
        hops: [origin, destination]
    };

    shipments.push(shipment);

    return res.status(201).json({ success: true, message: "Shipment created successfully.", data: shipment });
};

const addHop = (req, res) => {

    const data = req.body;

    const shipment_number = req.params.shipment_number;

    if(!data?.previous_hop || !data?.next_hop || !data?.new_hop) {
        return res.status(400).json({ success: false, message: "Previous hop, next hop and new hop are required fields." });
    }

    const { previous_hop, next_hop, new_hop } = data;

    if(previous_hop.trim() === "" || next_hop.trim() === "" || new_hop.trim() === "") {
        return res.status(400).json({ success: false, message: "Previous hop, next hop and new hop are required fields." });
    }

    const isExist = shipments.find((shipment) => shipment.shipment_number == shipment_number);

    if(!isExist) {
        return res.status(404).json({ success: false, message: "Shipment with ID not found."});
    }

    let new_shipment = {};

    shipments = shipments.map((shipment) => {
      if (shipment.shipment_number === shipment_number) {
        shipment.hops.splice(shipment.hops.indexOf(next_hop), 0, new_hop);

        new_shipment = { shipment_number: shipment.shipment_number, hops: shipment.hops }

        return shipment;
      }
      return shipment;
    });

    return res.status(201).json({ success: true, message: "Hop added successfully.", data: new_shipment });
};

module.exports = { createShipment, addHop };