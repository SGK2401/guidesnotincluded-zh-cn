---
title: "循环利用厕所水"
description: "液体溢流机制"
source_url: https://www.guidesnotincluded.com/recycling-toilet-water
archived: 2025-07-31
archive_snapshot: https://web.archive.org/web/20250731071301id_/https://www.guidesnotincluded.com/recycling-toilet-water
---

简介

一些基础

液体溢流机制

快而糙（也就是：带菌）版

完整建造方案：图片与概览

工作原理

动手建造：简单做法

动手建造：不太简单的做法

* 建一间真空房
* 删掉并重建管道
* 把房间灌满氯气
* 完成氯气房：管道与自动化

* 点击右上角的水滴图标，或者按 F6，就能打开水管概览。

* 大多数与水管相关的东西都要通过左下角的水管建造图标来建。一个明显的例外是洗手池，它在医疗分类下。

* 水管类建筑通常有输入口和输出口。

  + 白色是输入：液体从这里进去
  + 绿色是输出：液体从这里出来

* 如果有东西不工作，先检查输入口和输出口。一个常见错误（玩了上千小时我还是会犯）就是把输入口或输出口接错。

* 管道必须通向某个地方，液体才会沿着它流动。（液体管桥也算“某个地方”——水会一直流到液体管桥的起点，哪怕管桥之后哪里都不通。）

* 想让液体从管道里倒出来，就得在末端装一个排液口。

* 重力只影响地图上的液体，不影响管道里的液体。

## 提示回顾：水管基础

## 简介

目标是把厕所里那些带菌的污染水，变成干净的、不带菌的水，再送回厕所去用。做完之后，你就再也不用操心厕所用水了。

我会讲两个版本：一个是快而糙（也就是说带菌）的版本，另一个是用氯气把病菌全部杀光的版本。

“用氯气杀菌”的建造方案有很多变体。我用的是从 Francis John 的一个 YouTube 视频里学来的：“QOL Mk3, 36 Germ decontamination for toilets and spin that vacillator : Oxygen not included”

可访问：<https://youtu.be/SEL3pxB5tao?t=102>，访问日期：2020 年 8 月 11 日。

（注意：这一整节是我刚重写的。[2023 年 3 月下旬] 错别字可能会异常地多，但我会尽量把它们找出来。如果你发现了错别字或者别的什么别扭的地方，请告诉我。有一个匿名的[联系表单](guide-feedback.md)可以用。）

## 一些基础（或者说：这事可以简单做，也可以麻烦地做）

把污染水送进净水器过一遍，它就会变成水。厕所、洗手池和淋浴隔间都需要水，而我们刚好多出了水，那就可以直接把这些水送回厕所和淋浴间。但是：

* 净水器不会去除水里的病菌。

结果就是我们拿满是病菌的水当干净水，用在厕所和淋浴间里。（水里的病菌是看不见的。想看到病菌，用病菌概览。）

为了解决这个问题，这套方案用到了氯气。

* 氯气能杀死病菌

我们会把所有带菌的水都送进一间充满氯气的房间，给它们“去菌化”（这绝对是个正经词）。

话虽如此，你要是不想杀病菌，其实也可以不杀。淋浴和洗手池那点干净水里的病菌不会传染给复制人。所以说，搬运带菌的泥土会让复制人沾上病菌，而在带菌的水里洗澡或洗手，他们反而还是干干净净的。

用满是病菌的水洗手反而能变得无菌——这个设定对我来说太出戏了，所以我不这么干。但如果你没有我这种执念，那完全可以跳过氯气房。这样这方案又快又简单。（两个版本的图我都会放。）

不管你选哪种，你都需要一个液体溢流机制。这跟厕所的工作方式有关：

* 厕所产出的液体比它用掉的更多

也就是说，如果做成一个闭环，管道迟早会堵死，厕所就不工作了。好在解决起来不难。

![ONI-Guide-QuickAndDirty3.png](assets/ONI-Guide-QuickAndDirty3-9aa6f83617.avif)

![ONI-Guide-QuickAndDirty4.png](assets/ONI-Guide-QuickAndDirty4-0d4759c460.avif)

别这么搞。这个厕所的管道会堵，然后我们的复制人就要出“事故”了。

