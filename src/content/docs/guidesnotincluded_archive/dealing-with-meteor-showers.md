---
title: "应对流星雨"
description: "在本体里，只要你想上太空，流星雨就是早晚得应付的东西。它从来都不是我在《缺氧》里最喜欢的部分……"
source_url: https://www.guidesnotincluded.com/dealing-with-meteor-showers
archived: 2025-08-06
archive_snapshot: https://web.archive.org/web/20250806085052id_/https://www.guidesnotincluded.com/dealing-with-meteor-showers
---

## 引言

在本体里，只要你想上太空，流星雨就是早晚得应付的东西。它从来都不是我在《缺氧》里最喜欢的部分，DLC 出来的时候我还挺高兴终于不用管它了。结果 Whatta Blast 更新一来，流星雨又成了大家伙儿的事。（叹气。）

于是我开了个新档，起名"为什么偏偏是彗星？"，然后开始重新回忆应对从天而降的太空碎片到底是怎么个玩法。

也有好消息。在太空的真空里给东西降温变容易了。《眼冒金星！》DLC 里的流星雨不常来。而且有些流星雨相当温和，就几颗流星。另外，如果你不想应付流星雨，可以在游戏设置里把它们关掉。（这是单机游戏——怎么好玩怎么玩。）

随着游戏继续、学到更多，我会更新这一节，不过这里先说些基础让你能上手。（其实我就是一边瞎摸索，一边等 Francis John 出这方面的教程。）

## 两种思路：炸掉，还是挖掉

![ONI-Guide-MeteorBlasterInAction.png](assets/ONI-Guide-MeteorBlasterInAction-51b39b19a8.avif)

工作中的流星爆破炮

Whatta Blast 更新带来了流星爆破炮。所以应对流星的第一种思路就是把它们从天上打下来。不过有个缺点要注意：被打下来的流星只会掉落一部分材料，其余的都毁了。

生产爆破弹（用来打下流星的子弹）要用精炼金属。所以你不光拿不到资源，还得往里搭资源。（打完爆破弹能回收一些精炼金属，但我不确定有多少。我猜 25%，也许 50%。）

好的一面是，用这个思路，你的太阳能可以一直开着，流星雨期间也不停。它用的钢也比第二种思路少得多。说到第二种思路……

第二种思路是老玩家从本体就熟悉的：Francis John 的 C 型采矿机设计。就是在你的基地（或者整张地图）顶上铺满地堡门，让流星砸在门上。流星雨结束后打开地堡门，让碎屑落下来，再用自动采矿机把它们全挖掉。

这个思路能让你收下流星里的所有材料。（注意它们可能非常烫——超过 200 C。）这个思路需要大量[钢](getting-steel.md)，而且地堡门开合时还要不少电（取决于你铺了多大面积）。

两种设计都用太空扫描仪，也都要冷却。所以我们先看这个。然后快速看看怎么在流星雨快来时收到通知、甚至自动暂停游戏，以防你想看看自己的防御顶不顶得住。最后，讲完这些，我们再来看设计本身。

## 太空扫描仪

太空扫描仪基础：

* 耗电 120 W
* 探测到它在找的东西时，发出绿色自动化信号
* 你可以把它设成探测流星雨（或者火箭、星际载货）

![Building_Space_Scanner.webp](assets/Building_Space_Scanner-98c93fc8b6.avif)

太空扫描仪

太空扫描仪探测来袭流星雨的快慢有一定随机性。扫描仪越多，扫描质量越好，更早探测到流星的可能性也越高。

点一台扫描仪，你会看到一个扫描质量的百分比。那是这台扫描仪自己的工作效率。另外还有一个扫描网络质量的百分比。这个数字可以通过多造几台太空扫描仪来提高。

数字越高，越有可能更早探测到流星雨。但提前探测有没有用，取决于你的思路。

太空扫描仪不会过热，所以不用担心给它们降温。说到降温……

## 冷却回路与导热板

![Building_Conduction_Panel.webp](assets/Building_Conduction_Panel-a26c1b186f.avif)

导热板

两种应对流星雨的思路都需要冷却。流星爆破炮和自动采矿机工作时都会产热，不冷却就会过热。好在有了导热板这个东西，在太空真空里冷却变得容易多了。

导热板基础：

* 用于传热
* 有液体输入口和输出口
* 即使在真空里也能工作
* 可以建在建筑上，也可以穿过地板砖和墙壁砖
* 不管里面有没有液体流过都能传热（但液体是用来给它降温的）

