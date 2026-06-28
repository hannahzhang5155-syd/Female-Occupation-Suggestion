const TYPE_KEYS = ["entrepreneurial", "technical", "social", "creative", "contentCreator"];

const TYPE_META = {
  entrepreneurial: {
    label: "创业型人格",
    title: "机会捕手",
    short: "你对机会、变化和主动掌控有天然敏感度，适合从小项目、小验证开始建立自己的商业飞轮。",
    color: "#c5765c",
  },
  technical: {
    label: "技能型人格",
    title: "专业深潜者",
    short: "你重视专业能力、系统学习和稳定积累，适合把一项技能打磨成可以被市场购买的服务。",
    color: "#8aa9bd",
  },
  social: {
    label: "社交型人格",
    title: "关系连接者",
    short: "你擅长理解人、连接资源和推动协作，适合围绕社群、咨询、销售、服务体验展开职业机会。",
    color: "#8da68d",
  },
  creative: {
    label: "创意型人格",
    title: "灵感造物者",
    short: "你需要表达空间和审美自主权，适合把想法变成作品、产品、品牌视觉或体验设计。",
    color: "#c98486",
  },
  contentCreator: {
    label: "内容创作型人格",
    title: "故事传播者",
    short: "你擅长把信息转化为内容影响力，适合从个人品牌、知识内容、社媒运营等方向切入。",
    color: "#c8a15f",
  },
};

const COMPOSITE_PERSONAS = {
  entrepreneurial: {
    technical: ["精准的拓荒者", "你既有开创新事业的胆量，也愿意用专业能力和理性判断支撑自己的选择。适合从真实问题出发，做小规模验证，再把想法打磨成可落地的产品、服务或项目。", "我的创新不只停留在想法，更在于我能将其打磨成现实的利器。"],
    social: ["魅力的领航者", "你擅长看到机会，也懂得汇聚人心。你适合在资源整合、商业拓展、团队带领和合作型创业中发挥优势，让想法通过人与人的连接变成现实。", "我不仅能看到远方，更能汇聚人心，共同抵达。"],
    creative: ["开拓性的灵感家", "你的商业敏感度与创意表达彼此加成。你不满足于复制已有路径，更适合做品牌、产品、体验或内容型项目，用独特视角打开新的市场空间。", "我的商业版图，始于一个大胆的创意，终于无限的可能。"],
    contentCreator: ["影响力的构建者", "你有行动力，也懂得用故事、观点和内容建立信任。你适合把个人经验、专业洞察或品牌理念转化为可传播的影响力，再连接商业机会。", "我用故事点燃梦想，用内容铸就品牌。"],
  },
  technical: {
    entrepreneurial: ["革新的技术先锋", "你不是只想掌握技能，而是希望把技能变成解决问题的方案。你适合数据、AI、金融建模、工程技术、产品技术等能把专业能力转化为真实价值的方向。", "我的专业和我的梦想一样，都指向未来的无限可能。"],
    social: ["赋能的智慧桥梁", "你拥有专业底盘，也愿意把复杂知识讲清楚、用明白。你适合做专业咨询、客户成功、解决方案、培训、项目协作等连接专业与人的岗位。", "我的专业，是为了让更多人受益，让团队更强大。"],
    creative: ["精巧的创想工程师", "你能把理性结构和审美创造结合起来。你适合数据可视化、建筑/BIM、产品设计、交互体验、技术创意等既需要技术又需要表达的方向。", "我的每一次攻克难题，都是为了让创意拥有更坚实的翅膀。"],
    contentCreator: ["专业的知识传播者", "你适合把专业能力转化为可被看见、可被理解、可被信任的内容资产。财经科普、技术教程、行业研究、知识产品都可能成为你的发力点。", "我用专业点亮知识，用内容连接世界。"],
  },
  social: {
    entrepreneurial: ["协作的商业构建者", "你擅长连接人，也愿意推动事情发生。你适合商业拓展、咨询、财富管理、项目制创业、社区商业等需要信任、谈判与资源整合的方向。", "我的事业，是与人共创的艺术。"],
    technical: ["高效的沟通专家", "你不仅会沟通，也能用专业赢得信任。你适合客户成功、解决方案顾问、HRBP、项目管理、用户研究等需要理解人又理解业务的岗位。", "我用真诚连接彼此，用专业赢得信任。"],
    creative: ["共情的灵感策动者", "你能从人的需求和情绪里捕捉灵感。你适合品牌体验、活动策划、服务设计、空间体验、用户运营等需要共情与创意结合的方向。", "我的创意，源于对人心的深刻理解。"],
    contentCreator: ["社群的魅力主理人", "你适合通过内容与社群建立稳定连接。无论是线上社群、知识社区、女性成长、职业互助还是品牌私域，你都能把人聚拢起来。", "我用真诚搭建桥梁，用内容凝聚社群。"],
  },
  creative: {
    entrepreneurial: ["远见的创新企业家", "你的创意不是空想，而有机会发展成产品、品牌或商业模式。你适合从小作品、小项目、小服务开始验证市场，再逐步放大。", "我的每一次突破，都是对未来商业形态的预言。"],
    technical: ["精湛的艺术工匠", "你适合把审美与硬技能结合起来，例如建筑设计、空间设计、产品设计、数据可视化、AI 创意工具等，让作品既美也有用。", "我的作品，是灵感与技艺的完美结晶。"],
    social: ["启发性的连接者", "你不只是自己创作，也能激发她人的灵感。你适合策展、品牌活动、体验设计、创意工作坊、团队创新引导等连接型创意方向。", "我的创意，在交流中生长，在连接中绽放。"],
    contentCreator: ["独特的表达艺术家", "你擅长用文字、图像、视频或空间语言表达自我。你适合内容策划、视觉叙事、品牌表达、短视频创作、文化创意等方向。", "我用独特的视角，讲述属于我的故事。"],
  },
  contentCreator: {
    entrepreneurial: ["品牌的叙事构建师", "你适合把内容和商业结合起来，用故事建立品牌、信任和转化。个人品牌、品牌策略、财经内容、课程产品、独立媒体都值得探索。", "我的内容，是品牌最动人的名片。"],
    technical: ["精通的数字传播者", "你适合把专业知识、数据能力或工具能力转化为清晰内容。数据新闻、投研表达、技术科普、AI 教程、行业分析都能放大你的优势。", "我用技术武装内容，让信息传播更具力量。"],
    social: ["共鸣的社群引领者", "你擅长通过内容建立关系，也愿意回应受众。你适合社群内容、知识 IP、教育陪伴、职业成长社区等需要长期信任的方向。", "我的内容，是连接你我的心桥。"],
    creative: ["多元的叙事艺术家", "你能用多种媒介讲故事，适合视频、播客、视觉内容、品牌叙事、文化传播、纪录片等兼具创意和传播力的赛道。", "我的世界，由无数个精彩的故事构成。"],
  },
};

function getCompositePersona(main, second) {
  const fallback = [
    TYPE_META[main.key].title,
    TYPE_META[main.key].short,
    "我会用自己的优势，探索更适合我的职业路径。",
  ];
  const entry = COMPOSITE_PERSONAS[main.key]?.[second.key] || fallback;
  return { name: entry[0], description: entry[1], motto: entry[2] };
}

const OPTION_TYPE_MAP = ["entrepreneurial", "technical", "social", "creative", "contentCreator"];

