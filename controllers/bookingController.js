const Booking = require('../models/Booking');
const Event = require('../models/event');

exports.bookEvent = async (req, res) => {
  const event = await Event.findById(req.params.eventId);
  if (!event) return res.status(404).json({ message: 'Event not found' });

  if (event.ticketsAvailable <= 0)
    return res.status(400).json({ message: 'No tickets available' });

  const existing = await Booking.findOne({ event: event._id, user: req.user._id });
  if (existing)
    return res.status(400).json({ message: 'You have already booked this event' });

  const booking = await Booking.create({
    event: event._id,
    user: req.user._id
  });

  event.ticketsAvailable -= 1;
  await event.save();

  res.status(201).json({ message: 'Booking confirmed', booking });
};

exports.getUserBookings = async (req, res) => {
  const bookings = await Booking.find({ user: req.user._id }).populate('event');
  res.json(bookings);
};