所以要在太空真空里给什么东西降温，就让一条冷却回路从它旁边经过，在你想降温的地方装上导热板。（两种冷却回路方案在指南前面讲过：[反熵热量中和器冷却](anti-entropy-thermo-nullifier-cooling.md)，或者[液温调节器 + 蒸汽涡轮机方案](thermo-aquatuner-steam-turbine-cooling-loop.md)。）

![ONI-Guide-MeteorBlasterCoolingLoop.png](assets/ONI-Guide-MeteorBlasterCoolingLoop-89f1ba5089.avif)

带导热板的冷却回路

在看主要内容之前还有一件事：怎么在流星雨开始前暂停游戏。

## 撞击前先暂停：自动化通知器

![Building_Automated_Notifier.webp](assets/Building_Automated_Notifier-1dfcdc34ff.avif)

自动化通知器

有一点点自动化就能让你在事情发生时收到通知，甚至暂停游戏。它叫自动化通知器。

自动化通知器通过在殖民地发展研究分支里研究通知系统解锁。解锁后在"自动化"分类下。

点自动化通知器，会出来一些选项。你可以给它起个名字，触发时会显示在屏幕左上角。你也可以设置成触发时暂停游戏。

把自动化通知器接进太空扫描仪的自动化网络，它就会在探测到流星雨时收到绿色信号，然后暂停游戏。（如果你设成这样的话。）这样你就能看看自己的布置顶不顶得住流星雨，需不需要调整。

![ONI-Guide-AutomatedNotifier.png](assets/ONI-Guide-AutomatedNotifier-3af96f2708.avif)

![ONI-Guide-AutomatedNotifier2.png](assets/ONI-Guide-AutomatedNotifier2-cda59b6801.avif)

自动化通知器。接在太空扫描仪的自动化网络上。

基础的东西讲完了，我们来看看应对流星雨的两种思路：把它们炸飞，以及 C 型采矿机方案。

## 炸：导弹防御

设计挺简单：在基地顶上摆一排流星爆破炮。

![ONI-Guide_CometsMissileDefence1.png](assets/ONI-Guide_CometsMissileDefence1-b71a8ccc63.avif)

![ONI-Guide_MeteorBlaster.png](assets/ONI-Guide_MeteorBlaster-489f3fc5ca.avif)

流星爆破炮

![ONI-Guide_MeteorBlaster2.png](assets/ONI-Guide_MeteorBlaster2-b7d8480853.avif)

流星爆破炮的射程

流星爆破炮基础：

* 耗电 240 W
* 发射爆破弹（由爆破弹组装机单独生产）
* 有运输轨道输入口，用来送爆破弹
* 射程为 33 x 33 格；流星爆破炮的顶部位于射程的底部中央（见图）
* 它似乎打不到地图建造区上方的东西（所以造在地图最顶上不会很有效）
* 不挡光，所以不会影响太阳能板

流星爆破炮能覆盖 33 x 33 格的区域。但它瞄准并射击一颗流星需要点时间。如果两颗流星落得很近，它可能来不及把两颗都打下来。

流星雨强度不一。如果你在顶上摆几门炮，间距设置成瞄准区域不重叠，也就是天上任何一处都只有一门炮能打到，那么强度较高的流星雨里就会有一些流星穿过炮火。

我不确定最佳间距是多少，也就是隔多远还能 100% 确保打下所有流星。我一开始是让射程不重叠，天上每处都被一门炮覆盖。结果强流星雨里还是漏了。后来我改成炮与炮之间隔 15 格。好一些了，但偶尔还是有漏网的流星留下碎屑。所以现在我改成隔 10 格。到目前为止似乎够了。

写这篇的时候有个 bug：复制人造炮的时候会顺手把爆破弹装进去，但造好之后，只有炮里完全空了才会去补弹。（而那时候多半正赶上一场流星雨——可不是弹药用光的好时机。）

我已经提交了 bug 报告。但在这还照旧的时候，意味着得造一套运输轨道系统给炮补爆破弹，免得它们彻底打空。

![Building_Space_Scanner.webp](assets/Building_Space_Scanner-98c93fc8b6.avif)

太空扫描仪

流星爆破炮挺费电的，所以最好只在需要的时候让它们工作。你可以在设计里加一台太空扫描仪（前面讲过）来做到这一点。

