
        const Web3 = require('web3');
        var Contract = require('web3-eth-contract');
        
        // Connect a the web3 provider
        if (typeof web3 !== 'undefined') {
            web3 = new Web3(web3.currentProvider);
        } else {
            web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));
        }

        // Set a default account
        web3.eth.defaultAccount = web3.eth.accounts[0];
        Contract.setProvider('ws://localhost:7545');

        jsonInterface = [
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

        var contract = new Contract(jsonInterface, "0x20C0b92D70831978539f26384bA6A0162fD91680");



        function sendMessage() {
            let messageText = document.getElementById("userInput").value
            console.log(messageText)
            console.log(myMessage)
            contract.methods.setMessage(messageText)
            //myMessage.methods.setMessage(messageText, (error, result) => {message = result})
            
            // myMessage.setMessage(currentMessage);
        }