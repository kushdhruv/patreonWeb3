import express, { json } from 'express';
import { connect } from 'mongoose';
import authRoutes from './routes/authRoutes';
import contentRoutes from './routes/contentRoutes';
import chatRoutes from './routes/chatRoutes';
import { connectToWeb3 } from './utils/web3';
import { connectToIPFS } from './utils/ipfs';

const app = express();
require('dotenv').config();

// Middleware
app.use(json());

// Routes
app.use('/auth', authRoutes);
app.use('/content', contentRoutes);
app.use('/chat', chatRoutes);

// Connect to MongoDB
connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('MongoDB connection error:', err));

// Connect to Web3 and IPFS
connectToWeb3();
connectToIPFS();

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));