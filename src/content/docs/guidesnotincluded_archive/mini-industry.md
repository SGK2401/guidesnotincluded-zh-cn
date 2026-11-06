---
title: "迷你工业"
description: "我个人的偏好是复制人数量少、基地紧凑。我把所有制造机器都建在基地里，再把它们降温，而不是单独搞一片炎热的工业区。（就电力而言这挺浪费的，但又是另一个个人偏好。）"
source_url: https://www.guidesnotincluded.com/mini-industry
archived: 2025-08-06
archive_snapshot: https://web.archive.org/web/20250806081310id_/https://www.guidesnotincluded.com/mini-industry
---

我个人的偏好是复制人数量少、基地紧凑。我把所有制造机器都建在基地里，再把它们降温，而不是单独搞一片炎热的工业区。（就电力而言这挺浪费的，但又是另一个个人偏好。）

给想把东西弄得紧凑的人：这里有个办法，能在不大的空间里塞进很多东西。我差不多每局都会建个它的变体。（不过我自己很少做得这么紧凑。但如果你想把东西弄小，这个设计就够用了……；-)

这个设计包含一条冷却回路。不过要记住，它是给小规模使用设计的：如果你让一堆制造机器连续运转，它就跟不上了。

每层楼宽 18 格。这只是为了配合我的基地，我的基地楼层基本永远是 18 格宽。（存储箱的位置有限，能塞就塞吧。为了图清楚我把它们省掉了。）

![ONI-guide-Mini-Industry-1.png](assets/ONI-guide-Mini-Industry-1-20bae7c849.avif)

右下角那台机器是分子熔炉。它是后期机器，因为它需要的材料在你起始的小行星上没有。有些分子熔炉配方还需要石油，所以它旁边放了石油来源。那个石油罐顺便兼作玻璃的冷却液。

如果你有[滑鳞壁虎养殖区](low-tech-plastic-drecko-ranching.md)，就不需要聚合物压塑器（右边那台白色机器）。那就可以在那个位置放一台太空服锻造台或者其他需要的机器。（我已经完全不用聚合物压塑器了，塑料一律来自滑鳞壁虎养殖。你要是还没试过，试试看。）

上面那张图里没有画冷却回路，因为画上它会让图（更加）难懂。冷却回路我单独讲。

![ONI-guide-Mini-Industry-power.png](assets/ONI-guide-Mini-Industry-power-498f7bd783.avif)

我已经开始把蒸汽涡轮机接到我的主电力干线上了。这并非必需，如果你不接，也就不用在那边拉难看的高负荷电线。（但从远处给所有机器拉线时，你就得多处理些面条了。）

分子熔炉非常吃电——1600W！在这张图里它是没通电的。（难看的解法是把高负荷电线拉到它那里。对装饰友好的解法是从……你哪里有空余的变压器，就拉一根导线过来。）

另一个办法是用点自动化，确保玻璃熔炉和分子熔炉同一时间只有一个能运行。这样你就能把它们接到同一根电线上。

![ONI-guide-Mini-Industry-liquid.png](assets/ONI-guide-Mini-Industry-liquid-cc9a6ba911.avif)

绕着设计画的那圈虚线液体管道代表冷却回路。它其实应该绕着楼层和机器跑，给它们降温。但那样这张图就太乱了，所以我单独画。

从图下方往上走的那根管道是原油被抽上来的地方。它经过一台原油精炼器，产出的石油分成两根输出管道。一根通向聚合物压塑器，同时也往上走（如果你有石油火箭的话，就会通到那里）。第二根排进一个石油储液库，供分子熔炉那些东西用。

玻璃熔炉出来的液体管道：有陶瓷就用陶瓷。有富余陶瓷就用隔热管道，不过以我的经验，普通陶瓷管道就够了。

![ONI-guide-Mini-Industry-automation.png](assets/ONI-guide-Mini-Industry-automation-576538ab1f.avif)

我喜欢在冷却回路里放一个储液库，然后把液体温度传感器放在储液库后面。这样你回路起点就能得到可控、均匀的温度。

