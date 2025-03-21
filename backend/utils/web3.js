// backend/utils/web3.js
const { ethers } = require("ethers");

const provider = new ethers.providers.JsonRpcProvider(process.env.POLYGON_AMOY_RPC_URL);
const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
const contentPaymentABI = require("../contracts/ContentPaymentABI.json");
const contentPaymentAddress = process.env.CONTENT_PAYMENT_ADDRESS;
const contentPaymentContract = new ethers.Contract(contentPaymentAddress, contentPaymentABI, wallet);

module.exports = { provider, wallet, contentPaymentContract };