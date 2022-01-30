// if (window.ethereum) {
// App.web3Provider = window.ethereum;
// try {
//     // Request account access
//     await window.ethereum.enable();
// } catch (error) {
//     // User denied account access...
//     console.error("User denied account access")
// }
// }
// // Legacy dapp browsers...
// else if (window.web3) {
// App.web3Provider = window.web3.currentProvider;
// }
// // If no injected web3 instance is detected, fall back to Ganache
// else {
// App.web3Provider = new Web3.providers.HttpProvider('http://localhost:7545');
// }
// web3 = new Web3(App.web3Provider);

//Connect a the web3 provider
// if (typeof web3 !== 'undefined') {
//     web3 = new Web3(web3.currentProvider);
// } else {
//     web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));
// }

// Legacy dapp browsers...

// if (typeof window.ethereum !== 'undefined') {
//          console.log('MetaMask is installed!');
// }
// if (window.web3 !== undefined) {
//     const provider = new Web3.providers.HttpProvider(window.web3.currentProvider);
//     const web3 = new Web3(provider);
// }

//const Web3 = require("web3");
// window.ethereum.enable();
ethereum.request({ method: "eth_requestAccounts" });

const Web3 = new Web3();
const ethEnabled = async () => {
  if (window.ethereum) {
    await window.ethereum.request({ method: "eth_requestAccounts" });
    window.web3 = new Web3(window.ethereum);
    return true;
  }
  return false;
};

ethereum.request({ method: "eth_requestAccounts" });

// Modern dapp browsers...
// if (window.ethereum !== undefined) {
//   const provider = new Web3.providers.HttpProvider(window.ethereum);
//   const web3 = new Web3(provider);
// }

// Set a default account
web3.eth.defaultAccount = web3.eth.accounts[0];

// Get the contract address

var RemixContract = new web3.eth.Contract(
  [
    {
      constant: false,
      inputs: [
        {
          name: "x",
          type: "string",
        },
      ],
      name: "setMessage",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "getMessage",
      outputs: [
        {
          name: "",
          type: "string",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
  ],
  "0xE8BCb0dA721ba4AD5adF8dE802DF2c90d3610dC1"
);

$("#setMessageButton").click(function () {
  message = $("#userInput").val();
  console.log(RemixContract);
  RemixContract.methods.setMessage(message);
  console.log($("#userInput").val());
});
