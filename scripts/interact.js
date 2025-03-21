// scripts/interact.js
const { ethers } = require("hardhat");

async function main() {
  // Load environment variables
  const POLYGON_RPC_URL = process.env.POLYGON_RPC_URL;
  const PRIVATE_KEY = process.env.PRIVATE_KEY;
  const CONTENT_PAYMENT_ADDRESS = process.env.CONTENT_PAYMENT_ADDRESS;

  // Check if required environment variables are set
  if (!POLYGON_RPC_URL || !PRIVATE_KEY || !CONTENT_PAYMENT_ADDRESS) {
    console.error("Please set POLYGON_RPC_URL, PRIVATE_KEY, and CONTENT_PAYMENT_ADDRESS in your .env file");
    process.exit(1);
  }

  // Set up provider and wallet
  const provider = new ethers.providers.JsonRpcProvider(POLYGON_RPC_URL);
  const wallet = new ethers.Wallet(PRIVATE_KEY, provider);

  // Load the ContentPayment contract ABI
  const ContentPayment = await ethers.getContractFactory("ContentPayment");
  const contentPayment = ContentPayment.attach(CONTENT_PAYMENT_ADDRESS);

  // Simulate purchasing content
  const contentHash = "QmExampleContentHash"; // Replace with actual IPFS content hash
  const amount = ethers.utils.parseEther("1"); // 1 MATIC

  console.log("Purchasing content...");
  const tx = await contentPayment.connect(wallet).purchaseContent(amount, contentHash);
  await tx.wait();

  console.log("Content purchased successfully!");
  console.log("Transaction Hash:", tx.hash);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });