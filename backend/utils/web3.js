import { ethers } from "ethers";
import contentPaymentABI from "../contracts/ContentPaymentABI.json";

// Initialize provider and signer
const provider = new ethers.providers.JsonRpcProvider(process.env.POLYGON_RPC_URL);
const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

// Initialize contract
const contentPaymentContract = new ethers.Contract(
  process.env.CONTENT_PAYMENT_ADDRESS,
  contentPaymentABI,
  wallet
);

export default { provider, wallet, contentPaymentContract };