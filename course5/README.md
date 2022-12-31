## DEFI 开发

```
# 需要遵循 ERC1155 标准
uniswap: 进行币的兑换 

原本流动性池有5个tokenA 和20个tokenB，所以×=5和丫=20。当Tim 换掉
1个tokenA 时，他会先支付 0.3% 的手续费，也就是 0.003个tokenA (0.3% *
1。支付费用后，剩余的tokenA， 也就是0.997 tokenA， 会换成tokenB，所以新的×变成了5.997 tokenA。由于K必须保持不变，新的丫可以从公式中计算出来x * Y
=newx * newY。所以newY 是 16.675004 (x * Y /newx =5* 20/5.997
=16.675004)。这意味着池中将持有 16.675004个tokenB，剩余的 tokenB 将发送
给 Tim，这意味着 Tim 将收到 3.324996个tokenB (Y -newy = 20 -16.675004 = 3.324996）。交换后，池中有6个tokenA 和16.675004个 tokenB。
```