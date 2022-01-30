// SPDX-License-Identifier: MIT

pragma solidity >=0.4.22 <0.9.0;

contract Message {
    string myMessage;

    function setMessage(string memory _value) public {
        myMessage = _value;
    }

    function getMessage() public view returns (string memory) {
        return myMessage;
    }
}
