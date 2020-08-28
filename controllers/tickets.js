const Ticket = require('../models/ticket');
const Flight = require('../models/flight');
const ticket = require('../models/ticket');

module.exports = {
    new: newTicket,
    create
};

function newTicket(req, res) {
    res.render('tickets/new');
}

function create(req, res) {
   Flight.findById(req.params.id, (err, flight) => {
    Ticket.create(req.body, (err, tickets) => {} )
    // ticket.save;
    res.redirect(`flights/`)
   });
   
};
