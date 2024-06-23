# function-frontend

This project demonstrates a simple Solidity smart contract with a frontend for interacting with its functions. It includes a basic counter and string storage functionality.

## Project Structure

- **`contracts/`** - Contains the Solidity smart contract.
  - `SimpleContract.sol`: The smart contract file implementing a counter and string storage.

- **`frontend/`** - Contains the frontend code (HTML and JavaScript).
  - `index.html`: The HTML file for the frontend.
  - `app.js`: The JavaScript file for interacting with the smart contract using Web3.js.

## Features

- **Increment Counter**: Increases a counter by 1 each time the function is called.
- **Set String**: Allows setting a new string value to be stored in the contract.

## Getting Started

### Prerequisites

- **Node.js**: Ensure you have [Node.js](https://nodejs.org/) installed.
- **MetaMask**: Install the [MetaMask](https://metamask.io/) browser extension for interacting with the Ethereum network.

### Smart Contract Deployment

1. **Compile and Deploy the Contract**:

   Use [Remix](https://remix.ethereum.org/) or Truffle to compile and deploy the `SimpleContract.sol` on your desired network (e.g., Ethereum testnet).

2. **Obtain Contract Address**:

   After deployment, copy the deployed contract address. This will be used in the frontend configuration.

### Frontend Setup

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/YOUR_USERNAME/function-frontend.git
   cd function-frontend