const v4PersonalityItems = [
  {
    "id": "Q1",
    "title": "姐妹们聚会，聊到最近生活中的小烦恼，你听着听着，脑子里最先冒出来的是？",
    "options": [
      {
        "label": "“这不就是个商机吗？我能怎么把这个烦恼变成一个赚钱的好点子，让大家都能受益？”",
        "type": "entrepreneurial"
      },
      {
        "label": "“这个烦恼的根源到底是什么？有没有什么高效的方法能彻底解决它，让大家以后不再困扰？”",
        "type": "technical"
      },
      {
        "label": "“哎呀，原来大家都有同感！我得组织个活动，让大家一起吐槽，互相安慰，感受彼此的温暖。”",
        "type": "social"
      },
      {
        "label": "“如果能设计一个超可爱的小工具，或者拍个搞笑视频来缓解这个烦恼，肯定超治愈，让大家眼前一亮！”",
        "type": "creative"
      },
      {
        "label": "“这个话题太有共鸣了！我得赶紧写篇小作文，或者录个播客，分享我的看法和姐妹们的经历，让更多人看到。”",
        "type": "contentCreator"
      }
    ]
  },
  {
    "id": "Q2",
    "title": "想象一下，哪个瞬间会让你觉得“我太牛了，人生巅峰！”？",
    "options": [
      {
        "label": "我亲手创办的公司成功上市，站在敲钟台上，感觉自己掌控了全世界，实现了财富自由。",
        "type": "entrepreneurial"
      },
      {
        "label": "我解决了一个困扰行业多年的技术难题，大家都来请教我这个“技术大神”，我的专业能力得到极致体现。",
        "type": "technical"
      },
      {
        "label": "我组织了一场超成功的活动，把各行各业的优秀女性都聚到一起，大家玩得超开心，还互相启发，感受到强大的连接力。",
        "type": "social"
      },
      {
        "label": "我的创意作品被国际大奖认可，所有人都惊叹于它的独特和美感，觉得我就是个天才，我的灵感被世界看见。",
        "type": "creative"
      },
      {
        "label": "我写的一篇文章或拍的视频火遍全网，无数人留言说“你简直说出了我的心声，太懂我了！”，我的表达产生了巨大共鸣。",
        "type": "contentCreator"
      }
    ]
  },
  {
    "id": "Q3",
    "title": "领导在群里发了个紧急又棘手的任务，大家都没吭声，你会？",
    "options": [
      {
        "label": "快速分析这个任务的挑战和潜在回报，如果觉得值得一搏，我会主动站出来接下，因为我相信我的能力。",
        "type": "entrepreneurial"
      },
      {
        "label": "默默打开搜索引擎和专业文档，开始研究这个任务的技术细节和可行性，享受解决难题的过程。",
        "type": "technical"
      },
      {
        "label": "私下找几个平时聊得来的同事，问问她们的看法，看看大家能不能一起想办法，集思广益。",
        "type": "social"
      },
      {
        "label": "觉得这任务太普通了，脑子里已经开始构思，有没有什么特别的、出人意料的方法能搞定它，让它变得有趣。",
        "type": "creative"
      },
      {
        "label": "觉得这是个观察职场生态的好机会，默默记录下大家的反应和自己的思考，说不定能写篇职场观察，分享给更多人。",
        "type": "contentCreator"
      }
    ]
  },
  {
    "id": "Q4",
    "title": "你花了很多心思提出的一个好点子，结果被老板当场否定，你会？",
    "options": [
      {
        "label": "表面上不动声色，心里盘算着怎么收集更多数据和案例，下次用事实说话，证明我的眼光和决策力。",
        "type": "entrepreneurial"
      },
      {
        "label": "觉得老板可能没理解技术细节，我会回去把我的方案再打磨得更严谨、更无懈可击，用专业说服他。",
        "type": "technical"
      },
      {
        "label": "感觉有点委屈，下班后会找最信任的闺蜜吐槽，寻求安慰和支持，毕竟情绪也需要出口。",
        "type": "social"
      },
      {
        "label": "觉得老板太保守了，我会把这个点子再包装得更有趣、更吸引人，或者换个方式去实现它，让创意不被埋没。",
        "type": "creative"
      },
      {
        "label": "觉得这是个绝佳的创作素材，我会把这次“被泼冷水”的经历写成一篇职场故事，分享给更多人，让大家引以为戒。",
        "type": "contentCreator"
      }
    ]
  },
  {
    "id": "Q5",
    "title": "如果突然有一笔钱可以自由支配，你最想用它来做什么？",
    "options": [
      {
        "label": "投资一个有前景的项目，或者自己创业当老板，把事业做大，实现财务自由和个人价值。",
        "type": "entrepreneurial"
      },
      {
        "label": "购买最顶级的专业设备，或者报一个行业内最权威的课程，把自己的技能练到极致，成为某个领域的顶尖专家。",
        "type": "technical"
      },
      {
        "label": "组织一场大型的女性社群活动，或者开一个温馨的线下空间，让更多姐妹能互相连接、共同成长，建立强大的支持网络。",
        "type": "social"
      },
      {
        "label": "打造一个属于自己的创意工作室，只做那些能激发我灵感、让我觉得酷的作品，让我的创意被看见。",
        "type": "creative"
      },
      {
        "label": "升级我的内容创作设备，或者投入到一个大型内容项目中，用我的作品去影响更多人，传递我的声音和价值观。",
        "type": "contentCreator"
      }
    ]
  },
  {
    "id": "Q6",
    "title": "周末在家，你最享受的“充电”方式是？",
    "options": [
      {
        "label": "刷各种商业资讯，研究怎么把自己的小爱好变成赚钱的副业，感觉自己在为未来“布局”。",
        "type": "entrepreneurial"
      },
      {
        "label": "沉浸在某个技术挑战或学习新技能中，比如钻研编程、学习新的设计软件，一搞就是一整天，享受“攻克难关”的快感。",
        "type": "technical"
      },
      {
        "label": "约上姐妹们一起探店、看展，或者在家办个主题派对，享受和大家在一起的时光，感觉“能量满满”。",
        "type": "social"
      },
      {
        "label": "随心所欲地涂鸦、做手工，或者把家里重新布置一番，让生活充满新鲜感和美感，感觉“灵感爆棚”。",
        "type": "creative"
      },
      {
        "label": "整理这周的所见所闻，写篇走心的文章，或者剪辑个vlog，分享给我的粉丝，感觉“被理解”和“被连接”。",
        "type": "contentCreator"
      }
    ]
  },
  {
    "id": "Q7",
    "title": "玩剧本杀或密室逃脱时，你通常是团队里的哪个“担当”？",
    "options": [
      {
        "label": "决策者：快速分析局势，带领大家找到关键线索，一心只想赢，感觉自己是“掌控者”。",
        "type": "entrepreneurial"
      },
      {
        "label": "细节侦探：不放过任何蛛丝马迹，专注于破解谜题和机关，享受解密的快感，感觉自己是“智慧担当”。",
        "type": "technical"
      },
      {
        "label": "气氛担当：主动和大家互动，照顾每个人的情绪，让整个过程充满欢声笑语，感觉自己是“开心果”。",
        "type": "social"
      },
      {
        "label": "脑洞玩家：总能提出一些意想不到的解法，或者给剧情增加一些有趣的设定，感觉自己是“创意源泉”。",
        "type": "creative"
      },
      {
        "label": "故事复盘者：结束后能把整个故事和大家的表现讲得绘声绘色，让大家回味无穷，感觉自己是“叙事者”。",
        "type": "contentCreator"
      }
    ]
  },
  {
    "id": "Q8",
    "title": "如果要给自己换一台新电脑，你最看重它的哪个“特质”？",
    "options": [
      {
        "label": "投资回报率：它能帮我更高效地工作，创造更多价值吗？我需要它成为我的“赚钱利器”。",
        "type": "entrepreneurial"
      },
      {
        "label": "硬核性能：处理器、显卡、内存这些配置必须是顶级的，能流畅运行各种专业软件，满足我的“技术追求”。",
        "type": "technical"
      },
      {
        "label": "沟通体验：摄像头和麦克风效果要好，方便我随时随地和朋友视频、开会，保持“在线连接”。",
        "type": "social"
      },
      {
        "label": "颜值与设计：外观要时尚，屏幕色彩要精准，用起来心情都变美了，它是我的“灵感伴侣”。",
        "type": "creative"
      },
      {
        "label": "创作便利性：键盘手感要舒服，存储空间要大，方便我随时记录灵感、存储素材，它是我的“创作基地”。",
        "type": "contentCreator"
      }
    ]
  },
  {
    "id": "Q9",
    "title": "刷到别人又做成了一件“大事”，你心里最先冒出来的是？",
    "options": [
      {
        "label": "“这个项目/模式看起来很有潜力，我能不能也试试，或者找到更好的切入点，让我也能‘搞点事情’？”",
        "type": "entrepreneurial"
      },
      {
        "label": "“她到底是怎么做到的？用了什么方法、工具或技术？我得去扒一扒细节，学习她的‘独门秘籍’。”",
        "type": "technical"
      },
      {
        "label": "“哇，太棒了！我得找机会认识她，跟她聊聊，说不定能成为朋友或合作伙伴，扩大我的‘朋友圈’。”",
        "type": "social"
      },
      {
        "label": "“如果是我来做，我会在哪个环节加入我的独特创意，让它变得更与众不同，展现我的‘奇思妙想’？”",
        "type": "creative"
      },
      {
        "label": "“这个故事太励志了，我得把它记录下来，分析一下成功经验，然后分享给我的读者/观众，让更多人受到‘启发’。”",
        "type": "contentCreator"
      }
    ]
  },
  {
    "id": "Q10",
    "title": "翻看手机相册，你发现里面“出镜率”最高的是？",
    "options": [
      {
        "label": "各种商业模式图、市场分析报告截图、或者你灵光一现的创业点子草图，它们是我的“财富密码”。",
        "type": "entrepreneurial"
      },
      {
        "label": "某个技术难题的解决方案、复杂的代码截图、或者你为了学习新技能拍下的教程步骤，它们是我的“学习笔记”。",
        "type": "technical"
      },
      {
        "label": "和姐妹们的各种搞怪合照、温馨聚会瞬间、或者和朋友聊天的截图，它们是我的“快乐瞬间”。",
        "type": "social"
      },
      {
        "label": "随手拍下的天空、街角、艺术品，或者任何能激发你灵感的美好瞬间，它们是我的“灵感宝库”。",
        "type": "creative"
      },
      {
        "label": "准备发朋友圈的九宫格素材、你写下的金句、或者为了内容创作而收集的各种图片视频，它们是我的“创作素材”。",
        "type": "contentCreator"
      }
    ]
  },
  {
    "id": "Q11",
    "title": "在团队合作中，哪个瞬间会让你觉得“我太有价值了，简直是团队的灵魂！”？",
    "options": [
      {
        "label": "我带领团队克服重重困难，最终拿下了那个看似不可能完成的项目，实现了商业目标，感觉自己是“掌舵人”。",
        "type": "entrepreneurial"
      },
      {
        "label": "我用我的专业技能，解决了团队里最棘手的技术难题，让大家对我刮目相看，觉得我是技术担当，感觉自己是“定海神针”。",
        "type": "technical"
      },
      {
        "label": "我成功化解了团队内部的误会和矛盾，让大家重新团结起来，气氛变得超好，像一个温暖的大家庭，感觉自己是“粘合剂”。",
        "type": "social"
      },
      {
        "label": "我提出了一个绝妙的创意，让整个项目焕然一新，大家都觉得太有才了，充满了惊喜，感觉自己是“灵感缪斯”。",
        "type": "creative"
      },
      {
        "label": "我把团队的成功经验和心得整理成了一篇干货，发到网上后，很多人点赞转发，觉得很有启发，感觉自己是“知识分享者”。",
        "type": "contentCreator"
      }
    ]
  },
  {
    "id": "Q12",
    "title": "看到身边有姐妹在工作中情绪低落，看起来有点无精打采，你会？",
    "options": [
      {
        "label": "评估一下她的状态是否会影响团队效率，然后主动提出分担她的部分工作，或者帮她找资源解决问题，确保团队目标不受影响。",
        "type": "entrepreneurial"
      },
      {
        "label": "尊重她的个人空间，但会默默关注，如果她需要技术或专业上的帮助，我会随时准备好提供，因为专业问题需要专业解决。",
        "type": "technical"
      },
      {
        "label": "主动走过去，轻轻拍拍她，问一句“怎么啦？要不要一起去茶水间喝杯咖啡，或者下班后一起吃个饭聊聊？”，用温暖和陪伴支持她。",
        "type": "social"
      },
      {
        "label": "脑子里立刻冒出几个小点子，比如送她一个手绘的可爱小卡片，或者给她推荐一部治愈系的电影，让她开心起来，用创意点亮她的心情。",
        "type": "creative"
      },
      {
        "label": "觉得这是个很好的观察和思考机会，我会把这种职场女性的情绪困境记录下来，写一篇关于“如何互相支持”的文章，分享给更多姐妹。",
        "type": "contentCreator"
      }
    ]
  },
  {
    "id": "Q13",
    "title": "参加一个大型行业交流会，你最享受和人打交道的方式是？",
    "options": [
      {
        "label": "带着明确的商业目标，主动出击，寻找潜在的合作伙伴或投资人，拓展我的商业版图，让我的事业更上一层楼。",
        "type": "entrepreneurial"
      },
      {
        "label": "专注于那些有深度、有技术含量的讲座和演示，如果遇到专业问题，会抓住机会和专家深入探讨，享受知识的碰撞。",
        "type": "technical"
      },
      {
        "label": "穿梭于人群中，和不同背景、不同领域的人轻松聊天，享受建立新连接、扩大社交圈的过程，感受人际的魅力。",
        "type": "social"
      },
      {
        "label": "观察现场的每一个细节，从人们的穿着、交流方式到展台设计，寻找灵感，或者用我独特的方式吸引别人的注意，展现我的与众不同。",
        "type": "creative"
      },
      {
        "label": "记录下那些有趣的观点、精彩的对话和有故事的人物，回去写一篇活动总结或人物专访，分享给我的读者，让更多人受益。",
        "type": "contentCreator"
      }
    ]
  },
  {
    "id": "Q14",
    "title": "团队里有姐妹之间闹了点小别扭，气氛有点尴尬，你会？",
    "options": [
      {
        "label": "觉得这是个展现我领导力的机会，如果能巧妙化解，能提升我在团队中的威信，让大家看到我的解决能力。",
        "type": "entrepreneurial"
      },
      {
        "label": "默默分析矛盾的来龙去脉，思考是不是团队协作流程或沟通机制出了问题，然后提出优化建议，从根本上解决问题。",
        "type": "technical"
      },
      {
        "label": "主动找双方分别聊聊，当个“知心姐姐”，希望能帮她们把心结打开，重归于好，让团队重新充满爱。",
        "type": "social"
      },
      {
        "label": "觉得这种僵局太影响心情了，脑子里开始构思一些轻松有趣的活动，比如组织个下午茶或团建，来打破僵局，用创意化解尴尬。",
        "type": "creative"
      },
      {
        "label": "觉得这是个很好的职场案例，我会把这次经历记录下来，写一篇关于“女性职场情商与沟通”的文章，分享我的心得，给更多姐妹启发。",
        "type": "contentCreator"
      }
    ]
  },
  {
    "id": "Q15",
    "title": "哪种社交活动最能让你感到“能量满格”，又能玩得特别开心？",
    "options": [
      {
        "label": "参加商业论坛或投资沙龙，能结识到很多有资源、有远见的女性企业家，拓展我的商业圈，为我的事业寻找更多可能性。",
        "type": "entrepreneurial"
      },
      {
        "label": "参加某个专业领域的研讨会或技术交流会，能学到很多前沿知识，和同行高手过招，享受专业能力提升的乐趣。",
        "type": "technical"
      },
      {
        "label": "和闺蜜们一起去探店、看电影，或者组织一场温馨的姐妹聚会，享受轻松愉快的时光，感受被爱和连接的幸福。",
        "type": "social"
      },
      {
        "label": "逛艺术展、创意市集，或者参加一个手作坊，沉浸在艺术的氛围中，激发我的灵感，让我的生活充满美。",
        "type": "creative"
      },
      {
        "label": "在线上开直播或组织分享会，和我的粉丝们真诚互动，分享我的生活和经验，感受到被连接的快乐，用我的声音影响更多人。",
        "type": "contentCreator"
      }
    ]
  },
  {
    "id": "Q16",
    "title": "面对一个看起来平平无奇、没什么亮点的任务，你心里会怎么想？",
    "options": [
      {
        "label": "“这不就是个挑战吗？只要能找到新的商业模式或增长点，平淡也能变精彩！”我总能从“无聊”中发现“商机”。",
        "type": "entrepreneurial"
      },
      {
        "label": "“平平无奇的任务背后，往往隐藏着优化流程、提升效率的机会，我得去挖掘一下技术细节。”我喜欢把“复杂”变“简单”。",
        "type": "technical"
      },
      {
        "label": "“如果能和团队姐妹们一起头脑风暴，说不定能碰撞出火花，让任务变得有趣起来。”我享受和大家一起“玩”出新花样。",
        "type": "social"
      },
      {
        "label": "“平平无奇？那正好是我发挥创意的时候！我能把它变成一个充满惊喜和美感的作品。”我总能把“普通”变“艺术”。",
        "type": "creative"
      },
      {
        "label": "“这任务虽然普通，但如果能用独特的视角和文字去解读它，说不定能写出让人眼前一亮的内容。”我擅长把“故事”讲得“动听”。",
        "type": "contentCreator"
      }
    ]
  },
  {
    "id": "Q17",
    "title": "哪个瞬间会让你觉得“我的脑洞简直是无底洞，太有才了！”？",
    "options": [
      {
        "label": "我提出的商业方案，不仅解决了问题，还开辟了一个全新的市场，让公司赚得盆满钵满，感觉自己是“商业奇才”。",
        "type": "entrepreneurial"
      },
      {
        "label": "我独立开发了一个小工具，完美解决了团队的痛点，大家都说我是“效率小能手”，感觉自己是“技术魔法师”。",
        "type": "technical"
      },
      {
        "label": "我组织了一场别开生面的团建活动，大家都玩嗨了，还增进了彼此的感情，被夸是“团建女王”，感觉自己是“气氛制造者”。",
        "type": "social"
      },
      {
        "label": "我随手画的一幅画，或者设计的一个小物件，被朋友们争相求购，觉得太有品味了，感觉自己是“艺术大师”。",
        "type": "creative"
      },
      {
        "label": "我写的一篇小红书笔记，或者拍的一个短视频，突然火了，被无数人模仿和转发，感觉自己引领了潮流，感觉自己是“内容风向标”。",
        "type": "contentCreator"
      }
    ]
  },
  {
    "id": "Q18",
    "title": "看到一个很酷的艺术展或设计作品，你最想做的是？",
    "options": [
      {
        "label": "思考这个作品背后的商业价值和市场潜力，有没有可能从中找到新的创业灵感？我总能从“美”中发现“钱景”。",
        "type": "entrepreneurial"
      },
      {
        "label": "分析它的构成元素、技术实现方式，或者背后的设计原理，学习它的精髓。我喜欢探究“美”的“逻辑”。",
        "type": "technical"
      },
      {
        "label": "赶紧分享给我的朋友们，或者约上姐妹一起去打卡，感受艺术的魅力，顺便拍美美的照片。我享受和大家一起“分享美”。",
        "type": "social"
      },
      {
        "label": "脑子里立刻涌现出无数个新的创意，恨不得马上拿起画笔或打开设计软件，把我的想法实现出来。我渴望把“灵感”变“现实”。",
        "type": "creative"
      },
      {
        "label": "记录下我的观展感受和思考，写一篇深度的艺术评论，或者制作一个 Vlog，分享给我的粉丝。我喜欢用“文字”或“影像”去“解读美”。",
        "type": "contentCreator"
      }
    ]
  },
  {
    "id": "Q19",
    "title": "哪个词最能形容你对“美”的追求？",
    "options": [
      {
        "label": "实用美学：美是为了更好地服务功能，带来价值，它是我的“商业触觉”。",
        "type": "entrepreneurial"
      },
      {
        "label": "精准美学：美在于细节的完美和逻辑的严谨，它是我的“技术信仰”。",
        "type": "technical"
      },
      {
        "label": "共享美学：美是用来分享和连接的，能让大家一起感受快乐，它是我的“社交密码”。",
        "type": "social"
      },
      {
        "label": "独特美学：美是打破常规，创造与众不同，引领潮流，它是我的“创意灵魂”。",
        "type": "creative"
      },
      {
        "label": "表达美学：美是用来传递情感和思想，引发共鸣，它是我的“内容语言”。",
        "type": "contentCreator"
      }
    ]
  },
  {
    "id": "Q20",
    "title": "如果让你设计一个全新的产品，你最看重它的哪个方面？",
    "options": [
      {
        "label": "市场潜力：它能解决多少人的痛点，带来多大的商业价值？我希望它能“改变世界”。",
        "type": "entrepreneurial"
      },
      {
        "label": "技术实现：它的功能是否稳定可靠，技术架构是否先进？我希望它能“完美运行”。",
        "type": "technical"
      },
      {
        "label": "用户体验：它是否能让用户感到愉悦，方便分享和互动？我希望它能“连接人心”。",
        "type": "social"
      },
      {
        "label": "创新性：它是否足够独特，能颠覆传统，引领潮流？我希望它能“独一无二”。",
        "type": "creative"
      },
      {
        "label": "故事性：它是否有打动人心的故事，能引发用户的情感共鸣？我希望它能“触动灵魂”。",
        "type": "contentCreator"
      }
    ]
  },
  {
    "id": "Q21",
    "title": "刷到或听到一个热门话题，你心里最先冒出来的是？",
    "options": [
      {
        "label": "“这背后有没有什么商业机会？我能怎么利用这个热点，让我的项目火起来？”我总能从“热点”中发现“商机”。",
        "type": "entrepreneurial"
      },
      {
        "label": "“这个话题的来龙去脉是什么？有没有什么数据或理论能支撑我的观点？”我喜欢探究“热点”的“真相”。",
        "type": "technical"
      },
      {
        "label": "“我得赶紧和姐妹们讨论一下，听听大家的看法，看看有没有什么新的角度。”我享受和大家一起“八卦”出“新知”。",
        "type": "social"
      },
      {
        "label": "“怎么用一个特别的、有创意的方式来表达我对这个话题的看法，让大家眼前一亮？”我总能把“热点”变“艺术”。",
        "type": "creative"
      },
      {
        "label": "“这个话题太有意思了！我得赶紧打开电脑，把我的想法写下来，或者拍个视频分享出去，让更多人看到。”我擅长把“热点”讲得“动听”。",
        "type": "contentCreator"
      }
    ]
  },
  {
    "id": "Q22",
    "title": "做内容创作时，哪个瞬间最让你觉得“太有成就感了，这就是我想要的！”？",
    "options": [
      {
        "label": "我的内容不仅火了，还带来了实实在在的订单或合作，证明了它的商业价值和我的影响力，感觉自己是“商业内容女王”。",
        "type": "entrepreneurial"
      },
      {
        "label": "我的内容被行业内的专业人士点赞，说我把一个复杂的问题讲得特别透彻，逻辑清晰，感觉自己是“知识输出者”。",
        "type": "technical"
      },
      {
        "label": "我的内容引发了大家的广泛共鸣，评论区里都是“谢谢你，你写出了我的心声”这样的留言，感觉自己是“情感连接者”。",
        "type": "social"
      },
      {
        "label": "我的内容被夸“太有创意了，简直是艺术品！”，让我觉得自己的审美和独特视角被认可，感觉自己是“创意艺术家”。",
        "type": "creative"
      },
      {
        "label": "我的内容帮助了很多人，收到了很多私信说“谢谢你，你的内容改变了我”，让我觉得自己的表达很有价值，感觉自己是“影响力创造者”。",
        "type": "contentCreator"
      }
    ]
  },
  {
    "id": "Q23",
    "title": "沉浸在内容创作的世界里，你最享受的是那种“心流”体验？",
    "options": [
      {
        "label": "思考如何将内容打造成一个可持续的商业模式，让我的创意不仅有价值，还能带来丰厚的回报，感觉自己在“创造财富”。",
        "type": "entrepreneurial"
      },
      {
        "label": "深入研究某个主题，将复杂的信息抽丝剥茧，用最清晰、最严谨的逻辑呈现给读者，让他们一看就懂，感觉自己在“解构世界”。",
        "type": "technical"
      },
      {
        "label": "通过内容与读者建立深层连接，感受彼此的共鸣与情感流动，看着我的社群越来越有爱、越来越有活力，感觉自己在“连接人心”。",
        "type": "social"
      },
      {
        "label": "将脑海中那些天马行空的创意，通过文字、图片、视频等形式，变成独一无二、让人惊艳的作品，感觉自己在“创造美”。",
        "type": "creative"
      },
      {
        "label": "看到自己的内容被广泛传播，影响和启发了更多人，感受到自己被需要，我的声音被听见，感觉自己在“传递力量”。",
        "type": "contentCreator"
      }
    ]
  },
  {
    "id": "Q24",
    "title": "你的内容获得了超多关注和好评，你心里最先冒出来的是？",
    "options": [
      {
        "label": "“太棒了！我得趁热打铁，思考怎么把这些流量变成实实在在的商业价值，或者寻求更多合作机会。”",
        "type": "entrepreneurial"
      },
      {
        "label": "“我得赶紧分析一下数据，看看哪些内容形式或主题最受欢迎，这样下次创作就能更精准了。”",
        "type": "technical"
      },
      {
        "label": "“好开心！我得积极回应评论，和粉丝们好好互动，把他们变成我的‘铁杆姐妹’。”",
        "type": "social"
      },
      {
        "label": "“受到鼓舞了！我得尝试更多新颖的创作方式，挑战一下自己，让我的内容更具艺术性和独特性。”",
        "type": "creative"
      },
      {
        "label": "“我的努力被看到了！我更想持续输出有价值、有温度的内容，保持我的影响力，赋能更多女性。”",
        "type": "contentCreator"
      }
    ]
  },
  {
    "id": "Q25",
    "title": "你觉得女性在内容创作时，最能发挥自己哪些“独门秘籍”？",
    "options": [
      {
        "label": "敏锐的商业嗅觉，能把内容做得既有深度又有市场，实现商业与情怀的双赢，它是我的“商业直觉”。",
        "type": "entrepreneurial"
      },
      {
        "label": "严谨的逻辑和深度思考，能把复杂问题讲得清晰透彻，让人信服，成为知识的传播者，它是我的“理性之光”。",
        "type": "technical"
      },
      {
        "label": "细腻的情感和超强的共情力，能写出或拍出直抵人心的故事，引发广泛共鸣，成为情感的连接者，它是我的“共情力”。",
        "type": "social"
      },
      {
        "label": "独特的审美和源源不断的创意，能让内容充满艺术感和惊喜，成为潮流的引领者，它是我的“审美天赋”。",
        "type": "creative"
      },
      {
        "label": "真诚的分享欲和沟通力，能把知识和经验传播出去，建立有温度的社群，成为社群的构建者，它是我的“连接力”。",
        "type": "contentCreator"
      }
    ]
  },
  {
    "id": "Q26",
    "title": "第一次参加一个全新的姐妹聚会或行业沙龙，你心里最先冒出来的是？",
    "options": [
      {
        "label": "“这是一个拓展人脉、寻找潜在合作的好机会，说不定能遇到我的贵人！”",
        "type": "entrepreneurial"
      },
      {
        "label": "“我会先观察现场，分析活动流程和参与者类型，看看有没有什么值得学习的社交技巧。”",
        "type": "technical"
      },
      {
        "label": "“好期待认识新朋友，和大家轻松愉快地交流，感受不同的能量！”",
        "type": "social"
      },
      {
        "label": "“我得思考怎么用我的独特魅力，成为全场最亮眼的那颗星，让大家记住我！”",
        "type": "creative"
      },
      {
        "label": "“这是一个很好的素材，我可以记录下这次活动的亮点和我的社交心得，分享给我的粉丝。”",
        "type": "contentCreator"
      }
    ]
  },
  {
    "id": "Q27",
    "title": "团队里有姐妹之间意见不合，气氛有点僵时，你会？",
    "options": [
      {
        "label": "觉得这是个挑战，我会提出一个能让大家信服的方案，并推动它落地，确保项目不受影响。我总能把“危机”变“转机”。",
        "type": "entrepreneurial"
      },
      {
        "label": "深入分析分歧的根本原因，然后用数据和逻辑来解决问题，寻求一个最公正、最有效的解决方案。我喜欢用“理性”解决“冲突”。",
        "type": "technical"
      },
      {
        "label": "主动组织大家坐下来好好聊聊，当个“粘合剂”，让大家都能舒服地表达，找到共同点。我享受和大家一起“化解矛盾”。",
        "type": "social"
      },
      {
        "label": "觉得这种僵局太影响心情了，想出一些有趣的方式来打破僵局，比如组织个轻松的下午茶，让大家放松下来。我总能把“尴尬”变“有趣”。",
        "type": "creative"
      },
      {
        "label": "觉得这是个很好的案例，可以写一篇关于“女性团队沟通与冲突解决”的文章，分享我的经验。我擅长把“故事”讲得“有启发”。",
        "type": "contentCreator"
      }
    ]
  },
  {
    "id": "Q28",
    "title": "遇到搞不定的事，需要别人帮忙时，你会怎么开口？",
    "options": [
      {
        "label": "直接找最能帮我的人，开门见山地说清楚我的需求和能给的回报，确保对方觉得这是一笔“划算”的交易。",
        "type": "entrepreneurial"
      },
      {
        "label": "先把问题研究透彻，准备好详细的资料，让对方觉得帮我是在解决一个有价值、有挑战性的问题。",
        "type": "technical"
      },
      {
        "label": "找平时关系好的姐妹或同事，先聊聊近况，再顺势提出我的困境，寻求她们的帮助和支持。",
        "type": "social"
      },
      {
        "label": "思考怎么把我的困境包装得有趣一点，或者用一个特别的方式来求助，引起对方的兴趣，让帮忙变成一件有意思的事。",
        "type": "creative"
      },
      {
        "label": "写一篇“求助信”，把我的心路历程和遇到的困难都写进去，希望能打动对方，引发共鸣。",
        "type": "contentCreator"
      }
    ]
  },
  {
    "id": "Q29",
    "title": "提到“风险”这两个字，你心里最真实的感受是？",
    "options": [
      {
        "label": "“富贵险中求！”风险越大，说明机会越大，我喜欢那种挑战未知、拿下大单的刺激感。",
        "type": "entrepreneurial"
      },
      {
        "label": "“风险就是用来规避的。”我会立刻开始算概率、做预案，只要逻辑严密、技术过硬，风险就能降到最低。",
        "type": "technical"
      },
      {
        "label": "“一个人扛风险太可怕了。”我得赶紧找团队或者姐妹们商量，大家一起分担，心里才踏实。",
        "type": "social"
      },
      {
        "label": "“风险？那不就是打破常规的最好借口吗！”越是危险的地方，越容易诞生绝妙的创意。",
        "type": "creative"
      },
      {
        "label": "“这可是绝佳的素材啊！”经历过风险，我才有故事可讲，才能写出真正打动人心的内容。",
        "type": "contentCreator"
      }
    ]
  },
  {
    "id": "Q30",
    "title": "老板突然丢给你一个全新的项目，啥也没交代就让你负责，你第一反应是？",
    "options": [
      {
        "label": "“太好了，终于轮到我大显身手了！”我要把它做成我的代表作，顺便看看能不能给公司（或自己）多赚点钱。",
        "type": "entrepreneurial"
      },
      {
        "label": "“先别慌，让我查查资料。”我会立刻开始梳理流程、研究技术细节，必须把每一步都弄得清清楚楚才敢动手。",
        "type": "technical"
      },
      {
        "label": "“我一个人可搞不定！”赶紧拉个群，把相关的同事都叫上，大家一起头脑风暴，分工合作。",
        "type": "social"
      },
      {
        "label": "“既然没规矩，那我就随便玩了！”脑子里已经开始冒出各种天马行空的想法，想搞个大新闻。",
        "type": "creative"
      },
      {
        "label": "“这可是个好选题！”我要把从零开始摸索的过程记录下来，做成一期 Vlog 或者写篇文章，肯定很多人爱看。",
        "type": "contentCreator"
      }
    ]
  },
  {
    "id": "Q31",
    "title": "大家都说女性很难平衡工作和生活，你觉得最有效的“破局”方法是？",
    "options": [
      {
        "label": "“别谈什么平衡，只有取舍。”我会像做生意一样算投入产出比，把精力放在最能产生价值的事情上，绝不内耗。",
        "type": "entrepreneurial"
      },
      {
        "label": "“效率才是王道。”我会用各种时间管理工具和高效的工作方法，把任务安排得明明白白，绝不把工作拖到生活里。",
        "type": "technical"
      },
      {
        "label": "“找外援啊！”无论是家人、闺蜜还是靠谱的同事，建立一个强大的支持网络，大家互相帮忙，压力就小多了。",
        "type": "social"
      },
      {
        "label": "“为什么要分开？”我喜欢把生活里的灵感用到工作上，再把工作里的创意带回生活，让两者互相成就。",
        "type": "creative"
      },
      {
        "label": "“接受不完美，然后分享它。”我会把自己的挣扎和经验写下来，在和大家的交流中找到共鸣，这本身就是一种治愈。",
        "type": "contentCreator"
      }
    ]
  },
  {
    "id": "Q32",
    "title": "如果现在必须学一项完全陌生的新技能，你通常会怎么做？",
    "options": [
      {
        "label": "“边干边学！”直接找个小项目练手，遇到问题再解决，最快速度看到效果，时间就是金钱。",
        "type": "entrepreneurial"
      },
      {
        "label": "“先打基础。”我会买最权威的书、报最专业的课，从底层逻辑开始学，必须把原理搞得明明白白。",
        "type": "technical"
      },
      {
        "label": "“找个大佬带我飞。”我会去混相关的圈子，多认识几个懂行的人，遇到不懂的直接请教，少走弯路。",
        "type": "social"
      },
      {
        "label": "“怎么好玩怎么学。”我会尝试把新技能和我本来就会的东西结合起来，搞点有创意的小发明，保持新鲜感。",
        "type": "creative"
      },
      {
        "label": "“边学边输出。”我会开个打卡贴或者写学习笔记，把每天的进度分享出来，靠大家的监督和鼓励坚持下去。",
        "type": "contentCreator"
      }
    ]
  }
];

