import {HardhatUserConfig} from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
    networks: {
        test: {
            url: "http://127.0.0.1:8545",
            accounts: ["2f87ac36cea5a8df0bfdad631fd14b1d158f881b1da528ca99a1232c2aa690b2"],
        },
        goerli: {
            url: 'https://rpc.ankr.com/eth_goerli',
            accounts: ["8ef286e8a967af549451154c22cb002725ddec649ca376c4883417903f9854c8"],
        },
    },
    // scan key
    etherscan: {
        apiKey: {
            test: "",
            goerli: "",
        },
    },
    solidity: "0.8.17",
};

export default config;
