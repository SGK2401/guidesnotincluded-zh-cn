---
title: "管道与泵：液体与气体流动基础"
description: "关于液体和气体管路，有些东西知道了很有用。而你运气特别好，这一节讲的正好就是这个……"
source_url: https://www.guidesnotincluded.com/pipes-and-pumps
archived: 2025-08-06
archive_snapshot: https://web.archive.org/web/20250806081942id_/https://www.guidesnotincluded.com/pipes-and-pumps
---

## 简介

关于液体和气体管路，有些东西知道了很有用。而你运气特别好，这一节讲的正好就是这个。

我们先讲泵有哪几种，然后讲一格（或一个区域）里到底能打进多少液体或气体，最后——也许是最重要的——讲怎么控制液体（和气体）的流动。

我们会拿一套厕所加 SPOM 的搭建来做例子，说明怎么控制液体流动，以及为什么知道这些很有用。

## 液体泵与气泵

液体和气体都有大泵和小泵（叫“小型”泵）。所有泵都通过研究解锁。

大泵用金属矿石建造，所以早期很容易造。小泵需要[塑料](getting-oil-petroleum-and-plastic.md)。

泵，哪怕是液泵，也不需要建在地基上。也就是说，你可以把液泵建在一团液体的正中间，它照样能工作。

![Building_Liquid_Pump.webp](assets/Building_Liquid_Pump-97513ef6c1.avif)

液泵

![Building_Mini_Liquid_Pump.webp](assets/Building_Mini_Liquid_Pump-fef049636f.avif)

小型液泵

![Building_Gas_Pump.webp](assets/Building_Gas_Pump-ad93f05915.avif)

气泵

![Building_Mini_Gas_Pump.webp](assets/Building_Mini_Gas_Pump-db081be126.avif)

小型气泵

泵抽送的是所谓的“份”——一份一份的液体或气体。每一份只能装一种液体或气体，不能把不同种类混在一起。

你可以在管道概览和通风概览里看到这些份，它们的图标在右上角。每一格管道都容纳（或者说可以容纳）一份。

有一点要放在心上：泵能抽多少、和一份能装多少（也就是一格管道能装多少）之间的比例。

* 一台液泵每份能抽 10kg 液体
* 一格液体管道每份能容纳 10kg 液体

在理想情况下，也就是液泵只有一种液体可抽、而且那种液体足够多时，液泵和液体管道是 1 比 1：一台泵正好能灌满一格液体管道。

* 一台气泵每份能抽 0,5kg（500g）气体
* 一格气体管道每份能容纳 1kg（1000g）气体

这意味着，一格气体管道能装下两台气泵的输出。（只要它们抽的是同一种气体。）

![PumpMaxPackets2.png](assets/PumpMaxPackets2-8534efcabb.avif)

![PumpMaxPackets1.png](assets/PumpMaxPackets1-e902c5444b.avif)

一台液泵能灌满一格液体管道。气体管道则能装下两台气泵的输出（只要它们抽的是同一种气体）。

## 排气口与气压：一格里能装多少气体？

有点反直觉的是，抽气体的时候，决定一个区域里能打进去多少气体的并不是气泵，而是排气口。

* 排气口最多能往一个区域里排每格 2kg 的气体
* 高压排气口最多能排每格 20kg

泵的大小——气泵还是小型气泵——只影响气体抽得多快，不影响一个区域里能打进多少。

![Building_Gas_Vent.webp](assets/Building_Gas_Vent-0c57a5d233.avif)

排气口。最多能排每格 2kg

![Building_High_Pressure_Gas_Vent.webp](assets/Building_High_Pressure_Gas_Vent-7ac2975794.avif)

高压排气口。最多能排每格 20kg

喷气体的间歇泉和排气口有一点是相同的：它们排气的能力也有一个压力上限。

* 当气体达到每格 5kg 时，这个区域就超压了，间歇泉会停止喷气。

![ONI_Guide_NatGas.png](assets/ONI_Guide_NatGas-2470474ae6.avif)

气压是每格 5kg，意味着天然气喷孔不会再喷出更多气体了。

这意味着，如果你想最大化从一个间歇泉收集到的气体量，你得用高压排气口把气体打进另一个区域（或房间）。这样一格能装 20kg 气体，而不是 5kg。

![GeyserAndVent.png](assets/GeyserAndVent-6b381ece16.avif)