const personalityQuestions = v4PersonalityItems.map((question, index) => ({
  id: question.id || `P${index + 1}`,
  phase: "personality",
  type: "single",
  title: question.title,
  help: "选择最接近你真实反应的一项。没有标准答案，越真实越有参考价值。",
  options: question.options.map((option) => ({
    label: option.label,
    scores: { [option.type]: 5 },
  })),
}));

const profileQuestions = [
  {
    id: "S1",
    phase: "profile",
    type: "single",
    title: "你现在最接近哪种职业阶段？",
    help: "这会影响推荐更偏求职、转型、副业还是创业验证。",
    field: "stage",
    options: [
      ["学生 / 留学生，正在探索第一份方向", "student"],
      ["在职，但想转到更适合自己的赛道", "employed_switch"],
      ["离职 / Gap 中，想重新规划方向", "gap"],
      ["宝妈 / 照护阶段，希望找到更弹性的路径", "caregiver"],
      ["已有副业或项目，想进一步放大", "side_project"],
    ].map(([label, value]) => ({ label, value })),
  },
  {
    id: "S2",
    phase: "profile",
    type: "single",
    title: "你这次最想获得哪类结果？",
    field: "goal",
    options: [
      ["找到更适合的全职岗位", "job"],
      ["发展一个稳定副业", "side"],
      ["成为自由职业者", "freelance"],
      ["尝试创业 / 小生意", "startup"],
      ["先探索，不急着变现", "explore"],
    ].map(([label, value]) => ({ label, value })),
  },
  {
    id: "S3",
    phase: "profile",
    type: "multi",
    title: "你对哪些行业或职业赛道有兴趣？可多选",
    help: "这里会明显影响最后 3 个推荐赛道。",
    field: "interests",
    options: [
      ["AI / 自动化 / 数字工具", "ai"],
      ["数据分析 / 商业分析", "data"],
      ["金融 / 投资 / 财富管理", "finance"],
      ["建筑 / 空间 / 城市更新", "architecture"],
      ["产品 / 用户体验 / 互联网", "product"],
      ["咨询 / 战略 / 商业研究", "consulting"],
      ["教育 / 培训 / 知识服务", "education"],
      ["内容 / 媒体 / 个人品牌", "content"],
      ["品牌 / 市场 / 公关传播", "marketing"],
      ["设计 / 审美 / 文化创意", "design"],
      ["运营 / 项目管理 / 增长", "operations"],
      ["销售 / BD / 客户成功", "sales"],
      ["心理 / 女性成长 / 社区公益", "wellbeing"],
      ["美业 / 生活方式 / 本地服务", "beauty"],
    ].map(([label, value]) => ({ label, value })),
  },
  {
    id: "S4",
    phase: "profile",
    type: "multi",
    title: "你已经具备哪些技能或资源？可多选",
    field: "skills",
    options: [
      ["写作表达 / 文案", "writing"],
      ["拍摄剪辑 / 直播表达", "video"],
      ["数据分析 / Excel / SQL / Python", "data"],
      ["AI 工具使用 / 自动化搭建", "ai_tools"],
      ["金融财务 / 会计 / 投研基础", "finance"],
      ["建筑设计 / 空间 / 工程背景", "architecture"],
      ["产品思维 / 用户研究", "product"],
      ["项目管理 / 跨部门推进", "pm"],
      ["销售沟通 / 谈判 / 客户维护", "sales"],
      ["社群运营 / 活动策划", "community_ops"],
      ["设计审美 / 视觉表达", "design"],
      ["英语 / 跨文化沟通", "english"],
      ["某个行业的深度经验或证书", "domain"],
    ].map(([label, value]) => ({ label, value })),
  },
  {
    id: "S5",
    phase: "profile",
    type: "multi",
    title: "你偏好的工作方式是什么？可多选",
    field: "workModes",
    options: [
      ["办公室 / 稳定团队协作", "office"],
      ["远程 / 灵活办公", "remote"],
      ["项目制 / 接案制", "project"],
      ["面对客户 / 咨询服务", "client"],
      ["研究分析 / 深度独立工作", "research"],
      ["创作表达 / 作品驱动", "creative_output"],
      ["管理协调 / 带团队推进", "management"],
    ].map(([label, value]) => ({ label, value })),
  },
  {
    id: "S6",
    phase: "profile",
    type: "single",
    title: "你每周可以稳定投入多少时间探索新方向？",
    field: "time",
    options: [
      ["3 小时以内", "low"],
      ["3-6 小时", "medium_low"],
      ["7-12 小时", "medium"],
      ["13-20 小时", "high"],
      ["20 小时以上", "very_high"],
    ].map(([label, value]) => ({ label, value })),
  },
  {
    id: "S7",
    phase: "profile",
    type: "single",
    title: "你愿意投入多长时间学习新技能，换取更长期的职业上升空间？",
    field: "learningDepth",
    options: [
      ["希望 2-4 周内就能开始验证", "quick"],
      ["可以投入 1-3 个月建立基础", "medium"],
      ["愿意投入 3-6 个月系统学习", "deep"],
      ["愿意长期深耕，接受慢热但高天花板", "long"],
    ].map(([label, value]) => ({ label, value })),
  },
  {
    id: "S8",
    phase: "profile",
    type: "single",
    title: "你愿意投入的启动资金大概是？",
    field: "budget",
    options: [
      ["几乎不投入，先免费验证", "none"],
      ["1000 元以内", "small"],
      ["1000-5000 元", "medium"],
      ["5000-2 万元", "large"],
      ["2 万元以上", "very_large"],
    ].map(([label, value]) => ({ label, value })),
  },
  {
    id: "S9",
    phase: "profile",
    type: "single",
    title: "你目前能接受的风险程度是？",
    field: "risk",
    options: [
      ["低风险：不影响主业和现金流", "low"],
      ["中风险：愿意拿一部分时间试错", "medium"],
      ["高风险：愿意快速投入并承担不确定性", "high"],
    ].map(([label, value]) => ({ label, value })),
  },
  {
    id: "S10",
    phase: "profile",
    type: "single",
    title: "你的城市/地域条件更接近哪一种？",
    field: "city",
    options: [
      ["一线城市 / 海外核心城市，机会密度高", "tier1"],
      ["新一线 / 省会城市，有一定行业资源", "tier2"],
      ["二三线城市，希望兼顾稳定和机会", "tier3"],
      ["小城市 / 县城，更看重本地资源与生活节奏", "small"],
      ["远程优先，不想被城市限制", "remote"],
    ].map(([label, value]) => ({ label, value })),
  },
  {
    id: "S11",
    phase: "profile",
    type: "multi",
    title: "你现在最在意哪些现实约束？可多选",
    field: "constraints",
    options: [
      ["需要稳定现金流", "cashflow"],
      ["时间碎片化，需要弹性", "fragmented_time"],
      ["不想频繁应酬或高压销售", "avoid_sales"],
      ["不想长期加班或高强度出差", "avoid_overtime"],
      ["希望能照顾家庭或个人生活", "care_balance"],
      ["希望尽量低成本开始", "low_cost"],
      ["希望未来收入天花板更高", "income_ceiling"],
    ].map(([label, value]) => ({ label, value })),
  },
  {
    id: "S12",
    phase: "profile",
    type: "single",
    title: "你更希望下一步产出什么可见成果？",
    field: "proof",
    options: [
      ["一份更有竞争力的简历 / 作品集", "portfolio"],
      ["一个能验证市场的小服务 / 小产品", "mvp"],
      ["一套专业技能证据，例如证书、案例、报告", "credential"],
      ["一个能持续发声的内容账号 / 个人品牌", "content_asset"],
      ["一批真实用户、客户或合作资源", "network"],
    ].map(([label, value]) => ({ label, value })),
  },
];

