---
title: "反熵热量中和器冷却"
description: "反熵热量中和器（通常简称 AETN）可以用来产生巨量的冷量，而且上手其实并不难。那么…"
source_url: https://www.guidesnotincluded.com/anti-entropy-thermo-nullifier-cooling
archived: 2025-08-22
archive_snapshot: https://web.archive.org/web/20250822031650id_/https://www.guidesnotincluded.com/anti-entropy-thermo-nullifier-cooling
image: assets/ONI-Guide-AETN1b-d9787348e2.png
---

## 简介

反熵热量中和器（通常简称 AETN）可以用来产生巨量的冷量，而且上手其实并不难。那我们就来上手吧。

![Anti_Entropy_Thermo-Nullifier.webp](assets/Anti_Entropy_Thermo-Nullifier-73b2ec46e2.avif)

反熵热量中和器

反熵热量中和器（AETN）基础：

* 消耗氢气（10 g/s）
* 有一个氢气输入气体管道
* 产生大量冷量：-80 kDTU/s（反正就那么个意思。但真的很多）
* 最低能到 -173 C，再低就会显示“太冷了”
* 只在冰冻生态里生成

《缺氧》平时的挑战是东西会变得太热，而 AETN 是个让人耳目一新的反转：用它的挑战在于，东西非常容易变得太冷。

它最低能到 -173 C，比我习惯维持的基地温度还要低 200 C 左右。所以利用 AETN，主要就是搭一套只放出适量冷量的系统。

控制 AETN 的冷量通常要用到一些自动化。如果你还没做过任何自动化，别担心——不难。你只是把一扇门接到一个传感器上。（如果你想深入了解，还有一篇单独的指南：[自动化入门](getting-started-with-automation.md)。）

和《缺氧》里其他一切一样，做事的方法有很多。我常用两种设计，一种用来冷却 SPOM 的氧气产出或者冷却回路里的液体，第二种用来冷却冰霜小麦农场。（当然，你也可以用同样的设计去冷却任何东西。）

两种做法用的是同一套控制机制。我们先讲这个，然后再放一些建造方案的图和概览。

## 控制机制

![Building_Mechanized_Airlock.webp](assets/Building_Mechanized_Airlock-2dc077bff8.avif)

机械气闸

基本思路是：要有办法决定 AETN 什么时候能散出冷量。做法是在 AETN 和它周围之间留一块区域，我们可以在这块区域“允许传热”和“不允许传热”之间切换。

更具体地说，我们用一种叫机械气闸的门。它靠研究科技树气体分支里的除污来解锁。

把门围起来、让两侧都有砖块，我们就能在允许和不允许传热之间交替。门关上时，传热可以进行；门打开时，那块区域是真空，不会传热。

然后我们加一些和温度相关的自动化：一个温度传感器，接到门上。温度传感器在科技树气体分支的暖通空调里解锁。

不管通不通电，门都能用。不通电时它会一直显示一个“无电力”图标。所以通不通电，主要取决于你有多在意那个图标。

![ONI-Guide-AETNMechanism.png](assets/ONI-Guide-AETNMechanism-4318639d3a.avif)

降还是不降。温度传感器接在机械气闸上，根据周围的温度开关门。

## 关于建造材料的一些想法（和数据）

![ONI-Guide-AETNVacuum.png](assets/ONI-Guide-AETNVacuum-bfdc0af166.avif)

制造真空。

这个设计让门两侧传热的效果如何，取决于你用什么材料来造。

动手之前，你应该先弄到钢。（有一篇单独的指南讲[获取钢](getting-steel.md)。）原因是，用游戏初期能搞到的那些金属造的门，导热率都非常差。

材料之间的差别很显著。以下是机械气闸按材质不同的导热率：

机械气闸导热率：

* 钢：54
* 黑钨矿：15
* 铜：4.5
* 铁：4
* 钴：4
* 金：2

（如果用导热质来造，导热率是 220。但如果你都用得上导热质了，那你该去写新手指南，而不是读新手指南，你个傻玩家！）

至于门两侧的砖块，也一样：用你能弄到的导热率最好的材料。以下是一些砖块的数据：

金属砖和窗户砖的导热率：

* 铝：220
* 钴：100
* 钻石：80
* 铜：60
* 金：60
* 铁 55
* 钢 54
* （玻璃：1,1）

注意，钢做门很好，但做它周围的砖块就没那么好了。另外也注意钻石（好）和玻璃（垃圾）之间的差距。

