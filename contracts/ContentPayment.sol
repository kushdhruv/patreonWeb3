// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract ContentPayment {
    IERC20 public creatorToken;
    address public owner;

    event ContentPurchased(address indexed buyer, string contentHash, uint256 amount);
    event TokensWithdrawn(address indexed owner, uint256 amount, uint256 remainingBalance);

    modifier onlyOwner() {
        require(msg.sender == owner, "Not the owner");
        _;
    }

    constructor(address _tokenAddress) {
        creatorToken = IERC20(_tokenAddress);
        owner = msg.sender;
    }

    function purchaseContent(uint256 amount, string memory contentHash) public {
        require(bytes(contentHash).length > 0, "Invalid content hash");
        bool success = creatorToken.transferFrom(msg.sender, owner, amount);
        require(success, "Payment failed");
        emit ContentPurchased(msg.sender, contentHash, amount);
    }

    function withdrawTokens(uint256 amount) public onlyOwner {
        uint256 contractBalance = creatorToken.balanceOf(address(this));
        require(contractBalance >= amount, "Insufficient contract balance");
        require(creatorToken.transfer(owner, amount), "Withdraw failed");
        emit TokensWithdrawn(owner, amount, contractBalance - amount);
    }
}