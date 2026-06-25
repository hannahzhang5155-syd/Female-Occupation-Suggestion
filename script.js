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

const personalityQuestions = [
  ...[
    ["我倾向于在工作中寻找新的机会并承担风险。", "entrepreneurial"],
    ["面对挑战和不确定性，我通常能保持积极乐观的心态。", "entrepreneurial"],
    ["我更愿意开创自己的事业，而不是在现有框架下工作。", "entrepreneurial"],
    ["我擅长识别市场空白或未被满足的需求。", "entrepreneurial"],
    ["我享受制定战略并带领团队实现目标的过程。", "entrepreneurial"],
    ["我喜欢深入研究某个领域，成为该领域的专家。", "technical"],
    ["我享受解决复杂的技术难题，并从中获得成就感。", "technical"],
    ["我会花大量时间学习新技能，以提升自己的专业能力。", "technical"],
    ["我注重细节和精确性，追求工作成果的完美。", "technical"],
    ["我认为掌握一门核心技术是职业成功的关键。", "technical"],
    ["我擅长与不同背景的人建立联系，并享受团队合作。", "social"],
    ["我乐于倾听他人的需求，并提供帮助和支持。", "social"],
    ["我在团队中常常扮演协调者或沟通者的角色。", "social"],
    ["我能敏锐地察觉到他人的情绪变化，并给予适当的回应。", "social"],
    ["我享受通过沟通和协商来解决冲突，达成共识。", "social"],
    ["我善于建立和维护长期的人际关系，并从中获得支持。", "social"],
    ["我认为在工作中建立良好的人脉网络非常重要。", "social"],
    ["我喜欢参与社区活动或志愿服务，与人互动。", "social"],
    ["我经常有新奇的想法，并渴望将它们付诸实践。", "creative"],
    ["我追求工作中的独特性和艺术性，不喜欢墨守成规。", "creative"],
    ["我喜欢用视觉或非传统的方式来表达我的想法。", "creative"],
    ["我享受从零开始创造新事物的过程。", "creative"],
    ["我对美学和设计有独特的见解和追求。", "creative"],
    ["我认为打破常规、探索未知是创新的源泉。", "creative"],
    ["我喜欢通过文字、图片或视频表达自己的观点和故事。", "contentCreator"],
    ["我对社会热点和流行趋势有敏锐的洞察力，并能迅速捕捉。", "contentCreator"],
    ["我享受将复杂信息转化为易于理解和传播的内容。", "contentCreator"],
    ["我擅长讲故事，能够吸引并留住听众或读者。", "contentCreator"],
    ["我认为通过内容输出可以影响他人，建立个人品牌。", "contentCreator"],
    ["我乐于分享自己的知识和经验，帮助他人成长。", "contentCreator"],
  ].map(([text, dimension], index) => ({
    id: `P${index + 1}`,
    phase: "personality",
    type: "single",
    title: text,
    help: "请选择最符合你真实状态的一项。",
    options: [
      { label: "非常不同意", scores: { [dimension]: 1 } },
      { label: "不同意", scores: { [dimension]: 2 } },
      { label: "中立 / 说不清", scores: { [dimension]: 3 } },
      { label: "同意", scores: { [dimension]: 4 } },
      { label: "非常同意", scores: { [dimension]: 5 } },
    ],
  })),
  {
    title: "当团队面临一个全新的、充满不确定性的项目时，你更倾向于：",
    options: [
      ["感到兴奋，迫不及待地想去尝试和挑战。", "entrepreneurial"],
      ["仔细分析所有可能的风险和收益，寻找最佳的技术解决方案。", "technical"],
      ["组织团队讨论，协调资源，让每个人发挥所长。", "social"],
      ["思考如何用独特方式呈现挑战，激发创意。", "creative"],
      ["考虑如何把这个挑战有效传达给目标受众。", "contentCreator"],
    ],
  },
  {
    title: "在一个新项目中，你最看重的是：",
    options: [
      ["能够带来突破性的市场机会和商业价值。", "entrepreneurial"],
      ["能够运用和提升专业技能，解决核心难题。", "technical"],
      ["能够与优秀团队紧密合作，共同达成目标。", "social"],
      ["能够有充分自由度，发挥想象力和创造力。", "creative"],
      ["能够将项目成果以吸引人的方式呈现给大众。", "contentCreator"],
    ],
  },
  {
    title: "你更喜欢以下哪种工作环境？",
    options: [
      ["充满变化和挑战，节奏快、机会多。", "entrepreneurial"],
      ["可以深入钻研某个技术、方法或专业领域。", "technical"],
      ["需要大量人际沟通和协作，氛围融洽。", "social"],
      ["可以自由表达创意，不受太多框架限制。", "creative"],
      ["持续产出高质量内容并获得反馈。", "contentCreator"],
    ],
  },
  {
    title: "在职业发展中，你最希望获得的是：",
    options: [
      ["掌控全局，实现个人商业愿景。", "entrepreneurial"],
      ["成为某个领域的权威，拥有不可替代的技能。", "technical"],
      ["建立广泛人脉，成为团队或社群中的核心。", "social"],
      ["创作出有影响力的作品，得到认可。", "creative"],
      ["通过内容输出影响他人，建立个人品牌。", "contentCreator"],
    ],
  },
  {
    title: "当你学习一项新技能时，你更倾向于：",
    options: [
      ["在实践中不断摸索，从失败中吸取教训。", "entrepreneurial"],
      ["阅读专业书籍，参加高级培训，系统提升专业知识。", "technical"],
      ["寻找学习伙伴，通过交流协作共同进步。", "social"],
      ["探索不同学习方法，并做创新结合。", "creative"],
      ["记录学习过程和心得，并分享给他人。", "contentCreator"],
    ],
  },
  {
    title: "你认为以下哪种方式最能体现你的价值？",
    options: [
      ["成功启动并运营一个新项目或公司。", "entrepreneurial"],
      ["解决了一个长期困扰行业的专业难题。", "technical"],
      ["促成一次成功合作，建立良好关系。", "social"],
      ["创作出一件令人惊喜的作品或设计。", "creative"],
      ["你的内容获得大量关注和积极反馈。", "contentCreator"],
    ],
  },
  {
    title: "在团队协作中，你更喜欢扮演什么角色？",
    options: [
      ["制定方向和策略的领导者。", "entrepreneurial"],
      ["提供专业支持的专家。", "technical"],
      ["协调沟通、维护氛围的桥梁。", "social"],
      ["提出新颖想法、激发创意的源泉。", "creative"],
      ["负责对外宣传和内容输出的传播者。", "contentCreator"],
    ],
  },
  {
    title: "当你遇到一个复杂问题时，你倾向于：",
    options: [
      ["快速分析，大胆尝试不同方案，不怕失败。", "entrepreneurial"],
      ["深入研究问题本质，寻求精确高效的方案。", "technical"],
      ["与他人讨论，集思广益，寻求多方支持。", "social"],
      ["跳出常规，寻找非传统、有创意的路径。", "creative"],
      ["把问题拆解，并用清晰逻辑向他人解释。", "contentCreator"],
    ],
  },
  {
    title: "你认为以下哪项最符合你对“成功”的定义？",
    options: [
      ["实现商业抱负，创造更大的社会价值。", "entrepreneurial"],
      ["在专业领域达到高水平，成为行业标杆。", "technical"],
      ["拥有良好关系网络和社会影响力。", "social"],
      ["创作出独特且广受赞誉的作品。", "creative"],
      ["通过内容启发和连接大量受众。", "contentCreator"],
    ],
  },
  {
    title: "你更倾向于通过哪种方式学习和成长？",
    options: [
      ["在实践中摸索，从失败中吸取教训。", "entrepreneurial"],
      ["阅读专业书籍，参加培训，系统提升。", "technical"],
      ["参与社群活动，与同行交流，拓展人脉。", "social"],
      ["体验不同文化和作品，持续激发灵感。", "creative"],
      ["写博客、做视频，通过分享深化理解。", "contentCreator"],
    ],
  },
].map((question, index) => {
  if (question.id) return question;
  return {
    id: `P${index + 1}`,
    phase: "personality",
    type: "single",
    title: question.title,
    help: "选择你最自然、最常出现的反应。",
    options: question.options.map(([label, dimension]) => ({
      label,
      scores: { [dimension]: 5 },
    })),
  };
});

