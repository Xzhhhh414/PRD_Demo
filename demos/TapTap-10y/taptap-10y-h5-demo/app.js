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
      downloadsCount: 368,
      firstDownloadedGame: "《饥荒：联机版》",
      spendTotal: 1288,
      spendTop1: "《哈迪斯》终极版",
      spendTop1Price: 98,
      spendTop2: "TapTap 会员（月卡）",
      spendTop2Price: 30,
      spendTop3: "《戴森球计划》支持包",
      spendTop3Price: 25,
      badgesTotal: 86,
      badgesBlackGoldTotal: 4,
      badgeRare1Icon: "🖤",
      badgeRare1Name: "黑金·十年同行",
      badgeRare1Owners: 1280,
      badgeRare2Icon: "🏆",
      badgeRare2Name: "年度 Top 1 评测",
      badgeRare2Owners: 8600,
      badgeRare3Icon: "⭐",
      badgeRare3Name: "聚光灯精选",
      badgeRare3Owners: 12800,

      // 玩游戏
      playTimeTotal: "2,680 小时",
      topGame1: "《派对之星》",
      topGame2: "《Miao屋》",
      topGame3: "《豆战异世界》",
      topGame1Time: "420 小时",
      topGame2Time: "360 小时",
      topGame3Time: "220 小时",
      favoriteGenre: "动作 / 休闲 / 多人",
      favoriteGenreTime: "860 小时",
      topGenre1: "动作 / 休闲 / 多人",
      topGenre1Time: "860 小时",
      topGenre2: "独立 / 解谜",
      topGenre2Time: "620 小时",
      topGenre3: "RPG / 剧情",
      topGenre3Time: "410 小时",
      genreTagsCount: 46,
      tag1: "动作",
      tag2: "休闲",
      tag3: "多人",
      platformPreference: "PC",
      achievementsTotal: 326,
      platinumAchievementsTotal: 18,
      rareAchievementTop1Game: "《戴森球计划》",
      rareAchievementTop1Name: "群星点亮",
      rareAchievementTop1Rate: "0.6%",
      rareAchievementTop2Game: "《哈迪斯》",
      rareAchievementTop2Name: "不死者之王",
      rareAchievementTop2Rate: "1.2%",
      rareAchievementTop3Game: "《去月球》",
      rareAchievementTop3Name: "最后的告别",
      rareAchievementTop3Rate: "2.8%",
      // legacy
      rareAchievement: "全成就达成（某款游戏）",
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
      leaderboardsCount: 7,
      leaderTop1Game: "《派对之星》",
      leaderTop1Board: "S14 竞技场",
      leaderTop1Rank: "第10名",
      leaderTop2Game: "《派对之星》",
      leaderTop2Board: "排位赛",
      leaderTop2Rank: "第38名",
      leaderTop3Game: "《Miao屋》",
      leaderTop3Board: "速通榜",
      leaderTop3Rank: "第16名",
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
      reviewsLikedCount: 26,
      zuitiCount: 8,
      zuitiRecent1Game: "《戴森球计划》",
      zuitiRecent1Score: 9.3,
      zuitiRecent2Game: "《去月球》",
      zuitiRecent2Score: 9.6,
      zuitiRecent3Game: "《哈迪斯》",
      zuitiRecent3Score: 9.2,
      reviewLikedTop1Game: "《戴森球计划》",
      reviewLikedTop1Likes: 128,
      reviewLikedTop2Game: "《哈迪斯》",
      reviewLikedTop2Likes: 96,
      reviewLikedTop3Game: "《去月球》",
      reviewLikedTop3Likes: 72,
      topLikedReviewTitle: "《戴森球计划》：这才是太空的浪漫",
      topLikedReviewLikes: 128,
      taptapCriticYears: [2018, 2019, 2020, 2021, 2022],
      postsCount: 56,
      repliesCount: 420,
      forumInteractPlayers: 168,
      topActiveForum1Game: "《派对之星》",
      topActiveForum1Posts: 18,
      topActiveForum2Game: "《戴森球计划》",
      topActiveForum2Posts: 12,
      topActiveForum3Game: "《哈迪斯》",
      topActiveForum3Posts: 9,
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
      friendMessagesCount: 2680,
      friendTop1Name: "阿星",
      friendTop1TapId: "taptap_axing",
      friendTop1MsgCount: 860,
      friendTop2Name: "咕咕",
      friendTop2TapId: "taptap_gugu",
      friendTop2MsgCount: 620,
      friendTop3Name: "小盐",
      friendTop3TapId: "taptap_xiaoyan",
      friendTop3MsgCount: 410,
      nightTopAction: "回帖 / 点赞",
      nightCommunityCount: 46,
      nightCommunityRecent1Game: "《派对之星》",
      nightCommunityRecent1Action: "回帖",
      nightCommunityRecent1Time: "2026年2月2日 01:12",
      nightCommunityRecent2Game: "《戴森球计划》",
      nightCommunityRecent2Action: "点赞",
      nightCommunityRecent2Time: "2026年1月29日 02:06",
      nightCommunityRecent3Game: "《哈迪斯》",
      nightCommunityRecent3Action: "收藏",
      nightCommunityRecent3Time: "2026年1月18日 00:47",

      // 开发者
      devGamesCount: 3,
      devCert1Name: "《派对之星》策划",
      devCert2Name: "《沙洛克》策划/程序",
      devCert3Name: "《Miao屋》制作人",
      plannerCertCount: 2,
      programmerCertCount: 1,
      artCertCount: 0,
      gamejamCount: 5,
      gamejamWorks: 3,
      spotlightGamejamFirstPublishDate: "2020年9月19日",
      spotlightGamejam1Name: "《派对之星》",
      spotlightGamejam1Score: 9.2,
      spotlightGamejam1Award: "最佳人气奖",
      spotlightGamejam1Certified: true,
      spotlightGamejam1Tagged: true,
      spotlightGamejam2Name: "《沙洛克》",
      spotlightGamejam2Score: 9.0,
      spotlightGamejam2Award: "最佳创意奖",
      spotlightGamejam2Certified: true,
      spotlightGamejam2Tagged: true,
      spotlightGamejam3Name: "《Miao屋》",
      spotlightGamejam3Score: 8.9,
      spotlightGamejam3Award: "",
      spotlightGamejam3Certified: true,
      spotlightGamejam3Tagged: true,
      spotlightGamejam4Name: "《豆战异世界》",
      spotlightGamejam4Score: 9.4,
      spotlightGamejam4Award: "",
      spotlightGamejam4Certified: true,
      spotlightGamejam4Tagged: true,
      spotlightGamejam5Name: "《去月球》",
      spotlightGamejam5Score: 9.6,
      spotlightGamejam5Award: "评审推荐奖",
      spotlightGamejam5Certified: false,
      spotlightGamejam5Tagged: true,
      levelsCount: 28,
      levelsPlays: 18600,
      levelsFavs: 3200,
      creatorWorks: 12,
      creatorUses: 8600,
      creatorLikes: 4200,
      tapmakerFirstPublishDate: "2019年7月12日",
      tapmaker1Name: "《TapTap制造：派对小屋》",
      tapmaker1Likes: 1280,
      tapmaker1Certified: true,
      tapmaker1Tagged: true,
      tapmaker2Name: "《TapTap制造：沙洛克外传》",
      tapmaker2Likes: 960,
      tapmaker2Certified: true,
      tapmaker2Tagged: true,
      tapmaker3Name: "《TapTap制造：Miao屋》",
      tapmaker3Likes: 720,
      tapmaker3Certified: true,
      tapmaker3Tagged: true,
      tapmaker4Name: "《TapTap制造：豆战异世界》",
      tapmaker4Likes: 540,
      tapmaker4Certified: false,
      tapmaker4Tagged: true,
      tapmaker5Name: "《TapTap制造：去月球同人》",
      tapmaker5Likes: 420,
      tapmaker5Certified: true,
      tapmaker5Tagged: false,
      firstHelpfulDateMonth: "2019年7月",

      // legacy
      gamesPlayed: 128,
      reviewsHelpful: 42,

      // PC 游玩
      pcPlayTimeTotal: "1,120 小时",
      pcTopGame1: "《戴森球计划》",
      pcTopGame1Time: "320 小时",
      pcTopGame2: "《哈迪斯》",
      pcTopGame2Time: "260 小时",
      pcTopGame3: "《去月球》",
      pcTopGame3Time: "180 小时",

      // 云玩
      cloudPlayTimeTotal: "260 小时",
      cloudTopGame1: "《哈迪斯》",
      cloudTopGame1Time: "90 小时",
      cloudTopGame2: "《去月球》",
      cloudTopGame2Time: "70 小时",
      cloudTopGame3: "《戴森球计划》",
      cloudTopGame3Time: "55 小时",
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
    title: "绑定更多游戏角色",
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
    url: "https://www.taptap.cn/app/165287?os=android",
    tags: ["音游", "节奏", "下落式"],
    score: 9.6,
    tapExclusive: true,
    postUrl: "https://www.taptap.cn/moment/754506735720334977",
  },
  {
    id: "m2",
    title: "香肠派对",
    url: "https://www.taptap.cn/app/58881?os=pc",
    tags: ["射击", "吃鸡", "多人"],
    score: 8.8,
    tapExclusive: false,
    postUrl: "https://www.taptap.cn/moment/756862887149965161",
  },
  {
    id: "m3",
    title: "心动小镇",
    url: "https://www.taptap.cn/app/45213?os=pc",
    tags: ["治愈", "模拟经营", "多人"],
    score: 8.6,
    tapExclusive: true,
    postUrl: "https://www.taptap.cn/moment/755000000000000000",
  },
  {
    id: "m4",
    title: "鬼谷八荒",
    url: "https://www.taptap.cn/app/700558?os=android",
    tags: ["修仙", "开放世界", "单机"],
    score: 8.2,
    tapExclusive: false,
    postUrl: "https://www.taptap.cn/moment/755000000000000001",
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
  { id: "ma_bunny", icon: "🐰", label: "兔帽" },
  { id: "ma_cat", icon: "🐱", label: "猫猫" },
  { id: "ma_robot", icon: "🤖", label: "机甲" },
  { id: "ma_fox", icon: "🦊", label: "小狐" },
  { id: "ma_panda", icon: "🐼", label: "熊猫" },
  { id: "ma_penguin", icon: "🐧", label: "企鹅" },
];

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
    boundRolesCount: 0,
    claimedRoleRewardsCount: 0,
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
      avatarId: "ma_bunny",
    },
    memorialUnlocks: { colors: ["mc_cream"], stickers: ["ms_star"], avatars: ["ma_bunny"] },
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
    entryGateDone: false,
    firstRecapDone: false,
    firstRecapFlow: { phase: "snap", idx: 0 },
    firstRecapRun: { startPoints: 0, startCoupons: 0, doneModalShown: false },
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

    merged.daily = { ...fallback.daily, ...(parsed?.daily || {}) };
    if (!merged.daily || typeof merged.daily !== "object") merged.daily = { ...fallback.daily };
    if (!String(merged.daily.lotteryDayKey || "").trim()) merged.daily.lotteryDayKey = "";

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
  const leaderboardsCount = Number(recap?.leaderboardsCount || 0);
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
    snap_streak: fixed(10),
    // TapTap 消费：积分按原规则，点券=消费金额的10%（向下取整）
    snap_spend: fixed(clamp(Math.floor(spendTotal / 100) * 10, 10, 300), Math.max(0, Math.floor(spendTotal * 0.1))),

    // 玩游戏
    snap_playtime: fixed(20),
    snap_top3games: fixed(20, 5),
    snap_genre_tags: fixed(10),
    snap_pc_play: fixed(10),
    snap_cloud_play: fixed(10),
    snap_achievements: fixed(20),
    snap_niche: fixed(10),
    snap_leaderboards: fixed(clamp(leaderboardsCount * 10, 10, 200)),
    snap_night_game: fixed(10),

    // 社区
    snap_reviews: fixed(20),
    snap_reviews_count: fixed(10),
    snap_review_likes_total: fixed(10),
    snap_top_review: fixed(10),
    snap_zuiti: fixed(10),
    snap_critic: fixed(10),
    snap_forum_stats: fixed(10),
    snap_top_post: fixed(10),
    snap_friend_msgs: fixed(10),
    snap_night_community: fixed(10),
    snap_downloads: fixed(10),
    snap_badges: fixed(10),

    // 开发者
    snap_dev_games: fixed(20),
    snap_certs: fixed(20),
    snap_gamejam: fixed(10),
    snap_levels: fixed(10),
    snap_creator: fixed(10),
    snap_first_seen: fixed(10),
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
  snap_reviews: ["snap_reviews_count", "snap_review_likes_total"],
};

