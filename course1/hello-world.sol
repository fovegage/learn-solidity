// SPD-License-Identifier: MIT
pragma solidity ^0.8.17;

contract HelloWorld {
    string name = "hello world";

    function getName() pure returns (string){
        return name;
    }
}


