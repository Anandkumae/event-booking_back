const express = require('express');
const router = express.Router();
const { bookEvent, getUserBookings } = require('../controllers/bookingController');
const protect = require('../middlewares/authMiddleware');

router.post('/:eventId', protect, bookEvent);
router.get('/', protect, getUserBookings);

module.exports = router;
