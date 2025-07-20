
const express = require('express');
const router = express.Router();

const { getAllEvents, createEvent } = require('../controllers/eventController');
const authMiddleware = require('../middleware/authMiddleware');
const isAdmin = require('../middleware/isAdmin');

// GET all events
router.get('/', authMiddleware, getAllEvents);

// POST create event (admin only)
router.post('/', authMiddleware, isAdmin, createEvent);

module.exports = router;