还有一个问题是 AETN 房间里该放什么气体。这里也有差别。

常见气体的导热率：

* 氢气：0,168
* 氧气：0,024
* 氯气：0,008

你不需要记住这些数字，只要记住氢气是 AETN 的最优选择，如果你愿意折腾就用它。

等你上手之后，往 AETN 房间里灌氢气其实很简单。先建 AETN 的房间，但在一侧留个入口。然后建一道临时[液体锁](liquid-lock-basics.md)通到那个入口。接着把 AETN 房间里的气体抽成真空。在 AETN 房间里建一个排气口，接上氢气管道。等房间处于真空状态时，把缺的那段墙补上。

改善传热的一个办法是加几块变温板。它们在科技树固体材料分支的精致翻修里解锁。

![Building_Tempshift_Plate.webp](assets/Building_Tempshift_Plate-5a1e73b3ae.png)

变温板

变温板基础：

* 变温板会帮助它所在的那一格与周围所有格子之间进行传热，包括斜角。

这里同样，你选什么材料很重要。

变温板导热率：

铝：205

钴：100

钻石：80

铜、金：60

铁：55

注意上面这些金属是精炼金属，不是矿石。未精炼的金属导热率很差。举个例子，铜矿做的变温板导热率是 4.5，金汞齐做的只有 2。

总之

这一节里的数字和数据多得荒唐。重点不是记住它们，而是大致记住哪些材料比其他材料更好。比如说，如果你有铝，那它大概是你最好的选择。如果没有，就用钻石。（或者钴，但有钴的地图通常也有铝。）以此类推。

但也别忘了：你不需要太纠结于把一切都做到极致优化。只要别用彻底的垃圾材料去造东西，你大概就没问题了 :-)

下面放几套 AETN 冷却建造方案变体的概览图。

## AETN 冷却，版本 1

