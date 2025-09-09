let flights = require("../data/flights");

const updateFlight = (req, res) => {

    const data = req.body;

    const flight_id = req.params.flight_id;
 
    if(!data?.status) {
        return res.status(400).json({ success: false, message: "Status is required fields." });
    }

    const isExist = flights.find((flight) => flight.flight_number === flight_id);

    if(!isExist) {
        return res.status(400).json({ success: false, message: `Flight with ID '${flight_id}' not found.` });
    }

    flights = flights.map((flight) => {
      if (flight.flights_number === flight_id) {
        return { ...flight, status: "landed"};
      }
      return flight;
    });

    return res.status(200).json({ success: true, message: "Shipment created successfully.", data: { flight_number: flight_id, status: "landed" } });
};


module.exports = { updateFlight };