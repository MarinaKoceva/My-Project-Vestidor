// server.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const itemsRoutes = require('./routes/items');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/items', itemsRoutes);

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.error('Error connecting to MongoDB:', err));

// Start server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