这两个房间大小一样，但右边那个能装四倍的气体。天然气喷孔在每格 5kg 时就超压，而高压排气口可以一直排到区域里每格 20kg 为止。

如果你不介意稍微弯一下物理定律，这个做法还能再往前推一步。你可以让一格里叠两层气体：储气库里可以有气体，储气库所在的那几格里也可以有气体。（这解释听着挺绕——看下面的图。）

也就是说，你可以把储气室塞满储气库。然后让气体穿过储气库，从房间里的高压排气口排出来。这样房间会先被灌到每格 20kg 气体，之后储气库才开始充气。每个储气库能装 5kg。

（火箭用的储气罐能装更多气体。我自己不这么用，但读到过有人用火箭舱段在基地里囤了大量气体。）

![GeyserAndVentAndReservoires.png](assets/GeyserAndVentAndReservoires-f9b1f49b51.avif)

把储气做到极致。储气室里满是气体，还有一堆能额外装气的储气库。

如果你要造一个这样的东西，记得在储气室里另外放一台气泵，把气体抽到你需要的地方去。

（你可以加点自动化，确保只有气体足够多时泵才启动——具体见[自动化](getting-started-with-automation.md)那一节。）

最后补充一句：这个做法稍微弯了一下物理定律。如果你不介意把那些定律彻底掰断，还可以搞一个无限储气（或储液）区。这个机制我自己不用，但你可以在网上找到相关指南。搜“无限储气”或“无限储液”就行。

## 排液口与液压：一格里能装多少液体？

和有两种排气口的气体不同，排液口只有一种。

当它所在那格的压力达到 1000kg 时，它就会停止工作——不再往外排液体。

![LiquidTileVolumes.png](assets/LiquidTileVolumes-26c79c9f09.avif)

同样的重量，不同的体积。每一段都有 10000kg 液体。不同液体占据的空间不一样。

![ONI_Guide_GeyserOverpressure.png](assets/ONI_Guide_GeyserOverpressure-6978c2f4ea.avif)

超压。污水泉不会再喷出更多污染水。

![Building_Liquid_Vent.webp](assets/Building_Liquid_Vent-461ce94129.avif)

排液口。

压力达到 1000kg 时停止排放。

让事情更复杂一点的是，一格能装多少液体取决于液体是什么种类。

一些比较常见的液体，以及灌满一格需要多少：

* 石油：740kg
* 原油：870kg
* 水：1000kg
* 污染水：1000kg
* 乙醇：1000kg
* 盐水：1100kg
* 浓盐水：1200kg

注意：不管抽的是什么液体，排液口都会在 1000kg 压力时停止工作。但是：并不是所有液体都一定能达到这个压力。比如石油和原油，就算一整格完全浸没，也堵不住排液口。

（要关掉这样的排液口，你可以用[自动化](getting-started-with-automation.md)，比如把液压传感器接到排液口上，一格满了就把它关掉。）

如果那格上有压力，一格里能装的液体可以比上面列出的更多。你的储水区就是个例子。把鼠标移到它上层和下层的格子上，你大概会发现每格的水量不一样。

排液口和气体间歇泉一样，会超压并停止排液。我没做过测试，但通常似乎是这样的：当排液口泡在三格液体里（在它中子质底座之上），而第三格达到每格 500kg 时，就会发生。

渗油裂缝会超压并停止出油，但储油石（如果我记得没错）不会。就算完全泡在液体里，它们也能继续产油。（但它们不是间歇泉，所以需要水和电——还要时不时泄一次压——才能工作。关于油井的更多内容，见[获取原油、石油与塑料](getting-oil-petroleum-and-plastic.md)那一节。）

## 液体与气体管路基础：输入与输出

[这一节我很快会补上，不过目前你可以在[早期游戏](the-early-game.md)里看到基础内容。]

## 控制每格管道的内容物

![ONI_Guide_LiquidBridge.png](assets/ONI_Guide_LiquidBridge-d74ea51328.avif)

![ONI_Guide_LiquidBridge2.png](assets/ONI_Guide_LiquidBridge2-1e06922d24.avif)

液体管桥。液体沿箭头方向流动。在管道概览里就是从白色到绿色。

泵和管道的表现大体上都挺符合你的期待，但有时候它们需要一点帮助。如果你的液体（或气体）在管道里不流动，可能是因为它不知道该往哪个方向走。

