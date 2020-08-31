const Ticket = require('../models/ticket');
const Flight = require('../models/flight');


module.exports = {
    new: newTicket,
    create
};

function newTicket(req, res) {
    console.log('this is req params', req.params.id);
    res.render('tickets/new', { 
        title: 'New Ticket-maker',
        // assigning to flightID to pass req.params...
        flightId: req.params.id,
    })
    console.log(`req params at the end of new ticket, "${req.params.id}"`);
};


function create(req, res) {
    console.log(`req params in create action, "${req.params}"`);
    const flightId = req.params.id;
    req.body.flight = flightId;
 
    console.log('req body in create action',req.body);
    const ticket = new Ticket(req.body);
    ticket.save( err => {
        if(err) return res.redirect('tickets/new');
        res.redirect(`/flights/${flightId}`);
    });
};