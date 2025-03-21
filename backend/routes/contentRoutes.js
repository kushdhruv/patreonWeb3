// backend/routes/contentRoutes.js
const express = require("express");
const { contentPaymentContract } = require("../utils/web3");
//const { uploadToIPFS } = require("../utils/ipfs");

const router = express.Router();

// Purchase content
router.post("/purchase", async (req, res) => {
  const { contentHash } = req.body;
  const amount = ethers.utils.parseEther("1"); // 1 MATIC

  try {
    const tx = await contentPaymentContract.purchaseContent(amount, contentHash);
    await tx.wait();
    res.json({ success: true, transactionHash: tx.hash });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Upload content to IPFS
// router.post("/upload", async (req, res) => {
//   const { content } = req.body;

//   try {
//     const ipfsHash = await uploadToIPFS(content);
//     res.json({ ipfsHash });
//   } catch (error) {
//     res.status(500).json({ error: "Failed to upload content to IPFS" });
//   }
// });

module.exports = router;