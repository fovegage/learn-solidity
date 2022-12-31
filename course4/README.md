# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a
script that deploys that contract.

Try running some of the following tasks:

```
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.ts
# 编译合约  会生成 cache和artifacts 两个文件
npx hardhat compile
```

## NFT 开发

### 概念

```
metadata: 
ContractURI

```

### 开发

```
# 使用uniapp开发 nft

# 接入 opensea
https://opensea.io/

# 使用
hardhat 进行开发
```

### 理解

```
# nft 的元数据可以在 ipfs上面存储  也可以在中央服务器来存储
安装规定实现规定的方法  opensea 便会进行元数据的调用 并在网页进行展示

# metadata 规范
https://docs.opensea.io/docs/metadata-standards

# 元数据
一组json数据

# ERC721
只需要实现了 ERC721 标准便可以进行上传铸造
```

```solidity
contract MyCollectible is ERC721 {
    function contractURI() public view returns (string memory) {
        return "https: //metadata-url.com/my-metadata";
    }
}
```

```json
{
  "name": "Hassan #1",
  "description": "Hassan Calloway is heir to Calloway Arms, one of the world's leading mil-tech suppliers. Ingenious and determined, Hassan has been searching for his missing father, and for SHRAP, since Earthfall.",
  "image": "https://raw.githubusercontent.com/kasoqian/HassanNFT/main/metadata/images/4.png",
  "attributes": [
    {
      "trait_type": "health",
      "value": "9"
    },
    {
      "trait_type": "power",
      "value": "68"
    },
    {
      "trait_type": "magic",
      "value": "16"
    },
    {
      "trait_type": "exp",
      "value": "93"
    },
    {
      "trait_type": "lv",
      "value": "R"
    }
  ]
}
```

### hardhat

```
npm install --save-dev hardhat

```