这个设计是我从 [Francis John 的一个 YouTube 视频](https://www.youtube.com/watch?v=36qR5nAH5qw)里学来的。它用的就是我们前面讲过的机械气闸传热。AETN 在一侧，另一侧是一间（或者一个盒子？）污染水。

然后你就把想冷却的东西——通常是导热气体管道或导热液体管道——从那些降温后的污染水里穿过去。（下面的概览图里没画这个，但请记得一定要建。）

你也可以用别的液体。污染水是个不错的选择，而且冰点比水低：污染水 -20.6，水 -0.6。（不过我也不确定液体结冰到底有多大影响。）

![ONI-Guide-AETNVersion1.png](assets/ONI-Guide-AETNVersion1-b1b57f562b.avif)

液体或气体管道冷却。真正的冷却发生在右边有污染水的那块区域。这里没画出来的是，你需要把导热液体或气体管道从那块区域穿过去接受冷却。

![ONI-Guide-AETNVersion1Automation.png](assets/ONI-Guide-AETNVersion1Automation-6ae6fa8602.avif)

自动化概览

![ONI-Guide-AETNVersion1GasPipes.png](assets/ONI-Guide-AETNVersion1GasPipes-c40fcc1ad5.avif)

通风概览。气体管桥不重要，你也可以让氢气在管道之间 50-50 分流。（AETN 用不了那么多氢气。）

如果 AETN 产生的冷量够多（意思是你要冷却的东西没那么夸张），那你还可以一鱼两吃：让气体管道和液体管道都穿过去接受冷却。

在复制人不多的小行星（或小行星团）上，你可以用一台 AETN 同时冷却 SPOM 和它的氧气产出。

![ONI-Guide-AETNDoubleDipping1.png](assets/ONI-Guide-AETNDoubleDipping1-1dd3fe4de0.avif)

![ONI-Guide-AETNDoubleDipping2.png](assets/ONI-Guide-AETNDoubleDipping2-6857c1ab97.avif)

![ONI-Guide-AETNDoubleDipping3.png](assets/ONI-Guide-AETNDoubleDipping3-14f5b7a260.avif)

AETN 一鱼两吃。SPOM 由一套液体冷却回路降温，SPOM 的氧气用气体管道降温。两者都经过 AETN 的冷却区域。

## AETN 冷却，版本 2

这个设计，或者它的某个变体，就是我用来给冰霜小麦农场降温的方案。

这个设计里温度的波动会比上一个更大，AETN 外面的区域可能会变得比你设定的还冷。设计冷却回路、选液体的时候，这点值得留意。（图后面会再讲。）

![ONI-Guide-AETN1_overview.png](assets/ONI-Guide-AETN1_overview-07dbecad38.avif)

冰霜小麦农场冷却回路。钻石墙旁边的温度传感器发出开关门的信号。AETN 房间内外的钻石变温板都有助于传热。

![ONI-Guide-AETN1c_gas.png](assets/ONI-Guide-AETN1c_gas-38e2c402f3.avif)

通风概览。最重要的部分是把氢气抽进 AETN。氢气比其他气体有更好的冷却数据（比热容和导热率），所以考虑把 AETN 房间灌满氢气。

![ONI-Guide-AETN1b.png](assets/ONI-Guide-AETN1b-d9787348e2.png)

自动化概览。一个温度传感器接到一个机械气闸上。门关上时，冷量可以扩散出去。门打开时，那块区域是真空，不会扩散冷量。（门可以通电，但不必——不通电只是开关得慢一点。）

![ONI-Guide-AETN1d_liquid.png](assets/ONI-Guide-AETN1d_liquid-91b6e8f409.png)

管路概览。一套冷却回路（里面是石油）从旁边经过，把 AETN 的冷量散布到整个冰霜小麦农场。钻石变温板有助于传热。

给冷却回路选液体时，记得查一下它的冰点。（你也可以先用污染水这种好搞的，等搞到更好的再升级。）

液体冰点（摄氏度）：

* 超级冷却剂：-271.2
* 乙醇：-114.1
* 石油：-57.1
* 原油：-40.1
* 污染水：-20.6
* 水：-0.6

冰霜小麦在 +5 C 或更低时生长，所以这（至少）是你需要达到的目标。但把农场维持在冷冻温度——更具体地说，低于 -18 C——还有一个好处：能延长收获的冰霜小麦的新鲜度。或者说，减缓它新鲜度的下降。

食物的新鲜度下降受温度和大气影响。当冰霜小麦处于“深度冷冻”状态（也就是低于 -18C）时，温度不再导致新鲜度下降。

冰霜小麦的新鲜度下降仍然会受大气影响。如果存放在氧气里，每个周期会掉 2% 新鲜度。要把这个降到零，你需要把它存放在被认为“无菌”的大气里。这些是：二氧化碳、氯气、氢气和真空。

我会把冰霜小麦做成浆果糕，懒人玩家的梦想美食：它不会变质。所以我就不太（或者说完全不）操心把新鲜度下降压到 0% 这件事。

如果你希望能储存食物而不变质，你需要一个冷冻区域（可以非常小），而且里面是无菌气体。这类设计可以在网上找到指南。

![ONI-Guide-AETNSleetWheat.png](assets/ONI-Guide-AETNSleetWheat-45fc1bef05.png)

不是绝对零度，但也挺凉的。一块由 AETN 降温的金属砖，充当冷冻库和仓库，存放多余的冰霜小麦，等着被做成浆果糕。

## 更多更多冷却（！）

你可以把好几套冷却回路接到同一台 AETN 上。主要的限制是你需要多少冷量——也就是你需要把东西冷却到什么程度。

下面的图是一套建造方案，三套冷却回路由同一台 AETN 降温。（我还为一套备用的第四套冷却回路建了一道门，以防万一。左下角。）

![ONIGuide_AETNmulticooling.png](assets/ONIGuide_AETNmulticooling-9e7cf00242.png)

![](assets/dace2c_10eddcb22efd452a85b1c8baf5c3e185-mv2-41d0fd4e81.png)

![ONIGuide_AETNmulticooling_pipes.png](assets/ONIGuide_AETNmulticooling_pipes-fc856f9ce8.png)

![](assets/dace2c_f8eda45726f44a498c1276e709db5153-mv2-5aae04c09f.png)

---

*归档自 [https://www.guidesnotincluded.com/anti-entropy-thermo-nullifier-cooling](https://www.guidesnotincluded.com/anti-entropy-thermo-nullifier-cooling)（[Wayback Machine 快照](https://web.archive.org/web/20250822031650id_/https://www.guidesnotincluded.com/anti-entropy-thermo-nullifier-cooling)）。原创作品 © Some Random Finn / guidesnotincluded.com，采用 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/) 许可。本非商业社区档案馆将该页由 HTML 重新排版为 Markdown，并由社区翻译为简体中文——见[署名与许可](attribution.md)。*