## 液体溢流机制

![ONI-guide-WaterOverflow_edited.jpg](assets/ONI-guide-WaterOverflow_edited-26b934d7f5.avif)

用液体管桥做的液体溢流机制。液体总是先试着从液体管桥那边走。在这个设计里，就意味着上面的罐子会先被灌满，然后下面的罐子才开始进液。

我们需要一个办法，把多余的水从管路网络里排掉。这要用到一小段叫液体管桥的管道。

关于液体管桥，有件事值得知道：

* 液体管桥里从来不会有液体。它把液体从输入管道瞬间传送到输出管道。也就是说：
* 你可以拆掉液体管桥，而不会有水漏出来

液体管桥有输入侧（白色）和输出侧（绿色）。液体管桥的用途之一，是让完全独立的管道从它下面穿过去。另一个用途，就是做出我们需要的那个液体溢流机制。

在《缺氧》里，液体的规矩是：液体“偏爱”液体管桥，而不是普通管道。如果液体在管网里走到一个同时有液体管桥和普通管道的地方，它总是先试着走液体管桥。只有当这条路走不通时，它才会流进普通管道。

这个看图可能更好懂。图中就用“液体偏爱液体管桥”这条规律做了主储罐和副储罐。泵上来的水会先试着过桥进入上面的罐子。只有当那个罐子和管桥之后的所有管道都满了，第二个罐子才开始进水。

我们给厕所用的就是这个机制——保证厕所回路里水够用，而多出来的水会被排掉。

下面就进入建造方案。先讲快而糙版，再讲完整版。

液体溢流

快而带菌版

## 快而糙（也就是：带菌）版

厕所把污染水送进净水器，净水器把它变成水，再送回厕所。

你总得在某处放一个液体溢流机制。可以放在净水器前面，也可以放在后面。放哪儿决定了你多出来的是少量污染水，还是（带菌的）水。

![ONI-Guide-QuickAndDirty5.png](assets/ONI-Guide-QuickAndDirty5-c45215e305.avif)

快而糙版 1。溢流出来的是污染水。

![ONI-Guide-QuickAndDirty2.png](assets/ONI-Guide-QuickAndDirty2-2b8066012b.avif)

快而糙版 2。溢流出来的是（带菌的）水。

## 完整建造方案：图片与概览

图片与概览

我先放这套方案的图片和概览，包括储液库前面那段让人头大的管道的几张特写。然后再讲它的工作原理，并给出几种做法和建造小贴士。

![ONI-Guide-BathroomDecontamination1.png](assets/ONI-Guide-BathroomDecontamination1-63c7db3e2a.avif)

污染（带菌）水除污方案。这张图里我放了几个马桶和洗手池，但我所有的除污都用同一套方案。我一般会做好几层，一层叠一层，把淋浴、污染水排放、医院等等都放上去。它们最后都汇进氯气房。

![ONI-Guide-BathroomDecontaminationPipes.png](assets/ONI-Guide-BathroomDecontaminationPipes-3f0867e0fb.avif)

水管概览。罐子左边那个红圈是液体管道元素传感器，设置成了污染水。罐子右边那个东西是液体截断阀。

![ONI-Guide-BathroomDecontaminationAutomation.png](assets/ONI-Guide-BathroomDecontaminationAutomation-e50226c217.avif)

自动化概览。液体管道元素传感器连到了液体截断阀。

![ONI-Guide-BathroomDecontaminationTrickyBit1.png](assets/ONI-Guide-BathroomDecontaminationTrickyBit1-e0eff54b04.avif)

凑近看看那段让人头大的地方

![ONI-Guide-BathroomDecontaminationTrickyBit2.png](assets/ONI-Guide-BathroomDecontaminationTrickyBit2-106c334066.avif)

第一个储液库左边的管道拆开之后是这样的。

![ONI-Guide-BathroomDecontaminationTrickyBit3.png](assets/ONI-Guide-BathroomDecontaminationTrickyBit3-7d61e1d45a.avif)

这是它们拼在一起的样子，没有储液库，也没有自动化。

## 工作原理

这套除污装置造出一个回路，厕所用水就在里面永远循环。污染水被净化后又回到回路里。多出来的水则被吐到这套东西外面。

