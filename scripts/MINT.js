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
  const contractAddress = "0x028d6A7878e1b72175d0568e4B0B4D8C7016DaC0";

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