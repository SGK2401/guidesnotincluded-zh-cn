---
title: "温度传递基础"
description: "我上学时物理课听得远远不够认真，搞不懂这东西真正的细枝末节。我只讲一些基础，更深入的内容维基\u2026"
source_url: https://www.guidesnotincluded.com/heat-transfer-basics
archived: 2025-08-11
archive_snapshot: https://web.archive.org/web/20250811145919id_/https://www.guidesnotincluded.com/heat-transfer-basics
---

## 免责声明

我上学时物理课听得远远不够认真，搞不懂这东西真正的细枝末节。我只讲一些基础，更深入的内容维基和论坛上有。

## 引言

基本思路很简单：东西一接触，它们的温度就会互相影响。冷的那件会变热，热的那件会变冷。

还有两件额外的事会影响这种温度交换：

* 有些特定种类的砖块和管道，专门用来增强或减弱温度传递。
* 游戏里所有材料（砂岩、铜等等）都有影响温度传递的属性。

我们先来看看那些专门用来最大化或最小化温度传递的砖块。

## 隔热砖

![Building_Insulated_Liquid_Pipe.webp](assets/Building_Insulated_Liquid_Pipe-bd27c4ad41.avif)

![Building_Insulated_Gas_Pipe.webp](assets/Building_Insulated_Gas_Pipe-f0baf06134.avif)

![Building_Insulated_Tile.webp](assets/Building_Insulated_Tile-79495c0972.avif)

如果你想尽量减少砖块之间的温度传递，就用你要建的东西的隔热版本。

有这些：

* 隔热液体管道
* 隔热气体管道
* 隔热砖

如果你要抽送高温液体或气体，经过一片你不想加热的区域，那最好用隔热管道。

如果你基地旁边有个高温生态，你可以在高温生态和基地之间砌一堵隔热砖墙，把温度传递降到最低。

注意：关于深渊晶石

生态之间是由深渊晶石隔开的——就是那些紫色的（天然生成的）砖块。深渊晶石是极好的隔热体。如果你的基地和某个高温（或低温）生态之间有深渊晶石隔着，那你就不用操心温度传递了。

但记住，游戏放置你的初始区域时，多半会把它压在这些深渊晶石砖块上。这会删掉一段深渊晶石，让生态之间的温度传递变成可能。

![ONI-guide-TempTransfer3.png](assets/ONI-guide-TempTransfer3-d2867ec9f5.avif)

![ONI-guide-TempTransfer4.png](assets/ONI-guide-TempTransfer4-4d30c7e5e3.avif)

上面是岩浆，下面是冰冻生态。（右边是温度概览。）它们之间由隔热砖和天然生成的深渊晶石砖块共同隔开。

（这话说得有点超前了，但关于岩浆还是提一句。如你所料，它相当热：超过 +1400C。岩浆会熔化大部分材料，但化不了黑曜石。所以任何会接触到岩浆的东西，都用黑曜石来造。）（还有，处理岩浆之前一定要先造出真空。）

## 导热管道与金属砖

![Building_Radiant_Liquid_Pipe.webp](assets/Building_Radiant_Liquid_Pipe-dcf3ff9306.avif)

![Building_Radiant_Gas_Pipe.webp](assets/Building_Radiant_Gas_Pipe-d7fbba8f51.avif)

![Building_Metal_Tile.webp](assets/Building_Metal_Tile-c2964ccbbc.avif)

有时候你会想最大化温度传递。这种时候你就该用导热管道或金属砖。

有这些：

* 导热液体管道
* 导热气体管道
* 金属砖

一些例子：给 SPOM 出来的氧气降温；最大化被一堵墙隔开的两个区域之间的温度传递；还有一条穿过你基地的冷却回路（这种时候你可能想在某些区域用导热管道，把冷却最大化，比如一台产热很多的机器周围）。

## 变温板

变温板能改善砖块自身与周围砖块之间的温度传递，斜对角相邻的砖块也算。

