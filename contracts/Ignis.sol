// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "erc721a/contracts/ERC721A.sol";

contract Ignis is ERC721A {
    address public owner;

    uint256 public maxLimit = 5;

    string baseUrl =
        "https://gateway.pinata.cloud/ipfs/QmWN2HtXeiuUyexaySd1EA4pmDeKm3MgUsUDqQ8M5Hdcr4";

    string public prompt = "A Scary Person Illustrative style  Potrait , Fire the Background ,Lokking in Fire ";

    constructor() ERC721A("Ignis", "IGS") {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Can be performed by the owner only.");
        _;
    }

    function mint(uint256 quantity) external payable onlyOwner {
        require(
            totalSupply() + quantity <= maxLimit,
            "You can not mint more than 5 NFTs"
        );
        _mint(msg.sender, quantity);
    }

    function getBalance(address _owner) external view returns (uint256) {
        return balanceOf(_owner);
    }

    function _baseURI() internal view override returns (string memory) {
        return baseUrl;
    }

    function promptDescription() external view returns (string memory) {
        return prompt;
    }
}