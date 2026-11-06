---
title: "获取钢"
description: "钢是用金属精炼器炼出来的。"
source_url: https://www.guidesnotincluded.com/getting-steel
archived: 2025-08-19
archive_snapshot: https://web.archive.org/web/20250819122246id_/https://www.guidesnotincluded.com/getting-steel
---

![Building_Metal_Refinery.webp](assets/Building_Metal_Refinery-e14c7f2ed1.png)

金属精炼器

![Building_Kiln.webp](assets/Building_Kiln-28437d3c78.png)

窑炉

钢是用金属精炼器炼出来的。

金属精炼器基础：

* 它通过研究解锁（熔炼）
* 解锁之后可以在精炼分类下找到
* 它有液体输入口和输出口
* 它需要高达 1,2Kw 的电力

供参考：1,2Kw 相当于两台煤炭发电机或三台人力发电机发出的功率。记住普通电线只能承受 1Kw，所以你得用导线或高负荷电线

炼钢需要铁、精炼碳和石灰

* 铁可以用金属精炼器或碎石机从铁矿中提炼（有些地图上也能直接找到铁）
* 精炼碳是用窑炉把煤加工出来的（在精炼分类下）。
* 石灰是用碎石机做的。好几种材料都能产出石灰：化石、蛋壳和蟹壳。（化石可以在[油质生态](getting-oil-petroleum-and-plastic.md)里找到。）

金属精炼器要正常运转，就得有稳定的液体供给。这些液体是当冷却剂用的——出来的时候比进去的时候更热。（热多少取决于你在精炼哪种金属。）

处理冷却剂是运行金属精炼器的主要难题。解决办法有好几种。一种标准做法（也是我常用的）是重复使用同一种液体，但在两次使用之间把它降温。这个我们很快就讲。不过先讲个更简单的办法：低温液体间歇泉。

低温液体间歇泉

如果你有低温泥浆泉或低温盐泥泉，就可以拿那种液体当冷却剂。《眼冒金星！》的第一颗小行星上应该就有。（是那颗小行星，不是“经典”那颗。）

（注意：普通的盐水泉不行——它喷出来的是很热的液体。）

![ONI-guide-CoolSaltSlush.png](assets/ONI-guide-CoolSaltSlush-761512e798.png)

低温盐泥泉

![ONI-guide-CoolSlush.png](assets/ONI-guide-CoolSlush-43bb9cefdf.png)

低温泥浆泉

这些间歇泉喷出的液体冷到（-10C）就算在金属精炼器里走了一趟，出来还是凉得可以直接补进你的供水里。

（如果是低温泥浆泉，就让它在进储水罐之前先过一遍净水器。如果是低温盐泥泉，就过一遍脱盐器。）

![ONI-guide-SteelTemporary.png](assets/ONI-guide-SteelTemporary-e2dcabe980.png)

临时方案。别想太多。两台煤炭发电机加一块蓄电池。全程高负荷电线。炼完你那一批钢就收工。

临时方案

随便找一片稍大的水体就能搭个临时方案。（不过尽量别用你的淡水——去别的生态找。）

做法很简单：在水里放一台液泵，把液体泵进金属精炼器，再让它排回同一片水里。水会开始升温，但在热量变成严重问题之前，你已经能炼出一些钢了。

如果你打算炼很多钢，那就直接上永久方案。（其实很少真需要临时方案。）

永久方案

只要在两次使用之间把冷却剂降温，就能重复使用同一种冷却剂。

做法是让冷却剂穿过一片水——走导热液体管道以便更好地传热。冷却剂在水里流过时把热量传给水，自己也顺便降了温。

它穿过的那片水会升温，最后沸腾变成蒸汽。这时候就该蒸汽涡轮机登场了。你可以在水面上放一台蒸汽涡轮机，它会把这部分热量转化成电力。在这个过程中，一部分蒸汽又变回（热）水。这些水可以直接排回那片水里。

（造蒸汽涡轮机需要一些[塑料](getting-oil-petroleum-and-plastic.md)。）

这套东西看图大概比我那一堆绕人的解释好懂得多。就这样：

![ONI-guide-SteelPermanent-1.png](assets/ONI-guide-SteelPermanent-1-e0e0f5f6fb.png)

![ONI-guide-SteelPermanent-2.png](assets/ONI-guide-SteelPermanent-2-dc19eeec41.png)

储水罐不用像上图那么大，但要是做得太小——又用得那么勤——管道就会因为过热而损坏。所以宁可大一点，也别太小。

这个设计可以和冷却回路搭配，那样的话你还要往水池里放一台液温调节器。这个我后面会讲，你也可以在[建造方案部分](aquatuner-steam-turbine-cooling-loo.md)看到图。指南的[迷你工业](mini-industry.md)部分里也有一套冷却回路（在很小的空间里塞进一堆机器的布局。）

关于冷却剂

不管用什么当冷却剂，它都会变热。所以冷却剂得用一种耐得住高温的液体。水会沸腾。用原油（石油也行）。原油可以在[油质生态](getting-oil-petroleum-and-plastic.md)里找到。

金属精炼器需要 400kg 冷却剂。不过它本身还有个储罐，可以多装一些冷却剂。想让金属精炼器不停地跑、不用等冷却剂重新灌满，那你至少得灌进两倍的量（800-1200kg）。

给金属精炼器灌冷却剂很简单：临时搭一套液泵加液桶排倒器，把泵接到金属精炼器的管道上就行。

![ONI-guide-SteelPermanent-3.png](assets/ONI-guide-SteelPermanent-3-3247ad1b09.png)

![ONI-guide-SteelPermanent-4.png](assets/ONI-guide-SteelPermanent-4-6545e15d36.png)

打算加冷却回路？

如果你打算在这个设计里加一条冷却回路（很常见的想法，我自己也这么干），那就得为液温调节器准备 1200kg 钢。

除非你的储水罐特别小，否则炼这 1200kg 钢的过程中水都到不了沸点（甚至连烫都算不上）。也就是说，你可以先在完全封住储水罐之前把钢炼出来，然后装上液温调节器，拿到钢之后再把设计封口。

---

*归档自 [https://www.guidesnotincluded.com/getting-steel](https://www.guidesnotincluded.com/getting-steel)（[Wayback Machine 快照](https://web.archive.org/web/20250819122246id_/https://www.guidesnotincluded.com/getting-steel)）。原创作品 © Some Random Finn / guidesnotincluded.com，采用 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/) 许可。本非商业社区档案馆将该页由 HTML 重新排版为 Markdown，并由社区翻译为简体中文——见[署名与许可](attribution.md)。*