太空扫描仪探测到来袭流星雨时会发出绿色自动化信号。把流星爆破炮接进自动化网络，它们就只会在扫描仪通报来袭流星雨时启动。

因为流星爆破炮一收到绿色信号就立刻开始工作，所以只要一台扫描仪就够了。多几台扫描仪带来的更早探测，只意味着你的炮会更早开始耗电（而你并不需要）。

流星雨结束后，太空扫描仪会开始发红色信号。但它开始发红色信号的时候，天上还有一些流星正在往下落。红色信号会关掉流星爆破炮，于是那些流星就会砸到你的基地上。为了避免这个，你可以在设计里加一个缓冲门。

![ONI-Guide-BufferGate.png](assets/ONI-Guide-BufferGate-2a9529b072.avif)

缓冲门

缓冲门基础：

* 接收到绿色信号时输出绿色信号
* 一旦收到的信号变红，缓冲门会继续输出一段设定时间的绿色信号
* 绿信号缓冲时长由你决定

说白了，缓冲门让流星爆破炮在太空扫描仪重新发出红色信号之后，还能多收到一会儿绿色信号。

至于设多长，设得越长漏进来的流星越少。40 秒似乎就足够把它们全拦下来了。

![ONI-Guide-SpaceScannerBufferGate1.png](assets/ONI-Guide-SpaceScannerBufferGate1-bf31e58b88.avif)

缓冲门。就算太空扫描仪重新开始发红色信号，缓冲门也会继续发一会儿绿色信号（时长由你选）。

除了上面这些，你还得造一些爆破弹。这就是流星爆破炮用来摧毁流星的弹药。

爆破弹由一种叫爆破弹组装机的建筑生产。它通过在科技树的液体分支里研究个人飞行解锁。解锁后在"站台"分类下。

![ONI-Guide-BlastshotMaker.png](assets/ONI-Guide-BlastshotMaker-766a6e2377.avif)

爆破弹组装机

爆破弹组装机基础：

* 非常费电：960 W
* 用精炼金属和石油制造爆破弹
* 有一个接石油管道的输入口
* 副产物是二氧化碳和热量

它每下一单产五发爆破弹，需要 25 kg 精炼金属和 50 kg 石油。

你可以用碎石机或金属精炼器精炼矿石来获得精炼金属。但更可持续的办法是用一种你有火山在产的金属。（有单独的指南讲[怎么弄到石油](getting-oil-petroleum-and-plastic.md)和[怎么驯化金属火山](taming-metal-volcanos.md)。）

写这篇的时候，爆破弹组装机还有点小毛病。复制人可以从装着石油的手压泵那里给它加油。但只有你在液体输入口上建了一段管道（哪怕是排进了建造队列），组装机才会工作。（这个我也提交了 bug 报告。）

你可以用自动化来确保流星爆破炮一直是满的，并且有些爆破弹储备。有一篇单独的指南讲[自动化基础](getting-started-with-automation.md)，下面是其中一种做法的一些概览图。

一个智能存储箱留一些爆破弹当储备。只要它没装满，就发信号打开爆破弹组装机，直到重新装满。一台优先级设得比智能存储箱高的运输装载器，负责把爆破弹送去流星爆破炮。

![ONI-Guide-BlastshotMakerSetup1.png](assets/ONI-Guide-BlastshotMakerSetup1-468787a83b.avif)

布置。存储箱里放的是你用来做爆破弹的那种精炼金属。智能存储箱存爆破弹，运输装载器取爆破弹。

![ONI-Guide-BlastshotMakerSetupAutomation.png](assets/ONI-Guide-BlastshotMakerSetupAutomation-4af3993007.avif)

自动化概览。智能存储箱和一根非门给爆破弹组装机发绿色信号，直到智能存储箱装满。

![ONI-Guide-BlastshotMakerSetupPriorities.png](assets/ONI-Guide-BlastshotMakerSetupPriorities-e419829ede.avif)

优先级。记得把运输装载器的优先级设得比智能存储箱高。

![ONI-Guide-BlastshotMakerSetupConveyor.png](assets/ONI-Guide-BlastshotMakerSetupConveyor-1966719e29.avif)

运输概览。运输装载器把爆破弹送去流星爆破炮。

接下来是导弹防御布置的一些概览图。

![ONI-Guide_CometsMissileDefence6.png](assets/ONI-Guide_CometsMissileDefence6-377deefa88.avif)

