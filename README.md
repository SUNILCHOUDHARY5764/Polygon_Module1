# NFT Collection Deployment and Transfer 
## >> Important Update << 
### 🔴 ETH Goerli Network Shutdown (April 2024)
### 🔴 Polygon Mumbai Shutdown (April 2024)
### 🔴 This Project Wont Work until FxRoot Supports in Sepolia and Amoy Testnets 
> Goerli to Mumbai Bridge

> Can Be Bridged between ETHERIUM and POLYGON Blockchain

> Used ERC721A for less Gas consumption

[<img src="https://img.youtube.com/vi/AWMgQggm5CI/maxresdefault.jpg" width="600" height="300"
/>](https://www.youtube.com/embed/AWMgQggm5CI)

## Description

This project involves the deployment of a 5-item NFT collection using Bing AI-generated images. The NFTs are stored on IPFS using pinata.cloud, and an ERC721A contract is deployed to the Goerli Ethereum Testnet. The contract includes functionalities such as minting, transferring, and mapping the NFTs.

## Getting Started

### Prerequisites

* Node.js and npm installed.
* Hardhat Ethereum development environment set up.
* Metamask Configured to Goerli Testnet
* Test Goerli in Account in Testnet Network

### Installation

1. Clone this repository: `git clone https://github.com/gautham2k3/POLY-MOD-1.git`
2. Navigate to the project folder: `cd POLY-MOD-1`
3. Install dependencies: `npm install`
### Wallet Config
- Network name : Goerli
- New RPC URL : https://rpc.ankr.com/eth_goerli
- Chain ID : 5
- Currency Symbo : ETH
- Block Explorer URL : https://goerli.etherscan.io
> Block Explorer URL is Optional
### Contract Name and Symbol

```solidity
contract IGNIS is ERC721A
```
Name : IGNIS  
Symbol :IGN 

The `IGNIS` contract extends the `ERC721A` contract and represents a collection of unique NFTs inspired by the Naruto series.

### Maximum Quantity of Tokens

```solidity
uint256 public maxLimit = 5;
```

The `maxLimit` variable sets the maximum number of NFTs that can be minted within this collection. In this contract, the maximum limit is set to 5 tokens.

### Base URL for NFTs (IPFS Base URL)

```solidity
string baseUrl = "https://gateway.pinata.cloud/ipfs/QmWN2HtXeiuUyexaySd1EA4pmDeKm3MgUsUDqQ8M5Hdcr4";
```

The `baseUrl` variable defines the base URL for the NFTs' metadata. This URL will be combined with the token ID to form the complete URL for accessing each NFT's metadata stored on the IPFS platform.

### Prompt Description

```solidity
string public prompt = "A Scary Person Illustrative style  Potrait , Fire the Background ,Lokking in Fire ";
```
> Prompt can be anything based your Intrest 

### Deploy ERC721A Contract to Goerli Testnet

1. Create an `.env` file and set your Ethereum wallet private key.
2. Configure Hardhat network settings in `hardhat.config.js`.
3. Run the deployment script: `npx hardhat run scripts/DEPLOY.js --network goerli`

### Batch Mint NFTs

1. Edit the `MINT.js` script with required details.
2. Run the script: `npx hardhat run scripts/MINT.js --network goerli`

### Batch Transfer NFTs to Polygon Mumbai

1. Set up FxPortal Bridge for Ethereum to Polygon transfer.
2. Edit the `TransferTokens.js` script with necessary details.
3. Run the script: `npx hardhat run scripts/TransferTokens.js --network goerli`

### Check Balance 
1. Edit the `getBalance.js` script with required details.
2. Run the script: `npx hardhat run scripts/getBalance.js --network mumbai`
## Explorer Used
- [Goerli Testnet Explorer](https://goerli.etherscan.io)
- [Polygon PoS Chain Testnet Explorer](https://mumbai.polygonscan.com)
## Authors

- Sunil Kumar
- sunilchaudhary5879@gmail.com
- @Sunil Kumar: [GitHub Profile](https://github.com/SUNILCHOUDHARY5764)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


## Help

For common issues, refer to the troubleshooting section in the official Hardhat documentation or Feel free to reach out to me via email.
