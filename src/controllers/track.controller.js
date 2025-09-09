const flights = require("../data/flights");
const shipments = require("../data/shipments");

const trackShipment = (req, res) => {

    const shipment_number = req.params.shipment_number;

    const shipment_flights = flights.filter((flight) => flight.shipment_number === shipment_number);

    if(!shipment_flights) {
        return res.status(400).json({ success: false, message: `Shipment with ID ${shipment_number} not found.` });
    }
    
    shipment_flights.sort((a, b) => a.departure < b.departure);

    const cur_shipment = shipments.find((shipment) => shipment.shipment_number == shipment_number);

    const progress_percentage = Math.round(((shipment_flights.length) / (cur_shipment.hops.length - 1)) * 100);

    const current_location = shipment_flights.at(-1).flight_path.slice(' ').length;

    console.log(current_location);

    const data = {
        shipment_number,
        current_location,
        progress_percentage,
        status: progress_percentage == 100 ? "Completed" : "In Transit"
    };

    return res.status(400).json({ success: true, message: "Shipment tracking details retrieved.", data });
};

module.exports = { trackShipment };