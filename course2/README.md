## truffle 学习

```
# 官方文档：https://trufflesuite.com/docs/truffle/how-to/create-a-project/

# 安装 truffle
cnpm install -g truffle

# 项目初始化
truffle init

# 合约编译  编译后生成 build   包含 ABI 等文件  
truffle compile  

# 合约部署迁移  部署到区块链网络 （测试或者主网）  部署完成生成合约地址   web3.js 通过 合约地址调用 abi 声明 进行和主网交互
truffle migrate

# 下载demo 代码
truffle unbox metacoin


├── contracts   # 合约编写
├── migrations  # 部署脚本
├── test        # 单元测试
└── truffle-config.js  # 配置  网络配置 版本配置等

```

## 结构

```
1_hello_migration.js
====================

   Deploying 'hello'
   -----------------
   > transaction hash:    0xfcc4687638811acb033bf0c9057fecac1a8e8e6ea4f828be9017ab10ebe96591
   > Blocks: 0            Seconds: 0
   > contract address:    0xff4cA193B27BBCE91D81B46746211c88dc3d5a7B
   > block number:        7
   > block timestamp:     1672292884
   > account:             0xBEc4eaD8b879A8f5DCD917E8D33020459dBB1A8d
   > balance:             79.9836556
   > gas used:            133051 (0x207bb)
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.00266102 ETH

   > Saving artifacts
   -------------------------------------
   > Total cost:          0.00266102 ETH

Summary
=======
> Total deployments:   1
> Final cost:          0.00266102 ETH

```