/* TapTap 10y - pure static H5 */

const STORAGE_KEY = "taptap10y_state_v1";

/** @typedef {{
 *   userPreset: "test";
 *   boundData: boolean;
 *   boundSteam?: boolean;
 *   boundRolesCount?: number;
 *   claimedRoleRewardsCount?: number;
 *   enteredAt?: number;
 *   careerSnapshotPreset?: "test";
 *   careerSnapshot?: { recap: any; grants: Record<string, { points: number; coupons: number }> };
 *   profile?: { nickname: string; id: string };
 *   points: number;
 *   walletCoupons: number;
 *   claimedRewardIds: string[];
 *   inventory: { frames: string[]; badges: string[]; };
 *   equipped: { frame?: string; badge?: string; };
 *   playtest: { completed: string[]; feedback: Record<string,string>; claimed: string[] };
 *   memorial?: { tab: "color" | "sticker" | "avatar"; colorId: string; stickerId: string; avatarId: string };
 *   memorialUnlocks?: { colors: string[]; stickers: string[]; avatars: string[] };
 *   daily?: { lotteryDayKey?: string };
 *   mutualMessages?: Record<string, { text: string; ts: number; likes?: number }[]>;
 *   entryGateDone?: boolean;
 *   firstRecapDone?: boolean;
 *   firstRecapFlow?: { phase: "snap" | "bind" | "done"; idx: number };
 *   firstRecapRun?: { startPoints: number; startCoupons: number; doneModalShown: boolean };
 * }} PhaseState */

const DEFAULT_PRESET_KEY = "test";

const PRESETS = {
  test: {
    label: "测试用户",
    recap: {
      // 基础
      regYear: 2018,
      regDate: "2018年3月6日",
      streakMax: 46,
      spendTotal: 1288.5,
      spendGameCount: 12,
      spendGames: [
        "《哈迪斯》终极版",
        "《戴森球计划》",
        "《去月球》",
        "《Miao屋》DLC·春日篇",
        "《饥荒：联机版》",
      ],
      platformBadgesTotal: 86,
      platformBadges: [
        { icon: "🖤", name: "黑金·十年同行", owners: 82, category: "成就" },
        { icon: "🏆", name: "年度 Top 1 评测", owners: 560, category: "成就" },
        { icon: "⭐", name: "聚光灯精选", owners: 3200, category: "活动" },
        { icon: "🎯", name: "百发百中", owners: 8600, category: "成就" },
        { icon: "🎪", name: "2024嘉年华参与者", owners: 12800, category: "活动" },
        { icon: "💎", name: "钻石评测", owners: 15000, category: "成就" },
        { icon: "🔥", name: "连续签到30天", owners: 42000, category: "活动" },
        { icon: "📝", name: "首次评价", owners: 86000, category: "成就" },
        { icon: "🤝", name: "社区之友", owners: 120000, category: "活动" },
        { icon: "👋", name: "新手报到", owners: 350000, category: "活动" },
      ],

      // 玩游戏
      gamesPlayedTotal: 368,
      playTimeHours: 2680,
      firstGameName: "《饥荒：联机版》",
      firstGameIcon: "🔥",
      platform: "android",
      platformBreakdown: [
        { platform: "手机", games: 285, hours: 1860, favName: "明日方舟", favIcon: "🏗️" },
        { platform: "PC", games: 68, hours: 720, favName: "戴森球计划", favIcon: "🌐" },
        { platform: "云游戏", games: 15, hours: 100, favName: "原神", favIcon: "🌍" },
      ],
      yearlyData: [
        { year: 2018, games: 12, hours: 86 },
        { year: 2019, games: 45, hours: 320 },
        { year: 2020, games: 68, hours: 480 },
        { year: 2021, games: 52, hours: 390 },
        { year: 2022, games: 61, hours: 420 },
        { year: 2023, games: 48, hours: 360 },
        { year: 2024, games: 42, hours: 310 },
        { year: 2025, games: 30, hours: 220 },
        { year: 2026, games: 10, hours: 94 },
      ],
      yearlyTopGames: [
        { year: 2018, gameName: "《饥荒：联机版》", gameIcon: "🔥", hours: 86 },
        { year: 2019, gameName: "《明日方舟》", gameIcon: "⚔️", hours: 245 },
        { year: 2020, gameName: "《派对之星》", gameIcon: "🎉", hours: 320 },
        { year: 2021, gameName: "《Miao屋》", gameIcon: "🐱", hours: 280 },
        { year: 2022, gameName: "《戴森球计划》", gameIcon: "🪐", hours: 420 },
        { year: 2023, gameName: "《哈迪斯》", gameIcon: "💀", hours: 360 },
        { year: 2024, gameName: "《去月球》", gameIcon: "🌙", hours: 190 },
        { year: 2025, gameName: "《豆战异世界》", gameIcon: "🫘", hours: 156 },
        { year: 2026, gameName: "《哈迪斯 II》", gameIcon: "🔱", hours: 94 },
      ],
      // 类别偏好 - 六边形雷达图维度 (0~100)
      radarAction: 85,
      radarStrategy: 62,
      radarRPG: 78,
      radarAdventure: 50,
      radarSim: 35,
      radarCasual: 70,
      topGenreLabel: "动作",
      topGenrePct: "32%",
      topGenreSitePct: "站内占比 18%",
      // 游戏成就
      achievementGamesCount: 14,
      achievementsTotal: 326,
      achievementsNormal: 308,
      platinumAchievementsTotal: 18,
      rareAchievements: [
        { game: "《戴森球计划》", name: "群星点亮", rate: "0.6%" },
        { game: "《哈迪斯》", name: "不死者之王", rate: "1.2%" },
        { game: "《去月球》", name: "最后的告别", rate: "2.8%" },
      ],
      nicheGame: "《无人之境：小镇来信》",
      fiveStarNiche1Game: "《无人之境：小镇来信》",
      fiveStarNiche1ReviewsCount: 32,
      fiveStarNiche1Score: 9.1,
      fiveStarNiche2Game: "《铃兰之剑》",
      fiveStarNiche2ReviewsCount: 18,
      fiveStarNiche2Score: 8.8,
      fiveStarNiche3Game: "《雨中冒险：回响》",
      fiveStarNiche3ReviewsCount: 46,
      fiveStarNiche3Score: 9.0,
      belovedGameName: "《哈迪斯》",
      belovedGameIcon: "💀",
      belovedGameHours: 1280,
      belovedGamePct: "28%",
      belovedGameSamePct: "3%",
      belovedTop10: [
        { name: "《哈迪斯》", icon: "💀", banner: "" },
        { name: "《戴森球计划》", icon: "🌐", banner: "" },
        { name: "《明日方舟》", icon: "🏗️", banner: "" },
        { name: "《集合啦！动物森友会》", icon: "🏝️", banner: "" },
        { name: "《去月球》", icon: "🌙", banner: "" },
        { name: "《极乐迪斯科》", icon: "🕵️", banner: "" },
        { name: "《心动小镇》", icon: "🏘️", banner: "" },
        { name: "《空洞骑士：丝之歌》", icon: "🦋", banner: "" },
        { name: "《豆战异世界》", icon: "🫘", banner: "" },
        { name: "《铃兰之剑》", icon: "⚔️", banner: "" },
      ],
      exclusivePlayed: 12,
      exclusiveTotal: 86,
      exclusiveGames: [
        { name: "《心动小镇》", icon: "🏘️" },
        { name: "《铃兰之剑》", icon: "⚔️" },
        { name: "《豆战异世界》", icon: "🫘" },
        { name: "《火炬之光：无限》", icon: "🔥" },
        { name: "《闪耀优俊少女》", icon: "🐴" },
        { name: "《偶像大师》", icon: "🎤" },
        { name: "《卡通农场》", icon: "🌾" },
        { name: "《宝可梦大集结》", icon: "⚡" },
        { name: "《Flash Party》", icon: "💥" },
        { name: "《恋与深空》", icon: "💫" },
        { name: "《猫之城》", icon: "🐱" },
        { name: "《弹壳特攻队》", icon: "🔫" },
      ],
      editorPickPlayed: 23,
      editorPickTotal: 150,
      editorPickGames: [
        { name: "《哈迪斯》", icon: "💀" },
        { name: "《戴森球计划》", icon: "🌐" },
        { name: "《去月球》", icon: "🌙" },
        { name: "《极乐迪斯科》", icon: "🕵️" },
        { name: "《空洞骑士：丝之歌》", icon: "🦋" },
        { name: "《明日方舟》", icon: "🏗️" },
        { name: "《集合啦！动物森友会》", icon: "🏝️" },
        { name: "《塞尔达传说：旷野之息》", icon: "🗡️" },
        { name: "《星露谷物语》", icon: "🌱" },
        { name: "《蔚蓝》", icon: "🏔️" },
        { name: "《Dead Cells》", icon: "☠️" },
        { name: "《风之旅人》", icon: "🧣" },
      ],
      peakTimeSlot: "6PM-12AM",
      lateNightOpenCount: 156,

      nightSlot: "0:00–3:00",
      nightTopGame: "《哈迪斯》",
      nightPlayCount: 128,
      nightRecent1Game: "《哈迪斯》",
      nightRecent1Start: "2026年2月1日 02:13",
      nightRecent2Game: "《戴森球计划》",
      nightRecent2Start: "2026年1月28日 01:26",
      nightRecent3Game: "《去月球》",
      nightRecent3Start: "2026年1月22日 00:48",

      // 社区
      reviewsCount: 38,
      reviewLikesTotal: 560,
      reviewCommentsTotal: 1280,
      reviewAllLowStar: false,
      reviewGameIcons: [
        { name: "《戴森球计划》", icon: "🌐", likes: 128 },
        { name: "《哈迪斯》", icon: "💀", likes: 96 },
        { name: "《去月球》", icon: "🌙", likes: 72 },
        { name: "《极乐迪斯科》", icon: "🕵️", likes: 54 },
        { name: "《心动小镇》", icon: "🏘️", likes: 38 },
        { name: "《空洞骑士：丝之歌》", icon: "🦋", likes: 21 },
        { name: "《明日方舟》", icon: "🏗️", likes: 15 },
      ],
      zuitiCount: 8,
      taptapCriticYears: [2018, 2019, 2020, 2021, 2022],
      totalReviewsOnPlatform: 12000000,
      communityPublished: 156,
      communityCommentsReceived: 1280,
      communityPubPctRank: "72.3%",
      communityTopForums: [
        { game: "《派对之星》", count: 42 },
        { game: "《戴森球计划》", count: 36 },
        { game: "《哈迪斯》", count: 28 },
        { game: "《明日方舟》", count: 21 },
        { game: "《心动小镇》", count: 15 },
      ],
      communityTopEmojis: [
        { emoji: "😂", count: 3260 },
        { emoji: "👍", count: 1840 },
        { emoji: "❤️", count: 960 },
      ],
      postsCount: 56,
      repliesCount: 420,
      forumInteractPlayers: 168,
      topActiveForum1Game: "《派对之星》",
      topActiveForum1Posts: 18,
      topActiveForum2Game: "《戴森球计划》",
      topActiveForum2Posts: 12,
      topActiveForum3Game: "《哈迪斯》",
      topActiveForum3Posts: 9,
      communityLikesGiven: 8600,
      communityLikesReceived: 12400,
      communityLikePctRank: "78.5%",
      communityTopLikedContent: [
        { title: "这才是太空的浪漫，戴森球真香", likes: 246 },
        { title: "哈迪斯全成就攻略分享", likes: 128 },
        { title: "去月球通关后我哭了三天", likes: 96 },
        { title: "空洞骑士丝之歌隐藏结局触发条件", likes: 72 },
        { title: "心动小镇装修灵感合集", likes: 58 },
      ],
      likedPostsCount: 860,
      receivedLikesCount: 1240,
      favoritedPostsCount: 120,
      receivedFavoritesCount: 420,
      topEngagedPost1Title: "我做了一个关卡编辑器小工具，欢迎试试",
      topEngagedPost1Game: "TapMaker",
      topEngagedPost1Likes: 246,
      topEngagedPost1Favs: 88,
      topEngagedPost1Uri: "taptap://post/10001",
      topEngagedPost2Title: "《戴森球计划》最实用的开荒路线",
      topEngagedPost2Game: "《戴森球计划》",
      topEngagedPost2Likes: 198,
      topEngagedPost2Favs: 120,
      topEngagedPost2Uri: "taptap://post/10002",
      topEngagedPost3Title: "深夜推荐：三款剧情党必玩",
      topEngagedPost3Game: "剧情向",
      topEngagedPost3Likes: 156,
      topEngagedPost3Favs: 96,
      topEngagedPost3Uri: "taptap://post/10003",
      likesCount: 1860,
      favoritesCount: 360,
      sharesCount: 72,
      topForum1: "独立游戏",
      topForum2: "PC 游戏",
      topForum3: "TapMaker",
      topLikedPostTitle: "我做了一个关卡编辑器小工具，欢迎试试",
      topLikedPostLikes: 246,
      friendsCount: 268,
      followingCount: 186,
      followersCount: 420,
      closestFriends: [
        { name: "阿星", msgs: 860, firstFollowTime: "2020年3月12日" },
        { name: "咕咕", msgs: 620, firstFollowTime: "2021年7月5日" },
        { name: "小盐", msgs: 410, firstFollowTime: "2019年11月28日" },
        { name: "夜行者", msgs: 256, firstFollowTime: "2022年1月3日" },
        { name: "蓝莓酱", msgs: 180, firstFollowTime: "2023年8月19日" },
      ],
      nightTopAction: "回帖 / 点赞",
      nightSurfDays: 46,
      firstNightSurf: { time: "2019年8月16日 1:23", action: "在《明日方舟》发了一条帖子", content: "凌晨抽到了心心念念的银灰，太开心了必须来发个帖纪念一下！！" },
      nightSurfLogs: [
        { time: "2026年2月2日4点58分", game: "《派对之星》", action: "在《派对之星》发帖子", content: "有人凌晨还在线吗，组队打排位，三缺一速来" },
        { time: "2026年1月29日3点42分", game: "《戴森球计划》", action: "在《戴森球计划》点赞帖子", content: "这个星际物流布局也太优雅了吧" },
        { time: "2026年1月18日2点17分", game: "《哈迪斯》", action: "给《哈迪斯》写评价", content: "第一次通关，手都在抖。这游戏的剧情真的太好哭了，每一次对话都舍不得跳过" },
        { time: "2025年12月31日1点06分", game: "《去月球》", action: "在《去月球》发评论", content: "跨年夜重温去月球，眼泪又没忍住" },
        { time: "2025年11月15日0点33分", game: "《明日方舟》", action: "在《明日方舟》点赞评价", content: "写得太好了，每个角色的分析都很到位" },
      ],

      // 开发者 — 游戏创作
      devGames: [
        { icon: "https://img.tapimg.net/market/images/e2b7259807d30e498a3008cbed6be542.png", name: "派对之星", followers: 12800 },
        { icon: "https://img.tapimg.net/market/images/e2b7259807d30e498a3008cbed6be542.png", name: "沙洛克", followers: 8600 },
        { icon: "https://img.tapimg.net/market/images/e2b7259807d30e498a3008cbed6be542.png", name: "Miao屋", followers: 5200 },
        { icon: "https://img.tapimg.net/market/images/e2b7259807d30e498a3008cbed6be542.png", name: "豆战异世界", followers: 3100 },
        { icon: "https://img.tapimg.net/market/images/e2b7259807d30e498a3008cbed6be542.png", name: "去月球同人", followers: 1800 },
        { icon: "https://img.tapimg.net/market/images/e2b7259807d30e498a3008cbed6be542.png", name: "派对之星2", followers: 980 },
      ],
      gamejamGamesCount: 3,
      tapmakerGamesCount: 2,

      // 游戏预约
      reserveCount: 1280,
      reserveGames: [
        "明日方舟", "原神", "崩坏：星穹铁道", "鸣潮", "绝区零",
        "少女前线2", "尘白禁区", "万龙觉醒", "代号鸢", "火力苏打",
        "猫之城", "白荆回廊", "世界之外", "深空之眼", "星际旅人",
        "幻塔", "逆水寒手游",
      ],
      reserveLaunchedCount: 8,
      reserveLaunchedGames: [
        "明日方舟", "原神", "崩坏：星穹铁道", "鸣潮", "绝区零",
        "少女前线2", "尘白禁区", "万龙觉醒", "代号鸢",
      ],
      taptapReserveTotal: "88,888,888",

      // legacy
      gamesPlayed: 128,
      reviewsHelpful: 42,

    },
  },
};

const BIND_REWARDS = [
  {
    id: "bind_steam",
    title: "绑定 Steam 账号奖励",
    desc: "活动期间绑定后可领取，用于补齐你的回顾与福利。",
    grant: { points: 30, coupons: 0 },
    isReady: (s) => !!s.boundSteam,
  },
  {
    id: "bind_roles",
    title: "绑定更多角色",
    desc: "每绑定 1 个角色即可领奖励，可持续绑定。",
    perRole: { points: 20, coupons: 0 },
  },
];

const GROWTH_GAMES = [
  { id: "g1", title: "从小众到口碑：那些被看见的好游戏", desc: "一些好游戏，值得被更多人看见。", tag: "发现好游戏" },
  { id: "g2", title: "零分成：把更多空间留给创作者", desc: "让创作者把更多精力，留在做游戏这件事上。", tag: "零分成" },
  { id: "g3", title: "公正评分：让评价回到玩家手里", desc: "认真玩、认真评，让口碑自己说话。", tag: "评分公正" },
];

const PLAYTEST_GAMES = [
  { id: "p1", title: "《雾灯之下》", desc: "10 分钟试玩 · 轻解谜 · 叙事氛围", tags: ["轻解谜", "叙事", "氛围感", "10分钟"], heat: 300, points: 25 },
  { id: "p2", title: "《纸片机甲工坊》", desc: "10 分钟试玩 · 组装 · 轻战斗", tags: ["组装", "轻战斗", "机甲", "10分钟"], heat: 275, points: 25 },
  { id: "p3", title: "《夜行列车·7号车厢》", desc: "10 分钟试玩 · 推理 · 多结局", tags: ["推理", "多结局", "悬疑", "10分钟"], heat: 250, points: 30 },
  { id: "p4", title: "《像素海盗电台》", desc: "10 分钟试玩 · 节奏 · 轻 Roguelike", tags: ["节奏", "Roguelike", "像素", "10分钟"], heat: 225, points: 25 },
  { id: "p5", title: "《月面快递》", desc: "10 分钟试玩 · 经营 · 轻策略", tags: ["经营", "轻策略", "治愈", "10分钟"], heat: 200, points: 20 },
  { id: "p6", title: "《玻璃花园》", desc: "10 分钟试玩 · 叙事 · 互动选择", tags: ["叙事", "互动选择", "情感", "10分钟"], heat: 175, points: 20 },
  { id: "p7", title: "《重力回廊》", desc: "10 分钟试玩 · 动作 · 平台跳跃", tags: ["动作", "平台跳跃", "挑战", "10分钟"], heat: 150, points: 30 },
  { id: "p8", title: "《纸上迷宫》", desc: "10 分钟试玩 · 解谜 · 手绘风", tags: ["解谜", "手绘", "烧脑", "10分钟"], heat: 125, points: 25 },
  { id: "p9", title: "《喵喵合唱团》", desc: "10 分钟试玩 · 音游 · 合作", tags: ["音游", "合作", "可爱", "10分钟"], heat: 100, points: 30 },
];

const MUTUAL_GAMES = [
  {
    id: "m1",
    title: "Phigros",
    desc: "全球千万下载的免费音游，指尖上的极致节奏体验",
    icon: "🎵",
    hint: "一款让指尖跳舞的游戏",
    layerColor: "#6C5CE7",
    points: 30,
    url: "https://www.taptap.cn/app/165287?os=android",
    tags: ["音游", "节奏", "下落式"],
    score: 9.6,
    tapExclusive: true,
    postUrl: "https://www.taptap.cn/moment/754506735720334977",
    story: [
      { emoji: "🎹", text: "2019 年，一群热爱音乐的年轻人做了一款不一样的音游。没有内购，没有体力，只有纯粹的节奏与判定。" },
      { emoji: "📱", text: "Phigros 选择在 TapTap 首发上线。社区里第一批玩家的热情评价，让这款小众音游开始被更多人看见。" },
      { emoji: "🌍", text: "从 TapTap 社区出发，Phigros 的口碑一路发酵，最终走向全球，累计下载突破千万。" },
      { emoji: "💜", text: "TapTap 是许多音游玩家第一次遇见 Phigros 的地方。每一次版本更新，社区都会迎来一场指尖上的狂欢。" },
    ],
  },
  {
    id: "m2",
    title: "香肠派对",
    desc: "欢乐吃鸡大乱斗，和好友一起开黑的快乐回来了",
    icon: "🌭",
    hint: "和朋友一起，笑着吃鸡",
    layerColor: "#FDCB6E",
    points: 30,
    url: "https://www.taptap.cn/app/58881?os=pc",
    tags: ["射击", "吃鸡", "多人"],
    score: 8.8,
    tapExclusive: false,
    postUrl: "https://www.taptap.cn/moment/756862887149965161",
    story: [
      { emoji: "🎉", text: "当吃鸡遇上搞笑画风，香肠派对证明了——射击游戏也可以让人笑到肚子疼。" },
      { emoji: "👫", text: "在 TapTap 社区里，玩家们自发组队、分享搞笑时刻，让香肠派对成为好友开黑的首选游戏。" },
      { emoji: "🔥", text: "社区氛围带来了超高人气。无数欢乐的游戏片段在 TapTap 上传播，吸引了一波又一波新玩家加入。" },
      { emoji: "🌭", text: "从一款休闲小游戏到全民开黑现象，TapTap 见证了香肠派对带来的无数快乐时光。" },
    ],
  },
  {
    id: "m3",
    title: "心动小镇",
    desc: "治愈系模拟经营，在小镇里过上向往的慢生活",
    icon: "🏡",
    hint: "一个让人想住进去的小世界",
    layerColor: "#00B894",
    points: 30,
    url: "https://www.taptap.cn/app/45213?os=pc",
    tags: ["治愈", "模拟经营", "多人"],
    score: 8.6,
    tapExclusive: true,
    postUrl: "https://www.taptap.cn/moment/755000000000000000",
    story: [
      { emoji: "🌿", text: "在快节奏的世界里，心动小镇是一片温柔的慢生活净土。种田、钓鱼、装扮小屋，每一天都值得期待。" },
      { emoji: "✨", text: "作为 TapTap 独占游戏，心动小镇从立项之初就与 TapTap 社区紧密相连。玩家的每一条建议都在塑造这个小世界。" },
      { emoji: "📸", text: "社区里满是玩家分享的小镇日常——精心布置的小屋、和朋友的合影，组成了最温暖的游戏社区之一。" },
      { emoji: "🏡", text: "每一次更新都是一场小小的惊喜。心动小镇和 TapTap 一起，为玩家守护着这份治愈的归属感。" },
    ],
  },
  {
    id: "m4",
    title: "鬼谷八荒",
    desc: "修仙开放世界，书写属于你自己的仙侠传说",
    icon: "⛩️",
    hint: "御剑飞行，踏入仙途",
    layerColor: "#636E72",
    points: 40,
    url: "https://www.taptap.cn/app/700558?os=android",
    tags: ["修仙", "开放世界", "单机"],
    score: 8.2,
    tapExclusive: false,
    postUrl: "https://www.taptap.cn/moment/755000000000000001",
    story: [
      { emoji: "⚔️", text: "修仙题材遇上开放世界，鬼谷八荒让每位玩家都能书写属于自己的仙侠传说。" },
      { emoji: "📣", text: "游戏还在预约阶段，TapTap 社区的修仙爱好者就开始了热烈讨论。从玩法猜测到剧情分析，期待值一路飙升。" },
      { emoji: "🎮", text: "正式上线后，社区内涌现出大量攻略、流派讨论和剧情解读，鬼谷八荒成为 TapTap 上长期热议的作品。" },
      { emoji: "⛩️", text: "从预约到正式上线，再到每一次版本迭代，TapTap 见证了鬼谷八荒的成长，也见证了修仙玩家社区的壮大。" },
    ],
  },
];

const SHOP_ITEMS = {
  frames: [
    { id: "f_ten_years", title: "头像框：TapTap十周年", cost: 120, icon: "🟩" },
  ],
  badges: [
    { id: "b_maker", title: "徽章：TapTap十周年", cost: 200, icon: "🛠️" },
  ],
  lottery: {
    id: "lot_points",
    title: "每日抽点券",
    cost: 30,
    prize: { kind: "coupon", value: 10 },
  },
};

const MEM_CARD_COLORS = [
  // Background themes (kept name `MEM_CARD_COLORS` for storage compatibility)
  { id: "mc_cream", label: "奶油", bg: "radial-gradient(520px 260px at 20% 10%, rgba(255,255,255,.32), transparent 60%), repeating-linear-gradient(135deg, rgba(15,23,42,.04) 0 10px, rgba(15,23,42,0) 10px 20px), #F7E3C5", panel: "#FFF7EB", accent: "#F2B46B" },
  { id: "mc_pink", label: "樱桃", bg: "radial-gradient(520px 260px at 70% 0%, rgba(255,255,255,.30), transparent 62%), repeating-linear-gradient(45deg, rgba(15,23,42,.04) 0 8px, rgba(15,23,42,0) 8px 16px), #F6C4C8", panel: "#FFECEF", accent: "#E97D87" },
  { id: "mc_mint", label: "薄荷", bg: "radial-gradient(520px 260px at 30% 0%, rgba(255,255,255,.34), transparent 62%), radial-gradient(circle at 30% 25%, rgba(0,184,148,.10) 0 2px, transparent 3px) 0 0/18px 18px, #C7F0E4", panel: "#EFFFFA", accent: "#42C6A6" },
  { id: "mc_sky", label: "晴空", bg: "radial-gradient(520px 260px at 80% 10%, rgba(255,255,255,.34), transparent 60%), repeating-linear-gradient(0deg, rgba(15,23,42,.035) 0 1px, rgba(15,23,42,0) 1px 14px), #CFE5FF", panel: "#EDF5FF", accent: "#5A94FF" },
  { id: "mc_lav", label: "薰衣草", bg: "radial-gradient(520px 260px at 60% 0%, rgba(255,255,255,.34), transparent 62%), repeating-linear-gradient(90deg, rgba(15,23,42,.03) 0 1px, rgba(15,23,42,0) 1px 14px), #E3D7FF", panel: "#F4F0FF", accent: "#8B6BFF" },
  { id: "mc_sand", label: "沙丘", bg: "radial-gradient(520px 260px at 20% 0%, rgba(255,255,255,.32), transparent 62%), radial-gradient(circle at 20% 30%, rgba(15,23,42,.035) 0 2px, transparent 3px) 0 0/16px 16px, #F2D9B8", panel: "#FFF2E1", accent: "#C98F4C" },
];

const MEM_STICKERS = [
  { id: "ms_star", icon: "⭐", label: "星星" },
  { id: "ms_heart", icon: "💛", label: "爱心" },
  { id: "ms_bulb", icon: "💡", label: "灵感" },
  { id: "ms_crown", icon: "👑", label: "王冠" },
  { id: "ms_note", icon: "📝", label: "评价" },
  { id: "ms_cat", icon: "🐾", label: "猫爪" },
  { id: "ms_trophy", icon: "🏆", label: "奖杯" },
  { id: "ms_cloud", icon: "☁️", label: "云朵" },
];

const MEM_AVATARS = [
  { id: "ma_me", icon: "👤", label: "我的头像", isProfileAvatar: true },
  { id: "ma_bunny", icon: "🐰", label: "兔帽" },
  { id: "ma_cat", icon: "🐱", label: "猫猫" },
  { id: "ma_robot", icon: "🤖", label: "机甲" },
  { id: "ma_fox", icon: "🦊", label: "小狐" },
  { id: "ma_panda", icon: "🐼", label: "熊猫" },
  { id: "ma_penguin", icon: "🐧", label: "企鹅" },
];

/** 渲染角色头像内容：ma_me 显示白底方块 + "TapTap头像"文字，其他显示 emoji */
function avatarDisplayHtml(avatar, nickname, { size = "normal" } = {}) {
  if (avatar.isProfileAvatar) {
    const cls = size === "small" ? "mem-avatar--profile mem-avatar--profile-sm" : "mem-avatar--profile";
    return `<span class="${cls}" title="我的头像"><span class="mem-avatar--profile__text">TapTap<br>头像</span></span>`;
  }
  return escapeHtml(avatar.icon);
}

const MEM_SHOP = {
  frame: SHOP_ITEMS.frames[0],
  badge: SHOP_ITEMS.badges[0],
  unlocks: [
    { id: "u_colors_pack", title: "纪念卡配色包", desc: "解锁更多卡片颜色", cost: 80, kind: "colors", unlockIds: ["mc_pink", "mc_mint", "mc_sky", "mc_lav", "mc_sand"] },
    { id: "u_stickers_pack", title: "纪念卡贴纸包", desc: "解锁更多小贴纸", cost: 80, kind: "stickers", unlockIds: ["ms_heart", "ms_bulb", "ms_crown", "ms_note", "ms_cat", "ms_trophy", "ms_cloud"] },
    { id: "u_avatars_pack", title: "纪念卡角色包", desc: "解锁更多角色形象", cost: 100, kind: "avatars", unlockIds: ["ma_cat", "ma_robot", "ma_fox", "ma_panda", "ma_penguin"] },
  ],
  lottery: { cost: SHOP_ITEMS.lottery.cost, prize: SHOP_ITEMS.lottery.prize.value },
};

const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => Array.from(document.querySelectorAll(sel));