const allQuestions = [...personalityQuestions, ...profileQuestions];

const tracks = [
  ["AI 工具顾问 / 自动化服务", { entrepreneurial: 4, technical: 5, social: 3, creative: 2, contentCreator: 3 }, ["ai", "operations", "education"], ["ai_tools", "pm", "writing", "english"], ["freelance", "side", "startup", "job"], ["remote", "project", "client"], "帮助个人或小团队用 AI 工具提升效率，从流程诊断、工具配置、培训交付切入。", ["低成本验证", "B 端服务", "可远程"]],
  ["数据分析师 / 商业分析师", { entrepreneurial: 2, technical: 5, social: 2, creative: 2, contentCreator: 2 }, ["data", "finance", "product"], ["data", "finance", "pm"], ["job", "freelance"], ["office", "research", "remote"], "用数据支持业务判断，适合从 Excel、SQL、可视化报表和业务案例作品集开始。", ["就业友好", "硬技能", "高迁移性"]],
  ["金融分析 / 投研助理", { entrepreneurial: 3, technical: 5, social: 2, creative: 1, contentCreator: 3 }, ["finance", "data", "consulting"], ["finance", "data", "writing", "english"], ["job"], ["research", "office"], "围绕行业、公司和资产做研究判断，适合喜欢深度分析和财经表达的人。", ["金融赛道", "研究导向", "专业门槛"]],
  ["财富管理 / 理财顾问", { entrepreneurial: 4, technical: 3, social: 5, creative: 1, contentCreator: 3 }, ["finance", "sales", "consulting"], ["finance", "sales", "writing"], ["job", "freelance", "side"], ["client", "office"], "帮助客户理解资产配置与长期规划，适合兼具信任建立、表达和金融基础的人。", ["强社交", "金融", "信任驱动"]],
  ["风险控制 / 合规 / 审计", { entrepreneurial: 1, technical: 5, social: 2, creative: 1, contentCreator: 1 }, ["finance", "data", "consulting"], ["finance", "data", "domain"], ["job"], ["office", "research"], "识别风险、检查流程和建立规则，适合重视严谨、稳定和专业可信度的路径。", ["稳定岗位", "细节导向", "专业积累"]],
  ["建筑设计 / 空间设计", { entrepreneurial: 2, technical: 4, social: 2, creative: 5, contentCreator: 2 }, ["architecture", "design"], ["architecture", "design", "pm"], ["job", "freelance"], ["office", "project", "creative_output"], "把空间、功能和审美结合起来，适合有建筑、室内、空间或审美基础的人。", ["作品集导向", "空间审美", "专业门槛"]],
  ["BIM / 建筑数字化", { entrepreneurial: 2, technical: 5, social: 2, creative: 3, contentCreator: 1 }, ["architecture", "data", "ai"], ["architecture", "data", "ai_tools"], ["job", "freelance"], ["office", "project", "research"], "结合建筑经验和数字工具，提高设计、施工、协作效率，是建筑背景转数字化的好入口。", ["硬技能", "建筑科技", "转型友好"]],
  ["城市更新 / 社区空间项目", { entrepreneurial: 3, technical: 3, social: 4, creative: 4, contentCreator: 2 }, ["architecture", "wellbeing", "design"], ["architecture", "pm", "community_ops"], ["job", "startup", "freelance"], ["project", "client", "management"], "连接空间、社区和商业，适合愿意和人、场地、资源打交道的复合型路径。", ["项目制", "社会价值", "跨界"]],
  ["产品经理", { entrepreneurial: 4, technical: 3, social: 4, creative: 3, contentCreator: 2 }, ["product", "data", "ai"], ["product", "pm", "data", "ai_tools"], ["job"], ["office", "management"], "把用户需求、商业目标和技术实现连接起来，适合喜欢推动复杂事情落地的人。", ["就业友好", "综合能力", "案例作品"]],
  ["用户研究 / UX Research", { entrepreneurial: 2, technical: 3, social: 5, creative: 3, contentCreator: 3 }, ["product", "consulting", "wellbeing"], ["product", "writing", "community_ops", "english"], ["job", "freelance"], ["research", "client"], "通过访谈、观察和分析理解真实用户，适合共情力强且能结构化表达的人。", ["人本洞察", "研究能力", "适合转型"]],
  ["UX/UI / 交互设计", { entrepreneurial: 2, technical: 3, social: 3, creative: 5, contentCreator: 2 }, ["product", "design", "ai"], ["design", "product", "ai_tools"], ["job", "freelance"], ["creative_output", "remote", "project"], "用设计解决用户体验问题，适合审美、逻辑和作品集建设并重的人。", ["作品集导向", "可远程", "创意技能"]],
  ["战略咨询 / 商业咨询", { entrepreneurial: 4, technical: 4, social: 4, creative: 2, contentCreator: 2 }, ["consulting", "finance", "data"], ["pm", "data", "writing", "english"], ["job", "freelance"], ["client", "research", "office"], "帮助组织拆解问题和制定方案，适合逻辑强、表达清晰、抗压能力较好的人。", ["高强度", "商业分析", "成长快"]],
  ["行业研究 / 商业研究", { entrepreneurial: 2, technical: 4, social: 2, creative: 2, contentCreator: 4 }, ["consulting", "finance", "data", "content"], ["writing", "data", "domain", "english"], ["job", "freelance"], ["research", "remote"], "沉淀行业洞察，输出报告、观点和判断，适合喜欢深度研究与结构化表达的人。", ["研究导向", "内容资产", "可远程"]],
  ["项目经理 / PMO", { entrepreneurial: 3, technical: 3, social: 4, creative: 1, contentCreator: 2 }, ["operations", "consulting", "product"], ["pm", "sales", "domain"], ["job", "freelance"], ["management", "office", "project"], "负责计划、资源、风险和交付，适合善于协调并能推动事情闭环的人。", ["管理协调", "迁移性强", "稳定"]],
  ["增长运营 / 用户运营", { entrepreneurial: 3, technical: 3, social: 4, creative: 2, contentCreator: 3 }, ["operations", "product", "data", "content"], ["pm", "community_ops", "data", "writing"], ["job", "side"], ["office", "remote"], "用活动、数据和用户洞察提升留存与转化，适合想从运营进入互联网或品牌业务的人。", ["就业友好", "数据+用户", "案例导向"]],
  ["社群运营 / 私域主理人", { entrepreneurial: 3, technical: 1, social: 5, creative: 3, contentCreator: 4 }, ["wellbeing", "education", "content", "sales"], ["community_ops", "writing", "sales"], ["side", "freelance", "startup"], ["remote", "client", "project"], "通过内容、活动和陪伴建立信任，适合愿意长期经营关系和用户价值的人。", ["信任驱动", "低成本验证", "适合副业"]],
  ["客户成功 / 解决方案顾问", { entrepreneurial: 3, technical: 4, social: 5, creative: 1, contentCreator: 2 }, ["sales", "product", "ai", "consulting"], ["sales", "product", "ai_tools", "english"], ["job"], ["client", "office"], "理解客户问题并推动方案落地，适合既能沟通又愿意理解产品和技术的人。", ["B 端岗位", "沟通+专业", "就业友好"]],
  ["BD / 商务拓展", { entrepreneurial: 5, technical: 1, social: 5, creative: 2, contentCreator: 2 }, ["sales", "consulting", "finance"], ["sales", "pm", "english"], ["job", "startup"], ["client", "management"], "寻找合作机会、谈判资源和推动增长，适合目标感强、外向行动力高的人。", ["高弹性", "强社交", "商业机会"]],
  ["HRBP / 招聘 / 人才发展", { entrepreneurial: 2, technical: 2, social: 5, creative: 2, contentCreator: 2 }, ["consulting", "wellbeing", "education"], ["sales", "writing", "community_ops"], ["job"], ["office", "client"], "连接业务和人，适合共情力强、善于沟通并希望帮助她人成长的人。", ["人际洞察", "组织发展", "稳定岗位"]],
  ["职业咨询 / 生涯教练", { entrepreneurial: 3, technical: 3, social: 5, creative: 2, contentCreator: 4 }, ["education", "wellbeing", "consulting"], ["writing", "sales", "domain"], ["freelance", "side", "startup"], ["client", "remote"], "帮助她人梳理方向和行动计划，适合有经验沉淀、倾听能力和结构化表达的人。", ["咨询服务", "长期信任", "可副业"]],
  ["教育培训 / 课程开发", { entrepreneurial: 3, technical: 4, social: 4, creative: 2, contentCreator: 4 }, ["education", "content", "ai"], ["domain", "writing", "video", "english"], ["freelance", "side", "job"], ["remote", "creative_output"], "把专业知识包装成课程、训练营或学习产品，适合愿意分享并持续迭代的人。", ["知识服务", "可小规模试课", "内容资产"]],
  ["知识博主 / 个人品牌", { entrepreneurial: 3, technical: 2, social: 3, creative: 4, contentCreator: 5 }, ["content", "education", "finance", "ai"], ["writing", "video", "domain"], ["side", "freelance", "explore"], ["remote", "creative_output"], "把经历、观点和专业转化为持续内容资产，后续连接咨询、课程或合作。", ["长期复利", "低成本", "稳定输出"]],
  ["财经内容创作者", { entrepreneurial: 3, technical: 4, social: 2, creative: 3, contentCreator: 5 }, ["finance", "content", "data"], ["finance", "writing", "data", "video"], ["side", "freelance", "job"], ["research", "creative_output"], "用通俗内容解释财经、投资与商业现象，适合兼具研究和表达的人。", ["金融+内容", "个人品牌", "合规意识"]],
  ["数据新闻 / 可视化叙事", { entrepreneurial: 2, technical: 5, social: 2, creative: 4, contentCreator: 5 }, ["data", "content", "design"], ["data", "writing", "design"], ["job", "freelance"], ["research", "creative_output", "remote"], "把数据洞察转成图表、故事和公共议题表达，适合技术与内容结合型人格。", ["数据表达", "作品集", "可远程"]],
  ["品牌策划 / 品牌策略", { entrepreneurial: 4, technical: 2, social: 3, creative: 5, contentCreator: 4 }, ["marketing", "design", "content"], ["writing", "design", "pm"], ["job", "freelance"], ["creative_output", "client"], "帮助品牌找到定位、故事和表达方式，适合审美、商业和内容能力结合的人。", ["创意商业", "项目制", "作品集"]],
  ["市场营销 / 公关传播", { entrepreneurial: 4, technical: 2, social: 4, creative: 4, contentCreator: 4 }, ["marketing", "content", "sales"], ["writing", "sales", "video", "english"], ["job", "freelance"], ["client", "creative_output"], "围绕品牌声量、活动传播和公众沟通创造影响力，适合表达与协调能力强的人。", ["传播影响", "节奏快", "强表达"]],
  ["短视频编导 / 内容策划", { entrepreneurial: 3, technical: 2, social: 3, creative: 5, contentCreator: 5 }, ["content", "marketing", "design"], ["video", "writing", "design"], ["job", "side", "freelance"], ["creative_output", "remote"], "将选题、脚本、拍摄和传播串起来，适合创意表达强且愿意持续产出的人。", ["内容生产", "作品导向", "增长快"]],
  ["播客 / 访谈节目主理人", { entrepreneurial: 3, technical: 1, social: 5, creative: 3, contentCreator: 5 }, ["content", "wellbeing", "consulting"], ["writing", "community_ops", "english"], ["side", "freelance", "explore"], ["remote", "client"], "通过对话建立深度连接和观点影响，适合擅长倾听、提问和长期经营主题的人。", ["慢热复利", "低成本", "社群连接"]],
  ["视觉设计 / 平面设计", { entrepreneurial: 2, technical: 3, social: 2, creative: 5, contentCreator: 3 }, ["design", "marketing", "content"], ["design", "writing"], ["job", "freelance", "side"], ["creative_output", "remote"], "通过视觉表达解决品牌、活动、内容包装问题，适合审美强并愿意做作品集的人。", ["作品集", "可接案", "审美优势"]],
  ["文化创意 / 策展执行", { entrepreneurial: 3, technical: 2, social: 4, creative: 5, contentCreator: 4 }, ["design", "architecture", "content", "wellbeing"], ["pm", "writing", "design", "community_ops"], ["job", "freelance"], ["project", "client", "creative_output"], "组织展览、活动或文化项目，让创意、空间和人群发生连接。", ["项目制", "文化表达", "资源整合"]],
  ["美业 / 生活方式小生意", { entrepreneurial: 5, technical: 2, social: 4, creative: 4, contentCreator: 3 }, ["beauty", "design", "content"], ["sales", "video", "design", "community_ops"], ["startup", "side", "freelance"], ["client", "project"], "从小单品、本地服务或体验项目开始，用社媒和私域测试复购。", ["本地化", "重体验", "可小规模验证"]],
  ["本地服务创业 / 小店主理", { entrepreneurial: 5, technical: 2, social: 4, creative: 3, contentCreator: 2 }, ["beauty", "wellbeing", "sales"], ["sales", "pm", "community_ops"], ["startup", "side"], ["client", "management"], "围绕本地需求设计服务或小店模型，适合愿意亲自服务用户和管理运营的人。", ["创业验证", "现金流", "本地资源"]],
  ["心理健康 / 女性成长项目", { entrepreneurial: 3, technical: 2, social: 5, creative: 3, contentCreator: 4 }, ["wellbeing", "education", "content"], ["writing", "community_ops", "domain"], ["side", "freelance", "startup"], ["client", "remote"], "围绕情绪支持、女性成长和陪伴型服务设计产品，适合共情和内容能力强的人。", ["女性议题", "长期信任", "注意专业边界"]],
  ["公益项目 / 社区发展", { entrepreneurial: 3, technical: 2, social: 5, creative: 3, contentCreator: 3 }, ["wellbeing", "architecture", "consulting"], ["pm", "community_ops", "writing"], ["job", "freelance", "explore"], ["project", "management"], "连接资源、社区和公共议题，适合追求社会价值并善于组织协作的人。", ["社会价值", "资源整合", "项目制"]],
  ["ESG / 可持续发展", { entrepreneurial: 3, technical: 4, social: 3, creative: 2, contentCreator: 3 }, ["consulting", "finance", "wellbeing", "data"], ["data", "writing", "domain", "english"], ["job", "freelance"], ["research", "office"], "围绕企业社会责任、环境与治理做研究、报告和项目推动，是专业与价值观结合的方向。", ["新兴赛道", "研究报告", "企业需求"]],
  ["供应链 / 运营管理", { entrepreneurial: 3, technical: 4, social: 3, creative: 1, contentCreator: 1 }, ["operations", "data", "consulting"], ["data", "pm", "domain"], ["job"], ["office", "management"], "优化流程、成本和交付效率，适合喜欢系统、结构和稳定增长的人。", ["稳定岗位", "流程优化", "硬核业务"]],
  ["电商运营 / 店铺增长", { entrepreneurial: 4, technical: 3, social: 3, creative: 3, contentCreator: 3 }, ["operations", "marketing", "beauty", "data"], ["data", "sales", "writing", "video"], ["job", "side", "startup"], ["remote", "project"], "围绕选品、流量、转化和复购建立生意闭环，适合想兼顾运营和商业的人。", ["可副业", "数据+内容", "现金流"]],
  ["独立顾问 / 专业服务", { entrepreneurial: 4, technical: 4, social: 4, creative: 2, contentCreator: 3 }, ["consulting", "finance", "data", "education"], ["domain", "writing", "sales", "english"], ["freelance", "side", "startup"], ["client", "remote"], "把过往行业经验包装成咨询、诊断或陪跑服务，适合有专业沉淀和表达能力的人。", ["高客单", "信任驱动", "需要案例"]],
  ["自由职业写作 / 文案顾问", { entrepreneurial: 3, technical: 2, social: 3, creative: 4, contentCreator: 5 }, ["content", "marketing", "education"], ["writing", "domain", "english"], ["freelance", "side"], ["remote", "creative_output"], "为品牌、个人或机构提供文案、文章、脚本和内容策略服务。", ["可远程", "低成本", "作品集"]],
  ["AI 产品运营 / AI 应用设计", { entrepreneurial: 4, technical: 4, social: 3, creative: 4, contentCreator: 3 }, ["ai", "product", "operations", "design"], ["ai_tools", "product", "pm", "writing"], ["job", "startup", "freelance"], ["office", "project", "creative_output"], "把 AI 能力转化为用户能理解和使用的产品体验，适合懂工具、懂用户又能推动落地的人。", ["AI 赛道", "产品思维", "新机会"]],
].map(([name, base, interests, skills, goals, workModes, description, tags]) => ({
  name,
  base,
  interests,
  skills,
  goals,
  workModes,
  description,
  tags,
}));

