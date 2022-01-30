// import Web3 from "web3";

let web3;

if (typeof window !== "undefined" && typeof window.web3 !== "undefined") {
  // We are in the browser and metamask is running.
  //Note: change to window.web3.currentProvider.enable()
  web3 = new Web3(window.web3.currentProvider.enable());
} else {
  // We are on the server *OR* the user is not running metamask
  const provider = new Web3.providers.HttpProvider("http://localhost:7545");
  web3 = new Web3(provider);
  //window.web3.currentProvider.enable();
}

// export default web3;

// if (typeof web3 !== "undefined") {
//   //   web3 = new Web3(web3.currentProvider);
//   web3 = new Web3(window.web3.currentProvider.enable());
// } else {
//   web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));
// }
//web3 = await Moralis.enableWeb3();
const accounts = web3.eth.accounts;

// window.ethereum
//const accounts = await ethereum.request({ method: "eth_accounts" });

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
  "0x6BDB39798DC2A882Ba6844005969D725b954e3E0"
);

$("#setMessageButton").click(function () {
  message = $("#userInput").val();

  RemixContract.methods
    .setMessage(message)
    .send({ from: accounts[0] })
    .then(function (result) {
      console.log(result);
    });

  RemixContract.methods.setMessage(message);
  console.log($("#userInput").val());
});

// $("#setMessageButton".click(function () {
//   var val = $("#userInput").val();
//   RemixContract.methods
//     .setMessage(val)
//     .send()
//     .then(function (result) {
//       console.log(result);
//     });
// });
