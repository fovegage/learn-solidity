## 目录

```
1. web3.0 入门
2. truffle使用
3. DAPP开发
4. hardhat使用
5. DEFI开发
6. IPFS
7. fabric
8. 预言机
9. 混币器
```

## 说明

```
# 三者在交易所内并没有差别，但在链上互不相通。
# 另外，USDT.ERC20、USDT.Omni 目前转账速度比较慢（通过需要几分钟），同时需要的矿工费也比较高昂（通常需要几美刀），而 USDT.TRC20 可以实现秒级到账，且转账仅需要几毛钱的手续费。
USDT.TRC20 基于波场网络，
USDT.ERC20 基于以太坊网络，
USDT.Omni 基于比特币网络。
```

## 区块链

```
# matic 作为以太坊二层网络是兼容以太坊的  matic 和 eth 可以是一个地址 通过货币符号判定转入
# 但是像莱特币这种是一种新币 它和以太坊不兼容
eth: https://goerli.etherscan.io
cfx: https://www.confluxscan.io
matic: https://polygonscan.com

# 挖矿
可以是指 A对B的交易、A进行铸造（外部地址向合约地址）这些行为均需要矿工进行确认, 矿工计算满足前n位hash为0,
计算成功后发起广播，这笔手续费会打给矿工
Gas Fee（Tx Fee） = Gas Limit(限制) 和 Gas Price(价格) 相乘得到
Gas Limit由支付者控制  Gas Price
Gas Price燃料价格：动态计算  单位gwei

## gas
在EVM里面，每个运算、操作、存储都需要gas的，比如：
ADD：加法操作 3gas
MUL：乘法操作 5gas
SUB：减法操作 3gas
DIV：除法操作 5gas
JUMP：跳转操作 8gas
MSTORE：内容存储操作 3gas
MLOAD：内容读取操作 3gas
CREATE：创建合约 32000gas (if tx.to == null)
SSTORE：存入存储区 20000gas （从0设为非0值）
SHA3：Keccak256哈希 30gas + 6gas * (size of input in words) + mem_expansion_cost
交易基本费用：21000gas （比如Transfer就要这么多）

# 单位 单位1000
ether ---> finney ---> gwei ---> wei

# 标准文档
https://github.com/ethereum/EIPs/blob/master/EIPS/eip-721.md
https://eips.ethereum.org/EIPS/eip-1155

# 自建区块链 客户端
https://goethereumbook.org/zh/account-balance/

# 学习文档
https://learnblockchain.cn/books/geth/part1/gas.html
```

## 综合项目

```
# TETHER、ETHER项目开发

# pg数据库 + 以太坊 + graphSQL 对外提供服务
https://thegraph.com/docs/zh/developing/developer-faqs/
https://github.com/graphprotocol/graph-node

# 图片需要 s3 存储一下

# metamask 一键登录
https://learnblockchain.cn/article/4250
https://codeantenna.com/a/DyvXpszMhe
```