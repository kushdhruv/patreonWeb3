require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

const { POLYGON_RPC_URL, PRIVATE_KEY } = process.env;

module.exports = {
  solidity: {
    version: "0.8.19", // Use a Solidity version that supports Paris
    settings: {
      evmVersion: "paris", // Set EVM target to Paris
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  networks: {
    mumbai: {
      url: POLYGON_RPC_URL || "https://rpc-mumbai.maticvigil.com",
      accounts: [PRIVATE_KEY || "0x0000000000000000000000000000000000000000000000000000000000000000"],
    },
  },
};