const answers = {};
const scores = Object.fromEntries(TYPE_KEYS.map(key => [key, 0]));
const profile = {};
let currentIndex = 0;

const $ = (selector) => document.querySelector(selector);

const screens = {
  welcome: $("#welcomeScreen"),
  quiz: $("#quizScreen"),
  result: $("#resultScreen"),
};

$("#startBtn").addEventListener("click", () => showQuiz(0));
$("#backBtn").addEventListener("click", handleBack);
$("#restartBtn").addEventListener("click", restart);
$("#copyPromptBtn").addEventListener("click", copyPrompt);

function showScreen(name) {
  Object.values(screens).forEach(screen => screen.classList.remove("active"));
  screens[name].classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function showQuiz(index) {
  currentIndex = index;
  showScreen("quiz");
  renderQuestion();
}

function renderQuestion() {
  const question = allQuestions[currentIndex];
  const total = allQuestions.length;
  const phaseStart = question.phase === "personality" ? 0 : personalityQuestions.length;
  const phaseTotal = question.phase === "personality" ? personalityQuestions.length : profileQuestions.length;
  const phaseIndex = currentIndex - phaseStart + 1;

  $("#phaseLabel").textContent = question.phase === "personality" ? "第一套｜职业人格测评" : "第二套｜现实条件采集";
  $("#progressText").textContent = `${phaseIndex} / ${phaseTotal}`;
  $("#progressFill").style.width = `${((currentIndex + 1) / total) * 100}%`;
  $("#questionKicker").textContent = question.phase === "personality" ? "第一套选择题" : "第二套选择题";
  $("#questionTitle").textContent = question.title;
  $("#questionHelp").textContent = question.help || "请根据你的真实情况选择。";

  const wrap = $("#optionsWrap");
  wrap.innerHTML = "";

  const saved = answers[question.id];
  question.options.forEach((option, optionIndex) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "option-btn";
    const isSelected = question.type === "multi"
      ? Array.isArray(saved) && saved.includes(option.value)
      : saved === optionIndex;
    if (isSelected) button.classList.add("selected");
    button.innerHTML = `<strong>${option.label}</strong>${option.note ? `<small>${option.note}</small>` : ""}`;
    button.addEventListener("click", () => handleAnswer(question, option, optionIndex));
    wrap.appendChild(button);
  });

  if (question.type === "multi") {
    const actions = document.createElement("div");
    actions.className = "multi-actions";
    const next = document.createElement("button");
    next.type = "button";
    next.className = "primary-btn compact";
    next.textContent = "选好了，继续";
    next.addEventListener("click", () => {
      if (!answers[question.id]?.length) {
        showToast("这一题至少选一个，会让推荐更准确。");
        return;
      }
      nextQuestion();
    });
    actions.appendChild(next);
    wrap.appendChild(actions);
  }
}

