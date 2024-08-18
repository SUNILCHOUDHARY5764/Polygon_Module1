const hre = require("hardhat");

// File system module for reading and writing files
const fs = require("fs");


async function main() {
  // Get the contract factory (ABI and bytecode)
  const NFT = await hre.ethers.getContractFactory("Ignis");

  const nft = await NFT.deploy();

  await nft.deployed();

  console.log("NFT contract deployed to the address: ", nft.address);

  // export the addresses to metadata/contractAddress.js 
  fs.writeFileSync(
    "metadata/contractAddress.js",
    `
    export const nftAddress = "${nft.address}"
  `
  );
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });