# function-frontend

This project demonstrates a simple Solidity smart contract with a frontend for interacting with its functions. It includes a basic counter and string storage functionality.

## Project Structure

- **`contracts/`** - Contains the Solidity smart contract.
  - `SimpleContract.sol`: The smart contract file implementing a counter and string storage.

- **`frontend/`** - Contains the frontend code (HTML and JavaScript).
  - `index.html`: The HTML file for the frontend.
  - `app.js`: The JavaScript file for interacting with the smart contract using ethers.js.

## Features

- **Increment Counter**: Increases a counter by a one each time the function is called.
- **Set Value**: Allows setting a new integer value in the contract.
- **Get Value**: Retrieves and displays the current integer value stored in the contract.

## Getting Started

### Prerequisites

- **Node.js**: Ensure you have [Node.js](https://nodejs.org/) installed.
- **MetaMask**: Install the [MetaMask](https://metamask.io/) browser extension for interacting with the Ethereum network.

### Smart Contract Deployment

1. **Compile and Deploy the Contract**:

   Use Remix, Hardhat, or Truffle to compile and deploy the `SimpleContract.sol` on your desired Ethereum network (e.g., Rinkeby, Ropsten).

2. **Obtain Contract Address and ABI**:

   After deployment, obtain the deployed contract address and ABI (Application Binary Interface). The ABI defines how to interact with the smart contract from your frontend.

### Frontend Setup

1. **Open VSCode or Any Other IDE**:
   Ensure you have an integrated development environment (IDE) like VSCode installed on your machine for editing frontend files.

2. **Clone the Repository**:
   ```bash
   git clone https://github.com/YOUR_USERNAME/function-frontend.git
   cd function-frontend
3. Now you can just open the live server

## Solidity Smart Contract (`SimpleContract.sol`)
```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SimpleContract {
    uint256 private value;

    constructor() {
        value = 0;
    }

    function getValue() public view returns (uint256) {
        return value;
    }

    function incrementValue() public {
        value += 1;
    }

    function setValue(uint256 _value) public {
        value = _value;
    }
}
```
## LICENSE
This project is licensed under the MIT License - see the LICENSE.md file for details