function loadState() {
  /** @type {PhaseState} */
  const fallback = {
    userPreset: DEFAULT_PRESET_KEY,
    boundData: false,
    boundSteam: false,
    steamFavGame: "ELDEN RING",
    steamFavGameIcon: "https://img.tapimg.net/market/images/e2b7259807d30e498a3008cbed6be542.png",
    steamAccountValue: 12680.5,
    steamGamesCount: 286,
    steamPlayHours: 4236,
    boundRolesCount: 0,
    claimedRoleRewardsCount: 0,
    boundRoleCards: [],
    allRolesBound: false,
    enteredAt: 0,
    careerSnapshotPreset: DEFAULT_PRESET_KEY,
    careerSnapshot: null,
    profile: {
      nickname: "我是昵称",
      id: "88888888",
      identity: "聚光灯GameJam开发者",
      bio: "我是个人主页的个人介绍我是个人主页的个人介绍",
    },
    points: 0,
    walletCoupons: 0,
    claimedRewardIds: [],
    inventory: { frames: [], badges: [] },
    equipped: {},
    playtest: { completed: [], feedback: {}, claimed: [] },
    memorial: {
      tab: "color",
      // `colorId` now represents background theme (with patterns)
      colorId: "mc_cream",
      // Multi-sticker placement
      stickers: [{ id: "ms_star", x: 82, y: 18, s: 1, r: 0 }],
      activeStickerIdx: 0,
      // Legacy field (kept for migration)
      stickerId: "ms_star",
      avatarId: "ma_me",
    },
    memorialUnlocks: { colors: ["mc_cream"], stickers: ["ms_star"], avatars: ["ma_me", "ma_bunny"] },
    daily: { lotteryDayKey: "" },
    mutualMessages: {
      m1: [
        { text: "音游党狂喜，谱面真的太有创意了", ts: Date.now() - 86400000 * 3, likes: 128 },
        { text: "从 TapTap 入坑，陪伴很多个夜晚", ts: Date.now() - 86400000 * 6, likes: 86 },
      ],
      m2: [
        { text: "和好友一起开黑的青春回来了", ts: Date.now() - 86400000 * 2, likes: 96 },
        { text: "肠肠快乐，TapTap 版本更新也很稳", ts: Date.now() - 86400000 * 5, likes: 72 },
      ],
      m3: [
        { text: "小镇太治愈了，冬日活动氛围满分", ts: Date.now() - 86400000 * 1, likes: 88 },
        { text: "感谢 TapTap 让我发现这款慢节奏宝藏", ts: Date.now() - 86400000 * 4, likes: 64 },
      ],
      // Simulate "no hot comments yet" for one game
      m4: [],
    },
    // Has the opening gate been passed at least once?
    // Used to ensure "re-open after refresh" goes straight to the hall unless explicitly reset.
    loggedIn: true,
    entryGateDone: false,
    firstRecapDone: false,
    firstRecapFlow: { phase: "snap", idx: 0 },
    firstRecapRun: { startPoints: 0, startCoupons: 0, doneModalShown: false },
    capsule: { revealed: [], claimed: [] },
  };
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return fallback;
    const parsed = JSON.parse(raw);
    const merged = { ...fallback, ...parsed };
    // Deep-merge playtest so new fields (e.g. claimed[]) stay compatible with old saved state.
    merged.playtest = { ...fallback.playtest, ...(parsed?.playtest || {}) };
    if (!Array.isArray(merged.playtest.completed)) merged.playtest.completed = [];
    if (!merged.playtest.feedback || typeof merged.playtest.feedback !== "object") merged.playtest.feedback = {};
    if (!Array.isArray(merged.playtest.claimed)) merged.playtest.claimed = [];

    merged.profile = { ...fallback.profile, ...(parsed?.profile || {}) };
    if (!merged.profile || typeof merged.profile !== "object") merged.profile = { ...fallback.profile };
    if (!String(merged.profile.nickname || "").trim()) merged.profile.nickname = fallback.profile.nickname;
    if (!String(merged.profile.id || "").trim()) merged.profile.id = fallback.profile.id;
    if (merged.profile.identity == null) merged.profile.identity = fallback.profile.identity || "";
    if (merged.profile.bio == null) merged.profile.bio = fallback.profile.bio || "";
    // Allow empty identity/bio (means "do not display")

    merged.memorial = { ...fallback.memorial, ...(parsed?.memorial || {}) };
    if (!merged.memorial || typeof merged.memorial !== "object") merged.memorial = { ...fallback.memorial };
    if (!["color", "sticker", "avatar"].includes(String(merged.memorial.tab || ""))) merged.memorial.tab = fallback.memorial.tab;
    if (!String(merged.memorial.colorId || "").trim()) merged.memorial.colorId = fallback.memorial.colorId;
    if (!String(merged.memorial.avatarId || "").trim()) merged.memorial.avatarId = fallback.memorial.avatarId;

    // Stickers: migrate legacy single `stickerId` into `stickers[]`
    const legacyStickerId = String((parsed?.memorial || {})?.stickerId || merged.memorial.stickerId || "").trim();
    if (!Array.isArray(merged.memorial.stickers)) merged.memorial.stickers = [];
    merged.memorial.stickers = merged.memorial.stickers
      .filter((x) => x && typeof x === "object")
      .map((x) => ({
        id: String(x.id || "").trim(),
        x: Math.max(0, Math.min(100, Number(x.x ?? 50))),
        y: Math.max(0, Math.min(100, Number(x.y ?? 22))),
        s: Math.max(0.6, Math.min(1.8, Number(x.s ?? 1))),
        r: Math.max(-45, Math.min(45, Number(x.r ?? 0))),
      }))
      .filter((x) => x.id);
    if (!merged.memorial.stickers.length && legacyStickerId) {
      merged.memorial.stickers = [{ id: legacyStickerId, x: 82, y: 18, s: 1, r: 0 }];
    }
    merged.memorial.activeStickerIdx = Math.max(0, Number(merged.memorial.activeStickerIdx ?? 0));
    if (merged.memorial.activeStickerIdx >= merged.memorial.stickers.length) merged.memorial.activeStickerIdx = Math.max(0, merged.memorial.stickers.length - 1);
    // Keep legacy for older code paths/debug UI
    if (!String(merged.memorial.stickerId || "").trim()) merged.memorial.stickerId = legacyStickerId || fallback.memorial.stickerId;

    merged.memorialUnlocks = { ...fallback.memorialUnlocks, ...(parsed?.memorialUnlocks || {}) };
    if (!merged.memorialUnlocks || typeof merged.memorialUnlocks !== "object") merged.memorialUnlocks = { ...fallback.memorialUnlocks };
    if (!Array.isArray(merged.memorialUnlocks.colors)) merged.memorialUnlocks.colors = [...fallback.memorialUnlocks.colors];
    if (!Array.isArray(merged.memorialUnlocks.stickers)) merged.memorialUnlocks.stickers = [...fallback.memorialUnlocks.stickers];
    if (!Array.isArray(merged.memorialUnlocks.avatars)) merged.memorialUnlocks.avatars = [...fallback.memorialUnlocks.avatars];
    // 确保"我的头像"始终解锁
    if (!merged.memorialUnlocks.avatars.includes("ma_me")) merged.memorialUnlocks.avatars.unshift("ma_me");

    merged.daily = { ...fallback.daily, ...(parsed?.daily || {}) };
    if (!merged.daily || typeof merged.daily !== "object") merged.daily = { ...fallback.daily };
    if (!String(merged.daily.lotteryDayKey || "").trim()) merged.daily.lotteryDayKey = "";

    if (typeof merged.loggedIn !== "boolean") merged.loggedIn = fallback.loggedIn;
    merged.entryGateDone = !!merged.entryGateDone;
    merged.firstRecapDone = !!merged.firstRecapDone;
    // Keep a small cursor so the ritual page can continue after reload.
    if (!merged.firstRecapFlow || typeof merged.firstRecapFlow !== "object") merged.firstRecapFlow = { ...fallback.firstRecapFlow };
    const ph = String(merged.firstRecapFlow.phase || "");
    merged.firstRecapFlow.phase = ph === "bind" || ph === "done" ? ph : "snap";
    merged.firstRecapFlow.idx = Math.max(0, Number(merged.firstRecapFlow.idx || 0));

    merged.firstRecapRun = { ...fallback.firstRecapRun, ...(parsed?.firstRecapRun || {}) };
    if (!merged.firstRecapRun || typeof merged.firstRecapRun !== "object") merged.firstRecapRun = { ...fallback.firstRecapRun };
    merged.firstRecapRun.startPoints = Math.max(0, Number(merged.firstRecapRun.startPoints || 0));
    merged.firstRecapRun.startCoupons = Math.max(0, Number(merged.firstRecapRun.startCoupons || 0));
    merged.firstRecapRun.doneModalShown = !!merged.firstRecapRun.doneModalShown;

    // 发现好游戏状态
    if (!merged.capsule || typeof merged.capsule !== "object") merged.capsule = { ...fallback.capsule };
    if (!Array.isArray(merged.capsule.revealed)) merged.capsule.revealed = [];
    if (!Array.isArray(merged.capsule.claimed)) merged.capsule.claimed = [];
    // 兼容旧字段
    if (Array.isArray(merged.capsule.revealedLayers)) {
      merged.capsule.revealed = merged.capsule.revealedLayers.map((i) => MUTUAL_GAMES[i]?.id).filter(Boolean);
      merged.capsule.claimed = [...merged.capsule.revealed];
      delete merged.capsule.revealedLayers;
    }

    return merged;
  } catch {
    return fallback;
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function resetState() {
  localStorage.removeItem(STORAGE_KEY);
  state = loadState();
  navigate("home");
  toast("已重置为默认演示状态");
  render();
}

function recapDataForState(s) {
  const base = PRESETS[s.userPreset]?.recap || PRESETS[DEFAULT_PRESET_KEY].recap;
  // If bound, we “enrich” 1-2 fields (fake data for preview).
  if (!s.boundData) return base;
  return {
    ...base,
    daysActive: (base.daysActive || 0) + 120,
    gamesPlayed: (base.gamesPlayed || 0) + 20,
    reviewsHelpful: (base.reviewsHelpful || 0) + 13,
    reviewsCount: (base.reviewsCount || 0) + 6,
    reviewLikesTotal: (base.reviewLikesTotal || 0) + 120,
    likesCount: (base.likesCount || 0) + 260,
  };
}

function clamp(n, a, b) {
  return Math.max(a, Math.min(b, n));
}

function calcSnapshotGrants(recap) {
  const fixed = (points, coupons = 0) => ({ points, coupons });
  const daysActive = Number(recap?.daysActive || 0);
  const gamesPlayed = Number(recap?.gamesPlayed || 0);
  const reviewsHelpful = Number(recap?.reviewsHelpful || 0);
  const spendTotal = Number(recap?.spendTotal || 0);

  // Backward compatibility (older ids)
  const legacy = {
    snap_daysActive: { points: clamp(Math.floor(daysActive / 10) * 10, 10, 500), coupons: 0 },
    // Example: 5 款 -> 50 积分 + 5 点券
    snap_gamesPlayed: { points: clamp(gamesPlayed * 10, 10, 800), coupons: clamp(Math.floor(gamesPlayed / 5) * 5, 0, 50) },
    snap_reviewsHelpful: { points: clamp(reviewsHelpful * 5, 10, 800), coupons: 0 },
    snap_genre: fixed(10, 0),
  };

  return {
    ...legacy,

    // 基础
    snap_reg_active: fixed(10),
    snap_time_habit: fixed(10),
    snap_reserve: fixed(10),
    snap_streak: fixed(10),
    // TapTap 消费：积分按原规则，点券=消费金额的10%（向下取整）
    snap_spend: fixed(clamp(Math.floor(spendTotal / 100) * 10, 10, 300), Math.max(0, Math.floor(spendTotal * 0.1))),

    // 玩游戏
    snap_playtime: fixed(20),
    snap_top3games: fixed(20, 5),
    snap_yearbook: fixed(15),
    snap_profile: fixed(15),
    snap_beloved: fixed(15),
    snap_beloved_top10: fixed(10),
    snap_taplist: fixed(10),

    // 社区
    snap_review_voice: fixed(20),
    snap_community_likes: fixed(10),
    snap_community_pub: fixed(10),
    snap_friend_msgs: fixed(10),
    snap_night_community: fixed(10),
    snap_badges: fixed(10),

    // 开发者（合并）
    snap_dev_create: fixed(20),
  };
}

function resetCareerSnapshot(s) {
  s.enteredAt = 0;
  s.careerSnapshotPreset = s.userPreset;
  s.careerSnapshot = null;
  // Remove claimed snapshot rewards so preset switch stays consistent in demo
  s.claimedRewardIds = (s.claimedRewardIds || []).filter((id) => !String(id).startsWith("snap_"));
}

function ensureCareerSnapshot(s) {
  if (s.careerSnapshot && s.careerSnapshotPreset === s.userPreset) return;
  if (!s.enteredAt) s.enteredAt = Date.now();
  s.careerSnapshotPreset = s.userPreset;
  const recap = recapDataForState(s);
  s.careerSnapshot = {
    recap: { ...recap },
    grants: calcSnapshotGrants(recap),
  };
}

function addPoints(s, delta) {
  s.points = Math.max(0, (s.points || 0) + delta);
}

function addCoupons(s, delta) {
  s.walletCoupons = Math.max(0, (s.walletCoupons || 0) + delta);
}

const SNAP_REWARD_ALIASES = {
  // merged snapshot cards
  snap_review_voice: ["snap_reviews_count", "snap_review_likes_total", "snap_top_review", "snap_zuiti"],
};

function snapshotClaimGrant(s, rewardId) {
  const grants = s.careerSnapshot?.grants;
  const base = grants?.[rewardId];
  // 如果没有配置奖励（空状态卡片），返回保底10积分
  if (!base) return { points: 10, coupons: 0 };
  const aliases = SNAP_REWARD_ALIASES[rewardId];
  if (!aliases?.length) return base;

  // If already claimed by new id, no remaining grant
  if ((s.claimedRewardIds || []).includes(rewardId)) return { points: 0, coupons: 0 };

  let claimedPoints = 0;
  let claimedCoupons = 0;
  for (const a of aliases) {
    if ((s.claimedRewardIds || []).includes(a)) {
      const g = grants?.[a];
      claimedPoints += Number(g?.points || 0);
      claimedCoupons += Number(g?.coupons || 0);
    }
  }
  return {
    points: Math.max(0, Number(base.points || 0) - claimedPoints),
    coupons: Math.max(0, Number(base.coupons || 0) - claimedCoupons),
  };
}

function hasClaimed(s, rewardId) {
  if ((s.claimedRewardIds || []).includes(rewardId)) return true;
  const aliases = SNAP_REWARD_ALIASES[rewardId];
  if (aliases?.length) return aliases.every((a) => (s.claimedRewardIds || []).includes(a));
  return false;
}

function markClaimed(s, rewardId) {
  if (!s.claimedRewardIds.includes(rewardId)) s.claimedRewardIds.push(rewardId);
}

function toast(msg) {
  const el = $("#toast");
  el.textContent = msg;
  el.classList.remove("hidden");
  clearTimeout(toast._t);
  toast._t = setTimeout(() => el.classList.add("hidden"), 2200);
}

// When opening a modal from within another modal (single modal container),
// we can register an "after close" callback to restore the previous view.
const _modalAfterClose = [];

function openModal({ title, bodyHtml, footerHtml, hideClose = false, lockClose = false, variant = "" }) {
  // 清理 header 中之前注入的额外按钮（保留 #modalTitle 和 #modalClose）
  const header = document.querySelector("#modal .modal__header");
  if (header) {
    Array.from(header.children).forEach((el) => {
      if (el.id !== "modalTitle" && el.id !== "modalClose") el.remove();
    });
  }
  $("#modalTitle").textContent = title;
  $("#modalBody").innerHTML = bodyHtml || "";
  $("#modalFooter").innerHTML = footerHtml || "";
  const closeBtn = $("#modalClose");
  closeBtn?.classList.toggle("hidden", !!hideClose);
  closeBtn?.setAttribute("aria-hidden", hideClose ? "true" : "false");
  const modal = $("#modal");
  modal?.setAttribute("data-lock-close", lockClose ? "1" : "0");
  modal?.setAttribute("data-variant", String(variant || ""));
  $("#modalBackdrop").classList.remove("hidden");
  modal?.classList.remove("hidden");
  $("#modalBackdrop").setAttribute("aria-hidden", "false");
}

function closeModal() {
  $("#modalBackdrop").classList.add("hidden");
  const modal = $("#modal");
  modal?.classList.add("hidden");
  $("#modalBackdrop").setAttribute("aria-hidden", "true");
  const closeBtn = $("#modalClose");
  closeBtn?.classList.remove("hidden");
  closeBtn?.setAttribute("aria-hidden", "false");
  modal?.setAttribute("data-lock-close", "0");
  modal?.setAttribute("data-variant", "");

  // Restore previous modal view if needed.
  const cb = _modalAfterClose.pop();
  if (typeof cb === "function") {
    try {
      cb();
    } catch {
      // ignore
    }
  }
}

// ── 登录弹窗 ──
function openLoginModal(onSuccess) {
  openModal({
    title: "登录 TapTap 账号",
    bodyHtml: `
      <div class="login-modal">
        <div class="login-modal__icon">👤</div>
        <p class="login-modal__desc">登录后即可参与十周年活动，查看你的专属回顾数据</p>
        <div class="login-modal__form">
          <input class="login-modal__input" id="loginPhone" type="text" placeholder="请输入手机号 / 邮箱" autocomplete="off" />
          <input class="login-modal__input" id="loginCode" type="text" placeholder="请输入验证码" autocomplete="off" />
          <button class="btn btn--brand login-modal__submit" id="btnLoginSubmit" type="button">登录</button>
        </div>
        <p class="login-modal__tip">Demo 演示：点击登录即可模拟登录成功</p>
      </div>
    `,
  });

  $("#btnLoginSubmit")?.addEventListener("click", () => {
    state.loggedIn = true;
    saveState();
    closeModal();
    toast("登录成功");
    if (typeof onSuccess === "function") onSuccess();
  });
}

function openLotteryResultModal({ hit, add, cost } = {}) {
  const got = Math.max(0, Number(add || 0));
  const spent = Math.max(0, Number(cost || 0));
  const wallet = Math.max(0, Number(state.walletCoupons || 0));
  const body = `
    <div class="small" style="line-height:1.6">
      <div class="hint">
        <b>${hit ? `恭喜你：点券 +${fmt(got || 1)}` : "很遗憾：没抽到点券"}</b>
        ${spent ? `<div class="muted small" style="margin-top:6px">本次消耗 <b>${fmt(spent)}</b> 积分</div>` : ""}
      </div>
      <div class="divider"></div>
      <div class="muted small">当前点券：<b>${fmt(wallet)}</b></div>
      <div class="muted small" style="margin-top:6px">点券可在「我的钱包」中查看与使用。</div>
    </div>
  `;
  openModal({
    title: "抽奖结果",
    bodyHtml: body,
    footerHtml: `<button class="btn" id="btnLotteryResultWallet" type="button">查看钱包</button><button class="btn btn--brand" id="btnLotteryResultOk" type="button">知道了</button>`,
  });
  $("#btnLotteryResultOk")?.addEventListener("click", closeModal);
  $("#btnLotteryResultWallet")?.addEventListener("click", openWalletModal);
}

let _modalDismissWired = false;
function wireModalDismiss() {
  if (_modalDismissWired) return;
  _modalDismissWired = true;

  const canCloseModal = () => $("#modal")?.getAttribute("data-lock-close") !== "1";
  $("#modalClose")?.addEventListener("click", () => {
    if (!canCloseModal()) return;
    closeModal();
  });
  $("#modalBackdrop")?.addEventListener("click", () => {
    if (!canCloseModal()) return;
    closeModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      if (!canCloseModal()) return;
      closeModal();
    }
  });
}

function openRewardModal({ title = "领取成功", grant, subtitle = "", onConfirm }) {
  const body = `
    <div class="small" style="line-height:1.55">
      ${subtitle ? `<div class="muted small" style="margin-top:6px">${subtitle}</div>` : ""}
      ${subtitle ? `<div class="divider"></div>` : ""}
      <div>${grantPillsHtml(grant)}</div>
    </div>
  `;
  const footer = `<button class="btn btn--brand" id="btnCloseReward">知道了</button>`;
  openModal({ title, bodyHtml: body, footerHtml: footer, hideClose: true, lockClose: true });
  $("#btnCloseReward")?.addEventListener("click", () => {
    closeModal();
    onConfirm?.();
  });
}

function rectCenter(r) {
  return { x: r.left + r.width / 2, y: r.top + r.height / 2 };
}

function pulsePill(el) {
  if (!el) return;
  el.classList.remove("pill--pulse");
  // Force reflow so repeated pulses work
  void el.offsetHeight;
  el.classList.add("pill--pulse");
  setTimeout(() => el.classList.remove("pill--pulse"), 560);
}

function flyChip({ label, start, end, kind }) {
  const prefersReduce = !!window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
  const el = document.createElement("div");
  el.className = `fly-reward ${kind === "coupon" ? "fly-reward--coupon" : ""}`;
  el.textContent = label;
  el.style.transform = `translate(${start.x}px, ${start.y}px) translate(-50%, -50%) scale(1)`;
  document.body.appendChild(el);

  if (prefersReduce) {
    // Minimal: no animation, short delay then remove.
    setTimeout(() => el.remove(), 180);
    return Promise.resolve();
  }

  // Stronger, slower arc flight (Web Animations if available)
  const dx = end.x - start.x;
  const dy = end.y - start.y;
  const lift = Math.max(70, Math.min(130, Math.round(Math.hypot(dx, dy) * 0.22)));
  const mid = { x: start.x + dx * 0.55, y: start.y + dy * 0.55 - lift };
  const dur = 1050;
  // Resolve earlier than full fade-out so card switching can start sooner.
  // The chip will still continue fading out after "arrival".
  const arriveOffset = 0.86;
  const arriveMs = Math.max(0, Math.min(dur, Math.round(dur * arriveOffset)));

  if (el.animate) {
    const anim = el.animate(
      [
        { transform: `translate(${start.x}px, ${start.y}px) translate(-50%, -50%) scale(1)`, opacity: 1, offset: 0 },
        { transform: `translate(${start.x}px, ${start.y}px) translate(-50%, -50%) scale(1.18)`, opacity: 1, offset: 0.16 },
        { transform: `translate(${mid.x}px, ${mid.y}px) translate(-50%, -50%) scale(1.08)`, opacity: 0.96, offset: 0.62 },
        // Arrive at target earlier, then keep fading out.
        { transform: `translate(${end.x}px, ${end.y}px) translate(-50%, -50%) scale(.96)`, opacity: 0.90, offset: arriveOffset },
        { transform: `translate(${end.x}px, ${end.y}px) translate(-50%, -50%) scale(.88)`, opacity: 0.06, offset: 1 },
      ],
      { duration: dur, easing: "cubic-bezier(.16,.92,.16,1)", fill: "forwards" },
    );

    return new Promise((resolve) => {
      let done = false;
      const resolveOnce = () => {
        if (done) return;
        done = true;
        resolve();
      };

      setTimeout(resolveOnce, arriveMs);
      anim.finished
        .catch(() => {})
        .then(() => {
          el.remove();
          // If animation ended early, still resolve.
          resolveOnce();
        });
    });
  }

  // Fallback: CSS transition (still slower than before)
  return new Promise((resolve) => {
    requestAnimationFrame(() => {
      el.classList.add("fly-reward--anim");
      el.style.transform = `translate(${mid.x}px, ${mid.y}px) translate(-50%, -50%) scale(1.08)`;
      el.style.opacity = "0.96";
      setTimeout(() => {
        el.style.transform = `translate(${end.x}px, ${end.y}px) translate(-50%, -50%) scale(.88)`;
        el.style.opacity = "0.06";
      }, 240);
      let done = false;
      const resolveOnce = () => {
        if (done) return;
        done = true;
        resolve();
      };
      // Resolve at "arrival" instead of waiting for full fade-out.
      setTimeout(resolveOnce, arriveMs);
      setTimeout(() => {
        el.remove();
        resolveOnce();
      }, dur + 80);
    });
  });
}

async function flyGrantToSticky({ fromRect, grant }) {
  try {
    const start = rectCenter(fromRect);
    const tasks = [];
    if (Number(grant?.points || 0) > 0) {
      const target = document.getElementById("pillPoints");
      if (target) {
        const end = rectCenter(target.getBoundingClientRect());
        tasks.push(
          flyChip({ label: `+${fmt(Number(grant.points || 0))} 积分`, start, end, kind: "points" }).then(() => pulsePill(target)),
        );
      }
    }
    if (Number(grant?.coupons || grant?.walletCoupons || grant?.coupon || 0) > 0) {
      const c = Number(grant?.coupons || 0);
      const target = document.getElementById("pillCoupons");
      if (target) {
        const end = rectCenter(target.getBoundingClientRect());
        tasks.push(flyChip({ label: `+${fmt(c)} 点券`, start, end, kind: "coupon" }).then(() => pulsePill(target)));
      }
    }
    if (!tasks.length) return;
    await Promise.all(tasks);
  } catch {
    // ignore
  }
}

function scrollTrackToCard(track, card, behavior = "auto") {
  if (!track || !card) return;
  if (behavior === "smooth") {
    card.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    return;
  }
  // Instant scroll: avoid CSS scroll-behavior smooth / scroll-snap animation
  const prevBehavior = track.style.scrollBehavior;
  const prevSnap = track.style.scrollSnapType;
  track.style.scrollBehavior = "auto";
  track.style.scrollSnapType = "none";

  const current = track.scrollLeft;
  // Use layout metrics (offsetLeft/offsetWidth) so transforms/animations don't affect the target.
  const cardCenter = (card.offsetLeft || 0) + (card.offsetWidth || 0) / 2;
  const targetLeft = Math.max(0, Math.round(cardCenter - track.clientWidth / 2));
  track.scrollLeft = targetLeft;

  requestAnimationFrame(() => {
    track.style.scrollBehavior = prevBehavior;
    track.style.scrollSnapType = prevSnap;
  });
}

function animateTrackToCard(track, card, { durationMs = 520 } = {}) {
  if (!track || !card) return;
  const prevBehavior = track.style.scrollBehavior;
  const prevSnap = track.style.scrollSnapType;
  track.style.scrollBehavior = "auto";
  track.style.scrollSnapType = "none";

  const startLeft = track.scrollLeft;
  // Use layout metrics (offsetLeft/offsetWidth) so transforms/animations don't affect the target.
  const cardCenter = (card.offsetLeft || 0) + (card.offsetWidth || 0) / 2;
  const endLeft = Math.max(0, Math.round(cardCenter - track.clientWidth / 2));

  // no-op
  if (Math.abs(endLeft - startLeft) < 2) {
    track.style.scrollBehavior = prevBehavior;
    track.style.scrollSnapType = prevSnap;
    return;
  }

  const t0 = performance.now();
  const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);
  const dur = Math.max(220, Number(durationMs) || 520);

  const step = (now) => {
    const p = Math.min(1, (now - t0) / dur);
    const v = startLeft + (endLeft - startLeft) * easeOutCubic(p);
    track.scrollLeft = v;
    if (p < 1) requestAnimationFrame(step);
    else {
      track.scrollLeft = endLeft;
      requestAnimationFrame(() => {
        track.style.scrollBehavior = prevBehavior;
        track.style.scrollSnapType = prevSnap;
      });
    }
  };
  requestAnimationFrame(step);
}

const carouselInitRequests = {};
function requestCarouselInit(trackId, idx) {
  if (!trackId) return;
  carouselInitRequests[trackId] = { idx: Number(idx) || 0 };
}

function scheduleScrollToNextCard(trackId, currentIdx) {
  if (!trackId && trackId !== "") return;
  const curIdx = Number(currentIdx) || 0;
  // Scroll immediately after reward flight completes (avoid any extra idle gap)
  // Note: this is called after `render()`, so DOM is already updated.
  {
    const track = document.getElementById(trackId);
    if (!track) return;
    const cards = Array.from(track.querySelectorAll(".mini-card"));
    if (!cards.length) return;
    const cur = Math.max(0, Math.min(curIdx, cards.length - 1));
    const idx = Math.min(cur + 1, cards.length - 1);
    const target = cards[idx];
    if (!target) return;
    if (idx === cur) return; // already last: do nothing (avoid any snap animation)

    // Add a "slide-in from right" enter animation (same rhythm as firstrecap).
    try {
      target.classList.remove("mini-card--enter");
      // Force reflow so repeated enters work.
      void target.offsetHeight;
      target.classList.add("mini-card--enter");
      target.addEventListener("animationend", () => target.classList.remove("mini-card--enter"), { once: true });
      // Fallback cleanup
      setTimeout(() => target.classList.remove("mini-card--enter"), 900);
    } catch {}

    // Slightly slower animation to avoid "flash"
    animateTrackToCard(track, target, { durationMs: 560 });
  }
}

function scheduleScrollToCard(trackId, idx, behavior = "auto") {
  if (!trackId && trackId !== "") return;
  setTimeout(() => {
    const track = document.getElementById(trackId);
    if (!track) return;
    const cards = Array.from(track.querySelectorAll(".mini-card"));
    if (!cards.length) return;
    const i = Math.max(0, Math.min(Number(idx) || 0, cards.length - 1));
    const target = cards[i];
    if (!target) return;
    scrollTrackToCard(track, target, behavior);
  }, 80);
}

function wireCarousel(trackId, dotsId, { cardSelector = ".mini-card", activeCardClass = "mini-card--active" } = {}) {
  const track = document.getElementById(trackId);
  const dotsWrap = document.getElementById(dotsId);
  if (!track || !dotsWrap) return;
  const cards = Array.from(track.querySelectorAll(cardSelector));
  const dots = Array.from(dotsWrap.querySelectorAll("[data-dot]"));
  if (!cards.length || !dots.length) return;

  const setActive = (idx) => {
    dots.forEach((d, i) => d.classList.toggle("dot--active", i === idx));
    if (activeCardClass) cards.forEach((c, i) => c.classList.toggle(activeCardClass, i === idx));
  };
  dots.forEach((d) =>
    d.addEventListener("click", () => {
      const idx = Math.max(0, Math.min(Number(d.dataset.dot || 0), cards.length - 1));
      const el = cards[idx];
      if (!el) return;
      el.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
      setActive(idx);
    }),
  );

  // Init at requested index to avoid “flash to first card” animation after render
  const req = carouselInitRequests[trackId];
  const initIdx = Math.max(0, Math.min(req?.idx ?? 0, cards.length - 1));
  track.classList.add("no-anim");
  setActive(initIdx);
  scrollTrackToCard(track, cards[initIdx], "auto");
  delete carouselInitRequests[trackId];
  requestAnimationFrame(() => track.classList.remove("no-anim"));

  // Desktop: left-mouse drag to scroll
  let isDragging = false;
  let startX = 0;
  let startScroll = 0;
  let moved = false;
  track.addEventListener("pointerdown", (e) => {
    if (e.pointerType !== "mouse") return;
    if (e.button !== 0) return;
    // Don't hijack interactions inside the carousel (buttons/links/inputs)
    if (e.target?.closest?.("button, a, input, textarea, select, [role='button'], [data-bind], [data-claim], [data-play-go], [data-play-claim]")) return;
    isDragging = true;
    moved = false;
    startX = e.clientX;
    startScroll = track.scrollLeft;
    track.classList.add("is-dragging");
    track.setPointerCapture?.(e.pointerId);
    e.preventDefault();
  });
  track.addEventListener("pointermove", (e) => {
    if (!isDragging) return;
    const dx = e.clientX - startX;
    if (Math.abs(dx) > 3) moved = true;
    track.scrollLeft = startScroll - dx;
    e.preventDefault();
  });
  const endDrag = (e) => {
    if (!isDragging) return;
    isDragging = false;
    track.classList.remove("is-dragging");
    try {
      track.releasePointerCapture?.(e.pointerId);
    } catch {}
  };
  track.addEventListener("pointerup", endDrag);
  track.addEventListener("pointercancel", endDrag);
  track.addEventListener(
    "click",
    (e) => {
      if (!moved) return;
      e.preventDefault();
      e.stopPropagation();
      moved = false;
    },
    true,
  );

  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const idx = Number(e.target.getAttribute("data-card-idx") || 0);
          setActive(idx);
        });
      },
      { root: track, threshold: 0.65 },
    );
    cards.forEach((c) => io.observe(c));
  }
}

function pillClass(type) {
  if (type === "ok") return "pill pill--ok";
  if (type === "brand") return "pill pill--brand";
  if (type === "warn") return "pill pill--warn";
  if (type === "danger") return "pill pill--danger";
  return "pill";
}

function fmt(n) {
  return String(n);
}

// ---------- QR (pure JS, SVG output) ----------
// Minimal embed from Nayuki QR Code generator (public domain): https://www.nayuki.io/page/qr-code-generator-library
// We only use encodeText() + toSvgString().
const qrcodegen = (() => {
  "use strict";
  class QrCode {
    static encodeText(text, ecl) {
      const segs = QrSegment.makeSegments(text);
      return QrCode.encodeSegments(segs, ecl);
    }
    static encodeSegments(segs, ecl, minVersion = 1, maxVersion = 40, mask = -1, boostEcl = true) {
      if (!(QrCode.MIN_VERSION <= minVersion && minVersion <= maxVersion && maxVersion <= QrCode.MAX_VERSION) || mask < -1 || mask > 7) {
        throw new RangeError("Invalid value");
      }
      let version, dataUsedBits;
      for (version = minVersion; ; version++) {
        const dataCapacityBits = QrCode.getNumDataCodewords(version, ecl) * 8;
        const bb = new BitBuffer();
        for (const seg of segs) {
          bb.appendBits(seg.mode.modeBits, 4);
          bb.appendBits(seg.numChars, seg.mode.numCharCountBits(version));
          bb.appendData(seg.data);
        }
        dataUsedBits = bb.bitLength;
        if (dataUsedBits <= dataCapacityBits) {
          if (boostEcl) {
            for (const newEcl of [QrCode.Ecc.MEDIUM, QrCode.Ecc.QUARTILE, QrCode.Ecc.HIGH]) {
              if (newEcl.ordinal > ecl.ordinal) continue;
              if (dataUsedBits <= QrCode.getNumDataCodewords(version, newEcl) * 8) ecl = newEcl;
            }
          }
          break;
        }
        if (version >= maxVersion) throw new RangeError("Data too long");
      }
      const dataCapacityBits = QrCode.getNumDataCodewords(version, ecl) * 8;
      const bb = new BitBuffer();
      for (const seg of segs) {
        bb.appendBits(seg.mode.modeBits, 4);
        bb.appendBits(seg.numChars, seg.mode.numCharCountBits(version));
        bb.appendData(seg.data);
      }
      bb.appendBits(0, Math.min(4, dataCapacityBits - bb.bitLength));
      bb.appendBits(0, (8 - bb.bitLength % 8) % 8);
      for (let padByte = 0xEC; bb.bitLength < dataCapacityBits; padByte ^= 0xEC ^ 0x11) bb.appendBits(padByte, 8);
      const dataCodewords = [];
      while (dataCodewords.length * 8 < bb.bitLength) dataCodewords.push(bb.getByte(dataCodewords.length));
      const allCodewords = QrCode.addEccAndInterleave(dataCodewords, version, ecl);
      const size = version * 4 + 17;
      const modules = Array.from({ length: size }, () => Array(size).fill(false));
      const isFunction = Array.from({ length: size }, () => Array(size).fill(false));
      const qr = new QrCode(version, ecl, modules, isFunction);
      qr.drawFunctionPatterns();
      qr.drawCodewords(allCodewords);
      qr.applyMask(mask === -1 ? qr.handleConstructorMasking(mask) : mask);
      qr.drawFormatBits(mask === -1 ? qr.mask : mask);
      qr.drawVersion();
      return qr;
    }
    static getNumDataCodewords(ver, ecl) {
      return QrCode.getNumRawDataModules(ver) / 8 - QrCode.ECC_CODEWORDS_PER_BLOCK[ecl.ordinal][ver] * QrCode.NUM_ERROR_CORRECTION_BLOCKS[ecl.ordinal][ver];
    }
    static getNumRawDataModules(ver) {
      if (ver < 1 || ver > 40) throw new RangeError("Version out of range");
      let result = (16 * ver + 128) * ver + 64;
      if (ver >= 2) {
        const numAlign = Math.floor(ver / 7) + 2;
        result -= (25 * numAlign - 10) * numAlign - 55;
        if (ver >= 7) result -= 36;
      }
      return result;
    }
    static addEccAndInterleave(data, ver, ecl) {
      const numBlocks = QrCode.NUM_ERROR_CORRECTION_BLOCKS[ecl.ordinal][ver];
      const blockEccLen = QrCode.ECC_CODEWORDS_PER_BLOCK[ecl.ordinal][ver];
      const rawCodewords = QrCode.getNumRawDataModules(ver) / 8;
      const numShortBlocks = numBlocks - rawCodewords % numBlocks;
      const shortBlockLen = Math.floor(rawCodewords / numBlocks);
      const blocks = [];
      const rsDiv = QrCode.reedSolomonComputeDivisor(blockEccLen);
      let k = 0;
      for (let i = 0; i < numBlocks; i++) {
        const datLen = shortBlockLen - blockEccLen + (i < numShortBlocks ? 0 : 1);
        const dat = data.slice(k, k + datLen);
        k += datLen;
        const ecc = QrCode.reedSolomonComputeRemainder(dat, rsDiv);
        if (i < numShortBlocks) dat.push(0);
        blocks.push(dat.concat(ecc));
      }
      const result = [];
      for (let i = 0; i < blocks[0].length; i++) {
        for (let j = 0; j < blocks.length; j++) {
          if (i !== shortBlockLen - blockEccLen || j >= numShortBlocks) result.push(blocks[j][i]);
        }
      }
      return result;
    }
    static reedSolomonComputeDivisor(degree) {
      const result = [1];
      for (let i = 0; i < degree; i++) {
        result.push(0);
        for (let j = result.length - 1; j > 0; j--) result[j] = result[j] ^ QrCode.reedSolomonMultiply(result[j - 1], QrCode.EXP_TABLE[i]);
        result[0] = QrCode.reedSolomonMultiply(result[0], QrCode.EXP_TABLE[i]);
      }
      return result;
    }
    static reedSolomonComputeRemainder(data, divisor) {
      const result = Array(divisor.length).fill(0);
      for (const b of data) {
        const factor = b ^ result.shift();
        result.push(0);
        divisor.forEach((coef, i) => (result[i] ^= QrCode.reedSolomonMultiply(coef, factor)));
      }
      result.shift();
      return result;
    }
    static reedSolomonMultiply(x, y) {
      if (x === 0 || y === 0) return 0;
      return QrCode.LOG_TABLE[x] + QrCode.LOG_TABLE[y] >= 255
        ? QrCode.EXP_TABLE[QrCode.LOG_TABLE[x] + QrCode.LOG_TABLE[y] - 255]
        : QrCode.EXP_TABLE[QrCode.LOG_TABLE[x] + QrCode.LOG_TABLE[y]];
    }
    constructor(ver, ecl, modules, isFunction) {
      this.version = ver;
      this.errorCorrectionLevel = ecl;
      this.size = ver * 4 + 17;
      this.modules = modules;
      this.isFunction = isFunction;
      this.mask = 0;
    }
    drawFunctionPatterns() {
      for (let i = 0; i < this.size; i++) {
        this.setFunctionModule(6, i, i % 2 === 0);
        this.setFunctionModule(i, 6, i % 2 === 0);
      }
      this.drawFinderPattern(3, 3);
      this.drawFinderPattern(this.size - 4, 3);
      this.drawFinderPattern(3, this.size - 4);
      const alignPatPos = QrCode.getAlignmentPatternPositions(this.version);
      const numAlign = alignPatPos.length;
      for (let i = 0; i < numAlign; i++) {
        for (let j = 0; j < numAlign; j++) {
          if ((i === 0 && j === 0) || (i === 0 && j === numAlign - 1) || (i === numAlign - 1 && j === 0)) continue;
          this.drawAlignmentPattern(alignPatPos[i], alignPatPos[j]);
        }
      }
      this.drawFormatBits(0);
      this.drawVersion();
    }
    drawFormatBits(mask) {
      const data = (this.errorCorrectionLevel.formatBits << 3) | mask;
      let rem = data;
      for (let i = 0; i < 10; i++) rem = (rem << 1) ^ ((rem >>> 9) * 0x537);
      const bits = ((data << 10) | rem) ^ 0x5412;
      for (let i = 0; i <= 5; i++) this.setFunctionModule(8, i, ((bits >>> i) & 1) !== 0);
      this.setFunctionModule(8, 7, ((bits >>> 6) & 1) !== 0);
      this.setFunctionModule(8, 8, ((bits >>> 7) & 1) !== 0);
      this.setFunctionModule(7, 8, ((bits >>> 8) & 1) !== 0);
      for (let i = 9; i < 15; i++) this.setFunctionModule(14 - i, 8, ((bits >>> i) & 1) !== 0);
      for (let i = 0; i < 8; i++) this.setFunctionModule(this.size - 1 - i, 8, ((bits >>> i) & 1) !== 0);
      for (let i = 8; i < 15; i++) this.setFunctionModule(8, this.size - 15 + i, ((bits >>> i) & 1) !== 0);
      this.setFunctionModule(8, this.size - 8, true);
    }
    drawVersion() {
      if (this.version < 7) return;
      let rem = this.version;
      for (let i = 0; i < 12; i++) rem = (rem << 1) ^ ((rem >>> 11) * 0x1F25);
      const bits = (this.version << 12) | rem;
      for (let i = 0; i < 18; i++) {
        const bit = ((bits >>> i) & 1) !== 0;
        const a = this.size - 11 + (i % 3);
        const b = Math.floor(i / 3);
        this.setFunctionModule(a, b, bit);
        this.setFunctionModule(b, a, bit);
      }
    }
    drawFinderPattern(x, y) {
      for (let dy = -4; dy <= 4; dy++) {
        for (let dx = -4; dx <= 4; dx++) {
          const dist = Math.max(Math.abs(dx), Math.abs(dy));
          const xx = x + dx, yy = y + dy;
          if (0 <= xx && xx < this.size && 0 <= yy && yy < this.size) this.setFunctionModule(xx, yy, dist !== 2 && dist !== 4);
        }
      }
    }
    drawAlignmentPattern(x, y) {
      for (let dy = -2; dy <= 2; dy++) {
        for (let dx = -2; dx <= 2; dx++) this.setFunctionModule(x + dx, y + dy, Math.max(Math.abs(dx), Math.abs(dy)) !== 1);
      }
    }
    setFunctionModule(x, y, isDark) {
      this.modules[y][x] = isDark;
      this.isFunction[y][x] = true;
    }
    drawCodewords(data) {
      let i = 0;
      for (let right = this.size - 1; right >= 1; right -= 2) {
        if (right === 6) right = 5;
        for (let vert = 0; vert < this.size; vert++) {
          for (let j = 0; j < 2; j++) {
            const x = right - j;
            const y = ((right + 1) & 2) === 0 ? this.size - 1 - vert : vert;
            if (!this.isFunction[y][x] && i < data.length * 8) {
              this.modules[y][x] = ((data[i >>> 3] >>> (7 - (i & 7))) & 1) !== 0;
              i++;
            }
          }
        }
      }
    }
    handleConstructorMasking(mask) {
      let minPenalty = Infinity;
      let bestMask = 0;
      for (let i = 0; i < 8; i++) {
        this.applyMask(i);
        this.drawFormatBits(i);
        const penalty = this.getPenaltyScore();
        this.applyMask(i);
        if (penalty < minPenalty) {
          minPenalty = penalty;
          bestMask = i;
        }
      }
      this.mask = bestMask;
      this.applyMask(bestMask);
      return bestMask;
    }
    applyMask(mask) {
      for (let y = 0; y < this.size; y++) {
        for (let x = 0; x < this.size; x++) {
          if (this.isFunction[y][x]) continue;
          let invert = false;
          switch (mask) {
            case 0: invert = (x + y) % 2 === 0; break;
            case 1: invert = y % 2 === 0; break;
            case 2: invert = x % 3 === 0; break;
            case 3: invert = (x + y) % 3 === 0; break;
            case 4: invert = (Math.floor(x / 3) + Math.floor(y / 2)) % 2 === 0; break;
            case 5: invert = (x * y) % 2 + (x * y) % 3 === 0; break;
            case 6: invert = ((x * y) % 2 + (x * y) % 3) % 2 === 0; break;
            case 7: invert = ((x + y) % 2 + (x * y) % 3) % 2 === 0; break;
            default: throw new RangeError("Mask");
          }
          this.modules[y][x] ^= invert;
        }
      }
    }
    getPenaltyScore() {
      let result = 0;
      const size = this.size;
      for (let y = 0; y < size; y++) {
        let runColor = false;
        let runX = 0;
        const runHistory = [0, 0, 0, 0, 0, 0, 0];
        for (let x = 0; x < size; x++) {
          const color = this.modules[y][x];
          if (x === 0) {
            runColor = color;
            runX = 1;
          } else if (color === runColor) {
            runX++;
            if (runX === 5) result += 3;
            else if (runX > 5) result++;
          } else {
            QrCode.finderPenaltyAddHistory(runX, runHistory);
            if (!runColor) result += QrCode.finderPenaltyCountPatterns(runHistory) * 40;
            runColor = color;
            runX = 1;
          }
        }
        QrCode.finderPenaltyAddHistory(runX, runHistory);
        if (!runColor) result += QrCode.finderPenaltyCountPatterns(runHistory) * 40;
      }
      for (let x = 0; x < size; x++) {
        let runColor = false;
        let runY = 0;
        const runHistory = [0, 0, 0, 0, 0, 0, 0];
        for (let y = 0; y < size; y++) {
          const color = this.modules[y][x];
          if (y === 0) {
            runColor = color;
            runY = 1;
          } else if (color === runColor) {
            runY++;
            if (runY === 5) result += 3;
            else if (runY > 5) result++;
          } else {
            QrCode.finderPenaltyAddHistory(runY, runHistory);
            if (!runColor) result += QrCode.finderPenaltyCountPatterns(runHistory) * 40;
            runColor = color;
            runY = 1;
          }
        }
        QrCode.finderPenaltyAddHistory(runY, runHistory);
        if (!runColor) result += QrCode.finderPenaltyCountPatterns(runHistory) * 40;
      }
      for (let y = 0; y < size - 1; y++) {
        for (let x = 0; x < size - 1; x++) {
          const c = this.modules[y][x];
          if (c === this.modules[y][x + 1] && c === this.modules[y + 1][x] && c === this.modules[y + 1][x + 1]) result += 3;
        }
      }
      let dark = 0;
      for (let y = 0; y < size; y++) for (let x = 0; x < size; x++) if (this.modules[y][x]) dark++;
      const total = size * size;
      const k = Math.abs(dark * 20 - total * 10) / total;
      result += Math.floor(k) * 10;
      return result;
    }
    static finderPenaltyAddHistory(currentRunLength, runHistory) {
      if (runHistory[0] === 0) currentRunLength += 1;
      runHistory.pop();
      runHistory.unshift(currentRunLength);
    }
    static finderPenaltyCountPatterns(runHistory) {
      const n = runHistory[1];
      if (n > 0 && runHistory[2] === n && runHistory[3] === n * 3 && runHistory[4] === n && runHistory[5] === n && runHistory[0] >= n * 4 && runHistory[6] >= n) return 1;
      if (n > 0 && runHistory[2] === n && runHistory[3] === n * 3 && runHistory[4] === n && runHistory[5] === n && runHistory[6] >= n * 4 && runHistory[0] >= n) return 1;
      return 0;
    }
    toSvgString(border = 4) {
      if (border < 0) throw new RangeError("Border");
      const parts = [];
      for (let y = 0; y < this.size; y++) {
        for (let x = 0; x < this.size; x++) {
          if (this.modules[y][x]) parts.push(`M${x + border},${y + border}h1v1h-1z`);
        }
      }
      return `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${this.size + border * 2} ${this.size + border * 2}" shape-rendering="crispEdges">
  <rect width="100%" height="100%" fill="#fff"/>
  <path d="${parts.join(" ")}" fill="#111827"/>
</svg>`.trim();
    }
    static getAlignmentPatternPositions(ver) {
      if (ver === 1) return [];
      const numAlign = Math.floor(ver / 7) + 2;
      const step = ver === 32 ? 26 : Math.ceil((ver * 4 + 4) / (numAlign * 2 - 2)) * 2;
      const result = [6];
      for (let pos = ver * 4 + 10; result.length < numAlign; pos -= step) result.splice(1, 0, pos);
      return result;
    }
  }
  QrCode.MIN_VERSION = 1;
  QrCode.MAX_VERSION = 40;
  QrCode.ECC_CODEWORDS_PER_BLOCK = [
    [-1, 7, 10, 15, 20, 26, 18, 20, 24, 30, 18, 20, 24, 26, 30, 22, 24, 28, 30, 28, 28, 28, 28, 30, 30, 26, 28, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30],
    [-1, 10, 16, 26, 18, 24, 16, 18, 22, 22, 26, 30, 22, 22, 24, 24, 28, 28, 26, 26, 26, 26, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28],
    [-1, 13, 22, 18, 26, 18, 24, 18, 22, 20, 24, 28, 26, 24, 20, 30, 24, 28, 28, 26, 30, 28, 30, 30, 30, 30, 28, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30],
    [-1, 17, 28, 22, 16, 22, 28, 26, 26, 24, 28, 24, 28, 22, 24, 24, 30, 28, 28, 26, 28, 30, 24, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30],
  ];
  QrCode.NUM_ERROR_CORRECTION_BLOCKS = [
    [-1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 4, 4, 4, 4, 4, 6, 6, 6, 6, 7, 8, 8, 9, 9, 10, 12, 12, 12, 13, 14, 15, 16, 17, 18, 19, 19, 20, 21, 22, 24, 25],
    [-1, 1, 1, 1, 2, 2, 4, 4, 4, 5, 5, 5, 8, 9, 9, 10, 10, 11, 13, 14, 16, 17, 17, 18, 20, 21, 23, 25, 26, 28, 29, 31, 33, 35, 37, 38, 40, 43, 45, 47, 49],
    [-1, 1, 1, 2, 2, 4, 4, 6, 6, 8, 8, 8, 10, 12, 16, 12, 17, 16, 18, 21, 20, 23, 23, 25, 27, 29, 34, 34, 35, 38, 40, 43, 45, 48, 51, 53, 56, 59, 62, 65, 68],
    [-1, 1, 1, 2, 4, 4, 4, 5, 6, 8, 8, 11, 11, 16, 16, 18, 16, 19, 21, 25, 25, 25, 34, 30, 32, 35, 37, 40, 42, 45, 48, 51, 54, 57, 60, 63, 66, 70, 74, 77, 81],
  ];
  QrCode.EXP_TABLE = (() => {
    const table = new Array(256);
    let x = 1;
    for (let i = 0; i < 256; i++) {
      table[i] = x;
      x <<= 1;
      if (x & 0x100) x ^= 0x11D;
    }
    return table;
  })();
  QrCode.LOG_TABLE = (() => {
    const table = new Array(256).fill(0);
    for (let i = 0; i < 255; i++) table[QrCode.EXP_TABLE[i]] = i;
    return table;
  })();

  class QrSegment {
    constructor(mode, numChars, data) {
      this.mode = mode;
      this.numChars = numChars;
      this.data = data;
    }
    static makeSegments(text) {
      return [QrSegment.makeBytes(Array.from(new TextEncoder().encode(String(text || ""))))];
    }
    static makeBytes(data) {
      const bb = new BitBuffer();
      data.forEach((b) => bb.appendBits(b, 8));
      return new QrSegment(QrSegment.Mode.BYTE, data.length, bb);
    }
  }
  QrSegment.Mode = class {
    constructor(modeBits, cc0, cc1, cc2) {
      this.modeBits = modeBits;
      this.cc0 = cc0;
      this.cc1 = cc1;
      this.cc2 = cc2;
    }
    numCharCountBits(ver) {
      return ver <= 9 ? this.cc0 : ver <= 26 ? this.cc1 : this.cc2;
    }
  };
  QrSegment.Mode.BYTE = new QrSegment.Mode(0x4, 8, 16, 16);

  class BitBuffer {
    constructor() {
      this.data = [];
      this.bitLength = 0;
    }
    getByte(i) {
      return this.data[i] >>> 0;
    }
    appendBits(val, len) {
      if (len < 0 || len > 31 || (val >>> len) !== 0) throw new RangeError("Value out of range");
      for (let i = len - 1; i >= 0; i--) {
        this.data[this.bitLength >>> 3] = (this.data[this.bitLength >>> 3] || 0) | (((val >>> i) & 1) << (7 - (this.bitLength & 7)));
        this.bitLength++;
      }
    }
    appendData(bb) {
      for (let i = 0; i < bb.bitLength; i++) this.appendBits((bb.data[i >>> 3] >>> (7 - (i & 7))) & 1, 1);
    }
  }

  QrCode.Ecc = class {
    constructor(ordinal, formatBits) {
      this.ordinal = ordinal;
      this.formatBits = formatBits;
    }
  };
  QrCode.Ecc.LOW = new QrCode.Ecc(0, 1);
  QrCode.Ecc.MEDIUM = new QrCode.Ecc(1, 0);
  QrCode.Ecc.QUARTILE = new QrCode.Ecc(2, 3);
  QrCode.Ecc.HIGH = new QrCode.Ecc(3, 2);

  return { QrCode, QrSegment };
})();