function handleAnswer(question, option, optionIndex) {
  if (question.type === "multi") {
    const current = new Set(answers[question.id] || []);
    if (current.has(option.value)) current.delete(option.value);
    else current.add(option.value);
    answers[question.id] = [...current];
    profile[question.field] = answers[question.id];
    renderQuestion();
    return;
  }

  answers[question.id] = optionIndex;
  if (question.phase === "personality") {
    applyScores(question.id, option.scores);
  } else {
    profile[question.field] = option.value;
  }
  setTimeout(nextQuestion, 160);
}

function applyScores(questionId, newScores) {
  const previous = answers[`${questionId}_scores`];
  if (previous) {
    Object.entries(previous).forEach(([key, value]) => {
      scores[key] -= value;
    });
  }
  answers[`${questionId}_scores`] = newScores;
  Object.entries(newScores).forEach(([key, value]) => {
    scores[key] += value;
  });
}

function nextQuestion() {
  if (currentIndex < allQuestions.length - 1) {
    currentIndex += 1;
    renderQuestion();
    return;
  }
  showResults();
}

function handleBack() {
  if (currentIndex === 0) {
    showScreen("welcome");
    return;
  }
  currentIndex -= 1;
  renderQuestion();
}

function getRankedTypes() {
  const normalized = normalizeScores();
  return TYPE_KEYS
    .map(key => ({ key, score: scores[key], normalizedScore: normalized[key], ...TYPE_META[key] }))
    .sort((a, b) => b.normalizedScore - a.normalizedScore);
}

