
// //const Contract = require('web3-eth-contract')
// import _ from 'lodash';
var Web3 = require('web3');
// const web3 = new Web3(Web3.givenProvider || "ws://localhost:7545");
// function component() {
//     const element = document.createElement('div');

// element.innerHTML = _.join(['Hello', 'webpack'], ' ');

// // Connect a the web3 provider
// // if (typeof web3 !== 'undefined') {
// //     web3 = new Web3(web3.currentProvider);
// // } else {
// //     web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));
// //     Contract.setProvider('ws://localhost:7546');
// // }

// // Set a default account
// web3.eth.defaultAccount = web3.eth.accounts[0];

// let abi = [{"constant": false,
//             "inputs": [
//                 {
//                  "name": "x",
//                  "type": "string"
//                  }
//             ],
//             "name": "setMessage",
//             "outputs": [],
//             "payable": false,
//             "stateMutability": "nonpayable",
//             "type": "function"
//             },
//         {
//             "constant": true,
//             "inputs": [],
//             "name": "getMessage",
//             "outputs": [
//                 {
//                     "name": "",
//                     "type": "string"
//                 }
//             ],
//             "payable": false,
//             "stateMutability": "view",
//             "type": "function"}]

// contractAddress = '0x65115A56B7631F13e02ab2c042D5cdBe0967D03f'

// var myMessage = new web3.eth.Contract(abi, contractAddress)

// // $("#setMessageButton").click(function () {
// //     myMessage.setMessage($("#userInput").val());
// //     console.log($("#userInput").val())
// // });

// function sendMesage() {
//     let messageText = document.getElementById("userInput").value
//     console.log(messageText)
//     console.log(myMessage)
//     myMessage.methods.setMessage(messageText)
//     //myMessage.methods.setMessage(messageText, (error, result) => {message = result})
    
//     // myMessage.setMessage(currentMessage);
// }



// return element;
// }

// document.body.appendChild(component());






function sendMessage() {
    let messageText = document.getElementById("userInput").value
    console.log(messageText)
    console.log(myMessage)
    myMessage.methods.setMessage(messageText)
    //myMessage.methods.setMessage(messageText, (error, result) => {message = result})
    
    // myMessage.setMessage(currentMessage);
}