function shareUrlForRoute(route) {
  // Keep current origin/path/search so GH Pages subpath works
  return `${location.origin}${location.pathname}${location.search || ""}#/${route}`;
}

function qrSvgHtml(text) {
  try {
    return qrcodegen.QrCode.encodeText(String(text || ""), qrcodegen.QrCode.Ecc.MEDIUM).toSvgString(3);
  } catch {
    return `<div class="muted small">二维码生成失败</div>`;
  }
}

function parseCnDateToTs(str) {
  const s = String(str || "").trim();
  if (!s) return null;
  // YYYY年M月D日
  const m = s.match(/^(\d{4})年(\d{1,2})月(\d{1,2})日$/);
  if (m) {
    const y = Number(m[1]);
    const mo = Number(m[2]);
    const d = Number(m[3]);
    const dt = new Date(y, mo - 1, d, 0, 0, 0, 0);
    return Number.isFinite(dt.getTime()) ? dt.getTime() : null;
  }
  // Fallback: Date.parse for ISO-like strings
  const ts = Date.parse(s);
  return Number.isFinite(ts) ? ts : null;
}

function calcDaysSince(ts) {
  if (!Number.isFinite(ts)) return null;
  const now = Date.now();
  const diff = Math.floor((now - ts) / 86400000);
  return Math.max(0, diff);
}

function routeTitle(route) {
  const map = {
    home: "首页",
    firstrecap: "TapTap 生涯回顾",
    sharememorial: "分享纪念卡",
    sharerecap: "分享回顾",
  };
  return map[route] || "TapTap 十周年";
}

function navigate(route) {
  location.hash = `#/${route}`;
}

function getRoute() {
  const hash = location.hash || "#/home";
  const m = hash.match(/^#\/([^?]+)/);
  return (m?.[1] || "home").replace(/[^a-z]/g, "") || "home";
}

function render() {
  const route = getRoute();
  // Home-only for “回顾/好游戏/试玩/纪念卡”
  if (route === "discover" || route === "recap" || route === "shop") {
    navigate("home");
    // wait for render, then scroll
    setTimeout(() => {
      if (route === "recap") return scrollToId("section-recap");
      if (route === "discover") return scrollToId("section-discover");
      if (route === "shop") { openShopModal(); return; }
      return;
    }, 60);
    return;
  }

  // Home recap auto-focus should only run once per entry.
  // Reset the flag when leaving home so re-entering can focus earliest claimable again.
  try {
    if (route !== "home") wireRecapInline._didAutoFocus = false;
  } catch {}

  ensureCareerSnapshot(state);
  document.title = `TapTap 十周年 · ${routeTitle(route)}`;
  const main = $("#main");
  const recap = state.careerSnapshot?.recap || recapDataForState(state);

  // Route-scoped styling hooks
  document.documentElement.classList.toggle("is-firstrecap", route === "firstrecap");

  // First recap ritual page: hide the topbar completely.
  document.querySelector(".topbar")?.classList.toggle("hidden", route === "firstrecap");

  // Sticky stats (points & coupons) for the whole app
  setTopbarHeightVar();
  const sticky = document.getElementById("stickyStats");
  if (sticky) {
    // First recap ritual page: only show numbers (no shop/wallet CTA)
    if (route === "firstrecap") {
      // In firstrecap we render stats near the recap stage (not as global sticky bar).
      sticky.innerHTML = "";
      sticky.classList.add("hidden");
    } else {
      sticky.innerHTML = stickyStatsView(state);
      sticky.classList.remove("hidden");
      wireStickyStats();
    }
  }

  // Header UI
  const backBtn = $("#btnBack");
  if (backBtn) backBtn.classList.toggle("hidden", route === "home" || route === "firstrecap");
  const subtitle = $("#headerSubtitle");
  if (subtitle) subtitle.textContent = route === "home" ? "" : routeTitle(route);

  if (route === "home") {
    main.innerHTML = homeView(state, recap);
    wireHome();
    return;
  }
  if (route === "firstrecap") {
    // Record starting balances for the "completion rewards" modal (once per first-recap run).
    if (!state.firstRecapRun || typeof state.firstRecapRun !== "object") {
      state.firstRecapRun = { startPoints: 0, startCoupons: 0, doneModalShown: false };
    }
    if (!state.firstRecapRun.doneModalShown && state.firstRecapFlow?.phase !== "done") {
      // Only set once (avoid overwriting during the run / after user adjusts via debug).
      if (!Number.isFinite(state.firstRecapRun.startPoints) || state.firstRecapRun.startPoints <= 0) state.firstRecapRun.startPoints = Math.max(0, Number(state.points || 0));
      if (!Number.isFinite(state.firstRecapRun.startCoupons) || state.firstRecapRun.startCoupons <= 0) state.firstRecapRun.startCoupons = Math.max(0, Number(state.walletCoupons || 0));
      saveState();
    }
    main.innerHTML = firstRecapView(state, recap);
    wireFirstRecap();
    return;
  }
  if (route === "sharememorial") {
    // Share memorial is now a modal (keep this route as an entry for QR/links).
    main.innerHTML = homeView(state, recap);
    wireHome();
    openShareMemorialModal({ onClose: () => navigate("home") });
    return;
  }
  if (route === "sharerecap") {
    main.innerHTML = shareRecapView(state, recap);
    wireSharePage();
    return;
  }

  main.innerHTML = notFoundView();
}

function scrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

function setTopbarHeightVar() {
  try {
    const el = document.querySelector(".topbar");
    if (!el) return;
    const h = Math.max(0, Math.round(el.getBoundingClientRect().height || el.offsetHeight || 0));
    if (h) document.documentElement.style.setProperty("--topbar-h", `${h}px`);
  } catch {
    // ignore
  }
}

function stickyStatsView(s) {
  // 未登录时，名片区域显示登录提示
  if (!s.loggedIn) {
    return `
      <section class="card sticky-stats__card" style="border-radius:0; box-shadow:none;">
        <div class="sticky-hub">
          <div class="sticky-hub__left">
            <div class="sticky-hub__thumb sticky-hub__thumb--login" id="btnStickyLogin" role="button" tabindex="0" aria-label="登录">
              <div class="sticky-hub__login-icon">👤</div>
            </div>
          </div>
          <div class="sticky-hub__info">
            <p style="font-size:14px;font-weight:700;color:#0F172A;margin:0 0 4px">登录查看你的十周年名片</p>
            <p class="muted small" style="margin:0 0 8px">登录后可查看专属回顾数据、领取积分奖励</p>
            <button class="btn btn--brand" id="btnStickyLoginAction" type="button" style="font-size:13px;padding:6px 20px;min-height:0">登录</button>
          </div>
        </div>
      </section>
    `;
  }

  const recap = s.careerSnapshot?.recap || recapDataForState(s);
  const color = MEM_CARD_COLORS.find((c) => c.id === s.memorial?.colorId) || MEM_CARD_COLORS[0];
  const avatar = MEM_AVATARS.find((x) => x.id === s.memorial?.avatarId) || MEM_AVATARS[0];
  const stickersHtml = (Array.isArray(s.memorial?.stickers) ? s.memorial.stickers : [])
    .slice(0, 4)
    .map((st) => {
      const id = String(st?.id || "").trim();
      const def = MEM_STICKERS.find((x) => x.id === id) || MEM_STICKERS[0];
      const x = Math.max(5, Math.min(95, Number(st?.x ?? 50)));
      const y = Math.max(5, Math.min(95, Number(st?.y ?? 22)));
      return `<span class="sticky-hub__sticker" style="left:${x}%; top:${y}%;">${escapeHtml(def.icon)}</span>`;
    })
    .join("");
  return `
    <section class="card sticky-stats__card" style="border-radius:0; box-shadow:none;">
      <div class="sticky-hub">
        <div class="sticky-hub__left">
          <div class="sticky-hub__thumb" id="btnOpenMemorial" role="button" tabindex="0" aria-label="编辑十周年名片" style="--mem-bg:${color.bg};">
            <div class="sticky-hub__avatar">${avatarDisplayHtml(avatar, String(s.profile?.nickname || ""), { size: "small" })}</div>
            ${stickersHtml}
          </div>
          <button class="link-btn" id="btnEditMemorial" type="button" style="font-size:11px; margin-top:4px">编辑十周年名片</button>
        </div>
        <div class="sticky-hub__info">
          <div class="sticky-hub__row">
            <div class="sticky-hub__stat">
              <div class="pill pill--brand" id="pillPoints">积分 <b>${fmt(s.points)}</b></div>
              <div class="muted small">积分兑换装饰和参与点券抽奖</div>
            </div>
            <button class="link-btn" id="btnGoShop" type="button">积分商店入口</button>
          </div>
          <div class="sticky-hub__row">
            <div class="sticky-hub__stat">
              <div class="pill" id="pillCoupons">已得点券 <b>${fmt(s.walletCoupons || 0)}</b></div>
              <div class="muted small">购买游戏、PC CDKey、云玩服务等</div>
            </div>
            <button class="link-btn" id="btnWallet" type="button">查看我的钱包</button>
          </div>
        </div>
      </div>
    </section>
  `;
}

function stickyStatsLiteView(s) {
  return `
    <section class="card sticky-stats__card" style="border-radius:0; box-shadow:none;">
      <div class="row" style="gap:10px; justify-content:flex-start;">
        <div class="pill pill--brand" id="pillPoints">积分 <b>${fmt(s.points)}</b></div>
        <div class="pill" id="pillCoupons">点券 <b>${fmt(s.walletCoupons || 0)}</b></div>
      </div>
    </section>
  `;
}

function wireStickyStats() {
  // 未登录时的登录按钮
  const loginHandler = () => openLoginModal(() => render());
  $("#btnStickyLogin")?.addEventListener("click", loginHandler);
  $("#btnStickyLoginAction")?.addEventListener("click", loginHandler);

  // 已登录时的正常交互
  $("#btnGoShop")?.addEventListener("click", () => openShopModal());
  $("#btnWallet")?.addEventListener("click", openWalletModal);
  $("#btnOpenMemorial")?.addEventListener("click", () => openMemorialEditModal());
  $("#btnEditMemorial")?.addEventListener("click", () => openMemorialEditModal());
}

function firstRecapView(s, recap) {
  return `
    <div class="firstrecap-shell">
      <div class="firstrecap-topbar" role="banner" aria-label="活动导航栏">
        <div class="firstrecap-topbar__title">TapTap 十周年</div>
      </div>

      <div class="firstrecap-stage" aria-label="十年回顾舞台">
        <div class="firstrecap-currency" aria-label="积分与点券">
          <div class="pill pill--brand firstrecap-money firstrecap-money--points" id="pillPoints">
            <div class="firstrecap-money__top">
              <div class="firstrecap-money__k">积分</div>
              <div class="firstrecap-money__v">${fmt(s.points)}</div>
            </div>
            <div class="firstrecap-money__d">活动内装扮十周年名片，抽奖点券</div>
          </div>
          <div class="pill firstrecap-money firstrecap-money--coupons" id="pillCoupons">
            <div class="firstrecap-money__top">
              <div class="firstrecap-money__k">点券</div>
              <div class="firstrecap-money__v">${fmt(s.walletCoupons || 0)}</div>
            </div>
            <div class="firstrecap-money__d">购买游戏/PC CDKey/云玩服务等</div>
          </div>
        </div>

        <div class="firstrecap-body">
          ${recapInlineView(s, recap, { sortUnclaimedFirst: false })}
        </div>
      </div>

      <div class="firstrecap-skip">
        <button class="link-inline" id="btnFirstRecapSkip" type="button">先进入活动会场，稍微再进行回顾</button>
      </div>
    </div>
  `;
}

function homeView(s, recap) {
  const recapHtml = s.loggedIn
    ? recapInlineView(s, recap, { sortUnclaimedFirst: false })
    : `<section class="card">
        <div class="recap-login-placeholder">
          <div class="recap-login-placeholder__icon">📖</div>
          <p class="recap-login-placeholder__title">我的 TapTap 十年回顾</p>
          <p class="recap-login-placeholder__desc">登录后即可开启你的专属生涯回顾，查看你与 TapTap 的故事</p>
          <button class="btn btn--brand" id="btnRecapLogin" type="button" style="min-height:0;padding:8px 24px;font-size:14px">登录开启</button>
        </div>
      </section>`;
  return `
    <div class="home-module" id="section-recap">${recapHtml}</div>

    ${discoverInlineView(s)}
  `;
  // 十周年名片和积分商店已拆到顶部置顶区域的弹窗入口中
}

function wireHome() {
  wireRecapInline();
  wireDiscoverInline();
  // 未登录时回顾区域的登录按钮
  $("#btnRecapLogin")?.addEventListener("click", () => openLoginModal(() => render()));
}

function dayKeyLocal(d = new Date()) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${dd}`;
}

function identityTitleForRecap(recap) {
  const ys = recap?.taptapCriticYears;
  const hasCritic = Array.isArray(ys) ? ys.some((x) => Number(x) > 0) : String(ys || "").trim().length > 0;
  if (hasCritic) return "TapTap 玩赏家";
  return "";
}

function calcShareKeyword(recap) {
  const devGames = (Array.isArray(recap?.devGames) ? recap.devGames : []).filter(g => String(g.name || "").trim());
  const togetherDays = calcDaysSince(parseCnDateToTs(recap?.regDate));

  const dims = [
    { score: Math.min((togetherDays || 0) / 3000, 1), keyword: "初代旅人", dim: "days" },
    { score: Math.min(Number(recap?.gamesPlayedTotal || 0) / 500, 1), keyword: "游戏收藏家", dim: "games" },
    { score: Math.min(Number(recap?.playTimeHours || 0) / 5000, 1), keyword: "时间旅人", dim: "hours" },
    { score: Math.min((Number(recap?.reviewsCount || 0) * 3 + Number(recap?.reviewLikesTotal || 0)) / 2000, 1), keyword: "社区之声", dim: "reviews" },
    { score: Math.min(Number(recap?.communityPublished || 0) / 200, 1), keyword: "内容达人", dim: "published" },
    { score: Math.min(devGames.length / 5, 1), keyword: "造梦者", dim: "dev" },
    { score: Math.min((Number(recap?.friendsCount || 0) + Number(recap?.followersCount || 0)) / 600, 1), keyword: "人气之星", dim: "social" },
    { score: Math.min(Number(recap?.nightSurfDays || 0) / 80, 1), keyword: "月光冒险家", dim: "night" },
    { score: Math.min((Number(recap?.achievementsTotal || 0) + Number(recap?.platformBadgesTotal || 0)) / 500, 1), keyword: "成就猎人", dim: "achieve" },
  ];

  const fallback = { score: 0, keyword: "神秘旅人", dim: "" };
  const best = dims.reduce((a, b) => (b.score > a.score ? b : a), fallback);
  return best.score > 0 ? best : fallback;
}

function memorialInlineView(s, recap, { editOnly = false } = {}) {
  const prof = s.profile || { nickname: "玩家", id: "—", identity: "", bio: "" };
  const nickname = String(prof.nickname || "").trim() || "玩家";
  const pid = String(prof.id || "").trim() || "—";
  const title = String(prof.identity || "").trim() || identityTitleForRecap(recap);
  const bio = String(prof.bio || "").trim();

  const color = MEM_CARD_COLORS.find((c) => c.id === s.memorial?.colorId) || MEM_CARD_COLORS[0];
  const avatar = MEM_AVATARS.find((x) => x.id === s.memorial?.avatarId) || MEM_AVATARS[0];

  const frameOwned = s.inventory.frames.includes(MEM_SHOP.frame.id);
  const badgeOwned = s.inventory.badges.includes(MEM_SHOP.badge.id);
  const frameEquipped = s.equipped.frame === MEM_SHOP.frame.id;
  const badgeEquipped = s.equipped.badge === MEM_SHOP.badge.id;

  const unlocks = s.memorialUnlocks || { colors: [], stickers: [], avatars: [] };
  const tab = s.memorial?.tab || "color";
  const MEM_PRICING = { color: 20, sticker: 15, avatar: 30 };
  const unlockKindMap = { color: "colors", sticker: "stickers", avatar: "avatars" };
  const isUnlocked = (kind, id) => (unlocks?.[kind] || []).includes(id);
  const isUnlockedKind = (kind, id) => isUnlocked(unlockKindMap[kind], id);
  const costFor = (kind, id) => (isUnlockedKind(kind, id) ? 0 : (MEM_PRICING[kind] || 0));

  const tabBtn = (id, label) =>
    `<button class="mem-tab ${tab === id ? "mem-tab--active" : ""}" type="button" data-mem-tab="${id}">${label}</button>`;

  const optionBtn = ({ id, label, icon, active, locked, used, kind, style, cost, ariaLabel, compact, swatch, fullSwatch }) => `
    <button
      class="mem-opt ${active ? "mem-opt--active" : ""} ${locked ? "mem-opt--locked" : ""} ${compact ? "mem-opt--compact" : ""} ${fullSwatch ? "mem-opt--fullswatch" : ""}"
      type="button"
      data-mem-${kind}="${id}"
      aria-label="${escapeHtml(ariaLabel || label || "")}"
      ${locked ? "aria-disabled='true'" : ""}
      style="${style || ""}"
    >
      ${
        fullSwatch
          ? ""
          : (swatch ? `<span class="mem-opt__swatch" aria-hidden="true"></span>` : (icon ? `<span class="mem-opt__ico" aria-hidden="true">${icon}</span>` : ""))
      }
      ${!compact && label ? `<span class="mem-opt__t">${escapeHtml(label)}</span>` : ""}
      ${
        compact
          ? `<span class="mem-opt__price ${locked && cost ? "" : "mem-opt__price--ghost"}" aria-hidden="true">${fmt(cost || 0)}积分</span>`
          : (locked && cost ? `<span class="mem-opt__price" aria-hidden="true">${fmt(cost)}积分</span>` : "")
      }
      ${locked ? `<span class="mem-opt__lock" aria-hidden="true">🔒</span>` : ""}
      ${used ? `<span class="mem-opt__used" aria-hidden="true">✓</span>` : ""}
    </button>
  `;

  const usedStickerIds = new Set(
    (Array.isArray(s.memorial?.stickers) ? s.memorial.stickers : [])
      .map((x) => String(x?.id || "").trim())
      .filter(Boolean),
  );

  const colorOpts = MEM_CARD_COLORS.map((c) =>
    optionBtn({
      id: c.id,
      kind: "color",
      active: (s.memorial?.colorId || "") === c.id,
      used: (s.memorial?.colorId || "") === c.id,
      locked: !isUnlockedKind("color", c.id),
      cost: costFor("color", c.id),
      ariaLabel: `背景：${c.label}`,
      compact: true,
      fullSwatch: true,
      style: `--sw:${c.bg};`,
    }),
  ).join("");

  const stickerOpts = MEM_STICKERS.map((st) =>
    optionBtn({
      id: st.id,
      kind: "sticker",
      icon: st.icon,
      // For multi-stickers, selecting means "add one" rather than "set".
      active: usedStickerIds.has(st.id),
      used: usedStickerIds.has(st.id),
      locked: !isUnlockedKind("sticker", st.id),
      cost: costFor("sticker", st.id),
      ariaLabel: `贴纸：${st.label}`,
      compact: true,
    }),
  ).join("");

  const avatarOpts = MEM_AVATARS.map((av) =>
    optionBtn({
      id: av.id,
      kind: "avatar",
      icon: av.isProfileAvatar
        ? `<span class="mem-opt__profile-ico">TapTap<br>头像</span>`
        : av.icon,
      active: (s.memorial?.avatarId || "") === av.id,
      used: (s.memorial?.avatarId || "") === av.id,
      locked: !isUnlockedKind("avatar", av.id),
      cost: costFor("avatar", av.id),
      ariaLabel: `角色：${av.label}`,
      compact: true,
    }),
  ).join("");

  const frameBtn = frameOwned
    ? `<button class="btn ${frameEquipped ? "" : "btn--brand"}" data-mem-equip="frame">${frameEquipped ? "已装备" : "装备"}</button>`
    : `<button class="btn btn--brand" data-mem-buy="frame">${fmt(MEM_SHOP.frame.cost)}积分兑换</button>`;

  const badgeBtn = badgeOwned
    ? `<button class="btn ${badgeEquipped ? "" : "btn--brand"}" data-mem-equip="badge">${badgeEquipped ? "已装备" : "装备"}</button>`
    : `<button class="btn btn--brand" data-mem-buy="badge">${fmt(MEM_SHOP.badge.cost)}积分兑换</button>`;

  const todayKey = dayKeyLocal();
  const alreadyDrawn = String(s.daily?.lotteryDayKey || "") === todayKey;
  const lotBtn = alreadyDrawn
    ? `<button class="btn" id="btnMemLottery" disabled>今日已抽</button>`
    : `<button class="btn btn--brand" id="btnMemLottery">${fmt(MEM_SHOP.lottery.cost)}积分抽</button>`;

  const cardHtml = `
      <div class="mem-card-shell" style="--mem-bg:${color.bg}; --mem-panel:${color.panel}; --mem-accent:${color.accent};">
        <div class="mem-card">
          <div class="mem-stickers" aria-label="贴纸">
            ${(Array.isArray(s.memorial?.stickers) ? s.memorial.stickers : [])
              .slice(0, 10)
              .map((st, idx) => {
                const id = String(st?.id || "").trim();
                const def = MEM_STICKERS.find((x) => x.id === id) || MEM_STICKERS[0];
                const x = Math.max(0, Math.min(100, Number(st?.x ?? 50)));
                const y = Math.max(0, Math.min(100, Number(st?.y ?? 22)));
                const sc = Math.max(0.6, Math.min(1.8, Number(st?.s ?? 1)));
                const r = Math.max(-45, Math.min(45, Number(st?.r ?? 0)));
                const activeIdx = Math.max(0, Number(s.memorial?.activeStickerIdx ?? 0));
                const active = idx === activeIdx;
                return `
                  <button
                    type="button"
                    class="mem-sticker mem-sticker--placed ${active ? "is-active" : ""}"
                    data-mem-sticker-idx="${idx}"
                    aria-label="贴纸：${escapeHtml(def.label)}"
                    style="left:${x}%; top:${y}%; transform: translate(-50%,-50%) rotate(${r}deg) scale(${sc});"
                  >${escapeHtml(def.icon)}</button>
                `;
              })
              .join("")}
          </div>
          <div class="mem-top">
            <div class="mem-brand"></div>
            <div class="mem-mini">
              ${frameEquipped ? `<span class="tag">🟩 头像框</span>` : ""}
              ${badgeEquipped ? `<span class="tag">🛠️ 徽章</span>` : ""}
            </div>
          </div>

          <div class="mem-photo">
            <div class="mem-avatar" aria-label="角色">${avatarDisplayHtml(avatar, nickname)}</div>
          </div>

          <div class="mem-fields">
            <div class="mem-field">
              <span class="mem-k mem-k--inline">昵称</span>
              <span class="mem-v mem-v--grow">${escapeHtml(nickname)}</span>
            </div>
            <div class="mem-field">
              <span class="mem-k mem-k--inline">ID</span>
              <span class="mem-v mem-v--grow">${escapeHtml(pid)}</span>
            </div>
            ${title ? `
              <div class="mem-field">
                <span class="mem-k">身份</span>
                <span class="mem-v">${escapeHtml(title)}</span>
              </div>
            ` : ""}
          </div>

          ${bio ? `<div class="mem-slogan">${escapeHtml(bio)}</div>` : ""}
        </div>
      </div>
  `;

  const diyHtml = `
      <div class="mem-diy">
      <div class="mem-tabs" role="tablist" aria-label="DIY 选项">
        ${tabBtn("color", "背景")}
        ${tabBtn("sticker", "贴纸")}
        ${tabBtn("avatar", "角色")}
      </div>

        <div class="mem-panel ${tab === "color" ? "" : "hidden"}" data-mem-panel="color">
          <div class="muted small" style="margin-top:2px">选择一款背景主题（支持不同图案）。</div>
          <div class="mem-swatches" style="margin-top:10px">${colorOpts}</div>
        </div>
        <div class="mem-panel ${tab === "sticker" ? "" : "hidden"}" data-mem-panel="sticker">
          <div class="muted small" style="margin-top:2px">点选添加贴纸；拖动贴纸可调整位置。</div>
          <div class="mem-grid" style="margin-top:10px">${stickerOpts}</div>
        </div>
        <div class="mem-panel ${tab === "avatar" ? "" : "hidden"}" data-mem-panel="avatar">
          <div class="muted small" style="margin-top:2px">选择名片上展示的角色形象。</div>
          <div class="mem-grid" style="margin-top:10px">${avatarOpts}</div>
        </div>
      </div>
  `;

  const shopHtml = `
      <div class="divider"></div>
      <div class="list">
        <div class="item">
          <div class="row">
            <div class="grow">
              <div class="item__title">每日抽点券</div>
              <div class="item__desc">每日限 1 次，抽到的点券可在我的钱包查看。</div>
            </div>
            <div class="mem-shop__right">
              ${lotBtn}
            </div>
          </div>
        </div>

        <div class="item">
          <div class="row">
            <div class="equip equip--frame">${escapeHtml(MEM_SHOP.frame.icon)}</div>
            <div class="grow">
              <div class="item__title">${escapeHtml(MEM_SHOP.frame.title)}</div>
            </div>
            <div class="mem-shop__right">
              ${frameBtn}
            </div>
          </div>
        </div>

        <div class="item">
          <div class="row">
            <div class="equip equip--badge">${escapeHtml(MEM_SHOP.badge.icon)}</div>
            <div class="grow">
              <div class="item__title">${escapeHtml(MEM_SHOP.badge.title)}</div>
            </div>
            <div class="mem-shop__right">
              ${badgeBtn}
            </div>
          </div>
        </div>
      </div>
  `;

  // editOnly 模式：只返回名片 + DIY 选项（用于弹窗编辑）
  if (editOnly) {
    return `<div>${cardHtml}${diyHtml}</div>`;
  }

  return `
    <section class="card">
      <div class="row">
        <p class="h1 grow">十周年名片</p>
        <button class="btn btn--brand" id="btnShareMemorial" type="button" style="min-height:36px; padding:8px 10px">分享</button>
      </div>
      <p class="muted small" style="margin:6px 0 0">用积分兑换装饰，DIY 一张属于你的纪念卡。</p>

      <div class="divider"></div>
      ${cardHtml}
      ${diyHtml}
      ${shopHtml}
    </section>
  `;
}

function shareMemorialView(s, recap) {
  const url = shareUrlForRoute("sharememorial");
  const qr = qrSvgHtml(url);
  return `
    <section class="card">
      <div class="row">
        <p class="h1 grow">分享 · 十周年纪念卡</p>
      </div>
      <p class="muted small" style="margin:6px 0 0">扫码打开分享页（demo：分享内容来自本地演示状态）。</p>
      <div class="divider"></div>
      ${memorialInlineView(s, recap).replace('<section class="card">', '<div>').replace("</section>", "</div>")}
      <div class="divider"></div>
      <div class="share-qr">
        <div class="share-qr__box" aria-label="二维码">${qr}</div>
        <div class="muted small share-qr__txt"><span class="mono">${escapeHtml(url)}</span></div>
        <div class="row" style="justify-content:flex-end; margin-top:10px">
          <button class="btn btn--brand" id="btnCopyShareUrl" type="button">复制链接</button>
        </div>
      </div>
    </section>
  `;
}

function shareRecapView(s, recap) {
  const url = shareUrlForRoute("sharerecap");
  const qr = qrSvgHtml(url);
  return `
    <section class="card">
      <div class="row">
        <p class="h1 grow">分享 · 十年回顾</p>
      </div>
      <p class="muted small" style="margin:6px 0 0">扫码打开分享页（demo：分享内容来自本地演示状态）。</p>
      <div class="divider"></div>
      ${shareCardHtml(s, recap, { variant: "recap" })}
      <div class="divider"></div>
      <div class="share-qr">
        <div class="share-qr__box" aria-label="二维码">${qr}</div>
        <div class="muted small share-qr__txt"><span class="mono">${escapeHtml(url)}</span></div>
        <div class="row" style="justify-content:flex-end; margin-top:10px">
          <button class="btn btn--brand" id="btnCopyShareUrl" type="button">复制链接</button>
        </div>
      </div>
    </section>
  `;
}

function escapeXml(str) {
  return String(str || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

function downloadSvgAsPng(svgString, filename = "taptap-10y-share.png", { scale = 2 } = {}) {
  try {
    const blob = new Blob([svgString], { type: "image/svg+xml;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const img = new Image();
    img.decoding = "async";
    img.onload = () => {
      try {
        const wMatch = svgString.match(/\bwidth="(\d+)"/);
        const hMatch = svgString.match(/\bheight="(\d+)"/);
        const w = Math.max(1, Number(wMatch?.[1] || 1080));
        const h = Math.max(1, Number(hMatch?.[1] || 1920));
        const canvas = document.createElement("canvas");
        canvas.width = Math.round(w * scale);
        canvas.height = Math.round(h * scale);
        const ctx = canvas.getContext("2d");
        if (!ctx) throw new Error("no ctx");
        ctx.setTransform(scale, 0, 0, scale, 0, 0);
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = "high";
        ctx.fillStyle = "#FFFFFF";
        ctx.fillRect(0, 0, w, h);
        ctx.drawImage(img, 0, 0, w, h);
        canvas.toBlob(
          (png) => {
            try {
              if (!png) return toast("下载失败（图片生成失败）");
              const a = document.createElement("a");
              a.href = URL.createObjectURL(png);
              a.download = filename;
              a.click();
              setTimeout(() => URL.revokeObjectURL(a.href), 800);
              toast("已下载图片");
            } catch {
              toast("下载失败（浏览器限制）");
            }
          },
          "image/png",
          0.92,
        );
      } catch {
        toast("下载失败（图片生成失败）");
      } finally {
        URL.revokeObjectURL(url);
      }
    };
    img.onerror = () => {
      URL.revokeObjectURL(url);
      toast("下载失败（图片生成失败）");
    };
    img.src = url;
  } catch {
    toast("下载失败（浏览器限制）");
  }
}

function shareRecapTextForShare(recap) {
  const kw = calcShareKeyword(recap);
  const beloved = String(recap.belovedGameName || "").trim();
  const parts = [];
  if (kw.keyword && kw.keyword !== "神秘旅人") parts.push(`我是「${kw.keyword}」`);
  if (beloved) parts.push(`十年挚爱${beloved}`);
  const gamesTotal = Number(recap.gamesPlayedTotal || 0);
  if (gamesTotal > 0) parts.push(`玩了 ${fmt(gamesTotal)} 款佳作`);
  return `我的 TapTap 十年回顾：${parts.join("，") || "来看看我的十年旅程"}。#十年同行`;
}

function memorialCardOnlyHtml(s, recap, { hideProfileFields = false } = {}) {
  const prof = s.profile || { nickname: "玩家", id: "—", identity: "", bio: "" };
  const nickname = String(prof.nickname || "").trim() || "玩家";
  const pid = String(prof.id || "").trim() || "—";
  const title = String(prof.identity || "").trim() || identityTitleForRecap(recap);
  const bio = String(prof.bio || "").trim();

  const color = MEM_CARD_COLORS.find((c) => c.id === s.memorial?.colorId) || MEM_CARD_COLORS[0];
  const avatar = MEM_AVATARS.find((x) => x.id === s.memorial?.avatarId) || MEM_AVATARS[0];

  const frameEquipped = s.equipped.frame === MEM_SHOP.frame.id;
  const badgeEquipped = s.equipped.badge === MEM_SHOP.badge.id;

  return `
    <div class="mem-card-shell" style="--mem-bg:${color.bg}; --mem-panel:${color.panel}; --mem-accent:${color.accent};">
      <div class="mem-card">
        <div class="mem-stickers" aria-label="贴纸">
          ${(Array.isArray(s.memorial?.stickers) ? s.memorial.stickers : [])
            .slice(0, 10)
            .map((st, idx) => {
              const id = String(st?.id || "").trim();
              const def = MEM_STICKERS.find((x) => x.id === id) || MEM_STICKERS[0];
              const x = Math.max(0, Math.min(100, Number(st?.x ?? 50)));
              const y = Math.max(0, Math.min(100, Number(st?.y ?? 22)));
              const sc = Math.max(0.6, Math.min(1.8, Number(st?.s ?? 1)));
              const r = Math.max(-45, Math.min(45, Number(st?.r ?? 0)));
              const activeIdx = Math.max(0, Number(s.memorial?.activeStickerIdx ?? 0));
              const active = idx === activeIdx;
              // In share modal, stickers are only for display (no drag/select)
              return `
                <span
                  class="mem-sticker mem-sticker--placed ${active ? "is-active" : ""}"
                  aria-label="贴纸：${escapeHtml(def.label)}"
                  style="left:${x}%; top:${y}%; transform: translate(-50%,-50%) rotate(${r}deg) scale(${sc}); pointer-events:none;"
                >${escapeHtml(def.icon)}</span>
              `;
            })
            .join("")}
        </div>
        <div class="mem-top">
          <div class="mem-brand"></div>
          <div class="mem-mini">
            ${frameEquipped ? `<span class="tag">🟩 头像框</span>` : ""}
            ${badgeEquipped ? `<span class="tag">🛠️ 徽章</span>` : ""}
          </div>
        </div>

        <div class="mem-photo">
          <div class="mem-avatar" aria-label="角色">${avatarDisplayHtml(avatar, nickname)}</div>
        </div>

        <div class="mem-fields">
          ${
            hideProfileFields
              ? ""
              : `
                <div class="mem-field">
                  <span class="mem-k mem-k--inline">昵称</span>
                  <span class="mem-v mem-v--grow">${escapeHtml(nickname)}</span>
                </div>
                <div class="mem-field">
                  <span class="mem-k mem-k--inline">ID</span>
                  <span class="mem-v mem-v--grow">${escapeHtml(pid)}</span>
                </div>
              `
          }
          ${title ? `
            <div class="mem-field">
              <span class="mem-k">身份</span>
              <span class="mem-v">${escapeHtml(title)}</span>
            </div>
          ` : ""}
        </div>

        ${bio ? `<div class="mem-slogan">${escapeHtml(bio)}</div>` : ""}
      </div>
    </div>
  `;
}

