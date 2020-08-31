const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

module.exports = {
    index,
    new: newFlight,
    create,
    show
};

function index(req, res) {
    Flight.find({}, (err, flights) => {
        res.render('flights/index', { flights }); //rendering a URI endpoint, with every flight(flights)
})
}

function newFlight(req, res) {
    res.render('flights/new')
};

function create(req, res) {
    let defaultDate = new Date(new Date().setFullYear(new Date().getFullYear() + 1)); 
    req.body.airport == '' ? req.body.airport = 'DEN' : req.body.airport = req.body.airport;
    req.body.departs == '' ? req.body.departs = defaultDate : req.body.departs = req.body.departs;
    const flight = new Flight(req.body);
    flight.save( err => {
        if(err) return res.redirect('/flights/new');
        res.redirect('/flights');
    });
    console.log(req.body)
};

function show(req, res) {
    Flight.findById(req.params.id, (err, flight) => {
        Ticket.find({flight: flight._id}, (err, tickets) => {
            res.render('flights/show', {title: 'Flight Detail', flight, tickets })
        });
    });
};