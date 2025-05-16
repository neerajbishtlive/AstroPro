const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

const app = express();
dotenv.config();
connectDB();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => res.send('API is running'));

// Routes
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/consultants', require('./routes/consultantRoutes'));
app.use('/api/wallet', require('./routes/walletRoutes'));

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

// Graceful error handling
server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`❌ Port ${PORT} is already in use`);
    process.exit(1);
  } else {
    console.error('❌ Unhandled server error:', err);
  }
});