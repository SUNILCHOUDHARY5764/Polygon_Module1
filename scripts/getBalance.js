const hre = require("hardhat");
const tokenContractJSON = require("../artifacts/contracts/Ignis.sol/Ignis.json");

const tokenAddress = "0x964A479447bf1e8DDBCF3b4B1D63D890A2041F2E"; // Ethereum address of the deployed ERC721A contract
const tokenABI = tokenContractJSON.abi;
const walletAddress = "0x54D0aa21781572b8cEeB94170780E43D6cfD50Fc"; // Ethereum public address for the wallet

async function main() {

    const token = await hre.ethers.getContractAt(tokenABI, tokenAddress);

    console.log("You now have a total number of: " + await token.balanceOf(walletAddress) + " tokens in the wallet.");
  }
  
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