氯气用来清掉污染水里的病菌。氯气杀菌很快，但不是立刻见效。所以我们得保证污染水在氯气房里待得够久，久到病菌全灭。这靠三个储液库加一点自动化来实现。

只要三个储液库都保持满的，带菌的污染水在穿过这三个罐子去净水器的路上，病菌就已经全没了。

为了保证三个储液库都是满的，这个设计用了液体管桥的管道布局和一点自动化。它的效果是：三个罐子全满时才会发出信号。

只要有可能，液体就会走液体管桥。管桥之后的一段管道上装了一个检测液体的自动化传感器。也就是说，只有当所有储液库都满了，污染水才会进入这段管道、触发传感器。

液体管道元素传感器之后还有一座液体管桥，把污染水送回主液体管道。

几张示例图可能更能说清这个机制。下面的图里用的机制和实际方案里的一样。只有当罐子满了，污染水才会触发传感器，进而打开液体截断阀，把污染水放出来。

工作原理

![ONI-Guide-BathroomDecontaminationHowItWorksPipes.png](assets/ONI-Guide-BathroomDecontaminationHowItWorksPipes-c4bbdee228.avif)

工作原理：水管概览。污染水只要能过液体管桥就会过。只有当管道都满了，污染水才会直接往上走，触发液体管道元素传感器。

![ONI-Guide-BathroomDecontaminationHowItWorksAutomation.png](assets/ONI-Guide-BathroomDecontaminationHowItWorksAutom-1bf65da9f5.avif)

工作原理：自动化概览。被触发时，液体管道元素传感器会给液体截断阀发信号，后者打开，让液体通过。

只要有新的污染水进入系统，液体截断阀就一直开着。如果污染水不再进入系统，装着液体元素传感器的那段管道就会排空。传感器随后发出信号，把液体截断阀关掉。

机制讲完了，接下来讲怎么建。可以走简单做法，也可以走不太简单的做法。

这跟游戏里氯气的工作方式有关：

* 氯气能杀死储液库里的病菌，但是
* 氯气不能杀死液体管道里的病菌

也就是说，如果你把所有东西建好、直接接上，除污装置出来的水里还是会有病菌。因为氯气房里那些管道上还有病菌，就算氯气已经把储液库里的病菌全杀了也一样。

## 动手建造：简单做法

如果你地图上有不带菌的污染水可用，那你就轻松了。

* 不带菌的污染水可以在菌泥生态里找到

这就是我用的做法，也是我推荐的做法（前提是你有干净无菌的污染水可用）。

你可以把整套东西全建好，管道、自动化一样不落。但先别往里泵干净水。还有，如果你有个污染水排放点，也先别启用它。总之，在一切就绪之前，别让复制人靠近你的建造现场。

让它就绪也很简单。你需要把（干净的）水管灌满，整套东西才能转起来。你可以从别处泵干净水进来。或者像我通常做的那样：先把接进来的那个污染水源跑一阵，让它变成水。

不管你选哪种，只要污染水罐满了、厕所之类的地方也有水了，就可以开张了。

这套装置也能把你基地里闲置的污染水变成水。加一座液体管桥，让除污装置优先处理厕所出来的水（见下面示例图）。

简单做法

![ONI-Guide-BathroomDecontamination2.png](assets/ONI-Guide-BathroomDecontamination2-ebcdbac5e0.avif)

起步阶段。从地图上泵进污染（但不带菌的）水，让厕所类建筑里灌满干净水。如果你用液体管桥把外部污染水接进来，系统会优先处理厕所来的污染水；只要没有厕所水可处理，它就去处理外部管道送来的污染水。

这套方案仍然需要你先造出真空，再灌满氯气。怎么做在“不太简单的做法”里讲。往下滚一点，或者点这里：造真空、把真空房灌满氯气。

如果你没有不带菌的污染水可用，那就只能走不太简单的做法了。

## 动手建造：不太简单的做法

这个做法没法一次把整套都建好，得分阶段来。

先把所有厕所之类的建好，让它们汇到三个储液库里。你还得从某处往系统里送（干净的）水。

接下来你的复制人会慢慢开始用他们“产出”的污染水把储液罐灌起来。（这些污染水是带菌的。）

不太简单

