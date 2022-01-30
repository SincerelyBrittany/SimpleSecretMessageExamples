// Connect a the web3 provider

let { web3 } = window;
const selectedAddress = web3.eth.defaultAccount;
if (typeof web3 == "undefined") {
  web3 = new Web3(web3.currentProvider);
  console.log("inside currentProvider");
} else {
  web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));
  console.log("inside HttpProvider");
}

// Test if it is connected to Ganache
web3.eth.getAccounts().then((accounts) => console.log("Accounts: " + accounts));

// Get Transaction count for the 1st account
web3.eth
  .getTransactionCount("0x20C0b92D70831978539f26384bA6A0162fD91680")
  .then(console.log, "tans count");

// Set a default account
web3.eth.defaultAccount = web3.eth.accounts[0];
web3.eth.getChainId().then((chainId) => console.log("Chain ID: " + chainId));

// Get the contract address
// Get the contract abi
var AbiAddress = "0xe43b21E5Dd373468F31A601CC4CC2272F3aa0485"; // address from remix
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
  AbiAddress
);

$("#setMessageButton").click(function () {
  message = $("#userInput").val();
  RemixContract.methods
    .setMessage(message)
    .send({ from: "0x20C0b92D70831978539f26384bA6A0162fD91680" }) // address from ganache
    .then(console.log);
});
