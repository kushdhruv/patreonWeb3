// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract CreatorToken is ERC20 {
    //uint256 initialSupply = 1_000_000 * 10**18; // 1 million tokens
    constructor(uint256 initialSupply) ERC20("CreatorToken", "CT") {
        _mint(msg.sender, initialSupply);
    }
}