![ONI-Guide-BathroomDecontaminationOption2_1.png](assets/ONI-Guide-BathroomDecontaminationOption2_1-569e135f99.avif)

第 1 步。用一个外部水源，在你复制人使用厕所之类地方的同时，污染水（慢慢地）灌满三个储液库。连接三个储液库的那条直线管道是临时的，储液库满了之后就拆掉。

三个储液库灌水的这段时间，你可以先把周围区域收拾好，为之后造真空房（然后再灌氯气）做准备。

我们后面要拆管道，所以现在就建好真空房，也能防止污染水流得到处都是、漏进你的基地。

## 建一间真空房

我们要的是一间充满氯气的房间。如果房间里氯气很多，但还混了一点别的气体，那我们就无法确定带菌的污染水在氯气里待的时间够不够杀光病菌。所以氯气房里只能有氯气。

为了保证里面只有氯气，我们得先建一间房，然后把里面的气体全部抽空——造出真空。但我们又希望在真空状态下还能进得去。要做到这一点，就需要一个叫液体锁的东西。

液体锁能让复制人通过，但气体过不去。然后我们把房间里的气体全抽走，最后灌满氯气。（想了解更多，指南里有一节专门讲这个：[液体锁基础](liquid-lock-basics.md)。）

你可以建一个正经的液体锁，也可以搞个半吊子、更快但更有风险的版本。反正这只是个临时液体锁，我就建快的那个。

真空

![ONI-Guide-BathroomDecontaminationVacuum1.png](assets/ONI-Guide-BathroomDecontaminationVacuum1-a0825968fb.avif)

建真空房：液体锁。先建左边的墙，再照图里那样建一个碗状结构。

现在我们要把储液库那块地方的气体全部抽空。于是在碗状结构里做一个液体锁，然后用气泵把气体抽走。

在《缺氧》里，一格空间只能装气体或液体，不能两者都有。如果你不介意稍微利用（读作：滥用）这个机制，那只要往碗里倒一点液体，就能做一个快速液体锁。

注意：如果你要建这个又快又有风险的版本，就把液桶排倒器放在液体锁的另一侧，远离真空房。只要记得这么做，快而有风险的版本就变成快而其实没多少风险的版本了。

（你不必知道为什么要这样，但如果你想知道：因为如果液桶排倒器放在真空房那一侧，中间那格里可能会残留一小团氧气。复制人站在液体锁那格上、真空房里又有一点水的时候，可以呼吸那格里的氧气，然后就把二氧化碳呼进真空房里了。）

![ONI-Guide-BathroomDecontaminationLiquidLock1_edited.jpg](assets/ONI-Guide-BathroomDecontaminationLiquidLock1_edi-7563eb0f9d.avif)

液体锁。更快但有点风险的版本。注意照图里那样，让两格里都有水。液桶排倒器放在另一侧，远离真空房。

![ONI-Guide-BathroomDecontaminationLiquidLock2.png](assets/ONI-Guide-BathroomDecontaminationLiquidLock2-bc93309fde.avif)

![ONI-Guide-BathroomDecontaminationLiquidLock3.png](assets/ONI-Guide-BathroomDecontaminationLiquidLock3-e95fba0612.avif)

液体锁。更慢、更安全的版本。把液体碗最下面那格填满，上面三格每格大约 100 kg。当你在水上方建好最后一格砖时，它会“把水吸上去”，从而彻底阻断两侧之间的气体流动。

![ONI-Guide-BathroomDecontaminationLiquidLock4.png](assets/ONI-Guide-BathroomDecontaminationLiquidLock4-82ee839a2f.avif)

把所有气体抽走。如果气压高于 2 kg，排气口就不让气体排出。要是这成了问题，你可以建一根长气体管道，沿途装几个排气口（或者如果你有塑料，就用高压排气口）。

## 删掉五段管道

储液库满了之后，就可以把临时管道删掉。（这事可以在建好气闸、抽完氧气之前做，也可以在之后做。如果放在之后做，你就多了一点污染氧要抽。）

如果你有会水管技能的复制人，可以在删管道之前先把管道清空。用的是右下角的清空管道图标。

如果没有水管工，那就只能选脏乱的那个办法：直接删管道，让污染水流出来，然后擦干净。

关于拆管道：

