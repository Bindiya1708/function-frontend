// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SimpleContract {
    uint256 public count;
    string public storedString;

    constructor() {
        count = 0;
        storedString = "Hello, World!";
    }

    function incrementCount() public {
        count += 1;
    }

    function setString(string memory newString) public {
        storedString = newString;
    }
}