function shareMemorialTextForShare() {
  const nick = String(state.profile?.nickname || "").trim() || "TapTap 用户";
  const pid = String(state.profile?.id || "").trim() || "—";
  return `我的 TapTap 十周年名片：${nick}（ID ${pid}）。#十年同行`;
}

function openShareMemorialModal({ onClose } = {}) {
  const recap = state.careerSnapshot?.recap || recapDataForState(state);
  const url = shareUrlForRoute("sharememorial");
  const qr = qrSvgHtml(url);

  if (typeof onClose === "function") _modalAfterClose.push(onClose);

  // NOTE: Do NOT show extra nickname/ID text under modal title.
  // The nickname/ID should stay inside the memorial card itself.
  const nick = String(state.profile?.nickname || "").trim() || "TapTap 用户";
  const pid = String(state.profile?.id || "").trim() || "—";

  const body = `
    <div class="small" style="line-height:1.55">
      ${memorialCardOnlyHtml(state, recap)}
      <div class="divider"></div>
      <div class="share-qr">
        <div class="share-qr__box" aria-label="二维码">${qr}</div>
        <div class="muted small share-qr__txt"><span class="mono">${escapeHtml(url)}</span></div>
      </div>
    </div>
  `;

  const footer = `
    <button class="btn" id="btnShareTo" type="button">分享至</button>
    <button class="btn btn--brand" id="btnDownloadShareImg" type="button">下载图片</button>
  `;

  openModal({ title: "分享我的十周年名片", bodyHtml: body, footerHtml: footer });

  // 在关闭按钮旁插入「返回我的名片」按钮
  const shareHeader = document.querySelector("#modal .modal__header");
  if (shareHeader && !shareHeader.querySelector("#btnBackToMemorial")) {
    const backBtn = document.createElement("button");
    backBtn.className = "btn btn--ghost";
    backBtn.id = "btnBackToMemorial";
    backBtn.type = "button";
    backBtn.style.cssText = "min-height:32px; padding:6px 10px; font-size:11px; margin-right:6px;";
    backBtn.textContent = "返回我的名片";
    shareHeader.querySelector("#modalClose")?.before(backBtn);
    backBtn.addEventListener("click", () => {
      closeModal();
      openMemorialEditModal();
    });
  }

  $("#btnShareTo")?.addEventListener("click", async () => {
    const text = shareMemorialTextForShare();
    try {
      if (navigator.share) {
        await navigator.share({ title: "TapTap十周年名片", text, url });
        return;
      }
    } catch {
      // ignore; fallback to copy
    }
    try {
      await navigator.clipboard.writeText(url);
      toast("已复制链接，可粘贴分享");
    } catch {
      toast("分享失败（浏览器权限限制）");
    }
  });

  $("#btnDownloadShareImg")?.addEventListener("click", () => {
    const W = 1080;
    const H = 1920;
    const qrSized = String(qr).replace("<svg ", `<svg x="390" y="1320" width="300" height="300" `);
    const title = "TapTap十周年名片";

    const color = MEM_CARD_COLORS.find((c) => c.id === state.memorial?.colorId) || MEM_CARD_COLORS[0];
    const avatar = MEM_AVATARS.find((x) => x.id === state.memorial?.avatarId) || MEM_AVATARS[0];
    const identity = String(state.profile?.identity || "").trim() || identityTitleForRecap(recap);
    const bio = String(state.profile?.bio || "").trim();

    const cardX = 90;
    const cardY = 290;
    const cardW = 900;
    const cardH = 940;

    const stickers = (Array.isArray(state.memorial?.stickers) ? state.memorial.stickers : []).slice(0, 10).map((st) => {
      const id = String(st?.id || "").trim();
      const def = MEM_STICKERS.find((x) => x.id === id) || MEM_STICKERS[0];
      const x = Math.max(0, Math.min(100, Number(st?.x ?? 50)));
      const y = Math.max(0, Math.min(100, Number(st?.y ?? 22)));
      const sc = Math.max(0.6, Math.min(1.8, Number(st?.s ?? 1)));
      const r = Math.max(-45, Math.min(45, Number(st?.r ?? 0)));
      const px = cardX + (cardW * x) / 100;
      const py = cardY + (cardH * y) / 100;
      const fs = Math.round(46 * sc);
      return `
        <g transform="translate(${px} ${py}) rotate(${r})">
          <text x="0" y="0" text-anchor="middle" dominant-baseline="middle" font-size="${fs}">${escapeXml(def.icon)}</text>
        </g>
      `;
    }).join("");

    const posterSvg = `
      <svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
        <defs>
          <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stop-color="#F7F9FC"/>
            <stop offset="1" stop-color="#FFFFFF"/>
          </linearGradient>
        </defs>
        <rect width="${W}" height="${H}" fill="url(#bg)"/>
        <circle cx="140" cy="160" r="260" fill="#E7FBF5" opacity="0.9"/>
        <circle cx="920" cy="220" r="300" fill="#EEF5FF" opacity="0.9"/>

        <text x="90" y="190" font-size="54" font-weight="800" fill="#0F172A">${escapeXml(title)}</text>

        <rect x="${cardX}" y="${cardY}" width="${cardW}" height="${cardH}" rx="36" fill="${escapeXml(color.panel)}" stroke="rgba(15,23,42,0.10)" stroke-width="2"/>
        <rect x="${cardX + 26}" y="${cardY + 26}" width="${cardW - 52}" height="${cardH - 52}" rx="28" fill="rgba(255,255,255,0.62)"/>
        <rect x="${cardX + 52}" y="${cardY + 220}" width="${cardW - 104}" height="220" rx="28" fill="${escapeXml(color.accent)}" opacity="0.16"/>

        ${stickers}

        ${avatar.isProfileAvatar
          ? `<rect x="${cardX + 68}" y="${cardY + 88}" width="104" height="104" rx="22" fill="#FFFFFF" stroke="rgba(15,23,42,0.10)" stroke-width="2"/>
             <text x="${cardX + 120}" y="${cardY + 135}" font-size="22" font-weight="800" fill="rgba(15,23,42,0.45)" text-anchor="middle">TapTap</text>
             <text x="${cardX + 120}" y="${cardY + 165}" font-size="22" font-weight="800" fill="rgba(15,23,42,0.45)" text-anchor="middle">头像</text>`
          : `<text x="${cardX + 120}" y="${cardY + 170}" font-size="96">${escapeXml(avatar.icon)}</text>`
        }
        <text x="${cardX + 120}" y="${cardY + 520}" font-size="28" font-weight="800" fill="#0F172A">昵称</text>
        <text x="${cardX + 120}" y="${cardY + 580}" font-size="44" font-weight="900" fill="#0F172A">${escapeXml(nick)}</text>
        <text x="${cardX + 120}" y="${cardY + 670}" font-size="28" font-weight="800" fill="#0F172A">ID</text>
        <text x="${cardX + 120}" y="${cardY + 720}" font-size="36" font-weight="900" fill="#0F172A">${escapeXml(pid)}</text>
        ${identity ? `<text x="${cardX + 120}" y="${cardY + 810}" font-size="28" font-weight="800" fill="#0F172A">身份</text>
        <text x="${cardX + 120}" y="${cardY + 860}" font-size="34" font-weight="900" fill="#0F172A">${escapeXml(identity)}</text>` : ""}
        ${bio ? `<text x="${cardX + 120}" y="${cardY + 920}" font-size="26" font-weight="700" fill="#334155">${escapeXml(bio).slice(0, 36)}</text>` : ""}

        <rect x="90" y="1240" width="900" height="600" rx="36" fill="#FFFFFF" stroke="rgba(15,23,42,0.10)" stroke-width="2"/>
        ${qrSized}
        <text x="540" y="1670" text-anchor="middle" font-size="26" font-weight="800" fill="#0F172A">扫码打开分享页</text>
        <text x="540" y="1720" text-anchor="middle" font-size="22" font-weight="700" fill="#64748B">${escapeXml(url)}</text>

        <text x="540" y="1860" text-anchor="middle" font-size="22" font-weight="800" fill="#00B894">TapTap 十周年 · 十年同行</text>
      </svg>
    `.trim();
    downloadSvgAsPng(posterSvg, "taptap-10y-memorial.png", { scale: 2 });
  });
}

function openShareRecapModal({ onClose } = {}) {
  const recap = state.careerSnapshot?.recap || recapDataForState(state);
  const url = shareUrlForRoute("sharerecap");
  const qr = qrSvgHtml(url);

  if (typeof onClose === "function") _modalAfterClose.push(onClose);

  const nick = String(state.profile?.nickname || "").trim() || "TapTap 用户";
  const pid = String(state.profile?.id || "").trim() || "—";

  const body = `
    <div style="line-height:1.55">
      <div style="margin-bottom:12px">
        <div style="font-weight:950; font-size:14px; letter-spacing:.2px">${escapeHtml(nick)}</div>
        <div class="muted small" style="margin-top:2px">ID ${escapeHtml(pid)}</div>
      </div>
      ${shareCardHtml(state, recap, { variant: "recap" })}
      <div class="divider"></div>
      <div class="share-qr">
        <div class="share-qr__box" aria-label="二维码">${qr}</div>
        <div class="muted small share-qr__txt"><span class="mono">${escapeHtml(url)}</span></div>
      </div>
    </div>
  `;

  const footer = `
    <button class="btn" id="btnShareTo" type="button">分享至</button>
    <button class="btn btn--brand" id="btnDownloadShareImg" type="button">下载图片</button>
  `;

  openModal({ title: "分享我的十年回顾", bodyHtml: body, footerHtml: footer });

  $("#btnShareTo")?.addEventListener("click", async () => {
    const text = shareRecapTextForShare(recap);
    try {
      if (navigator.share) {
        await navigator.share({ title: "我的TapTap十年回顾", text, url });
        return;
      }
    } catch {
      // fallback to copy
    }
    try {
      await navigator.clipboard.writeText(url);
      toast("已复制链接，可粘贴分享");
    } catch {
      toast("分享失败（浏览器权限限制）");
    }
  });

  $("#btnDownloadShareImg")?.addEventListener("click", () => {
    const posterSvg = buildSharePosterSvg(state, recap, nick, pid, url, qr);
    downloadSvgAsPng(posterSvg, "taptap-10y-share.png", { scale: 2 });
  });
}

function buildSharePosterSvg(s, recap, nick, pid, url, qr) {
  const W = 1080, H = 1920;
  const color = MEM_CARD_COLORS.find((c) => c.id === s.memorial?.colorId) || MEM_CARD_COLORS[0];
  const kw = calcShareKeyword(recap);
  const genre = String(recap.topGenreLabel || "").trim();
  const belovedName = String(recap.belovedGameName || "").trim() || "—";
  const belovedIcon = String(recap.belovedGameIcon || "").trim() || "🎮";
  const belovedHours = Number(recap.belovedGameHours || 0);
  const fmtBH = (() => { if (belovedHours <= 0) return ""; if (belovedHours > 6000) return "6000+"; if (belovedHours < 1) return Math.max(0.1, belovedHours).toFixed(1); return String(Math.floor(belovedHours)); })();
  const togetherDays = calcDaysSince(parseCnDateToTs(recap.regDate));

  const fmtK = (n, max) => Number(n) > max ? max + "+" : fmt(Number(n));
  const fmtH = (h) => { const v = Number(h || 0); if (v <= 0) return "—"; if (v > 6000) return "6000+"; if (v < 1) return Math.max(0.1, v).toFixed(1); return String(Math.floor(v)); };
  const fmtW = (n) => { const v = Number(n || 0); if (v <= 0) return "0"; if (v < 10000) return fmt(v); const w = v / 10000; if (w >= 999.95) return "999.9万+"; return (w >= 1 && w % 1 < 0.05) ? Math.floor(w) + "万" : w.toFixed(1) + "万"; };
  const fmtD = (d) => (d == null || d <= 0) ? "—" : (d > 9999 ? "9999" : String(d));

  const top10 = Array.isArray(recap.belovedTop10) ? recap.belovedTop10.filter(g => String(g.name || "").trim()) : [];
  const topShow = top10.slice(0, 5);
  const cutN = (n) => { const t = String(n || ""); return t.length <= 6 ? t : t.slice(0, 5) + "…"; };

  const topIconsSvg = topShow.map((g, i) => {
    const x = 90 + i * 190;
    const icon = String(g.icon || "🎮").trim();
    const name = cutN(g.name);
    return `
      <rect x="${x}" y="0" width="160" height="160" rx="28" fill="rgba(255,255,255,.85)" stroke="rgba(15,23,42,.08)" stroke-width="2"/>
      <text x="${x + 80}" y="95" text-anchor="middle" font-size="56">${escapeXml(icon)}</text>
      <text x="${x + 80}" y="190" text-anchor="middle" font-size="22" font-weight="700" fill="#334155">${escapeXml(name)}</text>
    `;
  }).join("");

  const devGames = (Array.isArray(recap?.devGames) ? recap.devGames : []).filter(g => String(g.name || "").trim());
  const allKpis = [
    togetherDays > 0 && { dim: "days", label: "陪伴天数", value: fmtD(togetherDays) },
    Number(recap.gamesPlayedTotal || 0) > 0 && { dim: "games", label: "游玩数量", value: fmtK(recap.gamesPlayedTotal, 999) },
    Number(recap.playTimeHours || 0) > 0 && { dim: "hours", label: "冒险时长", value: fmtH(recap.playTimeHours) },
    genre && { dim: "genre", label: "冒险偏好", value: genre },
    Number(recap.achievementsTotal || 0) + Number(recap.platformBadgesTotal || 0) > 0 && { dim: "achieve", label: "成就与徽章", value: fmtK(Number(recap.achievementsTotal || 0) + Number(recap.platformBadgesTotal || 0), 9999) },
    Number(recap.reviewsCount || 0) > 0 && { dim: "reviews", label: "评价数", value: fmtK(recap.reviewsCount, 999) },
    Number(recap.communityPublished || 0) > 0 && { dim: "published", label: "社区发布", value: fmtK(recap.communityPublished, 9999) },
    Number(recap.communityLikesReceived || 0) > 0 && { dim: "likes", label: "获赞数", value: fmtW(recap.communityLikesReceived) },
    devGames.length > 0 && { dim: "dev", label: "我的作品", value: String(devGames.length) },
    (Number(recap.friendsCount || 0) + Number(recap.followersCount || 0)) > 0 && { dim: "social", label: "好友与粉丝", value: fmtK(Number(recap.friendsCount || 0) + Number(recap.followersCount || 0), 9999) },
    Number(recap.nightSurfDays || 0) > 0 && { dim: "night", label: "深夜冲浪", value: fmtK(recap.nightSurfDays, 999) },
  ].filter(Boolean);
  const hlDim = kw.dim;
  const hlIdx = allKpis.findIndex(k => k.dim === hlDim);
  if (hlIdx > 0) { const [item] = allKpis.splice(hlIdx, 1); allKpis.unshift(item); }

  const kpiCols = 4;
  const kpiCellW = Math.floor(900 / kpiCols);
  const kpisSvg = allKpis.map((k, i) => {
    const col = i % kpiCols;
    const row = Math.floor(i / kpiCols);
    const cx = 130 + col * kpiCellW + kpiCellW / 2;
    const cy = row * 110;
    const isHl = i === 0 && hlDim;
    const labelColor = isHl ? escapeXml(color.accent) : "rgba(15,23,42,.45)";
    const valueColor = isHl ? escapeXml(color.accent) : "#0F172A";
    const valueFz = isHl ? 48 : 38;
    return `
      ${isHl ? `<rect x="${cx - kpiCellW / 2 + 8}" y="${cy - 22}" width="${kpiCellW - 16}" height="90" rx="14" fill="${escapeXml(color.accent)}" opacity="0.08"/>` : ""}
      <text x="${cx}" y="${cy}" text-anchor="middle" font-size="22" font-weight="600" fill="${labelColor}">${escapeXml(k.label)}</text>
      <text x="${cx}" y="${cy + 48}" text-anchor="middle" font-size="${valueFz}" font-weight="900" fill="${valueColor}">${escapeXml(k.value)}</text>
    `;
  }).join("");

  const qrSized = String(qr).replace("<svg ", `<svg x="390" y="0" width="300" height="300" `);

  const heroY = 240;
  const heroH = 360;
  const topListY = heroY + heroH + 40;
  const topListH = 210;
  const kwY = topListY + topListH + 30;
  const kpiY = kwY + 130;
  const kpiRows = Math.ceil(allKpis.length / kpiCols);
  const kpiH = kpiRows * 110 + 20;
  const qrY = kpiY + kpiH + 50;

  return `
    <svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="${escapeXml(color.panel)}"/>
          <stop offset="1" stop-color="#FFFFFF"/>
        </linearGradient>
      </defs>
      <rect width="${W}" height="${H}" fill="url(#bg)"/>
      <circle cx="160" cy="180" r="280" fill="${escapeXml(color.accent)}" opacity="0.08"/>
      <circle cx="920" cy="240" r="320" fill="${escapeXml(color.accent)}" opacity="0.06"/>

      <text x="90" y="120" font-size="32" font-weight="700" fill="#334155">${escapeXml(nick)}</text>
      <text x="90" y="165" font-size="24" font-weight="600" fill="#64748B">ID ${escapeXml(pid)}</text>
      <text x="990" y="120" text-anchor="end" font-size="48" font-weight="900" fill="#0F172A">TapTap 十周年回顾</text>
      <rect x="900" y="135" width="90" height="32" rx="10" fill="${escapeXml(color.accent)}"/>
      <text x="945" y="158" text-anchor="middle" font-size="18" font-weight="800" fill="#FFFFFF">TapTap</text>

      <rect x="90" y="${heroY}" width="900" height="${heroH}" rx="36" fill="rgba(255,255,255,.85)" stroke="rgba(15,23,42,.08)" stroke-width="2"/>
      <text x="540" y="${heroY + 120}" text-anchor="middle" font-size="100">${escapeXml(belovedIcon)}</text>
      <text x="540" y="${heroY + 200}" text-anchor="middle" font-size="32" font-weight="800" fill="#0F172A">我的十年挚爱「${escapeXml(belovedName)}」</text>
      ${fmtBH ? `
        <rect x="420" y="${heroY + 230}" width="240" height="60" rx="30" fill="${escapeXml(color.accent)}"/>
        <text x="540" y="${heroY + 270}" text-anchor="middle" font-size="32" font-weight="900" fill="#FFFFFF">${escapeXml(fmtBH)} 小时</text>
      ` : ""}

      ${topShow.length > 0 ? `
        <text x="90" y="${topListY}" font-size="28" font-weight="800" fill="#0F172A">我的十年挚爱Top榜</text>
        <g transform="translate(0 ${topListY + 20})">${topIconsSvg}</g>
      ` : ""}

      <text x="90" y="${kwY}" font-size="24" font-weight="600" fill="rgba(15,23,42,.45)">十年关键词</text>
      <text x="90" y="${kwY + 60}" font-size="56" font-weight="950" fill="#0F172A">${escapeXml(kw.keyword)}</text>

      <rect x="90" y="${kpiY}" width="900" height="${kpiH + 30}" rx="28" fill="rgba(255,255,255,.7)" stroke="rgba(15,23,42,.05)" stroke-width="2"/>
      <g transform="translate(0 ${kpiY + 40})">${kpisSvg}</g>

      <rect x="90" y="${qrY}" width="900" height="420" rx="36" fill="rgba(255,255,255,.85)" stroke="rgba(15,23,42,.06)" stroke-width="2"/>
      <g transform="translate(0 ${qrY + 30})">${qrSized}</g>
      <text x="540" y="${qrY + 370}" text-anchor="middle" font-size="26" font-weight="800" fill="#0F172A">扫码查看完整十年回顾</text>
      <text x="540" y="${qrY + 405}" text-anchor="middle" font-size="20" font-weight="600" fill="#64748B">${escapeXml(url)}</text>

      <text x="540" y="${H - 40}" text-anchor="middle" font-size="22" font-weight="800" fill="${escapeXml(color.accent)}">TapTap 十周年 · 十年同行</text>
    </svg>
  `.trim();
}

