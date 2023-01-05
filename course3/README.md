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

## erc20

- https://www.jianshu.com/p/82103d269111
- USDT 为例, 我们可以通过钱包软件（小狐狸扩展钱包或TokenPocket钱包）给别人发送一定数量的USDT,
- 这是因为USDT 实现了 ERC20标准中的transfer方法，给别人发送 USDT 本质是在与 USDT 合约交互，
- 调用了 USDT合约中的transfer方法
- 主要点在于这个过程是等价的 因此是同质性货币，而nft由于每个都不同，具有稀缺性，每个通证对不同的用户都有不同的价值

```solidity
interface IERC20 {
    // 代币名称
    function name() public view returns (string);

    // 代币符号
    function symbol() public view returns (string);

    // 代币精度 单位1000
    function decimals() public view returns (uint8);

    // 总发行量
    function totalSupply() external view returns (uint256);

    // 查询账户下的代币余额
    function balanceOf(address who) external view returns (uint256);

    // 授权额度查询
    function allowance(address owner, address spender)
    external view returns (uint256);

    // 从自己的账户进行转帐
    function transfer(address to, uint256 value) external returns (bool);

    // 授权可以转账我某某数量个此代币
    function approve(address spender, uint256 value)
    external returns (bool);

    // 划转他人账户ERC20代币 在approve授权情况下，比如小狐狸钱包可以进行代转帐
    function transferFrom(address from, address to, uint256 value)
    external returns (bool);

    // 转帐事件
    event Transfer(
        address indexed from,
        address indexed to,
        uint256 value
    );

    event Approval(
        address indexed owner,
        address indexed spender,
        uint256 value
    );
}

```