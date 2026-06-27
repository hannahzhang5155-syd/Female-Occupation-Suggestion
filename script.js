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

const v3PersonalityItems = [
  ["当你敏锐地察觉到身边女性群体中存在一个未被满足的痛点或需求时，你的内心会涌现出怎样的创业冲动？", ["立即研究市场可行性，思考如何打造能精准解决痛点的产品或服务。", "审慎评估风险与资源，判断自己是否具备把想法落地的能力。", "寻找同样关注此痛点的她们，一起探讨合作路径与商业模式。", "迅速浮现一个独特、有温度、有创意的产品或服务概念。", "想用文字或镜头讲述需求背后的真实故事，引发更多女性共鸣。"]],
  ["在你的职业蓝图中，哪种发展路径最能点燃你内心深处的热情与力量？", ["创立一份属于自己的事业，享受开创的乐趣。", "在专业领域深耕，成为不可替代的技术之星。", "成为团队的掌舵者或粘合剂，整合资源共同实现目标。", "投身需要创意与艺术表达的领域，让灵感自由发挥。", "运用文字、影像等形式分享经验，建立影响力并赋能她人。"]],
  ["当职场风云变幻，不确定性如影随形时，你通常会如何应对？", ["把变化视为机会，积极调整航向寻找突破口。", "收集数据与信息，用理性分析做出稳妥判断。", "主动与信任的同事或导师交流，从她们经验中获得支持。", "尝试用独具匠心的方法解决问题。", "把变化与挑战转化为内容素材，分享心路历程。"]],
  ["当你心中那个大胆想法遭遇质疑时，你会如何坚守或调整？", ["坚信判断，并寻找证据和资源推动它发生。", "重新审视技术细节或逻辑结构，寻找优化空间。", "主动与质疑者沟通，理解她们的顾虑并争取共识。", "用更具感染力的创意方式呈现想法。", "把质疑转化为关于女性创新与职场阻力的内容。"]],
  ["在你看来，女性在创业征途中最能绽放的优势是什么？", ["敏锐的市场洞察与果敢决策。", "严谨逻辑与解决复杂问题的能力。", "卓越沟通协调与团队凝聚力。", "独特审美视角与源源不断的创意火花。", "细腻表达与讲故事能力。"]],
  ["当你面对一个复杂技术难题时，最能激发你热情的是？", ["找到突破口快速迭代，见证方案从无到有。", "深入分析底层原理，直到彻底理解并解决。", "与团队协作攻克难关，分享成功喜悦。", "构思更具美感与效率的解决方案。", "记录解决过程，用易懂方式分享给更多她们。"]],
  ["当你决定学习一项全新技能时，你更倾向于哪种学习方式？", ["立即实践，在做中学快速掌握核心。", "系统学习理论，打下坚实基础。", "找同伴一起学习，在讨论中进步。", "探索不同学习方法，形成自己的高效路径。", "把学习心得整理成笔记或教程分享。"]],
  ["女性在职场中持续提升专业技能的关键秘诀是什么？", ["敢于挑战传统边界，进入核心领域。", "持续深耕，以工匠精神打磨技能。", "善用沟通协作优势，把复杂成果有效传递。", "把技术与艺术结合，创造有美感的产品。", "通过博客、课程等平台分享知识，建立影响力。"]],
  ["当你发现某个技术流程存在漏洞或效率瓶颈时，你的第一反应是？", ["思考如何优化流程或开发工具，把问题变成机会。", "深入探究根本原因，设计全面解决方案。", "主动沟通并协调资源推动解决。", "构思一个颠覆性的技术方案。", "写清晰分析报告，解释问题并提出改进方向。"]],
  ["在技术世界里，哪种挑战最能点燃你的激情？", ["快速原型开发与市场验证。", "复杂算法、系统架构或性能优化。", "跨部门协作，整合不同技术模块。", "把复杂技术以创新、直观且美的方式呈现。", "把专业知识转化为科普、培训或教程。"]],
  ["在团队协作中，最能让你感到乐在其中的是？", ["带领团队克服困难，实现共同目标。", "贡献专业技能，确保项目质量。", "协调成员观点与力量，营造和谐高效氛围。", "提出创意，点燃团队活力。", "记录团队成长故事并分享经验。"]],
  ["当你察觉身边女同事情绪低落时，你会如何支持？", ["给予鼓励，并主动提供实际帮助或资源。", "尊重她的空间，相信她能自我调节。", "主动倾听，用共情和温暖给予情感支持。", "用小创意让她感到被理解与关怀。", "把观察转化为关于职场女性情绪互助的内容。"]],
  ["女性在职场社交中最能展现的优势是什么？", ["主动拓展高质量人脉，为事业铺路。", "凭专业能力赢得尊重，让社交自然发生。", "共情力与沟通技巧，建立真诚连接。", "独特个人魅力和创意火花，让人印象深刻。", "通过真诚分享构建个人品牌与女性社群。"]],
  ["当职场中出现人际摩擦或误解时，你通常会如何化解？", ["主动介入寻找双赢方案。", "保持客观，分析问题机制与时机。", "充当和平使者，促进理解与和解。", "用幽默或创意化解紧张气氛。", "总结经验并分享给她人参考。"]],
  ["哪类社交活动最能让你放松并汲取能量？", ["行业峰会或商业酒会，拓展机会与合作。", "专业技术交流会，学习前沿知识。", "团队建设或志愿服务，感受深度连接。", "艺术展览或创意市集，激发灵感。", "线上社群或直播分享，传播价值并互动。"]],
  ["面对平淡的常规任务时，你会如何赋予它不一样的色彩？", ["加入创新元素，让效率或价值提升。", "遵循流程，确保细节精准。", "与团队碰撞多元视角。", "打破定式，用独特方式完成任务。", "记录创意改造心得并分享给她们。"]],
  ["你的创意灵感通常来源于何处？", ["市场潮流和商业机会。", "长期专业沉淀和对细节的探究。", "与不同领域的人交流碰撞。", "日常生活、艺术作品和自由想象。", "大量阅读、深度思考和多元内容消费。"]],
  ["当你想表达独特创意时，哪种方式最能让你淋漓尽致？", ["商业计划书或路演，讲清商业价值。", "技术原型或数据分析，证明可行性。", "有感染力的语言和故事，引发共鸣。", "视觉设计、艺术作品或沉浸式体验。", "文字、视频、播客等媒介系统传播。"]],
  ["当你倾注心血的创意暂时未被采纳时，你会如何调整？", ["重新审视商业潜力，寻找其他实现路径。", "分析未采纳原因，补强技术或逻辑。", "寻求反馈，开放调整和优化。", "坚信创意价值，寻找更懂它的平台。", "把经历转化为创作素材与反思。"]],
  ["哪类工作项目最能让你施展创意才华？", ["从零打造新产品或服务。", "钻研复杂技术难题，优化系统性能。", "与多方伙伴协作推动项目落地。", "设计独特体验或创作艺术作品。", "通过内容策划和传播提升品牌影响力。"]],
  ["当你捕捉到热门话题或社会现象时，你最渴望的是？", ["思考如何转化为商业机会。", "挖掘背后的数据与逻辑，理解本质。", "与朋友或同事讨论，吸收多元观点。", "构思有温度的独特视角进行创作。", "立刻用文字或影像把想法表达出来。"]],
  ["内容创作中最让你有成就感的是哪个瞬间？", ["内容吸引投资或促成商业合作。", "获得专业权威认可。", "引发有意义讨论，建立社群连接。", "以美学风格或创意打动读者。", "真正帮助她人解决困惑或带来正向影响。"]],
  ["沉浸在内容创作时，你更倾向于哪种姿态？", ["快速捕捉热点，走在潮流前沿。", "做深度研究，确保专业准确。", "与读者互动，根据反馈优化方向。", "追求独创性与艺术美感。", "把复杂信息转化为通俗有趣的内容。"]],
  ["当你的内容获得大量关注和积极反馈时，你会如何回应？", ["思考如何转化为商业价值或合作。", "分析数据，洞察受欢迎的形式与主题。", "积极回应评论，建立深层连接。", "继续探索更大胆的创作方式。", "持续输出高质量、有价值的内容。"]],
  ["女性在内容创作中最能展现的优势是什么？", ["商业洞察力，把内容与市场需求结合。", "逻辑与深度思考，产出专业内容。", "细腻表达和共情力，创作动人故事。", "独特审美与创意，让内容更有吸引力。", "善于沟通分享，以内容建立温暖社群。"]],
  ["步入全新社交场合时，你会如何连接与探索？", ["捕捉合作火花，主动建立价值连接。", "观察环境，选择性深入交流。", "真诚热情地与不同背景的她们攀谈。", "寻找能点燃好奇心的话题或人物。", "记录有趣见闻，作为未来内容素材。"]],
  ["团队出现意见分歧、气氛微妙时，你更倾向于扮演什么角色？", ["提出解决方案，以理服人争取支持。", "分析分歧症结，寻找平衡方案。", "组织坦诚沟通，促进换位思考。", "用创意方式把对立转化为新合作。", "记录讨论过程，总结经验供团队成长。"]],
  ["维系长久合作关系最核心的秘密武器是什么？", ["清晰互惠的商业目标与利益机制。", "专业能力互补和实力基础上的信任。", "真诚沟通、深度理解和情感投入。", "共同创意愿景和探索未知的热情。", "共享价值观并创造积极社会影响。"]],
  ["当你需要外部帮助或资源时，你会如何伸出橄榄枝？", ["明确需求，自信直接地向合适的人请求。", "做足功课，用数据和逻辑打动对方。", "运用人脉网络，找到最合适的人沟通。", "用有吸引力的方式呈现需求。", "写条理清晰、情感真挚的请求函或方案。"]],
  ["哪种团队氛围最让你如鱼得水？", ["目标清晰、节奏明快、充满挑战。", "严谨专业、精益求精、追求卓越。", "开放包容、彼此支持、沟通无碍。", "自由奔放、鼓励创意、充满艺术气息。", "积极分享知识经验，共同成长并传播价值。"]],
  ["在职业发展中，你认为“风险”意味着什么？", ["挑战与机遇并存，是突破的必经之路。", "需要被精确计算和规避的障碍。", "需要通过沟通协作共同分担和化解。", "激发创意、寻找非传统方案的催化剂。", "值得记录和分享的成长故事。"]],
  ["当你面对一个全新项目且没有明确指导时，你会？", ["快速制定计划，边做边调整并寻求反馈。", "深入研究资料，搭建扎实框架。", "主动沟通，收集需求和建议。", "构思多种可能，用创意方式启动。", "撰写启动文档，明确目标并寻求反馈。"]],
  ["女性如何更好地平衡个人生活与职业发展？", ["明确目标、果断取舍，聚焦最重要的事。", "提升效率，用科学方法管理时间。", "建立家人、朋友和导师组成的支持系统。", "找到能激发热情的工作，让工作融入生活。", "分享经验，帮助更多女性找到平衡。"]],
  ["当你需要学习全新的跨领域技能时，你更倾向于？", ["快速入门，用实践项目掌握核心。", "找权威教材和课程，系统学习理论。", "找专家或社群，通过交流请教学习。", "把新技能与已有知识创意融合。", "边学边记录，整理成内容分享。"]],
  ["会议或协作中，当你捕捉到微妙紧张情绪时，你的第一反应是？", ["评估是否影响进度，并调整目标或分工。", "分析情绪产生的客观原因和流程漏洞。", "会后私下倾听真实想法，充当情绪润滑剂。", "用轻松幽默的破冰点子打破僵局。", "把群体心理变化作为内容观察素材。"]],
  ["哪种影响力最让你自豪，并愿意持续努力？", ["商业创新带来的市场与价值影响。", "专业领域的技术突破与权威认可。", "高质量人脉网络和良好口碑。", "创意作品引领审美并带来灵感。", "有深度、有温度的内容传播产生社会价值。"]],
  ["完成重要项目后，什么回报最让你满足？", ["获得更大自主权和资源，开启下一个挑战。", "专业能力被认可，接触更深层问题。", "收到团队真诚肯定并共同庆祝。", "作品被传播赞誉，激发更多创意。", "经验故事被更多人看到，成为她人的榜样。"]],
  ["女性如何更好地发挥领导力，带领团队走向卓越？", ["展现果断远见，带团队勇往直前。", "用专业知识和严谨态度赢得信任。", "用共情和沟通建立以人为本的领导风格。", "用独特视角和创新思维探索新方向。", "通过分享赋能，培养更多女性领导者。"]],
  ["如果让你温柔而坚定地解决一个社会问题，你会选择哪条路径？", ["创立有社会责任感的企业，用商业模式持续解决。", "投入科学研究，用技术创新寻找根本方案。", "组织公益活动，动员更广泛力量参与。", "通过艺术或设计唤起公众关注。", "制作深度报道或纪录片，揭示真相并倡导改变。"]],
  ["当你察觉同事或下属遭遇情绪困扰时，你会如何伸出援手？", ["立即提供帮助或资源，并鼓励她相信自己的力量。", "尊重她的空间，或建议寻求更专业支持。", "主动靠近、耐心倾听，给予温暖而坚定的安慰。", "用小惊喜或创意活动让她感到被理解。", "把关怀转化为关于职场女性情绪支持的内容。"]],
];

const personalityQuestions = v3PersonalityItems.map(([title, labels], index) => ({
  id: `P${index + 1}`,
  phase: "personality",
  type: "single",
  title,
  help: "选择最接近你真实反应的一项。没有标准答案，越真实越有参考价值。",
  options: labels.map((label, optionIndex) => ({
    label,
    scores: { [OPTION_TYPE_MAP[optionIndex]]: 5 },
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