（注意：写这一节之后，我改了把冷却液送进液温调节器的接管方式。我现在的做法在本页末尾有图。）

聚合物压塑器的自动化是让它装满智能存储箱时停机。（想细看的话，见[自动化入门](getting-started-with-automation.md)。）

这个设计里有一小片区域，是打算让水在聚合物压塑器旁边积起来的（在透气砖之间）。要让水只积在那里，你得在聚合物压塑器周围（和上方）加大量降温。

下面这张图的冷却回路可能不足以把水留在你想让它待的地方。如果是这样，就让冷却回路也经过聚合物压塑器上方，再加一两块钻石变温板。（或者试试滑鳞壁虎。）

原油精炼器房间里的气压传感器是为了在房间被天然气灌满、精炼器停工之前把天然气抽走。

（这些图里没有画气体管道，但那些管道也没什么意外的——把氧气抽到气压服存放柜，把聚合物压塑器产生的二氧化碳抽到……随便哪儿。多余的天然气也一样，抽到随便哪儿。）

石油的表现不像水——就算石油罐里的排液口泡在石油里，石油照样会一直往外倒。所以你需要一套自动关断系统，在罐子够满的时候停掉它。简单做法是把一个液压传感器直接连到排液口上（用信号线）。

![ONI-guide-Mini-Industry-cooling-loop.png](assets/ONI-guide-Mini-Industry-cooling-loop-30b057b887.avif)

最后，是同一个设计、但加上了冷却回路的图。（为了塞进冷却回路，我对其他管道做了些小改动。金属精炼器的管道上加了几根液体管桥，石油输出管道上加了一根。）

为了看得清楚，我全程用了导热管道。正常情况下我只会在大热量区域用导热管道。

如果你发现某片区域太热了，可以在冷却回路运行的时候把普通管道升级成导热管道。冷却液不会从管道里漏出来。

![ONI-Aquatuner-1.png](assets/ONI-Aquatuner-1-ad41e147c8.avif)

呃……关于我刚才给你看的那个设计……

写完上一节之后，我改成了从上方把冷却液接进来，就像这里画的。

冷却液从右边流入，经过液温调节器，再往上到储液库，然后往左流出。两种做法都行——只要你的冷却回路能用就行。

加一点自动化，避免金属精炼器连续使用导致过热

如果你让金属精炼器连续（或者近乎连续）运转，冷却液最终会过热并把管道烧坏。

我不太明白为什么我玩了几千小时才意识到这一点，但你可以通过给设计加点自动化来避免过热。

试了几种办法之后，我最终定下来的是：在冷却箱里放一个温度传感器，把它连到金属精炼器上。

温度传感器测量温度，太热时就关掉金属精炼器。我发现把它设成“低于 200 C”能让蒸汽涡轮机几乎满负荷运行。

我以后会重写指南的这一部分，把末尾提到的改动加进去。不过现在先给我当前这局的几张概览图，里面包含了末尾提到的两处改动：新的液温调节器接管方式和蒸汽箱里的自动化。

（关于那两台窑炉：一台我设成持续生产陶瓷。另一台设成持续生产精炼碳，并接到那个智能存储箱上——存了 5K 精炼碳时就停止生产。）

![ONI-Guide_MetalRefineryAutomation.png](assets/ONI-Guide_MetalRefineryAutomation-14cdc3352c.avif)

![ONI-Guide_MetalRefineryAutomation2.png](assets/ONI-Guide_MetalRefineryAutomation2-4b700172a6.avif)

![ONI-Guide_MetalRefineryAutomation3.png](assets/ONI-Guide_MetalRefineryAutomation3-d051fc527a.avif)

---

*归档自 [https://www.guidesnotincluded.com/mini-industry](https://www.guidesnotincluded.com/mini-industry)（[Wayback Machine 快照](https://web.archive.org/web/20250806081310id_/https://www.guidesnotincluded.com/mini-industry)）。原创作品 © Some Random Finn / guidesnotincluded.com，采用 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/) 许可。本非商业社区档案馆将该页由 HTML 重新排版为 Markdown，并由社区翻译为简体中文——见[署名与许可](attribution.md)。*
