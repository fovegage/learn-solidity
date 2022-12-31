## DAPP 开发

```
# https://pan.baidu.com/s/175HzCR8xCR8gbwVhORx6BA?pwd=dk92 
# 遵循 ERC20标准   转帐 支付 获取余额 实现接口
# 使用 react 开发 dapp   https://trufflesuite.com/boxes/react/
truffle unbox react

# 币和代币的区别
https://www.ledger.com/zh-hans/academy/%E5%B8%81%E5%92%8C%E4%BB%A3%E5%B8%81%E7%9A%84%E5%8C%BA%E5%88%AB

truffle compile 后会在 client/src/contracts  生成api
使用contract address 在测试网络进行 abi 调用

1_deploy_simple_storage.js
==========================

   Deploying 'SimpleStorage'
   -------------------------
   > transaction hash:    0x0bb159ee025940b36572a5b890a1c61c1978c63b96230ad16657e51c47956e56
   > Blocks: 0            Seconds: 0
   > contract address:    0x599617F0d2B69415c2e7bAc99C723fd7a03c45bA
   > block number:        9
   > block timestamp:     1672368894
   > account:             0xBEc4eaD8b879A8f5DCD917E8D33020459dBB1A8d
   > balance:             79.97848152
   > gas used:            125653 (0x1ead5)
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.00251306 ETH

   > Saving artifacts
   -------------------------------------
   > Total cost:          0.00251306 ETH

Summary

```

```
Commands:

  Contracts: Compile:         cd truffle && truffle compile
  Contracts: Test:            cd truffle && truffle test
  Contracts: Migrate:         cd truffle && truffle migrate
  Dapp: Run dev server:       cd client && npm start
  Dapp: Test:                 cd client && npm test
  Dapp: Build for production: cd client && npm run build
```

## 接入

```
# dapp接入  接入公网完成测试   cfx币 也有自己的钱包  Conflux Fluent钱包
https://www.confluxscan.io/

```