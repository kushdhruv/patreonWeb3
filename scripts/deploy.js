const hre = require("hardhat");
const fs = require("fs");

async function main() {
    const [deployer] = await hre.ethers.getSigners();

    console.log("Deploying contracts with the account:", deployer.address);

    // Deploy CreatorToken with an initial supply of 1 million tokens
    const CreatorToken = await hre.ethers.getContractFactory("CreatorToken");
    const creatorToken = await CreatorToken.deploy(ethers.utils.parseEther("1000000")); // 1M tokens
    await creatorToken.deployed();
    console.log("CreatorToken deployed to:", creatorToken.address);

    // Deploy ContentPayment with the CreatorToken address
    const ContentPayment = await hre.ethers.getContractFactory("ContentPayment");
    const contentPayment = await ContentPayment.deploy(creatorToken.address);
    await contentPayment.deployed();
    console.log("ContentPayment deployed to:", contentPayment.address);

    // Save deployed addresses to a file
    fs.writeFileSync(
        "deployedAddresses.json",
        JSON.stringify({
            CreatorToken: creatorToken.address,
            ContentPayment: contentPayment.address,
        }, null, 2)
    );
    console.log("Deployed addresses saved to deployedAddresses.json");
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});