* 一个方便地只拆管道的办法：先打开水管概览，然后按“X”。这样你就只会删掉管道。

删除管道

![ONI-Guide-BathroomDecontaminationDeletePipes.png](assets/ONI-Guide-BathroomDecontaminationDeletePipes-fc9c5ec5e8.avif)

删掉五段管道。把从最左边储液罐白色输入口到最右边储液罐白色输入口的那段管道删掉。（如果你有会水管技能的复制人，可以先清空管道。）

![ONI-Guide-BathroomDecontaminationDeletePipes2.png](assets/ONI-Guide-BathroomDecontaminationDeletePipes2-4c8a1bd21e.avif)

拆完之后，发一条擦拭指令（如果需要），再发一条清扫指令，把房间里所有污染水瓶子清出去。污染水瓶子会挥发污染氧，而我们的氯气房里可不要这个。

只有当某处有个设成接收污染水的液桶排倒器时，复制人才会去清扫污染水瓶子。如果你的厕所方案里没有这个东西，就随便找个地方临时建一个。

污染水瓶子清完、房间变成真空之后，就可以把气泵删掉。如果你想看自己离真空还有多远，可以用材料概览查看气压（点右上角的方块图标，或者按 F4）。

在一个全是“什么都没有”（真空）或者全是氯气的房间里，复制人应该不会呼出二氧化碳。（我只有一次让二氧化碳跑进了真空房。不确定为什么，可能因为我当时用的是那个又快又有风险的液体锁。）

注意：有胃肠胀气特质的复制人不管在哪都会排天然气，连你的真空房或氯气房也不放过。所以如果你有胃肠胀气的复制人，就别让他们靠近这套东西。

氯气

## 把真空房灌满氯气

往房间里搞氯气主要有两种办法：

1. 在地图上找氯气。然后用泵让它过一遍气体筛选器（设成氯气），再直接泵进你的氯气房，或者用气体装罐器和气罐排倒器把它弄进去。
2. 用漂白石

漂白石大概是对新手更友好的办法。它又快又简单，也是我用的办法。

漂白石可以在腐蚀生态里找到——就是大片紫色的那个。

![ONI-guide-BleachStone_edited.jpg](assets/ONI-guide-BleachStone_edited-fb285f6842.avif)

漂白石

漂白石一旦被挖出来，就会开始释放（少量的）氯气。所以思路很简单：挖点漂白石，放进真空室里。随着漂白石释放氯气，这间房就会变成我们的氯气房。

* 在房间里建一个存储箱
* 把它设成只接收漂白石。漂白石在升华物分类里。它在列表最下面，属于非标准分类。
* 注意：只有在你挖到过漂白石之后，它才会作为选项出现。如果看不到，就挖一些再来看。
* 把存储箱的优先级调高（调到 7 左右）
* 挖一些漂白石（如果你还没有）
* 给漂白石下一条清扫指令

然后复制人会把漂白石搬到存储箱里，房间里的氯气就会缓慢但稳定地多起来。

这个过程里可能有些氯气会飘进你的基地。问题不大，我们之后可以收拾。（或者说“我们会收拾”，然后不知怎么就永远没空收拾。）

![ONI-Guide-BathroomDecontaminationChlorineRoom1.png](assets/ONI-Guide-BathroomDecontaminationChlorineRoom1-7ce28db649.avif)

装漂白石的存储箱

该用多少漂白石？

游戏里氯气就是这样：有一点儿，效果就跟有很多一样。也就是说，你往房间里放多少（或者多少的）漂白石都无所谓。我一般把存储箱设成 100 kg，看起来绰绰有余。（挖的时候会损失一半质量，所以这相当于挖了 200 kg 的漂白石砖块。）

漂白石进了存储箱之后，你就可以把存储箱删掉了。

如果你基地里还有别的存储箱也设成了漂白石，而你不想让复制人跑来把这里的漂白石搬走，那就得先把它临时禁用。）

做完这些，就等氯气在储液罐里对病菌施展魔法了。用病菌概览盯着那些罐子。等它们不带菌了，我们就可以继续。

![ONI-Guide-BathroomDecontaminationChlorineRoom2.png](assets/ONI-Guide-BathroomDecontaminationChlorineRoom2-ecfa4f47a9.avif)