function shareYearbookPoster() {
  const snapshot = state.careerSnapshot || {};
  const snap = snapshot.recap || {};
  const topGames = Array.isArray(snap.yearlyTopGames)
    ? snap.yearlyTopGames.filter(d => Number(d.hours) > 0 && String(d.gameName || "").trim())
    : [];
  if (topGames.length === 0) { toast("暂无年历数据"); return; }

  const prof = state.profile || {};
  const nick = escapeXml(String(prof.nickname || "玩家").slice(0, 12));
  const fmtYbH = (h) => h > 600 ? "600+h" : Math.floor(h) + "h";
  const cutN = (n) => { const s = String(n || ""); return s.length <= 7 ? s : s.slice(0, 6) + "…"; };

  const url = shareUrlForRoute("home");
  const qr = qrSvgHtml(url);

  const W = 1080, cols = 4;
  const cellW = 220, cellH = 200, cellGap = 16, gridPadX = 60;
  const rows = Math.ceil(topGames.length / cols);
  const gridH = rows * cellH + (rows - 1) * cellGap;
  const qrBlockH = 140;
  const H = 360 + gridH + 120 + qrBlockH + 100;

  const cellsSvg = topGames.map((d, i) => {
    const col = i % cols, row = Math.floor(i / cols);
    const x = gridPadX + col * (cellW + cellGap);
    const y = 320 + row * (cellH + cellGap);
    const cx = x + cellW / 2;
    const icon = escapeXml(String(d.gameIcon || "🎮"));
    const name = escapeXml(cutN(d.gameName));
    const hrs = escapeXml(fmtYbH(Number(d.hours)));
    return `
      <rect x="${x}" y="${y}" width="${cellW}" height="${cellH}" rx="16" fill="rgba(255,255,255,.7)" stroke="rgba(255,255,255,.9)" stroke-width="1"/>
      <text x="${cx}" y="${y + 32}" text-anchor="middle" font-size="22" font-weight="800" fill="rgba(15,23,42,.45)">${d.year}</text>
      <text x="${cx}" y="${y + 90}" text-anchor="middle" font-size="48">${icon}</text>
      <text x="${cx}" y="${y + 140}" text-anchor="middle" font-size="20" font-weight="700" fill="#0F172A">${name}</text>
      <text x="${cx}" y="${y + 172}" text-anchor="middle" font-size="22" font-weight="800" fill="#00B894">${hrs}</text>
    `;
  }).join("");

  const posterSvg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
      <defs>
        <linearGradient id="ybBg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#DBEAFE"/>
          <stop offset="1" stop-color="#EDE9FE"/>
        </linearGradient>
      </defs>
      <rect width="${W}" height="${H}" fill="url(#ybBg)"/>
      <circle cx="200" cy="120" r="260" fill="rgba(255,255,255,.18)"/>
      <circle cx="900" cy="80" r="200" fill="rgba(255,255,255,.12)"/>

      <text x="60" y="80" font-size="32" font-weight="950" fill="#0F172A">TapTap</text>
      <text x="${W - 60}" y="80" text-anchor="end" font-size="20" font-weight="800" fill="rgba(15,23,42,.25)" letter-spacing="2">ADVENTURE ARCHIVE</text>

      <text x="${W / 2}" y="180" text-anchor="middle" font-size="48" font-weight="950" fill="#0F172A">${nick} 的每年挚爱</text>

      <rect x="40" y="240" width="${W - 80}" height="${gridH + 120}" rx="28" fill="rgba(255,255,255,.55)" stroke="rgba(255,255,255,.8)" stroke-width="1"/>

      ${cellsSvg}

      <text x="60" y="${360 + gridH + 120 + 50}" font-size="24" font-weight="800" fill="#0F172A">扫描二维码</text>
      <text x="60" y="${360 + gridH + 120 + 86}" font-size="18" font-weight="600" fill="#64748B">查看你的 TapTap 十周年每年挚爱</text>
      ${String(qr).replace("<svg ", `<svg x="${W - 60 - 110}" y="${360 + gridH + 120 + 16}" width="110" height="110" `)}

      <text x="${W / 2}" y="${H - 50}" text-anchor="middle" font-size="22" font-weight="800" fill="#00B894">TapTap 十周年 · 十年同行</text>
      <text x="${W / 2}" y="${H - 18}" text-anchor="middle" font-size="16" font-weight="600" fill="rgba(15,23,42,.3)">数据由预约下载、冒险时长、内容浏览等综合行为产生</text>
    </svg>
  `.trim();

  const svgDataUrl = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(posterSvg);
  openModal({
    title: "每年挚爱 · 分享海报",
    bodyHtml: `<div style="padding:16px;text-align:center">
      <img src="${svgDataUrl}" style="width:100%;max-width:480px;border-radius:12px;box-shadow:0 2px 12px rgba(0,0,0,.1)" alt="年历海报"/>
      <div style="margin-top:12px;font-size:12px;color:rgba(15,23,42,.4)">长按图片保存或截图分享</div>
    </div>`,
  });
}

function wireSharePage() {
  $("#btnCopyShareUrl")?.addEventListener("click", async () => {
    const url = `${location.origin}${location.pathname}${location.search || ""}${location.hash || ""}`;
    try {
      await navigator.clipboard.writeText(url);
      toast("已复制链接");
    } catch {
      toast("复制失败（浏览器权限限制）");
    }
  });
}

function openMemorialEditModal() {
  const recap = state.careerSnapshot?.recap || recapDataForState(state);
  const body = memorialInlineView(state, recap, { editOnly: true });
  openModal({ title: "十周年名片", bodyHtml: body, footerHtml: "" });
  // 在弹窗 header 的关闭按钮旁插入「保存为图片」和「分享」按钮
  const header = document.querySelector("#modal .modal__header");
  if (header) {
    const closeBtnEl = header.querySelector("#modalClose");
    if (!header.querySelector("#btnSaveImage")) {
      const saveImgBtn = document.createElement("button");
      saveImgBtn.className = "btn btn--brand";
      saveImgBtn.id = "btnSaveImage";
      saveImgBtn.type = "button";
      saveImgBtn.style.cssText = "min-height:32px; padding:6px 12px; font-size:12px; margin-right:4px;";
      saveImgBtn.textContent = "保存为图片";
      closeBtnEl?.before(saveImgBtn);
    }
    if (!header.querySelector("#btnShareMemorial")) {
      const shareBtn = document.createElement("button");
      shareBtn.className = "btn btn--brand";
      shareBtn.id = "btnShareMemorial";
      shareBtn.type = "button";
      shareBtn.style.cssText = "min-height:32px; padding:6px 12px; font-size:12px; margin-right:8px;";
      shareBtn.textContent = "分享";
      closeBtnEl?.before(shareBtn);
    }
  }
  wireMemorialInline({ inModal: true });
}

/* ── 存图功能 ──────────────────────────────────── */

/** 从 CSS bg 字符串末尾提取纯色值，如 "radial-gradient(...), #F7E3C5" → "#F7E3C5" */
function extractSolidColor(cssBg) {
  const m = cssBg.match(/#[0-9A-Fa-f]{3,8}(?:\s*$)/);
  if (m) return m[0].trim();
  const m2 = cssBg.match(/(rgba?\([^)]+\))\s*$/);
  if (m2) return m2[1];
  return "#FFFFFF";
}

function openSaveImageModal() {
  const s = state;
  const prof = s.profile || { nickname: "玩家", id: "—", identity: "", bio: "" };
  const nickname = String(prof.nickname || "").trim() || "玩家";
  const pid = String(prof.id || "").trim() || "—";
  const identity = String(prof.identity || "").trim() || identityTitleForRecap(s.careerSnapshot?.recap || recapDataForState(s));
  const bio = String(prof.bio || "").trim();
  const color = MEM_CARD_COLORS.find((c) => c.id === s.memorial?.colorId) || MEM_CARD_COLORS[0];
  const avatar = MEM_AVATARS.find((x) => x.id === s.memorial?.avatarId) || MEM_AVATARS[0];
  const frameEquipped = s.equipped.frame === MEM_SHOP.frame.id;
  const badgeEquipped = s.equipped.badge === MEM_SHOP.badge.id;
  const stickerList = (Array.isArray(s.memorial?.stickers) ? s.memorial.stickers : []).slice(0, 10);

  // 从 CSS 渐变字符串中提取可用的纯色
  const bgSolid = extractSolidColor(color.bg);
  const bgPanel = color.panel || "#FFFFFF";
  const bgAccent = color.accent || "#00b894";

  const body = `
    <div class="save-img">
      <div class="save-img__preview-area">
        <div class="save-img__canvas-wrap" id="canvasWrap">
          <canvas id="saveImgCanvas"></canvas>
          <div class="save-img__crop-ring" id="cropRing"></div>
        </div>
      </div>

      <div class="save-img__controls">
        <div class="save-img__section">
          <div class="save-img__label">显示内容</div>
          <div class="save-img__checks">
            <label class="save-img__check"><input type="checkbox" id="chkBg" checked> 背景</label>
            <label class="save-img__check"><input type="checkbox" id="chkSticker" checked> 贴纸</label>
            <label class="save-img__check"><input type="checkbox" id="chkAvatar" checked> 角色</label>
          </div>
        </div>

        <div class="save-img__section">
          <div class="save-img__label">裁剪形状</div>
          <div class="save-img__shapes">
            <button class="btn save-img__shape-btn save-img__shape-btn--active" data-shape="square" type="button">◻ 方形</button>
            <button class="btn save-img__shape-btn" data-shape="circle" type="button">◯ 圆形</button>
          </div>
        </div>

        <div class="save-img__section" id="sizeSquareSection">
          <div class="save-img__label">宽度</div>
          <input type="range" id="cropW" class="save-img__range" min="20" max="100" value="80">
          <span class="save-img__val" id="valW">80%</span>
        </div>
        <div class="save-img__section" id="sizeSquareSection2">
          <div class="save-img__label">高度</div>
          <input type="range" id="cropH" class="save-img__range" min="20" max="100" value="80">
          <span class="save-img__val" id="valH">80%</span>
        </div>
        <div class="save-img__section hidden" id="sizeCircleSection">
          <div class="save-img__label">大小</div>
          <input type="range" id="cropD" class="save-img__range" min="20" max="100" value="80">
          <span class="save-img__val" id="valD">80%</span>
        </div>

        <button class="btn btn--brand save-img__download" id="btnDownloadImg" type="button">保存图片</button>
      </div>
    </div>
  `;

  openModal({ title: "保存为图片", bodyHtml: body, footerHtml: "" });
  // header 加入「返回名片」按钮
  const header = document.querySelector("#modal .modal__header");
  if (header && !header.querySelector("#btnBackToMemorial")) {
    const backBtn = document.createElement("button");
    backBtn.className = "btn";
    backBtn.id = "btnBackToMemorial";
    backBtn.type = "button";
    backBtn.style.cssText = "min-height:32px; padding:6px 12px; font-size:12px; margin-right:8px;";
    backBtn.textContent = "返回名片";
    header.querySelector("#modalClose")?.before(backBtn);
    backBtn.addEventListener("click", () => openMemorialEditModal());
  }

  // ── 状态 ──
  let showBg = true;
  let showSticker = true;
  let showAvatar = true;
  let cropShape = "square";
  let cropWPct = 80;   // 方形：宽%
  let cropHPct = 80;   // 方形：高%
  let cropDPct = 80;   // 圆形：直径%
  let cropCx = 50;     // 裁剪中心 x%
  let cropCy = 50;     // 裁剪中心 y%

  const canvas = $("#saveImgCanvas");
  const ctx = canvas?.getContext("2d");
  const cropRing = $("#cropRing");
  const canvasWrap = $("#canvasWrap");
  if (!canvas || !ctx || !canvasWrap) return;

  const CARD_W = 600;
  const CARD_H = 600;
  canvas.width = CARD_W;
  canvas.height = CARD_H;

  // ── 绘制名片到 canvas ──
  function drawCard() {
    ctx.clearRect(0, 0, CARD_W, CARD_H);

    // 背景
    if (showBg) {
      // 底色
      ctx.fillStyle = bgSolid;
      ctx.fillRect(0, 0, CARD_W, CARD_H);
      // 叠加渐变装饰
      ctx.save();
      const g1 = ctx.createRadialGradient(CARD_W * 0.2, 0, 0, CARD_W * 0.2, 0, CARD_W * 0.7);
      g1.addColorStop(0, "rgba(255,255,255,0.32)");
      g1.addColorStop(1, "transparent");
      ctx.fillStyle = g1;
      ctx.fillRect(0, 0, CARD_W, CARD_H);
      const g2 = ctx.createRadialGradient(CARD_W * 0.8, CARD_H * 0.1, 0, CARD_W * 0.8, CARD_H * 0.1, CARD_W * 0.6);
      g2.addColorStop(0, bgAccent + "18");
      g2.addColorStop(1, "transparent");
      ctx.fillStyle = g2;
      ctx.fillRect(0, 0, CARD_W, CARD_H);
      ctx.restore();
    } else {
      ctx.fillStyle = "#FFFFFF";
      ctx.fillRect(0, 0, CARD_W, CARD_H);
    }

    // 角色（居中显示）
    if (showAvatar) {
      const avX = CARD_W / 2, avY = CARD_H / 2;
      if (avatar.isProfileAvatar) {
        ctx.save();
        // 白底方块
        const boxS = 100;
        const bx = avX - boxS / 2, by = avY - boxS / 2;
        ctx.fillStyle = "#FFFFFF";
        ctx.strokeStyle = "rgba(15,23,42,0.10)";
        ctx.lineWidth = 2;
        roundRect(ctx, bx, by, boxS, boxS, 20);
        ctx.fill();
        ctx.stroke();
        // 文字
        ctx.fillStyle = "rgba(15,23,42,0.45)";
        ctx.font = "bold 20px system-ui, sans-serif";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText("TapTap", avX, avY - 10);
        ctx.fillText("头像", avX, avY + 16);
        ctx.restore();
      } else {
        ctx.save();
        ctx.font = "80px serif";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(avatar.icon, avX, avY);
        ctx.restore();
      }
    }

    // 贴纸
    if (showSticker && stickerList.length) {
      stickerList.forEach((st) => {
        const id = String(st?.id || "").trim();
        const def = MEM_STICKERS.find((x) => x.id === id) || MEM_STICKERS[0];
        const sx = (Number(st?.x ?? 50) / 100) * CARD_W;
        const sy = (Number(st?.y ?? 22) / 100) * CARD_H;
        const sc = Math.max(0.6, Math.min(1.8, Number(st?.s ?? 1)));
        const r = Number(st?.r ?? 0) * Math.PI / 180;
        ctx.save();
        ctx.translate(sx, sy);
        ctx.rotate(r);
        ctx.font = `${Math.round(40 * sc)}px serif`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(def.icon, 0, 0);
        ctx.restore();
      });
    }

    // 文本信息不绘制，存图仅保留视觉元素（背景/贴纸/角色）
  }

  /** Canvas 圆角矩形辅助 */
  function roundRect(c, x, y, w, h, r) {
    c.beginPath();
    c.moveTo(x + r, y);
    c.lineTo(x + w - r, y);
    c.quadraticCurveTo(x + w, y, x + w, y + r);
    c.lineTo(x + w, y + h - r);
    c.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
    c.lineTo(x + r, y + h);
    c.quadraticCurveTo(x, y + h, x, y + h - r);
    c.lineTo(x, y + r);
    c.quadraticCurveTo(x, y, x + r, y);
    c.closePath();
  }

  // ── 裁剪框更新 ──
  function clampCenter() {
    if (cropShape === "circle") {
      const half = cropDPct / 2;
      cropCx = Math.max(half, Math.min(100 - half, cropCx));
      cropCy = Math.max(half, Math.min(100 - half, cropCy));
    } else {
      const halfW = cropWPct / 2, halfH = cropHPct / 2;
      cropCx = Math.max(halfW, Math.min(100 - halfW, cropCx));
      cropCy = Math.max(halfH, Math.min(100 - halfH, cropCy));
    }
  }

  function updateCropRing() {
    if (!cropRing) return;
    clampCenter();
    if (cropShape === "circle") {
      cropRing.style.width = cropDPct + "%";
      cropRing.style.height = cropDPct + "%";
      cropRing.style.borderRadius = "50%";
    } else {
      cropRing.style.width = cropWPct + "%";
      cropRing.style.height = cropHPct + "%";
      cropRing.style.borderRadius = "8px";
    }
    cropRing.style.left = cropCx + "%";
    cropRing.style.top = cropCy + "%";
  }

  function updateSizeUI() {
    const sqSec1 = $("#sizeSquareSection");
    const sqSec2 = $("#sizeSquareSection2");
    const cirSec = $("#sizeCircleSection");
    if (cropShape === "square") {
      sqSec1?.classList.remove("hidden");
      sqSec2?.classList.remove("hidden");
      cirSec?.classList.add("hidden");
    } else {
      sqSec1?.classList.add("hidden");
      sqSec2?.classList.add("hidden");
      cirSec?.classList.remove("hidden");
    }
  }

  function redraw() {
    drawCard();
    updateCropRing();
  }

  // ── 事件：勾选 ──
  $("#chkBg")?.addEventListener("change", (e) => { showBg = e.target.checked; redraw(); });
  $("#chkSticker")?.addEventListener("change", (e) => { showSticker = e.target.checked; redraw(); });
  $("#chkAvatar")?.addEventListener("change", (e) => { showAvatar = e.target.checked; redraw(); });

  // ── 事件：形状切换 ──
  $$("[data-shape]").forEach((b) => b.addEventListener("click", () => {
    cropShape = b.dataset.shape || "square";
    $$("[data-shape]").forEach((x) => x.classList.toggle("save-img__shape-btn--active", x.dataset.shape === cropShape));
    updateSizeUI();
    redraw();
  }));

  // ── 事件：大小滑块 ──
  $("#cropW")?.addEventListener("input", (e) => { cropWPct = Number(e.target.value) || 80; $("#valW").textContent = cropWPct + "%"; redraw(); });
  $("#cropH")?.addEventListener("input", (e) => { cropHPct = Number(e.target.value) || 80; $("#valH").textContent = cropHPct + "%"; redraw(); });
  $("#cropD")?.addEventListener("input", (e) => { cropDPct = Number(e.target.value) || 80; $("#valD").textContent = cropDPct + "%"; redraw(); });

  // ── 事件：拖拽裁剪框中心 ──
  {
    let dragging = false;
    let startMx = 0, startMy = 0;
    let startCx = 0, startCy = 0;

    const onPointerDown = (e) => {
      dragging = true;
      startMx = e.clientX;
      startMy = e.clientY;
      startCx = cropCx;
      startCy = cropCy;
      cropRing.setPointerCapture(e.pointerId);
      cropRing.style.cursor = "grabbing";
      e.preventDefault();
    };
    const onPointerMove = (e) => {
      if (!dragging) return;
      const rect = canvasWrap.getBoundingClientRect();
      const dx = ((e.clientX - startMx) / rect.width) * 100;
      const dy = ((e.clientY - startMy) / rect.height) * 100;
      cropCx = startCx + dx;
      cropCy = startCy + dy;
      updateCropRing();
    };
    const onPointerUp = () => {
      dragging = false;
      cropRing.style.cursor = "";
    };
    cropRing.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", onPointerUp);
  }

  // ── 下载 ──
  $("#btnDownloadImg")?.addEventListener("click", () => {
    const exportLong = 1200;
    const off = document.createElement("canvas");
    const octx = off.getContext("2d");
    if (!octx) return;

    clampCenter();

    if (cropShape === "circle") {
      const srcD = Math.round(CARD_W * cropDPct / 100);
      const srcX = Math.round(CARD_W * cropCx / 100 - srcD / 2);
      const srcY = Math.round(CARD_H * cropCy / 100 - srcD / 2);
      off.width = exportLong;
      off.height = exportLong;
      octx.beginPath();
      octx.arc(exportLong / 2, exportLong / 2, exportLong / 2, 0, Math.PI * 2);
      octx.closePath();
      octx.clip();
      octx.drawImage(canvas, srcX, srcY, srcD, srcD, 0, 0, exportLong, exportLong);
    } else {
      const srcW = Math.round(CARD_W * cropWPct / 100);
      const srcH = Math.round(CARD_H * cropHPct / 100);
      const srcX = Math.round(CARD_W * cropCx / 100 - srcW / 2);
      const srcY = Math.round(CARD_H * cropCy / 100 - srcH / 2);
      // 按较长边缩放到 exportLong
      const aspect = srcW / srcH;
      let outW, outH;
      if (aspect >= 1) { outW = exportLong; outH = Math.round(exportLong / aspect); }
      else { outH = exportLong; outW = Math.round(exportLong * aspect); }
      off.width = outW;
      off.height = outH;
      octx.drawImage(canvas, srcX, srcY, srcW, srcH, 0, 0, outW, outH);
    }

    off.toBlob((blob) => {
      if (!blob) return toast("导出失败");
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `taptap-10y-card-${Date.now()}.png`;
      a.click();
      setTimeout(() => URL.revokeObjectURL(url), 5000);
      toast("图片已保存");
    }, "image/png");
  });

  // 首次绘制
  updateSizeUI();
  redraw();
}

function openShopModal() {
  const body = shopModalView(state);
  openModal({ title: "积分商店", bodyHtml: body, footerHtml: "" });
  wireShop({ inModal: true });
}

function shopModalView(s) {
  const frameCards = SHOP_ITEMS.frames.map((f) => shopItemCard("frame", f, s)).join("");
  const badgeCards = SHOP_ITEMS.badges.map((b) => shopItemCard("badge", b, s)).join("");
  const today = dayKeyLocal();
  const already = String(s.daily?.lotteryDayKey || "") === today;
  return `
    <div>
      <div style="margin-bottom:12px">
        <span class="pill pill--brand">当前积分：<b>${fmt(s.points)}</b></span>
      </div>
      <div class="list">${frameCards}</div>
      <div class="divider"></div>
      <div class="list">${badgeCards}</div>
      <div class="divider"></div>
      <div class="item" style="margin-top:10px">
        <div class="row">
          <div class="grow">
            <div class="item__title">${SHOP_ITEMS.lottery.title}</div>
            <div class="item__desc">每日限 1 次，消耗 ${SHOP_ITEMS.lottery.cost} 积分抽取点券（可能抽不到）。</div>
          </div>
          <span class="pill">-${SHOP_ITEMS.lottery.cost} 积分</span>
        </div>
        <div class="item__meta">
          <span class="tag">${already ? "今天已抽" : "今日可抽"}</span>
          <button class="btn btn--brand" id="btnLottery" ${already ? "disabled" : ""}>${already ? "今日已抽" : "每日抽一次"}</button>
        </div>
      </div>
    </div>
  `;
}

function wireMemorialInline({ inModal = false } = {}) {
  $("#btnShareMemorial")?.addEventListener("click", () => openShareMemorialModal());
  $("#btnSaveImage")?.addEventListener("click", () => openSaveImageModal());

  const MEM_PRICING = { color: 20, sticker: 15, avatar: 30 };
  const unlockKindMap = { color: "colors", sticker: "stickers", avatar: "avatars" };
  const titleOf = {
    color: (id) => MEM_CARD_COLORS.find((x) => x.id === id)?.label || "配色",
    sticker: (id) => MEM_STICKERS.find((x) => x.id === id)?.label || "贴纸",
    avatar: (id) => MEM_AVATARS.find((x) => x.id === id)?.label || "角色",
  };

  const openSpendModal = ({ title, cost, onConfirm }) => {
    const enough = (state.points || 0) >= cost;
    const body = `
      <div class="small" style="line-height:1.6">
        <div class="hint">
          <b>${escapeHtml(title)}</b>
          <div class="muted small" style="margin-top:6px">消耗 <b>${fmt(cost)}</b> 积分</div>
        </div>
        <div class="divider"></div>
        <div class="muted small">当前积分：<b>${fmt(state.points || 0)}</b></div>
        ${enough ? "" : `<div class="muted small" style="margin-top:6px">积分不足，去试玩/回顾领奖赚积分吧。</div>`}
      </div>
    `;
    const footer = enough
      ? `<button class="btn" id="btnSpendCancel">取消</button><button class="btn btn--brand" id="btnSpendOk">${fmt(cost)}积分兑换</button>`
      : `<button class="btn btn--brand" id="btnSpendOk">知道了</button>`;
    openModal({ title: enough ? "确认兑换" : "积分不足", bodyHtml: body, footerHtml: footer });
    $("#btnSpendCancel")?.addEventListener("click", closeModal);
    $("#btnSpendOk")?.addEventListener("click", () => {
      if (!enough) return closeModal();
      onConfirm?.();
    });
  };

  $$("[data-mem-tab]").forEach((b) =>
    b.addEventListener("click", () => {
      const t = String(b.dataset.memTab || "");
      if (!["color", "sticker", "avatar"].includes(t)) return;
      state.memorial.tab = t;
      saveState();
      if (inModal) { openMemorialEditModal(); } else { render(); }
    }),
  );

  const ensureUnlockList = (k) => {
    if (!state.memorialUnlocks || typeof state.memorialUnlocks !== "object") state.memorialUnlocks = { colors: [], stickers: [], avatars: [] };
    if (!Array.isArray(state.memorialUnlocks[k])) state.memorialUnlocks[k] = [];
    return state.memorialUnlocks[k];
  };
  const ensureStickers = () => {
    if (!state.memorial || typeof state.memorial !== "object") state.memorial = { tab: "color", colorId: "mc_cream", stickers: [], activeStickerIdx: 0, stickerId: "", avatarId: "ma_me" };
    if (!Array.isArray(state.memorial.stickers)) state.memorial.stickers = [];
    return state.memorial.stickers;
  };
  const applyStickerOnce = (id) => {
    const sid = String(id || "").trim();
    if (!sid) return false;
    const stickers = ensureStickers();
    const idx = stickers.findIndex((x) => String(x?.id || "").trim() === sid);
    if (idx >= 0) {
      state.memorial.activeStickerIdx = idx;
      // Keep legacy field updated for debug compatibility
      state.memorial.stickerId = sid;
      return false;
    }
    if (stickers.length >= 10) {
      toast("贴纸太多啦，先调整一下再添加");
      return false;
    }
    stickers.push({ id: sid, x: 76, y: 26, s: 1, r: 0 });
    state.memorial.activeStickerIdx = Math.max(0, stickers.length - 1);
    // Keep legacy field updated for debug compatibility
    state.memorial.stickerId = sid;
    return true;
  };
  const toggleSticker = (id) => {
    const sid = String(id || "").trim();
    if (!sid) return false;
    const stickers = ensureStickers();
    const idx = stickers.findIndex((x) => String(x?.id || "").trim() === sid);
    if (idx >= 0) {
      stickers.splice(idx, 1);
      const next = Math.max(0, Math.min(Number(state.memorial.activeStickerIdx ?? 0), stickers.length - 1));
      state.memorial.activeStickerIdx = next;
      state.memorial.stickerId = String(stickers[next]?.id || "").trim();
      return true;
    }
    return applyStickerOnce(sid);
  };
  const refreshAfterChange = () => {
    if (inModal) { openMemorialEditModal(); } else { render(); }
  };
  const setOrBuy = (kind, id) => {
    const k = unlockKindMap[kind];
    const list = ensureUnlockList(k);
    const unlocked = list.includes(id);
    if (unlocked) {
      if (kind === "color") state.memorial.colorId = id;
      if (kind === "sticker") {
        // Toggle: click used sticker => remove; click unused => add once
        toggleSticker(id);
      }
      if (kind === "avatar") state.memorial.avatarId = id;
      saveState();
      refreshAfterChange();
      return;
    }
    const cost = MEM_PRICING[kind] || 0;
    openSpendModal({
      title: `解锁${kind === "color" ? "配色" : kind === "sticker" ? "贴纸" : "角色"}：${titleOf[kind](id)}`,
      cost,
      onConfirm: () => {
        if ((state.points || 0) < cost) return;
        state.points -= cost;
        list.push(id);
        if (kind === "color") state.memorial.colorId = id;
        if (kind === "sticker") {
          // After purchasing, always apply (add/select) immediately.
          applyStickerOnce(id);
        }
        if (kind === "avatar") state.memorial.avatarId = id;
        saveState();
        closeModal();
        toast("已解锁并应用");
        refreshAfterChange();
      },
    });
  };

  $$("[data-mem-color]").forEach((b) => b.addEventListener("click", () => setOrBuy("color", String(b.dataset.memColor || ""))));
  $$("[data-mem-sticker]").forEach((b) => b.addEventListener("click", () => setOrBuy("sticker", String(b.dataset.memSticker || ""))));
  $$("[data-mem-avatar]").forEach((b) => b.addEventListener("click", () => setOrBuy("avatar", String(b.dataset.memAvatar || ""))));

  // Multi-sticker interactions: select & drag
  try {
    const card = document.querySelector(".mem-card");
    const stickersWrap = document.querySelector(".mem-stickers");
    if (card && stickersWrap) {
      let draggingIdx = null;
      let pointerId = null;
      let draggingBtn = null;
      let lastClientX = null;
      let lastClientY = null;

      const clamp = (n, a, b) => Math.max(a, Math.min(b, n));
      const posToPct = (clientX, clientY) => {
        const r = card.getBoundingClientRect();
        const x = ((clientX - r.left) / Math.max(1, r.width)) * 100;
        const y = ((clientY - r.top) / Math.max(1, r.height)) * 100;
        return { x: clamp(x, 4, 96), y: clamp(y, 6, 92) };
      };

      const setActive = (idx) => {
        if (!Array.isArray(state.memorial.stickers)) state.memorial.stickers = [];
        const i = clamp(Number(idx) || 0, 0, Math.max(0, state.memorial.stickers.length - 1));
        state.memorial.activeStickerIdx = i;
        saveState();
        render();
      };

      // Click-to-select (bind directly to sticker buttons to avoid relying on wrapper events)
      stickersWrap.querySelectorAll("[data-mem-sticker-idx]").forEach((btn) => {
        btn.addEventListener("click", () => {
          const idx = Number(btn.getAttribute("data-mem-sticker-idx") || 0);
          setActive(idx);
        });
      });

      const onMove = (e) => {
        if (draggingIdx == null) return;
        if (pointerId != null && e.pointerId != null && e.pointerId !== pointerId) return;
        if (!Array.isArray(state.memorial.stickers) || !state.memorial.stickers[draggingIdx]) return;
        const cx = Number.isFinite(e.clientX) ? e.clientX : lastClientX;
        const cy = Number.isFinite(e.clientY) ? e.clientY : lastClientY;
        if (!Number.isFinite(cx) || !Number.isFinite(cy)) return;
        lastClientX = cx;
        lastClientY = cy;
        const p = posToPct(cx, cy);
        state.memorial.stickers[draggingIdx].x = p.x;
        state.memorial.stickers[draggingIdx].y = p.y;
        // Update element position without full render for smoothness
        const el = draggingBtn || stickersWrap.querySelector(`[data-mem-sticker-idx="${draggingIdx}"]`);
        if (el) {
          el.style.left = `${p.x}%`;
          el.style.top = `${p.y}%`;
        }
        e.preventDefault?.();
      };

      const endDrag = () => {
        if (draggingIdx == null) return;
        draggingIdx = null;
        pointerId = null;
        draggingBtn = null;
        lastClientX = null;
        lastClientY = null;
        window.removeEventListener("pointermove", onMove);
        window.removeEventListener("pointerup", endDrag);
        window.removeEventListener("pointercancel", endDrag);
        saveState();
      };

      // Drag start (bind directly to sticker buttons for better browser compatibility)
      stickersWrap.querySelectorAll("[data-mem-sticker-idx]").forEach((btn) => {
        btn.addEventListener("pointerdown", (e) => {
          const idx = Number(btn.getAttribute("data-mem-sticker-idx") || 0);
          if (!Number.isFinite(idx)) return;
          draggingIdx = clamp(idx, 0, Math.max(0, (state.memorial?.stickers || []).length - 1));
          pointerId = e.pointerId;
          draggingBtn = btn;
          lastClientX = e.clientX;
          lastClientY = e.clientY;
          try {
            btn.setPointerCapture(pointerId);
          } catch {}
          // Also select on drag start
          if (state.memorial.activeStickerIdx !== draggingIdx) {
            state.memorial.activeStickerIdx = draggingIdx;
            saveState();
          }
          // Start tracking on window so drag stays responsive even if events don't bubble via wrapper.
          window.addEventListener("pointermove", onMove, { passive: false });
          window.addEventListener("pointerup", endDrag, { passive: true });
          window.addEventListener("pointercancel", endDrag, { passive: true });
          e.preventDefault();
        });
      });
    }
  } catch {
    // ignore
  }

  $$("[data-mem-buy]").forEach((b) =>
    b.addEventListener("click", () => {
      const id = String(b.dataset.memBuy || "");

      if (id === "frame") {
        const item = MEM_SHOP.frame;
        if (state.inventory.frames.includes(item.id)) return;
        return openSpendModal({
          title: `兑换：${item.title}`,
          cost: item.cost,
          onConfirm: () => {
            state.points -= item.cost;
            state.inventory.frames.push(item.id);
            state.equipped.frame = item.id;
            saveState();
            closeModal();
            toast(`已兑换：${item.title}`);
            refreshAfterChange();
          },
        });
      }
      if (id === "badge") {
        const item = MEM_SHOP.badge;
        if (state.inventory.badges.includes(item.id)) return;
        return openSpendModal({
          title: `兑换：${item.title}`,
          cost: item.cost,
          onConfirm: () => {
            state.points -= item.cost;
            state.inventory.badges.push(item.id);
            state.equipped.badge = item.id;
            saveState();
            closeModal();
            toast(`已兑换：${item.title}`);
            refreshAfterChange();
          },
        });
      }
    }),
  );

  $$("[data-mem-equip]").forEach((b) =>
    b.addEventListener("click", () => {
      const kind = String(b.dataset.memEquip || "");
      if (kind === "frame") state.equipped.frame = MEM_SHOP.frame.id;
      if (kind === "badge") state.equipped.badge = MEM_SHOP.badge.id;
      saveState();
      toast("已设置为当前");
      refreshAfterChange();
    }),
  );

  $("#btnMemLottery")?.addEventListener("click", () => {
    const today = dayKeyLocal();
    if (String(state.daily?.lotteryDayKey || "") === today) return toast("今天已经抽过了");
    openSpendModal({
      title: "每日抽点券",
      cost: MEM_SHOP.lottery.cost,
      onConfirm: () => {
        if (!state.daily || typeof state.daily !== "object") state.daily = { lotteryDayKey: "" };
        state.points -= MEM_SHOP.lottery.cost;
        state.daily.lotteryDayKey = today;
        // No pity: random 1 coupon or none.
        const hit = Math.random() < 0.5;
        const add = hit ? 1 : 0;
        if (add > 0) addCoupons(state, add);
        saveState();
        closeModal();
        refreshAfterChange();
        openLotteryResultModal({ hit, add, cost: MEM_SHOP.lottery.cost });
      },
    });
  });
}

function recapInlineView(s, recap, { sortUnclaimedFirst = false } = {}) {
  const snapshot = s.careerSnapshot || { recap, grants: calcSnapshotGrants(recap) };
  const snap = snapshot.recap || recap;
  const togetherDays = calcDaysSince(parseCnDateToTs(snap.regDate));

  const snapshotCardsAll = [
    // 基础数据
    {
      label: "什么时候来到 TapTap",
      value: (() => {
        const regDate = (snap.regDate || "").trim();
        if (!regDate || togetherDays === null) return "";
        return `
          <div class="arrival-card">
            <div class="arrival-label">你来到 TapTap 的日子</div>
            <div class="arrival-date">${regDate}</div>
            <div class="arrival-days">
              <span class="arrival-days__num">${fmt(togetherDays)}</span>
              <span class="arrival-days__unit">天</span>
            </div>
            <div class="arrival-tagline">我们已经相伴走过这么多天了。</div>
          </div>
        `;
      })(),
      desc: "",
      rewardId: "snap_reg_active",
      visible: !!(snap.regDate || "").trim() && togetherDays !== null,
    },
    // 打开 TapTap 的时间习惯
    {
      label: "你和 TapTap 的时间默契",
      value: (() => {
        const slot = (snap.peakTimeSlot || "").trim();
        const nightCount = Number(snap.lateNightOpenCount || 0);
        if (!slot && nightCount <= 0) return "";

        const peakMap = {
          "12AM-6AM": { range: "00:00 — 05:59", text: "夜深了，世界在沉睡，你的故事才刚翻开新的一页。" },
          "6AM-12PM": { range: "06:00 — 11:59", text: "清晨的第一束光，和你一起照亮今天的冒险。" },
          "12PM-6PM": { range: "12:00 — 17:59", text: "午后的阳光洒进来，你按下了继续的按钮。" },
          "6PM-12AM": { range: "18:00 — 23:59", text: "星星亮了，你的冒险之夜正式开场。" },
        };
        const peak = peakMap[slot];

        const nightTextFn = (n) => {
          if (n >= 200) return "你好呀夜行者，月亮已经是你的老朋友了。";
          if (n >= 100) return "这些夜晚串起来，足够写一本冒险日记了。";
          if (n >= 50)  return "夜深人静，屏幕微光里藏着属于你的小世界。";
          return "偶尔晚睡，也许是因为舍不得放下手中的故事。";
        };

        let html = '<div class="timehabit-card">';
        if (peak) {
          html += `<div class="timehabit-label">最常打开 TapTap 的时段</div>`;
          html += `<div class="timehabit-range">${peak.range}</div>`;
          html += `<div class="timehabit-desc">${peak.text}</div>`;
        }
        if (nightCount > 0) {
          html += `<div class="timehabit-section">`;
          html += `<div class="timehabit-label">深夜打开 TapTap</div>`;
          html += `<div class="timehabit-hero"><span class="timehabit-hero__num">${fmt(nightCount)}</span><span class="timehabit-hero__unit">次</span></div>`;
          html += `<div class="timehabit-desc">${nightTextFn(nightCount)}</div>`;
          html += `</div>`;
        }
        html += '</div>';
        return html;
      })(),
      desc: "",
      rewardId: "snap_time_habit",
      visible: !!((snap.peakTimeSlot || "").trim()) || Number(snap.lateNightOpenCount || 0) > 0,
    },
    // 游戏预约
    {
      label: "我的预约",
      value: (() => {
        const RESERVE_ICON_COLORS = [
          "#F87171","#FB923C","#FBBF24","#34D399","#60A5FA",
          "#A78BFA","#F472B6","#38BDF8","#4ADE80","#FB7185",
          "#FACC15","#2DD4BF","#818CF8","#E879F9","#22D3EE",
        ];
        const rChar = (name) => {
          const raw = String(name || "").trim();
          const m = raw.match(/《([^》]+)》/);
          const inside = (m ? m[1] : raw).trim();
          const cleaned = inside.replace(/^TapTap制造[:：]/, "").split(/[:：]/).pop().trim();
          return Array.from(cleaned)[0] || "?";
        };
        const rIcon = (name, idx, size) => {
          const ch = rChar(name);
          const color = RESERVE_ICON_COLORS[idx % RESERVE_ICON_COLORS.length];
          const cls = size === "sm" ? "reserve-ico reserve-ico--sm" : "reserve-ico";
          return `<span class="${cls}" style="background:${color}">${ch}</span>`;
        };

        const count = Number(snap.reserveCount || 0);
        const allGames = Array.isArray(snap.reserveGames) ? snap.reserveGames : [];
        const launchedCount = Number(snap.reserveLaunchedCount || 0);
        const launchedGames = Array.isArray(snap.reserveLaunchedGames) ? snap.reserveLaunchedGames : [];
        const totalReserve = String(snap.taptapReserveTotal || "").trim();

        if (count <= 0 && allGames.length === 0) {
          return `
            <div class="reserve-card reserve-card--empty">
              <div class="reserve-empty-main">你还没有在TapTap预约过新作。</div>
              <div class="reserve-empty-sub">你的冒险地图上，仍有无限的未知等待你去探索。</div>
              ${totalReserve ? `<div class="reserve-footer">TapTap 新作预约量达到 <strong>${totalReserve}</strong></div>` : ""}
            </div>
          `;
        }

        const displayCount = count > 999 ? "999" : String(count);
        const showPlus = count > 999;

        const MAX_ICONS = 15;
        const needEllipsis = allGames.length > MAX_ICONS;
        const visibleGames = needEllipsis ? allGames.slice(0, MAX_ICONS - 1) : allGames.slice(0, MAX_ICONS);
        const gridHtml = visibleGames.map((g, i) => rIcon(g, i, "lg")).join("")
          + (needEllipsis ? `<span class="reserve-ico reserve-ico--more">···</span>` : "");

        const MAX_LAUNCHED = 10;
        const launchNeedEllipsis = launchedGames.length > MAX_LAUNCHED;
        const visibleLaunched = launchNeedEllipsis ? launchedGames.slice(0, MAX_LAUNCHED - 1) : launchedGames.slice(0, MAX_LAUNCHED);
        const launchGridHtml = visibleLaunched.map((g, i) => rIcon(g, i, "sm")).join("")
          + (launchNeedEllipsis ? `<span class="reserve-ico reserve-ico--sm reserve-ico--more">···</span>` : "");

        const showLaunched = launchedCount > 0 && launchedGames.length > 0;

        return `
          <div class="reserve-card">
            <div class="reserve-header">
              <div class="reserve-title">你预约过的新作</div>
              <div class="reserve-hero">
                <span class="reserve-count">${displayCount}</span>${showPlus ? `<span class="reserve-plus">+</span>` : ""}
                <span class="reserve-unit">款</span>
              </div>
            </div>
            <div class="reserve-grid">${gridHtml}</div>
            ${showLaunched ? `
              <div class="reserve-launched">
                <div class="reserve-launched__text">你预约的新作中，<br>有<strong>${fmt(launchedCount)}</strong>款已经上线啦！你的期待没有落空。</div>
                <div class="reserve-launched__icons">${launchGridHtml}</div>
              </div>
            ` : ""}
            ${totalReserve ? `<div class="reserve-footer">这十年间，TapTap 开启预约的新作达到 <strong>${totalReserve}</strong> 款</div>` : ""}
          </div>
        `;
      })(),
      desc: "",
      rewardId: "snap_reserve",
      visible: true,
    },
    // 在TapTap买了什么（购买游戏数 + 消费金额 + 游戏列表）
    {
      label: "在TapTap买了什么",
      value: (() => {
        const total = Number(snap.spendTotal || 0);
        const gameCount = Number(snap.spendGameCount || 0);
        const games = Array.isArray(snap.spendGames) ? snap.spendGames.map(g => String(g || "").trim()).filter(Boolean) : [];

        if (total <= 0 && gameCount <= 0 && games.length === 0) {
          return `
            <div class="spend-card spend-card--empty">
              <div class="spend-empty-main">你还没有购买过宝藏佳作。</div>
              <div class="spend-empty-sub">购物车空空？逛逛TapTap热卖榜，看看大家的选择~</div>
              <div class="spend-tagline">TapTap零氪榜 上榜玩家+1</div>
            </div>
          `;
        }

        const capCount = Math.min(gameCount, 999);
        const displayCount = capCount >= 999 ? "999+" : String(capCount);
        const fmtAmount = (() => {
          const capped = Math.min(total, 9999.9);
          const s = capped.toFixed(1);
          return s.endsWith(".0") ? s.slice(0, -2) : s;
        })();

        const MAX_SHOW = 3;
        const listHtml = games.slice(0, MAX_SHOW)
          .map(g => `<div class="spend-game">${escapeHtml(g)}</div>`)
          .join("");
        const moreHtml = games.length > MAX_SHOW ? `<div class="spend-game spend-game--more">···</div>` : "";

        return `
          <div class="spend-card">
            <div class="spend-hero">
              <span class="spend-label">购买宝藏佳作</span><span class="spend-hero__num">${displayCount}</span><span class="spend-hero__unit">款</span>
            </div>
            <div class="spend-list">${listHtml}${moreHtml}</div>
            <div class="spend-footer">
              <div class="spend-footer__amount">累计消费 <strong>${fmtAmount}</strong> 元</div>
              <div class="spend-footer__tagline">TapTap剁手榜 上榜玩家+1</div>
            </div>
          </div>
        `;
      })(),
      desc: "",
      rewardId: "snap_spend",
      visible: true,
    },
      // 十年生涯游玩数据
    {
      label: "生涯游玩数据",
      value: (() => {
        const totalGames = Number(snap.gamesPlayedTotal || 0);
        const totalHours = Number(snap.playTimeHours || 0);
        const firstName = String(snap.firstGameName || "").trim();
        const firstIcon = String(snap.firstGameIcon || "").trim();
        const plat = String(snap.platform || "").trim().toLowerCase();
        const yearly = Array.isArray(snap.yearlyData) ? snap.yearlyData.filter(d => (Number(d.games) > 0 || Number(d.hours) > 0)) : [];

        const fmtGameCount = (n) => n > 999 ? "999+" : String(n);
        const fmtHours = (h) => {
          if (h > 6000) return "6000+";
          if (h < 1) return Math.max(0.1, h).toFixed(1);
          return String(Math.floor(h));
        };
        const fmtChartGames = (n) => n > 999 ? "999+" : String(n);
        const fmtChartHours = (h) => h > 999 ? "999+" : String(Math.floor(h));

        const hasGames = totalGames > 0;
        const hasTime = totalHours > 0;

        let gamesHtml = "";
        if (hasGames) {
          gamesHtml = `
            <div class="playtime-section">
              <div class="playtime-label">生涯游玩数量</div>
              <div class="playtime-hero">
                <span class="playtime-hero__num">${fmtGameCount(totalGames)}</span><span class="playtime-hero__unit">款</span>
              </div>
              ${firstName ? `<div class="playtime-first">${firstIcon ? `<span class="playtime-first__icon">${firstIcon}</span>` : ""}我的首次游玩之旅：${escapeHtml(firstName)}</div>` : ""}
            </div>`;
        } else {
          gamesHtml = `
            <div class="playtime-section playtime-section--empty">
              <div class="playtime-label">生涯游玩时长</div>
              <div class="playtime-empty-main">还未开启冒险</div>
              <div class="playtime-empty-sub">有趣的世界正在等你，什么时候一起出发？</div>
            </div>`;
        }

        let timeHtml = "";
        if (hasTime) {
          timeHtml = `
            <div class="playtime-section">
              <div class="playtime-label">生涯游玩时长</div>
              <div class="playtime-hero">
                <span class="playtime-hero__num">${fmtHours(totalHours)}</span><span class="playtime-hero__unit">小时</span>
              </div>
            </div>`;
        } else {
          const emptyTimeText = plat === "ios"
            ? "没有记录冒险时长。TapTap期待与你并肩冒险的每一段时光。"
            : "没有记录冒险时长。开启TapTap时长同步功能，为你的冒险时光存档。";
          timeHtml = `
            <div class="playtime-section playtime-section--empty">
              <div class="playtime-label">十年生涯游玩时长</div>
              <div class="playtime-empty-sub">${emptyTimeText}</div>
            </div>`;
        }

        let platHtml = "";
        const platData = Array.isArray(snap.platformBreakdown) ? snap.platformBreakdown.filter(p => (Number(p.games) > 0 || Number(p.hours) > 0)) : [];
        if (platData.length > 0) {
          const platIcons = { "手机": "📱", "PC": "💻", "云游戏": "☁️" };
          const cutName = (n) => { const s = String(n || "").trim(); return s.length <= 8 ? escapeHtml(s) : escapeHtml(s.slice(0, 7)) + "…"; };
          platHtml = `
            <div class="playtime-plat">
              <div class="playtime-plat__list">
                ${platData.map(p => {
                  const favName = String(p.favName || "").trim();
                  const favIcon = String(p.favIcon || "").trim();
                  return `<div class="playtime-plat__item" data-plat="${escapeHtml(p.platform)}">
                    <div class="playtime-plat__head">
                      <span class="playtime-plat__icon">${platIcons[p.platform] || "🎮"}</span>
                      <span class="playtime-plat__name">${escapeHtml(p.platform)}</span>
                    </div>
                    <div class="playtime-plat__stats">
                      <span class="playtime-plat__stat">${fmtGameCount(Number(p.games))}<small>款</small></span>
                      <span class="playtime-plat__stat">${fmtHours(Number(p.hours))}<small>小时</small></span>
                    </div>
                    ${favName ? `<div class="playtime-plat__fav">${favIcon ? `<span class="playtime-plat__fav-icon">${favIcon}</span>` : ""}最爱：${cutName(favName)}</div>` : ""}
                  </div>`;
                }).join("")}
              </div>
            </div>`;
        }

        if (!hasGames && !hasTime && platData.length === 0) return "";

        return `<div class="playtime-card">${gamesHtml}${timeHtml}${platHtml}</div>`;
      })(),
      desc: "",
      rewardId: "snap_top3games",
      visible:
        Number(snap.gamesPlayedTotal || 0) > 0 ||
        Number(snap.playTimeHours || 0) > 0 ||
        (Array.isArray(snap.platformBreakdown) && snap.platformBreakdown.length > 0),
    },
    // 类别偏好 + 游戏成就（合并卡）
    {
      label: "成就",
      value: (() => {
        const rA = Number(snap.radarAction || 0);
        const rS = Number(snap.radarStrategy || 0);
        const rR = Number(snap.radarRPG || 0);
        const rAd = Number(snap.radarAdventure || 0);
        const rSi = Number(snap.radarSim || 0);
        const rC = Number(snap.radarCasual || 0);
        const hasRadar = (rA + rS + rR + rAd + rSi + rC) > 0;

        const total = Number(snap.achievementsTotal || 0);
        const normal = Number(snap.achievementsNormal || 0);
        const platinum = Number(snap.platinumAchievementsTotal || 0);
        const achGames = Number(snap.achievementGamesCount || 0);
        const rareList = Array.isArray(snap.rareAchievements) ? snap.rareAchievements.filter(x => x.game && x.name) : [];
        const hasAch = total > 0 || achGames > 0;

        // --- 六边形雷达图 SVG ---
        const dims = [
          { label: "动作", val: rA },
          { label: "策略", val: rS },
          { label: "RPG", val: rR },
          { label: "冒险", val: rAd },
          { label: "模拟", val: rSi },
          { label: "休闲", val: rC },
        ];
        const cx = 90, cy = 90, R = 70;
        const angleOff = -Math.PI / 2;
        const hexPt = (i, r) => {
          const a = angleOff + (Math.PI * 2 / 6) * i;
          return [cx + r * Math.cos(a), cy + r * Math.sin(a)];
        };
        const bgLevels = [1, 0.66, 0.33];
        const bgPolys = bgLevels.map(s =>
          `<polygon points="${dims.map((_, i) => hexPt(i, R * s).join(",")).join(" ")}" fill="none" stroke="rgba(15,23,42,.08)" stroke-width="1"/>`
        ).join("");
        const dataPts = dims.map((d, i) => hexPt(i, R * Math.max(d.val, 5) / 100).join(",")).join(" ");
        const labels = dims.map((d, i) => {
          const [lx, ly] = hexPt(i, R + 18);
          return `<text x="${lx}" y="${ly}" text-anchor="middle" dominant-baseline="central" font-size="10" font-weight="700" fill="rgba(15,23,42,.55)">${d.label}</text>`;
        }).join("");
        const radarSvg = hasRadar ? `
          <svg viewBox="0 0 180 180" class="profile-radar__svg">
            ${bgPolys}
            <polygon points="${dataPts}" fill="rgba(0,184,148,.2)" stroke="#00B894" stroke-width="2"/>
            ${dims.map((_, i) => { const [px, py] = hexPt(i, R * Math.max(dims[i].val, 5) / 100); return `<circle cx="${px}" cy="${py}" r="3" fill="#00B894"/>`; }).join("")}
            ${labels}
          </svg>
        ` : "";

        const topLabel = String(snap.topGenreLabel || "").trim();
        const topPct = String(snap.topGenrePct || "").trim();
        const topSitePct = String(snap.topGenreSitePct || "").trim();
        const genreInfoHtml = (hasRadar && topLabel) ? `
          <div class="profile-radar__info">
            <div class="profile-radar__top-label">时长占比最高</div>
            <div class="profile-radar__top-genre">${escapeHtml(topLabel)} <span class="profile-radar__top-pct">${escapeHtml(topPct)}</span></div>
            ${topSitePct ? `<div class="profile-radar__site-pct">${escapeHtml(topSitePct)}</div>` : ""}
          </div>
        ` : "";

        const radarSection = hasRadar ? `
          <div class="profile-radar__title">游玩偏好</div>
          <div class="profile-radar">
            ${radarSvg}
            ${genreInfoHtml}
          </div>
        ` : `
          <div class="profile-radar profile-radar--empty">
            <div class="profile-empty__title">未知的六边形战士</div>
            <div class="profile-empty__sub">你的偏好神秘莫测</div>
          </div>
        `;

        // --- 成就 ---
        const achSection = hasAch ? `
          <div class="profile-ach">
            <div class="profile-ach__summary">
              在 <strong>${fmt(achGames)}</strong> 款宝藏佳作里留下了点亮成就的足迹
            </div>
            <div class="profile-ach__stats">
              <div class="profile-ach__stat">
                <span class="profile-ach__stat-num">${fmt(total)}</span>
                <span class="profile-ach__stat-label">成就</span>
              </div>
              <div class="profile-ach__stat">
                <span class="profile-ach__stat-num">${fmt(normal)}</span>
                <span class="profile-ach__stat-label">普通</span>
              </div>
              <div class="profile-ach__stat">
                <span class="profile-ach__stat-num">${fmt(platinum)}</span>
                <span class="profile-ach__stat-label">白金</span>
              </div>
            </div>
            ${rareList.length > 0 ? `
              <div class="profile-ach__rare-title">最稀有的成就</div>
              <div class="profile-ach__rare-list">
                ${rareList.slice(0, 3).map((x, i) => `
                  <div class="profile-ach__rare-item">
                    <span class="profile-ach__rare-rank">${i + 1}</span>
                    <div class="profile-ach__rare-info">
                      <div class="profile-ach__rare-name">${escapeHtml(x.name)}</div>
                      <div class="profile-ach__rare-game">${escapeHtml(x.game)}</div>
                    </div>
                    <span class="profile-ach__rare-rate">${escapeHtml(x.rate)}</span>
                  </div>
                `).join("")}
              </div>
            ` : ""}
          </div>
        ` : `
          <div class="profile-ach profile-ach--empty">
            <div class="profile-empty__title">你暂时没有留下点亮成就的足迹</div>
            <div class="profile-empty__sub">还没开始展示真正的实力？期待你用成就来证明。</div>
          </div>
        `;

        return `<div class="profile-card">${radarSection}${achSection}</div>`;
      })(),
      desc: "",
      rewardId: "snap_profile",
      visible: true,
    },
    // 挚爱游戏
    {
      label: "我的生涯挚爱",
      value: (() => {
        const name = String(snap.belovedGameName || "").trim();
        const icon = String(snap.belovedGameIcon || "").trim();
        const hours = Number(snap.belovedGameHours || 0);
        const pct = String(snap.belovedGamePct || "").trim();
        const samePct = String(snap.belovedGameSamePct || "").trim();
        if (!name) return "";

        const fmtH = (h) => {
          if (h <= 0) return "";
          if (h > 6000) return "6000+";
          if (h < 1) return Math.max(0.1, h).toFixed(1);
          return String(Math.floor(h));
        };
        const hStr = fmtH(hours);

        return `
          <div class="beloved-card">
            <div class="beloved-card__title">挚爱佳作</div>
            <div class="beloved-card__icon">${icon || "🎮"}</div>
            <div class="beloved-card__name">${escapeHtml(name)}</div>
            ${hStr ? `
              <div class="beloved-card__hours">
                <span class="beloved-card__hours-num">${hStr}</span>
                <span class="beloved-card__hours-unit">小时</span>
              </div>
              ${pct ? `<div class="beloved-card__pct">占生涯游玩时长的 <strong>${escapeHtml(pct)}</strong></div>` : ""}
            ` : `<div class="beloved-card__quote">时间没有记录，但心动不会忘记。</div>`}
            ${samePct ? `<div class="beloved-card__same">${escapeHtml(samePct)} 玩家和我的"生涯挚爱"一致</div>` : ""}
          </div>
        `;
      })(),
      desc: "",
      rewardId: "snap_beloved",
      visible: true,
    },
    // 挚爱游戏 Top10
    {
      label: "挚爱游戏 Top10",
      value: (() => {
        const list = Array.isArray(snap.belovedTop10) ? snap.belovedTop10.filter(g => String(g.name || "").trim()) : [];
        if (list.length === 0) return "";
        const top = list.slice(0, 10);
        const items = top.map((g, i) => {
          const icon = String(g.icon || "🎮").trim();
          const name = escapeHtml(String(g.name || "").trim());
          return `
            <div class="top10-item">
              <span class="top10-item__rank">${i + 1}</span>
              <span class="top10-item__icon">${icon}</span>
              <span class="top10-item__name">${name}</span>
            </div>
          `;
        }).join("");
        return `
          <div class="top10-card">
            <div class="top10-card__title">挚爱游戏 Top10</div>
            <div class="top10-grid">${items}</div>
            <div class="top10-card__note">数据由预约下载、冒险时长、内容浏览等综合行为产生</div>
          </div>
        `;
      })(),
      desc: "",
      rewardId: "snap_beloved_top10",
      visible: true,
    },
    // TapTap历年最佳游戏
    {
      label: "TapTap历年最佳游戏",
      value: (() => {
        const bestGames = [
          { year: 2016, items: [{ name: "部落冲突：皇室战争", icon: "🏰" }, { name: "口袋妖怪 GO", icon: "📱" }, { name: "王权", icon: "👑" }] },
          { year: 2017, items: [{ name: "纪念碑谷 2", icon: "🔺" }, { name: "艾希", icon: "⚔️" }, { name: "王权：女王陛下", icon: "👑" }] },
          { year: 2018, items: [{ name: "画中世界", icon: "🖼️" }] },
          { year: 2019, items: [{ name: "明日方舟", icon: "🏗️" }] },
          { year: 2020, items: [{ name: "原神", icon: "🌍" }] },
          { year: 2021, items: [{ name: "泰拉瑞亚", icon: "⛏️" }] },
          { year: 2022, items: [{ name: "笼中窥梦", icon: "🔲" }] },
          { year: 2023, items: [{ name: "崩坏：星穹铁道", icon: "🚂" }] },
          { year: 2024, items: [{ name: "绝区零", icon: "🎬" }] },
          { year: 2025, items: [{ name: "燕云十六声", icon: "🏯" }] },
        ];

        const top10 = Array.isArray(snap.belovedTop10) ? snap.belovedTop10.filter(g => String(g.name || "").trim()) : [];
        const normalize = (s) => String(s || "").trim().replace(/^《|》$/g, "");
        const lovedSet = new Set(top10.map(g => normalize(g.name)));

        const cutName = (n) => {
          const s = String(n || "").trim();
          return s.length <= 6 ? escapeHtml(s) : escapeHtml(s.slice(0, 5)) + "…";
        };

        const gameCell = (item) => {
          const loved = lovedSet.has(item.name);
          return `<div class="yearbook-cell__game${loved ? " yearbook-cell__game--loved" : ""}">
            <span class="yearbook-cell__icon">${item.icon}</span>
            <span class="yearbook-cell__name">${cutName(item.name)}</span>
            ${loved ? `<span class="yearbook-cell__loved">我的挚爱</span>` : ""}
          </div>`;
        };

        const multiYears = bestGames.filter(g => g.items.length > 1);
        const singleYears = bestGames.filter(g => g.items.length === 1);

        const multiHtml = multiYears.map(g => `
          <div class="yearbook-row">
            <div class="yearbook-row__year">${g.year}</div>
            <div class="yearbook-row__games">
              ${g.items.map(item => gameCell(item)).join("")}
            </div>
          </div>
        `).join("");

        const singleHtml = singleYears.map(g => `
          <div class="yearbook-cell">
            <div class="yearbook-cell__year">${g.year}</div>
            ${gameCell(g.items[0])}
          </div>
        `).join("");

        return `
          <div class="yearbook-card">
            <div class="yearbook-header">
              <div class="yearbook-title">TapTap历年最佳</div>
              <div class="yearbook-subtitle">BEST OF THE YEAR</div>
            </div>
            ${multiHtml}
            <div class="yearbook-grid yearbook-grid--best">${singleHtml}</div>
          </div>
        `;
      })(),
      desc: "",
      rewardId: "snap_yearbook",
      visible: true,
    },
    // Tap独家 & 编辑推荐游玩数量
    {
      label: "Tap独家 & 编辑推荐游玩数量",
      value: (() => {
        const exPlayed = Number(snap.exclusivePlayed || 0);
        const exTotal = Number(snap.exclusiveTotal || 0);
        const exPct = exTotal > 0 ? Math.round(exPlayed / exTotal * 100) : 0;
        const exList = Array.isArray(snap.exclusiveGames) ? snap.exclusiveGames.filter(g => String(g.name || "").trim()) : [];
        const hasEx = exPlayed > 0;

        const edPlayed = Number(snap.editorPickPlayed || 0);
        const edTotal = Number(snap.editorPickTotal || 0);
        const edPct = edTotal > 0 ? Math.round(edPlayed / edTotal * 100) : 0;
        const edList = Array.isArray(snap.editorPickGames) ? snap.editorPickGames.filter(g => String(g.name || "").trim()) : [];
        const hasEd = edPlayed > 0;

        const iconListHtml = (list) => {
          const show = list.slice(0, 10);
          const more = list.length > 10;
          return `<div class="taplist__icons">${show.map(g => `<span class="taplist__icon">${String(g.icon || "🎮").trim()}</span>`).join("")}${more ? `<span class="taplist__icon taplist__icon--more">...</span>` : ""}</div>`;
        };

        const exQuote = exPct < 25
          ? "宝藏才刚开始挖，前方惊喜还很多。"
          : exPct < 50
          ? "眼光不错，这品味很对味。"
          : "你几乎把好东西都翻遍了！";

        const edQuote = edPct < 25
          ? "好戏才刚开场，慢慢来不着急。"
          : edPct < 50
          ? "越玩越有感觉了，继续探索吧。"
          : "什么好游戏都逃不过你的眼睛！";

        const exSection = hasEx ? `
          <div class="taplist__section">
            <div class="taplist__header">「Tap独家」游玩数量</div>
            <div class="taplist__stats">
              玩过 <strong>${fmt(exPlayed)}</strong> 款，共 ${fmt(exTotal)} 款Tap独家，玩过了 <strong>${exPct}%</strong>
            </div>
            <div class="taplist__quote">${exQuote}</div>
            ${exList.length > 0 ? iconListHtml(exList) : ""}
          </div>
        ` : `
          <div class="taplist__section taplist__section--empty">
            <div class="taplist__header">Tap独家游玩榜单</div>
            <div class="taplist__empty-main">你的Tap独家冒险，还未开启。</div>
            <div class="taplist__empty-sub">去发现属于你的第一款独家之作吧。</div>
          </div>
        `;

        const edSection = hasEd ? `
          <div class="taplist__section">
            <div class="taplist__header">「编辑推荐」游玩数量<</div>
            <div class="taplist__stats">
              玩过 <strong>${fmt(edPlayed)}</strong> 款，共 ${fmt(edTotal)} 款编辑推荐，玩过了 <strong>${edPct}%</strong>
            </div>
            <div class="taplist__quote">${edQuote}</div>
            ${edList.length > 0 ? iconListHtml(edList) : ""}
          </div>
        ` : `
          <div class="taplist__section taplist__section--empty">
            <div class="taplist__header">编辑推荐榜单</div>
            <div class="taplist__empty-main">编辑推荐的精彩世界，正等你踏入。</div>
            <div class="taplist__empty-sub">试试看，说不定正中你的口味。</div>
          </div>
        `;

        return `<div class="taplist-card">${exSection}${edSection}<div class="taplist__note">数据由预约下载、冒险时长、内容浏览等综合行为产生</div></div>`;
      })(),
      desc: "",
      rewardId: "snap_taplist",
      visible: true,
    },
    // 游戏评价 & 嘴替发言（合并卡）
    {
      label: "游戏评价 & 嘴替发言",
      value: (() => {
        const cap = (n) => Number(n) > 999 ? "999+" : fmt(Number(n));
        const count = Number(snap.reviewsCount || 0);
        const likes = Number(snap.reviewLikesTotal || 0);
        const comments = Number(snap.reviewCommentsTotal || 0);
        const allLow = !!snap.reviewAllLowStar;
        const gameIcons = Array.isArray(snap.reviewGameIcons) ? snap.reviewGameIcons.filter(g => String(g.name || "").trim()) : [];
        const hasReview = count > 0;

        const zuitiCnt = Number(snap.zuitiReviewsCount || snap.zuitiCount || 0);
        const criticYears = Array.isArray(snap.taptapCriticYears) ? snap.taptapCriticYears.filter(y => Number(y) > 0).sort((a, b) => a - b) : [];
        const hasZuiti = zuitiCnt > 0 || criticYears.length > 0;

        const platformTotal = Number(snap.totalReviewsOnPlatform || 0);

        if (!hasReview && !hasZuiti) return "";

        // --- 游戏评价 ---
        let reviewSection = "";
        if (hasReview && allLow) {
          reviewSection = `
            <div class="revcard__section">
              <div class="revcard__header">游戏评价</div>
              <div class="revcard__stats">
                发布过 <strong>${cap(count)}</strong> 条评价
              </div>
              <div class="revcard__fallback">每一条评价，都是TapTap里独属于你的声音，记录着你的感受。</div>
            </div>
          `;
        } else if (hasReview) {
          const iconShow = gameIcons.slice(0, 10);
          const iconMore = gameIcons.length > 10;
          const iconsHtml = iconShow.length > 0 ? `
            <div class="revcard__icons">
              ${iconShow.map(g => { const gl = Number(g.likes || 0); return `<span class="revcard__icon-item"><span class="revcard__icon">${String(g.icon || "🎮").trim()}</span>${gl > 0 ? `<span class="revcard__icon-likes">👍${cap(gl)}</span>` : ""}</span>`; }).join("")}
              ${iconMore ? `<span class="revcard__icon revcard__icon--more">...</span>` : ""}
            </div>
          ` : "";
          reviewSection = `
            <div class="revcard__section">
              <div class="revcard__header">游戏评价</div>
              <div class="revcard__stats-row">
                <div class="revcard__stat">
                  <span class="revcard__stat-num">${cap(count)}</span>
                  <span class="revcard__stat-label">评价</span>
                </div>
                <div class="revcard__stat">
                  <span class="revcard__stat-num">${cap(likes)}</span>
                  <span class="revcard__stat-label">获赞</span>
                </div>
                <div class="revcard__stat">
                  <span class="revcard__stat-num">${cap(comments)}</span>
                  <span class="revcard__stat-label">评论</span>
                </div>
              </div>
              ${iconsHtml}
            </div>
          `;
        }

        // --- 嘴替发言 ---
        let zuitiSection = "";
        if (hasZuiti) {
          const criticIconsHtml = criticYears.length > 0 ? `
            <div class="revcard__critic-years">
              ${criticYears.map(y => `<span class="revcard__critic-badge">🏅 ${y}</span>`).join("")}
            </div>
          ` : "";
          zuitiSection = `
            <div class="revcard__section">
              <div class="revcard__header">嘴替发言</div>
              ${zuitiCnt > 0 ? `<div class="revcard__zuiti-summary">有 <strong>${cap(zuitiCnt)}</strong> 条评价被大家喜欢，成了嘴替发言</div>` : ""}
              ${criticYears.length > 0 ? `<div class="revcard__critic-label">获得 ${criticYears.length} 个玩赏家认证</div>` : ""}
              ${criticIconsHtml}
            </div>
          `;
        }

        const footerHtml = platformTotal > 0
          ? `<div class="revcard__footer">TapTap至今收录了 ${fmt(platformTotal)} 条评价。你的声音，至关重要。</div>`
          : `<div class="revcard__footer">你的声音，至关重要。</div>`;

        return `<div class="revcard">${reviewSection}${zuitiSection}${footerHtml}</div>`;
      })(),
      desc: "",
      rewardId: "snap_review_voice",
      visible: true,
    },
    // 社区点赞
    // 社区发布内容
    {
      label: "社区发布内容",
      value: (() => {
        const cap9999 = (n) => Number(n) > 9999 ? "9999+" : fmt(Number(n));
        const fmtWan = (n) => {
          if (n <= 0) return "0";
          if (n < 10000) return fmt(n);
          const w = n / 10000;
          if (w >= 999.95) return "999.9万+";
          if (w >= 1 && w % 1 < 0.05) return Math.floor(w) + "万";
          return w.toFixed(1) + "万";
        };
        const published = Number(snap.communityPublished || 0);
        const commentsReceived = Number(snap.communityCommentsReceived || 0);
        const pubPctRank = String(snap.communityPubPctRank || "").trim();
        const topForums = Array.isArray(snap.communityTopForums)
          ? snap.communityTopForums.filter(x => String(x.game || "").trim() && Number(x.count) > 0)
          : [];
        const topEmojis = Array.isArray(snap.communityTopEmojis)
          ? snap.communityTopEmojis.filter(x => String(x.emoji || "").trim() && Number(x.count) > 0)
          : [];

        if (published <= 0 && commentsReceived <= 0) return "";

        const pctNum = parseFloat(pubPctRank);
        let quote = "";
        if (published <= 0) {
          quote = "还没有发布记录。也许你在酝酿一次真正想说的话。";
        } else if (pctNum <= 33) {
          quote = "你偶尔发声。每一次发布，都是慎重的表达。";
        } else if (pctNum <= 66) {
          quote = "你持续分享自己的体验与想法。社区里，已经留下你的足迹。";
        } else {
          quote = "你是活跃的表达者。许多讨论，因为你而展开。";
        }

        const cutGame = (s) => { const t = String(s || "").trim(); return t.length > 10 ? t.slice(0, 10) + "..." : t; };

        const forumHtml = topForums.length > 0 ? `
          <div class="pubcard__forums-title">发布内容的论坛 Top5</div>
          <div class="pubcard__forums-list">
            ${topForums.slice(0, 5).map((x, i) => `
              <div class="pubcard__forum-item">
                <span class="pubcard__forum-rank">${i + 1}</span>
                <span class="pubcard__forum-name">${escapeHtml(cutGame(x.game))}</span>
                <span class="pubcard__forum-count">${cap9999(x.count)} 条</span>
              </div>
            `).join("")}
          </div>
        ` : "";

        const emojiHtml = topEmojis.length > 0 ? `
          <div class="pubcard__emoji-section">
            <div class="pubcard__emoji-title">最爱的表情</div>
            <div class="pubcard__emoji-list">
              ${topEmojis.slice(0, 3).map(x => `
                <div class="pubcard__emoji-item">
                  <span class="pubcard__emoji-face">${x.emoji}</span>
                  <span class="pubcard__emoji-count">${fmtWan(Number(x.count))}</span>
                </div>
              `).join("")}
            </div>
          </div>
        ` : "";

        return `
          <div class="pubcard">
            <div class="pubcard__header">社区发布内容</div>
            <div class="pubcard__stats-row">
              <div class="pubcard__stat">
                <span class="pubcard__stat-num">${cap9999(published)}</span>
                <span class="pubcard__stat-label">发布</span>
              </div>
              <div class="pubcard__stat">
                <span class="pubcard__stat-num">${cap9999(commentsReceived)}</span>
                <span class="pubcard__stat-label">收到评论</span>
              </div>
            </div>
            ${pubPctRank ? `<div class="pubcard__pct">发布内容数超过了 <strong>${escapeHtml(pubPctRank)}</strong> 的玩家</div>` : ""}
            <div class="pubcard__quote">${quote}</div>
            ${forumHtml}
            ${emojiHtml}
          </div>
        `;
      })(),
      desc: "",
      rewardId: "snap_community_pub",
      visible: true,
    },

    {
      label: "社区点赞",
      value: (() => {
        const fmtWan = (n) => {
          if (n <= 0) return "0";
          if (n < 10000) return fmt(n);
          const w = n / 10000;
          if (w >= 999.95) return "999.9万+";
          if (w >= 1 && w % 1 < 0.05) return Math.floor(w) + "万";
          return w.toFixed(1) + "万";
        };
        const likesGiven = Number(snap.communityLikesGiven || 0);
        const likesReceived = Number(snap.communityLikesReceived || 0);
        const likePctRank = String(snap.communityLikePctRank || "").trim();
        const topContent = Array.isArray(snap.communityTopLikedContent)
          ? snap.communityTopLikedContent.filter(x => String(x.title || "").trim() && Number(x.likes) > 0)
          : [];

        if (likesGiven <= 0 && likesReceived <= 0) return "";

        const pctNum = parseFloat(likePctRank);
        let quote = "";
        if (likesGiven <= 0) {
          quote = "还没有留下点赞记录。第一次表达喜欢，或许就在下一次滑动之间。";
        } else if (pctNum <= 33) {
          quote = "你不轻易表达，但每一次点赞都很认真。每个\u201C赞\u201D，都是一句无声的认同。";
        } else if (pctNum <= 66) {
          quote = "你乐于为好内容鼓掌。那些被你点亮的作品，也记住了你的支持。";
        } else {
          quote = "你从不吝啬赞美。无数作品因你的点赞而更加闪耀。";
        }

        const cutTitle = (s) => { const t = String(s || "").trim(); return t.length > 10 ? t.slice(0, 10) + "..." : t; };

        const topHtml = topContent.length > 0 ? `
          <div class="likecard__top-title">获赞最多的内容 Top5</div>
          <div class="likecard__top-list">
            ${topContent.slice(0, 5).map((x, i) => `
              <div class="likecard__top-item">
                <span class="likecard__top-rank">${i + 1}</span>
                <span class="likecard__top-text">${escapeHtml(cutTitle(x.title))}</span>
                <span class="likecard__top-likes">👍${fmtWan(Number(x.likes))}</span>
              </div>
            `).join("")}
          </div>
        ` : "";

        return `
          <div class="likecard">
            <div class="likecard__header">社区点赞</div>
            <div class="likecard__stats-row">
              <div class="likecard__stat">
                <span class="likecard__stat-num">${fmtWan(likesGiven)}</span>
                <span class="likecard__stat-label">点赞</span>
              </div>
              <div class="likecard__stat">
                <span class="likecard__stat-num">${fmtWan(likesReceived)}</span>
                <span class="likecard__stat-label">获赞</span>
              </div>
            </div>
            ${likePctRank ? `<div class="likecard__pct">点赞量超过了 <strong>${escapeHtml(likePctRank)}</strong> 的玩家</div>` : ""}
            <div class="likecard__quote">${quote}</div>
            ${topHtml}
          </div>
        `;
      })(),
      desc: "",
      rewardId: "snap_community_likes",
      visible: true,
    },

    // 深夜社区冲浪
    {
      label: "深夜社区冲浪",
      value: (() => {
        const days = Number(snap.nightSurfDays || 0);
        const logs = Array.isArray(snap.nightSurfLogs)
          ? snap.nightSurfLogs.filter(x => String(x.time || "").trim() && String(x.game || "").trim() && String(x.action || "").trim())
          : [];
        const firstNight = snap.firstNightSurf || {};
        const firstTime = String(firstNight.time || "").trim();
        const firstAction = String(firstNight.action || "").trim();
        if (days <= 0 && logs.length === 0 && !firstTime) return "";

        const firstContent = String(firstNight.content || "").trim();

        const firstHtml = firstTime ? `
          <div class="nightsurf__first">
            <div class="nightsurf__first-label">第一次深夜冲浪</div>
            <div class="nightsurf__first-time">${escapeHtml(firstTime)}</div>
            ${firstAction ? `<div class="nightsurf__first-action">${escapeHtml(firstAction)}</div>` : ""}
            ${firstContent ? `<div class="nightsurf__first-content">${escapeHtml(firstContent)}</div>` : ""}
          </div>
        ` : "";

        const logsHtml = logs.length > 0 ? `
          <div class="nightsurf__logs-title">熬夜最晚的冲浪记录</div>
          <div class="nightsurf__logs">
            ${logs.slice(0, 5).map(x => {
              const c = String(x.content || "").trim();
              return `
              <div class="nightsurf__log">
                <div class="nightsurf__log-head">${escapeHtml(x.time)}，${escapeHtml(x.action)}</div>
                ${c ? `<div class="nightsurf__log-content">${escapeHtml(c)}</div>` : ""}
              </div>`;
            }).join("")}
          </div>
        ` : "";

        return `
          <div class="nightsurf-card">
            <div class="nightsurf__header">深夜社区冲浪</div>
            ${firstHtml}
            ${logsHtml}
          </div>
        `;
      })(),
      desc: "",
      rewardId: "snap_night_community",
      visible: true,
    },
    // 平台成就（原徽章卡重做）
    {
      label: "平台成就",
      value: (() => {
        const fmtOwners = (n) => {
          if (n <= 0) return "0";
          if (n < 10000) return fmt(n);
          const w = n / 10000;
          if (w >= 999.95) return "999.9万+";
          if (w >= 1 && w % 1 < 0.05) return Math.floor(w) + "万";
          return w.toFixed(1) + "万";
        };
        const cap999 = (n) => Number(n) > 999 ? "999+" : fmt(Number(n));
        const total = Number(snap.platformBadgesTotal || 0);
        const badges = Array.isArray(snap.platformBadges)
          ? snap.platformBadges.filter(b => String(b.name || "").trim())
          : [];
        const rarestTop3 = badges.slice(0, 3);

        if (total <= 0 && badges.length === 0) return "";

        const rarestBadge = rarestTop3.length > 0 ? rarestTop3[0] : null;
        let quote = "";
        if (rarestBadge) {
          const owners = Number(rarestBadge.owners || 0);
          const cat = String(rarestBadge.category || "").trim();
          if (cat === "活动") {
            if (owners <= 100) quote = "你的热爱，是独属于你的宝藏。";
            else if (owners <= 10000) quote = "与大家一起奔赴热爱，你一直在路上。";
            else quote = "无数热爱汇聚成浪潮，而你正身在其中。";
          } else {
            if (owners <= 100) quote = "少有人至之境，你早已抵达。";
            else if (owners <= 10000) quote = "你的实力，堪称万里挑一。";
            else quote = "在高手如云的征途上，你依然耀眼。";
          }
        }

        const displayBadges = badges.slice(0, 10);

        const badgesHtml = displayBadges.length > 0 ? `
          <div class="achcard__badges">
            ${displayBadges.map(b => {
              const ico = String(b.icon || "🏅").trim();
              const name = escapeHtml(String(b.name || "").trim());
              return `
                <div class="achcard__badge">
                  <span class="achcard__badge-icon">${ico}</span>
                  <span class="achcard__badge-name">${name}</span>
                </div>
              `;
            }).join("")}
          </div>
        ` : "";

        const top3Html = rarestTop3.length > 0 ? `
          <div class="achcard__rare-title">最稀有的徽章</div>
          <div class="achcard__rare-list">
            ${rarestTop3.map((b, i) => {
              const ico = String(b.icon || "🏅").trim();
              const name = escapeHtml(String(b.name || "").trim());
              const own = fmtOwners(Number(b.owners || 0));
              return `
                <div class="achcard__rare-item">
                  <span class="achcard__rare-rank">${i + 1}</span>
                  <span class="achcard__rare-icon">${ico}</span>
                  <div class="achcard__rare-info">
                    <span class="achcard__rare-name">${name}</span>
                    <span class="achcard__rare-owners">${own} 人获取</span>
                  </div>
                </div>
              `;
            }).join("")}
          </div>
        ` : "";

        return `
          <div class="achcard">
            <div class="achcard__total">累计获取徽章 <strong>${cap999(total)}</strong></div>
            ${quote ? `<div class="achcard__quote">${quote}</div>` : ""}
            ${top3Html}
            ${badgesHtml}
          </div>
        `;
      })(),
      desc: "",
      rewardId: "snap_badges",
      visible: true,
    },
    // 社交关系
    {
      label: "社交关系",
      value: (() => {
        const fmtWan = (n) => {
          if (n <= 0) return "0";
          if (n < 10000) return fmt(n);
          const w = n / 10000;
          if (w >= 999.95) return "999.9万+";
          if (w >= 1 && w % 1 < 0.05) return Math.floor(w) + "万";
          return w.toFixed(1) + "万";
        };
        const friends = Number(snap.friendsCount || 0);
        const following = Number(snap.followingCount || 0);
        const followers = Number(snap.followersCount || 0);
        const topFriends = Array.isArray(snap.closestFriends)
          ? snap.closestFriends.filter(x => String(x.name || "").trim() && Number(x.msgs) > 0)
          : [];

        if (friends <= 0 && following <= 0 && followers <= 0) return "";

        const topHtml = topFriends.length > 0 ? `
          <div class="socialcard__top-title">最亲密的好友 Top5</div>
          <div class="socialcard__top-list">
            ${topFriends.slice(0, 5).map((x, i) => {
              const followTime = String(x.firstFollowTime || "").trim();
              return `
              <div class="socialcard__top-item">
                <span class="socialcard__top-rank">${i + 1}</span>
                <div class="socialcard__top-info">
                  <div class="socialcard__top-row">
                    <span class="socialcard__top-name">${escapeHtml(String(x.name).trim())}</span>
                    <span class="socialcard__top-msgs">${fmtWan(Number(x.msgs))} 条消息</span>
                  </div>
                  ${followTime ? `<div class="socialcard__top-follow-time">相识于 ${escapeHtml(followTime)}</div>` : ""}
                </div>
              </div>`;
            }).join("")}
          </div>
        ` : "";

        return `
          <div class="socialcard">
            <div class="socialcard__stats">
              <div class="socialcard__stat">
                <span class="socialcard__stat-num">${fmtWan(friends)}</span>
                <span class="socialcard__stat-label">好友</span>
              </div>
              <div class="socialcard__stat">
                <span class="socialcard__stat-num">${fmtWan(following)}</span>
                <span class="socialcard__stat-label">关注</span>
              </div>
              <div class="socialcard__stat">
                <span class="socialcard__stat-num">${fmtWan(followers)}</span>
                <span class="socialcard__stat-label">粉丝</span>
              </div>
            </div>
            ${topHtml}
          </div>
        `;
      })(),
      desc: "",
      rewardId: "snap_friend_msgs",
      visible: true,
    },

    // 游戏创作（合并原开发者三张卡）
    {
      label: "作品创作",
      value: (() => {
        const games = (Array.isArray(snap.devGames) ? snap.devGames : [])
          .filter(g => String(g.name || "").trim())
          .slice()
          .sort((a, b) => Number(b.followers || 0) - Number(a.followers || 0));
        const totalGames = games.length;
        const gjCount = Number(snap.gamejamGamesCount || 0);
        const tmCount = Number(snap.tapmakerGamesCount || 0);

        if (totalGames <= 0 && gjCount <= 0 && tmCount <= 0) return "";

        const hasMore = totalGames > 9;
        const listHtml = totalGames > 0 ? `
          <div class="devcard__total">一共创作了 <strong>${fmt(totalGames)}</strong> 款作品</div>
          <div class="devcard__game-grid">
            ${games.slice(0, 9).map(g => `
              <div class="devcard__game-cell">
                <img class="devcard__game-icon" src="${g.icon || ""}" alt="" />
                <span class="devcard__game-name">${escapeHtml(String(g.name).trim())}</span>
              </div>
            `).join("")}
            ${hasMore ? `<div class="devcard__game-cell devcard__game-cell--more">...</div>` : ""}
          </div>
        ` : "";

        const gjHtml = gjCount > 0 ? `
          <div class="devcard__sub">
            <div class="devcard__sub-num">有 <strong>${fmt(gjCount)}</strong> 款作品创作于「聚光灯GameJam」</div>
            <div class="devcard__sub-quote">在有限时间里完成创作，你选择了挑战与热爱。</div>
          </div>
        ` : "";

        const tmHtml = tmCount > 0 ? `
          <div class="devcard__sub">
            <div class="devcard__sub-num">有 <strong>${fmt(tmCount)}</strong> 款作品是使用「TapTap制造」创作</div>
            <div class="devcard__sub-quote">从想法到作品，你让创意真正落了地。</div>
          </div>
        ` : "";

        return `<div class="devcard">${listHtml}${gjHtml}${tmHtml}</div>`;
      })(),
      desc: "",
      rewardId: "snap_dev_create",
      visible: true,
    },
  ];
  // 无数据卡片的温暖提示（15 字以内）
  const emptyHints = {
    snap_reg_active:  "旅程才刚开始<br>欢迎来到TapTap",
    snap_reserve:     "新作等你来预约",
    snap_spend:       "好物等你来挑",
    snap_badges:      "暂时还没有获得TapTap平台成就。世界在等待你的名字。",
    snap_top3games:   "精彩旅程待开启",
    snap_yearbook:    "历年最佳等你来探索",
    snap_profile:     "偏好与成就等你来解锁",
    snap_beloved:     "还没有遇见你的挚爱？来逛逛TapTap吧~也许心动就在下一个瞬间~",
    snap_beloved_top10:"榜单空空如也，看来你就是最神秘玩家。",
    snap_taplist:     "独家与推荐的世界等你探索",
    snap_review_voice:"你还没有留下过评价。试试看吧，你小小的分享，也能为大家指引方向。",
    snap_community_likes:"这一页还留着空白。属于你的掌声，或许就在下一次发声之后。",
    snap_community_pub:"还没有发布记录。也许你在等待一个真正想分享的瞬间。",
    snap_night_community: "十年里，你很少在深夜停留。热爱之外，你也照顾好了自己。",
    snap_friend_msgs: "好友等你来交",
    snap_dev_create:  "创作的种子还未发芽。也许有一天，你的名字会出现在某款作品的制作名单里。",
  };

  let snapshotCards = snapshotCardsAll.map((c) => {
    if (c.visible) return c;
    const hint = emptyHints[c.rewardId] || "未来可期";
    return { ...c, value: "", emptyHint: hint };
  });
  if (sortUnclaimedFirst) {
    snapshotCards = snapshotCards
      .map((c, i) => ({ c, i }))
      // Sort: unclaimed first, claimed last; keep original order within group.
      .sort((a, b) => {
        const ac = !!hasClaimed(s, a.c.rewardId);
        const bc = !!hasClaimed(s, b.c.rewardId);
        if (ac !== bc) return Number(ac) - Number(bc);
        return a.i - b.i;
      })
      .map((x) => x.c);
  }

  const bindCards = [
    {
      label: "绑定 Steam 账号",
      value: (() => {
        if (!s.boundSteam) return "";
        const capVal = (n, max) => n > max ? max + "+" : String(n);
        const favGame = String(s.steamFavGame || "").trim();
        const favIcon = String(s.steamFavGameIcon || "").trim();
        const value = Number(s.steamAccountValue || 0);
        const games = Number(s.steamGamesCount || 0);
        const hours = Number(s.steamPlayHours || 0);

        if (games <= 0) {
          return `
            <div class="steamcard steamcard--empty">
              <div class="steamcard__empty-text">你的 Steam 旅程还未开始。<br>第一款佳作，也许正在等你启动。</div>
            </div>
          `;
        }

        const fmtValue = (v) => {
          if (v > 999999) return "999999+";
          if (v >= 1 && v % 1 !== 0) return v.toFixed(1);
          return fmt(Math.floor(v));
        };

        return `
          <div class="steamcard">
            ${favGame ? `
              <div class="steamcard__fav">
                <div class="steamcard__fav-label">挚爱佳作</div>
                <div class="steamcard__fav-row">
                  ${favIcon ? `<img class="steamcard__fav-icon" src="${favIcon}" alt="" />` : ""}
                  <span class="steamcard__fav-name">${escapeHtml(favGame)}</span>
                </div>
              </div>
            ` : ""}
            <div class="steamcard__stats">
              <div class="steamcard__stat">
                <span class="steamcard__stat-num">${fmtValue(value)}</span>
                <span class="steamcard__stat-label">账号价值（元）</span>
              </div>
              <div class="steamcard__stat">
                <span class="steamcard__stat-num">${capVal(games, 9999)}</span>
                <span class="steamcard__stat-label">佳作数量</span>
              </div>
              <div class="steamcard__stat">
                <span class="steamcard__stat-num">${capVal(hours, 9999)}</span>
                <span class="steamcard__stat-label">游玩时长（小时）</span>
              </div>
            </div>
          </div>
        `;
      })(),
      desc: s.boundSteam ? "" : "绑定Steam账号可领取积分奖励。<br>快来绑定吧！",
      rewardId: "bind_steam",
      visible: true,
    },
    {
      label: "绑定角色",
      value: (() => {
        const cards = Array.isArray(s.boundRoleCards) ? s.boundRoleCards.filter(c => c && String(c.name || "").trim()) : [];
        if (!cards.length) return "";

        const allBound = !!s.allRolesBound;
        const slideHtml = cards.map((c, i) => {
          const statsHtml = (c.stats || []).map(st =>
            `<div class="rolecard__stat"><span class="rolecard__stat-num">${escapeHtml(String(st.value))}</span><span class="rolecard__stat-label">${escapeHtml(String(st.label))}</span></div>`
          ).join("");
          return `
            <div class="rolecard__slide ${i === 0 ? "rolecard__slide--active" : ""}" data-role-idx="${i}" style="background:${c.bg || "#e2e8f0"}">
              <div class="rolecard__top">
                <img class="rolecard__avatar" src="${c.avatar || ""}" alt="" />
                <div class="rolecard__info">
                  <div class="rolecard__name">${escapeHtml(String(c.name))}</div>
                  <div class="rolecard__game">${escapeHtml(String(c.game || ""))}</div>
                </div>
              </div>
              ${c.job || c.level ? `<div class="rolecard__meta">${c.job ? escapeHtml(c.job) : ""}${c.job && c.level ? "　" : ""}${c.level ? "Lv." + c.level : ""}</div>` : ""}
              <div class="rolecard__stats">${statsHtml}</div>
            </div>
          `;
        }).join("");

        const lastPageHtml = !allBound ? "" : `
          <div class="rolecard__slide rolecard__slide--hint" data-role-idx="${cards.length}">
            <div class="rolecard__hint-text">更多绑定战绩<br>请前往个人主页查看</div>
          </div>
        `;

        const totalSlides = cards.length + (allBound ? 0 : 0) + (allBound ? 1 : 0);
        const dotsHtml = (cards.length + (allBound ? 1 : 0)) > 1
          ? `<div class="rolecard__dots">${cards.map((_, i) => `<span class="rolecard__dot ${i === 0 ? "rolecard__dot--active" : ""}" data-rdot="${i}"></span>`).join("")}${allBound ? `<span class="rolecard__dot" data-rdot="${cards.length}"></span>` : ""}</div>`
          : "";

        return `
          <div class="rolecard-carousel" data-role-total="${cards.length + (allBound ? 1 : 0)}">
            <div class="rolecard__track">
              ${slideHtml}
              ${lastPageHtml}
            </div>
            ${dotsHtml}
            ${cards.length > 1 || allBound ? `
              <button class="rolecard__arrow rolecard__arrow--left" data-role-dir="-1">‹</button>
              <button class="rolecard__arrow rolecard__arrow--right" data-role-dir="1">›</button>
            ` : ""}
          </div>
        `;
      })(),
      desc: (() => {
        const cards = Array.isArray(s.boundRoleCards) ? s.boundRoleCards.filter(c => c && String(c.name || "").trim()) : [];
        if (cards.length > 0) return "";
        return "每个绑定角色都能领取奖励，多多绑定吧！";
      })(),
      rewardId: "bind_roles",
      visible: true,
    },
  ];

  const snapshotSection = snapshotCards.length
    ? `
      <div class="recap-section" data-recap-section="snap">
        <div class="recap-section__head">
          <div class="h2" style="margin:0 0 8px">TapTap 生涯</div>
        </div>
        <div style="margin-top:10px" class="carousel" aria-label="生涯数据卡片">
          <div class="hscroll carousel__track" id="recapCarouselSnap" role="list">
            ${snapshotCards.map((c, i) => miniCardHtml(c, i, s, snap)).join("")}
          </div>
          <div class="carousel__meta hidden" id="recapMetaSnap"></div>
          <div class="carousel__dots" id="recapDotsSnap" aria-label="生涯数据分页">
            ${snapshotCards
              .map(
                (_, i) =>
                  `<button class="dot ${i === 0 ? "dot--active" : ""}" type="button" data-dot="${i}" aria-label="第 ${i + 1} 张"></button>`,
              )
              .join("")}
          </div>
        </div>
      </div>
    `
    : `
      <div class="recap-section" data-recap-section="snap">
        <div class="recap-section__head">
          <div class="h2" style="margin:0 0 8px">TapTap 生涯</div>
        </div>
        <div class="muted small">当前没有可展示的数据卡片。</div>
      </div>
    `;

  const bindSection = `
    <div class="recap-section" data-recap-section="bind">
      <div class="divider"></div>
      <div class="recap-section__head">
        <div class="h2" style="margin:0 0 8px">将我的游戏世界融入TapTap</div>
        <div class="muted small">现在绑定数据也可领取奖励哦</div>
      </div>
      <div style="margin-top:10px" class="carousel" aria-label="可补齐数据卡片">
        <div class="hscroll carousel__track" id="recapCarouselBind" role="list">
          ${bindCards.filter((c) => c.visible).map((c, i) => miniCardHtml(c, i, s, snap)).join("")}
        </div>
        <div class="carousel__meta hidden" id="recapMetaBind"></div>
        <div class="carousel__dots" id="recapDotsBind" aria-label="可补齐数据分页">
          ${bindCards
            .map(
              (_, i) =>
                `<button class="dot ${i === 0 ? "dot--active" : ""}" type="button" data-dot="${i}" aria-label="第 ${i + 1} 张"></button>`,
            )
            .join("")}
        </div>
      </div>
    </div>
  `;

  return `
    <section class="card recap-card">
      <div class="recap-card__hero">
        <div class="home-hero__deco" aria-hidden="true">
          <span class="home-hero__spark s1"></span>
          <span class="home-hero__spark s2"></span>
          <span class="home-hero__spark s3"></span>
          <span class="home-hero__spark s4"></span>
          <span class="home-hero__ring"></span>
        </div>
        <div class="home-hero__text">
          <div class="home-hero__title">🎉 回顾你与 TapTap 走过的十年时光</div>
          <div class="home-hero__note">数据统计截止到 2026年4月17日</div>
        </div>
        <button class="btn btn--brand recap-card__share" id="btnToggleShare" type="button">分享</button>
      </div>
      <div class="divider"></div>
      ${snapshotSection}
      ${bindSection}
    </section>
  `;
}

function grantPillsHtml(grant) {
  const parts = [];
  if (grant?.points) parts.push(`<span class="pill pill--brand">${fmt(grant.points)} 积分</span>`);
  if (grant?.coupons) parts.push(`<span class="pill">${fmt(grant.coupons)} 点券</span>`);
  return parts.join(" ");
}

function rewardBlockHtml(rewardId, s, recap, isEmpty = false) {
  const claimed = hasClaimed(s, rewardId);

  // Snapshot rewards: visible cards are always claimable (no “未达成”)
  if (String(rewardId).startsWith("snap_")) {
    const baseGrant = s.careerSnapshot?.grants?.[rewardId];
    // 空状态卡片保底10积分
    const defaultGrant = isEmpty ? { points: 10, coupons: 0 } : null;
    const finalBaseGrant = baseGrant || defaultGrant;
    if (!finalBaseGrant) return "";
    const claimGrant = snapshotClaimGrant(s, rewardId) || finalBaseGrant;
    const grant = claimed ? finalBaseGrant : claimGrant;
    const btn = claimed
      ? `<button class="btn" disabled>已领</button>`
      : `<button class="btn btn--brand" data-claim="${rewardId}">领取</button>`;
    const extraBtn = rewardId === "snap_yearbook" && !isEmpty
      ? `<button class="btn btn--sm yearbook-share-btn" type="button" data-yearbook-share>分享海报</button>`
      : "";
    return `
      <div class="mini-card__reward">
        <div class="row" style="align-items:flex-start; justify-content:space-between">
          <div class="grow">
            <div class="mini-card__rewardline">
              <div class="mini-card__rk">奖励</div>
              <div class="mini-card__grant">${grantPillsHtml(grant)}</div>
            </div>
          </div>
          <div class="mini-card__reward-actions">
            ${extraBtn}${btn}
          </div>
        </div>
      </div>
    `;
  }

  // Bind rewards: can be completed after entering activity
  const r = BIND_REWARDS.find((x) => x.id === rewardId);
  if (!r) return "";
  // Steam: one-time claim
  if (rewardId === "bind_steam") {
    const ready = !!r.isReady?.(s);
    const btn = claimed
      ? `<button class="btn" disabled>已领</button>`
      : ready
        ? `<button class="btn btn--brand" data-claim="${r.id}">领取</button>`
        : `<button class="btn btn--brand" data-bind="${r.id}">去绑定</button>`;
    return `
      <div class="mini-card__reward">
        <div class="row" style="align-items:flex-start; justify-content:space-between">
          <div class="grow">
            <div class="mini-card__rewardline">
              <div class="mini-card__rk">奖励</div>
              <div class="mini-card__grant">${grantPillsHtml(r.grant)}</div>
            </div>
          </div>
          <div class="mini-card__reward-actions">
            ${btn}
          </div>
        </div>
      </div>
    `;
  }

  // Roles: repeatable bind & claim by count
  if (rewardId === "bind_roles") {
    const bound = Math.max(0, Number(s.boundRolesCount || 0));
    const claimedCount = Math.max(0, Number(s.claimedRoleRewardsCount || 0));
    const pending = Math.max(0, bound - claimedCount);
    const per = r.perRole || { points: 0, coupons: 0 };
    const totalGrant = { points: (per.points || 0) * pending, coupons: (per.coupons || 0) * pending };
    const leftHtml = pending > 0
      ? `
        <div class="mini-card__rewardline">
          <div class="mini-card__rk">奖励</div>
          <div class="mini-card__grant">${grantPillsHtml(totalGrant)}</div>
          <div class="muted small">（新绑定 ${fmt(pending)} 个角色）</div>
        </div>
      `
      : `
        <div class="mini-card__rewardline">
          <div class="mini-card__rk">奖励</div>
          <div class="mini-card__grant">
            <span class="pill pill--brand">每个角色可 ${fmt(per.points || 0)} 积分</span>
          </div>
        </div>
      `;
    const allBound = !!s.allRolesBound;
    const btns = pending > 0
      ? `<button class="btn btn--brand" data-claim="${r.id}">领取</button>`
      : allBound ? "" : `<button class="btn btn--brand" data-bind="${r.id}">去绑定</button>`;

    return `
      <div class="mini-card__reward">
        <div class="row" style="align-items:flex-start; justify-content:space-between">
          <div class="grow">
            ${leftHtml}
          </div>
          ${btns ? `<div class="mini-card__reward-actions mini-card__reward-actions--stack">${btns}</div>` : ""}
        </div>
      </div>
    `;
  }

  return `
    <div class="mini-card__reward">
      <div class="row" style="align-items:flex-start; justify-content:space-between">
        <div class="grow">
          <div class="mini-card__rk">${r.title}</div>
          <div class="muted small" style="margin-top:4px">${r.desc || ""}</div>
          <div class="mini-card__grant" style="margin-top:8px">${grantPillsHtml(r.grant)}</div>
        </div>
        <div class="mini-card__reward-actions">
          <button class="btn btn--brand" data-bind="${r.id}">去绑定</button>
        </div>
      </div>
    </div>
  `;
}

function miniCardHtml(card, idx, s, recap) {
  const kindClass = String(card.rewardId || "").startsWith("bind_") ? "mini-card--bind" : "mini-card--snap";
  const isEmpty = !!card.emptyHint;
  // card.label 保留在数据中作为卡片含义注释，不在界面上显示
  if (isEmpty) {
    return `
      <div class="mini-card ${kindClass} mini-card--empty" role="listitem" data-card-idx="${idx}" data-reward-id="${escapeHtml(card.rewardId || "")}">
        <div class="mini-card__empty-hint">${card.emptyHint}</div>
        ${rewardBlockHtml(card.rewardId, s, recap, true)}
      </div>
    `;
  }
  return `
    <div class="mini-card ${kindClass}" role="listitem" data-card-idx="${idx}" data-reward-id="${escapeHtml(card.rewardId || "")}">
      ${card.value ? `<div class="mini-card__v">${card.value}</div>` : ""}
      ${kindClass === "mini-card--bind" && card.desc ? `<div class="mini-card__d">${card.desc}</div>` : ""}
      ${rewardBlockHtml(card.rewardId, s, recap, false)}
    </div>
  `;
}

function shareCardHtml(s, recap, { variant }) {
  const color = MEM_CARD_COLORS.find((c) => c.id === s.memorial?.colorId) || MEM_CARD_COLORS[0];

  const belovedName = String(recap.belovedGameName || "").trim();
  const belovedIcon = String(recap.belovedGameIcon || "").trim() || "🎮";
  const belovedHours = Number(recap.belovedGameHours || 0);
  const fmtBelovedH = (() => {
    if (belovedHours <= 0) return "";
    if (belovedHours > 6000) return "6000+";
    if (belovedHours < 1) return Math.max(0.1, belovedHours).toFixed(1);
    return String(Math.floor(belovedHours));
  })();

  const top10 = Array.isArray(recap.belovedTop10) ? recap.belovedTop10.filter(g => String(g.name || "").trim()) : [];
  const topShow = top10.slice(0, 5);
  const cutName = (n) => { const s = String(n || "").trim(); return s.length <= 6 ? escapeHtml(s) : escapeHtml(s.slice(0, 5)) + "…"; };

  const kw = calcShareKeyword(recap);
  const genre = String(recap.topGenreLabel || "").trim();

  const togetherDays = calcDaysSince(parseCnDateToTs(recap.regDate));
  const fmtKpi = (n, max) => Number(n) > max ? max + "+" : fmt(Number(n));
  const fmtHoursKpi = (h) => { const v = Number(h || 0); if (v <= 0) return "—"; if (v > 6000) return "6000+"; if (v < 1) return Math.max(0.1, v).toFixed(1); return String(Math.floor(v)); };
  const fmtWanKpi = (n) => { const v = Number(n || 0); if (v <= 0) return "0"; if (v < 10000) return fmt(v); const w = v / 10000; if (w >= 999.95) return "999.9万+"; return (w >= 1 && w % 1 < 0.05) ? Math.floor(w) + "万" : w.toFixed(1) + "万"; };
  const fmtDays = (d) => { if (d == null || d <= 0) return "—"; return d > 9999 ? "9999" : String(d); };

  const devGames = (Array.isArray(recap?.devGames) ? recap.devGames : []).filter(g => String(g.name || "").trim());
  const allKpis = [
    togetherDays > 0 && { dim: "days", label: "TapTap陪伴天数", value: fmtDays(togetherDays) },
    Number(recap.gamesPlayedTotal || 0) > 0 && { dim: "games", label: "游玩数量", value: fmtKpi(recap.gamesPlayedTotal, 999) },
    Number(recap.playTimeHours || 0) > 0 && { dim: "hours", label: "冒险时长", value: fmtHoursKpi(recap.playTimeHours) },
    genre && { dim: "genre", label: "冒险偏好", value: escapeHtml(genre) },
    Number(recap.achievementsTotal || 0) + Number(recap.platformBadgesTotal || 0) > 0 && { dim: "achieve", label: "成就与徽章", value: fmtKpi(Number(recap.achievementsTotal || 0) + Number(recap.platformBadgesTotal || 0), 9999) },
    Number(recap.reviewsCount || 0) > 0 && { dim: "reviews", label: "评价数", value: fmtKpi(recap.reviewsCount, 999) },
    Number(recap.communityPublished || 0) > 0 && { dim: "published", label: "社区发布数", value: fmtKpi(recap.communityPublished, 9999) },
    Number(recap.communityLikesReceived || 0) > 0 && { dim: "likes", label: "获赞数", value: fmtWanKpi(recap.communityLikesReceived) },
    devGames.length > 0 && { dim: "dev", label: "我的作品", value: String(devGames.length) },
    (Number(recap.friendsCount || 0) + Number(recap.followersCount || 0)) > 0 && { dim: "social", label: "好友与粉丝", value: fmtKpi(Number(recap.friendsCount || 0) + Number(recap.followersCount || 0), 9999) },
    Number(recap.nightSurfDays || 0) > 0 && { dim: "night", label: "深夜冲浪", value: fmtKpi(recap.nightSurfDays, 999) },
  ].filter(Boolean);
  const hlDim = kw.dim;
  const hlIdx = allKpis.findIndex(k => k.dim === hlDim);
  if (hlIdx > 0) { const [item] = allKpis.splice(hlIdx, 1); allKpis.unshift(item); }

  return `
    <div class="sc2" id="shareCard" style="--sc2-bg:${color.bg}; --sc2-accent:${color.accent}; --sc2-panel:${color.panel};">
      <div class="sc2__header">
        <div class="sc2__title">TapTap 十周年回顾</div>
        <span class="sc2__badge">TapTap</span>
      </div>

      <div class="sc2__hero">
        <div class="sc2__hero-icon">${belovedIcon}</div>
        <div class="sc2__hero-label">我的十年挚爱「${escapeHtml(belovedName || "—")}」</div>
        ${fmtBelovedH ? `<div class="sc2__hero-hours"><span class="sc2__hero-hours-num">${fmtBelovedH}</span><span class="sc2__hero-hours-unit">小时</span></div>` : ""}
      </div>

      ${topShow.length > 0 ? `
        <div class="sc2__top">
          <div class="sc2__top-title">我的十年挚爱Top榜</div>
          <div class="sc2__top-list">
            ${topShow.map(g => `
              <div class="sc2__top-item">
                <span class="sc2__top-icon">${String(g.icon || "🎮").trim()}</span>
                <span class="sc2__top-name">${cutName(g.name)}</span>
              </div>
            `).join("")}
          </div>
        </div>
      ` : ""}

      <div class="sc2__keywords">
        <div class="sc2__kw">
          <div class="sc2__kw-label">十年关键词</div>
          <div class="sc2__kw-value">${escapeHtml(kw.keyword)}</div>
        </div>
      </div>

      <div class="sc2__kpis">
        ${allKpis.map((k, i) => {
          const hl = i === 0 && hlDim;
          return `<div class="sc2__kpi${hl ? " sc2__kpi--highlight" : ""}"><div class="sc2__kpi-label">${k.label}</div><div class="sc2__kpi-value">${k.value}</div></div>`;
        }).join("")}
      </div>
    </div>
  `;
}

function wireRecapInline() {
  // Share recap: modal only (do not navigate away from the activity page)
  $("#btnToggleShare")?.addEventListener("click", openShareRecapModal);

  // On entry to the hall, focus the earliest claimable snapshot card (but keep original order).
  // IMPORTANT: do NOT re-auto-focus on every render, otherwise claiming will "jump" before fly animation finishes.
  if (!wireRecapInline._didAutoFocus) {
    wireRecapInline._didAutoFocus = true;
    try {
      const track = document.getElementById("recapCarouselSnap");
      if (track) {
        const cards = Array.from(track.querySelectorAll(".mini-card"));
        const idx = cards.findIndex((el) => {
          const id = String(el.getAttribute("data-reward-id") || "");
          if (!id || !id.startsWith("snap_")) return false;
          if (hasClaimed(state, id)) return false;
          const g = snapshotClaimGrant(state, id);
          return !!g && (Number(g.points || 0) > 0 || Number(g.coupons || 0) > 0);
        });
        if (idx >= 0) requestCarouselInit("recapCarouselSnap", idx);
      }
    } catch {
      // ignore
    }
  }

  wireCarousel("recapCarouselSnap", "recapDotsSnap");
  wireCarousel("recapCarouselBind", "recapDotsBind");

  // Role card carousel inside bind_roles
  $$(".rolecard-carousel").forEach(carousel => {
    const track = carousel.querySelector(".rolecard__track");
    if (!track) return;
    const total = Number(carousel.dataset.roleTotal || 0);
    let cur = 0;
    const go = (idx) => {
      cur = ((idx % total) + total) % total;
      track.querySelectorAll(".rolecard__slide").forEach((s, i) => {
        s.classList.toggle("rolecard__slide--active", i === cur);
      });
      carousel.querySelectorAll(".rolecard__dot").forEach((d, i) => {
        d.classList.toggle("rolecard__dot--active", i === cur);
      });
    };
    carousel.querySelectorAll(".rolecard__arrow").forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        go(cur + Number(btn.dataset.roleDir || 1));
      });
    });
    carousel.querySelectorAll(".rolecard__dot").forEach(dot => {
      dot.addEventListener("click", (e) => {
        e.stopPropagation();
        go(Number(dot.dataset.rdot || 0));
      });
    });
  });

  // 年度数据柱状图点击交互
  $$(".ychart-col").forEach((col) => {
    col.addEventListener("click", () => {
      const bubble = col.querySelector(".ychart-bubble");
      if (!bubble) return;
      const isVisible = bubble.classList.contains("ychart-bubble--visible");
      $$(".ychart-bubble").forEach(b => { b.classList.remove("ychart-bubble--visible"); b.classList.add("ychart-bubble--hidden"); });
      if (!isVisible) {
        bubble.classList.remove("ychart-bubble--hidden");
        bubble.classList.add("ychart-bubble--visible");
      }
    });
  });

  // 年历海报分享按钮
  $$("[data-yearbook-share]").forEach((b) => {
    b.addEventListener("click", (e) => { e.stopPropagation(); shareYearbookPoster(); });
  });

  $$("[data-claim]").forEach((b) =>
    b.addEventListener("click", () => {
      const id = String(b.dataset.claim || "");
      if (!id) return;
      if (id !== "bind_roles" && hasClaimed(state, id)) return;

      const trackId = b.closest?.(".carousel__track")?.id || "";
      const currentIdx = Number(b.closest?.(".mini-card")?.getAttribute("data-card-idx") || 0);
      requestCarouselInit(trackId, currentIdx);

      // Snapshot reward
      if (id.startsWith("snap_")) {
        const fromRect = b.getBoundingClientRect();
        const grant = snapshotClaimGrant(state, id);
        if (!grant) return;
        if (!grant.points && !grant.coupons) return;
        markClaimed(state, id);
        const aliases = SNAP_REWARD_ALIASES[id];
        if (aliases?.length) aliases.forEach((a) => markClaimed(state, a));
        addPoints(state, grant.points || 0);
        addCoupons(state, grant.coupons || 0);
        saveState();
        render();
        flyGrantToSticky({ fromRect, grant }).then(() => scheduleScrollToNextCard(trackId, currentIdx));
        return;
      }

      // Bind reward
      const r = BIND_REWARDS.find((x) => x.id === id);
      if (!r) return;
      if (id === "bind_roles") {
        const fromRect = b.getBoundingClientRect();
        const bound = Math.max(0, Number(state.boundRolesCount || 0));
        const claimedCount = Math.max(0, Number(state.claimedRoleRewardsCount || 0));
        const pending = Math.max(0, bound - claimedCount);
        if (pending <= 0) return;
        const per = r.perRole || { points: 0, coupons: 0 };
        state.claimedRoleRewardsCount = claimedCount + pending;
        const grant = { points: (per.points || 0) * pending, coupons: (per.coupons || 0) * pending };
        addPoints(state, grant.points || 0);
        addCoupons(state, grant.coupons || 0);
        saveState();
        render();
        flyGrantToSticky({ fromRect, grant }).then(() => scheduleScrollToNextCard(trackId, currentIdx));
        return;
      }

      if (!r.isReady?.(state)) return;
      markClaimed(state, id);
      const grant = { points: r.grant?.points || 0, coupons: r.grant?.coupons || 0 };
      const fromRect = b.getBoundingClientRect();
      addPoints(state, grant.points || 0);
      addCoupons(state, grant.coupons || 0);
      saveState();
      render();
      flyGrantToSticky({ fromRect, grant }).then(() => scheduleScrollToNextCard(trackId, currentIdx));
    }),
  );

  $$("[data-bind]").forEach((b) =>
    b.addEventListener("click", () => {
      const id = String(b.dataset.bind || "");
      const trackId = b.closest?.(".carousel__track")?.id || "";
      const currentIdx = Number(b.closest?.(".mini-card")?.getAttribute("data-card-idx") || 0);
      lastBindClickCtx = { trackId, currentIdx };
      if (id === "bind_steam") return openBindSteamModal();
      if (id === "bind_roles") return openBindRolesModal();
    }),
  );

  $$("[data-deeplink]").forEach((b) =>
    b.addEventListener("click", () => {
      const uri = String(b.dataset.deeplink || "").trim();
      if (!uri) return;
      openModal({
        title: "跳转到帖子",
        bodyHtml: `
          <div class="small" style="line-height:1.6">
            <div class="hint"><b>这里会打开帖子详情页</b>（Demo 仅做含义表达）</div>
            <div class="divider"></div>
            <div class="muted small">可跳转：<span class="mono">${uri}</span></div>
          </div>
        `,
        footerHtml: `<button class="btn btn--brand" id="btnDeeplinkOk">知道了</button>`,
      });
      $("#btnDeeplinkOk")?.addEventListener("click", closeModal);
    }),
  );

  // NOTE: old share modal logic removed (handled by `openShareRecapModal()`).
}

function wireFirstRecap() {
  if (wireFirstRecap._claiming == null) wireFirstRecap._claiming = false;
  if (wireFirstRecap._enter == null) wireFirstRecap._enter = null;

  const updateFirstRecapCurrencyDom = () => {
    try {
      const pv = document.querySelector("#pillPoints .firstrecap-money__v") || document.querySelector("#pillPoints b");
      const cv = document.querySelector("#pillCoupons .firstrecap-money__v") || document.querySelector("#pillCoupons b");
      if (pv) pv.textContent = fmt(Number(state.points || 0));
      if (cv) cv.textContent = fmt(Number(state.walletCoupons || 0));
    } catch {
      // ignore
    }
  };

  // Share (only show after all cards are done)
  const shareBtn = $("#btnToggleShare");
  if (shareBtn) shareBtn.classList.add("hidden");
  shareBtn?.addEventListener("click", openShareRecapModal);

  const snapSection = document.querySelector("[data-recap-section='snap']");
  const bindSection = document.querySelector("[data-recap-section='bind']");
  const snapTrack = document.getElementById("recapCarouselSnap");
  const bindTrack = document.getElementById("recapCarouselBind");
  const snapCards = snapTrack ? Array.from(snapTrack.querySelectorAll(".mini-card")) : [];
  const bindCards = bindTrack ? Array.from(bindTrack.querySelectorAll(".mini-card")) : [];

  // Only show bind cards that are ALREADY claimable on this ritual page.
  const pendingRoles = Math.max(0, Number(state.boundRolesCount || 0) - Number(state.claimedRoleRewardsCount || 0));
  const claimableBindIds = [];
  if (!!state.boundSteam && !hasClaimed(state, "bind_steam")) claimableBindIds.push("bind_steam");
  if (pendingRoles > 0) claimableBindIds.push("bind_roles");
  const bindCardsClaimable = bindCards.filter((el) => claimableBindIds.includes(String(el.getAttribute("data-reward-id") || "")));

  const flow = (() => {
    const f = state.firstRecapFlow;
    if (!f || typeof f !== "object") return { phase: "snap", idx: 0 };
    const ph = String(f.phase || "");
    return {
      phase: ph === "bind" || ph === "done" ? ph : "snap",
      idx: Math.max(0, Number(f.idx || 0)),
    };
  })();

  const setFlow = (next) => {
    state.firstRecapFlow = { phase: next.phase, idx: Math.max(0, Number(next.idx || 0)) };
    // Mark the first-time ritual as completed once all cards are done.
    if (next.phase === "done") state.firstRecapDone = true;
    saveState();
  };

  const markEnterAnim = (phase, idx) => {
    wireFirstRecap._enter = { phase: String(phase || ""), idx: Math.max(0, Number(idx || 0)) };
  };

  const showQueue = (cards, unlockedIdx) => {
    const u = Math.max(0, Number(unlockedIdx || 0));
    cards.forEach((el, i) => el.classList.toggle("firstrecap-card--shown", i <= u));
  };

  const applyFlow = () => {
    const renderDots = (dotsId, count) => {
      const wrap = document.getElementById(dotsId);
      if (!wrap) return;
      const n = Math.max(0, Number(count || 0));
      wrap.innerHTML = Array.from({ length: n })
        .map(
          (_, i) =>
            `<button class="dot ${i === 0 ? "dot--active" : ""}" type="button" data-dot="${i}" aria-label="第 ${i + 1} 张"></button>`,
        )
        .join("");
    };

    // Hide all bind cards except claimable ones.
    bindCards.forEach((el) => {
      const id = String(el.getAttribute("data-reward-id") || "");
      el.classList.toggle("hidden", !claimableBindIds.includes(id));
    });

    if (flow.phase === "snap") {
      snapSection?.classList.remove("hidden");
      bindSection?.classList.add("hidden");
      // No snapshot cards: jump directly
      if (!snapCards.length) {
        if (bindCardsClaimable.length) {
          setFlow({ phase: "bind", idx: 0 });
          return render();
        }
        setFlow({ phase: "done", idx: 0 });
        return render();
      }
      const unlocked = Math.min(flow.idx, Math.max(0, snapCards.length - 1));
      showQueue(snapCards, unlocked);
      requestCarouselInit("recapCarouselSnap", unlocked);
      renderDots("recapDotsSnap", unlocked + 1);
      wireCarousel("recapCarouselSnap", "recapDotsSnap", {
        cardSelector: ".mini-card.firstrecap-card--shown",
        activeCardClass: "firstrecap-card--active",
      });

      // Only animate when the NEXT card is unlocked by claiming (not on manual swipe).
      const enter = wireFirstRecap._enter;
      if (enter && enter.phase === "snap" && enter.idx === unlocked) {
        const el = snapCards[unlocked];
        if (el) {
          el.classList.remove("firstrecap-card--enter");
          // Force reflow so repeated enters work.
          void el.offsetHeight;
          el.classList.add("firstrecap-card--enter");
          el.addEventListener(
            "animationend",
            () => el.classList.remove("firstrecap-card--enter"),
            { once: true },
          );
        }
        wireFirstRecap._enter = null;
      }
      return;
    }
    if (flow.phase === "bind") {
      // Only show bind section when there are claimable bind rewards.
      if (!bindCardsClaimable.length) {
        setFlow({ phase: "done", idx: 0 });
        return render();
      }
      snapSection?.classList.add("hidden");
      bindSection?.classList.remove("hidden");
      const unlocked = Math.min(flow.idx, Math.max(0, bindCardsClaimable.length - 1));
      showQueue(bindCardsClaimable, unlocked);
      requestCarouselInit("recapCarouselBind", unlocked);
      renderDots("recapDotsBind", unlocked + 1);
      wireCarousel("recapCarouselBind", "recapDotsBind", {
        cardSelector: ".mini-card.firstrecap-card--shown:not(.hidden)",
        activeCardClass: "firstrecap-card--active",
      });

      const enter = wireFirstRecap._enter;
      if (enter && enter.phase === "bind" && enter.idx === unlocked) {
        const el = bindCardsClaimable[unlocked];
        if (el) {
          el.classList.remove("firstrecap-card--enter");
          void el.offsetHeight;
          el.classList.add("firstrecap-card--enter");
          el.addEventListener(
            "animationend",
            () => el.classList.remove("firstrecap-card--enter"),
            { once: true },
          );
        }
        wireFirstRecap._enter = null;
      }
      return;
    }

    // done
    // Keep cards visible for review; just reveal share button.
    snapSection?.classList.remove("hidden");
    if (bindCardsClaimable.length) bindSection?.classList.remove("hidden");
    else bindSection?.classList.add("hidden");
    showQueue(snapCards, Math.max(0, snapCards.length - 1));
    renderDots("recapDotsSnap", snapCards.length);
    if (bindCardsClaimable.length) {
      showQueue(bindCardsClaimable, Math.max(0, bindCardsClaimable.length - 1));
      renderDots("recapDotsBind", bindCardsClaimable.length);
    }
    {
      const unlocked = Math.max(0, snapCards.length - 1);
      requestCarouselInit("recapCarouselSnap", unlocked);
      wireCarousel("recapCarouselSnap", "recapDotsSnap", {
        cardSelector: ".mini-card.firstrecap-card--shown",
        activeCardClass: "firstrecap-card--active",
      });
    }
    if (bindCardsClaimable.length) {
      const unlocked = Math.max(0, bindCardsClaimable.length - 1);
      requestCarouselInit("recapCarouselBind", unlocked);
      wireCarousel("recapCarouselBind", "recapDotsBind", {
        cardSelector: ".mini-card.firstrecap-card--shown:not(.hidden)",
        activeCardClass: "firstrecap-card--active",
      });
    }
    if (shareBtn) shareBtn.classList.remove("hidden");

    // Completion modal (first time only)
    try {
      if (state.firstRecapDone && !state.firstRecapRun?.doneModalShown) {
        const startP = Math.max(0, Number(state.firstRecapRun?.startPoints || 0));
        const startC = Math.max(0, Number(state.firstRecapRun?.startCoupons || 0));
        const gained = {
          points: Math.max(0, Math.floor(Number(state.points || 0) - startP)),
          coupons: Math.max(0, Math.floor(Number(state.walletCoupons || 0) - startC)),
        };

        // Mark as shown before opening (avoid double-open on re-render).
        if (!state.firstRecapRun || typeof state.firstRecapRun !== "object") state.firstRecapRun = { startPoints: startP, startCoupons: startC, doneModalShown: true };
        state.firstRecapRun.doneModalShown = true;
        saveState();

        const bigRewards = (() => {
          const parts = [];
          if (gained.points > 0) {
            parts.push(`
              <div class="celebrate-grant celebrate-grant--points">
                <div class="celebrate-grant__k">积分</div>
                <div class="celebrate-grant__v">+${fmt(gained.points)}</div>
                <div class="celebrate-grant__d">在活动会场装扮十周年名片，抽奖点券</div>
              </div>
            `);
          }
          if (gained.coupons > 0) {
            parts.push(`
              <div class="celebrate-grant celebrate-grant--coupons">
                <div class="celebrate-grant__k">点券</div>
                <div class="celebrate-grant__v">+${fmt(gained.coupons)}</div>
                <div class="celebrate-grant__d">购买站内游戏、PC CDKey、云玩服务等</div>
              </div>
            `);
          }
          if (!parts.length) {
            return `<div class="muted small">本次没有获得可统计的奖励</div>`;
          }
          return `<div class="celebrate-grants">${parts.join("")}</div>`;
        })();

        const body = `
          <div class="celebrate">
            <div class="celebrate-hero" aria-hidden="true"></div>
            <div class="celebrate-top">
              <div class="celebrate-title">十年回顾结束啦</div>
            </div>
            <div class="celebrate-panel">
              ${bigRewards}
            </div>
          </div>
        `;
        const footer = `
          <button class="btn" id="btnFirstRecapGoHall" type="button">前往活动会场</button>
          <button class="btn btn--brand" id="btnFirstRecapShare" type="button">分享我的十年回顾</button>
        `;

        const reopenDoneModal = () => {
          // Title is hidden for this variant; keep a short label for accessibility.
          openModal({ title: "完成", bodyHtml: body, footerHtml: footer, hideClose: true, lockClose: true, variant: "celebrate" });
          $("#btnFirstRecapGoHall")?.addEventListener("click", () => {
            closeModal();
            navigate("home");
          });
          $("#btnFirstRecapShare")?.addEventListener("click", () => {
            // Swap to share modal; when it closes, restore this summary modal.
            openShareRecapModal({ onClose: reopenDoneModal });
          });
        };

        reopenDoneModal();
      }
    } catch {
      // ignore
    }
  };

  const advanceAfterClaim = () => {
    if (flow.phase === "snap") {
      const nextIdx = flow.idx + 1;
      if (nextIdx < snapCards.length) {
        markEnterAnim("snap", nextIdx);
        setFlow({ phase: "snap", idx: nextIdx });
        return render();
      }
      // Snapshot finished: go bind phase only if there are claimable bind rewards
      if (bindCardsClaimable.length) {
        markEnterAnim("bind", 0);
        setFlow({ phase: "bind", idx: 0 });
        return render();
      }
      setFlow({ phase: "done", idx: 0 });
      return render();
    }
    if (flow.phase === "bind") {
      const nextIdx = flow.idx + 1;
      if (nextIdx < bindCardsClaimable.length) {
        markEnterAnim("bind", nextIdx);
        setFlow({ phase: "bind", idx: nextIdx });
        return render();
      }
      setFlow({ phase: "done", idx: 0 });
      return render();
    }
  };

  // Delegate clicks (rebind each render to avoid stale closures)
  const root = document.getElementById("main");
  if (wireFirstRecap._onClick && root) root.removeEventListener("click", wireFirstRecap._onClick);
  wireFirstRecap._onClick = (e) => {
    const t = e.target;

    // Small skip link (go to hall now)
    if (t?.closest?.("#btnFirstRecapSkip")) {
      // Don't block the user next time; keep their progress in case they come back via hash.
      state.firstRecapDone = true;
      saveState();
      navigate("home");
      return;
    }

    const btn = t?.closest?.("[data-claim], [data-bind], [data-deeplink]");
    if (!btn) return;
    const card = btn.closest?.(".mini-card");
    // Only allow interactions on the currently focused card in the ritual flow.
    if (!card || !card.classList.contains("firstrecap-card--active")) return;

    // Claim
    if (btn.hasAttribute("data-claim")) {
      if (wireFirstRecap._claiming) return;
      const id = String(btn.getAttribute("data-claim") || "");
      if (!id) return;
      if (id !== "bind_roles" && hasClaimed(state, id)) return;
      const fromRect = btn.getBoundingClientRect();

      // Snapshot reward
      if (id.startsWith("snap_")) {
        const grant = snapshotClaimGrant(state, id);
        if (!grant) return;
        if (!grant.points && !grant.coupons) return;
        wireFirstRecap._claiming = true;
        markClaimed(state, id);
        const aliases = SNAP_REWARD_ALIASES[id];
        if (aliases?.length) aliases.forEach((a) => markClaimed(state, a));
        addPoints(state, grant.points || 0);
        addCoupons(state, grant.coupons || 0);
        saveState();
        // Match hall behavior: wait for fly animation to finish, then advance.
        updateFirstRecapCurrencyDom();
        const done = () => {
          // Start advancing ASAP after fly completes (same beat as hall home)
          wireFirstRecap._claiming = false;
          queueMicrotask(() => advanceAfterClaim());
        };
        Promise.resolve(flyGrantToSticky({ fromRect, grant })).then(done).catch(done);
        // Safety unlock (avoid stuck state if animation fails silently)
        setTimeout(() => (wireFirstRecap._claiming = false), 2200);
        return;
      }

      // Bind reward (only roles can be multi-claim)
      const r = BIND_REWARDS.find((x) => x.id === id);
      if (!r) return;
      if (id === "bind_roles") {
        const bound = Math.max(0, Number(state.boundRolesCount || 0));
        const claimedCount = Math.max(0, Number(state.claimedRoleRewardsCount || 0));
        const pending = Math.max(0, bound - claimedCount);
        if (pending <= 0) return;
        const per = r.perRole || { points: 0, coupons: 0 };
        wireFirstRecap._claiming = true;
        state.claimedRoleRewardsCount = claimedCount + pending;
        const grant = { points: (per.points || 0) * pending, coupons: (per.coupons || 0) * pending };
        addPoints(state, grant.points || 0);
        addCoupons(state, grant.coupons || 0);
        saveState();
        updateFirstRecapCurrencyDom();
        const done = () => {
          wireFirstRecap._claiming = false;
          queueMicrotask(() => advanceAfterClaim());
        };
        Promise.resolve(flyGrantToSticky({ fromRect, grant })).then(done).catch(done);
        setTimeout(() => (wireFirstRecap._claiming = false), 2200);
        return;
      }
      // Steam one-time
      if (!r.isReady?.(state)) return;
      wireFirstRecap._claiming = true;
      markClaimed(state, id);
      const grant = { points: r.grant?.points || 0, coupons: r.grant?.coupons || 0 };
      addPoints(state, grant.points || 0);
      addCoupons(state, grant.coupons || 0);
      saveState();
      updateFirstRecapCurrencyDom();
      {
        const done = () => {
          wireFirstRecap._claiming = false;
          queueMicrotask(() => advanceAfterClaim());
        };
        Promise.resolve(flyGrantToSticky({ fromRect, grant })).then(done).catch(done);
        setTimeout(() => (wireFirstRecap._claiming = false), 2200);
      }
      return;
    }

    // Bind (ritual page should not encourage binding, but keep deeplink explanation if needed)
    if (btn.hasAttribute("data-bind")) {
      // Ignore: ritual page shows bind cards only when already claimable
      return;
    }

    // Deeplink explanation
    if (btn.hasAttribute("data-deeplink")) {
      const uri = String(btn.getAttribute("data-deeplink") || "").trim();
      if (!uri) return;
      openModal({
        title: "跳转到帖子",
        bodyHtml: `
          <div class="small" style="line-height:1.6">
            <div class="hint"><b>这里会打开帖子详情页</b>（Demo 仅做含义表达）</div>
            <div class="divider"></div>
            <div class="muted small">可跳转：<span class="mono">${uri}</span></div>
          </div>
        `,
        footerHtml: `<button class="btn btn--brand" id="btnDeeplinkOk">知道了</button>`,
      });
      $("#btnDeeplinkOk")?.addEventListener("click", closeModal);
    }
  };
  root?.addEventListener("click", wireFirstRecap._onClick);

  applyFlow();
}

// Deprecated: replaced by role-based binding modal.

function openBindSteamModal() {
  const body = `
    <div class="small" style="line-height:1.55">
      <div class="hint">
        <b>绑定 Steam 账号</b>：这里会打开 Steam 绑定界面。
      </div>
      <div class="divider"></div>
      <div class="muted small">绑定后可领取：<b>${BIND_REWARDS.find((x) => x.id === "bind_steam")?.grant?.points || 0} 积分</b></div>
    </div>
  `;
  const footer = `
    <button class="btn btn--brand" id="btnConfirmSteam">确认绑定（模拟）</button>
    <button class="btn" id="btnCancelSteam">取消</button>
  `;
  openModal({ title: "绑定 Steam", bodyHtml: body, footerHtml: footer });
  $("#btnCancelSteam")?.addEventListener("click", closeModal);
  $("#btnConfirmSteam")?.addEventListener("click", () => {
    state.boundSteam = true;
    if (!state.steamGamesCount) {
      state.steamFavGame = "ELDEN RING";
      state.steamFavGameIcon = "https://img.tapimg.net/market/images/e2b7259807d30e498a3008cbed6be542.png";
      state.steamAccountValue = 12680.5;
      state.steamGamesCount = 286;
      state.steamPlayHours = 4236;
    }
    saveState();
    closeModal();
    if (lastBindClickCtx?.trackId) requestCarouselInit(lastBindClickCtx.trackId, lastBindClickCtx.currentIdx);
    render();
    toast("Steam 绑定完成，可领取绑定奖励");
    lastBindClickCtx = null;
  });
}

function openBindRolesModal() {
  const per = BIND_REWARDS.find((x) => x.id === "bind_roles")?.perRole || { points: 0, coupons: 0 };
  const body = `
    <div class="small" style="line-height:1.55">
      <div class="hint">
        <b>绑定更多角色</b>：这里会打开数据绑定界面。
      </div>
      <div class="divider"></div>
      <div class="muted small">每绑定 1 个角色可领取：${grantPillsHtml(per)}</div>
      <div class="divider"></div>
      <div class="muted small">当前已绑定：<b>${fmt(state.boundRolesCount || 0)}</b> 个角色</div>
    </div>
  `;
  const footer = `
    <button class="btn btn--brand" id="btnBindOneRole">绑定 1 个角色（模拟）</button>
    <button class="btn" id="btnCancelBindRole">取消</button>
  `;
  openModal({ title: "绑定角色", bodyHtml: body, footerHtml: footer });
  $("#btnCancelBindRole")?.addEventListener("click", closeModal);
  const sampleRoles = [
    { name: "轮椅指挥官", game: "明日方舟", job: "", level: 0, stats: [{ label: "登录天数", value: "65天" }, { label: "传说级人物", value: "10" }, { label: "传说级装备", value: "49" }], bg: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)", avatar: "https://img.tapimg.net/market/images/e2b7259807d30e498a3008cbed6be542.png" },
    { name: "深海猎手", game: "明日方舟", job: "", level: 0, stats: [{ label: "登录天数", value: "128天" }, { label: "传说级人物", value: "23" }, { label: "传说级装备", value: "76" }], bg: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)", avatar: "https://img.tapimg.net/market/images/e2b7259807d30e498a3008cbed6be542.png" },
  ];
  $("#btnBindOneRole")?.addEventListener("click", () => {
    state.boundRolesCount = Math.max(0, Number(state.boundRolesCount || 0)) + 1;
    state.boundData = state.boundRolesCount > 0;
    if (!Array.isArray(state.boundRoleCards)) state.boundRoleCards = [];
    const idx = state.boundRoleCards.length;
    state.boundRoleCards.push(sampleRoles[idx % sampleRoles.length]);
    saveState();
    closeModal();
    if (lastBindClickCtx?.trackId) requestCarouselInit(lastBindClickCtx.trackId, lastBindClickCtx.currentIdx);
    render();
    toast("已绑定 1 个角色，可领取奖励");
    lastBindClickCtx = null;
  });
}

function discoverInlineView(s) {
  const iconChar = (name) => {
    const raw = String(name || "").trim();
    if (!raw) return "";
    const m = raw.match(/《([^》]+)》/);
    const inside = (m ? m[1] : raw).trim();
    const cleaned = inside.replace(/^TapTap制造[:：]/, "").split(/[:：]/).pop().trim();
    return Array.from(cleaned)[0] || "";
  };

  // ── 猜猜是什么游戏 ──
  const revealedIds = s.capsule?.revealed || [];
  const claimedIds = s.capsule?.claimed || [];

  const getTopLiked = (gameId) => {
    const arr = s.mutualMessages?.[gameId] || [];
    return arr
      .slice()
      .filter((m) => String(m?.text || "").trim())
      .sort((a, b) => Number(b.likes || 0) - Number(a.likes || 0))
      .slice(0, 6);
  };
  const cut24 = (str) => {
    const arr = Array.from(String(str || "").trim());
    if (arr.length <= 24) return arr.join("");
    return `${arr.slice(0, 24).join("")}…`;
  };

  const capsuleHtml = (() => {
    const cards = MUTUAL_GAMES.map((g) => {
      const isRevealed = revealedIds.includes(g.id);
      const isClaimed = claimedIds.includes(g.id);

      if (!isRevealed) {
        // 未揭示：神秘卡（横向单行）
        return `
          <button class="guess-card guess-card--mystery guess-card--row" type="button" data-guess-reveal="${g.id}" style="--layer-color:${g.layerColor}">
            <div class="guess-card__left">
              <div class="guess-card__q">?</div>
            </div>
            <div class="guess-card__body">
              <div class="guess-card__hint">${escapeHtml(g.hint || "")}</div>
            </div>
            <div class="guess-card__right">
              <div class="guess-card__cta">听听它的故事</div>
            </div>
          </button>
        `;
      }

      // 热门评论跑马灯
      const top = getTopLiked(g.id);
      const marqueeItems = top.length
        ? top.map((m) => `<span class="marquee__item">👍 ${Number(m.likes || 0)} ${escapeHtml(cut24(m.text))}</span>`).join("")
        : `<span class="marquee__item">还没有热评，快来留言做第一个上墙的人吧</span>`;
      const marqueeTrackClass = top.length ? "marquee__track" : "marquee__track marquee__track--static";

      // 合并按钮：未领取=领取积分，已领取=再听一次
      const mainBtn = isClaimed
        ? `<button class="btn guess-card__story-btn" type="button" data-guess-story="${g.id}">再听听它的故事</button>`
        : `<button class="btn btn--brand guess-card__action" type="button" data-guess-claim="${g.id}">领取 ${g.points} 积分</button>`;

      return `
        <div class="guess-card guess-card--open guess-card--row" style="--layer-color:${g.layerColor}">
          <div class="guess-card__left">
            <div class="guess-card__icon">${g.icon}</div>
          </div>
          <div class="guess-card__body">
            <div class="guess-card__head">
              <span class="guess-card__name">${escapeHtml(g.title)}</span>
            </div>
            <div class="guess-card__marquee marquee" aria-label="热门评论">
              <div class="${marqueeTrackClass}">
                ${marqueeItems}${top.length ? marqueeItems : ""}
              </div>
            </div>
          </div>
          <div class="guess-card__right">
            ${mainBtn}
            <button class="btn guess-card__action" type="button" data-guess-post="${g.id}">留言板</button>
          </div>
        </div>
      `;
    }).join("");

    return `<div class="guess-list">${cards}</div>`;
  })();

  const playStates = PLAYTEST_GAMES.map((p, idx) => {
    const completed = s.playtest.completed.includes(p.id);
    const claimed = (s.playtest.claimed || []).includes(p.id);
    const claimable = completed && !claimed;
    const group = claimable ? 0 : claimed ? 2 : 1;
    const heat = Math.max(0, Number(p.heat || 0));
    return { p, idx, completed, claimed, claimable, group, heat };
  })
    .sort((a, b) => (a.group - b.group) || (b.heat - a.heat) || (a.idx - b.idx));

  const chunk3 = (arr) => {
    const pages = [];
    for (let i = 0; i < arr.length; i += 3) pages.push(arr.slice(i, i + 3));
    return pages;
  };

  const playPages = chunk3(playStates);
  const playPagesHtml = playPages
    .map((page, pageIdx) => {
      const items = page
        .map(({ p, claimable, claimed }) => {
          const icon = iconChar(p.title);
          // Remove the "minutes" tag (e.g. "10分钟") for the TapTap 制造 GameJam module.
          const tags = (p.tags || [])
            .filter((t) => !/^\s*\d+\s*分钟\s*$/g.test(String(t || "")))
            .slice(0, 4)
            .map((t) => `<span class="tag">${escapeHtml(t)}</span>`)
            .join("");
          const heat = Math.max(0, Number(p.heat || 0));
          const btn = claimable
            ? `<button class="btn btn--brand" type="button" data-play-claim="${p.id}">领奖</button>`
            : claimed
              ? `<button class="btn" type="button" disabled>已领取</button>`
              : `<button class="btn btn--brand btn--sm" type="button" data-play-go="${p.id}">试玩</button>`;
          const cardClass = claimable ? "play-card--claim" : claimed ? "play-card--claimed" : "";
          return `
            <div class="item play-card ${cardClass}">
              <div class="row play-row" style="align-items:flex-start">
                <div class="grow" style="min-width:0">
                  <div class="play-titleline">
                    <span class="game-ico play-ico" aria-hidden="true">${escapeHtml(icon)}</span>
                    <span class="play-title">${escapeHtml(p.title)}</span>
                    <span class="play-heat" aria-label="热度">🔥 ${fmt(heat)}</span>
                  </div>
                  <div class="play-tags" aria-label="标签">${tags}</div>
                </div>
                <div class="play-right">
                  ${btn}
                  <div class="muted small play-points">可获得 <b>${fmt(p.points)}</b> 积分</div>
                </div>
              </div>
            </div>
          `;
        })
        .join("");

      return `
        <div class="play-page" data-card-idx="${pageIdx}" role="listitem" aria-label="第 ${pageIdx + 1} 页">
          <div class="play-page__stack">${items}</div>
        </div>
      `;
    })
    .join("");

  const playDotsHtml = playPages
    .map(
      (_, i) =>
        `<button class="dot ${i === 0 ? "dot--active" : ""}" type="button" data-dot="${i}" aria-label="第 ${i + 1} 页"></button>`,
    )
    .join("");

  return `
    <div class="home-module" id="section-discover">
      <section class="card">
        <div class="row">
          <p class="h1 grow">发现好游戏</p>
        </div>
        <p class="muted small" style="margin:6px 0 0">
          TapTap 坚持： <b>零分成</b>
        </p>
        <div class="divider"></div>
        ${capsuleHtml}
      </section>
    </div>

    <div class="home-module" id="section-gamejam">
      <section class="card">
        <div class="row">
          <p class="h2 grow">TapTap制造 GameJam 游戏体验</p>
        </div>
        <p class="muted small" style="margin:6px 0 0">
          完成试玩即可领取积分，请友善交流，支持开发者发布作品。
        </p>
        <div style="margin-top:10px" class="carousel" aria-label="GameJam 试玩列表">
          <div class="hscroll carousel__track" id="playCarousel" role="list">
            ${playPagesHtml}
          </div>
          <div class="carousel__dots" id="playDots" aria-label="试玩分页">
            ${playDotsHtml}
          </div>
        </div>
      </section>
    </div>

    <div class="home-module" id="section-related">
      <section class="card">
        <div class="row">
          <p class="h2 grow">相关活动</p>
        </div>
        <div class="related-banners">
          <button class="related-banner" type="button" data-related="spring" style="--banner-color:#FF6B6B">
            <div class="related-banner__img">🌸</div>
            <div class="related-banner__info">
              <div class="related-banner__title">TapTap 春日祭</div>
              <div class="related-banner__desc">限定春日活动，丰厚奖励等你来拿</div>
            </div>
            <div class="related-banner__arrow">→</div>
          </button>
          <button class="related-banner" type="button" data-related="tappc" style="--banner-color:#6C5CE7">
            <div class="related-banner__img">💻</div>
            <div class="related-banner__info">
              <div class="related-banner__title">TapTap PC 十周年活动</div>
              <div class="related-banner__desc">PC 端专属庆典，精彩不容错过</div>
            </div>
            <div class="related-banner__arrow">→</div>
          </button>
          <button class="related-banner" type="button" data-related="creator" style="--banner-color:#00B894">
            <div class="related-banner__img">✏️</div>
            <div class="related-banner__info">
              <div class="related-banner__title">创作者招募计划</div>
              <div class="related-banner__desc">加入 TapTap 创作者社区</div>
            </div>
            <div class="related-banner__arrow">→</div>
          </button>
        </div>
      </section>
    </div>
  `;
}

function wireDiscoverInline() {
  const playOrderList = (st) =>
    PLAYTEST_GAMES.map((p, idx) => {
      const completed = st.playtest.completed.includes(p.id);
      const claimed = (st.playtest.claimed || []).includes(p.id);
      const claimable = completed && !claimed;
      const group = claimable ? 0 : claimed ? 2 : 1;
      const heat = Math.max(0, Number(p.heat || 0));
      return { id: p.id, idx, group, heat };
    }).sort((a, b) => (a.group - b.group) || (b.heat - a.heat) || (a.idx - b.idx));

  const playPageIndexOf = (st, gameId) => {
    const arr = playOrderList(st);
    const pos = arr.findIndex((x) => x.id === gameId);
    return pos < 0 ? 0 : Math.floor(pos / 3);
  };

  // ── 猜猜是什么游戏 交互 ──

  // 打开游戏故事弹窗（分页图文）
  function openGameStoryModal(game, onClose) {
    const pages = game.story || [];
    if (!pages.length) return;
    let idx = 0;

    function renderPage() {
      const p = pages[idx];
      const isLast = idx === pages.length - 1;
      const isFirst = idx === 0;
      const dots = pages.map((_, i) =>
        `<span class="story-dot${i === idx ? " story-dot--active" : ""}" data-story-dot="${i}"></span>`
      ).join("");

      openModal({
        title: `${game.icon} ${game.title} 的故事`,
        hideClose: true,
        bodyHtml: `
          <div class="story-page" style="--layer-color:${game.layerColor}">
            <div class="story-page__emoji">${p.emoji || game.icon}</div>
            <p class="story-page__text">${escapeHtml(p.text)}</p>
            <div class="story-page__dots">${dots}</div>
            <div class="story-page__nav">
              ${isFirst ? "" : `<button class="btn story-page__prev" type="button" id="storyPrev">上一页</button>`}
              ${isLast
                ? `<button class="btn btn--brand story-page__next" type="button" id="storyClose">关闭</button>`
                : `<button class="btn btn--brand story-page__next" type="button" id="storyNext">下一页</button>`}
            </div>
            <div class="story-page__counter">${idx + 1} / ${pages.length}</div>
          </div>
        `,
      });

      // 绑定翻页事件
      $("#storyPrev")?.addEventListener("click", () => { idx--; renderPage(); });
      $("#storyNext")?.addEventListener("click", () => { idx++; renderPage(); });
      $("#storyClose")?.addEventListener("click", () => {
        closeModal();
        if (typeof onClose === "function") onClose();
      });
      // 点击圆点跳页
      $$("[data-story-dot]").forEach((dot) =>
        dot.addEventListener("click", () => {
          idx = Number(dot.dataset.storyDot) || 0;
          renderPage();
        })
      );
    }

    renderPage();
  }

  // 点击神秘卡 -> 揭示 + 打开故事
  $$("[data-guess-reveal]").forEach((el) =>
    el.addEventListener("click", () => {
      const g = MUTUAL_GAMES.find((x) => x.id === el.dataset.guessReveal);
      if (!g) return;

      // 翻牌动画
      el.classList.add("guess-card--flipping");
      el.style.pointerEvents = "none";

      setTimeout(() => {
        // 更新状态
        if (!state.capsule) state.capsule = { revealed: [], claimed: [] };
        if (!state.capsule.revealed.includes(g.id)) {
          state.capsule.revealed.push(g.id);
        }
        saveState();

        // 打开分页故事，关闭后刷新页面
        openGameStoryModal(g, () => render());
      }, 400);
    }),
  );

  // 已揭示卡片 - 重新听故事
  $$("[data-guess-story]").forEach((el) =>
    el.addEventListener("click", (e) => {
      e.stopPropagation();
      const g = MUTUAL_GAMES.find((x) => x.id === el.dataset.guessStory);
      if (!g) return;
      openGameStoryModal(g);
    }),
  );

  // 领取积分
  $$("[data-guess-claim]").forEach((el) =>
    el.addEventListener("click", (e) => {
      e.stopPropagation();
      const g = MUTUAL_GAMES.find((x) => x.id === el.dataset.guessClaim);
      if (!g) return;
      if (!state.capsule) state.capsule = { revealed: [], claimed: [] };
      if (state.capsule.claimed.includes(g.id)) return;

      state.capsule.claimed.push(g.id);
      addPoints(state, g.points);
      saveState();

      const fromRect = el.getBoundingClientRect();
      if (fromRect) flyGrantToSticky({ fromRect, grant: { points: g.points, coupons: 0 } });

      toast(`获得 ${g.points} 积分`);
      render();
    }),
  );

  // 留言板
  $$("[data-guess-post]").forEach((el) =>
    el.addEventListener("click", (e) => {
      e.stopPropagation();
      const g = MUTUAL_GAMES.find((x) => x.id === el.dataset.guessPost);
      if (!g) return;
      const postUrl = String(g.postUrl || "").trim() || g.url;
      openModal({
        title: `${g.icon} ${g.title} 留言板`,
        bodyHtml: `<div style="text-align:center;padding:12px 0">
          <p style="font-size:14px;color:rgba(15,23,42,.7);line-height:1.8;margin:0 0 8px">提前创建好的帖子详情页，请大家来评论盖楼。</p>
        </div>`,
      });
    }),
  );

  // 跑马灯逐条滚动
  (() => {
    const prefersReduce = !!window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    if (prefersReduce) return;
    const tracks = Array.from(document.querySelectorAll(".guess-card__marquee .marquee__track"));
    tracks.forEach((track) => {
      if (!track || track.classList.contains("marquee__track--static")) return;
      if (track.getAttribute("data-marquee-wired") === "1") return;
      track.setAttribute("data-marquee-wired", "1");

      const items = Array.from(track.querySelectorAll(".marquee__item"));
      if (items.length < 2) return;
      track.classList.add("marquee__track--step");

      const total = items.length;
      const originalCount = total % 2 === 0 ? total / 2 : total;
      if (originalCount <= 1) return;

      const viewport = track.closest(".marquee");
      const firstItem = items[0];
      if (viewport && firstItem) {
        const h = Math.max(0, Math.round(firstItem.getBoundingClientRect().height || firstItem.offsetHeight || 0));
        if (h >= 12) viewport.style.height = `${h}px`;
      }

      const step = (() => {
        const a = items[0];
        const b = items[1];
        if (a && b) {
          const ra = a.getBoundingClientRect();
          const rb = b.getBoundingClientRect();
          const d = rb.top - ra.top;
          if (Number.isFinite(d) && d > 0) return Math.round(d);
        }
        return (a?.offsetHeight || 18) + 4;
      })();

      const pauseMs = 2000;
      const moveMs = 280;
      let idx = 0;
      track.style.transform = "translateY(0px)";
      track.style.transition = "none";

      const tick = () => {
        if (!document.contains(track)) return;
        setTimeout(() => {
          if (!document.contains(track)) return;
          let nextIdx = idx + 1;
          if (idx >= originalCount) {
            track.style.transition = "none";
            track.style.transform = "translateY(0px)";
            void track.offsetHeight;
            idx = 0;
            nextIdx = 1;
          }
          track.style.transition = `transform ${moveMs}ms ease-out`;
          track.style.transform = `translateY(-${step * nextIdx}px)`;
          idx = nextIdx;
          setTimeout(() => tick(), moveMs + 40);
        }, pauseMs);
      };
      tick();
    });
  })();

  wireCarousel("playCarousel", "playDots", { cardSelector: ".play-page", activeCardClass: "play-page--active" });

  $$("[data-play-go]").forEach((b) =>
    b.addEventListener("click", (e) => {
      e.stopPropagation();
      const id = String(b.dataset.playGo || "");
      const p = PLAYTEST_GAMES.find((x) => x.id === id);
      if (!p) return;

      const pageIdx = Number(b.closest?.(".play-page")?.getAttribute("data-card-idx") || 0);
      requestCarouselInit("playCarousel", pageIdx);

      const body = `
        <div class="small" style="line-height:1.6">
          <div class="hint">
            完成试玩即可领奖。此 demo 为测试机制：点击下方按钮即视为已试玩完成，可返回列表领取积分。
          </div>
          <div class="divider"></div>
          <div class="small"><b>${escapeHtml(p.title)}</b></div>
          <div class="muted small" style="margin-top:6px">${escapeHtml(p.desc)}</div>
        </div>
      `;
      const footer = `
        <button class="btn btn--brand" id="btnCompletePlay">已完成试玩</button>
        <button class="btn" id="btnCancelPlay">稍后再说</button>
      `;
      openModal({ title: "试玩", bodyHtml: body, footerHtml: footer });
      $("#btnCancelPlay")?.addEventListener("click", closeModal);
      $("#btnCompletePlay")?.addEventListener("click", () => {
        if (!state.playtest.completed.includes(p.id)) state.playtest.completed.push(p.id);
        saveState();
        closeModal();
        requestCarouselInit("playCarousel", playPageIndexOf(state, p.id));
        render();
        toast("已试玩完成，可领奖");
      });
    }),
  );

  $$("[data-play-claim]").forEach((b) =>
    b.addEventListener("click", (e) => {
      e.stopPropagation();
      const id = String(b.dataset.playClaim || "");
      const p = PLAYTEST_GAMES.find((x) => x.id === id);
      if (!p) return;

      const fromRect = b.getBoundingClientRect();
      const pageIdx = Number(b.closest?.(".play-page")?.getAttribute("data-card-idx") || 0);
      requestCarouselInit("playCarousel", pageIdx);

      const completed = state.playtest.completed.includes(p.id);
      if (!completed) return toast("请先完成试玩");
      if ((state.playtest.claimed || []).includes(p.id)) return toast("已领取过该奖励");

      state.playtest.claimed.push(p.id);
      addPoints(state, p.points);
      saveState();
      requestCarouselInit("playCarousel", 0);
      render();
      flyGrantToSticky({ fromRect, grant: { points: p.points, coupons: 0 } });
    }),
  );

  // ── 相关活动 banner 点击 ──
  const relatedInfo = {
    spring: { title: "TapTap 春日祭", url: "https://www.taptap.cn/events/spring-festival", desc: "春日限定活动，参与互动赢取丰厚奖励，与好友一起迎接春天！" },
    tappc: { title: "TapTap PC 十周年活动", url: "https://www.taptap.cn/events/tappc-10th-anniversary", desc: "TapTap PC 端十周年专属庆典，参与活动赢取 PC 游戏大奖！" },
    creator: { title: "创作者招募计划", url: "https://www.taptap.cn/events/creator-program", desc: "加入 TapTap 创作者社区，分享你的游戏见解，获得专属权益！" },
  };
  $$("[data-related]").forEach((el) =>
    el.addEventListener("click", () => {
      const key = el.dataset.related;
      const info = relatedInfo[key];
      if (!info) return;
      openModal({
        title: info.title,
        bodyHtml: `<div style="text-align:center;padding:12px 0">
          <p style="font-size:14px;color:rgba(15,23,42,.7);line-height:1.8;margin:0 0 16px">${escapeHtml(info.desc)}</p>
          <p style="font-size:12px;color:rgba(15,23,42,.4);margin:0 0 16px">点击下方按钮前往活动页面</p>
          <button class="btn btn--brand" type="button" style="padding:8px 24px;font-size:14px" onclick="try{window.open('${info.url}','_blank','noopener,noreferrer')}catch(e){}">前往活动 →</button>
        </div>`,
      });
    }),
  );

}

function shopView(s) {
  const frameCards = SHOP_ITEMS.frames.map((f) => shopItemCard("frame", f, s)).join("");
  const badgeCards = SHOP_ITEMS.badges.map((b) => shopItemCard("badge", b, s)).join("");
  const today = dayKeyLocal();
  const already = String(s.daily?.lotteryDayKey || "") === today;
  return `
    <section class="card">
      <div class="row">
        <div class="grow">
          <p class="h1">活动积分商店</p>
          <p class="muted small" style="margin:6px 0 0">把参与留下的积分，兑换成可展示的纪念痕迹。</p>
        </div>
        <span class="pill">当前积分：<b>${fmt(s.points)}</b></span>
      </div>
      <div class="divider"></div>
      <div class="hint">
        <b>小提示</b>：头像框/徽章先作为可收藏的纪念；也可以用积分抽点券（小概率中奖）。
      </div>
    </section>

    <section class="card">
      <p class="h2">兑换：头像框</p>
      <div class="list">${frameCards}</div>
    </section>

    <section class="card">
      <p class="h2">兑换：徽章</p>
      <div class="list">${badgeCards}</div>
    </section>

    <section class="card">
      <div class="row">
        <p class="h2 grow">抽点券</p>
        <span class="${pillClass("warn")}">每日一次</span>
      </div>
      <div class="item" style="margin-top:10px">
        <div class="row">
          <div class="grow">
            <div class="item__title">${SHOP_ITEMS.lottery.title}</div>
            <div class="item__desc">每日限 1 次，消耗 ${SHOP_ITEMS.lottery.cost} 积分抽取点券（可能抽不到）。</div>
          </div>
          <span class="pill">-${SHOP_ITEMS.lottery.cost} 积分</span>
        </div>
        <div class="item__meta">
          <span class="tag">${already ? "今天已抽" : "今日可抽"}</span>
          <button class="btn btn--brand" id="btnLottery" ${already ? "disabled" : ""}>${already ? "今日已抽" : "每日抽一次"}</button>
        </div>
      </div>
    </section>
  `;
}

function shopItemCard(kind, item, s) {
  const owned = kind === "frame" ? s.inventory.frames.includes(item.id) : s.inventory.badges.includes(item.id);
  const canBuy = s.points >= item.cost;

  const rightBtn = owned
    ? `<button class="btn" disabled>已拥有</button>`
    : `<button class="btn btn--brand" data-buy="${kind}:${item.id}" ${canBuy ? "" : "disabled"}>${canBuy ? `${fmt(item.cost)}积分兑换` : "积分不足"}</button>`;

  return `
    <div class="item">
      <div class="row">
        <div class="equip ${kind === "frame" ? "equip--frame" : "equip--badge"}">${item.icon}</div>
        <div class="grow">
          <div class="item__title">${item.title}</div>
        </div>
        ${rightBtn}
      </div>
    </div>
  `;
}

function wireShop({ inModal = false } = {}) {
  $$("[data-buy]").forEach((b) =>
    b.addEventListener("click", () => {
      const [kind, id] = (b.dataset.buy || "").split(":");
      const item = kind === "frame" ? SHOP_ITEMS.frames.find((x) => x.id === id) : SHOP_ITEMS.badges.find((x) => x.id === id);
      if (!item) return;
      const owned = kind === "frame" ? state.inventory.frames.includes(id) : state.inventory.badges.includes(id);
      if (owned) return toast("已拥有");
      const enough = state.points >= item.cost;
      const body = `
        <div class="small" style="line-height:1.6">
          <div class="hint">
            <b>${escapeHtml(item.title)}</b>
            <div class="muted small" style="margin-top:6px">消耗 <b>${fmt(item.cost)}</b> 积分</div>
          </div>
          <div class="divider"></div>
          <div class="muted small">当前积分：<b>${fmt(state.points || 0)}</b></div>
          ${enough ? "" : `<div class="muted small" style="margin-top:6px">积分不足，去试玩/回顾领奖赚积分吧。</div>`}
        </div>
      `;
      const footer = enough
        ? `<button class="btn" id="btnSpendCancel">取消</button><button class="btn btn--brand" id="btnSpendOk">${fmt(item.cost)}积分兑换</button>`
        : `<button class="btn btn--brand" id="btnSpendOk">知道了</button>`;
      openModal({ title: enough ? "确认兑换" : "积分不足", bodyHtml: body, footerHtml: footer });
      $("#btnSpendCancel")?.addEventListener("click", () => {
        closeModal();
        if (inModal) openShopModal();
      });
      $("#btnSpendOk")?.addEventListener("click", () => {
        if (!enough) {
          closeModal();
          if (inModal) openShopModal();
          return;
        }
        state.points -= item.cost;
        if (kind === "frame") state.inventory.frames.push(id);
        if (kind === "badge") state.inventory.badges.push(id);
        saveState();
        closeModal();
        render();
        toast(`已兑换：${item.title}`);
        if (inModal) openShopModal();
      });
    }),
  );

  $("#btnLottery")?.addEventListener("click", () => {
    const today = dayKeyLocal();
    if (String(state.daily?.lotteryDayKey || "") === today) return toast("今天已经抽过了");
    if (state.points < SHOP_ITEMS.lottery.cost) return toast("积分不足");
    if (!state.daily || typeof state.daily !== "object") state.daily = { lotteryDayKey: "" };
    state.points -= SHOP_ITEMS.lottery.cost;
    state.daily.lotteryDayKey = today;
    // No pity: random 1 coupon or none.
    const hit = Math.random() < 0.5;
    const add = hit ? 1 : 0;
    if (add > 0) addCoupons(state, add);
    saveState();
    render();
    openLotteryResultModal({ hit, add, cost: SHOP_ITEMS.lottery.cost });
  });
}

function openWalletModal() {
  const body = `
    <div class="small" style="line-height:1.6">
      <div class="hint">
        <b>我的钱包</b>：已有页面，不需要活动专门开发。
      </div>
      <div class="divider"></div>
      <div class="muted small">可跳转：<span class="mono">taptap://wallet</span></div>
    </div>
  `;
  openModal({
    title: "我的钱包",
    bodyHtml: body,
    footerHtml: `<button class="btn btn--brand" id="btnCloseWallet">知道了</button>`,
  });
  $("#btnCloseWallet")?.addEventListener("click", closeModal);
}

function notFoundView() {
  return `
    <section class="card">
      <p class="h1">页面不存在</p>
      <p class="muted small">请从底部导航返回。</p>
    </section>
  `;
}

function debugModalHtml() {
  return `
    <div class="small" style="line-height:1.6">
      <div class="hint">
        <b>测试设置</b>：用于内部快速调整演示参数。
      </div>
      <div class="divider"></div>

      <div class="row" style="align-items:center; gap:8px">
        <div class="muted small grow">当前登录状态：<b>${state.loggedIn ? "已登录 ✅" : "未登录 ❌"}</b></div>
        <button class="btn btn--ghost" id="btnToggleLogin" type="button" style="min-height:0;padding:4px 12px;font-size:12px">${state.loggedIn ? "模拟登出" : "模拟登录"}</button>
      </div>
      <div class="divider"></div>

      <div>
        <div><b>生涯数据（JSON，可编辑）</b></div>
        <div class="muted small">用于控制回顾卡片的数据结构与展示内容（为 0 的卡片不会展示）。</div>
        <textarea id="txtRecapJson" rows="10" style="width:100%; margin-top:8px; border-radius:12px; border:1px solid var(--border); background: rgba(255,255,255,.02); color: var(--text); padding:10px; resize:vertical; font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace; font-size:12px; line-height:1.45;"></textarea>
        <div class="row" style="justify-content:flex-end; margin-top:8px; gap:8px">
          <button class="btn btn--ghost" id="btnNewPlayerRecapJson" type="button">新注册玩家</button>
          <button class="btn btn--ghost" id="btnResetRecapJson" type="button">恢复默认生涯数据</button>
        </div>
      </div>

      <div class="divider"></div>

      <div>
        <div><b>绑定steam/角色</b></div>
        <div class="muted small">用于快速调试 Steam/角色绑定卡片的展示与领奖逻辑。</div>
        <div class="row" style="margin-top:8px">
          <label class="pill" style="cursor:pointer">
            <input id="chkSteam" type="checkbox" style="margin-right:8px" />
            Steam 已绑定
          </label>
          <div class="grow"></div>
        </div>
        <div class="row" style="margin-top:8px">
          <div class="grow">
            <div class="muted small">已绑定角色数</div>
          </div>
          <input id="inpRoles" type="number" min="0" step="1" style="width:120px; border-radius:12px; border:1px solid var(--border); background: rgba(255,255,255,.02); color: var(--text); padding:10px" />
        </div>
        <div class="row" style="margin-top:8px">
          <div class="grow">
            <div class="muted small">已领取角色奖励次数</div>
          </div>
          <input id="inpRolesClaimed" type="number" min="0" step="1" style="width:120px; border-radius:12px; border:1px solid var(--border); background: rgba(255,255,255,.02); color: var(--text); padding:10px" />
        </div>
      </div>

      <div class="divider"></div>

      <div class="row">
        <div class="grow">
          <div><b>积分（可编辑）</b></div>
          <div class="muted small">方便演示“兑换/抽奖”。</div>
        </div>
        <input id="inpPoints" type="number" min="0" step="10" style="width:120px; border-radius:12px; border:1px solid var(--border); background: rgba(255,255,255,.02); color: var(--text); padding:10px" />
      </div>

      <div class="divider"></div>

      <div>
        <div><b>纪念卡：昵称/身份/ID/个性介绍</b></div>
        <div class="muted small">用于演示纪念卡的展示内容（身份/介绍留空则不显示）。</div>

        <div class="row" style="margin-top:8px">
          <div class="grow"><div class="muted small">昵称</div></div>
          <input id="inpNick" type="text" style="width:220px; border-radius:12px; border:1px solid var(--border); background: rgba(255,255,255,.02); color: var(--text); padding:10px" />
        </div>
        <div class="row" style="margin-top:8px">
          <div class="grow"><div class="muted small">ID</div></div>
          <input id="inpPid" type="text" style="width:220px; border-radius:12px; border:1px solid var(--border); background: rgba(255,255,255,.02); color: var(--text); padding:10px" />
        </div>
        <div class="row" style="margin-top:8px">
          <div class="grow"><div class="muted small">身份（可选）</div></div>
          <input id="inpIdentity" type="text" style="width:220px; border-radius:12px; border:1px solid var(--border); background: rgba(255,255,255,.02); color: var(--text); padding:10px" />
        </div>
        <div style="margin-top:8px">
          <div class="muted small">个性介绍（可选）</div>
          <textarea id="txtBio" rows="2" style="width:100%; margin-top:6px; border-radius:12px; border:1px solid var(--border); background: rgba(255,255,255,.02); color: var(--text); padding:10px; resize:vertical;"></textarea>
        </div>
      </div>

      <div class="divider"></div>
      <div class="muted small mono">State Key: ${STORAGE_KEY}</div>
    </div>
  `;
}

function openDebug() {
  openModal({
    title: "测试设置",
    bodyHtml: debugModalHtml(),
    footerHtml: `
      <button class="btn" id="btnReset">重置状态</button>
      <button class="btn btn--brand" id="btnApply">应用</button>
    `,
  });

  const inp = $("#inpPoints");
  const txt = $("#txtRecapJson");
  const chkSteam = $("#chkSteam");
  const inpRoles = $("#inpRoles");
  const inpRolesClaimed = $("#inpRolesClaimed");
  const inpNick = $("#inpNick");
  const inpPid = $("#inpPid");
  const inpIdentity = $("#inpIdentity");
  const txtBio = $("#txtBio");

  // 登录状态切换
  $("#btnToggleLogin")?.addEventListener("click", () => {
    state.loggedIn = !state.loggedIn;
    saveState();
    closeModal();
    toast(state.loggedIn ? "已切换为登录状态" : "已切换为未登录状态");
    render();
  });

  const defaultRecap = () => recapDataForState({ ...state, boundData: false });
  const currentRecap = () => state.careerSnapshot?.recap || defaultRecap();

  inp.value = String(state.points ?? 0);
  txt.value = JSON.stringify(currentRecap(), null, 2);
  chkSteam.checked = !!state.boundSteam;
  inpRoles.value = String(state.boundRolesCount ?? 0);
  inpRolesClaimed.value = String(state.claimedRoleRewardsCount ?? 0);
  if (inpNick) inpNick.value = String(state.profile?.nickname || "");
  if (inpPid) inpPid.value = String(state.profile?.id || "");
  if (inpIdentity) inpIdentity.value = String(state.profile?.identity || "");
  if (txtBio) txtBio.value = String(state.profile?.bio || "");

  $("#btnNewPlayerRecapJson")?.addEventListener("click", () => {
    const emptyRecap = {
      regDate: new Date().toLocaleDateString("zh-CN", { year: "numeric", month: "numeric", day: "numeric" }).replace(/\//g, "年").replace(/年(\d+)$/, "年$1日").replace(/(\d+)日$/, "月$1日"),
      downloadsCount: 0,
      spendTotal: 0,
      platformBadgesTotal: 0, platformBadges: [],
      gamesPlayedTotal: 0,
      playTimeHours: 0,
      firstGameName: "",
      firstGameIcon: "",
      platform: "",
      platformBreakdown: [],
      yearlyData: [],
      radarAction: 0, radarStrategy: 0, radarRPG: 0, radarAdventure: 0, radarSim: 0, radarCasual: 0,
      topGenreLabel: "", topGenrePct: "", topGenreSitePct: "",
      achievementGamesCount: 0,
      achievementsTotal: 0,
      achievementsNormal: 0,
      platinumAchievementsTotal: 0,
      rareAchievements: [],
      belovedGameName: "", belovedGameIcon: "", belovedGameHours: 0, belovedGamePct: "", belovedGameSamePct: "",
      belovedTop10: [],
      exclusivePlayed: 0, exclusiveTotal: 0, exclusiveGames: [],
      editorPickPlayed: 0, editorPickTotal: 0, editorPickGames: [],
      nightPlayCount: 0,
      reviewsCount: 0, reviewLikesTotal: 0, reviewCommentsTotal: 0,
      reviewAllLowStar: false, reviewGameIcons: [],
      zuitiReviewsCount: 0, taptapCriticYears: [],
      totalReviewsOnPlatform: 0,
      communityLikesGiven: 0, communityLikesReceived: 0, communityLikePctRank: "", communityTopLikedContent: [],
      communityPublished: 0, communityCommentsReceived: 0, communityPubPctRank: "",
      communityTopForums: [], communityTopEmojis: [],
      postsCount: 0,
      repliesCount: 0,
      likedPostsCount: 0,
      receivedLikesCount: 0,
      nightSurfDays: 0, firstNightSurf: null, nightSurfLogs: [],
      friendsCount: 0,
      followingCount: 0,
      followersCount: 0,
      closestFriends: [],
      devGames: [],
      gamejamGamesCount: 0,
      tapmakerGamesCount: 0
    };
    txt.value = JSON.stringify(emptyRecap, null, 2);
    toast("已切换为新注册玩家数据（未应用）");
  });

  $("#btnResetRecapJson")?.addEventListener("click", () => {
    txt.value = JSON.stringify(defaultRecap(), null, 2);
    toast("已恢复默认生涯数据（未应用）");
  });

  $("#btnReset")?.addEventListener("click", () => {
    closeModal();
    resetState();
  });
  $("#btnApply")?.addEventListener("click", () => {
    state.points = Math.max(0, Number(inp.value || 0));
    state.boundSteam = !!chkSteam.checked;
    state.boundRolesCount = Math.max(0, Number(inpRoles.value || 0));
    state.claimedRoleRewardsCount = Math.max(0, Number(inpRolesClaimed.value || 0));
    state.boundData = state.boundRolesCount > 0; // keep legacy flag for demo enrichment

    // Memorial profile fields
    if (!state.profile || typeof state.profile !== "object") state.profile = { nickname: "", id: "", identity: "", bio: "" };
    state.profile.nickname = String(inpNick?.value || "").trim();
    state.profile.id = String(inpPid?.value || "").trim();
    state.profile.identity = String(inpIdentity?.value || "").trim();
    state.profile.bio = String(txtBio?.value || "").trim();

    // Apply recap JSON as career snapshot (freeze)
    try {
      const parsed = JSON.parse(String(txt.value || "{}"));
      state.enteredAt = state.enteredAt || Date.now();
      state.careerSnapshotPreset = state.userPreset;
      state.careerSnapshot = { recap: parsed, grants: calcSnapshotGrants(parsed) };
      // keep current carousel index if possible
      requestCarouselInit("recapCarouselSnap", 0);
    } catch {
      return toast("生涯数据 JSON 解析失败，请检查格式");
    }

    saveState();
    closeModal();
    render();
    toast("已应用演示状态");
  });
}

function escapeHtml(str) {
  return String(str || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

let state = loadState();
let lastBindClickCtx = null;

function runOpeningGate() {
  const opening = document.getElementById("opening");
  const appRoot = document.getElementById("app");
  if (!opening || !appRoot) return Promise.resolve();

  const btn = document.getElementById("btnEnterRecap");
  const debugBtn = document.getElementById("btnOpeningDebug");
  const hint = document.getElementById("openingHint");

  // Ensure the activity page won't appear during opening
  appRoot.classList.add("hidden");
  opening.classList.remove("hidden");
  opening.setAttribute("aria-hidden", "false");

  const prefersReduce = !!window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

  // Remove "loading phase": reveal CTA immediately.
  opening.classList.add("opening--ready");
  if (hint) hint.textContent = "";
  const agreeLabel = document.getElementById("openingAgree");
  if (agreeLabel) agreeLabel.classList.remove("hidden");
  if (btn) btn.classList.remove("hidden");
  if (debugBtn) debugBtn.classList.remove("hidden");

  // Allow tweaking demo state BEFORE entering the recap page
  debugBtn?.addEventListener("click", () => openDebug());

  return new Promise((resolve) => {
    // If button missing for any reason, auto-enter after a short delay.
    if (!btn) {
      setTimeout(() => {
        opening.classList.add("opening--exit");
        appRoot.classList.remove("hidden");
        opening.classList.add("hidden");
        opening.setAttribute("aria-hidden", "true");
        resolve();
      }, prefersReduce ? 0 : 220);
      return;
    }

    let gateResolved = false;
    function proceedFromGate() {
      if (gateResolved) return;
      gateResolved = true;
      opening.classList.add("opening--exit");
      setTimeout(() => {
        appRoot.classList.remove("hidden");
      }, 80);
      setTimeout(() => {
        opening.classList.add("hidden");
        opening.setAttribute("aria-hidden", "true");
        resolve();
      }, prefersReduce ? 0 : 340);
    }

    // 授权协议勾选校验
    const chkAgree = document.getElementById("chkAgree");
    const lnkAgreement = document.getElementById("lnkAgreement");
    lnkAgreement?.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      openModal({
        title: "TapTap 十周年活动协议",
        bodyHtml: `<div style="padding:16px;font-size:13px;line-height:1.8;color:var(--text-secondary);max-height:60vh;overflow-y:auto">
          <p>欢迎参加 TapTap 十周年庆典活动（以下简称"本活动"）。在参与本活动之前，请您仔细阅读以下条款：</p>
          <p><b>1. 活动规则</b><br>本活动由 TapTap 官方举办，活动期间用户可通过完成指定任务获取积分和奖励。活动最终解释权归 TapTap 所有。</p>
          <p><b>2. 用户行为规范</b><br>参与用户应遵守相关法律法规及平台规则，不得利用技术手段或其他方式进行作弊、刷分等违规行为。</p>
          <p><b>3. 数据使用</b><br>活动将基于您在 TapTap 平台的公开数据生成个性化回顾内容，相关数据仅用于本活动展示，不会用于其他商业用途。</p>
          <p><b>4. 奖励发放</b><br>活动奖励将在活动结束后统一发放至用户的 TapTap 账户，具体发放时间以官方公告为准。</p>
          <p><b>5. 免责声明</b><br>因不可抗力或系统故障等原因导致活动中断或数据异常，TapTap 不承担相关责任，但将尽力恢复并妥善处理。</p>
          <p style="color:var(--text-tertiary);margin-top:12px">本协议为演示内容，仅供参考。</p>
        </div>`,
      });
    });

    btn.addEventListener("click", () => {
      if (chkAgree && !chkAgree.checked) {
        toast("请先阅读并同意活动协议");
        return;
      }
      if (!state.loggedIn) {
        openLoginModal(() => proceedFromGate());
        return;
      }
      proceedFromGate();
    });
  });
}

async function init() {
  // Default: keep localStorage so "second entry" experience works.
  // Use `?persist=0` to always reset state, or `?reset=1` to clear once.
  try {
    const params = new URLSearchParams(location.search || "");
    const reset = params.get("reset") === "1";
    const persist = params.get("persist") !== "0";
    if (reset || !persist) {
      localStorage.removeItem(STORAGE_KEY);
      state = loadState();
    }
  } catch {
    // ignore
  }

  // Wire modal dismiss early so it works in opening gate debug.
  wireModalDismiss();

  const opening = document.getElementById("opening");
  const appRoot = document.getElementById("app");

  // Only show opening gate once (unless explicitly reset).
  // After the user refreshes / re-opens, go straight to the activity hall.
  if (!state.entryGateDone) {
    await runOpeningGate();
    state.entryGateDone = true;
    saveState();
    // [DISABLED] 首次进入不再走前置十年回顾流程，直接进主会场
    // location.hash = "#/firstrecap";
    location.hash = "#/home";
  } else {
    // Re-open: skip opening, go straight to activity home
    try {
      opening?.classList.add("hidden");
      opening?.setAttribute("aria-hidden", "true");
      appRoot?.classList.remove("hidden");
    } catch {}
    location.hash = "#/home";
  }

  // Back
  $("#btnBack")?.addEventListener("click", () => navigate("home"));

  // Debug
  $("#btnOpenDebug")?.addEventListener("click", openDebug);

  // Route changes
  window.addEventListener("hashchange", render);
  window.addEventListener("resize", () => setTopbarHeightVar());
  render();
}

init();

