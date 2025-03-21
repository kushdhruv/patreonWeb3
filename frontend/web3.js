// src/web3.js
import { ethers } from "ethers";

const POLYGON_AMOY_RPC_URL = "https://rpc-amoy.polygon.technology"; // Mumbai Testnet
const CONTENT_PAYMENT_ADDRESS = ""; // Replace with your contract address
const CONTENT_PAYMENT_ABI = [/* Paste your ContentPayment ABI here */];

// Initialize provider and contract
const provider = new ethers.providers.JsonRpcProvider(POLYGON_AMOY_RPC_URL);
const contentPaymentContract = new ethers.Contract(
  CONTENT_PAYMENT_ADDRESS,
  CONTENT_PAYMENT_ABI,
  provider
);

export { provider, contentPaymentContract };