function normalizeScores() {
  const maxScores = getMaxScoresByType();
  return Object.fromEntries(TYPE_KEYS.map(key => {
    const maxScore = maxScores[key] || 1;
    return [key, Math.round((scores[key] / maxScore) * 100)];
  }));
}

function getMaxScoresByType() {
  const maxScores = Object.fromEntries(TYPE_KEYS.map(key => [key, 0]));
  personalityQuestions.forEach(question => {
    TYPE_KEYS.forEach(key => {
      const maxContribution = Math.max(...question.options.map(option => option.scores?.[key] || 0));
      maxScores[key] += maxContribution;
    });
  });
  return maxScores;
}

function recommendTracks() {
  const normalized = normalizeScores();
  const interests = new Set(profile.interests || []);
  const skills = new Set(profile.skills || []);
  const workModes = new Set(profile.workModes || []);
  const constraints = new Set(profile.constraints || []);
  const goal = profile.goal;
  const city = profile.city;
  const time = profile.time;
  const risk = profile.risk;
  const budget = profile.budget;
  const learningDepth = profile.learningDepth;
  const proof = profile.proof;

  return tracks
    .map(track => {
      let score = TYPE_KEYS.reduce((sum, key) => sum + (normalized[key] / 100) * track.base[key] * 7, 0);
      track.interests.forEach(item => { if (interests.has(item)) score += 10; });
      track.skills.forEach(item => { if (skills.has(item)) score += 8; });
      track.workModes?.forEach(item => { if (workModes.has(item)) score += 6; });
      if (track.goals.includes(goal)) score += 12;
      if (city === "remote" && (track.workModes || []).includes("remote")) score += 7;
      if (["tier1", "tier2"].includes(city) && track.tags.some(tag => ["金融", "咨询", "AI 赛道", "B 端岗位"].includes(tag))) score += 3;
      if (time === "low" && track.tags.some(tag => ["低成本", "低成本验证", "可副业", "可远程"].includes(tag))) score += 5;
      if (["high", "very_high"].includes(time) && track.tags.some(tag => ["专业门槛", "硬技能", "高强度"].includes(tag))) score += 4;
      if (learningDepth === "quick" && track.tags.some(tag => ["低成本", "低成本验证", "可副业", "本地化"].includes(tag))) score += 5;
      if (["deep", "long"].includes(learningDepth) && track.tags.some(tag => ["硬技能", "专业门槛", "研究导向", "高天花板"].includes(tag))) score += 6;
      if (risk === "low" && track.goals.includes("startup")) score -= 8;
      if (risk === "high" && track.goals.includes("startup")) score += 5;
      if (budget === "none" && track.tags.some(tag => ["本地化", "创业验证", "小店"].includes(tag))) score -= 4;
      if (constraints.has("cashflow") && track.goals.includes("job")) score += 5;
      if (constraints.has("fragmented_time") && (track.workModes || []).includes("remote")) score += 5;
      if (constraints.has("avoid_sales") && (track.workModes || []).includes("client")) score -= 6;
      if (constraints.has("low_cost") && track.tags.some(tag => ["低成本", "低成本验证", "可副业", "可远程"].includes(tag))) score += 5;
      if (constraints.has("income_ceiling") && track.tags.some(tag => ["高客单", "金融", "AI 赛道", "商业机会"].includes(tag))) score += 5;
      if (proof === "portfolio" && track.tags.some(tag => ["作品集", "作品集导向", "案例作品"].includes(tag))) score += 7;
      if (proof === "mvp" && track.goals.includes("startup")) score += 6;
      if (proof === "credential" && track.tags.some(tag => ["硬技能", "专业门槛", "稳定岗位"].includes(tag))) score += 6;
      if (proof === "content_asset" && track.base.contentCreator >= 4) score += 7;
      if (proof === "network" && track.base.social >= 4) score += 7;
      if (profile.stage === "caregiver" && (track.workModes || []).includes("remote")) score += 5;
      return { ...track, match: Math.max(58, Math.min(98, Math.round(score))) };
    })
    .sort((a, b) => b.match - a.match)
    .slice(0, 3);
}

