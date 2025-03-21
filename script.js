// Connect Wallet
document.getElementById("connectWallet").addEventListener("click", async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
        const walletAddress = accounts[0];
        document.getElementById("walletAddress").innerText = `Connected: ${walletAddress}`;
      } catch (error) {
        console.error("Error connecting wallet:", error);
      }
    } else {
      alert("Please install MetaMask!");
    }
  });
  
  // Purchase Content
  document.getElementById("purchaseContent").addEventListener("click", async () => {
    const contentHash = document.getElementById("contentHashInput").value;
    const amount = document.getElementById("amountInput").value;
    console.log(amount);
    if (!contentHash || !amount) {
      alert("Please enter a content hash and amount!");
      return;
    }
  
    try {
      const response = await fetch("http://localhost:3000/purchase", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ contentHash, amount }),
      });
      const data = await response.json();
      console.log(data);
      document.getElementById("purchaseStatus").innerText = `Purchase Status: ${data.success ? "Success" : "Failed"}`;
    } catch (error) {
      console.error("Error purchasing content:", error);
    }
  });