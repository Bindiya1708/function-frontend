const contractAddress = "YOUR_CONTRACT_ADDRESS"; // Replace with your deployed contract address
const contractABI = [
    {
        "constant": true,
        "inputs": [],
        "name": "count",
        "outputs": [{"name": "", "type": "uint256"}],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "storedString",
        "outputs": [{"name": "", "type": "string"}],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [],
        "name": "incrementCount",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [{"name": "newString", "type": "string"}],
        "name": "setString",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    }
];

let web3;
let simpleContract;

async function init() {
    // Modern dapp browsers
    if (window.ethereum) {
        web3 = new Web3(window.ethereum);
        await window.ethereum.request({ method: 'eth_requestAccounts' });
    }
    // Legacy dapp browsers
    else if (window.web3) {
        web3 = new Web3(window.web3.currentProvider);
    }
    // Non-dapp browsers
    else {
        alert('Non-Ethereum browser detected. You should consider trying MetaMask!');
    }

    simpleContract = new web3.eth.Contract(contractABI, contractAddress);
    updateUI();
}

async function updateUI() {
    const count = await simpleContract.methods.count().call();
    document.getElementById("count").innerText = count;

    const storedString = await simpleContract.methods.storedString().call();
    document.getElementById("storedString").innerText = storedString;
}

async function incrementCount() {
    const accounts = await web3.eth.getAccounts();
    await simpleContract.methods.incrementCount().send({ from: accounts[0] });
    updateUI();
}

async function setString() {
    const newString = document.getElementById("newString").value;
    const accounts = await web3.eth.getAccounts();
    await simpleContract.methods.setString(newString).send({ from: accounts[0] });
    updateUI();
}

window.onload = init;
