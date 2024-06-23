// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SimpleContract {
    uint256 public count;
    string public storedString;

    constructor() {
        count = 0;
        storedString = "Hello, World!";
    }

    // Increment the counter
    function incrementCount() public {
        count += 1;
    }

    // Set a new string
    function setString(string memory newString) public {
        storedString = newString;
    }
}