（注意：液体不流动的另一个原因，是你把输入和输出接错了。仔细检查你的管道概览，还有那些白色和绿色的部分。）

* 你可以用液体管桥（或气体管桥）告诉游戏你想让东西往哪个方向流。

液体管桥只允许液体沿一个方向穿过管桥。那个方向就是从白色到绿色——从输入口到输出口。（仔细看，你会看到一个小箭头标明方向。）

如果你遇到液体明明看着该流动却不动的情况，试着加一个液体管桥，把你想让液体流动的方向指出来。

我们来看一个例子：液体需要一个液体管桥才知道该怎么办。

![ONI_Guide_LilquidFlow1.png](assets/ONI_Guide_LilquidFlow1-84287cab78.avif)

上图：液体停住了，因为它不知道该往哪个方向流。

下图：液体管桥逼着液体选一个方向走。

![ONI_Guide_LilquidFlow2.png](assets/ONI_Guide_LilquidFlow2-7d0dd8e9f9.avif)

在上面这个例子里，泵把整个环路灌满之后，液体就会停止流动。但你也可以做出永远循环下去的液体环路，哪怕把它们从泵上断开。

## 无限循环

无限循环——也就是液体一圈一圈永远流下去的管道环路——很有用，比如用在冷却回路里。

要把上面那个设计变成无限循环，先把这个环路断开。

![ONI_Guide_LilquidFlow5.png](assets/ONI_Guide_LilquidFlow5-3197b40a4a.avif)

环路里的水会静止不动——它不会循环。这是因为管道太满了，液体动不了。你只要做一件事就能让它动起来：去掉一份液体。

你可以用“清空管道”命令（在右下角，但用它需要一个会管道工技能的复制人），或者干脆拆掉一格管道再重建。

做完之后，环路里的液体就会开始循环，并且永远循环下去。

你也可以在不需要清空或拆管道的情况下造出无限循环。做法是用一个液体管桥接到你的环路上。

![ONI_Guide_LilquidFlow4.png](assets/ONI_Guide_LilquidFlow4-669064dc8a.avif)

只有当管桥另一侧有空位时，液体管桥才允许液体通过。也就是说，液体管桥非常适合用来确保管道、或者一整套管道组合不会灌注过量。

在上面那张图里（不过静态图片看不出流动——抱歉），通往环路的那段液体是静止的，而环路里的液体在循环。

如果这里讲得不够清楚，你可以照着上面的图自己造一个试试。这是个非常好用的机制，绝对值得练熟。

![ONI_Guide_LilquidFlow6.png](assets/ONI_Guide_LilquidFlow6-a8740f7221.avif)

无限循环。中上部分是产生冷气的反熵热量中和器。两边各有一套液体环路，用来把冷气散布到冰霜小麦农场各处。（图上看不出来，但液体一直在循环。永远，永远。）

## 用液体管桥给液体来源排优先级

液体管桥不只能逼着液体选方向，还能给液体（或管道）来源排优先级。

你总会遇到需要决定先用哪根管道的时候。比如告诉游戏：如果这根管道里有液体，就先用它。

这时候，液体管桥又是我们的好朋友。有两种用法：用它的输入端，或者用它的输出端。

输出端，也就是绿色那一头，用法和上一节讲的造无限循环（但不过量灌注）一样。机制是：

* 沿液体管桥流动、接到普通管道上的液体，只有在管道里有空位时才会进去。

这个机制也能用在给 SPOM 供水之类的地方：你可能偶尔想用某一个来源的水，比如厕所溢出的水，其他时候则用另一个来源。（这个例子在本节末尾有图。）

然后是输入端，也就是白色那一头：

* 当液体来到一个液体管桥时，它总是会先尝试穿过管桥。

只有在做不到的时候——也就是另一侧的管道满了的时候——它才会去用别的管道。

![ONI-Guide-LiquidBridge3.png](assets/ONI-Guide-LiquidBridge3-58cc26c3f0.avif)

液体管桥。只有当管道上有空位时，液体管桥才会让泵送来的水通过。图里那台泵是备用、次要的来源，用来确保管道始终保持满的。

![ONI_Guide_PrioritizingFlow4.png](assets/ONI_Guide_PrioritizingFlow4-ecb52c1c76.avif)

液体管桥。中间的储液库会先被灌满，只有到中间那个储液库的管道没有空位时，水才会开始流向上面那个储液库。

