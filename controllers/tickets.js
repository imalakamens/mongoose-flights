const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

module.exports = {
    new: newTicket,
};

function newTicket(req, res) {
    res.render('tickets/new')
    console.log(req.body, 'this req.body')
}