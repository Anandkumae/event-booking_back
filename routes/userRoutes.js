// Get user profile & booked events
router.get('/profile', authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    const bookedEvents = await Event.find({ bookedBy: req.user.id });

    res.status(200).json({ user, bookedEvents });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
