const express = require('express');
const { createEvent, getEvents } = require('../controllers/eventController');

// ✅ Import your middleware
const authMiddleware = require('../middleware/authMiddleware');

// ✅ Import your model
const Event = require('../models/Event');
const { auth, adminOnly } = require('../middleware/authMiddleware');

const router = express.Router();
// Book an event
router.post('/:id/book', authMiddleware, async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) return res.status(404).json({ message: 'Event not found' });

    if (!event.bookedBy.includes(req.user.id)) {
      event.bookedBy.push(req.user.id);
      await event.save();
    }

    res.status(200).json({ message: 'Event booked successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
// Update an event (Admin only)
router.put('/:id', authMiddleware, isAdmin, async (req, res) => {
  try {
    const updated = await Event.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Delete an event (Admin only)
router.delete('/:id', authMiddleware, isAdmin, async (req, res) => {
  try {
    await Event.findByIdAndDelete(req.params.id);
    res.json({ message: 'Event deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Public for testing with JWT
router.get('/', auth, getEvents);

// Only admins can create events
router.post('/', auth, adminOnly, createEvent);

module.exports = router;



