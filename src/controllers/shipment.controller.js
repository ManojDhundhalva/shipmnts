// {
//   "origin": "Ahmedabad", (required)
//   "destination": "New York",(required)
//   “shipment_number”: ‘12345’ (required)
// }

const shipments = require("../data/shipment");

const createShipment = (req, res) => {

    const data = req.body;

    if(!data?.origin || !data?.destination || !data?.shipment_number) {
        return res.status(400).json({ success: false, message: "Origin and destination are required fields." });
    }

    const { origin, destination, shipment_number } = data;

    if(origin.trim() === "" || destination.trim() === "" || shipment_number.trim() === "") {
        return res.status(400).json({ success: false, message: "Origin and destination are required fields." });
    }

    const shipment = {
        shipment_number,
        hops: [origin, destination]
    };

    shipments.push(shipment);

    return res.status(201).json({ success: true, message: "Shipment created successfully.", data: shipment });
};

module.exports = { createShipment };