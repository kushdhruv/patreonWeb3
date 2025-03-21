// backend/routes/authRoutes.js
const express = require("express");
const router = express.Router();

// Connect wallet
router.post("/connect", async (req, res) => {
  const { signature, message } = req.body;

  // Verify the signature (pseudo-code)
  const verified = verifySignature(signature, message);
  if (verified) {
    res.json({ success: true, address: message.address });
  } else {
    res.status(401).json({ success: false, error: "Invalid signature" });
  }
});

module.exports = router;