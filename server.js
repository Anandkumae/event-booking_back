// ✅ Don't call the router like a function

const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');  // 👈 Don't add ()
const eventRoutes = require('./routes/eventRoutes'); // 👈 Don't add ()

dotenv.config();

const app = express();

app.use(express.json());

// DB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected!'))
  .catch(err => console.error(err));

// ✅ Use routers correctly
app.use('/api/auth', authRoutes);
app.use('/api/events', eventRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