function showResults() {
  const rankedTypes = getRankedTypes();
  const main = rankedTypes[0];
  const second = rankedTypes[1];
  const recommended = recommendTracks();
  const composite = getCompositePersona(main, second);

  $("#mainTypeTitle").textContent = `${composite.name}｜${main.label} × ${second.label}`;
  $("#mainTypeDesc").textContent = `${composite.description} 你的职场箴言是：“${composite.motto}”`;

  renderRadar(rankedTypes);
  renderTracks(recommended);
  renderRoadmap(recommended[0], main);
  $("#promptPreview").textContent = buildPrompt(recommended, main, second);
  showScreen("result");
}

function renderRadar(rankedTypes) {
  const canvas = $("#radarCanvas");
  const ctx = canvas.getContext("2d");
  const normalized = normalizeScores();
  const center = canvas.width / 2;
  const centerY = canvas.height / 2 + 8;
  const radius = 145;
  const labels = TYPE_KEYS.map(key => TYPE_META[key].label.replace("人格", ""));

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.lineWidth = 1;
  ctx.font = "15px PingFang SC, sans-serif";

  for (let ring = 1; ring <= 5; ring += 1) {
    ctx.beginPath();
    TYPE_KEYS.forEach((_, index) => {
      const point = radarPoint(index, radius * (ring / 5), center, centerY);
      if (index === 0) ctx.moveTo(point.x, point.y);
      else ctx.lineTo(point.x, point.y);
    });
    ctx.closePath();
    ctx.strokeStyle = "rgba(76, 48, 41, 0.13)";
    ctx.stroke();
  }

  TYPE_KEYS.forEach((key, index) => {
    const axis = radarPoint(index, radius, center, centerY);
    ctx.beginPath();
    ctx.moveTo(center, centerY);
    ctx.lineTo(axis.x, axis.y);
    ctx.strokeStyle = "rgba(76, 48, 41, 0.12)";
    ctx.stroke();

    const labelPoint = radarPoint(index, radius + 38, center, centerY);
    ctx.fillStyle = TYPE_META[key].color;
    ctx.textAlign = labelPoint.x < center - 10 ? "right" : labelPoint.x > center + 10 ? "left" : "center";
    ctx.fillText(labels[index], labelPoint.x, labelPoint.y);
  });

  ctx.beginPath();
  TYPE_KEYS.forEach((key, index) => {
    const valueRadius = radius * (normalized[key] / 100);
    const point = radarPoint(index, valueRadius, center, centerY);
    if (index === 0) ctx.moveTo(point.x, point.y);
    else ctx.lineTo(point.x, point.y);
  });
  ctx.closePath();
  ctx.fillStyle = "rgba(201, 132, 134, 0.24)";
  ctx.fill();
  ctx.strokeStyle = "#c98486";
  ctx.lineWidth = 3;
  ctx.stroke();

  const legend = $("#scoreLegend");
  legend.innerHTML = rankedTypes.map(item => {
    const value = normalized[item.key];
    return `
      <div class="score-row">
        <span>${item.label.replace("人格", "")}</span>
        <div class="score-bar"><span style="width:${value}%; background:${item.color}"></span></div>
        <span>${value}</span>
      </div>
    `;
  }).join("");
}

function radarPoint(index, currentRadius, center, centerY) {
  const angle = -Math.PI / 2 + index * ((Math.PI * 2) / TYPE_KEYS.length);
  return {
    x: center + Math.cos(angle) * currentRadius,
    y: centerY + Math.sin(angle) * currentRadius,
  };
}

function renderTracks(recommended) {
  $("#trackCards").innerHTML = recommended.map((track, index) => `
    <article class="track-card">
      <h3><span>${index + 1}. ${track.name}</span><span class="match-pill">${track.match}% 匹配</span></h3>
      <p>${track.description}</p>
      <div class="tag-list">${track.tags.map(tag => `<span class="tag">${tag}</span>`).join("")}</div>
    </article>
  `).join("");
}

function renderRoadmap(topTrack, mainType) {
  const steps = [
    {
      title: "Month 1-2｜能力盘点",
      text: `围绕「${topTrack.name}」列出你已有技能、可迁移经验和缺口，做 1 个作品/案例雏形。`,
    },
    {
      title: "Month 3-4｜市场验证",
      text: "找 5-10 位目标用户访谈，设计一个最小服务包或小型内容栏目，测试真实反馈。",
    },
    {
      title: "Month 5-6｜建立收入来源",
      text: `根据反馈迭代报价、内容或简历作品集。作为${mainType.label}，记得用小步快跑降低试错成本。`,
    },
  ];

  $("#roadmap").innerHTML = steps.map(step => `
    <div class="roadmap-step">
      <strong>${step.title}</strong>
      <p>${step.text}</p>
    </div>
  `).join("");
}

function buildPrompt(recommended = recommendTracks(), main = getRankedTypes()[0], second = getRankedTypes()[1]) {
  return `请你扮演一位温暖、专业、务实的女性职业转型顾问，基于我的「职属于她」测评结果，帮我做一次更深入的职业方向分析。

请按以下结构输出：

1. 我的职业人格解读
- 解释我的主导人格和辅助人格
- 说明这两种特质如何影响我的职业选择
- 不要把测评结果说得过于绝对

2. 最适合我的 3 个发展赛道
每个赛道请包含：
- 为什么适合我
- 适合做就业、副业、自由职业还是创业
- 进入门槛
- 我已有条件里可以利用的优势
- 可能遇到的风险
- 第一个低成本验证动作

3. 未来 6 个月行动路线图
请按以下阶段输出：
- Month 1-2：能力盘点和方向验证
- Month 3-4：做出第一个作品、案例或小型服务
- Month 5-6：获得反馈、迭代方向、尝试变现或求职

4. 请额外提醒我：
- 哪些方向不建议我现在立刻投入太多钱
- 哪些方向适合先用每周少量时间试水
- 我接下来最应该问自己的 5 个问题

语气要求：
- 支持女性探索者
- 具体、真诚、可执行
- 不制造焦虑
- 不承诺收入
- 不替我做人生决定，而是帮我缩小探索范围

用户人格：
- 主导人格：${main.label}（原始分 ${main.score}，标准化 ${main.normalizedScore} / 100）
- 辅助人格：${second.label}（原始分 ${second.score}，标准化 ${second.normalizedScore} / 100）
- 五维分数：${JSON.stringify(scores, null, 2)}
- 五维标准化分数：${JSON.stringify(normalizeScores(), null, 2)}

用户现实条件：
${JSON.stringify(profile, null, 2)}

当前规则推荐的赛道：
${recommended.map((track, index) => `${index + 1}. ${track.name}（匹配度 ${track.match}%）`).join("\n")}
`;
}

async function copyPrompt() {
  const text = $("#promptPreview").textContent || buildPrompt();
  try {
    await navigator.clipboard.writeText(text);
    showToast("已复制 Prompt，可以粘贴到你自己的 AI 工具里继续分析。");
  } catch {
    showToast("复制失败，可以手动选中下方 Prompt。");
  }
}

function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("show"), 2300);
}

function restart() {
  Object.keys(answers).forEach(key => delete answers[key]);
  Object.keys(profile).forEach(key => delete profile[key]);
  TYPE_KEYS.forEach(key => { scores[key] = 0; });
  currentIndex = 0;
  showScreen("welcome");
}

window.FemAI = {
  getScores: () => ({ ...scores }),
  getProfile: () => ({ ...profile }),
  buildPrompt,
};
