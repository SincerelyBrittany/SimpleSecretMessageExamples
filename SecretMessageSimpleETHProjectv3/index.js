
// const BANK_ADDR = '0x7e2B374Baebc5Ab58fBB85Bd989E2f555B9Df76c'
// const CONT_ADDR = '0x941F4963540B1df054343d115767B9cb3E3cDc3D'

// const web3 = new Web3(Web3.givenProvider || "ws://localhost:7545");
// window.web3 = web3;

// // ...
// const $ = (sel) => {
//     return document.querySelector(sel)
//   }
  
//   /**
//    * Gets account details
//    */
//   async function getAccounts() {
//     const res = []
//     const accounts = await web3.eth.getAccounts()
//     for (const account of accounts) {
//       const balanceWei = await web3.eth.getBalance(account)
//       const balance = web3.utils.fromWei(balanceWei)
//       res.push({
//         account,
//         balance,
//       })
//     }
//     return res
//   }
  
//   async function updateBalance() {
//     const accounts = await getAccounts()
//     $('#wallet').innerText = web3.utils.toWei(accounts[1].balance)
//     $('#address-wallet').innerText = accounts[1].account
//   }
  
  
//   window.addEventListener('load', async () => {
//     await updateBalance()
//   })

const web3 = new Web3(Web3.givenProvider || "ws://localhost:7545");
window.web3 = web3;

// const myContractJson = require('./build/contracts/MyContract.json')
const abi = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "x",
				"type": "string"
			}
		],
		"name": "setMessage",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getMessage",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
]
const myContract = new web3.eth.Contract(abi, '0x65115A56B7631F13e02ab2c042D5cdBe0967D03f')
// Bind to window
web3.eth.Contract.defaultAccount = web3.eth.accounts[0];

function sendMessage() {
    let messageText = document.getElementById("userInput").value
    console.log(messageText)
    console.log(myContract)
    let message = myContract.methods.setMessage("here")
    console.log(myContract.methods.getMessage(message))
    myContract.methods.setMessage("here").send({from: '0x65115A56B7631F13e02ab2c042D5cdBe0967D03f'})
        .on('receipt', function(){
            console.log("here")
        }); 
    //myMessage.methods.setMessage(messageText, (error, result) => {message = result})
    
    // myMessage.setMessage(currentMessage);
}
sendMessage()
window.myContract = myContract