const express = require('express');
const router = express.Router();

const { createEvent, getAllEvents, updateEvent, deleteEvent } = require('../controllers/eventController');
const authMiddleware = require('../middleware/authMiddleware');
const isAdmin = require('../middleware/isAdmin'); // ✅ Add this line

// Public route
router.get('/', getAllEvents);

// Protected (admin only) routes
router.post('/', authMiddleware, isAdmin, createEvent);
router.put('/:id', authMiddleware, isAdmin, updateEvent);
router.delete('/:id', authMiddleware, isAdmin, deleteEvent);

module.exports = router;