function snapshotClaimGrant(s, rewardId) {
  const grants = s.careerSnapshot?.grants;
  const base = grants?.[rewardId];
  if (!base) return null;
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
  return new Intl.NumberFormat("zh-CN").format(n);
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
      if (route === "shop") return scrollToId("section-memorial");
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
  return `
    <section class="card sticky-stats__card" style="border-radius:0; box-shadow:none;">
      <div class="row" style="gap:12px">
        <div style="flex:1">
          <div style="display:flex; align-items:center; gap:8px; margin-bottom:4px">
            <div class="pill pill--brand" id="pillPoints">
              积分 <b>${fmt(s.points)}</b>
            </div>
            <button class="link-btn" id="btnGoShop" type="button">我的十周年名片</button>
          </div>
          <div class="muted small">积分兑换装饰和参与点券抽奖</div>
        </div>
        <div style="flex:1">
          <div style="display:flex; align-items:center; gap:8px; margin-bottom:4px">
            <div class="pill" id="pillCoupons">
              已得点券 <b>${fmt(s.walletCoupons || 0)}</b>
            </div>
            <button class="link-btn" id="btnWallet" type="button">我的钱包</button>
          </div>
          <div class="muted small">购买游戏、PC CDKey、云玩服务等</div>
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
  $("#btnGoShop")?.addEventListener("click", () => {
    if (getRoute() !== "home") navigate("home");
    setTimeout(() => scrollToId("section-memorial"), 60);
  });
  $("#btnWallet")?.addEventListener("click", openWalletModal);
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
  return `
    <div class="home-module" id="section-recap">
      ${recapInlineView(s, recap, { sortUnclaimedFirst: false })}
    </div>

    ${discoverInlineView(s)}

    <div class="home-module" id="section-memorial">
      ${memorialInlineView(s, recap)}
    </div>
  `;
}

function wireHome() {
  wireRecapInline();
  wireDiscoverInline();
  wireMemorialInline();
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

function memorialInlineView(s, recap) {
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
      icon: av.icon,
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

  return `
    <section class="card">
      <div class="row">
        <p class="h1 grow">十周年名片</p>
        <button class="btn btn--brand" id="btnShareMemorial" type="button" style="min-height:36px; padding:8px 10px">分享</button>
      </div>
      <p class="muted small" style="margin:6px 0 0">用积分兑换装饰，DIY 一张属于你的纪念卡。</p>

      <div class="divider"></div>

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
            <div class="mem-avatar" aria-label="角色">${escapeHtml(avatar.icon)}</div>
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
          <div class="mem-grid">${avatarOpts}</div>
        </div>
      </div>

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
  const reg = String(recap.regDate || "").trim();
  const downloads = Number(recap.downloadsCount || 0);
  const play = String(recap.playTimeTotal || "").trim();
  const parts = [];
  if (reg) parts.push(`${reg} 加入`);
  if (downloads > 0) parts.push(`下载 ${fmt(downloads)} 个游戏`);
  if (play) parts.push(`总时长 ${play}`);
  return `我的 TapTap 十年回顾：${parts.join("，") || "一些很酷的数据"}。#十年同行`;
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
          <div class="mem-avatar" aria-label="角色">${escapeHtml(avatar.icon)}</div>
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

  openModal({ title: "TapTap十周年名片", bodyHtml: body, footerHtml: footer });

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

        <text x="${cardX + 120}" y="${cardY + 170}" font-size="96">${escapeXml(avatar.icon)}</text>
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
    <div class="small" style="line-height:1.55">
      <div class="row" style="align-items:center; justify-content:space-between; gap:10px; margin-bottom:10px">
        <div class="grow" style="min-width:0">
          <div style="font-weight:950; font-size:13px; letter-spacing:.2px">${escapeHtml(nick)}</div>
          <div class="muted small" style="margin-top:2px">ID ${escapeHtml(pid)}</div>
        </div>
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

  openModal({ title: "我的TapTap十年回顾", bodyHtml: body, footerHtml: footer });

  $("#btnShareTo")?.addEventListener("click", async () => {
    const text = shareRecapTextForShare(recap);
    try {
      if (navigator.share) {
        await navigator.share({ title: "我的TapTap十年回顾", text, url });
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
    const title = "我的TapTap十年回顾";
    const subtitle = `${nick} · ID ${pid}`;
    const regDate = String(recap.regDate || "").trim() || "—";
    const downloads = fmt(Number(recap.downloadsCount || 0));
    const play = String(recap.playTimeTotal || "").trim() || "—";
    const topGame = String(recap.topGame1 || "").trim() || "—";
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

        <text x="90" y="170" font-size="54" font-weight="800" fill="#0F172A">${escapeXml(title)}</text>
        <text x="90" y="230" font-size="28" font-weight="700" fill="#334155">${escapeXml(subtitle)}</text>

        <rect x="90" y="290" width="900" height="820" rx="36" fill="#FFFFFF" stroke="rgba(15,23,42,0.10)" stroke-width="2"/>
        <text x="130" y="380" font-size="28" font-weight="800" fill="#0F172A">加入时间</text>
        <text x="130" y="440" font-size="44" font-weight="900" fill="#0F172A">${escapeXml(regDate)}</text>

        <text x="130" y="540" font-size="28" font-weight="800" fill="#0F172A">下载游戏</text>
        <text x="130" y="600" font-size="44" font-weight="900" fill="#0F172A">${escapeXml(downloads)} 个</text>

        <text x="130" y="700" font-size="28" font-weight="800" fill="#0F172A">总游戏时长</text>
        <text x="130" y="760" font-size="44" font-weight="900" fill="#0F172A">${escapeXml(play)}</text>

        <text x="130" y="860" font-size="28" font-weight="800" fill="#0F172A">最喜欢的游戏</text>
        <text x="130" y="920" font-size="40" font-weight="900" fill="#0F172A">${escapeXml(topGame)}</text>

        <rect x="90" y="1240" width="900" height="600" rx="36" fill="#FFFFFF" stroke="rgba(15,23,42,0.10)" stroke-width="2"/>
        ${qrSized}
        <text x="540" y="1670" text-anchor="middle" font-size="26" font-weight="800" fill="#0F172A">扫码打开分享页</text>
        <text x="540" y="1720" text-anchor="middle" font-size="22" font-weight="700" fill="#64748B">${escapeXml(url)}</text>

        <text x="540" y="1860" text-anchor="middle" font-size="22" font-weight="800" fill="#00B894">TapTap 十周年 · 十年同行</text>
      </svg>
    `.trim();
    downloadSvgAsPng(posterSvg, "taptap-10y-share.png", { scale: 2 });
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

function wireMemorialInline() {
  $("#btnShareMemorial")?.addEventListener("click", () => openShareMemorialModal());

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
      render();
    }),
  );

  const ensureUnlockList = (k) => {
    if (!state.memorialUnlocks || typeof state.memorialUnlocks !== "object") state.memorialUnlocks = { colors: [], stickers: [], avatars: [] };
    if (!Array.isArray(state.memorialUnlocks[k])) state.memorialUnlocks[k] = [];
    return state.memorialUnlocks[k];
  };
  const ensureStickers = () => {
    if (!state.memorial || typeof state.memorial !== "object") state.memorial = { tab: "color", colorId: "mc_cream", stickers: [], activeStickerIdx: 0, stickerId: "", avatarId: "ma_bunny" };
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
      render();
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
        render();
        toast("已解锁并应用");
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
            render();
            toast(`已兑换：${item.title}`);
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
            render();
            toast(`已兑换：${item.title}`);
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
      render();
      toast("已设置为当前");
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
        render();
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
      value: `
        <div class="vlist">
          <div>在${(snap.regDate || "").trim()}加入</div>
          <div>已互相陪伴 ${fmt(togetherDays)} 天</div>
        </div>
      `,
      desc: "",
      rewardId: "snap_reg_active",
      visible: !!(snap.regDate || "").trim() && togetherDays !== null,
    },
    {
      label: "拥有多少游戏",
      value: `
        <div class="vlist">
          <div class="vsum">下载了 ${fmt(snap.downloadsCount || 0)} 个游戏</div>
          <div class="vdetail">第一个下载：${(snap.firstDownloadedGame || "").trim()}</div>
        </div>
      `,
      desc: "",
      rewardId: "snap_downloads",
      visible: Number(snap.downloadsCount || 0) > 0 && !!(snap.firstDownloadedGame || "").trim(),
    },
    {
      label: "在TapTap买了什么",
      value: Number(snap.spendTotal || 0) > 0
        ? `
          <div class="vlist">
            <div class="vsum">共消费 ${fmt(snap.spendTotal)} 元</div>
            <div class="kv"><span class="k">1</span><span class="t">${(snap.spendTop1 || "").trim()}</span><span class="m">${snap.spendTop1Price != null ? `${fmt(snap.spendTop1Price)} 元` : ""}</span></div>
            <div class="kv"><span class="k">2</span><span class="t">${(snap.spendTop2 || "").trim()}</span><span class="m">${snap.spendTop2Price != null ? `${fmt(snap.spendTop2Price)} 元` : ""}</span></div>
            <div class="kv"><span class="k">3</span><span class="t">${(snap.spendTop3 || "").trim()}</span><span class="m">${snap.spendTop3Price != null ? `${fmt(snap.spendTop3Price)} 元` : ""}</span></div>
          </div>
        `
        : "",
      desc: "",
      rewardId: "snap_spend",
      visible: Number(snap.spendTotal || 0) > 0,
    },
    {
      label: "徽章",
      value: (() => {
        const total = Number(snap.badgesTotal || 0);
        const gold = Number(snap.badgesBlackGoldTotal || 0);
        const rows = [
          {
            k: "1",
            icon: String(snap.badgeRare1Icon || "").trim(),
            name: String(snap.badgeRare1Name || "").trim(),
            owners: Number(snap.badgeRare1Owners || 0),
          },
          {
            k: "2",
            icon: String(snap.badgeRare2Icon || "").trim(),
            name: String(snap.badgeRare2Name || "").trim(),
            owners: Number(snap.badgeRare2Owners || 0),
          },
          {
            k: "3",
            icon: String(snap.badgeRare3Icon || "").trim(),
            name: String(snap.badgeRare3Name || "").trim(),
            owners: Number(snap.badgeRare3Owners || 0),
          },
        ].filter((x) => x.name && x.owners > 0);
        const topHtml = rows
          .map((x) => {
            const ico = x.icon ? `<span class="badge-ico" aria-hidden="true">${x.icon}</span>` : "";
            return `<div class="kv"><span class="k">${x.k}</span><span class="t">${ico}${x.name}</span><span class="m">拥有 ${fmt(x.owners)} 人</span></div>`;
          })
          .join("");

        if (total <= 0 && gold <= 0 && !topHtml) return "";
        return `
          <div class="vlist">
            ${(total > 0 || gold > 0) ? `<div class="vsum">总共拥有 ${fmt(total)} 个徽章，黑金徽章 ${fmt(gold)} 个</div>` : ""}
            ${topHtml ? `<div class="sub">Top3 稀有的徽章</div>${topHtml}` : ""}
          </div>
        `;
      })(),
      desc: "",
      rewardId: "snap_badges",
      visible:
        Number(snap.badgesTotal || 0) > 0 ||
        Number(snap.badgesBlackGoldTotal || 0) > 0 ||
        Number(snap.badgeRare1Owners || 0) > 0,
    },
      // 玩游戏经历
    {
      label: "玩游戏经历",
      value: `
        <div class="vlist">
          ${(snap.playTimeTotal || "").trim() ? `<div class="vsum">总游玩时长 ${(snap.playTimeTotal || "").trim()}</div>` : ""}
          <div class="kv"><span class="k">1</span><span class="t">${(snap.topGame1 || "").trim()}</span><span class="m">${(snap.topGame1Time || "").trim()}</span></div>
          <div class="kv"><span class="k">2</span><span class="t">${(snap.topGame2 || "").trim()}</span><span class="m">${(snap.topGame2Time || "").trim()}</span></div>
          <div class="kv"><span class="k">3</span><span class="t">${(snap.topGame3 || "").trim()}</span><span class="m">${(snap.topGame3Time || "").trim()}</span></div>
        </div>
      `,
      desc: "",
      rewardId: "snap_top3games",
      visible:
        !!(String(snap.playTimeTotal || "").trim()) ||
        !!((snap.topGame1 || "").trim() && (snap.topGame2 || "").trim() && (snap.topGame3 || "").trim()),
    },
    {
      label: "最爱的游戏类型 Top3",
      value: (() => {
        const oneTag = (s) => {
          const raw = String(s || "").trim();
          if (!raw) return "";
          // Take the first tag-like chunk (avoid composed labels like "动作 / 休闲 / 多人")
          const first = raw.split("／")[0].split("/")[0].split("·")[0].split("|")[0].trim();
          return first;
        };
        const tagCount = (() => {
          const explicit = Number(snap.genreTagsCount);
          if (Number.isFinite(explicit) && explicit > 0) return explicit;

          const tags = [];
          for (const k of ["tag1", "tag2", "tag3", "tag4", "tag5"]) {
            const v = String(snap[k] || "").trim();
            if (v) tags.push(v);
          }
          // fallback: split favoriteGenre into tag-like chunks
          const fav = String(snap.favoriteGenre || "").trim();
          if (fav) {
            fav
              .split(/[\/／·|、,，]/g)
              .map((s) => s.trim())
              .filter(Boolean)
              .forEach((t) => tags.push(t));
          }
          return new Set(tags).size;
        })();
        const g1 = oneTag(snap.topGenre1 || snap.favoriteGenre);
        const g2 = oneTag(snap.topGenre2);
        const g3 = oneTag(snap.topGenre3);
        const t1 = (snap.topGenre1Time || snap.favoriteGenreTime || "").trim();
        const t2 = (snap.topGenre2Time || "").trim();
        const t3 = (snap.topGenre3Time || "").trim();
        const rows = [
          { k: "1", t: g1, m: t1 },
          { k: "2", t: g2, m: t2 },
          { k: "3", t: g3, m: t3 },
        ].filter((r) => r.t);
        const rowHtml = rows
          .map((r) => `<div class="kv"><span class="k">${r.k}</span><span class="t">${r.t}</span><span class="m">${r.m}</span></div>`)
          .join("");
        const summaryHtml = tagCount > 0 ? `<div class="vsum">一共玩过 ${fmt(tagCount)} 种标签的游戏</div>` : "";
        return `<div class="vlist">${summaryHtml}${rowHtml}</div>`;
      })(),
      desc: "",
      rewardId: "snap_genre_tags",
      visible: !!((snap.topGenre1 || snap.favoriteGenre || "").trim()),
    },
    {
      label: "在 TapTap PC 上玩了多久",
      value: `
        <div class="vlist">
          ${(snap.pcPlayTimeTotal || "").trim() ? `<div class="vsum">总时长 ${(snap.pcPlayTimeTotal || "").trim()}</div>` : ""}
          <div class="kv"><span class="k">1</span><span class="t">${(snap.pcTopGame1 || "").trim()}</span><span class="m">${(snap.pcTopGame1Time || "").trim()}</span></div>
          <div class="kv"><span class="k">2</span><span class="t">${(snap.pcTopGame2 || "").trim()}</span><span class="m">${(snap.pcTopGame2Time || "").trim()}</span></div>
          <div class="kv"><span class="k">3</span><span class="t">${(snap.pcTopGame3 || "").trim()}</span><span class="m">${(snap.pcTopGame3Time || "").trim()}</span></div>
        </div>
      `,
      desc: "",
      rewardId: "snap_pc_play",
      visible:
        !!String(snap.pcPlayTimeTotal || "").trim() ||
        !!((snap.pcTopGame1 || "").trim() && (snap.pcTopGame2 || "").trim() && (snap.pcTopGame3 || "").trim()),
    },
    {
      label: "TapTap 云玩",
      value: `
        <div class="vlist">
          ${(snap.cloudPlayTimeTotal || "").trim() ? `<div class="vsum">总时长 ${(snap.cloudPlayTimeTotal || "").trim()}</div>` : ""}
          <div class="kv"><span class="k">1</span><span class="t">${(snap.cloudTopGame1 || "").trim()}</span><span class="m">${(snap.cloudTopGame1Time || "").trim()}</span></div>
          <div class="kv"><span class="k">2</span><span class="t">${(snap.cloudTopGame2 || "").trim()}</span><span class="m">${(snap.cloudTopGame2Time || "").trim()}</span></div>
          <div class="kv"><span class="k">3</span><span class="t">${(snap.cloudTopGame3 || "").trim()}</span><span class="m">${(snap.cloudTopGame3Time || "").trim()}</span></div>
        </div>
      `,
      desc: "",
      rewardId: "snap_cloud_play",
      visible:
        !!String(snap.cloudPlayTimeTotal || "").trim() ||
        !!(
          (snap.cloudTopGame1 || "").trim() &&
          (snap.cloudTopGame2 || "").trim() &&
          (snap.cloudTopGame3 || "").trim()
        ),
    },
    {
      label: "游戏成就",
      value: (() => {
        const total = Number(snap.achievementsTotal || 0);
        const platinum = Number(snap.platinumAchievementsTotal || 0);
        const rows = [
          {
            k: "1",
            g: (snap.rareAchievementTop1Game || "").trim(),
            n: (snap.rareAchievementTop1Name || "").trim(),
            r: (snap.rareAchievementTop1Rate || "").trim(),
          },
          {
            k: "2",
            g: (snap.rareAchievementTop2Game || "").trim(),
            n: (snap.rareAchievementTop2Name || "").trim(),
            r: (snap.rareAchievementTop2Rate || "").trim(),
          },
          {
            k: "3",
            g: (snap.rareAchievementTop3Game || "").trim(),
            n: (snap.rareAchievementTop3Name || "").trim(),
            r: (snap.rareAchievementTop3Rate || "").trim(),
          },
        ].filter((x) => x.g && x.n);
        const topHtml = rows
          .map((x) => `<div class="kv"><span class="k">${x.k}</span><span class="t">${x.g} - ${x.n}</span><span class="m">${x.r}</span></div>`)
          .join("");
        return `
          <div class="vlist">
            <div class="vsum">获得 ${fmt(total)} 个成就，${fmt(platinum)} 个白金成就</div>
            ${topHtml ? `<div class="sub">最稀有的成就 Top3（玩家解锁比例）</div>${topHtml}` : ""}
          </div>
        `;
      })(),
      desc: "",
      rewardId: "snap_achievements",
      visible: Number(snap.achievementsTotal || 0) > 0,
    },
    {
      label: "排行榜",
      value: (() => {
        const cnt = Number(snap.leaderboardsCount || 0);
        if (cnt <= 0) return "";
        const rows = [
          {
            k: "1",
            g: (snap.leaderTop1Game || "").trim(),
            b: (snap.leaderTop1Board || "").trim(),
            r: (snap.leaderTop1Rank || "").trim(),
          },
          {
            k: "2",
            g: (snap.leaderTop2Game || "").trim(),
            b: (snap.leaderTop2Board || "").trim(),
            r: (snap.leaderTop2Rank || "").trim(),
          },
          {
            k: "3",
            g: (snap.leaderTop3Game || "").trim(),
            b: (snap.leaderTop3Board || "").trim(),
            r: (snap.leaderTop3Rank || "").trim(),
          },
        ].filter((x) => x.g && x.b && x.r);
        const topHtml = rows
          .map((x) => `<div class="kv"><span class="k">${x.k}</span><span class="t">${x.g} ${x.b}</span><span class="m">${x.r}</span></div>`)
          .join("");
        return `
          <div class="vlist">
            <div class="vsum">上过 ${fmt(cnt)} 个游戏榜单</div>
            ${topHtml ? `<div class="sub">名次最高的 Top3（游戏内）</div>${topHtml}` : ""}
          </div>
        `;
      })(),
      desc: "",
      rewardId: "snap_leaderboards",
      visible: Number(snap.leaderboardsCount || 0) > 0,
    },
    {
      label: "深夜还在玩",
      value: (() => {
        const count = Number(snap.nightPlayCount || 0);
        const rows = [
          { k: "1", t: (snap.nightRecent1Game || "").trim(), m: (snap.nightRecent1Start || "").trim() },
          { k: "2", t: (snap.nightRecent2Game || "").trim(), m: (snap.nightRecent2Start || "").trim() },
          { k: "3", t: (snap.nightRecent3Game || "").trim(), m: (snap.nightRecent3Start || "").trim() },
        ].filter((r) => r.t && r.m);
        const rowHtml = rows
          .map((r) => `<div class="kv"><span class="k">${r.k}</span><span class="t">${r.t}</span><span class="m">${r.m}</span></div>`)
          .join("");
        return `
          <div class="vlist">
            ${count > 0 ? `<div class="vsum">有 ${fmt(count)} 个深夜在玩游戏</div>` : ""}
            ${rowHtml}
          </div>
        `;
      })(),
      desc: "",
      rewardId: "snap_night_game",
      visible: !!((snap.nightRecent1Game || "").trim() || (snap.nightRecent2Game || "").trim() || (snap.nightRecent3Game || "").trim()),
    },

    // 游戏评价
    {
      label: "评价",
      value: (() => {
        const count = Number(snap.reviewsCount || 0);
        const likes = Number(snap.reviewLikesTotal || 0);
        const comments = Number(snap.reviewCommentsTotal || 0);
        if (count <= 0 && likes <= 0 && comments <= 0) return "";
        const primary = count > 0 ? `写过 ${fmt(count)} 条评价` : `评价获赞 ${fmt(likes)} 赞`;
        const secondary = count > 0 && likes > 0 ? `评价获赞 ${fmt(likes)} 赞` : "";
        const tertiary = comments > 0 ? `评价一共有 ${fmt(comments)} 条评论` : "";
        return `
          <div class="vlist">
            <div class="vsum">${primary}</div>
            ${secondary ? `<div>${secondary}</div>` : ""}
            ${tertiary ? `<div>${tertiary}</div>` : ""}
          </div>
        `;
      })(),
      desc: "",
      rewardId: "snap_reviews",
      visible:
        Number(snap.reviewsCount || 0) > 0 ||
        Number(snap.reviewLikesTotal || 0) > 0 ||
        Number(snap.reviewCommentsTotal || 0) > 0,
    },
    {
      label: "评价被点赞",
      value: (() => {
        const likedCnt = Number(snap.reviewsLikedCount || 0);
        const rows = [
          { k: "1", t: (snap.reviewLikedTop1Game || "").trim(), n: Number(snap.reviewLikedTop1Likes || 0) },
          { k: "2", t: (snap.reviewLikedTop2Game || "").trim(), n: Number(snap.reviewLikedTop2Likes || 0) },
          { k: "3", t: (snap.reviewLikedTop3Game || "").trim(), n: Number(snap.reviewLikedTop3Likes || 0) },
        ].filter((r) => r.t && r.n > 0);

        // legacy fallback (older single item)
        if (!rows.length) {
          const legacyTitle = (snap.topLikedReviewTitle || "").trim();
          const legacyLikes = Number(snap.topLikedReviewLikes || 0);
          if (legacyTitle && legacyLikes > 0) rows.push({ k: "1", t: legacyTitle, n: legacyLikes });
        }

        const summaryParts = [];
        if (likedCnt > 0) summaryParts.push(`有 ${fmt(likedCnt)} 条评价被点赞了`);
        const summary = summaryParts.join("，");

        const topHtml = rows
          .map((r) => `<div class="kv"><span class="k">${r.k}</span><span class="t">${r.t}</span><span class="m">${fmt(r.n)} 赞</span></div>`)
          .join("");

        if (!summary && !topHtml) return "";
        return `
          <div class="vlist">
            ${summary ? `<div class="vsum">${summary}</div>` : ""}
            ${topHtml ? `<div class="sub">评价被点赞 Top3</div>${topHtml}` : ""}
          </div>
        `;
      })(),
      desc: "",
      rewardId: "snap_top_review",
      visible:
        Number(snap.reviewsLikedCount || 0) > 0 ||
        Number(snap.reviewLikedTop1Likes || 0) > 0 ||
        Number(snap.topLikedReviewLikes || 0) > 0,
    },
    {
      label: "嘴替发言",
      value: (() => {
        const scoreText = (n) => {
          const v = Number(n);
          if (!Number.isFinite(v) || v <= 0) return "";
          return (Math.round(v * 10) / 10).toFixed(1);
        };
        const cnt = Number(snap.zuitiReviewsCount || snap.zuitiCount || 0);
        const rows = [
          { k: "1", t: (snap.zuitiRecent1Game || "").trim(), s: Number(snap.zuitiRecent1Score || 0) },
          { k: "2", t: (snap.zuitiRecent2Game || "").trim(), s: Number(snap.zuitiRecent2Score || 0) },
          { k: "3", t: (snap.zuitiRecent3Game || "").trim(), s: Number(snap.zuitiRecent3Score || 0) },
        ].filter((r) => r.t);

        const rowHtml = rows
          .map((r) => {
            const score = scoreText(r.s);
            return `<div class="kv"><span class="k">${r.k}</span><span class="t">${r.t}</span><span class="m">${score ? `${score} 分` : ""}</span></div>`;
          })
          .join("");

        if (cnt <= 0 && !rowHtml) return "";
        return `
          <div class="vlist">
            ${cnt > 0 ? `<div class="vsum">嘴替发言的评价数量 ${fmt(cnt)} 条</div>` : ""}
            ${rowHtml ? `<div class="sub">最近的 3 条嘴替发言</div>${rowHtml}` : ""}
          </div>
        `;
      })(),
      desc: "",
      rewardId: "snap_zuiti",
      visible:
        Number(snap.zuitiReviewsCount || snap.zuitiCount || 0) > 0 ||
        !!(String(snap.zuitiRecent1Game || "").trim() || String(snap.zuitiRecent2Game || "").trim() || String(snap.zuitiRecent3Game || "").trim()),
    },
    {
      label: "小众宝藏",
      value: (() => {
        const scoreText = (n) => {
          const v = Number(n);
          if (!Number.isFinite(v) || v <= 0) return "";
          return (Math.round(v * 10) / 10).toFixed(1);
        };
        const rows = [
          {
            k: "1",
            g: (snap.fiveStarNiche1Game || "").trim(),
            c: Number(snap.fiveStarNiche1ReviewsCount || 0),
            s: Number(snap.fiveStarNiche1Score || 0),
          },
          {
            k: "2",
            g: (snap.fiveStarNiche2Game || "").trim(),
            c: Number(snap.fiveStarNiche2ReviewsCount || 0),
            s: Number(snap.fiveStarNiche2Score || 0),
          },
          {
            k: "3",
            g: (snap.fiveStarNiche3Game || "").trim(),
            c: Number(snap.fiveStarNiche3ReviewsCount || 0),
            s: Number(snap.fiveStarNiche3Score || 0),
          },
        ]
          .filter((x) => x.g && x.c > 0 && x.c < 50 && Number(x.s || 0) > 8.5)
          .slice(0, 3);

        // legacy fallback (older single item)
        if (!rows.length) {
          const legacyGame = (snap.nicheGame || "").trim();
          const legacyCnt = Number(snap.nicheGameReviewsCount || 0);
          const legacyScore = Number(snap.nicheGameScore || 0);
          if (legacyGame && legacyCnt > 0 && legacyCnt < 50 && legacyScore > 8.5) {
            rows.push({ k: "1", g: legacyGame, c: legacyCnt, s: legacyScore });
          }
        }

        if (!rows.length) return "";
        const topHtml = rows
          .map((x) => {
            const score = scoreText(x.s);
            const meta = `${score ? `${score} 分 · ` : ""}${fmt(x.c)} 条评价`;
            return `<div class="kv"><span class="k">${x.k}</span><span class="t">${x.g}</span><span class="m">${meta}</span></div>`;
          })
          .join("");
        return `
          <div class="vlist">
            <div class="vsum">你给过五星好评的小众宝藏</div>
            ${topHtml ? `<div class="sub">全站评价数少于 50 的游戏（最多 3 个）</div>${topHtml}` : ""}
          </div>
        `;
      })(),
      desc: "",
      rewardId: "snap_niche",
      visible:
        (Number(snap.fiveStarNiche1ReviewsCount || 0) > 0 &&
          Number(snap.fiveStarNiche1ReviewsCount || 0) < 50 &&
          Number(snap.fiveStarNiche1Score || 0) > 8.5) ||
        (Number(snap.fiveStarNiche2ReviewsCount || 0) > 0 &&
          Number(snap.fiveStarNiche2ReviewsCount || 0) < 50 &&
          Number(snap.fiveStarNiche2Score || 0) > 8.5) ||
        (Number(snap.fiveStarNiche3ReviewsCount || 0) > 0 &&
          Number(snap.fiveStarNiche3ReviewsCount || 0) < 50 &&
          Number(snap.fiveStarNiche3Score || 0) > 8.5) ||
        (Number(snap.nicheGameReviewsCount || 0) > 0 &&
          Number(snap.nicheGameReviewsCount || 0) < 50 &&
          Number(snap.nicheGameScore || 0) > 8.5),
    },
    {
      label: "TapTap玩赏家",
      value: (() => {
        const raw = snap.taptapCriticYears;
        const years = (
          Array.isArray(raw)
            ? raw
            : String(raw || "")
              .split(/[、,，/\s]+/g)
        )
          .map((x) => String(x || "").trim())
          .map((x) => x.replace(/[^\d]/g, "")) // keep year digits
          .filter(Boolean)
          .map((x) => Number(x))
          .filter((n) => Number.isFinite(n) && n > 1900 && n < 3000)
          .sort((a, b) => a - b);

        // unique
        const uniq = [];
        const seen = new Set();
        years.forEach((y) => {
          const k = String(y);
          if (seen.has(k)) return;
          seen.add(k);
          uniq.push(y);
        });

        const count = uniq.length;
        if (!count) return "";
        const rowHtml = uniq
          .map((y, i) => `<div class="kv"><span class="k">${i + 1}</span><span class="t">${y} TapTap玩赏家</span><span class="m"></span></div>`)
          .join("");
        return `
          <div class="vlist">
            <div class="vsum">获得了 ${fmt(count)} 个年份的玩赏家认证</div>
            ${rowHtml ? `${rowHtml}` : ""}
          </div>
        `;
      })(),
      desc: "",
      rewardId: "snap_critic",
      visible: Array.isArray(snap.taptapCriticYears)
        ? snap.taptapCriticYears.length > 0
        : !!String(snap.taptapCriticYears || "").trim(),
    },

    // 社区：论坛与社区
    {
      label: "发帖和回帖",
      value: (() => {
        const posts = Number(snap.postsCount || 0);
        const replies = Number(snap.repliesCount || 0);
        const players = Number(snap.forumInteractPlayers || 0);
        const parts = [];
        if (posts > 0) parts.push(`总共发了 ${fmt(posts)} 个帖子`);
        if (replies > 0) parts.push(`评论区发了 ${fmt(replies)} 条`);
        if (players > 0) parts.push(`和 ${fmt(players)} 位玩家互动`);
        const summary = parts.join("，");

        const rows = [
          { k: "1", t: (snap.topActiveForum1Game || "").trim(), n: Number(snap.topActiveForum1Posts || 0) },
          { k: "2", t: (snap.topActiveForum2Game || "").trim(), n: Number(snap.topActiveForum2Posts || 0) },
          { k: "3", t: (snap.topActiveForum3Game || "").trim(), n: Number(snap.topActiveForum3Posts || 0) },
        ].filter((r) => r.t && r.n > 0);
        const topHtml = rows
          .map((r) => `<div class="kv"><span class="k">${r.k}</span><span class="t">${r.t}</span><span class="m">${fmt(r.n)} 帖</span></div>`)
          .join("");

        if (!summary && !topHtml) return "";
        return `
          <div class="vlist">
            ${summary ? `<div class="vsum">${summary}</div>` : ""}
            ${topHtml ? `<div class="sub">最活跃的游戏论坛 Top3（发帖量最高）</div>${topHtml}` : ""}
          </div>
        `;
      })(),
      desc: "",
      rewardId: "snap_forum_stats",
      visible:
        Number(snap.postsCount || 0) > 0 ||
        Number(snap.repliesCount || 0) > 0 ||
        Number(snap.forumInteractPlayers || 0) > 0 ||
        Number(snap.topActiveForum1Posts || 0) > 0 ||
        Number(snap.topActiveForum2Posts || 0) > 0 ||
        Number(snap.topActiveForum3Posts || 0) > 0,
    },
    {
      label: "点赞与收藏",
      value: (() => {
        const liked = Number(snap.likedPostsCount || 0);
        const gotLikes = Number(snap.receivedLikesCount || 0);
        const faved = Number(snap.favoritedPostsCount || 0);
        const gotFavs = Number(snap.receivedFavoritesCount || 0);

        const acted = liked + faved;
        const got = gotLikes + gotFavs;
        const summary = acted > 0 || got > 0 ? `点赞/收藏了 ${fmt(acted)} 次，发的内容被其他玩家点赞/收藏 ${fmt(got)} 次` : "";

        const cut8 = (s) => {
          const arr = Array.from(String(s || "").trim());
          if (arr.length <= 8) return arr.join("");
          return `${arr.slice(0, 8).join("")}...`;
        };

        const rows = [
          {
            k: "1",
            t: (snap.topEngagedPost1Title || "").trim(),
            g: (snap.topEngagedPost1Game || "").trim(),
            l: Number(snap.topEngagedPost1Likes || 0),
            f: Number(snap.topEngagedPost1Favs || 0),
            u: String(snap.topEngagedPost1Uri || "").trim(),
          },
          {
            k: "2",
            t: (snap.topEngagedPost2Title || "").trim(),
            g: (snap.topEngagedPost2Game || "").trim(),
            l: Number(snap.topEngagedPost2Likes || 0),
            f: Number(snap.topEngagedPost2Favs || 0),
            u: String(snap.topEngagedPost2Uri || "").trim(),
          },
          {
            k: "3",
            t: (snap.topEngagedPost3Title || "").trim(),
            g: (snap.topEngagedPost3Game || "").trim(),
            l: Number(snap.topEngagedPost3Likes || 0),
            f: Number(snap.topEngagedPost3Favs || 0),
            u: String(snap.topEngagedPost3Uri || "").trim(),
          },
        ].filter((r) => r.t && (r.l > 0 || r.f > 0));

        // legacy fallback
        if (!rows.length) {
          const legacyTitle = (snap.topLikedPostTitle || "").trim();
          const legacyLikes = Number(snap.topLikedPostLikes || 0);
          if (legacyTitle && legacyLikes > 0) rows.push({ k: "1", t: legacyTitle, g: "", l: legacyLikes, f: 0, u: "" });
        }

        const topHtml = rows
          .map((r) => {
            const shortTitle = cut8(r.t);
            const meta = fmt((r.l || 0) + (r.f || 0));
            const titleAttr = String(r.t || "").replaceAll('"', "&quot;");
            const tHtml = r.u
              ? `<button type="button" class="link-inline t" data-deeplink="${r.u}" title="${titleAttr}">${shortTitle}</button>`
              : `<span class="t" title="${titleAttr}">${shortTitle}</span>`;
            return `<div class="kv"><span class="k">${r.k}</span>${tHtml}<span class="m">${meta} 次</span></div>`;
          })
          .join("");

        if (!summary && !topHtml) return "";
        return `
          <div class="vlist">
            ${summary ? `<div class="vsum">${summary}</div>` : ""}
            ${topHtml ? `<div class="sub">被点赞或收藏最多的 Top3 帖子</div>${topHtml}` : ""}
          </div>
        `;
      })(),
      desc: "",
      rewardId: "snap_top_post",
      visible:
        Number(snap.likedPostsCount || 0) > 0 ||
        Number(snap.receivedLikesCount || 0) > 0 ||
        Number(snap.favoritedPostsCount || 0) > 0 ||
        Number(snap.receivedFavoritesCount || 0) > 0 ||
        Number(snap.topEngagedPost1Likes || 0) > 0 ||
        Number(snap.topEngagedPost1Favs || 0) > 0 ||
        Number(snap.topLikedPostLikes || 0) > 0,
    },
    {
      label: "深夜社区活跃",
      value: (() => {
        const cnt = Number(snap.nightCommunityCount || 0);
        const rows = [
          {
            k: "1",
            g: (snap.nightCommunityRecent1Game || "").trim(),
            a: (snap.nightCommunityRecent1Action || "").trim(),
            t: (snap.nightCommunityRecent1Time || "").trim(),
          },
          {
            k: "2",
            g: (snap.nightCommunityRecent2Game || "").trim(),
            a: (snap.nightCommunityRecent2Action || "").trim(),
            t: (snap.nightCommunityRecent2Time || "").trim(),
          },
          {
            k: "3",
            g: (snap.nightCommunityRecent3Game || "").trim(),
            a: (snap.nightCommunityRecent3Action || "").trim(),
            t: (snap.nightCommunityRecent3Time || "").trim(),
          },
        ].filter((x) => x.g && x.a && x.t);
        const topHtml = rows
          .map((x) => `<div class="kv"><span class="k">${x.k}</span><span class="t">${x.g}｜${x.a}</span><span class="m">${x.t}</span></div>`)
          .join("");

        const summary = cnt > 0 ? `有 ${fmt(cnt)} 个深夜在论坛活跃` : "";
        if (!summary && !topHtml) return "";
        return `
          <div class="vlist">
            ${summary ? `<div class="vsum">${summary}</div>` : ""}
            ${topHtml ? `<div class="sub">最近 3 次的活跃情况</div>${topHtml}` : ""}
          </div>
        `;
      })(),
      desc: "",
      rewardId: "snap_night_community",
      visible:
        Number(snap.nightCommunityCount || 0) > 0 ||
        !!(
          String(snap.nightCommunityRecent1Game || "").trim() ||
          String(snap.nightCommunityRecent2Game || "").trim() ||
          String(snap.nightCommunityRecent3Game || "").trim()
        ) ||
        !!(snap.nightTopAction || "").trim(), // legacy
    },
    {
      label: "好友",
      value: (() => {
        const friends = Number(snap.friendsCount || 0);
        const following = Number(snap.followingCount || 0);
        const followers = Number(snap.followersCount || 0);
        const msgs = Number(snap.friendMessagesCount || 0);

        const top = [
          {
            k: "1",
            n: String(snap.friendTop1Name || "").trim(),
            id: String(snap.friendTop1TapId || "").trim(),
            c: Number(snap.friendTop1MsgCount || 0),
          },
          {
            k: "2",
            n: String(snap.friendTop2Name || "").trim(),
            id: String(snap.friendTop2TapId || "").trim(),
            c: Number(snap.friendTop2MsgCount || 0),
          },
          {
            k: "3",
            n: String(snap.friendTop3Name || "").trim(),
            id: String(snap.friendTop3TapId || "").trim(),
            c: Number(snap.friendTop3MsgCount || 0),
          },
        ].filter((x) => x.n && x.id && x.c > 0);

        if (friends <= 0 && following <= 0 && followers <= 0 && msgs <= 0 && !top.length) return "";
        const line1 = `好友 ${fmt(friends)} / 关注 ${fmt(following)} / 粉丝 ${fmt(followers)}`;
        const line2 = msgs > 0 ? `发了 ${fmt(msgs)} 条好友消息` : "";
        const topHtml = top
          .map((x) => `<div class="kv"><span class="k">${x.k}</span><span class="t">${x.n}（${x.id}）</span><span class="m">${fmt(x.c)} 条</span></div>`)
          .join("");
        return `
          <div class="vlist">
            <div class="vsum">${line1}</div>
            ${line2 ? `<div>${line2}</div>` : ""}
            ${topHtml ? `<div class="sub">最亲密的好友 Top3（发消息最多的）</div>${topHtml}` : ""}
          </div>
        `;
      })(),
      desc: "",
      rewardId: "snap_friend_msgs",
      visible:
        Number(snap.friendsCount || 0) > 0 ||
        Number(snap.followingCount || 0) > 0 ||
        Number(snap.followersCount || 0) > 0 ||
        Number(snap.friendMessagesCount || 0) > 0 ||
        Number(snap.friendTop1MsgCount || 0) > 0 ||
        !!String(snap.friendTop1Name || "").trim(),
    },

    // 开发者
    {
      label: "创作了多少款游戏",
      value: (() => {
        const cnt = Number(snap.devGamesCount || 0);
        const rows = [
          { k: "1", t: String(snap.devCert1Name || "").trim() },
          { k: "2", t: String(snap.devCert2Name || "").trim() },
          { k: "3", t: String(snap.devCert3Name || "").trim() },
        ].filter((r) => r.t);
        const topHtml = rows
          .map((r) => `<div class="kv"><span class="k">${r.k}</span><span class="t">${r.t}</span><span class="m"></span></div>`)
          .join("");
        if (cnt <= 0 && !topHtml) return "";
        return `
          <div class="vlist">
            ${cnt > 0 ? `<div class="vsum">创作了 ${fmt(cnt)} 款游戏</div>` : ""}
            ${topHtml ? `<div class="sub">最近的 3 个认证</div>${topHtml}` : ""}
          </div>
        `;
      })(),
      desc: "",
      rewardId: "snap_dev_games",
      visible:
        Number(snap.devGamesCount || 0) > 0 ||
        !!String(snap.devCert1Name || "").trim() ||
        !!String(snap.devCert2Name || "").trim() ||
        !!String(snap.devCert3Name || "").trim(),
    },
    {
      label: "聚光灯GameJam",
      value: (() => {
        const scoreText = (n) => {
          const v = Number(n);
          if (!Number.isFinite(v) || v <= 0) return "";
          return (Math.round(v * 10) / 10).toFixed(1);
        };
        const first = String(snap.spotlightGamejamFirstPublishDate || "").trim();
        const items = [1, 2, 3, 4, 5].map((i) => ({
          name: String(snap[`spotlightGamejam${i}Name`] || "").trim(),
          score: Number(snap[`spotlightGamejam${i}Score`] || 0),
          award: String(snap[`spotlightGamejam${i}Award`] || "").trim(),
          certified: !!snap[`spotlightGamejam${i}Certified`],
          tagged: !!snap[`spotlightGamejam${i}Tagged`],
        }));
        const eligible = items.filter((x) => x.name && x.certified && x.tagged);
        const count = eligible.length;

        const top = eligible
          .slice()
          .sort((a, b) => {
            const aa = a.award ? 1 : 0;
            const bb = b.award ? 1 : 0;
            if (bb !== aa) return bb - aa; // award first
            const as = Number.isFinite(a.score) ? a.score : 0;
            const bs = Number.isFinite(b.score) ? b.score : 0;
            return bs - as; // then by score desc
          })
          .slice(0, 3)
          .map((x, idx) => ({ k: String(idx + 1), ...x }));

        const topHtml = top
          .map((x) => {
            const meta = `${scoreText(x.score) ? `${scoreText(x.score)} 分` : ""}${x.award ? ` · ${x.award}` : ""}`;
            return `<div class="kv"><span class="k">${x.k}</span><span class="t">${x.name}</span><span class="m">${meta}</span></div>`;
          })
          .join("");

        // legacy fallback (older fields)
        if (!count && (Number(snap.gamejamCount || 0) > 0 || Number(snap.gamejamWorks || 0) > 0)) {
          const legacy = [];
          if (Number(snap.gamejamCount || 0) > 0) legacy.push(`参与 ${fmt(snap.gamejamCount || 0)} 次`);
          if (Number(snap.gamejamWorks || 0) > 0) legacy.push(`${fmt(snap.gamejamWorks || 0)} 个作品`);
          return legacy.length ? `<div class="vlist"><div class="vsum">${legacy.join("，")}</div></div>` : "";
        }

        if (!count && !first && !topHtml) return "";
        return `
          <div class="vlist">
            ${count > 0 ? `<div class="vsum">创作了 ${fmt(count)} 款聚光灯 GameJam 游戏</div>` : ""}
            ${first ? `<div>第一次发布：${first}</div>` : ""}
            ${topHtml ? `<div class="sub">Top3（先看获奖，再看评分）</div>${topHtml}` : ""}
          </div>
        `;
      })(),
      desc: "",
      rewardId: "snap_gamejam",
      visible:
        !!String(snap.spotlightGamejamFirstPublishDate || "").trim() ||
        !!String(snap.spotlightGamejam1Name || "").trim() ||
        !!String(snap.spotlightGamejam2Name || "").trim() ||
        !!String(snap.spotlightGamejam3Name || "").trim() ||
        !!String(snap.spotlightGamejam4Name || "").trim() ||
        !!String(snap.spotlightGamejam5Name || "").trim() ||
        Number(snap.gamejamCount || 0) > 0 ||
        Number(snap.gamejamWorks || 0) > 0,
    },
    {
      label: "TapTap 制造",
      value: (() => {
        const first = String(snap.tapmakerFirstPublishDate || "").trim();
        const items = [1, 2, 3, 4, 5].map((i) => ({
          name: String(snap[`tapmaker${i}Name`] || "").trim(),
          likes: Number(snap[`tapmaker${i}Likes`] || 0),
          certified: !!snap[`tapmaker${i}Certified`],
          tagged: !!snap[`tapmaker${i}Tagged`],
        }));
        const eligible = items.filter((x) => x.name && x.certified && x.tagged);
        const count = eligible.length;
        const top = eligible
          .slice()
          .sort((a, b) => Number(b.likes || 0) - Number(a.likes || 0))
          .slice(0, 3)
          .map((x, idx) => ({ k: String(idx + 1), ...x }));
        const topHtml = top
          .map((x) => `<div class="kv"><span class="k">${x.k}</span><span class="t">${x.name}</span><span class="m">${fmt(x.likes || 0)} 赞</span></div>`)
          .join("");

        // legacy fallback
        if (!count && Number(snap.creatorWorks || 0) > 0) {
          const line = `创作了 ${fmt(snap.creatorWorks || 0)} 款 TapTap 制造游戏`;
          const d = first ? `第一次发布：${first}` : "";
          return `
            <div class="vlist">
              <div class="vsum">${line}</div>
              ${d ? `<div>${d}</div>` : ""}
            </div>
          `;
        }

        if (!count && !first && !topHtml) return "";
        return `
          <div class="vlist">
            ${count > 0 ? `<div class="vsum">创作了 ${fmt(count)} 款 TapTap 制造游戏</div>` : ""}
            ${first ? `<div>第一次发布：${first}</div>` : ""}
            ${topHtml ? `<div class="sub">点赞数 Top3</div>${topHtml}` : ""}
          </div>
        `;
      })(),
      desc: "",
      rewardId: "snap_creator",
      visible:
        !!String(snap.tapmakerFirstPublishDate || "").trim() ||
        !!String(snap.tapmaker1Name || "").trim() ||
        !!String(snap.tapmaker2Name || "").trim() ||
        !!String(snap.tapmaker3Name || "").trim() ||
        !!String(snap.tapmaker4Name || "").trim() ||
        !!String(snap.tapmaker5Name || "").trim() ||
        Number(snap.creatorWorks || 0) > 0,
    },
  ];
  let snapshotCards = snapshotCardsAll.filter((c) => c.visible);
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
      value: s.boundSteam ? "" : "",
      desc: s.boundSteam ? "你的steam卡片好帅呀，快去领取奖励吧！" : "绑定后可在个人主页展示",
      rewardId: "bind_steam",
      visible: true,
    },
    {
      label: "绑定游戏角色",
      value: (s.boundRolesCount || 0) > 0 ? `已绑定 ${fmt(s.boundRolesCount || 0)} 个` : "",
      desc: "每个绑定角色都能领取奖励，多多绑定吧！",
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
    <section class="card">
      <div class="row">
        <div class="grow">
          <p class="h1">我的TapTap十年回顾</p>
        </div>
        <button class="btn btn--brand" id="btnToggleShare" type="button" style="min-height:36px; padding:8px 10px">分享</button>
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

function rewardBlockHtml(rewardId, s, recap) {
  const claimed = hasClaimed(s, rewardId);

  // Snapshot rewards: visible cards are always claimable (no “未达成”)
  if (String(rewardId).startsWith("snap_")) {
    const baseGrant = s.careerSnapshot?.grants?.[rewardId];
    if (!baseGrant) return "";
    const claimGrant = snapshotClaimGrant(s, rewardId) || baseGrant;
    const grant = claimed ? baseGrant : claimGrant;
    const btn = claimed
      ? `<button class="btn" disabled>已领</button>`
      : `<button class="btn btn--brand" data-claim="${rewardId}">领取</button>`;
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
            ${btn}
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
    const btns = pending > 0
      ? `<button class="btn btn--brand" data-claim="${r.id}">领取</button>`
      : `<button class="btn btn--brand" data-bind="${r.id}">去绑定</button>`;

    return `
      <div class="mini-card__reward">
        <div class="row" style="align-items:flex-start; justify-content:space-between">
          <div class="grow">
            ${leftHtml}
          </div>
          <div class="mini-card__reward-actions mini-card__reward-actions--stack">
            ${btns}
          </div>
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
  return `
    <div class="mini-card ${kindClass}" role="listitem" data-card-idx="${idx}" data-reward-id="${escapeHtml(card.rewardId || "")}">
      <div class="mini-card__k">${card.label}</div>
      ${card.value ? `<div class="mini-card__v">${card.value}</div>` : ""}
      ${kindClass === "mini-card--bind" && card.desc ? `<div class="mini-card__d">${card.desc}</div>` : ""}
      ${rewardBlockHtml(card.rewardId, s, recap)}
    </div>
  `;
}

function shareCardHtml(s, recap, { variant }) {
  const title = variant === "recap" ? "十周年回顾分享卡" : "十周年分享卡";
  const oneTag = (str) => {
    const raw = String(str || "").trim();
    if (!raw) return "";
    return raw.split("／")[0].split("/")[0].split("·")[0].split("|")[0].trim();
  };
  const maxYear = (v) => {
    const ys = Array.isArray(v)
      ? v
      : String(v || "")
        .split(/[、,，/\s]+/g)
        .map((x) => String(x || "").trim())
        .map((x) => x.replace(/[^\d]/g, ""))
        .filter(Boolean)
        .map((x) => Number(x))
        .filter((n) => Number.isFinite(n));
    if (!ys.length) return null;
    return Math.max(...ys);
  };
  const joinNonEmpty = (arr, sep = " · ") => arr.filter(Boolean).join(sep);
  const regDate = String(recap.regDate || "").trim();
  const togetherDays = calcDaysSince(parseCnDateToTs(recap.regDate));
  const criticYear = maxYear(recap.taptapCriticYears);
  const favoriteGenre = oneTag(recap.topGenre1 || recap.favoriteGenre);
  const zuiti = Number(recap.zuitiReviewsCount || recap.zuitiCount || 0);

  const iconChar = (name) => {
    const raw = String(name || "").trim();
    if (!raw) return "";
    const m = raw.match(/《([^》]+)》/);
    const inside = (m ? m[1] : raw).trim();
    const cleaned = inside.replace(/^TapTap制造[:：]/, "").split(/[:：]/).pop().trim();
    return Array.from(cleaned)[0] || "";
  };
  const iconHtml = (name, { award = false } = {}) => {
    const ch = iconChar(name);
    if (!ch) return "";
    return `<span class="game-ico" aria-hidden="true">${ch}${award ? `<span class="game-ico__badge" aria-hidden="true">🏆</span>` : ""}</span>`;
  };

  const creatorIcons = [
    String(recap.devCert1Name || "").trim(),
    String(recap.devCert2Name || "").trim(),
    String(recap.devCert3Name || "").trim(),
  ]
    .filter(Boolean)
    .slice(0, 3)
    .map((t) => iconHtml(t))
    .join("");

  const gamejamAll = [1, 2, 3, 4, 5]
    .map((i) => ({
      name: String(recap[`spotlightGamejam${i}Name`] || "").trim(),
      score: Number(recap[`spotlightGamejam${i}Score`] || 0),
      award: String(recap[`spotlightGamejam${i}Award`] || "").trim(),
      certified: !!recap[`spotlightGamejam${i}Certified`],
      tagged: !!recap[`spotlightGamejam${i}Tagged`],
    }))
    .filter((x) => x.name && x.certified && x.tagged)
    .sort((a, b) => {
      const aa = a.award ? 1 : 0;
      const bb = b.award ? 1 : 0;
      if (bb !== aa) return bb - aa;
      const as = Number.isFinite(a.score) ? a.score : 0;
      const bs = Number.isFinite(b.score) ? b.score : 0;
      return bs - as;
    })
    ;
  const gamejamTop = gamejamAll.slice(0, 3);
  const gamejamIcons = gamejamTop.map((x) => iconHtml(x.name, { award: !!x.award })).join("");

  const tapmakerAll = [1, 2, 3, 4, 5]
    .map((i) => ({
      name: String(recap[`tapmaker${i}Name`] || "").trim(),
      likes: Number(recap[`tapmaker${i}Likes`] || 0),
      certified: !!recap[`tapmaker${i}Certified`],
      tagged: !!recap[`tapmaker${i}Tagged`],
    }))
    .filter((x) => x.name && x.certified && x.tagged)
    .sort((a, b) => Number(b.likes || 0) - Number(a.likes || 0));
  const tapmakerTop = tapmakerAll.slice(0, 3);
  const tapmakerIcons = tapmakerTop.map((x) => iconHtml(x.name)).join("");

  return `
    <div class="share-card" id="shareCard">
      <div class="row">
        <div class="grow">
          <div class="share-card__title">${title}</div>
          <div class="muted small" style="margin-top:4px">TapTap · 生涯回顾 · 十年同行</div>
        </div>
        <span class="tag mono">#10y</span>
      </div>
      <div class="share-card__grid">
        <div class="kpi">
          <div class="kpi__v">${regDate || "—"}</div>
          <div class="kpi__k">什么时候来到 TapTap</div>
        </div>
        <div class="kpi">
          <div class="kpi__v">${togetherDays != null ? `${fmt(togetherDays)} 天` : "—"}</div>
          <div class="kpi__k">已互相陪伴</div>
        </div>
        <div class="kpi">
          <div class="kpi__v">${fmt(Number(recap.downloadsCount || 0))} 个</div>
          <div class="kpi__k">下载了多少游戏</div>
        </div>
        <div class="kpi">
          <div class="kpi__v">${String(recap.playTimeTotal || "").trim() || "—"}</div>
          <div class="kpi__k">总游戏时长</div>
        </div>
        <div class="kpi">
          <div class="kpi__v">${String(recap.topGame1 || "").trim() || "—"}</div>
          <div class="kpi__k">最喜欢的游戏</div>
        </div>
        <div class="kpi">
          <div class="kpi__v">${favoriteGenre || "—"}</div>
          <div class="kpi__k">最喜欢什么类型</div>
        </div>
        <div class="kpi">
          <div class="kpi__v">${joinNonEmpty([
            `黑金 ${fmt(Number(recap.badgesBlackGoldTotal || 0))}`,
            `白金 ${fmt(Number(recap.platinumAchievementsTotal || 0))}`,
          ], " / ") || "—"}</div>
          <div class="kpi__k">徽章 / 成就</div>
        </div>
        <div class="kpi">
          <div class="kpi__v">${joinNonEmpty([
            `评价 ${fmt(Number(recap.reviewsCount || 0))}`,
            `嘴替 ${fmt(zuiti)}`,
          ], " / ") || "—"}</div>
          <div class="kpi__k">最近一年玩赏家 ${criticYear ? `${criticYear}` : "—"}</div>
        </div>
      </div>
      <div class="divider"></div>
      <div class="share-sections">
        <div class="share-sec">
          <div class="row" style="align-items:baseline; justify-content:space-between; gap:10px">
            <div class="share-sec__k">创作游戏</div>
            <div class="share-sec__m">${Number(recap.devGamesCount || 0) > 0 ? `${fmt(Number(recap.devGamesCount || 0))} 款` : ""}</div>
          </div>
          <div class="game-icons">${creatorIcons || `<span class="muted small">—</span>`}</div>
        </div>
        <div class="share-sec">
          <div class="row" style="align-items:baseline; justify-content:space-between; gap:10px">
            <div class="share-sec__k">聚光灯 GameJam</div>
            <div class="share-sec__m">${gamejamAll.length ? `Top3` : ""}</div>
          </div>
          <div class="game-icons">${gamejamIcons || `<span class="muted small">—</span>`}</div>
        </div>
        <div class="share-sec">
          <div class="row" style="align-items:baseline; justify-content:space-between; gap:10px">
            <div class="share-sec__k">TapMaker</div>
            <div class="share-sec__m">${tapmakerAll.length ? `Top3` : ""}</div>
          </div>
          <div class="game-icons">${tapmakerIcons || `<span class="muted small">—</span>`}</div>
        </div>
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
        <b>绑定更多游戏角色</b>：这里会打开游戏数据绑定界面。
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
  openModal({ title: "绑定游戏角色", bodyHtml: body, footerHtml: footer });
  $("#btnCancelBindRole")?.addEventListener("click", closeModal);
  $("#btnBindOneRole")?.addEventListener("click", () => {
    state.boundRolesCount = Math.max(0, Number(state.boundRolesCount || 0)) + 1;
    state.boundData = state.boundRolesCount > 0; // keep legacy flag for recap enrichment/demo switch
    saveState();
    closeModal();
    if (lastBindClickCtx?.trackId) requestCarouselInit(lastBindClickCtx.trackId, lastBindClickCtx.currentIdx);
    render();
    toast("已绑定 1 个角色，可领取奖励");
    lastBindClickCtx = null;
  });
}

function discoverInlineView(s) {
  const getTopLiked = (gameId) => {
    const arr = s.mutualMessages?.[gameId] || [];
    return arr
      .slice()
      .filter((m) => String(m?.text || "").trim())
      .sort((a, b) => Number(b.likes || 0) - Number(a.likes || 0))
      .slice(0, 6);
  };
  const cut16 = (str) => {
    const arr = Array.from(String(str || "").trim());
    const MAX = 24;
    if (arr.length <= MAX) return arr.join("");
    return `${arr.slice(0, MAX).join("")}...`;
  };
  const iconChar = (name) => {
    const raw = String(name || "").trim();
    if (!raw) return "";
    const m = raw.match(/《([^》]+)》/);
    const inside = (m ? m[1] : raw).trim();
    const cleaned = inside.replace(/^TapTap制造[:：]/, "").split(/[:：]/).pop().trim();
    return Array.from(cleaned)[0] || "";
  };
  const mutualList = MUTUAL_GAMES.map((g) => {
    const tags = (g.tags || []).slice(0, 4).map((t) => `<span class="tag">${t}</span>`).join("");
    const top = getTopLiked(g.id);
    const marquee = top.length
      ? `
        <div class="marquee" aria-label="高赞留言">
          <div class="marquee__track">
            ${top.map((m) => `<button type="button" class="marquee__item marquee__item--btn" data-mutual-marquee="${g.id}" data-mutual-comment="${escapeHtml(String(m.text || ""))}" data-mutual-likes="${Number(m.likes || 0)}">👍 ${fmt(Number(m.likes || 0))} ${escapeHtml(cut16(m.text))}</button>`).join("")}
            ${top.map((m) => `<button type="button" class="marquee__item marquee__item--btn" data-mutual-marquee="${g.id}" data-mutual-comment="${escapeHtml(String(m.text || ""))}" data-mutual-likes="${Number(m.likes || 0)}">👍 ${fmt(Number(m.likes || 0))} ${escapeHtml(cut16(m.text))}</button>`).join("")}
          </div>
        </div>
      `
      : `
        <div class="marquee" aria-label="高赞留言">
          <div class="marquee__track marquee__track--static">
            <span class="marquee__item">还没有热评，快来留言做第一个上墙的人吧</span>
          </div>
        </div>
      `;
    const score = Number(g.score || 0);
    const scoreHtml = score ? `<span class="mutual-score" aria-label="评分">⭐ ${score.toFixed(1)}</span>` : "";

    return `
      <div class="item mutual-item">
        <div class="mutual-top row">
          <button type="button" class="mutual-detail" data-mutual-detail="${g.id}" aria-label="打开详情">
            <span class="game-ico" aria-hidden="true">${iconChar(g.title)}</span>
          </button>
          <div class="grow" style="min-width:0">
            <div class="mutual-titleline">
              <button type="button" class="mutual-detail" data-mutual-detail="${g.id}">
                <span class="mutual-title">${g.title}</span>
              </button>
              <span class="mutual-tags">${tags}</span>
            </div>
          </div>
          ${scoreHtml}
        </div>
        <div class="mutual-bottom row">
          <div class="mutual-marquee">${marquee}</div>
          <button class="btn btn--brand" type="button" data-mutual-open="${g.id}">留言</button>
        </div>
      </div>
    `;
  }).join("");

  const playStates = PLAYTEST_GAMES.map((p, idx) => {
    const feedback = String(s.playtest.feedback?.[p.id] || "").trim();
    const playedAndRated = s.playtest.completed.includes(p.id) && !!feedback;
    const claimed = (s.playtest.claimed || []).includes(p.id);
    const claimable = playedAndRated && !claimed;
    const group = claimable ? 0 : claimed ? 2 : 1;
    const heat = Math.max(0, Number(p.heat || 0));
    return { p, idx, feedback, playedAndRated, claimed, claimable, group, heat };
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
              : `<button class="btn btn--brand btn--sm" type="button" data-play-go="${p.id}">游玩并评价</button>`;
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
          TapTap 的坚持： · <b>零分成</b> · <b>评分真实</b>
        </p>
        <div class="divider"></div>
        <div class="list">${mutualList}</div>
      </section>
    </div>

    <div class="home-module" id="section-gamejam">
      <section class="card">
        <div class="row">
          <p class="h2 grow">TapTap制造 GameJam 游戏体验</p>
        </div>
        <p class="muted small" style="margin:6px 0 0">
          玩游戏写评价领取积分，请友善交流，支持开发者发布作品。
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
  `;
}

function wireDiscoverInline() {
  const playOrderList = (st) =>
    PLAYTEST_GAMES.map((p, idx) => {
      const feedback = String(st.playtest.feedback?.[p.id] || "").trim();
      const playedAndRated = st.playtest.completed.includes(p.id) && !!feedback;
      const claimed = (st.playtest.claimed || []).includes(p.id);
      const claimable = playedAndRated && !claimed;
      const group = claimable ? 0 : claimed ? 2 : 1;
      const heat = Math.max(0, Number(p.heat || 0));
      return { id: p.id, idx, group, heat };
    }).sort((a, b) => (a.group - b.group) || (b.heat - a.heat) || (a.idx - b.idx));

  const playPageIndexOf = (st, gameId) => {
    const arr = playOrderList(st);
    const pos = arr.findIndex((x) => x.id === gameId);
    return pos < 0 ? 0 : Math.floor(pos / 3);
  };

  const wireStepMarquees = () => {
    const prefersReduce = !!window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    if (prefersReduce) return;

    /** @type {HTMLElement[]} */
    const tracks = Array.from(document.querySelectorAll(".marquee__track"));
    tracks.forEach((track) => {
      if (!track) return;
      if (track.getAttribute("data-marquee-wired") === "1") return;
      track.setAttribute("data-marquee-wired", "1");

      const items = Array.from(track.querySelectorAll(".marquee__item"));
      if (items.length < 2) return;

      // Mark: stop CSS animation, use step-scrolling with pause.
      track.classList.add("marquee__track--step");

      // The view duplicates items twice for seamless loop.
      const total = items.length;
      const originalCount = total % 2 === 0 ? total / 2 : total;
      if (originalCount <= 1) return;

      // Make the viewport show exactly ONE item (avoid leaking next row)
      const viewport = track.closest?.(".marquee");
      const firstItem = items[0];
      if (viewport && firstItem) {
        const h = Math.max(0, Math.round(firstItem.getBoundingClientRect().height || firstItem.offsetHeight || 0));
        if (h >= 16) viewport.style.height = `${h}px`;
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
        return (a?.offsetHeight || 22) + 8; // fallback: height + gap
      })();

      const pauseMs = 1200; // pause when a row is fully visible
      const moveMs = 240; // faster move to next row
      let idx = 0;

      // Ensure initial position
      track.style.transform = "translateY(0px)";
      track.style.transition = "none";

      const tick = () => {
        if (!document.contains(track)) return;
        setTimeout(() => {
          if (!document.contains(track)) return;
          // If we're currently showing the duplicated "first" row (idx===originalCount),
          // reset back to 0 RIGHT BEFORE moving to next, so the loop is seamless.
          let nextIdx = idx + 1;
          if (idx >= originalCount) {
            track.style.transition = "none";
            track.style.transform = "translateY(0px)";
            // force style flush so the next transition applies
            void track.offsetHeight;
            idx = 0;
            nextIdx = 1;
          }

          track.style.transition = `transform ${moveMs}ms ease-out`;
          track.style.transform = `translateY(-${step * nextIdx}px)`;
          idx = nextIdx;

          // After movement, keep the row visible for pauseMs (handled by next tick)
          setTimeout(() => tick(), moveMs + 40);
        }, pauseMs);
      };

      tick();
    });
  };

  const openMutualPost = (gameId) => {
    const g = MUTUAL_GAMES.find((x) => x.id === gameId);
    if (!g) return;
    const body = `
      <div class="small" style="line-height:1.55">
        <div class="hint">
          <b>留言跳转</b>：提前创建好的帖子详情页，让大家来评论盖楼。每个游戏一个帖子。
        </div>
        <div class="divider"></div>
        <div class="muted small">当前游戏：<b>${escapeHtml(g.title)}</b></div>
      </div>
    `;
    const footer = `<button class="btn btn--brand" id="btnCloseMutualPost">知道了</button>`;
    openModal({ title: "留言", bodyHtml: body, footerHtml: footer });
    $("#btnCloseMutualPost")?.addEventListener("click", closeModal);
  };

  $$("[data-mutual-open]").forEach((el) =>
    el.addEventListener("click", (e) => {
      e.stopPropagation();
      openMutualPost(el.dataset.mutualOpen);
    }),
  );

  $$("[data-mutual-marquee]").forEach((el) =>
    el.addEventListener("click", (e) => {
      e.stopPropagation();
      const gameId = el.dataset.mutualMarquee;
      const g = MUTUAL_GAMES.find((x) => x.id === gameId);
      if (!g) return;
      const comment = String(el.getAttribute("data-mutual-comment") || "").trim();
      const likes = Number(el.dataset.mutualLikes || 0);
      const postUrl = String(g.postUrl || "").trim() || g.url;
      const body = `
        <div class="small" style="line-height:1.55">
          <div class="hint">
            <b>跳转评论</b>：进入创建好的帖子详情页，并自动滚动/定位到这句评论的位置。
          </div>
          <div class="divider"></div>
          <div class="small"><b>将定位到的评论</b></div>
          <div class="item" style="margin-top:8px; border-color: rgba(0,184,148,.28); background: rgba(0,184,148,.06)">
            <div class="small">${escapeHtml(comment)}</div>
            <div class="muted small" style="margin-top:8px">👍 ${fmt(likes)} · 来自：${escapeHtml(g.title)}</div>
          </div>
        </div>
      `;
      const footer = `<button class="btn btn--brand" id="btnCloseMutualJump">知道了</button>`;
      openModal({ title: "跳转", bodyHtml: body, footerHtml: footer });
      $("#btnCloseMutualJump")?.addEventListener("click", closeModal);
    }),
  );

  $$("[data-mutual-detail]").forEach((el) =>
    el.addEventListener("click", (e) => {
      e.stopPropagation();
      const g = MUTUAL_GAMES.find((x) => x.id === el.dataset.mutualDetail);
      if (!g) return;
      try {
        window.open(g.url, "_blank", "noopener,noreferrer");
      } catch {
        openModal({
          title: "跳转",
          bodyHtml: `<div class="muted small">可跳转：<span class="mono">${g.url}</span></div>`,
          footerHtml: `<button class="btn btn--brand" id="btnCloseDeeplink">知道了</button>`,
        });
        $("#btnCloseDeeplink")?.addEventListener("click", closeModal);
      }
    }),
  );

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
            <b>游玩并评价</b>：会跳转到游戏详情页，填写评价后可领取积分。
            <div class="muted small" style="margin-top:6px">此 demo 为测试机制：点击下方按钮即可视为“已玩过且已评价”，解锁“领奖”。</div>
          </div>
          <div class="divider"></div>
          <div class="small"><b>${escapeHtml(p.title)}</b></div>
          <div class="muted small" style="margin-top:6px">${escapeHtml(p.desc)}</div>
        </div>
      `;
      const footer = `
        <button class="btn btn--brand" id="btnSubmitPlayReview">已写好评价</button>
        <button class="btn" id="btnCancelPlayReview">稍后再说</button>
      `;
      openModal({ title: "试玩", bodyHtml: body, footerHtml: footer });
      $("#btnCancelPlayReview")?.addEventListener("click", closeModal);
      $("#btnSubmitPlayReview")?.addEventListener("click", () => {
        state.playtest.feedback[p.id] = String(state.playtest.feedback?.[p.id] || "").trim() || "（测试）已评价";
        if (!state.playtest.completed.includes(p.id)) state.playtest.completed.push(p.id);
        saveState();
        closeModal();
        requestCarouselInit("playCarousel", playPageIndexOf(state, p.id));
        render();
        toast("已提交评价，可领奖");
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

      const feedback = String(state.playtest.feedback?.[p.id] || "").trim();
      const playedAndRated = state.playtest.completed.includes(p.id) && !!feedback;
      if (!playedAndRated) return toast("请先试玩并写一句评价");
      if ((state.playtest.claimed || []).includes(p.id)) return toast("已领取过该奖励");

      state.playtest.claimed.push(p.id);
      addPoints(state, p.points);
      saveState();
      requestCarouselInit("playCarousel", 0);
      render();
      flyGrantToSticky({ fromRect, grant: { points: p.points, coupons: 0 } });
    }),
  );

  wireStepMarquees();
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
  const equipped = kind === "frame" ? s.equipped.frame === item.id : s.equipped.badge === item.id;
  const canBuy = s.points >= item.cost;

  const rightBtn = owned
    ? `<button class="btn ${equipped ? "" : "btn--brand"}" data-equip="${kind}:${item.id}">${equipped ? "已装备" : "装备"}</button>`
    : `<button class="btn btn--brand" data-buy="${kind}:${item.id}" ${canBuy ? "" : "disabled"}>${canBuy ? "兑换" : "积分不足"}</button>`;

  return `
    <div class="item">
      <div class="row">
        <div class="equip ${kind === "frame" ? "equip--frame" : "equip--badge"}">${item.icon}</div>
        <div class="grow">
          <div class="item__title">${item.title}</div>
          <div class="item__desc">兑换后收藏为纪念（本期不做个人资料展示）；后续阶段可扩展展示位。</div>
        </div>
        <span class="pill">-${item.cost}</span>
      </div>
      <div class="item__meta">
        <span class="tag">${owned ? "已拥有" : "未拥有"}</span>
        ${rightBtn}
      </div>
    </div>
  `;
}

function wireShop() {
  $$("[data-buy]").forEach((b) =>
    b.addEventListener("click", () => {
      const [kind, id] = (b.dataset.buy || "").split(":");
      const item = kind === "frame" ? SHOP_ITEMS.frames.find((x) => x.id === id) : SHOP_ITEMS.badges.find((x) => x.id === id);
      if (!item) return;
      if (state.points < item.cost) return toast("积分不足");
      state.points -= item.cost;
      if (kind === "frame") state.inventory.frames.push(id);
      if (kind === "badge") state.inventory.badges.push(id);
      // auto-equip first time
      if (kind === "frame" && !state.equipped.frame) state.equipped.frame = id;
      if (kind === "badge" && !state.equipped.badge) state.equipped.badge = id;
      saveState();
      render();
      toast(`已兑换：${item.title}`);
    }),
  );

  $$("[data-equip]").forEach((b) =>
    b.addEventListener("click", () => {
      const [kind, id] = (b.dataset.equip || "").split(":");
      if (kind === "frame") state.equipped.frame = id;
      if (kind === "badge") state.equipped.badge = id;
      saveState();
      render();
      toast("已设置为当前");
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

      <div class="muted small">当前默认使用 <b>测试用户</b> 数据进行演示。</div>
      <div class="divider"></div>

      <div>
        <div><b>生涯数据（JSON，可编辑）</b></div>
        <div class="muted small">用于控制回顾卡片的数据结构与展示内容（为 0 的卡片不会展示）。</div>
        <textarea id="txtRecapJson" rows="10" style="width:100%; margin-top:8px; border-radius:12px; border:1px solid var(--border); background: rgba(255,255,255,.02); color: var(--text); padding:10px; resize:vertical; font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace; font-size:12px; line-height:1.45;"></textarea>
        <div class="row" style="justify-content:flex-end; margin-top:8px">
          <button class="btn btn--ghost" id="btnResetRecapJson" type="button">恢复默认生涯数据</button>
        </div>
      </div>

      <div class="divider"></div>

      <div>
        <div><b>绑定steam/游戏角色</b></div>
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

    btn.addEventListener(
      "click",
      () => {
        opening.classList.add("opening--exit");
        // Reveal the app only after exit animation starts (avoid any flash)
        setTimeout(() => {
          appRoot.classList.remove("hidden");
        }, 80);
        setTimeout(() => {
          opening.classList.add("hidden");
          opening.setAttribute("aria-hidden", "true");
          resolve();
        }, prefersReduce ? 0 : 340);
      },
      { once: true },
    );
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
    location.hash = "#/firstrecap";
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