导弹防御。太空扫描仪负责开关流星爆破炮。

![ONI-Guide_CometsMissileDefence4.png](assets/ONI-Guide_CometsMissileDefence4-431b2c8ff0.avif)

自动化概览。流星雨来袭时，太空扫描仪打开流星爆破炮。它接了一个缓冲门（设为 30 秒），确保流星爆破炮在整个流星雨期间都保持工作。

![ONI-Guide_CometsMissileDefence3.png](assets/ONI-Guide_CometsMissileDefence3-17270090f0.avif)

运输概览。爆破弹沿运输轨道送往流星爆破炮。

![ONI-Guide_CometsMissileDefence5.png](assets/ONI-Guide_CometsMissileDefence5-8ac9914480.avif)

水管概览。一条冷却回路防止流星爆破炮过热。导热板用于在太空真空里实现传热。

![ONI-Guide_CometsMissileDefence7.png](assets/ONI-Guide_CometsMissileDefence7-8d5bda33bb.avif)

电力概览。没电，就没有砰砰砰。

## C 型采矿机

这是我从 Francis John 的一期 [Tutorial Nuggets YouTube 视频](https://www.youtube.com/watch?v=7Q7K2C1Zti0)里学来的做法。

"C 型采矿机"这个名字来自自动采矿机周围结构的形状，像个字母 C。但我现在意识到我建的是反过来的。而且自动采矿机下面那格砖已经不需要了，所以我没建。也就是说这个设计没有一点像字母 C，我大概该给这个做法换个名字。算了。

这个设计出来之后，游戏机制有了些变化，有好有坏。

好的一面是，现在给自动采矿机降温省事多了，因为可以用导热板。

坏的一面是，有些流星撞上来时会留下固体砖块。这种流星砸在地堡门上、又在上面留下固体砖块，怎么处理最好，是个全新的难题。（有些流星会这样，有些不会。所以一个办法就是干脆别在有这类流星雨的小行星上造这套防御。）

![ONI-Guide-BunkerDoorDefence.png](assets/ONI-Guide-BunkerDoorDefence-06258f853f.avif)

基本思路。流星雨快来时地堡门关闭。流星雨结束后，自动采矿机把落下来的资源挖出来。

![ONI-Guide-BunkerDoorDefenceAutomation.png](assets/ONI-Guide-BunkerDoorDefenceAutomation-e912345bc3.avif)

自动化概览。探测到流星雨时，扫描仪发出绿色信号。非门把它变成红色信号，地堡门关闭。（多用几台扫描仪，扫描更准。）

![ONI-Guide-BunkerDoorDefencePipes.png](assets/ONI-Guide-BunkerDoorDefencePipes-168ffd7af5.avif)

水管概览。导热板用于在真空里实现传热。（让冷却回路走了两遍大概是多此一举，但它刚好合这个设计。）

给选这个方案的人一句好心提醒：

如果你断电，这个方案会非常快地歪得非常彻底。一堆连锁的烂摊子接连上演：地堡门来不及关、流星砸进来、太阳能板被挡住、冷却回路断掉（至少在导热板出来之前）、自动采矿机过热，然后因为太阳能废了，整个电网都供电不足，基地里的建筑和机器纷纷停摆。（哦对，我可是有亲身经验的。）

所以要备一个像样的备用电源——足够同时供上所有可能要用电的东西——或者在蓄电池里存一大堆余电。（要存多少余电？按我的经验，你觉得要多少，实际就得更多。大概得多得多。）

如果你不需要流星里的资源，而且有多余的精炼金属和石油来做爆破弹，那第一种方案，导弹防御，更稳妥。如果你确实需要流星里的资源，那就造好地堡门和自动采矿机，然后抬头望天大喊：放马过来吧！

祝你好运 :-)

---

*归档自 [https://www.guidesnotincluded.com/dealing-with-meteor-showers](https://www.guidesnotincluded.com/dealing-with-meteor-showers)（[Wayback Machine 快照](https://web.archive.org/web/20250806085052id_/https://www.guidesnotincluded.com/dealing-with-meteor-showers)）。原创作品 © Some Random Finn / guidesnotincluded.com，采用 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/) 许可。本非商业社区档案馆将该页由 HTML 重新排版为 Markdown，并由社区翻译为简体中文——见[署名与许可](attribution.md)。*