![Building_Tempshift_Plate.webp](assets/Building_Tempshift_Plate-1f8d1a4c8c.avif)

## 影响温度传递的材料属性

![ONI-guide-AETNOverflow.png](assets/ONI-guide-AETNOverflow-7a47ccf7c2.avif)

一个溢流机制（气体管桥），用来把多余的氢气送进 AETN 房间，增强它冷量的传递。

![ONI-guide-TempTransfer2.png](assets/ONI-guide-TempTransfer2-9b0077bdd3.avif)

![ONI-guide-TempTransfer1.png](assets/ONI-guide-TempTransfer1-33dcb3974f.avif)

金属砖被当作冷却中的传热助手。一条[冷却回路](thermo-aquatuner-steam-turbine-cooling-loop.md)给导热管道里的水降温。导热管道给金属砖降温。金属砖再给经过运输轨道送出的金属火山产物降温。

应对热量的第一步，是想清楚你什么时候该用隔热砖、导热砖还是普通砖。等你对它们足够熟练了，下一步就是再想想这些砖块用什么材料来造。

《缺氧》里的材料有两个属性会影响它自身的温度与周围温度的互动：热导率和比热容。

想看某个东西的热导率和比热容，就点选它。然后点“属性”标签。

热导率衡量的是它和周围环境交换温度有多快、多有效。

比热容衡量的是它能“储存”多少热量。

所以热导率衡量的是它升温或降温有多快，比热容衡量的是它能储存多少热量或冷量。

这两者当中，热导率通常更需要考虑。（设计传热的时候，我会把良好的热导率看成一个重要方面，把好的比热容看成锦上添花。）

就像（比如说）导热管的传热会比普通管道好一样，用高热导率材料造的管道，传热也会比用低热导率材料造的管道好。

所以经验法则是：

* 想增强温度传递，就用热导率数值更高的材料。
* （反过来也一样：想要更少的温度传递，就用更低的热导率）

各种材料的热导率一览可以在[维基上](https://oxygennotincluded.fandom.com/wiki/Thermal_Conductivity)找到。一些早期游戏的大致原则：

在你常遇到的矿物里：

* 花岗岩适合增强温度传递
* 火成岩适合减弱它

所以比如说：

如果你想改善冷却回路里的温度传递，又不想把金属全花在给整条回路造导热管上，那你可以选一种热导率更高的普通材料。花岗岩是这方面的热门选择。

如果你想让隔热管道或隔热砖尽可能绝缘，常见初始材料里的热门选择是火成岩。

对于那些会变得非常热的东西——早期（偏早）游戏里包括油质生态里的手压泵，以及从玻璃熔炉出来的管道——用陶瓷。（陶瓷用窑炉制作，在精炼分类下。）

在你早期能拿到的各种金属里，铝的热导率大概是最好的。（不过铜或铁通常也够用。）

真空（也就是没有气体）是最好的隔热体。

不同气体帮助温度传递的能力也不一样。比如氢气的热导率就比氧气好得多。想改善某个区域的温度传递，你可以把它灌满氢气。一个例子就是给反熵热量中和器的房间灌氢气。

金属砖是改善温度传递的绝佳手段。比如你想给运输轨道上的东西降温（或升温），就可以让它经过一段金属砖。然后再用导热管道，让一股冷（或热）液体流过同样的这些砖块。金属砖会大大帮助两者之间的温度传递。

---

*归档自 [https://www.guidesnotincluded.com/heat-transfer-basics](https://www.guidesnotincluded.com/heat-transfer-basics)（[Wayback Machine 快照](https://web.archive.org/web/20250811145919id_/https://www.guidesnotincluded.com/heat-transfer-basics)）。原创作品 © Some Random Finn / guidesnotincluded.com，采用 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/) 许可。本非商业社区档案馆将该页由 HTML 重新排版为 Markdown，并由社区翻译为简体中文——见[署名与许可](attribution.md)。*