const profileQuestions = [
  {
    id: "S1",
    phase: "profile",
    type: "single",
    title: "你的年龄范围是？",
    help: "用于判断人生阶段和建议的落地节奏。",
    field: "age",
    options: ["18-24", "25-30", "31-35", "36-40", "41-45", "45+"].map(label => ({ label, value: label })),
  },
  {
    id: "S2",
    phase: "profile",
    type: "single",
    title: "你目前更接近哪种状态？",
    field: "stage",
    options: [
      ["在职，但想转方向", "employed_switch"],
      ["离职 / Gap 中", "gap"],
      ["学生 / 留学生", "student"],
      ["宝妈 / 家庭照护阶段", "caregiver"],
      ["已有副业，想放大", "side_project"],
    ].map(([label, value]) => ({ label, value })),
  },
  {
    id: "S3",
    phase: "profile",
    type: "single",
    title: "你当前月收入大概是？",
    field: "salary",
    options: ["暂时无收入", "5k 以下", "5k-10k", "10k-20k", "20k-35k", "35k+"].map(label => ({ label, value: label })),
  },
  {
    id: "S4",
    phase: "profile",
    type: "single",
    title: "你所在或目标发展的城市范围是？",
    field: "city",
    options: [
      ["一线城市 / 海外核心城市", "tier1"],
      ["新一线 / 省会城市", "tier2"],
      ["二三线城市", "tier3"],
      ["小城市 / 县城", "small"],
      ["远程优先，不受城市限制", "remote"],
    ].map(([label, value]) => ({ label, value })),
  },
  {
    id: "S5",
    phase: "profile",
    type: "multi",
    title: "你对哪些方向有兴趣？可多选",
    help: "这些兴趣会影响 3 个推荐赛道的排序。",
    field: "interests",
    options: [
      ["AI 工具 / 自动化", "ai"],
      ["美业 / 生活方式", "beauty"],
      ["教育 / 培训", "education"],
      ["心理 / 女性成长", "wellbeing"],
      ["社群 / 活动", "community"],
      ["内容创作 / 自媒体", "content"],
      ["设计 / 审美表达", "design"],
      ["商业运营 / 项目管理", "operations"],
      ["销售 / 咨询服务", "sales"],
    ].map(([label, value]) => ({ label, value })),
  },
  {
    id: "S6",
    phase: "profile",
    type: "multi",
    title: "你已经具备哪些技能或资源？可多选",
    field: "skills",
    options: [
      ["写作表达", "writing"],
      ["拍摄剪辑", "video"],
      ["社群运营", "community_ops"],
      ["销售沟通", "sales"],
      ["项目管理", "pm"],
      ["设计审美", "design"],
      ["数据 / 技术基础", "tech"],
      ["英语 / 跨文化沟通", "english"],
      ["行业经验 / 专业证书", "domain"],
    ].map(([label, value]) => ({ label, value })),
  },
  {
    id: "S7",
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
    title: "你更想通过新方向达成什么目标？",
    field: "goal",
    options: [
      ["找到更适合的全职岗位", "job"],
      ["发展稳定副业", "side"],
      ["成为自由职业者", "freelance"],
      ["尝试创业 / 小生意", "startup"],
      ["先探索，不急着变现", "explore"],
    ].map(([label, value]) => ({ label, value })),
  },
  {
    id: "S10",
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
];

const allQuestions = [...personalityQuestions, ...profileQuestions];

const tracks = [
  {
    name: "AI 工具顾问 / 自动化服务",
    base: { entrepreneurial: 4, technical: 5, social: 3, creative: 2, contentCreator: 2 },
    interests: ["ai", "operations", "education"],
    skills: ["tech", "pm", "writing", "english"],
    goals: ["freelance", "side", "startup", "job"],
    description: "帮助个人或小团队用 AI 工具提升效率，适合从“流程诊断 + 工具配置 + 培训”切入。",
    tags: ["低成本验证", "B 端服务", "可远程"],
  },
  {
    name: "女性成长 / 职业转型社群运营",
    base: { entrepreneurial: 3, technical: 1, social: 5, creative: 3, contentCreator: 4 },
    interests: ["community", "wellbeing", "education", "content"],
    skills: ["community_ops", "writing", "sales", "pm"],
    goals: ["side", "freelance", "startup"],
    description: "围绕同温层人群做陪伴、活动、打卡和资源连接，先用小群验证需求和付费意愿。",
    tags: ["适合女性议题", "社群产品", "需要长期信任"],
  },
  {
    name: "个人品牌内容创作",
    base: { entrepreneurial: 3, technical: 2, social: 3, creative: 4, contentCreator: 5 },
    interests: ["content", "education", "wellbeing", "ai"],
    skills: ["writing", "video", "english", "domain"],
    goals: ["side", "freelance", "explore"],
    description: "把你的经历、观点或专业经验转化成可持续内容资产，后续连接咨询、课程或合作机会。",
    tags: ["长期复利", "成本低", "需要稳定输出"],
  },
  {
    name: "美业 / 生活方式小生意",
    base: { entrepreneurial: 5, technical: 2, social: 4, creative: 4, contentCreator: 3 },
    interests: ["beauty", "design", "community", "content"],
    skills: ["sales", "video", "design", "community_ops"],
    goals: ["startup", "side", "freelance"],
    description: "从小单品、体验服务或本地客户开始，结合社媒内容和私域复购测试商业闭环。",
    tags: ["本地化", "审美驱动", "重服务体验"],
  },
  {
    name: "教育培训 / 知识服务",
    base: { entrepreneurial: 3, technical: 4, social: 4, creative: 2, contentCreator: 4 },
    interests: ["education", "ai", "content", "wellbeing"],
    skills: ["domain", "writing", "english", "sales"],
    goals: ["freelance", "side", "job"],
    description: "把你熟悉的知识、技能或经验包装成工作坊、训练营、咨询或小课。",
    tags: ["专业变现", "可小规模试课", "依赖口碑"],
  },
  {
    name: "用户运营 / 增长运营转型",
    base: { entrepreneurial: 3, technical: 3, social: 4, creative: 2, contentCreator: 3 },
    interests: ["operations", "community", "sales", "ai"],
    skills: ["pm", "community_ops", "sales", "tech"],
    goals: ["job", "side"],
    description: "适合作为全职转型方向：通过用户洞察、活动策划、数据反馈和 AI 提效进入增长相关岗位。",
    tags: ["就业友好", "迁移性强", "需要案例作品"],
  },
  {
    name: "自由职业设计 / 审美服务",
    base: { entrepreneurial: 3, technical: 3, social: 2, creative: 5, contentCreator: 3 },
    interests: ["design", "beauty", "content"],
    skills: ["design", "video", "writing"],
    goals: ["freelance", "side"],
    description: "从海报、品牌视觉、PPT、美学顾问或内容包装开始，用作品集获得第一批客户。",
    tags: ["作品集导向", "适合审美优势", "可远程"],
  },
];

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
  const goal = profile.goal;
  const city = profile.city;
  const time = profile.time;
  const risk = profile.risk;
  const budget = profile.budget;

  return tracks
    .map(track => {
      let score = TYPE_KEYS.reduce((sum, key) => sum + (normalized[key] / 100) * track.base[key] * 8, 0);
      track.interests.forEach(item => { if (interests.has(item)) score += 9; });
      track.skills.forEach(item => { if (skills.has(item)) score += 7; });
      if (track.goals.includes(goal)) score += 12;
      if (city === "remote" && track.tags.includes("可远程")) score += 8;
      if (time === "low" && track.tags.includes("低成本验证")) score += 6;
      if (risk === "low" && ["startup"].includes(goal)) score -= 8;
      if (budget === "none" && track.name.includes("美业")) score -= 5;
      if (profile.stage === "caregiver" && ["个人品牌内容创作", "AI 工具顾问 / 自动化服务", "教育培训 / 知识服务"].includes(track.name)) score += 5;
      return { ...track, match: Math.max(62, Math.min(96, Math.round(score))) };
    })
    .sort((a, b) => b.match - a.match)
    .slice(0, 3);
}

function showResults() {
  const rankedTypes = getRankedTypes();
  const main = rankedTypes[0];
  const second = rankedTypes[1];
  const recommended = recommendTracks();

  $("#mainTypeTitle").textContent = `${main.label}｜${main.title}`;
  $("#mainTypeDesc").textContent = `${main.short} 你的辅助特质是「${second.label}」，这会让你的路径更适合结合“${second.title}”的优势来设计。`;

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
  return `请你扮演一位温暖、专业、务实的女性职业转型顾问，基于我的「女性职业转型探测器」测评结果，帮我做一次更深入的职业方向分析。

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
