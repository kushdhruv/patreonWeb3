// backend/app.js
const express = require("express");
const { ethers } = require("ethers");
const cors = require("cors"); // Import the cors package
require("dotenv").config({ path: "../.env" });
const app = express();
//require("dotenv").config();

// Middleware for JSON parsing
app.use(express.json());
app.use(cors()); // Use the cors middleware

// Initialize ethers.js provider and contract
const provider = new ethers.JsonRpcProvider(process.env.POLYGON_AMOY_RPC_URL);

const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
const contentPaymentABI = require("./contracts/ContentPaymentABI.json");
const contentPaymentAddress = process.env.CONTENT_PAYMENT_ADDRESS;
const contentPaymentContract = new ethers.Contract(contentPaymentAddress, contentPaymentABI, wallet);

// Purchase content endpoint
app.post("/purchase", async (req, res) => {
  const { contentHash, amount } = req.body;

  try {
    // Convert amount to wei (smallest unit of MATIC)
    const amountInWei = ethers.parseEther(amount.toString());
    console.log(amountInWei);
    const tx = await contentPaymentContract.purchaseContent(amountInWei, contentHash);
    
    await tx.wait();
    console.log(tx.hash);
    res.json({ success: true, transactionHash: tx.hash });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));