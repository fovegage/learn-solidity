## web3 入门

## 基础

```
# 函数：
可见性：Private Internal  External  Public: 可以从任何地方调用
状态可变性： pure:不能读取也不能修改  view: 只能读取，不能修改   payable： 可以接受发送给合约的以太
function function_name(<parameter list>) <visibility> <state mutability> [returns(<return type>)] {
    //语句
}

# 对象和接口

```

## 安装

```
# 在线编译器
https://remix.ethereum.org/

# brew update      更新brew
# brew upgrade     更新所有安装包
# 安装 ethereum以太坊环境（tap命令的仓库源默认是github）
brew tap ethereum/ethereum
# 安装solidity
brew install solidity

# 添加环境变量
echo 'export PATH="/opt/homebrew/opt/node@14/bin:$PATH"' >> ~/.zshrc
export LDFLAGS="-L/opt/homebrew/opt/node@14/lib"
export CPPFLAGS="-I/opt/homebrew/opt/node@14/include"

gaozhe@gaozhedeMacBook-Pro learn-solidity % so
soelim             solc               sort               source.properties  
softwareupdate     solidity-upgrade   source             sourcekit-lsp 

然后执行solc --help，发现编译合约需要的指定--abi、--bin都有了
```

## 学习资料

```
https://learnblockchain.cn/docs/solidity/structure-of-a-contract.html
# 中文文档
https://solidity-cn.readthedocs.io/zh/develop/installing-solidity.html
# 视频教程
https://www.bilibili.com/video/BV1St411a7Pk?p=1&vd_source=44c52730b7b5612e95a86d9473811e95
```

## 学习路线

```
https://hicoldcat.com/posts/news/web3-and-solidity-smart-contracts-development-roadmap/
https://learnblockchain.cn/article/3682
https://pcaaron.github.io/pages/fe/block/beginner6.html#%E5%A6%82%E4%BD%95%E5%BC%80%E5%8F%91solidity
```

## 术语

```
Dapp：去中心化app：https://www.weiyangx.com/295213.html
ipfs：星际文件系统
```

## 编译器

```
pip3 install sphinx sphinx_rtd_theme
pip3 install myst-parser
git clone https://github.com/ethereum/remix-ide.git
cd docs/
make html
Go to docs/_build/html and open index.html on the browser.
```

## 网站

```
1. 以太坊交易网站可以查看源码等https://etherscan.io/
2. web3.0社区： https://discord.com/login
3. 框架 truffle / hardhat https://trufflesuite.com/  
4. UniSwap
```

## 网络

```
ganache: 用于本地以太坊测试，下载对应版本 https://github.com/trufflesuite/ganache-ui/releases
metamask: 默认链接的是以太坊主网：手动添加网络：HTTP://127.0.0.1:7545   NETWORK ID: 5777
交易：gas费用由支付方支付，a向b支付20，b将会手动完整的20   a除了要支付20外，还需要支付一定的gas费用
第二代智能区块：特点可以编程，支付gas费用后将代码部署到以太网主网，web前端通过 web3.js 调用以太坊 ABI 和 主网交互
区别：与传统的web2.0对比，仍然需要 前端和后端 只是把主要的中心化功能放到以太坊这个透明的环境中
dapp: dapp以前端为载体，调用智能合约和后端 
预言机：智能合约与外界进行交互
合约地址：部署到以太坊的地址 0x2d1475E2A9915e7804407D16fE3844F3b7ECB2C6
ABI/BytesCode: 前端根据以太坊的合约地址和ABI进行功能的调用
版权声明：// SPDX-License-Identifier: MIT
断开链接：metamask 可以断开已经链接的网站
以太坊客户端：这里使用ganache进行测试 https://github.com/ethereum/go-ethereum
```

## ABI

```
[
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "a",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "b",
				"type": "uint256"
			}
		],
		"name": "add",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "pure",
		"type": "function"
	}
]
```