给罐子除菌。用病菌概览（右上角的病菌图标）看所有罐子里的病菌什么时候全没了。

## 完成氯气房：管道与自动化

现在我们可以把最后那点管道和自动化建好，封住氯气房，再给净水器腾出地方。

管道：把上面那座液体管桥接到最左边储液库的输入口。把各储液库的输出口接到它右边那个储液库的输入口。

从最右边的储液库接一段管道到液体截断阀。

注意：储液库要接到液体截断阀的输入口，也就是白色的那一头。

再从液体截断阀的输出口（绿色的那一头）接一段管道，通到右边的墙里。

完成建造

![ONI-Guide-BathroomDecontaminationChlorineRoom4.png](assets/ONI-Guide-BathroomDecontaminationChlorineRoom4-122eb54e5e.avif)

管道。把上面那座液体管桥接到储液库。把储液库一个接一个连起来。把最后一个储液库接到液体截断阀，再从截断阀拉一根管道到墙里。

自动化：左边是设为污染水的液体管道元素传感器。右边是液体截断阀。用信号线把两者连起来。

![ONI-Guide-BathroomDecontaminationChlorineRoom3.png](assets/ONI-Guide-BathroomDecontaminationChlorineRoom3-96f10397c2.avif)

自动化。液体元素传感器装在液体管桥两个输入口之间的那段管道上。末端是液体截断阀。用信号线把它们连起来。

电力：液体截断阀需要 10 W 电。为了以后不折腾，用导线接（就是那种能承受 2000 W 的线）。

我建这个的时候，基地供电一般还在用普通电线。那就炼出足够的精炼金属，做一小段导线，从液体截断阀接到墙里。

![ONI-Guide-BathroomDecontaminationChlorineRoom5.png](assets/ONI-Guide-BathroomDecontaminationChlorineRoom5-bd3dc4b224.avif)

电力概览。记得留一小段电线，完工后才能给液体截断阀通电。

然后把液体截断阀右边的墙砌起来，封住氯气房。把液体锁的残骸删掉。（让水流到哪儿都行，或者先抽走。我们只是想清掉它——这块地方要腾出来。）

![ONI-Guide-BathroomDecontaminationChlorineRoom6.png](assets/ONI-Guide-BathroomDecontaminationChlorineRoom6-1f0ab997ec.avif)

封住氯气房，删掉液体锁的砖块。

现在加上净水器，把氯气房出来的管道接到净水器的输入口（白色那一头）。净水器要用沙子，所以你可以加一个设成沙子的存储箱（在过滤介质分类下）。

净水器的输出口要接到一座液体管桥。这就是你排掉多余水的机制。让管桥接回你（干净的）进水管道。然后再分出一条支线，把多余的干净水送到你想送的地方。（一个 SPOM、几株毛刺花、你的储水区，等等。）

![ONI-Guide-BathroomDecontaminationComplete1.png](assets/ONI-Guide-BathroomDecontaminationComplete1-761b680daa.avif)

![ONI-Guide-BathroomDecontaminationComplete2.png](assets/ONI-Guide-BathroomDecontaminationComplete2-fa45822401.avif)

等氯气房里第一个储液罐灌满之后（它在给氯气房的管道灌水时损失了一点污染水），你的回水系统就会开始输出干净水。这时候你就可以把原来的水源从这套装置上断开了。

给自己点个赞——以后你再也不用为厕所的供水操心了。

可选方案：溢流出来的是污染水而不是水

如果你愿意，可以把液体管桥溢流机制放在氯气房前面。这样你得到的就不是水，而是一小股稳定的污染水。比如可以拿去喂顶针芦苇，换来一点芦苇纤维。

---

*归档自 [https://www.guidesnotincluded.com/recycling-toilet-water](https://www.guidesnotincluded.com/recycling-toilet-water)（[Wayback Machine 快照](https://web.archive.org/web/20250731071301id_/https://www.guidesnotincluded.com/recycling-toilet-water)）。原创作品 © Some Random Finn / guidesnotincluded.com，采用 [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/) 许可。本非商业社区档案馆将该页由 HTML 重新排版为 Markdown，并由社区翻译为简体中文——见[署名与许可](attribution.md)。*
