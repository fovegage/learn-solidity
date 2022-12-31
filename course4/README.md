## NFT 开发

### 概念

```
# 入门视频
https://www.bilibili.com/video/BV1VZ4y1v7im/?spm_id_from=333.788&vd_source=44c52730b7b5612e95a86d9473811e95

# 遵循 ERC721标准
metadata: 铸造商品的元数据 类似spu和sku
ContractURI：nft集合连接  类似 店铺连接
collection：集合  https://opensea.io/collection/a-llamily-christmas
tokenID: 一个计数器 可以理解为spu_id(递增) Counters.Counter private _tokenIds
TokenURI: spu api 链接

# 流程
使用metamask登录后，钱包地址以 中心化存储进行保存  进行nft交易
在这两个情况的前提下，才会触发opensea调用对应的公链进行 nft的铸造  （mint 创建一个新的从0地址转移到购买者或者操作者）
当您将项目转移到另一个账户时 当有人向您购买项目时 
opensea铸造免费  出售的时候需要进行签名   nft在二级市场流通 每次都会产生交易费 可以在此赚钱

# opensea支持的代币
https://support.opensea.io/hc/zh-tw/articles/4404027708051-%E5%93%AA%E4%BA%9B%E5%8D%80%E5%A1%8A%E9%8F%88%E8%88%87-OpenSea-%E7%9B%B8%E5%AE%B9-
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

### nft 合集信息 (https://docs.opensea.io/docs/contract-level-metadata)

- fee_recipient: 接收地址
- 即ContractURI

```json
{
  "name": "OpenSea Creatures",
  "description": "OpenSea Creatures are adorable aquatic beings primarily for demonstrating what can be done using the OpenSea platform. Adopt one today to try out all the OpenSea buying, selling, and bidding feature set.",
  "image": "external-link-url/image.png",
  "external_link": "external-link-url",
  "seller_fee_basis_points": 100,
  "fee_recipient": "0xA97F337c39cccE66adfeCB2BF99C1DdC54C2D721"
}
```

### nft 商品属性

- 即TokenURI

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

### nft 术语

```
https://school.gugu.fund/blog/crypto/2700710363

GM/GN：GM 為 Good Morning 的縮寫，GN 為 Good Night 的縮寫，因此每天時間一到，大家在 NFT 社群中都會以此作為打招呼。

FOMO：FOMO 是 The Fear of Missing Out 的縮寫，代表「害怕錯過」的意思，有些人深怕自己錯過下一波市場的大行情，因而盲目買進某個 NFT 項目，這樣的人也被稱做 FOMOer。

Mint：在 NFT 的交易市場中常常看到「Mint」這個單字​，到底是什麼意思呢？Mint 中文為「鑄造」的意思，意即創作者第一次在區塊鏈上「鑄造」出一個 NFT，而在許多 NFT 項目的官網上，首次發行時都是用 Mint 按鍵來進行交易，代表在買方申購的當下，才會將 NFT 鑄造產出。

Burn：NFT 既然可以 Mint「鑄造」，當然也可以 Burn「銷毀」。在區塊鏈上若想要刪除 NFT ，只能透過銷毀的功能，最後只會留下鑄造和燒毀日期，有時會為了減少數量以提升稀有度而進行銷毀。

1：1 Art：「1：1」並非指尺寸上定義，而是指每件藝術品都是獨一無二的，而 PFP(Profile Picture)及 Generative Art 類型的 NFT 就是使用此種智能合約。 

Floor Price：Floor Price（地板價），指的是某一系列 NFT 在交易市場中的「最低入手價格」，所以 Floor Price 越高，代表整個系列的價格越高！也有些人會大量買入仍處於地板價的 NFT，期待未來有爆漲的機會。 

Rug Pull：若直譯翻為「拉地毯」的意思，在 NFT 世界中，代表開始販售 NFT 之後捲款潛逃的詐騙行為，就像是商販直接「捲舖蓋跑路」一般。

Discord(DC社群)：Discord是一種社群軟體！許多NFT同好會在上面創立聊天室，在上面可以輕鬆獲取跟NFT有關的所有資訊，例如行情、最新系列、新手入門問答等等，也是 NFT 玩家們很重要的社交場所。 

DAO：Decentralized Autonomous Organization 的縮寫，中文為去中心化自治組織。如果你所參加的項目屬於 Head DAO ，買下 NFT 後，你和其他 NFT 持有者都擁有投票權，可以參與項目接下來的決策， 如今有越來越多 NFT 項目開始建立組織框架，來吸引更多支持者加入。

PFP（大頭貼）：PFP 是 profile picture 的縮寫，許多名人會用 NFT 圖像來當自己社群媒體的大頭貼，像是最有名的猴子頭像等等，而 NFT 圈流行所說的 PFP，其實就是「大頭貼」。 

Gas fee：通常在 NFT 交易市場中，Gas Fee 會出現在鑄造作品的過程中需要支付的手續費，也會在交易買賣時出現，而 Gas Fee 的費用都是依照當時的匯率浮動。

Gas War：許多熱門的 NFT 項目一推出，常會發生礦工費大戰。你必須付出比別人更高的 Gas Fee，才能成功讓交易通過，這就是所謂的「Gas War」。

Whitelist（白名單）：在一個 NFT 新項目發行之前，通常官方會採取白名單機制，完成指定任務就有機會加入白名單，加入後就可以獲取搶先鑄造或收藏 NFT 的資格，因此就不需要參與到上面所說的 Gas War ，基本上只要 Mint 就一定 Mint 的到，因為那等於是官方保留給你的。

Airdrop（空投）：有些 NFT 為了行銷目的或是獎勵用戶，會使用空投的方式將免費 NFT 丟進用戶的錢包地址中，這就是我們常聽到的「Airdrop」。

Roadmap：「路線圖」的意思，可以讓用戶知道該 NFT 的未來發展與走向，也能透過 Roadmap 來確認項目是否可行，像是代幣的白皮書。
```

### hardhat

```
npm install --save-dev hardhat

```

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