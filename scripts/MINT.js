// This script batch mints ERC721A tokens.

const { ethers } = require("hardhat");
require("dotenv").config();

async function main() {
  // Get private key from environment variables
  const privateKey = process.env.PRIVATE_KEY;

  // The URL of the Goerli test network 
  const networkAddress =
    "https://ethereum-sepolia-rpc.publicnode.com";

  // connect to the Ethereum network
  const provider = new ethers.providers.JsonRpcProvider(networkAddress);

  // Create a signer (account) 
  const signer = new ethers.Wallet(privateKey, provider);

  // The address of the deployed contract 
  const contractAddress = "0x964A479447bf1e8DDBCF3b4B1D63D890A2041F2E";

  // Get the contract factory for the Ignis contract and attach it to the signer
  const OneNFT = await ethers.getContractFactory("Ignis", signer);
  const contract = await OneNFT.attach(contractAddress);

  // Call the mint function to mint 5 tokens
  await contract.mint(5);

  console.log("successfully minted '5' tokens.");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  }); 