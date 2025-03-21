const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  // Use ethers.parseUnits instead of parseEther
  const initialSupply = ethers.parseUnits("10000", 18); // 10,000 tokens with 18 decimals
  console.log("Initial supply:", initialSupply.toString());

  try {
    const CreatorToken = await ethers.getContractFactory("CreatorToken");
    console.log("Deploying CreatorToken...");

    const creatorToken = await CreatorToken.deploy(initialSupply);

    console.log("Waiting for deployment to complete...");
    await creatorToken.waitForDeployment(); // Use waitForDeployment instead of deployed()

    console.log("CreatorToken deployed to:", creatorToken.target); // Use target to get the deployed address

    // Example: Interact with the contract
    const totalSupply = await creatorToken.totalSupply();
    console.log("Total supply:", ethers.formatUnits(totalSupply, 18)); // Format with 18 decimals
  } catch (error) {
    console.error("Error during deployment:", error);
  }
}

main().catch((error) => {
  console.error("Error:", error);
  process.exitCode = 1;
});