这个机制在很多不同场合都很有用。两个常见的例子：

1. 用作厕所除污设施的溢流机制。
2. 用作 SPOM 里多余氢气的溢流机制。

## 示例搭建：厕所、SPOM 与水源

最后我用一个例子收尾，说明液体管桥怎么用来把几套系统组合起来。这个例子是（简化版的）我几乎每一局都会造的东西：把厕所多余的水送到 SPOM。

![ONI_Guide_PrioritizingFlow1.png](assets/ONI_Guide_PrioritizingFlow1-58964b6b5f.avif)

![ONI_Guide_PrioritizingFlow1_LiquidOverview.png](assets/ONI_Guide_PrioritizingFlow1_LiquidOverview-3db23b0d8d.avif)

优先流动。厕所除污设施里多余的水被送到 SPOM。（这里的管路还不完整——最终版本看最后一张图。）

在上面几张图里，中间是一套污染水除污设施。（这套设施怎么运作、怎么建，指南别处有讲：见[循环利用厕所水](recycling-toilet-water.md)。）

刚除完污的水会先被送回厕所的环路里。这是用一个液体管桥实现的——在图片中间最右边能看到——它告诉水：如果下面管道有空位，就往下走。

因为厕所产生的液体比用掉的多，所以厕所和除污设施会产出多余的水。当从液体管桥往下走的管道满了，多余的水就会被送到上面去，进 SPOM。

（SPOM 是一套产氧的搭建。指南后面有讲：见[氧气：了解 SPOM，就会爱上 SPOM](to-know-the-spom-is-to-love-the-spom.md)。）

我们还没完全搞定。用上面图里那种搭建，SPOM 只能断断续续地拿到水，只在厕所有多余的水时才有。

我们想加个办法，确保 SPOM 一直有水。可以在另一个水源上接一根管道过来。（如果你水快不够用了，见[获取（更多）水](getting-more-water.md)。）

![ONI_Guide_PrioritizingFlow2.png](assets/ONI_Guide_PrioritizingFlow2-c9ea6cfdf3.avif)

快好了。把供水接到 SPOM 的那个液体管桥意味着，只有当厕所来的管道空了，它才会用供水的水。但是，它会同时把水抽给 SPOM（好事）和厕所（坏事）。

![ONI_Guide_PrioritizingFlow3.png](assets/ONI_Guide_PrioritizingFlow3-d1ca9c4148.avif)

全部搞定。再加一个液体管桥，就能阻止供水泵把水抽到厕所去。

在上面这张图里，液体管桥用来确保 SPOM 优先使用厕所多余的水，只有厕所没有多余的水时，才用我们水泵的水。

（厕所产生的多余水量没那么多，而 SPOM 用水挺多。所以这里其实并不真的需要用液体管桥。就算你的 SPOM 把厕所多余的水和水源的水平均着用，也不太可能把你的厕所堵上。但万一你的厕所水路堵了，就会出事故。所以加一些额外的保险机制来避免这种情况，哪怕大概率用不上，也是好主意。）

我们快讲完了，但这个设计还有一个问题。在上面那张图里，水源的水会被同时抽给 SPOM 和我们的厕所。那会堵住厕所，然后导致事故。

我们要确保从供水抽上来的水只给 SPOM 用，不给厕所用。这可以在设计里再加一个液体管桥，阻止水从水源流到厕所。

![ONI_Guide_PrioritizingFlow5.png](assets/ONI_Guide_PrioritizingFlow5-8ca633577f.avif)

厕所与 SPOM。这是我几乎每一局都会用的东西的简化版。厕所（以及淋浴隔间、污染水倾倒点等等）多余的水被送到 SPOM。SPOM 还需要一个额外的水源。液体管桥在各个位置被用来控制液体的流动。

---

*归档自 [https://www.guidesnotincluded.com/pipes-and-pumps](https://www.guidesnotincluded.com/pipes-and-pumps)（[Wayback Machine 快照](https://web.archive.org/web/20250806081942id_/https://www.guidesnotincluded.com/pipes-and-pumps)）。原创作品 © Some Random Finn / guidesnotincluded.com，采用 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/) 许可。本非商业社区档案馆将该页由 HTML 重新排版为 Markdown，并由社区翻译为简体中文——见[署名与许可](attribution.md)。*
