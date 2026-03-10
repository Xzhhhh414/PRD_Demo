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
 *   daily?: { lotteryDayKey?: string; checkinDays?: number; checkinStreak?: number; lastCheckinDay?: string; welfareLotteryDay?: string };
 *   lotteryWins?: Array<{id:string, kind:string, title:string, icon:string, time:string}>;
 *   exchangeOwned?: string[];
 *   exchangeRecords?: Array<{id:string, title:string, icon:string, time:string, type?:string, key?:string}>;
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
      regDate: "2018年3月6日",
      spendTotal: 1288.5,
      spendGameCount: 12,
      platformBadgesTotal: 86,
      blackGoldBadgesCount: 3,

      // 玩游戏
      gamesPlayedTotal: 368,
      playTimeHours: 2680,
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
      // 类别偏好雷达图 (0~100)
      radarAction: 85,
      radarStrategy: 62,
      radarRPG: 78,
      radarAdventure: 50,
      radarSim: 35,
      radarCasual: 70,
      // 游戏成就
      achievementGamesCount: 14,
      achievementsTotal: 326,
      platinumAchievementsTotal: 18,
      // 我的挚爱
      belovedGameName: "《哈迪斯》",
      belovedGameIcon: "💀",
      belovedGameHours: 1280,
      exclusivePlayed: 12,
      editorPickPlayed: 23,
      // 夜行者
      peakTimeSlot: "6PM-12AM",
      lateNightOpenCount: 156,

      // 社区
      reviewsCount: 38,
      reviewLikesTotal: 560,
      zuitiCount: 8,
      taptapCriticYears: [2018, 2019, 2020, 2021, 2022],
      communityPublished: 156,
      communityLikesGiven: 8600,
      communityLikesReceived: 12400,
      nightSurfDays: 46,
      friendsCount: 268,
      followersCount: 420,

      // 开发者
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

      // 预约
      reserveCount: 1280,
      reserveGames: ["明日方舟", "原神", "崩坏：星穹铁道", "鸣潮", "绝区零"],

      // legacy (recapDataForState enrichment)
      gamesPlayed: 128,
      reviewsHelpful: 42,
      likesCount: 1860,
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
  { id: "p1", title: "《雾灯之下》", desc: "10 分钟试玩 · 轻解谜 · 叙事氛围", tags: ["轻解谜", "叙事", "氛围感", "10分钟"], heat: 300, url: "https://www.taptap.cn/app/300001" },
  { id: "p2", title: "《纸片机甲工坊》", desc: "10 分钟试玩 · 组装 · 轻战斗", tags: ["组装", "轻战斗", "机甲", "10分钟"], heat: 275, url: "https://www.taptap.cn/app/300002" },
  { id: "p3", title: "《夜行列车·7号车厢》", desc: "10 分钟试玩 · 推理 · 多结局", tags: ["推理", "多结局", "悬疑", "10分钟"], heat: 250, url: "https://www.taptap.cn/app/300003" },
  { id: "p4", title: "《像素海盗电台》", desc: "10 分钟试玩 · 节奏 · 轻 Roguelike", tags: ["节奏", "Roguelike", "像素", "10分钟"], heat: 225, url: "https://www.taptap.cn/app/300004" },
  { id: "p5", title: "《月面快递》", desc: "10 分钟试玩 · 经营 · 轻策略", tags: ["经营", "轻策略", "治愈", "10分钟"], heat: 200, url: "https://www.taptap.cn/app/300005" },
  { id: "p6", title: "《玻璃花园》", desc: "10 分钟试玩 · 叙事 · 互动选择", tags: ["叙事", "互动选择", "情感", "10分钟"], heat: 175, url: "https://www.taptap.cn/app/300006" },
  { id: "p7", title: "《重力回廊》", desc: "10 分钟试玩 · 动作 · 平台跳跃", tags: ["动作", "平台跳跃", "挑战", "10分钟"], heat: 150, url: "https://www.taptap.cn/app/300007" },
  { id: "p8", title: "《纸上迷宫》", desc: "10 分钟试玩 · 解谜 · 手绘风", tags: ["解谜", "手绘", "烧脑", "10分钟"], heat: 125, url: "https://www.taptap.cn/app/300008" },
  { id: "p9", title: "《喵喵合唱团》", desc: "10 分钟试玩 · 音游 · 合作", tags: ["音游", "合作", "可爱", "10分钟"], heat: 100, url: "https://www.taptap.cn/app/300009" },
  { id: "p10", title: "《星尘信号》", desc: "10 分钟试玩 · 科幻 · 解谜", tags: ["科幻", "解谜", "太空", "10分钟"], heat: 310, url: "https://www.taptap.cn/app/300010" },
  { id: "p11", title: "《竹林深处》", desc: "10 分钟试玩 · 武侠 · 动作", tags: ["武侠", "动作", "水墨", "10分钟"], heat: 290, url: "https://www.taptap.cn/app/300011" },
  { id: "p12", title: "《咕噜厨房》", desc: "10 分钟试玩 · 经营 · 休闲", tags: ["经营", "休闲", "美食", "10分钟"], heat: 260, url: "https://www.taptap.cn/app/300012" },
  { id: "p13", title: "《深渊潜行者》", desc: "10 分钟试玩 · 肉鸽 · 策略", tags: ["肉鸽", "策略", "暗黑", "10分钟"], heat: 240, url: "https://www.taptap.cn/app/300013" },
  { id: "p14", title: "《时光邮局》", desc: "10 分钟试玩 · 叙事 · 治愈", tags: ["叙事", "治愈", "文字", "10分钟"], heat: 220, url: "https://www.taptap.cn/app/300014" },
];

const CHECKIN_COINS_PER_GAME = 50;

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

// 点券功能暂时下线（先保留代码，后续可能会恢复）
const ENABLE_COUPONS = false;

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

const LOTTERY_COST = 100;
const LOTTERY_POOL = [
  // 头像框
  { id: "lp_frame_gold",   icon: "🖼️", title: "金色十周年头像框",   kind: "frame",   qty: 500 },
  { id: "lp_frame_retro",  icon: "🎞️", title: "复古胶片头像框",     kind: "frame",   qty: 400 },
  // 点券
  { id: "lp_coupon50",     icon: "🎫", title: "50 点券",             kind: "coupon",  qty: 1000, value: 50 },
  { id: "lp_coupon20",     icon: "🎟️", title: "20 点券",            kind: "coupon",  qty: 2000, value: 20 },
  // 优惠券
  { id: "lp_voucher10",    icon: "🏷️", title: "满50减10优惠券",     kind: "voucher", qty: 1500, desc: "购买游戏满50元减10元，有效期30天" },
  { id: "lp_voucher5",     icon: "🎀", title: "满30减5优惠券",       kind: "voucher", qty: 2000, desc: "购买游戏满30元减5元，有效期30天" },
  // 云玩时长
  { id: "lp_cloud60",      icon: "☁️", title: "云玩时长 60 分钟",    kind: "cloud",   qty: 800, minutes: 60 },
  { id: "lp_cloud30",      icon: "🌤️", title: "云玩时长 30 分钟",   kind: "cloud",   qty: 1200, minutes: 30 },
  // CDKey
  { id: "lp_cdkey_a",      icon: "🔑", title: "游戏A CDKey",          kind: "cdkey",   qty: 200, cdkey: "TAPTAP-10Y-XXXX-AAAA" },
  { id: "lp_cdkey_b",      icon: "🗝️", title: "游戏B CDKey",        kind: "cdkey",   qty: 0, cdkey: "TAPTAP-10Y-XXXX-BBBB" },
];

const EXCHANGE_ITEMS = [
  { id: "ex_frame_10y",    icon: "🟩", title: "十周年头像框",   cost: 120, qty: 500 },
  { id: "ex_badge_10y",    icon: "🛠️", title: "十周年徽章",    cost: 200, qty: 300 },
  { id: "ex_frame_retro",  icon: "🖼️", title: "复古头像框",    cost: 150, qty: 400 },
  { id: "ex_badge_star",   icon: "⭐", title: "星耀徽章",       cost: 180, qty: 200 },
  { id: "ex_frame_neon",   icon: "💜", title: "霓虹头像框",     cost: 160, qty: 350 },
  { id: "ex_badge_fire",   icon: "🔥", title: "烈焰徽章",       cost: 220, qty: 150 },
  { id: "ex_frame_pixel",  icon: "👾", title: "像素头像框",     cost: 100, qty: 600 },
  { id: "ex_badge_crown",  icon: "👑", title: "皇冠徽章",       cost: 250, qty: 0 },
  { id: "ex_frame_bloom",  icon: "🌸", title: "花语头像框",     cost: 130, qty: 450 },
  { id: "ex_badge_bolt",   icon: "⚡", title: "闪电徽章",       cost: 170, qty: 250 },
  { id: "ex_frame_ocean",  icon: "🌊", title: "海浪头像框",     cost: 140, qty: 380 },
  { id: "ex_badge_gem",    icon: "💎", title: "宝石徽章",       cost: 300, qty: 100 },
  { id: "ex_gift_a",       icon: "🎮", title: "游戏A 礼包码",   cost: 80,  qty: 999, type: "giftcode", key: "GIFT-TAPTAP-10Y-AAAA" },
  { id: "ex_gift_b",       icon: "🎲", title: "游戏B 礼包码",   cost: 80,  qty: 999, type: "giftcode", key: "GIFT-TAPTAP-10Y-BBBB" },
  { id: "ex_gift_c",       icon: "🕹️", title: "游戏C 礼包码",   cost: 100, qty: 999, type: "giftcode", key: "GIFT-TAPTAP-10Y-CCCC" },
];

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
  { id: "ma_bunny", icon: "🐰", game: "TapTap", label: "嗒啦啦", img: "tarara01.png" },
  { id: "ma_cat", icon: "🐱", game: "TapTap", label: "嗒啦啦", img: "tarara02.png" },
  { id: "ma_robot", icon: "🤖", game: "游戏名字", label: "角色名字", isGameRole: true },
  { id: "ma_fox", icon: "🦊", game: "游戏名字", label: "角色名字", isGameRole: true },
  { id: "ma_panda", icon: "🐼", game: "游戏名字", label: "角色名字", isGameRole: true },
  { id: "ma_penguin", icon: "🐧", game: "游戏名字", label: "角色名字", isGameRole: true },
];

/** 渲染角色头像内容 */
function avatarDisplayHtml(avatar, nickname, { size = "normal" } = {}) {
  if (avatar.img) {
    const cls = size === "small" ? "mem-avatar--img mem-avatar--img-sm" : "mem-avatar--img";
    return `<img class="${cls}" src="${avatar.img}" alt="${escapeHtml(avatar.label)}" draggable="false" />`;
  }
  if (avatar.isGameRole) {
    const cls = size === "small" ? "mem-avatar--role mem-avatar--role-sm" : "mem-avatar--role";
    return `<span class="${cls}"><span class="mem-avatar--role__text">游戏角色</span></span>`;
  }
  return escapeHtml(avatar.icon);
}

const MEM_SHOP = {
  frame: SHOP_ITEMS.frames[0],
  badge: SHOP_ITEMS.badges[0],
  unlocks: [
    { id: "u_colors_pack", title: "纪念卡配色包", desc: "解锁更多卡片颜色", cost: 80, kind: "colors", unlockIds: ["mc_pink", "mc_mint", "mc_sky", "mc_lav", "mc_sand"] },
    { id: "u_stickers_pack", title: "纪念卡贴纸包", desc: "解锁更多小贴纸", cost: 80, kind: "stickers", unlockIds: ["ms_heart", "ms_bulb", "ms_crown", "ms_note", "ms_cat", "ms_trophy", "ms_cloud"] },
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
    playtest: { completed: [], feedback: {}, claimed: [], checkedInGames: [] },
    memorial: {
      tab: "avatar",
      // `colorId` now represents background theme (with patterns)
      colorId: "mc_cream",
      // Multi-sticker placement
      stickers: [{ id: "ms_star", x: 82, y: 18, s: 1, r: 0 }],
      activeStickerIdx: 0,
      // Legacy field (kept for migration)
      stickerId: "ms_star",
      avatarId: "ma_bunny",
    },
    memorialUnlocks: { colors: ["mc_cream"], stickers: ["ms_star"], avatars: ["ma_bunny", "ma_cat", "ma_robot", "ma_fox", "ma_panda", "ma_penguin"] },
    daily: { lotteryDayKey: "", checkinDays: 0, checkinStreak: 0, lastCheckinDay: "", welfareLotteryDay: "" },
    lotteryWins: [],
    exchangeOwned: [],
    exchangeRecords: [],
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
    if (!Array.isArray(merged.playtest.checkedInGames)) merged.playtest.checkedInGames = [];

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
    // 所有角色默认拥有，无需纪念币兑换
    MEM_AVATARS.forEach((av) => {
      if (!merged.memorialUnlocks.avatars.includes(av.id)) merged.memorialUnlocks.avatars.push(av.id);
    });

    merged.daily = { ...fallback.daily, ...(parsed?.daily || {}) };
    if (!merged.daily || typeof merged.daily !== "object") merged.daily = { ...fallback.daily };
    if (!String(merged.daily.lotteryDayKey || "").trim()) merged.daily.lotteryDayKey = "";
    if (!Number.isFinite(merged.daily.checkinDays)) merged.daily.checkinDays = 0;
    if (!Number.isFinite(merged.daily.checkinStreak)) merged.daily.checkinStreak = 0;
    if (!String(merged.daily.lastCheckinDay || "").trim()) merged.daily.lastCheckinDay = "";
    if (!String(merged.daily.welfareLotteryDay || "").trim()) merged.daily.welfareLotteryDay = "";

    if (!Array.isArray(merged.lotteryWins)) merged.lotteryWins = [];
    merged.lotteryWins = merged.lotteryWins.map((w) => {
      if (typeof w === "string") {
        const pool = LOTTERY_POOL.find((p) => p.id === w);
        return { id: w, kind: pool?.kind || "", title: pool?.title || w, icon: pool?.icon || "🎁", time: "" };
      }
      return w;
    });
    if (!Array.isArray(merged.exchangeOwned)) merged.exchangeOwned = [];
    if (!Array.isArray(merged.exchangeRecords)) merged.exchangeRecords = [];

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
  const clone = { ...state };
  Object.keys(clone).forEach((k) => { if (k.startsWith("_")) delete clone[k]; });
  localStorage.setItem(STORAGE_KEY, JSON.stringify(clone));
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
  const fixed = (points, coupons = 0) => ({ points, coupons: ENABLE_COUPONS ? coupons : 0 });
  const daysActive = Number(recap?.daysActive || 0);
  const gamesPlayed = Number(recap?.gamesPlayed || 0);
  const reviewsHelpful = Number(recap?.reviewsHelpful || 0);
  const spendTotal = Number(recap?.spendTotal || 0);

  return {
    snap_reg_active:      fixed(20),
    snap_time_habit:      fixed(10),
    snap_spend:           fixed(15),
    snap_reserve:         fixed(10),
    snap_top3games:       fixed(15),
    snap_playtime:        fixed(15),
    snap_profile:         fixed(10),
    snap_achievements:    fixed(15),
    snap_beloved:         fixed(20),
    snap_tapexclusive:    fixed(15),
    snap_editorpick:      fixed(15),
    snap_review_voice:    fixed(15),
    snap_community_pub:   fixed(10),
    snap_community_likes: fixed(10),
    snap_night_community: fixed(10),
    snap_badges:          fixed(15),
    snap_friend_msgs:     fixed(10),
    snap_dev_create:      fixed(20),
  };
}

function getMaxClaims(rewardId, snap) {
  const td = calcDaysSince(parseCnDateToTs(snap?.regDate));
  const years = Math.floor((td || 0) / 365);
  switch (rewardId) {
    case "snap_reg_active": return Math.min(10, Math.max(1, years));
    case "snap_time_habit": return Math.min(10, Math.max(1, Math.floor(Number(snap?.lateNightOpenCount || 0) / 50)));
    case "snap_reserve": return Math.min(10, Math.max(1, Math.floor(Number(snap?.reserveCount || 0) / 10)));
    case "snap_spend": return Math.min(10, Math.max(1, Math.floor(Number(snap?.spendTotal || 0) / 100)));
    case "snap_top3games": return Math.min(10, Math.max(1, Math.floor(Number(snap?.gamesPlayedTotal || 0) / 50)));
    case "snap_playtime": return Math.min(10, Math.max(1, Math.floor(Number(snap?.playTimeHours || 0) / 200)));
    case "snap_profile": {
      const dims = [snap?.radarAction, snap?.radarStrategy, snap?.radarRPG, snap?.radarAdventure, snap?.radarSim, snap?.radarCasual];
      return Math.min(10, Math.max(1, dims.filter(v => Number(v || 0) > 0).length));
    }
    case "snap_achievements": {
      const base = Math.max(1, Math.floor(Number(snap?.achievementsTotal || 0) / 50));
      return Math.min(10, base + Number(snap?.platinumAchievementsTotal || 0));
    }
    case "snap_beloved": return 1;
    case "snap_tapexclusive": return Math.min(10, Math.max(1, Math.floor(Number(snap?.exclusivePlayed || 0) / 10)));
    case "snap_editorpick": return Math.min(10, Math.max(1, Math.floor(Number(snap?.editorPickPlayed || 0) / 10)));
    case "snap_review_voice": {
      const base = Math.max(1, Math.floor(Number(snap?.reviewsCount || 0) / 50));
      return Math.min(10, base + Number(snap?.zuitiReviewsCount || snap?.zuitiCount || 0));
    }
    case "snap_community_pub": return Math.min(10, Math.max(1, Math.floor(Number(snap?.communityPublished || 0) / 100)));
    case "snap_community_likes": return Math.min(10, Math.max(1, Math.floor(Number(snap?.communityLikesReceived || 0) / 500)));
    case "snap_night_community": return Math.min(10, Math.max(1, Math.floor(Number(snap?.nightSurfDays || 0) / 15)));
    case "snap_badges": {
      const base = Math.max(1, Math.floor(Number(snap?.platformBadgesTotal || 0) / 10));
      return Math.min(10, base + Number(snap?.blackGoldBadgesCount || 0));
    }
    case "snap_friend_msgs": {
      const fc = Math.floor(Number(snap?.friendsCount || 0) / 50);
      const fl = Math.floor(Number(snap?.followersCount || 0) / 500);
      return Math.min(10, Math.max(1, fc + fl));
    }
    case "snap_dev_create": {
      const cnt = (Array.isArray(snap?.devGames) ? snap.devGames : []).filter(g => String(g.name || "").trim()).length;
      return Math.min(10, Math.max(1, cnt));
    }
    default: return 1;
  }
}

function getCardClaimedTimes(s, rewardId) {
  if (rewardId === "snap_reg_active" && Number(s.regClaimedTimes || 0) > 0) {
    return Number(s.regClaimedTimes);
  }
  return Number((s.cardClaimedTimes || {})[rewardId] || 0);
}

function incrCardClaimedTimes(s, rewardId) {
  if (!s.cardClaimedTimes) s.cardClaimedTimes = {};
  const prev = getCardClaimedTimes(s, rewardId);
  s.cardClaimedTimes[rewardId] = prev + 1;
  if (rewardId === "snap_reg_active") s.regClaimedTimes = prev + 1;
}

function resetCareerSnapshot(s) {
  s.enteredAt = 0;
  s.careerSnapshotPreset = s.userPreset;
  s.careerSnapshot = null;
  s.regClaimedTimes = 0;
  s.cardClaimedTimes = {};
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
  if (!ENABLE_COUPONS) return;
  s.walletCoupons = Math.max(0, (s.walletCoupons || 0) + delta);
}

function calcCareerCoinsTotal(s) {
  const grants = s.careerSnapshot?.grants;
  const snap = s.careerSnapshot?.recap;
  if (!grants || !snap) return 0;
  let total = 0;
  for (const id of Object.keys(grants)) {
    total += (grants[id].points || 0) * getMaxClaims(id, snap);
  }
  return total;
}

function snapshotClaimGrant(s, rewardId) {
  const grants = s.careerSnapshot?.grants;
  const base = grants?.[rewardId];
  if (!base) return { points: 10, coupons: 0 };
  return base;
}

function hasClaimed(s, rewardId) {
  return (s.claimedRewardIds || []).includes(rewardId);
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

// ── 数据规则说明弹窗 ──
function openDataRulesModal() {
  const body = `
    <div class="data-rules-modal">
      <div class="data-rules-modal__section">
        <div class="data-rules-modal__title">数据说明</div>
        <ul class="data-rules-modal__list">
          <li>消费包括买断制手游（含DLC）、买断制PC游戏（含DLC）、云玩等所有消费内容，不含 Steam CDKey</li>
          <li>深夜定义为 22:00–4:59</li>
        </ul>
      </div>
      <div class="data-rules-modal__section">
        <div class="data-rules-modal__title">领奖次数规则</div>
        <ul class="data-rules-modal__list">
          <li><b>相伴时光</b>：每多 1 年相伴年数增加 1 次，最多 10 次</li>
          <li><b>夜行者</b>：每 50 次深夜打开增加 1 次，最多 10 次</li>
          <li><b>剁手记录</b>：每消费 100 元增加 1 次，最多 10 次</li>
          <li><b>新作预约</b>：每预约 10 款增加 1 次，最多 10 次</li>
          <li><b>冒险旅程</b>：每玩 50 款游戏增加 1 次，最多 10 次</li>
          <li><b>游玩时光</b>：每游玩 200 小时增加 1 次，最多 10 次</li>
          <li><b>喜爱类型</b>：每多涉猎 1 个类型增加 1 次，最多 10 次</li>
          <li><b>游戏成就</b>：每 50 个成就增加 1 次，每个白金成就额外增加 1 次，最多 10 次</li>
          <li><b>我的挚爱</b>：固定 1 次</li>
          <li><b>独家宝藏</b>：每玩 10 款独家游戏增加 1 次，最多 10 次</li>
          <li><b>编辑之选</b>：每玩 10 款编辑推荐游戏增加 1 次，最多 10 次</li>
          <li><b>玩家之声</b>：每 50 条评价增加 1 次，每条嘴替评价额外增加 1 次，最多 10 次</li>
          <li><b>社区足迹</b>：每发布 100 条帖子或回复增加 1 次，最多 10 次</li>
          <li><b>社区点赞</b>：每获得 500 个赞增加 1 次，最多 10 次</li>
          <li><b>深夜冲浪</b>：每 15 天深夜冲浪增加 1 次，最多 10 次</li>
          <li><b>徽章墙</b>：每 10 枚徽章增加 1 次，每枚黑金徽章额外增加 1 次，最多 10 次</li>
          <li><b>同行伙伴</b>：每 50 位好友增加 1 次，每 500 位粉丝额外增加 1 次，最多 10 次</li>
          <li><b>游戏创作</b>：每多 1 款作品增加 1 次，最多 10 次</li>
        </ul>
      </div>
    </div>
  `;
  openModal({ title: "数据规则说明", bodyHtml: body, variant: "data-rules" });
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
        ${spent ? `<div class="muted small" style="margin-top:6px">本次消耗 <b>${fmt(spent)}</b> 纪念币</div>` : ""}
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

let _skipClaimModal = false;

function openRegClaimModal({ coinsEarned, remaining, fromRect, onDone }) {
  const poolIcons = EXCHANGE_ITEMS.slice(0, 4).map(item =>
    `<div class="reg-reward-modal__pool-item"><span class="reg-reward-modal__pool-icon">${item.icon}</span><span class="reg-reward-modal__pool-name">${escapeHtml(item.title)}</span></div>`
  ).join("");
  const body = `
    <div class="reg-reward-modal">
      <div class="reg-reward-modal__coins" style="margin-top:8px">
        <span class="reg-reward-modal__coin-icon">\u{1F4B0}</span>
        <span class="reg-reward-modal__coin-num">${coinsEarned}</span>
        <span class="reg-reward-modal__coin-unit">\u4E2A</span>
      </div>
      <div class="reg-reward-modal__hint">\u7EAA\u5FF5\u5E01\u53EF\u5728\u5151\u6362\u533A\u5151\u6362\u5956\u54C1</div>
      <div class="reg-reward-modal__pool-wrap">
        <div class="reg-reward-modal__pool-label">\u7EAA\u5FF5\u5E01\u53EF\u5151\u6362</div>
        <div class="reg-reward-modal__pool">${poolIcons}</div>
      </div>
    </div>
  `;
  const leftBtnLabel = remaining > 0 ? "继续领奖" : "开心收下";
  const footer = `
    <div style="width:100%;display:flex;justify-content:center;margin-bottom:8px">
      <label style="display:flex;align-items:center;gap:6px;font-size:12px;color:rgba(255,255,255,.6);cursor:pointer">
        <input type="checkbox" id="chkSkipClaimModal" style="cursor:pointer" />
        不再提示
      </label>
    </div>
    <button class="btn reg-reward-modal__btn reg-reward-modal__btn--continue" id="btnRegContinue">${leftBtnLabel}</button>
    <button class="btn btn--brand reg-reward-modal__btn reg-reward-modal__btn--exchange" id="btnRegExchange">\u53BB\u5151\u6362</button>
  `;
  openModal({
    title: "\u606D\u559C\u83B7\u5F97\u7EAA\u5FF5\u5E01",
    bodyHtml: body,
    footerHtml: footer,
    variant: "reg-reward",
    hideClose: true,
    lockClose: true,
  });
  $("#btnRegContinue")?.addEventListener("click", () => {
    if ($("#chkSkipClaimModal")?.checked) _skipClaimModal = true;
    closeModal();
    flyGrantToSticky({ fromRect, grant: { points: coinsEarned, coupons: 0 } }).then(() => {
      render();
      if (onDone) onDone();
    });
  });
  $("#btnRegExchange")?.addEventListener("click", () => {
    if ($("#chkSkipClaimModal")?.checked) _skipClaimModal = true;
    closeModal();
    render();
    if (onDone) onDone();
    openShopModal();
  });
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
          flyChip({ label: `+${fmt(Number(grant.points || 0))} 纪念币`, start, end, kind: "points" }).then(() => pulsePill(target)),
        );
      }
    }
    if (ENABLE_COUPONS && Number(grant?.coupons || grant?.walletCoupons || grant?.coupon || 0) > 0) {
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

function fmtCap(n, max) {
  return Number(n) > max ? max + "+" : fmt(Number(n));
}

function fmtWan(n) {
  const v = Number(n || 0);
  if (v <= 0) return "0";
  if (v < 10000) return fmt(v);
  if (v >= 99990000) return "999.9万+";
  const w = v / 10000;
  return (w >= 1 && w % 1 < 0.05) ? Math.floor(w) + "万" : w.toFixed(1) + "万";
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
    sharerecap: "分享 TapTap 十周年",
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

let _openingGateActive = false;
function showOpeningGate() {
  if (_openingGateActive) return;
  _openingGateActive = true;
  const opening = document.getElementById("opening");
  const appRoot = document.getElementById("app");
  if (opening) {
    opening.classList.remove("hidden", "opening--exit");
    opening.removeAttribute("aria-hidden");
  }
  if (appRoot) appRoot.classList.add("hidden");
  state.entryGateDone = false;
  saveState();
  runOpeningGate().then(() => {
    _openingGateActive = false;
    state.entryGateDone = true;
    saveState();
    location.hash = "#/home";
    render();
  });
}

function render() {
  const route = getRoute();

  if (!state.loggedIn) {
    showOpeningGate();
    return;
  }
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
    if (route !== "home") {
      wireRecapInline._didAutoFocus = false;
      _skipClaimModal = false;
    }
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
  const today = dayKeyLocal();
  const checkedToday = String(s.daily?.lastCheckinDay || "") === today;
  const checkinDays = Math.max(0, Number(s.daily?.checkinDays || 0));
  const streak = Math.max(0, Number(s.daily?.checkinStreak || 0));
  const isDouble = streak >= CHECKIN_STREAK_GOAL;
  const reward = isDouble ? CHECKIN_BASE * 2 : CHECKIN_BASE;

  return `
    <section class="card sticky-stats__card" style="border-radius:0; box-shadow:none;">
      <div class="sticky-hub">
        <div class="sticky-hub__left">
          <div class="sticky-hub__thumb" id="btnOpenMemorial" role="button" tabindex="0" aria-label="编辑十周年名片" style="--mem-bg:${color.bg};">
            <div class="sticky-hub__avatar">${avatarDisplayHtml(avatar, String(s.profile?.nickname || ""), { size: "small" })}</div>
            ${stickersHtml}
          </div>
          <button class="link-btn" id="btnEditMemorial" type="button" style="font-size:11px; margin-top:4px">开始装扮吧</button>
        </div>
        <div class="sticky-hub__cards">
          <div class="sticky-hub__card sticky-hub__card--points">
            <div class="sticky-hub__card-title">纪念币 <b id="pillPoints">${fmt(s.points)}</b></div>
            <div class="sticky-hub__card-desc">兑换福利和名片装饰</div>
            <button class="btn btn--brand sticky-hub__card-btn" id="btnGoShop" type="button">福利兑换</button>
          </div>
          <div class="sticky-hub__card sticky-hub__card--checkin">
            <div class="sticky-hub__card-title">签到天数 <b>${checkinDays}</b> <span class="checkin-streak-tag">连签${streak}天</span></div>
            <div class="sticky-hub__card-desc">${isDouble ? `每天可领 <b>${reward}</b> 纪念币（翻倍中）` : `每天可领 ${CHECKIN_BASE} 纪念币<br>连签${CHECKIN_STREAK_GOAL}天翻倍`}</div>
            <button class="btn ${checkedToday ? "" : "btn--brand"} sticky-hub__card-btn" id="btnCheckin" type="button" ${checkedToday ? "disabled" : ""}>${checkedToday ? "今日已签" : "立即签到"}</button>
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
        <div class="pill pill--brand" id="pillPoints">纪念币 <b>${fmt(s.points)}</b></div>
        ${ENABLE_COUPONS ? `<div class="pill" id="pillCoupons">点券 <b>${fmt(s.walletCoupons || 0)}</b></div>` : ""}
      </div>
    </section>
  `;
}

function wireStickyStats() {
  $("#btnGoShop")?.addEventListener("click", () => openShopModal());
  if (ENABLE_COUPONS) $("#btnWallet")?.addEventListener("click", openWalletModal);
  $("#btnOpenMemorial")?.addEventListener("click", () => openMemorialEditModal());
  $("#btnEditMemorial")?.addEventListener("click", () => openMemorialEditModal());

  // ── 置顶栏滚动隐藏/停止显示 ──
  const stickyEl = document.getElementById("stickyStats");
  if (stickyEl) {
    let scrollTimer = null;
    let lastY = window.scrollY;

    const hide = () => { if (!stickyEl.classList.contains("is-hidden")) stickyEl.classList.add("is-hidden"); };
    const show = () => { stickyEl.classList.remove("is-hidden"); };

    const onScroll = () => {
      const y = window.scrollY;
      if (y <= 10) { show(); lastY = y; return; }
      if (y !== lastY) hide();
      lastY = y;
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(show, 300);
    };

    if (wireStickyStats._scrollHandler) {
      window.removeEventListener("scroll", wireStickyStats._scrollHandler);
    }
    wireStickyStats._scrollHandler = onScroll;
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  // 每日签到
  $("#btnCheckin")?.addEventListener("click", () => {
    const today = dayKeyLocal();
    if (String(state.daily?.lastCheckinDay || "") === today) return toast("今天已经签到过了");
    if (!state.daily || typeof state.daily !== "object") state.daily = { lotteryDayKey: "", checkinDays: 0, checkinStreak: 0, lastCheckinDay: "", welfareLotteryDay: "" };

    const lastDay = String(state.daily.lastCheckinDay || "");
    const yesterday = yesterdayKeyLocal();
    const oldStreak = Math.max(0, Number(state.daily.checkinStreak || 0));
    const newStreak = (lastDay === yesterday) ? oldStreak + 1 : 1;

    state.daily.lastCheckinDay = today;
    state.daily.checkinDays = Math.max(0, Number(state.daily.checkinDays || 0)) + 1;
    state.daily.checkinStreak = newStreak;

    const isDouble = newStreak >= CHECKIN_STREAK_GOAL;
    const reward = isDouble ? CHECKIN_BASE * 2 : CHECKIN_BASE;
    addPoints(state, reward);
    saveState();
    const fromRect = $("#btnCheckin")?.getBoundingClientRect();
    if (fromRect) flyGrantToSticky({ fromRect, grant: { points: reward, coupons: 0 } });
    render();
  });
}

function firstRecapView(s, recap) {
  return `
    <div class="firstrecap-shell">
      <div class="firstrecap-topbar" role="banner" aria-label="活动导航栏">
        <div class="firstrecap-topbar__title">TapTap 十周年</div>
      </div>

      <div class="firstrecap-stage" aria-label="十年回顾舞台">
        <div class="firstrecap-currency" aria-label="纪念币">
          <div class="pill pill--brand firstrecap-money firstrecap-money--points" id="pillPoints">
            <div class="firstrecap-money__top">
              <div class="firstrecap-money__k">纪念币</div>
              <div class="firstrecap-money__v">${fmt(s.points)}</div>
            </div>
            <div class="firstrecap-money__d">活动内装扮十周年名片，兑换纪念装饰</div>
          </div>
          ${ENABLE_COUPONS ? `
            <div class="pill firstrecap-money firstrecap-money--coupons" id="pillCoupons">
              <div class="firstrecap-money__top">
                <div class="firstrecap-money__k">点券</div>
                <div class="firstrecap-money__v">${fmt(s.walletCoupons || 0)}</div>
              </div>
              <div class="firstrecap-money__d">购买游戏/PC CDKey/云玩服务等</div>
            </div>
          ` : ""}
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
  const recapHtml = recapInlineView(s, recap, { sortUnclaimedFirst: false });
  return `
    <div class="home-module" id="section-recap">${recapHtml}</div>

    ${discoverInlineView(s)}
  `;
  // 十周年名片和十周年福利已拆到顶部置顶区域的弹窗入口中
}

function wireHome() {
  wireRecapInline();
  wireDiscoverInline();
}

function dayKeyLocal(d = new Date()) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${dd}`;
}

function yesterdayKeyLocal() {
  const d = new Date();
  d.setDate(d.getDate() - 1);
  return dayKeyLocal(d);
}

const CHECKIN_BASE = 50;
const CHECKIN_STREAK_GOAL = 14;

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
        compact && locked && cost
          ? `<span class="mem-opt__price" aria-hidden="true">${fmt(cost)}纪念币</span>`
          : (!compact && locked && cost ? `<span class="mem-opt__price" aria-hidden="true">${fmt(cost)}纪念币</span>` : "")
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

  const avatarOpts = MEM_AVATARS.map((av) => {
    let iconHtml;
    if (av.img) {
      iconHtml = `<img class="mem-opt__img-ico" src="${av.img}" alt="${escapeHtml(av.label)}" draggable="false" />`;
    } else if (av.isGameRole) {
      iconHtml = `<span class="mem-opt__role-ico">游戏<br>角色</span>`;
    } else {
      iconHtml = av.icon;
    }
    if (av.game) {
      iconHtml += `<span class="mem-opt__avatar-label"><span class="mem-opt__avatar-game">${escapeHtml(av.game)}</span>${escapeHtml(av.label)}</span>`;
    } else {
      iconHtml += `<span class="mem-opt__avatar-label">${escapeHtml(av.label)}</span>`;
    }
    return optionBtn({
      id: av.id,
      kind: "avatar",
      icon: iconHtml,
      active: (s.memorial?.avatarId || "") === av.id,
      used: (s.memorial?.avatarId || "") === av.id,
      locked: false,
      cost: 0,
      ariaLabel: `角色：${av.game ? av.game + " " : ""}${av.label}`,
      compact: true,
    });
  }).join("");

  const frameBtn = frameOwned
    ? `<button class="btn ${frameEquipped ? "" : "btn--brand"}" data-mem-equip="frame">${frameEquipped ? "已装备" : "装备"}</button>`
    : `<button class="btn btn--brand" data-mem-buy="frame">${fmt(MEM_SHOP.frame.cost)}纪念币兑换</button>`;

  const badgeBtn = badgeOwned
    ? `<button class="btn ${badgeEquipped ? "" : "btn--brand"}" data-mem-equip="badge">${badgeEquipped ? "已装备" : "装备"}</button>`
    : `<button class="btn btn--brand" data-mem-buy="badge">${fmt(MEM_SHOP.badge.cost)}纪念币兑换</button>`;

  const todayKey = dayKeyLocal();
  const alreadyDrawn = String(s.daily?.lotteryDayKey || "") === todayKey;
  const lotBtn = alreadyDrawn
    ? `<button class="btn" id="btnMemLottery" disabled>今日已抽</button>`
    : `<button class="btn btn--brand" id="btnMemLottery">${fmt(MEM_SHOP.lottery.cost)}纪念币抽</button>`;

  const cardHtml = `
      <div class="mem-card-shell" style="--mem-bg:${color.bg}; --mem-panel:${color.panel}; --mem-accent:${color.accent};">
        <div class="mem-card">
          <div class="mem-stickers" aria-label="贴纸">
            ${(Array.isArray(s.memorial?.stickers) ? s.memorial.stickers : [])
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
          </div>
        </div>
      </div>
  `;

  const diyHtml = `
      <div class="mem-diy">
      <div class="mem-tabs" role="tablist" aria-label="DIY 选项">
        ${tabBtn("avatar", "角色")}
        ${tabBtn("color", "背景")}
        ${tabBtn("sticker", "贴纸")}
      </div>

        <div class="mem-panel ${tab === "avatar" ? "" : "hidden"}" data-mem-panel="avatar">
          <div class="muted small" style="margin-top:2px">选择名片上展示的角色形象。</div>
          <div class="mem-grid mem-grid--avatars" style="margin-top:10px">${avatarOpts}</div>
        </div>
        <div class="mem-panel ${tab === "color" ? "" : "hidden"}" data-mem-panel="color">
          <div class="muted small" style="margin-top:2px">选择一款背景主题（支持不同图案）。</div>
          <div class="mem-swatches" style="margin-top:10px">${colorOpts}</div>
        </div>
        <div class="mem-panel ${tab === "sticker" ? "" : "hidden"}" data-mem-panel="sticker">
          <div class="muted small" style="margin-top:2px">点选添加贴纸；拖动贴纸可调整位置。</div>
          <div class="mem-grid" style="margin-top:10px">${stickerOpts}</div>
        </div>
      </div>
  `;

  const lotteryHtml = ENABLE_COUPONS
    ? `
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
      `
    : "";

  const shopHtml = `
      <div class="divider"></div>
      <div class="list">
        ${lotteryHtml}
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
      <p class="muted small" style="margin:6px 0 0">用纪念币兑换装饰，DIY 一张属于你的纪念卡。</p>

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
  const nick = String(s.profile?.nickname || "").trim() || "TapTap 用户";
  const pid = String(s.profile?.id || "").trim() || "—";
  return `
    <section class="card">
      <div class="row">
        <p class="h1 grow">分享 · TapTap 十周年</p>
      </div>
      <p class="muted small" style="margin:6px 0 0">扫码打开分享页（demo：分享内容来自本地演示状态）。</p>
      <div class="divider"></div>
      ${shareCardHtml(s, recap, { variant: "recap", nick, pid })}
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

  return `
    <div class="mem-card-shell" style="--mem-bg:${color.bg}; --mem-panel:${color.panel}; --mem-accent:${color.accent};">
      <div class="mem-card">
        <div class="mem-stickers" aria-label="贴纸">
          ${(Array.isArray(s.memorial?.stickers) ? s.memorial.stickers : [])
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
        </div>
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

    const stickers = (Array.isArray(state.memorial?.stickers) ? state.memorial.stickers : []).map((st) => {
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

        ${avatar.img
          ? `<image href="${avatar.img}" x="${cardX + 46}" y="${cardY + 46}" width="148" height="148" clip-path="inset(0 round 22px)" preserveAspectRatio="xMidYMid slice"/>`
          : avatar.isGameRole
            ? `<rect x="${cardX + 68}" y="${cardY + 88}" width="104" height="104" rx="22" fill="#FFFFFF" stroke="rgba(15,23,42,0.10)" stroke-width="2"/>
               <text x="${cardX + 120}" y="${cardY + 145}" font-size="22" font-weight="800" fill="rgba(15,23,42,0.45)" text-anchor="middle">游戏角色</text>`
            : `<text x="${cardX + 120}" y="${cardY + 170}" font-size="96">${escapeXml(avatar.icon)}</text>`
        }
        <text x="${cardX + 120}" y="${cardY + 520}" font-size="28" font-weight="800" fill="#0F172A">昵称</text>
        <text x="${cardX + 120}" y="${cardY + 580}" font-size="44" font-weight="900" fill="#0F172A">${escapeXml(nick)}</text>
        <text x="${cardX + 120}" y="${cardY + 670}" font-size="28" font-weight="800" fill="#0F172A">ID</text>
        <text x="${cardX + 120}" y="${cardY + 720}" font-size="36" font-weight="900" fill="#0F172A">${escapeXml(pid)}</text>

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
      ${shareCardHtml(state, recap, { variant: "recap", nick, pid })}
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

  openModal({ title: "分享 TapTap 十周年", bodyHtml: body, footerHtml: footer });

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
  const color = MEM_CARD_COLORS[0];
  const togetherDays = calcDaysSince(parseCnDateToTs(recap.regDate));
  const years = Math.floor((togetherDays || 0) / 365);
  const days = (togetherDays || 0) % 365;
  const totalCoins = calcCareerCoinsTotal(s);

  const fmtVal = (n) => fmt(Number(n || 0));
  const fmtHours = (h) => { const v = Number(h || 0); if (v <= 0) return ""; if (v < 1) return Math.max(0.1, v).toFixed(1); return fmt(Math.floor(v)); };
  const fmtWan = (n) => { const v = Number(n || 0); if (v <= 0) return "0"; if (v < 10000) return fmt(v); const w = v / 10000; return (w >= 1 && w % 1 < 0.05) ? Math.floor(w) + "万" : w.toFixed(1) + "万"; };

  const devGames = (Array.isArray(recap?.devGames) ? recap.devGames : []).filter(g => String(g.name || "").trim());
  const dims = [
    { label: "动作", val: Number(recap.radarAction || 0) },
    { label: "策略", val: Number(recap.radarStrategy || 0) },
    { label: "RPG", val: Number(recap.radarRPG || 0) },
    { label: "冒险", val: Number(recap.radarAdventure || 0) },
    { label: "模拟", val: Number(recap.radarSim || 0) },
    { label: "休闲", val: Number(recap.radarCasual || 0) },
  ];
  const tagsCount = dims.filter(d => d.val > 0).length;
  const topDim = dims.reduce((a, b) => b.val > a.val ? b : a, dims[0]);
  const belovedName = String(recap.belovedGameName || "").trim();

  const allKpis = [
    togetherDays > 0 && { label: "相伴时光", value: years >= 1 ? `${years}年${days}天` : `${togetherDays}天` },
    Number(recap.gamesPlayedTotal || 0) > 0 && { label: "游玩游戏", value: fmtVal(recap.gamesPlayedTotal) },
    fmtHours(recap.playTimeHours) && { label: "游玩时长", value: fmtHours(recap.playTimeHours) + "h" },
    Number(recap.lateNightOpenCount || 0) > 0 && { label: "深夜探索", value: fmtVal(recap.lateNightOpenCount) + "次" },
    Number(recap.reserveCount || 0) > 0 && { label: "预约新作", value: fmtVal(recap.reserveCount) },
    Number(recap.spendTotal || 0) > 0 && { label: "累计消费", value: fmtVal(Math.floor(recap.spendTotal)) + "元" },
    tagsCount > 0 && { label: "喜爱类型", value: topDim.label + "类" },
    Number(recap.achievementsTotal || 0) > 0 && { label: "游戏成就", value: fmtVal(recap.achievementsTotal) },
    belovedName && { label: "我的挚爱", value: escapeXml(belovedName.length > 6 ? belovedName.slice(0, 5) + "…" : belovedName) },
    Number(recap.exclusivePlayed || 0) > 0 && { label: "独家宝藏", value: fmtVal(recap.exclusivePlayed) },
    Number(recap.editorPickPlayed || 0) > 0 && { label: "编辑之选", value: fmtVal(recap.editorPickPlayed) },
    Number(recap.reviewsCount || 0) > 0 && { label: "玩家评价", value: fmtVal(recap.reviewsCount) },
    Number(recap.communityPublished || 0) > 0 && { label: "发布内容", value: fmtVal(recap.communityPublished) },
    Number(recap.communityLikesReceived || 0) > 0 && { label: "获赞", value: fmtWan(recap.communityLikesReceived) },
    Number(recap.nightSurfDays || 0) > 0 && { label: "深夜冲浪", value: fmtVal(recap.nightSurfDays) + "天" },
    Number(recap.platformBadgesTotal || 0) > 0 && { label: "徽章收藏", value: fmtVal(recap.platformBadgesTotal) },
    Number(recap.friendsCount || 0) > 0 && { label: "好友", value: fmtVal(recap.friendsCount) },
    Number(recap.followersCount || 0) > 0 && { label: "粉丝", value: fmtWan(recap.followersCount) },
    devGames.length > 0 && { label: "游戏创作", value: String(devGames.length) },
  ].filter(Boolean);

  const kpiCols = 4;
  const kpiCellW = Math.floor(900 / kpiCols);
  const totalRows = Math.ceil(allKpis.length / kpiCols);
  const kpisSvg = allKpis.map((k, i) => {
    const row = Math.floor(i / kpiCols);
    const isLastRow = row === totalRows - 1;
    const itemsInRow = isLastRow ? allKpis.length - row * kpiCols : kpiCols;
    const colInRow = i - row * kpiCols;
    const rowOffset = isLastRow ? (kpiCols - itemsInRow) * kpiCellW / 2 : 0;
    const cx = 130 + rowOffset + colInRow * kpiCellW + kpiCellW / 2;
    const cy = row * 120;
    return `
      <text x="${cx}" y="${cy}" text-anchor="middle" font-size="22" font-weight="600" fill="rgba(15,23,42,.45)">${escapeXml(k.label)}</text>
      <text x="${cx}" y="${cy + 48}" text-anchor="middle" font-size="38" font-weight="900" fill="#0F172A">${escapeXml(k.value)}</text>
    `;
  }).join("");

  const qrSized = String(qr).replace("<svg ", `<svg x="390" y="0" width="300" height="300" `);

  const kpiY = 280;
  const kpiRows = Math.ceil(allKpis.length / kpiCols);
  const kpiH = kpiRows * 120 + 20;
  const coinY = kpiY + kpiH + 60;
  const coinH = 200;
  const ctaY = coinY + coinH + 50;
  const qrY = ctaY + 80;

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

      <text x="90" y="100" font-size="32" font-weight="700" fill="#334155">${escapeXml(nick)}</text>
      <text x="90" y="145" font-size="24" font-weight="600" fill="#64748B">ID ${escapeXml(pid)}</text>
      <text x="990" y="100" text-anchor="end" font-size="48" font-weight="900" fill="#0F172A">TapTap 十周年</text>
      <rect x="900" y="115" width="90" height="32" rx="10" fill="${escapeXml(color.accent)}"/>
      <text x="945" y="138" text-anchor="middle" font-size="18" font-weight="800" fill="#FFFFFF">TapTap</text>

      <line x1="90" y1="200" x2="990" y2="200" stroke="rgba(15,23,42,.08)" stroke-width="2"/>

      <rect x="90" y="${kpiY - 30}" width="900" height="${kpiH + 50}" rx="28" fill="rgba(255,255,255,.7)" stroke="rgba(15,23,42,.05)" stroke-width="2"/>
      <g transform="translate(0 ${kpiY + 20})">${kpisSvg}</g>

      <rect x="90" y="${coinY}" width="900" height="${coinH}" rx="36" fill="rgba(255,255,255,.85)" stroke="rgba(15,23,42,.08)" stroke-width="2"/>
      <text x="540" y="${coinY + 55}" text-anchor="middle" font-size="28" font-weight="700" fill="#334155">领取纪念币</text>
      <text x="540" y="${coinY + 120}" text-anchor="middle" font-size="72" font-weight="900" fill="${escapeXml(color.accent)}">${fmt(totalCoins)}</text>
      <text x="590" y="${coinY + 120}" font-size="28" font-weight="700" fill="${escapeXml(color.accent)}">枚</text>
      <text x="540" y="${coinY + 170}" text-anchor="middle" font-size="22" font-weight="600" fill="#64748B">可兑换游戏及 TapTap 专属福利</text>

      <text x="540" y="${ctaY}" text-anchor="middle" font-size="28" font-weight="800" fill="${escapeXml(color.accent)}">快来 TapTap 参与十周年活动，领取你的专属福利吧 →</text>

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
  const stickerList = Array.isArray(s.memorial?.stickers) ? s.memorial.stickers : [];

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

  // 预加载头像图片
  let _avatarImg = null;
  if (avatar.img) {
    _avatarImg = new Image();
    _avatarImg.onload = () => drawCard();
    _avatarImg.src = avatar.img;
  }

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
      if (avatar.img && _avatarImg && _avatarImg.complete && _avatarImg.naturalWidth > 0) {
        const imgS = 120;
        ctx.save();
        roundRect(ctx, avX - imgS / 2, avY - imgS / 2, imgS, imgS, 20);
        ctx.clip();
        ctx.drawImage(_avatarImg, avX - imgS / 2, avY - imgS / 2, imgS, imgS);
        ctx.restore();
      } else if (avatar.isGameRole) {
        ctx.save();
        const boxS = 100;
        const bx = avX - boxS / 2, by = avY - boxS / 2;
        ctx.fillStyle = "#FFFFFF";
        ctx.strokeStyle = "rgba(15,23,42,0.10)";
        ctx.lineWidth = 2;
        roundRect(ctx, bx, by, boxS, boxS, 20);
        ctx.fill();
        ctx.stroke();
        ctx.fillStyle = "rgba(15,23,42,0.45)";
        ctx.font = "bold 20px system-ui, sans-serif";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText("游戏角色", avX, avY);
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
  openModal({ title: "十周年福利", bodyHtml: body, footerHtml: "" });
  wireShop({ inModal: true });
}

const LOTTERY_KIND_LABELS = { frame: "头像框", coupon: "点券", voucher: "优惠券", cloud: "云玩时长", cdkey: "CDKey" };

function lotteryPoolItemHtml(item, s) {
  const wonCount = (s.lotteryWins || []).filter((w) => w.id === item.id).length;
  const depleted = wonCount >= item.qty;
  const kindLabel = LOTTERY_KIND_LABELS[item.kind] || "";
  return `
    <div class="pool-item ${depleted ? "pool-item--depleted" : ""}" data-kind="${item.kind}">
      <span class="pool-item__icon">${item.icon}</span>
      <span class="pool-item__name">${escapeHtml(item.title)}</span>
      ${depleted ? `<span class="pool-item__tag">已抽完</span>` : ""}
    </div>
  `;
}

function exchangeItemCard(item, s) {
  const owned = (s.exchangeOwned || []).includes(item.id);
  const exchangedCount = (s.exchangeOwned || []).filter((id) => id === item.id).length;
  const soldOut = exchangedCount >= item.qty;
  const canBuy = s.points >= item.cost;
  const isGift = item.type === "giftcode";

  let btnHtml;
  if (owned) {
    if (isGift) {
      btnHtml = `<div class="exchange-card__status">已兑换</div><div class="exchange-card__key">${escapeHtml(item.key || "")}</div><div class="exchange-card__desc">可前往游戏内兑换</div>`;
    } else {
      btnHtml = `<div class="exchange-card__status">已拥有</div>`;
    }
  } else if (soldOut) {
    btnHtml = `<div class="exchange-card__status exchange-card__status--soldout">库存不足</div>`;
  } else {
    btnHtml = `<button class="btn btn--brand exchange-card__btn" data-exchange="${item.id}" ${canBuy ? "" : "disabled"}>${fmt(item.cost)} 纪念币</button>`;
  }

  return `
    <div class="exchange-card ${owned ? "exchange-card--owned" : ""} ${soldOut && !owned ? "exchange-card--soldout" : ""}">
      <div class="exchange-card__icon">${item.icon}</div>
      <div class="exchange-card__name">${escapeHtml(item.title)}</div>
      ${btnHtml}
    </div>
  `;
}

function shopModalView(s) {
  const today = dayKeyLocal();
  const drawnToday = String(s.daily?.welfareLotteryDay || "") === today;
  const canAfford = s.points >= LOTTERY_COST;
  const poolEmpty = LOTTERY_POOL.every((p) => {
    const wonCount = (s.lotteryWins || []).filter((w) => w.id === p.id).length;
    return wonCount >= p.qty;
  });

  const poolHtml = LOTTERY_POOL.map((p) => lotteryPoolItemHtml(p, s)).join("");
  const exchangeHtml = EXCHANGE_ITEMS.map((item) => exchangeItemCard(item, s)).join("");

  let lotteryBtnText, lotteryDisabled;
  if (poolEmpty) {
    lotteryBtnText = "奖池已抽空";
    lotteryDisabled = true;
  } else if (!canAfford) {
    lotteryBtnText = `抽奖 · ${LOTTERY_COST} 纪念币`;
    lotteryDisabled = true;
  } else {
    lotteryBtnText = `抽奖 · ${LOTTERY_COST} 纪念币`;
    lotteryDisabled = false;
  }

  const winCount = (s.lotteryWins || []).length;
  const currentForceKind = s._testForceKind || "";
  const testKindOptions = Object.entries(LOTTERY_KIND_LABELS).map(([k, v]) =>
    `<option value="${k}" ${currentForceKind === k ? "selected" : ""}>${v}</option>`
  ).join("");

  const lotteryEntries = (s.lotteryWins || []).map((w) => ({ ...w, _source: "lottery" }));
  const exchangeEntries = (s.exchangeRecords || []).map((r) => ({ ...r, _source: "exchange" }));
  const allPrizes = [...lotteryEntries, ...exchangeEntries].sort((a, b) => new Date(b.time) - new Date(a.time));

  let prizesDrawerContent = "";
  if (allPrizes.length > 0) {
    const lotteryHintMap = {
      frame: { inline: "", below: `<span class="prize-row__hint">可在个人主页使用</span>` },
      coupon: { inline: `<button class="btn btn--sm prize-row__action" data-prize-wallet type="button">查看我的钱包</button>`, below: "" },
      voucher: { inline: "", below: `<span class="prize-row__hint">前往 TapTap 兑换中心查看</span>` },
      cloud: { inline: "", below: `<span class="prize-row__hint">前往 TapTap 兑换中心使用</span>` },
      cdkey: { inline: "", below: `<span class="prize-row__hint">前往 TapTap 兑换中心使用</span>` },
    };
    const rows = allPrizes.map((w) => {
      const d = new Date(w.time);
      const timeStr = `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}-${String(d.getDate()).padStart(2,"0")} ${String(d.getHours()).padStart(2,"0")}:${String(d.getMinutes()).padStart(2,"0")}`;
      let inlineHtml = "", belowHtml = "";
      const srcLabel = w._source === "exchange" ? `<span class="prize-row__src">兑换</span>` : `<span class="prize-row__src prize-row__src--lottery">抽奖</span>`;
      if (w._source === "lottery") {
        const h = lotteryHintMap[w.kind] || { inline: "", below: "" };
        inlineHtml = h.inline;
        belowHtml = h.below;
      } else if (w.type === "giftcode") {
        belowHtml = `<span class="prize-row__hint">可前往游戏内兑换</span>`;
      }
      return `<tr><td style="font-size:20px;text-align:center;width:40px">${w.icon}</td><td><div style="display:flex;align-items:center;gap:8px"><span style="font-weight:600;font-size:14px">${escapeHtml(w.title)}</span>${srcLabel}${inlineHtml}</div>${belowHtml ? `<div style="margin-top:4px">${belowHtml}</div>` : ""}</td><td style="font-size:12px;color:rgba(15,23,42,.45);text-align:right;white-space:nowrap;vertical-align:top">${timeStr}</td></tr>`;
    }).join("");
    prizesDrawerContent = `<table class="prize-table" style="width:100%;border-collapse:collapse"><tbody>${rows}</tbody></table>`;
  } else {
    prizesDrawerContent = `<div style="padding:16px 0;text-align:center;color:rgba(15,23,42,.35);font-size:13px">还没有获得奖品，快去抽奖和兑换吧~</div>`;
  }
  const prizesDrawerHtml = `
    <div class="welfare-section prizes-drawer" style="margin-bottom:20px">
      <button class="prizes-drawer__toggle" id="btnTogglePrizes" type="button">
        <span class="welfare-section__title">🎁 我的奖品</span>
        <span class="prizes-drawer__arrow" id="prizesArrow">▼</span>
      </button>
      <div class="prizes-drawer__body" id="prizesDrawerBody">
        ${prizesDrawerContent}
      </div>
    </div>`;

  return `
    <div>
      <div style="margin-bottom:16px">
        <span class="pill pill--brand">当前纪念币：<b>${fmt(s.points)}</b></span>
      </div>

      ${prizesDrawerHtml}

      <div class="welfare-section">
        <div class="welfare-section__header">
          <span class="welfare-section__title">🎰 抽奖</span>
        </div>
        <div class="pool-grid">${poolHtml}</div>
        <div class="lottery-action">
          <button class="btn btn--brand lottery-action__btn" id="btnWelfareLottery"
            ${lotteryDisabled ? "disabled" : ""}>${lotteryBtnText}</button>
        </div>
        <div class="lottery-test-bar">
          <label class="lottery-test-bar__label">测试：指定必中类型</label>
          <select id="selTestForceKind" class="lottery-test-bar__select">
            <option value="">随机</option>
            ${testKindOptions}
            <option value="__none__" ${currentForceKind === "__none__" ? "selected" : ""}>未中奖</option>
          </select>
          <button class="btn btn--sm" id="btnTestResetLottery" type="button" ${drawnToday ? "" : "disabled"}>重置今日机会</button>
        </div>
      </div>

      <div class="divider" style="margin:20px 0"></div>
      <div class="welfare-section">
        <div class="welfare-section__header">
          <span class="welfare-section__title">🎁 兑换</span>
        </div>
        <div class="exchange-grid">${exchangeHtml}</div>
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
          <div class="muted small" style="margin-top:6px">消耗 <b>${fmt(cost)}</b> 纪念币</div>
        </div>
        <div class="divider"></div>
        <div class="muted small">当前纪念币：<b>${fmt(state.points || 0)}</b></div>
        ${enough ? "" : `<div class="muted small" style="margin-top:6px">纪念币不足，去试玩/回顾领奖赚纪念币吧。</div>`}
      </div>
    `;
    const footer = enough
      ? `<button class="btn" id="btnSpendCancel">取消</button><button class="btn btn--brand" id="btnSpendOk">${fmt(cost)}纪念币兑换</button>`
      : `<button class="btn btn--brand" id="btnSpendOk">知道了</button>`;
    if (inModal) _modalAfterClose.push(() => openMemorialEditModal());
    openModal({ title: enough ? "确认兑换" : "纪念币不足", bodyHtml: body, footerHtml: footer });
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
        saveState();
        toast("已解锁");
        closeModal();
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
            saveState();
            toast(`已兑换：${item.title}`);
            closeModal();
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
            saveState();
            toast(`已兑换：${item.title}`);
            closeModal();
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

  if (ENABLE_COUPONS) {
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
}

function recapInlineView(s, recap, { sortUnclaimedFirst = false } = {}) {
  const snapshot = s.careerSnapshot || { recap, grants: calcSnapshotGrants(recap) };
  const snap = snapshot.recap || recap;
  const togetherDays = calcDaysSince(parseCnDateToTs(snap.regDate));

  const snapshotCardsAll = [
    // 基础数据
    {
      label: "和 TapTap 的相伴时光",
      value: (() => {
        const regDate = (snap.regDate || "").trim();
        if (!regDate || togetherDays === null) return "";
        const years = Math.floor(togetherDays / 365);
        const days = togetherDays % 365;
        const illustTier = years >= 7
          ? { code: "A", range: "7年+" }
          : years >= 4
          ? { code: "B", range: "4-6年" }
          : years >= 1
          ? { code: "C", range: "1-3年" }
          : { code: "D", range: "<1年" };
        let heroHtml;
        if (years >= 1) {
          heroHtml = `相伴 <strong>${years}</strong> 年 ${days} 天`;
        } else if (togetherDays > 0) {
          heroHtml = `相伴 <strong>${togetherDays}</strong> 天`;
        } else {
          heroHtml = `<strong>今天</strong>刚加入`;
        }
        return `
          <div class="arrival-card arrival-card--v2">
            <div class="arrival-v2__title">和 TapTap 的相伴时光</div>
            <div class="arrival-v2__hero">${heroHtml}</div>
            <div class="arrival-v2__illust">
              <div class="arrival-v2__illust-img" style="flex-direction:column;gap:2px;line-height:1.6;font-size:14px">${
                [
                  { code: "A", range: "7年+" },
                  { code: "B", range: "4-6年" },
                  { code: "C", range: "1-3年" },
                  { code: "D", range: "<1年" },
                ].map(t => {
                  const active = t.code === illustTier.code;
                  return `<span style="font-weight:${active ? 900 : 400}${active ? ";text-decoration:underline" : ""}">插画${t.code}（${t.range}）${active ? " ◀" : ""}</span>`;
                }).join("")
              }</div>
            </div>
          </div>
        `;
      })(),
      desc: "",
      rewardId: "snap_reg_active",
      visible: !!(snap.regDate || "").trim() && togetherDays !== null,
      illustHtml: `<div class="arrival-v2__illust-img" style="flex-direction:column;gap:2px;line-height:1.6;font-size:14px">${
        [
          { code: "A", range: "7年+" },
          { code: "B", range: "4-6年" },
          { code: "C", range: "1-3年" },
          { code: "D", range: "<1年" },
        ].map(t => `<span style="font-weight:400">插画${t.code}（${t.range}）</span>`).join("")
      }</div>`,
    },
    // 打开 TapTap 的时间习惯
    {
      label: "夜行者",
      value: (() => {
        const slot = (snap.peakTimeSlot || "").trim();
        const nightCount = Number(snap.lateNightOpenCount || 0);
        if (!slot && nightCount <= 0) return "";
        const peakMap = {
          "12AM-6AM": "00:00 — 05:59",
          "6AM-12PM": "06:00 — 11:59",
          "12PM-6PM": "12:00 — 17:59",
          "6PM-12AM": "18:00 — 23:59",
        };
        let heroHtml;
        if (nightCount > 0) {
          heroHtml = `深夜打开 TapTap <strong>${fmt(nightCount)}</strong> 次`;
        } else {
          heroHtml = `最常在 <strong>${peakMap[slot] || slot}</strong> 打开`;
        }
        return `
          <div class="arrival-card arrival-card--v2">
            <div class="arrival-v2__title">夜行者</div>
            <div class="arrival-v2__hero">${heroHtml}</div>
            <div class="arrival-v2__illust">
              <div class="arrival-v2__illust-img">插画·夜行者</div>
            </div>
          </div>
        `;
      })(),
      desc: "",
      rewardId: "snap_time_habit",
      visible: !!((snap.peakTimeSlot || "").trim()) || Number(snap.lateNightOpenCount || 0) > 0,
    },
    // 剁手记录（消费金额）
    {
      label: "剁手记录",
      value: (() => {
        const total = Number(snap.spendTotal || 0);
        const gameCount = Number(snap.spendGameCount || 0);
        if (total <= 0 && gameCount <= 0) return "";
        const fmtAmount = total % 1 === 0 ? fmt(Math.floor(total)) : total.toFixed(1);
        return `
          <div class="arrival-card arrival-card--v2">
            <div class="arrival-v2__title">剁手记录</div>
            <div class="arrival-v2__hero">累计消费 <strong>${fmtAmount}</strong> 元</div>
            <div class="arrival-v2__illust">
              <div class="arrival-v2__illust-img">插画·剁手记录</div>
            </div>
          </div>
        `;
      })(),
      desc: "",
      rewardId: "snap_spend",
      visible: true,
    },
    // 游戏预约
    {
      label: "新作预约",
      value: (() => {
        const count = Number(snap.reserveCount || 0);
        if (count <= 0 && !(Array.isArray(snap.reserveGames) && snap.reserveGames.length > 0)) return "";
        return `
          <div class="arrival-card arrival-card--v2">
            <div class="arrival-v2__title">新作预约</div>
            <div class="arrival-v2__hero">预约过 <strong>${fmt(count)}</strong> 款新作</div>
            <div class="arrival-v2__illust">
              <div class="arrival-v2__illust-img">插画·新作预约</div>
            </div>
          </div>
        `;
      })(),
      desc: "",
      rewardId: "snap_reserve",
      visible: true,
    },
    // 冒险旅程（游玩数量）
    {
      label: "冒险旅程",
      value: (() => {
        const totalGames = Number(snap.gamesPlayedTotal || 0);
        if (totalGames <= 0) return "";
        return `
          <div class="arrival-card arrival-card--v2">
            <div class="arrival-v2__title">冒险旅程</div>
            <div class="arrival-v2__hero">玩过 <strong>${fmtCap(totalGames, 999)}</strong> 款游戏</div>
            <div class="arrival-v2__illust">
              <div class="arrival-v2__illust-img">插画·冒险旅程</div>
            </div>
          </div>
        `;
      })(),
      desc: "",
      rewardId: "snap_top3games",
      visible: Number(snap.gamesPlayedTotal || 0) > 0,
    },
    // 游玩时光（拆分出的时长卡）
    {
      label: "游玩时光",
      value: (() => {
        const totalHours = Number(snap.playTimeHours || 0);
        if (totalHours <= 0) return "";
        const fmtH = totalHours > 6000 ? "6000+" : totalHours < 1 ? Math.max(0.1, totalHours).toFixed(1) : fmt(Math.floor(totalHours));
        return `
          <div class="arrival-card arrival-card--v2">
            <div class="arrival-v2__title">游玩时光</div>
            <div class="arrival-v2__hero">累计游玩 <strong>${fmtH}</strong> 小时</div>
            <div class="arrival-v2__illust">
              <div class="arrival-v2__illust-img">插画·游玩时光</div>
            </div>
          </div>
        `;
      })(),
      desc: "",
      rewardId: "snap_playtime",
      visible: Number(snap.playTimeHours || 0) > 0,
    },
    // 喜爱类型（游玩偏好）
    {
      label: "喜爱类型",
      value: (() => {
        const dims = [
          { label: "动作", val: Number(snap.radarAction || 0) },
          { label: "策略", val: Number(snap.radarStrategy || 0) },
          { label: "RPG", val: Number(snap.radarRPG || 0) },
          { label: "冒险", val: Number(snap.radarAdventure || 0) },
          { label: "模拟", val: Number(snap.radarSim || 0) },
          { label: "休闲", val: Number(snap.radarCasual || 0) },
        ];
        const tagsCount = dims.filter(d => d.val > 0).length;
        if (tagsCount <= 0) return "";
        const topDim = dims.reduce((a, b) => b.val > a.val ? b : a, dims[0]);
        return `
          <div class="arrival-card arrival-card--v2">
            <div class="arrival-v2__title">喜爱类型</div>
            <div class="arrival-v2__hero">涉猎 <strong>${tagsCount}</strong> 个游戏类型，最爱${topDim.label}类</div>
            <div class="arrival-v2__illust">
              <div class="arrival-v2__illust-img">插画·喜爱类型</div>
            </div>
          </div>
        `;
      })(),
      desc: "",
      rewardId: "snap_profile",
      visible: true,
    },
    // 游戏成就（从偏好卡拆出）
    {
      label: "游戏成就",
      value: (() => {
        const total = Number(snap.achievementsTotal || 0);
        const platinum = Number(snap.platinumAchievementsTotal || 0);
        if (total <= 0) return "";
        let heroHtml = `点亮 <strong>${fmt(total)}</strong> 个成就`;
        if (platinum > 0) heroHtml += `，白金 <strong>${fmt(platinum)}</strong> 个`;
        return `
          <div class="arrival-card arrival-card--v2">
            <div class="arrival-v2__title">游戏成就</div>
            <div class="arrival-v2__hero">${heroHtml}</div>
            <div class="arrival-v2__illust">
              <div class="arrival-v2__illust-img">插画·游戏成就</div>
            </div>
          </div>
        `;
      })(),
      desc: "",
      rewardId: "snap_achievements",
      visible: Number(snap.achievementsTotal || 0) > 0 || Number(snap.achievementGamesCount || 0) > 0,
    },
    // 我的挚爱
    {
      label: "我的挚爱",
      value: (() => {
        const name = String(snap.belovedGameName || "").trim();
        if (!name) return "";
        const icon = String(snap.belovedGameIcon || "").trim() || "🎮";
        const hours = Number(snap.belovedGameHours || 0);
        const fmtHours = hours <= 0 ? "" : hours > 6000 ? "6000+" : hours < 1 ? Math.max(0.1, hours).toFixed(1) : String(Math.floor(hours));
        return `
          <div class="arrival-card arrival-card--v2">
            <div class="arrival-v2__title">我的挚爱</div>
            <div class="arrival-v2__hero beloved-hero">
              <span class="beloved-game"><span class="beloved-icon">${icon}</span>${escapeHtml(name)}</span>
              ${fmtHours ? `<span class="beloved-hours">游玩 <strong>${fmtHours}</strong> 小时</span>` : ""}
            </div>
            <div class="arrival-v2__illust">
              <div class="arrival-v2__illust-img">插画·我的挚爱</div>
            </div>
          </div>
        `;
      })(),
      desc: "",
      rewardId: "snap_beloved",
      visible: true,
    },
    // snap_beloved_top10 已删除
    // snap_yearbook 已删除
    // 独家宝藏
    {
      label: "独家宝藏",
      value: (() => {
        const exPlayed = Number(snap.exclusivePlayed || 0);
        if (exPlayed <= 0) return "";
        return `
          <div class="arrival-card arrival-card--v2">
            <div class="arrival-v2__title">独家宝藏</div>
            <div class="arrival-v2__hero">玩过 <strong>${fmt(exPlayed)}</strong> 款 Tap 独家游戏</div>
            <div class="arrival-v2__illust">
              <div class="arrival-v2__illust-img">插画·独家宝藏</div>
            </div>
          </div>
        `;
      })(),
      desc: "",
      rewardId: "snap_tapexclusive",
      visible: true,
    },
    // 编辑之选
    {
      label: "编辑之选",
      value: (() => {
        const edPlayed = Number(snap.editorPickPlayed || 0);
        if (edPlayed <= 0) return "";
        return `
          <div class="arrival-card arrival-card--v2">
            <div class="arrival-v2__title">编辑推荐游戏</div>
            <div class="arrival-v2__hero">玩过 <strong>${fmt(edPlayed)}</strong> 款编辑推荐游戏</div>
            <div class="arrival-v2__illust">
              <div class="arrival-v2__illust-img">插画·编辑推荐</div>
            </div>
          </div>
        `;
      })(),
      desc: "",
      rewardId: "snap_editorpick",
      visible: true,
    },
    // 玩家之声
    {
      label: "玩家之声",
      value: (() => {
        const count = Number(snap.reviewsCount || 0);
        const zuitiCnt = Number(snap.zuitiReviewsCount || snap.zuitiCount || 0);
        if (count <= 0 && zuitiCnt <= 0) return "";
        let heroHtml = `发布 <strong>${fmt(count)}</strong> 条评价`;
        if (zuitiCnt > 0) heroHtml += `，<strong>${fmt(zuitiCnt)}</strong> 条成为嘴替`;
        return `
          <div class="arrival-card arrival-card--v2">
            <div class="arrival-v2__title">玩家之声</div>
            <div class="arrival-v2__hero">${heroHtml}</div>
            <div class="arrival-v2__illust">
              <div class="arrival-v2__illust-img">插画·玩家之声</div>
            </div>
          </div>
        `;
      })(),
      desc: "",
      rewardId: "snap_review_voice",
      visible: true,
    },
    // 社区足迹
    {
      label: "社区足迹",
      value: (() => {
        const published = Number(snap.communityPublished || 0);
        if (published <= 0) return "";
        return `
          <div class="arrival-card arrival-card--v2">
            <div class="arrival-v2__title">社区足迹</div>
            <div class="arrival-v2__hero">发布了 <strong>${fmtCap(published, 9999)}</strong> 条帖子和回复</div>
            <div class="arrival-v2__illust">
              <div class="arrival-v2__illust-img">插画·社区足迹</div>
            </div>
          </div>
        `;
      })(),
      desc: "",
      rewardId: "snap_community_pub",
      visible: true,
    },
    // 社区点赞
    {
      label: "社区点赞",
      value: (() => {
        const likesReceived = Number(snap.communityLikesReceived || 0);
        if (likesReceived <= 0 && Number(snap.communityLikesGiven || 0) <= 0) return "";
        return `
          <div class="arrival-card arrival-card--v2">
            <div class="arrival-v2__title">社区点赞</div>
            <div class="arrival-v2__hero">获得 <strong>${fmtWan(likesReceived)}</strong> 个赞</div>
            <div class="arrival-v2__illust">
              <div class="arrival-v2__illust-img">插画·社区点赞</div>
            </div>
          </div>
        `;
      })(),
      desc: "",
      rewardId: "snap_community_likes",
      visible: true,
    },

    // 深夜冲浪
    {
      label: "深夜冲浪",
      value: (() => {
        const days = Number(snap.nightSurfDays || 0);
        if (days <= 0) return "";
        return `
          <div class="arrival-card arrival-card--v2">
            <div class="arrival-v2__title">深夜冲浪</div>
            <div class="arrival-v2__hero">深夜冲浪 <strong>${fmt(days)}</strong> 天</div>
            <div class="arrival-v2__illust">
              <div class="arrival-v2__illust-img">插画·深夜冲浪</div>
            </div>
          </div>
        `;
      })(),
      desc: "",
      rewardId: "snap_night_community",
      visible: true,
    },
    // 徽章墙
    {
      label: "徽章墙",
      value: (() => {
        const total = Number(snap.platformBadgesTotal || 0);
        const blackGold = Number(snap.blackGoldBadgesCount || 0);
        if (total <= 0) return "";
        let heroHtml = `累计 <strong>${fmt(total)}</strong> 枚徽章`;
        if (blackGold > 0) heroHtml += `，黑金 <strong>${fmt(blackGold)}</strong> 枚`;
        return `
          <div class="arrival-card arrival-card--v2">
            <div class="arrival-v2__title">徽章墙</div>
            <div class="arrival-v2__hero">${heroHtml}</div>
            <div class="arrival-v2__illust">
              <div class="arrival-v2__illust-img">插画·徽章墙</div>
            </div>
          </div>
        `;
      })(),
      desc: "",
      rewardId: "snap_badges",
      visible: true,
    },
    // 同行伙伴
    {
      label: "同行伙伴",
      value: (() => {
        const friends = Number(snap.friendsCount || 0);
        const followers = Number(snap.followersCount || 0);
        if (friends <= 0 && followers <= 0) return "";
        let heroHtml = `结交了 <strong>${fmt(friends)}</strong> 位好友`;
        if (followers > 0) heroHtml += `，收获 <strong>${fmtWan(followers)}</strong> 位粉丝`;
        return `
          <div class="arrival-card arrival-card--v2">
            <div class="arrival-v2__title">同行伙伴</div>
            <div class="arrival-v2__hero">${heroHtml}</div>
            <div class="arrival-v2__illust">
              <div class="arrival-v2__illust-img">插画·同行伙伴</div>
            </div>
          </div>
        `;
      })(),
      desc: "",
      rewardId: "snap_friend_msgs",
      visible: true,
    },
    // 游戏创作
    {
      label: "游戏创作",
      value: (() => {
        const cnt = (Array.isArray(snap.devGames) ? snap.devGames : []).filter(g => String(g.name || "").trim()).length;
        const gjCount = Number(snap.gamejamGamesCount || 0);
        const tmCount = Number(snap.tapmakerGamesCount || 0);
        if (cnt <= 0 && gjCount <= 0 && tmCount <= 0) return "";
        return `
          <div class="arrival-card arrival-card--v2">
            <div class="arrival-v2__title">游戏创作</div>
            <div class="arrival-v2__hero">创作了 <strong>${fmt(cnt)}</strong> 款作品</div>
            <div class="arrival-v2__illust">
              <div class="arrival-v2__illust-img">插画·游戏创作</div>
            </div>
          </div>
        `;
      })(),
      desc: "",
      rewardId: "snap_dev_create",
      visible: true,
    },
  ];
  const emptyHints = {
    snap_reg_active:      "旅程刚开始，欢迎来到TapTap",
    snap_time_habit:      "偶尔晚睡，也许是舍不得放下手中的故事",
    snap_reserve:         "冒险地图上，仍有无限的未知等着你",
    snap_spend:           "TapTap零氪玩家+1",
    snap_top3games:       "有趣的世界正在等你",
    snap_playtime:        "冒险时光还未开启，期待与你并肩同行",
    snap_profile:         "你的偏好神秘莫测",
    snap_achievements:    "还没开始展示真正的实力？",
    snap_beloved:         "也许心动就在下一个瞬间",
    snap_tapexclusive:    "去发现属于你的第一款独家之作吧",
    snap_editorpick:      "编辑推荐的精彩世界，正等你踏入",
    snap_review_voice:    "试试看吧，你的声音能为大家指引方向",
    snap_community_pub:   "也许你在等待一个想分享的瞬间",
    snap_community_likes: "属于你的掌声，或许就在下一次发声之后",
    snap_night_community: "早睡早起，也是一种超能力",
    snap_badges:          "世界在等待你的名字",
    snap_friend_msgs:     "好友等你来交，一起出发吧",
    snap_dev_create:      "创作的种子还未发芽",
  };

  let snapshotCards = snapshotCardsAll.map((c) => {
    if (c.visible && c.value) return c;
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
              <div class="steamcard__empty-steamtext" style="font-size: 16px;">你的 Steam 旅程还未开始。<br>第一款佳作，也许正在等你启动。</div>
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
      desc: s.boundSteam ? "" : "绑定Steam账号可领取纪念币奖励。<br>快来绑定吧！",
      rewardId: "bind_steam",
      visible: true,
    },
    ...(() => {
      const roleCards = Array.isArray(s.boundRoleCards) ? s.boundRoleCards.filter(c => c && String(c.name || "").trim()) : [];
      const claimedCount = Math.max(0, Number(s.claimedRoleRewardsCount || 0));

      const cards = roleCards.map((c, i) => {
        const roleClaimed = i < claimedCount;
        const statsHtml = (c.stats || []).map(st =>
          `<div class="rolecard__stat"><span class="rolecard__stat-num">${escapeHtml(String(st.value))}</span><span class="rolecard__stat-label">${escapeHtml(String(st.label))}</span></div>`
        ).join("");
        return {
          label: `绑定角色 ${i + 1}`,
          _roleClaimed: roleClaimed,
          _roleOrigIdx: i,
          value: `
            <div class="rolecard-single" style="background:${c.bg || "#e2e8f0"}">
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
          `,
          desc: "",
          rewardId: `bind_role_${i}`,
          visible: true,
        };
      });

      cards.sort((a, b) => {
        if (a._roleClaimed !== b._roleClaimed) return a._roleClaimed ? 1 : -1;
        return a._roleOrigIdx - b._roleOrigIdx;
      });

      if (!cards.length && !s.allRolesBound) {
        cards.push({
          label: "绑定角色",
          value: "",
          desc: '<span style="font-size:14px">绑定游戏角色即可领取纪念币奖励，<br>快去绑定吧！</span>',
          rewardId: "bind_roles",
          visible: true,
        });
      }

      return cards;
    })(),
  ];

  const snapshotSection = snapshotCards.length
    ? `
      <div class="recap-section" data-recap-section="snap">
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
        <div class="muted small">当前没有可展示的数据卡片。</div>
      </div>
    `;

  const hasBoundRoles = Array.isArray(s.boundRoleCards) && s.boundRoleCards.filter(c => c && String(c.name || "").trim()).length > 0;
  const showAddRoleLink = !s.allRolesBound && hasBoundRoles;

  const bindSection = `
    <div class="recap-section" data-recap-section="bind">
      <div class="divider"></div>
      <div class="recap-section__head bind-section__head">
        <div>
          <div class="h2" style="margin:0 0 8px">将我的游戏世界融入TapTap</div>
          <div class="muted small">现在绑定数据也可领取奖励哦</div>
        </div>
        ${showAddRoleLink ? `
          <button class="bind-add-link" data-bind="bind_roles" type="button">
            <span class="bind-add-link__icon">+</span>
            <span class="bind-add-link__text">绑定游戏角色</span>
          </button>
        ` : ""}
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
          <div class="home-hero__note">
            数据统计截止到 2026年4月1日
            <span class="home-hero__info-btn" onclick="openDataRulesModal()">!</span>
          </div>
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
  if (grant?.points) parts.push(`<span class="pill pill--brand">${fmt(grant.points)} 纪念币</span>`);
  if (ENABLE_COUPONS && grant?.coupons) parts.push(`<span class="pill">${fmt(grant.coupons)} 点券</span>`);
  return parts.join(" ");
}

function rewardBlockHtml(rewardId, s, recap, isEmpty = false) {
  const claimed = hasClaimed(s, rewardId);

  // All snapshot cards (including empty) use multi-claim v2 button
  if (String(rewardId).startsWith("snap_")) {
    const snap = s.careerSnapshot?.recap || recap;
    const maxClaims = isEmpty ? 1 : getMaxClaims(rewardId, snap);
    const ct = getCardClaimedTimes(s, rewardId);
    const oldClaimed = (s.claimedRewardIds || []).includes(rewardId) && ct === 0;
    const eff = oldClaimed ? maxClaims : ct;
    const rem = Math.max(0, maxClaims - eff);
    if (rem <= 0) {
      return `
        <div class="arrival-v2__reward">
          <div class="arrival-v2__done">奖励已全部领取</div>
        </div>
      `;
    }
    const claimHints = {
      snap_reg_active:      "相伴年份决定领奖次数",
      snap_time_habit:      "打开次数决定领奖次数",
      snap_reserve:         "预约数量决定领奖次数",
      snap_spend:           "消费金额决定领奖次数",
      snap_top3games:       "游玩数量决定领奖次数",
      snap_playtime:        "游玩时长决定领奖次数",
      snap_profile:         "涉猎广度决定领奖次数",
      snap_achievements:    "成就数量决定领奖次数",
      snap_tapexclusive:    "游玩数量决定领奖次数",
      snap_editorpick:      "游玩数量决定领奖次数",
      snap_review_voice:    "评价数量决定领奖次数",
      snap_community_pub:   "发布数量决定领奖次数",
      snap_community_likes: "获赞数量决定领奖次数",
      snap_night_community: "冲浪天数决定领奖次数",
      snap_badges:          "徽章数量决定领奖次数",
      snap_friend_msgs:     "好友和粉丝数量决定领奖次数",
      snap_dev_create:      "作品数量决定领奖次数",
    };
    const hint = maxClaims > 1 ? (claimHints[rewardId] || "") : "";
    return `
      <div class="arrival-v2__reward">
        <button class="arrival-v2__claim-btn" data-claim-card="${rewardId}" type="button">
          <span class="arrival-v2__claim-icon">\u{1F4B0}</span>
          <span class="arrival-v2__claim-text">领取纪念币</span>
          ${hint ? `<span class="arrival-v2__claim-hint">${hint}</span>` : ""}
          ${maxClaims > 1 ? `<span class="arrival-v2__claim-badge">\u00D7${rem}次</span>` : ""}
        </button>
      </div>
    `;
  }

    // Individual role card: bind_role_0, bind_role_1, ...
  const roleMatch = rewardId.match(/^bind_role_(\d+)$/);
  if (roleMatch) {
    const roleIdx = Number(roleMatch[1]);
    const claimedCount = Math.max(0, Number(s.claimedRoleRewardsCount || 0));
    const roleClaimed = roleIdx < claimedCount;
    const per = BIND_REWARDS.find((x) => x.id === "bind_roles")?.perRole || { points: 20, coupons: 0 };
    const btn = roleClaimed
      ? `<button class="btn" disabled>已领</button>`
      : `<button class="btn btn--brand" data-claim-role="${roleIdx}">领取</button>`;
    return `
      <div class="mini-card__reward">
        <div class="row" style="align-items:flex-start; justify-content:space-between">
          <div class="grow">
            <div class="mini-card__rewardline">
              <div class="mini-card__rk">奖励</div>
              <div class="mini-card__grant">${grantPillsHtml(per)}</div>
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

  // Roles: repeatable bind & claim by count (fallback for unbound state)
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
            <span class="pill pill--brand">每个角色可 ${fmt(per.points || 0)} 纪念币</span>
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
    const illustBlock = card.illustHtml
      ? card.illustHtml
      : `<div class="arrival-v2__illust-img">插画·${escapeHtml(card.label || "")}</div>`;
    return `
      <div class="mini-card ${kindClass} mini-card--empty" role="listitem" data-card-idx="${idx}" data-reward-id="${escapeHtml(card.rewardId || "")}">
        <div class="mini-card__v">
          <div class="arrival-card arrival-card--v2">
            <div class="arrival-v2__title">${escapeHtml(card.label || "")}</div>
            <div class="arrival-v2__hero arrival-v2__hero--empty">${card.emptyHint}</div>
            <div class="arrival-v2__illust">
              ${illustBlock}
            </div>
          </div>
        </div>
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

function shareCardHtml(s, recap, { variant, nick, pid } = {}) {
  const color = MEM_CARD_COLORS[0];

  const totalCoins = calcCareerCoinsTotal(s);

  const togetherDays = calcDaysSince(parseCnDateToTs(recap.regDate));
  const years = Math.floor((togetherDays || 0) / 365);
  const days = (togetherDays || 0) % 365;
  let companionText = "";
  if (years >= 1) companionText = `相伴 ${years} 年 ${days} 天`;
  else if (togetherDays > 0) companionText = `相伴 ${togetherDays} 天`;
  else companionText = "今天刚加入";

  const fmtVal = (n) => fmt(Number(n || 0));
  const fmtHours = (h) => { const v = Number(h || 0); if (v <= 0) return ""; if (v < 1) return Math.max(0.1, v).toFixed(1); return fmt(Math.floor(v)); };
  const fmtWan = (n) => { const v = Number(n || 0); if (v <= 0) return "0"; if (v < 10000) return fmt(v); const w = v / 10000; return (w >= 1 && w % 1 < 0.05) ? Math.floor(w) + "万" : w.toFixed(1) + "万"; };

  const devGames = (Array.isArray(recap?.devGames) ? recap.devGames : []).filter(g => String(g.name || "").trim());
  const dims = [
    { label: "动作", val: Number(recap.radarAction || 0) },
    { label: "策略", val: Number(recap.radarStrategy || 0) },
    { label: "RPG", val: Number(recap.radarRPG || 0) },
    { label: "冒险", val: Number(recap.radarAdventure || 0) },
    { label: "模拟", val: Number(recap.radarSim || 0) },
    { label: "休闲", val: Number(recap.radarCasual || 0) },
  ];
  const tagsCount = dims.filter(d => d.val > 0).length;
  const topDim = dims.reduce((a, b) => b.val > a.val ? b : a, dims[0]);
  const belovedName = String(recap.belovedGameName || "").trim();

  const allKpis = [
    togetherDays > 0 && { label: "相伴时光", value: years >= 1 ? `${years}年${days}天` : `${togetherDays}天` },
    Number(recap.gamesPlayedTotal || 0) > 0 && { label: "游玩游戏", value: fmtVal(recap.gamesPlayedTotal) },
    fmtHours(recap.playTimeHours) && { label: "游玩时长", value: fmtHours(recap.playTimeHours) + "h" },
    Number(recap.lateNightOpenCount || 0) > 0 && { label: "深夜探索", value: fmtVal(recap.lateNightOpenCount) + "次" },
    Number(recap.reserveCount || 0) > 0 && { label: "预约新作", value: fmtVal(recap.reserveCount) },
    Number(recap.spendTotal || 0) > 0 && { label: "累计消费", value: fmtVal(Math.floor(recap.spendTotal)) + "元" },
    tagsCount > 0 && { label: "喜爱类型", value: topDim.label + "类" },
    Number(recap.achievementsTotal || 0) > 0 && { label: "游戏成就", value: fmtVal(recap.achievementsTotal) },
    belovedName && { label: "我的挚爱", value: escapeHtml(belovedName.length > 6 ? belovedName.slice(0, 5) + "…" : belovedName) },
    Number(recap.exclusivePlayed || 0) > 0 && { label: "独家宝藏", value: fmtVal(recap.exclusivePlayed) },
    Number(recap.editorPickPlayed || 0) > 0 && { label: "编辑之选", value: fmtVal(recap.editorPickPlayed) },
    Number(recap.reviewsCount || 0) > 0 && { label: "玩家评价", value: fmtVal(recap.reviewsCount) },
    Number(recap.communityPublished || 0) > 0 && { label: "社区足迹", value: fmtVal(recap.communityPublished) },
    Number(recap.communityLikesReceived || 0) > 0 && { label: "获赞数", value: fmtWan(recap.communityLikesReceived) },
    Number(recap.nightSurfDays || 0) > 0 && { label: "深夜冲浪", value: fmtVal(recap.nightSurfDays) + "天" },
    Number(recap.platformBadgesTotal || 0) > 0 && { label: "徽章收藏", value: fmtVal(recap.platformBadgesTotal) },
    Number(recap.friendsCount || 0) > 0 && { label: "好友", value: fmtVal(recap.friendsCount) },
    Number(recap.followersCount || 0) > 0 && { label: "粉丝", value: fmtWan(recap.followersCount) },
    devGames.length > 0 && { label: "游戏创作", value: String(devGames.length) },
  ].filter(Boolean);

  return `
    <div class="sc2" id="shareCard" style="--sc2-bg:${color.bg}; --sc2-accent:${color.accent}; --sc2-panel:${color.panel};">
      <div class="sc2__header">
        <div class="sc2__title">TapTap 十周年</div>
        <span class="sc2__badge">TapTap</span>
      </div>

      <div class="sc2__kpis">
        ${nick ? `<div class="sc2__kpi sc2__kpi--user"><div class="sc2__kpi-label">${escapeHtml(nick)}</div><div class="sc2__kpi-value sc2__kpi-value--id">ID ${escapeHtml(pid || "—")}</div></div>` : ""}
        ${allKpis.map(k => `<div class="sc2__kpi"><div class="sc2__kpi-label">${k.label}</div><div class="sc2__kpi-value">${k.value}</div></div>`).join("")}
      </div>

      <div class="sc2__coins-banner">
        <div class="sc2__coins-label">可领取纪念币</div>
        <div class="sc2__coins-row">
          <span class="sc2__coins-icon">\u{1F4B0}</span>
          <span class="sc2__coins-num">${fmt(totalCoins)}</span>
          <span class="sc2__coins-unit">枚</span>
        </div>
        <div class="sc2__coins-desc">可兑换游戏及 TapTap 专属福利</div>
      </div>
      <div class="sc2__cta">快来 TapTap 参与十周年活动，领取你的专属福利吧 →</div>
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
          return !hasClaimed(state, id);
        });
        if (idx >= 0) requestCarouselInit("recapCarouselSnap", idx);
      }
    } catch {
      // ignore
    }
  }

  wireCarousel("recapCarouselSnap", "recapDotsSnap");
  wireCarousel("recapCarouselBind", "recapDotsBind");

  // Individual role card claim buttons
  $$("[data-claim-role]").forEach((b) =>
    b.addEventListener("click", () => {
      const roleIdx = Number(b.dataset.claimRole || 0);
      const claimedCount = Math.max(0, Number(state.claimedRoleRewardsCount || 0));
      if (roleIdx < claimedCount) return;
      const r = BIND_REWARDS.find((x) => x.id === "bind_roles");
      const per = r?.perRole || { points: 20, coupons: 0 };
      const fromRect = b.getBoundingClientRect();
      state.claimedRoleRewardsCount = roleIdx + 1;
      const grant = { points: per.points || 0, coupons: per.coupons || 0 };
      addPoints(state, grant.points || 0);
      addCoupons(state, grant.coupons || 0);
      saveState();
      const trackId = b.closest?.(".carousel__track")?.id || "";
      const currentIdx = Number(b.closest?.(".mini-card")?.getAttribute("data-card-idx") || 0);
      render();
      flyGrantToSticky({ fromRect, grant }).then(() => scheduleScrollToNextCard(trackId, currentIdx));
    }),
  );


  // Multi-claim for all snapshot cards
  $$("[data-claim-card]").forEach((b) =>
    b.addEventListener("click", () => {
      const rewardId = b.getAttribute("data-claim-card");
      if (!rewardId) return;
      const recap = recapDataForState(state);
      const snap = state.careerSnapshot?.recap || recap;
      const maxClaims = getMaxClaims(rewardId, snap);
      const ct = getCardClaimedTimes(state, rewardId);
      if (ct >= maxClaims) return;
      const coins = 10 + Math.floor(Math.random() * 21);
      incrCardClaimedTimes(state, rewardId);
      addPoints(state, coins);
      const allDone = getCardClaimedTimes(state, rewardId) >= maxClaims;
      if (allDone) markClaimed(state, rewardId);
      saveState();
      const newRem = Math.max(0, maxClaims - getCardClaimedTimes(state, rewardId));
      const fromRect = b.getBoundingClientRect();
      const trackId = b.closest?.(".carousel__track")?.id || "";
      const currentIdx = Number(b.closest?.(".mini-card")?.getAttribute("data-card-idx") || 0);
      requestCarouselInit(trackId, currentIdx);
      const doneCallback = allDone ? () => scheduleScrollToNextCard(trackId, currentIdx) : undefined;
      if (_skipClaimModal) {
        flyGrantToSticky({ fromRect, grant: { points: coins, coupons: 0 } }).then(() => {
          render();
          if (doneCallback) doneCallback();
        });
      } else {
        openRegClaimModal({
          coinsEarned: coins, remaining: newRem, fromRect,
          onDone: doneCallback,
        });
      }
    }),
  );

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
        if (!grant.points && (!ENABLE_COUPONS || !grant.coupons)) return;
        markClaimed(state, id);
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
      if (id === "bind_roles") {
        const fromAddLink = b.classList.contains("bind-add-link");
        return openBindRolesModal({ autoClaim: fromAddLink });
      }
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
          coupons: ENABLE_COUPONS ? Math.max(0, Math.floor(Number(state.walletCoupons || 0) - startC)) : 0,
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
                <div class="celebrate-grant__k">纪念币</div>
                <div class="celebrate-grant__v">+${fmt(gained.points)}</div>
                <div class="celebrate-grant__d">在活动会场装扮十周年名片，兑换纪念装饰</div>
              </div>
            `);
          }
          if (ENABLE_COUPONS && gained.coupons > 0) {
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

    const btn = t?.closest?.("[data-claim], [data-claim-card], [data-bind], [data-deeplink]");
    if (!btn) return;
    const card = btn.closest?.(".mini-card");
    if (!card || !card.classList.contains("firstrecap-card--active")) return;

    // Multi-claim for all snapshot cards
    if (btn.hasAttribute("data-claim-card")) {
      if (wireFirstRecap._claiming) return;
      const rewardId = btn.getAttribute("data-claim-card");
      if (!rewardId) return;
      const recap = recapDataForState(state);
      const snap = state.careerSnapshot?.recap || recap;
      const maxClaims = getMaxClaims(rewardId, snap);
      const ct = getCardClaimedTimes(state, rewardId);
      if (ct >= maxClaims) return;
      wireFirstRecap._claiming = true;
      const coins = 10 + Math.floor(Math.random() * 21);
      incrCardClaimedTimes(state, rewardId);
      addPoints(state, coins);
      if (getCardClaimedTimes(state, rewardId) >= maxClaims) markClaimed(state, rewardId);
      saveState();
      updateFirstRecapCurrencyDom();
      const newRem = Math.max(0, maxClaims - getCardClaimedTimes(state, rewardId));
      const fromRect = btn.getBoundingClientRect();
      openRegClaimModal({ coinsEarned: coins, remaining: newRem, fromRect });
      const origContinue = $("#btnRegContinue");
      const origExchange = $("#btnRegExchange");
      const advanceIfDone = () => {
        wireFirstRecap._claiming = false;
        if (newRem <= 0) queueMicrotask(() => advanceAfterClaim());
      };
      if (origContinue) {
        origContinue.replaceWith(origContinue.cloneNode(true));
        const newBtn = $("#btnRegContinue");
        newBtn?.addEventListener("click", () => {
          closeModal();
          flyGrantToSticky({ fromRect, grant: { points: coins, coupons: 0 } }).then(() => {
            advanceIfDone();
            render();
          });
        });
      }
      if (origExchange) {
        origExchange.replaceWith(origExchange.cloneNode(true));
        const newBtn = $("#btnRegExchange");
        newBtn?.addEventListener("click", () => {
          closeModal();
          advanceIfDone();
          render();
          openShopModal();
        });
      }
      setTimeout(() => (wireFirstRecap._claiming = false), 5000);
      return;
    }

    // Claim (non-snap, e.g. bind rewards)
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
        if (!grant.points && (!ENABLE_COUPONS || !grant.coupons)) return;
        wireFirstRecap._claiming = true;
        markClaimed(state, id);
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
        <b>绑定 Steam 账号</b>：实际场景中，点击绑定会跳转至 Steam 绑定页面，完成绑定后自动返回活动页。
      </div>
      <div class="divider"></div>
      <div class="muted small">此处为 Demo 模拟流程，点击下方按钮直接模拟绑定成功。</div>
      <div class="muted small" style="margin-top:4px">绑定后可领取：<b>${BIND_REWARDS.find((x) => x.id === "bind_steam")?.grant?.points || 0} 纪念币</b></div>
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
    if (!state.steamGamesCount && !state._steamEmptyTest) {
      state.steamFavGame = "ELDEN RING";
      state.steamFavGameIcon = "https://img.tapimg.net/market/images/e2b7259807d30e498a3008cbed6be542.png";
      state.steamAccountValue = 12680.5;
      state.steamGamesCount = 286;
      state.steamPlayHours = 4236;
    }
    delete state._steamEmptyTest;
    saveState();
    closeModal();
    if (lastBindClickCtx?.trackId) requestCarouselInit(lastBindClickCtx.trackId, lastBindClickCtx.currentIdx);
    render();
    lastBindClickCtx = null;
  });
}

function openBindRolesModal({ autoClaim = false } = {}) {
  const isFirst = Math.max(0, Number(state.boundRolesCount || 0)) === 0;
  const hintText = isFirst
    ? "正式环境下，点击后会跳转到<b>游戏角色绑定页面</b>。<br>绑定完成后返回活动页，即可在卡片上领取纪念币奖励。"
    : "正式环境下，点击后会跳转到<b>游戏角色绑定页面</b>。<br>绑定完成后纪念币将自动发放。";
  const body = `
    <div class="small" style="line-height:1.55">
      <div class="hint">${hintText}</div>
      <div class="divider"></div>
      <div class="muted small">跳转：<span class="mono">taptap://bind_game_role</span></div>
    </div>
  `;
  const footer = `
    <button class="btn btn--brand" id="btnBindOneRole">模拟绑定角色</button>
    <button class="btn" id="btnCancelBindRole">取消</button>
  `;
  openModal({ title: "绑定游戏角色", bodyHtml: body, footerHtml: footer });
  $("#btnCancelBindRole")?.addEventListener("click", closeModal);
  const sampleRoles = [
    { name: "轮椅指挥官", game: "明日方舟", job: "", level: 0, stats: [{ label: "登录天数", value: "65天" }, { label: "传说级人物", value: "10" }, { label: "传说级装备", value: "49" }], bg: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)", avatar: "https://img.tapimg.net/market/images/e2b7259807d30e498a3008cbed6be542.png" },
    { name: "深海猎手", game: "明日方舟", job: "", level: 0, stats: [{ label: "登录天数", value: "128天" }, { label: "传说级人物", value: "23" }, { label: "传说级装备", value: "76" }], bg: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)", avatar: "https://img.tapimg.net/market/images/e2b7259807d30e498a3008cbed6be542.png" },
  ];
  $("#btnBindOneRole")?.addEventListener("click", () => {
    state.boundRolesCount = Math.max(0, Number(state.boundRolesCount || 0)) + 1;
    state.boundData = state.boundRolesCount > 0;
    if (!Array.isArray(state.boundRoleCards)) state.boundRoleCards = [];
    const newRoleIdx = state.boundRoleCards.length;
    state.boundRoleCards.push(sampleRoles[newRoleIdx % sampleRoles.length]);

    if (autoClaim) {
      const per = BIND_REWARDS.find((x) => x.id === "bind_roles")?.perRole || { points: 20, coupons: 0 };
      state.claimedRoleRewardsCount = Math.max(0, Number(state.claimedRoleRewardsCount || 0)) + 1;
      addPoints(state, per.points || 0);
      addCoupons(state, per.coupons || 0);
      saveState();
      closeModal();
      render();
    } else {
      saveState();
      closeModal();
      const newRewardId = `bind_role_${newRoleIdx}`;
      requestCarouselInit("recapCarouselBind", 0);
      render();
      setTimeout(() => {
        const track = document.getElementById("recapCarouselBind");
        if (track) {
          const cards = Array.from(track.querySelectorAll(".mini-card"));
          const targetIdx = cards.findIndex(el => el.getAttribute("data-reward-id") === newRewardId);
          if (targetIdx >= 0 && cards[targetIdx]) {
            cards[targetIdx].scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
          }
        }
      }, 100);
    }
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
      .slice(0, 5);
  };
  const cut24 = (str) => {
    const arr = Array.from(String(str || "").trim());
    if (arr.length <= 24) return arr.join("");
    return `${arr.slice(0, 24).join("")}…`;
  };

  const playCheckinHtml = (s) => {
    const checked = s.playtest?.checkedInGames || [];
    const count = checked.length;

    return `
      <div class="playtime-task" style="margin-top:12px">
        <div class="playtime-task-current">
          <div class="playtime-task-current__encourage"><span>去游乐场里寻找自己喜欢的游戏吧~</span><button class="btn btn--sm" id="btnShuffleGames" type="button" style="margin-left:auto">🎲 换一换</button></div>
          <div class="playtime-task-current__target">游玩打卡新游戏，每款可获得 <b>${fmt(CHECKIN_COINS_PER_GAME)}</b> 纪念币｜已打卡 <b>${count}</b> 款</div>
        </div>
        <div class="lottery-test-bar" style="margin-top:10px">
          <label class="lottery-test-bar__label">测试：模拟打卡</label>
          <button class="btn btn--sm" id="btnAddCheckin" type="button">+1 打卡</button>
          <button class="btn btn--sm" id="btnResetCheckin" type="button">重置</button>
        </div>
      </div>`;
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
              <div class="guess-card__cta-points">${g.points} 纪念币</div>
            </div>
          </button>
        `;
      }

      // 热门评论跑马灯
      const top = getTopLiked(g.id);
      const marqueeItems = top.length
        ? top.map((m) => `<span class="marquee__item">👍 ${Number(m.likes || 0)} ${escapeHtml(cut24(m.text))}</span>`).join("")
        : "";
      const marqueeTrackClass = top.length ? "marquee__track" : "marquee__track marquee__track--static";

      const mainBtn = isClaimed
        ? `<button class="btn guess-card__story-btn" type="button" data-guess-story="${g.id}">再听一次</button>`
        : `<button class="btn guess-card__story-btn" type="button" data-guess-story="${g.id}">听听它的故事</button>`;

      const tagsHtml = (g.tags || []).slice(0, 2).map(t => `<span class="guess-card__tag">${escapeHtml(t)}</span>`).join("");
      return `
        <div class="guess-card guess-card--open guess-card--col" style="--layer-color:${g.layerColor}">
          <div class="guess-card__top">
            <div class="guess-card__icon" data-discover-game="${escapeHtml(g.title)}" role="button" style="cursor:pointer">${g.icon}</div>
            <div class="guess-card__info">
              <div class="guess-card__name" data-discover-game="${escapeHtml(g.title)}" role="button" style="cursor:pointer">${escapeHtml(g.title)}</div>
              ${tagsHtml ? `<div class="guess-card__tags">${tagsHtml}</div>` : ""}
            </div>
          </div>
          <div class="guess-card__body">
            ${top.length ? `<div class="guess-card__marquee marquee" aria-label="热门评论">
              <div class="${marqueeTrackClass}">
                ${marqueeItems}${marqueeItems}
              </div>
            </div>` : ""}
          </div>
          <div class="guess-card__right">
            ${mainBtn}
            <button class="btn guess-card__action" type="button" data-guess-post="${g.id}">留言参与抽奖</button>
          </div>
        </div>
      `;
    }).join("");

    return `<div class="guess-list">${cards}</div>`;
  })();

  const checkedSet = new Set(s.playtest?.checkedInGames || []);
  const PAGE_SIZE = 6;
  const allByHeat = PLAYTEST_GAMES.map((p) => ({ p, heat: Math.max(0, Number(p.heat || 0)), checked: checkedSet.has(p.id) }))
    .sort((a, b) => {
      if (a.checked !== b.checked) return a.checked ? 1 : -1;
      return b.heat - a.heat;
    });
  const uncheckedGames = allByHeat.filter((g) => !g.checked);
  const checkedGames = allByHeat.filter((g) => g.checked);
  const mid = Math.ceil(uncheckedGames.length / 2);
  const hotGroup = uncheckedGames.slice(0, mid);
  const freshGroup = uncheckedGames.slice(mid);

  function pickFromGroup(group, count, excludeIds) {
    const preferred = group.filter((g) => !excludeIds.includes(g.p.id));
    const fallback = group.filter((g) => excludeIds.includes(g.p.id));
    const result = [];
    const pool = [...preferred];
    while (result.length < count && pool.length > 0) {
      const idx = Math.floor(Math.random() * pool.length);
      result.push(pool.splice(idx, 1)[0]);
    }
    const backup = [...fallback];
    while (result.length < count && backup.length > 0) {
      const idx = Math.floor(Math.random() * backup.length);
      result.push(backup.splice(idx, 1)[0]);
    }
    return result;
  }

  if (!state._lastPlayIds) state._lastPlayIds = [];
  const PICK_PER_GROUP = 4;
  let firstPage = [
    ...pickFromGroup(hotGroup, PICK_PER_GROUP, state._lastPlayIds),
    ...pickFromGroup(freshGroup, PICK_PER_GROUP, state._lastPlayIds),
  ].sort(() => Math.random() - 0.5);
  if (firstPage.length < PAGE_SIZE) {
    const needed = PAGE_SIZE - firstPage.length;
    const fpIds = new Set(firstPage.map((g) => g.p.id));
    const fill = checkedGames.filter((g) => !fpIds.has(g.p.id)).slice(0, needed);
    firstPage = [...firstPage, ...fill];
  }
  state._lastPlayIds = firstPage.map((g) => g.p.id);
  const firstPageIds = new Set(state._lastPlayIds);
  const restPages = allByHeat.filter((g) => !firstPageIds.has(g.p.id));
  const playItems = [...firstPage, ...restPages];

  const playCardHtml = ({ p }) => {
    const icon = iconChar(p.title);
    const tags = (p.tags || [])
      .filter((t) => !/^\s*\d+\s*分钟\s*$/g.test(String(t || "")))
      .slice(0, 3)
      .map((t) => escapeHtml(t))
      .join(" · ");
    const heat = Math.max(0, Number(p.heat || 0));
    const isChecked = checkedSet.has(p.id);
    return `
      <div class="play-card2${isChecked ? " play-card2--checked" : ""}">
        <div class="play-card2__cover">
          <span class="play-card2__cover-icon">${escapeHtml(icon)}</span>
          <span class="play-card2__heat">🔥 ${fmt(heat)}</span>
          ${isChecked ? `<span class="play-card2__checkin-badge">✅ 已打卡</span>` : ""}
        </div>
        <div class="play-card2__body">
          <div class="play-card2__name">${escapeHtml(p.title)}</div>
          <div class="play-card2__tags">${tags}</div>
          <button class="btn btn--sm play-card2__go" type="button" data-play-visit="${escapeHtml(p.url || "")}">去看看</button>
        </div>
      </div>`;
  };

  const playPages = [];
  for (let i = 0; i < playItems.length; i += PAGE_SIZE) playPages.push(playItems.slice(i, i + PAGE_SIZE));

  const playPagesHtml = playPages
    .map((page, pi) => `
      <div class="play-page2" data-card-idx="${pi}">
        <div class="play-grid">${page.map(playCardHtml).join("")}</div>
      </div>`)
    .join("");

  const playDotsHtml = playPages.length > 1
    ? playPages.map((_, i) =>
        `<button class="dot ${i === 0 ? "dot--active" : ""}" type="button" data-dot="${i}"></button>`
      ).join("")
    : "";

  return `
    <div class="home-module" id="section-discover">
      <section class="card">
        <div class="row" style="align-items:baseline">
          <p class="h1 grow">发现好游戏<br><span style="font-weight:400;font-size:13px;color:rgba(15,23,42,.35)">Discover Games</span></p>
          <span class="muted small">TapTap 坚持：<b>零分成</b></span>
        </div>
        <div class="divider"></div>
        ${capsuleHtml}
      </section>
    </div>

    <div class="home-module" id="section-gamejam">
      <section class="card">
        <div class="row" style="align-items:baseline">
          <p class="h1 grow">游戏游乐场<br><span style="font-weight:400;font-size:13px;color:rgba(15,23,42,.35)">Game Playground</span></p>
          <span class="muted small">游戏来源：TapTap制造</span>
        </div>
        ${playCheckinHtml(s)}
        <div class="carousel" style="margin-top:10px">
          <div class="hscroll carousel__track play-carousel-track" id="playCarousel" role="list">
            ${playPagesHtml}
          </div>
          ${playDotsHtml ? `<div class="carousel__dots" id="playDots">${playDotsHtml}</div>` : ""}
        </div>
      </section>
    </div>

    <div class="home-module" id="section-related">
      <section class="card">
        <div class="row">
          <p class="h2 grow">相关活动</p>
        </div>
        <div class="related-carousel carousel" style="margin-top:10px">
          <div class="hscroll carousel__track related-carousel__track" id="relatedTrack">
            <div class="related-slide" data-related="spring" data-card-idx="0">
              <div class="related-slide__bg" style="background:linear-gradient(135deg,#FFE0E0 0%,#FFB3B3 50%,#FF8A8A 100%)"></div>
              <div class="related-slide__content">
                <span class="related-slide__icon">🌸</span>
                <div class="related-slide__title">TapTap 春日祭</div>
                <div class="related-slide__desc">限定春日活动，丰厚奖励等你来拿</div>
              </div>
            </div>
            <div class="related-slide" data-related="tappc" data-card-idx="1">
              <div class="related-slide__bg" style="background:linear-gradient(135deg,#E8E0FF 0%,#C4B5FD 50%,#A78BFA 100%)"></div>
              <div class="related-slide__content">
                <span class="related-slide__icon">💻</span>
                <div class="related-slide__title">TapTap PC 十周年活动</div>
                <div class="related-slide__desc">PC 端专属庆典，精彩不容错过</div>
              </div>
            </div>
            <div class="related-slide" data-related="creator" data-card-idx="2">
              <div class="related-slide__bg" style="background:linear-gradient(135deg,#D1FAE5 0%,#6EE7B7 50%,#34D399 100%)"></div>
              <div class="related-slide__content">
                <span class="related-slide__icon">✏️</span>
                <div class="related-slide__title">创作者招募计划</div>
                <div class="related-slide__desc">加入 TapTap 创作者社区</div>
              </div>
            </div>
          </div>
          <div class="carousel__dots" id="relatedDots">
            <span class="dot dot--active" data-dot="0"></span>
            <span class="dot" data-dot="1"></span>
            <span class="dot" data-dot="2"></span>
          </div>
        </div>
      </section>
    </div>
  `;
}

function wireDiscoverInline() {
  // ── 试玩轮播 ──
  wireCarousel("playCarousel", "playDots", { cardSelector: ".play-page2", activeCardClass: "" });

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
        if (!state.capsule) state.capsule = { revealed: [], claimed: [] };
        if (!state.capsule.revealed.includes(g.id)) {
          state.capsule.revealed.push(g.id);
        }
        saveState();

        openGameStoryModal(g, () => {
          if (!state.capsule.claimed.includes(g.id)) {
            state.capsule.claimed.push(g.id);
            addPoints(state, g.points);
            saveState();
            render();
            const stickyEl = document.querySelector(".sticky-hub");
            if (stickyEl) flyGrantToSticky({ fromRect: stickyEl.getBoundingClientRect(), grant: { points: g.points, coupons: 0 } });
          } else {
            render();
          }
        });
      }, 400);
    }),
  );

  // 已揭示卡片 - 听故事（首次自动领取纪念币）
  $$("[data-guess-story]").forEach((el) =>
    el.addEventListener("click", (e) => {
      e.stopPropagation();
      const g = MUTUAL_GAMES.find((x) => x.id === el.dataset.guessStory);
      if (!g) return;
      openGameStoryModal(g, () => {
        if (!state.capsule) state.capsule = { revealed: [], claimed: [] };
        if (!state.capsule.claimed.includes(g.id)) {
          state.capsule.claimed.push(g.id);
          addPoints(state, g.points);
          saveState();
          render();
          const stickyEl = document.querySelector(".sticky-hub");
          if (stickyEl) flyGrantToSticky({ fromRect: stickyEl.getBoundingClientRect(), grant: { points: g.points, coupons: 0 } });
        }
      });
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

  // 发现好游戏 - 点击图标/游戏名跳转详情页
  $$("[data-discover-game]").forEach((el) =>
    el.addEventListener("click", (e) => {
      e.stopPropagation();
      const title = el.dataset.discoverGame || "";
      openModal({
        title: "跳转游戏详情页",
        bodyHtml: `<div style="text-align:center;padding:12px 0">
          <p style="font-size:14px;color:rgba(15,23,42,.7);line-height:1.8;margin:0">点击图标或游戏名后，将跳转至 <b>${escapeHtml(title)}</b> 的游戏详情页。</p>
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

  // ── 换一批 ──
  $("#btnShuffleGames")?.addEventListener("click", () => {
    render();
  });

  // ── 去看看按钮 ──
  $$("[data-play-visit]").forEach((btn) =>
    btn.addEventListener("click", () => {
      const url = btn.dataset.playVisit || "";
      openGameDetail(url);
    })
  );

  // ── 初体验打卡 ──
  function autoClaimCheckins() {
    if (!Array.isArray(state.playtest.checkedInGames)) state.playtest.checkedInGames = [];
    let totalGranted = 0;
    PLAYTEST_GAMES.forEach((g) => {
      const playTime = Number(state.playtest.feedback?.[g.id] || 0);
      if (playTime > 0 && !state.playtest.checkedInGames.includes(g.id)) {
        state.playtest.checkedInGames.push(g.id);
        addPoints(state, CHECKIN_COINS_PER_GAME);
        totalGranted += CHECKIN_COINS_PER_GAME;
      }
    });
    if (totalGranted > 0) {
      saveState();
      render();
    }
  }
  autoClaimCheckins();

  $("#btnAddCheckin")?.addEventListener("click", () => {
    if (!Array.isArray(state.playtest.checkedInGames)) state.playtest.checkedInGames = [];
    const unchecked = PLAYTEST_GAMES.filter((g) => !state.playtest.checkedInGames.includes(g.id));
    if (unchecked.length === 0) return toast("所有游戏已打卡");
    const g = unchecked[0];
    if (!state.playtest.feedback) state.playtest.feedback = {};
    state.playtest.feedback[g.id] = 1;
    state.playtest.checkedInGames.push(g.id);
    addPoints(state, CHECKIN_COINS_PER_GAME);
    saveState();
    render();
  });

  $("#btnResetCheckin")?.addEventListener("click", () => {
    const earned = (state.playtest.checkedInGames || []).length * CHECKIN_COINS_PER_GAME;
    state.playtest.checkedInGames = [];
    state.playtest.feedback = {};
    state.points = Math.max(0, (state.points || 0) - earned);
    saveState();
    render();
    toast("已重置打卡进度");
  });

  // ── 相关活动 banner 点击 ──
  const relatedInfo = {
    spring: { title: "TapTap 春日祭", url: "https://www.taptap.cn/events/spring-festival", type: "h5", desc: "春日限定活动，参与互动赢取丰厚奖励，与好友一起迎接春天！" },
    tappc: { title: "TapTap PC 十周年活动", url: "https://www.taptap.cn/events/tappc-10th-anniversary", type: "h5", desc: "TapTap PC 端十周年专属庆典，参与活动赢取 PC 游戏大奖！" },
    creator: { title: "创作者招募计划", url: "https://www.taptap.cn/moment/creator-program", type: "post", desc: "加入 TapTap 创作者社区，分享你的游戏见解，获得专属权益！" },
  };
  $$("[data-related]").forEach((el) =>
    el.addEventListener("click", () => {
      const key = el.dataset.related;
      const info = relatedInfo[key];
      if (!info) return;
      window.open(info.url, "_blank", "noopener,noreferrer");
    }),
  );

  // ── 相关活动轮播（自定义拖拽，不阻止 click 事件） ──
  {
    const track = $("#relatedTrack");
    const dotsWrap = $("#relatedDots");
    if (track && dotsWrap) {
      const slides = () => Array.from(track.querySelectorAll(".related-slide"));
      const dots = () => Array.from(dotsWrap.querySelectorAll(".dot"));
      const syncDots = () => {
        const sl = slides();
        if (!sl.length) return;
        const idx = Math.round(track.scrollLeft / sl[0].offsetWidth);
        dots().forEach((d, i) => d.classList.toggle("dot--active", i === idx));
      };
      track.addEventListener("scroll", syncDots, { passive: true });
      dotsWrap.addEventListener("click", (e) => {
        const d = e.target.closest(".dot");
        if (!d) return;
        const i = Number(d.dataset.dot || 0);
        const sl = slides();
        if (sl[i]) sl[i].scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
      });

      let dragStartX = 0, dragStartScroll = 0, isDrag = false, didMove = false;
      track.addEventListener("mousedown", (e) => {
        if (e.button !== 0) return;
        isDrag = true; didMove = false;
        dragStartX = e.pageX;
        dragStartScroll = track.scrollLeft;
        track.style.cursor = "grabbing";
      });
      track.addEventListener("mousemove", (e) => {
        if (!isDrag) return;
        const dx = e.pageX - dragStartX;
        if (Math.abs(dx) > 4) didMove = true;
        track.scrollLeft = dragStartScroll - dx;
      });
      const endDrag = () => { isDrag = false; track.style.cursor = ""; };
      track.addEventListener("mouseup", endDrag);
      track.addEventListener("mouseleave", endDrag);
      track.addEventListener("click", (e) => {
        if (!didMove) return;
        e.stopPropagation();
        didMove = false;
      }, true);
    }
  }

}

function shopView(s) {
  const frameCards = SHOP_ITEMS.frames.map((f) => shopItemCard("frame", f, s)).join("");
  const badgeCards = SHOP_ITEMS.badges.map((b) => shopItemCard("badge", b, s)).join("");
  const today = dayKeyLocal();
  const already = String(s.daily?.lotteryDayKey || "") === today;
  const lotteryHtml = ENABLE_COUPONS
    ? `
    <section class="card">
      <div class="row">
        <p class="h2 grow">抽点券</p>
        <span class="${pillClass("warn")}">每日一次</span>
      </div>
      <div class="item" style="margin-top:10px">
        <div class="row">
          <div class="grow">
            <div class="item__title">${SHOP_ITEMS.lottery.title}</div>
            <div class="item__desc">每日限 1 次，消耗 ${SHOP_ITEMS.lottery.cost} 纪念币抽取点券（可能抽不到）。</div>
          </div>
          <span class="pill">-${SHOP_ITEMS.lottery.cost} 纪念币</span>
        </div>
        <div class="item__meta">
          <span class="tag">${already ? "今天已抽" : "今日可抽"}</span>
          <button class="btn btn--brand" id="btnLottery" ${already ? "disabled" : ""}>${already ? "今日已抽" : "每日抽一次"}</button>
        </div>
      </div>
    </section>
    `
    : "";
  return `
    <section class="card">
      <div class="row">
        <div class="grow">
          <p class="h1">十周年福利</p>
          <p class="muted small" style="margin:6px 0 0">用纪念币抽奖或兑换纪念装饰。</p>
        </div>
        <span class="pill">当前纪念币：<b>${fmt(s.points)}</b></span>
      </div>
      <div class="divider"></div>
      <div class="hint">
        <b>小提示</b>：头像框/徽章先作为可收藏的纪念；也可以在这里兑换常用装饰。
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
    ${lotteryHtml}
  `;
}

function shopItemCard(kind, item, s) {
  const owned = kind === "frame" ? s.inventory.frames.includes(item.id) : s.inventory.badges.includes(item.id);
  const canBuy = s.points >= item.cost;

  const rightBtn = owned
    ? `<button class="btn" disabled>已拥有</button>`
    : `<button class="btn btn--brand" data-buy="${kind}:${item.id}" ${canBuy ? "" : "disabled"}>${canBuy ? `${fmt(item.cost)}纪念币兑换` : "纪念币不足"}</button>`;

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
  // 抽奖按钮
  $("#btnWelfareLottery")?.addEventListener("click", () => {
    if (state.points < LOTTERY_COST) return toast("纪念币不足");
    state.points -= LOTTERY_COST;
    if (!Array.isArray(state.lotteryWins)) state.lotteryWins = [];

    const forceKind = state._testForceKind || null;
    let prize = null;
    if (forceKind === "__none__") {
      prize = null;
    } else {
      let available = LOTTERY_POOL.filter((p) => {
        const wonCount = state.lotteryWins.filter((w) => w.id === p.id).length;
        return wonCount < p.qty;
      });
      if (forceKind) {
        const kindPool = available.filter((p) => p.kind === forceKind);
        if (kindPool.length > 0) available = kindPool;
      }
      prize = available.length > 0 ? available[Math.floor(Math.random() * available.length)] : null;
    }
    if (prize) state.lotteryWins.push({ id: prize.id, kind: prize.kind, title: prize.title, icon: prize.icon, time: new Date().toISOString() });
    saveState();

    const btn = $("#btnWelfareLottery");
    if (btn) { btn.disabled = true; btn.textContent = "抽奖中…"; }

    const items = $$(".pool-grid .pool-item");
    const prizeIdx = prize ? LOTTERY_POOL.findIndex((p) => p.id === prize.id) : -1;
    const noPrize = !prize;
    const totalSteps = noPrize
      ? items.length * 3 + Math.floor(Math.random() * items.length)
      : items.length * 3 + (prizeIdx >= 0 ? prizeIdx : 0);
    let step = 0;

    function runHighlight() {
      items.forEach((el) => el.classList.remove("pool-item--highlight"));
      const cur = step % items.length;
      items[cur]?.classList.add("pool-item--highlight");

      step++;
      if (step <= totalSteps) {
        const progress = step / totalSteps;
        const delay = 60 + 260 * progress * progress;
        setTimeout(runHighlight, delay);
      } else if (noPrize) {
        items.forEach((el) => el.classList.remove("pool-item--highlight"));
        setTimeout(() => { render(); showLotteryResult(prize); }, 800);
      } else {
        setTimeout(() => {
          items.forEach((el) => el.classList.remove("pool-item--highlight"));
          render();
          showLotteryResult(prize);
        }, 350);
      }
    }
    runHighlight();
  });

  function showLotteryResult(prize) {
    let extraHtml = "";
    let footerExtra = "";
    if (prize) {
      if (prize.kind === "frame") {
        extraHtml = `<div style="margin-top:12px"><span style="font-size:13px;color:rgba(15,23,42,.55)">恭喜获得头像框，可在个人主页使用</span></div>`;
      } else if (prize.kind === "coupon") {
        extraHtml = `<div style="margin-top:12px"><span style="font-size:13px;color:rgba(15,23,42,.55)">可购买站内游戏、PC CDKey、云玩服务等</span></div>`;
        footerExtra = `<button class="btn" id="btnLotteryWallet" type="button">查看我的钱包</button>`;
      } else if (prize.kind === "voucher") {
        extraHtml = `<div style="margin-top:12px;font-size:13px;color:rgba(15,23,42,.55);line-height:1.6">TapTap 安卓客户端 - 我的游戏 - 右上角更多 - 兑换中心。<br>游戏库存有限，优惠券有效期以实际游戏库存为准，请尽快兑换下单。</div>`;
      } else if (prize.kind === "cloud") {
        extraHtml = `<div style="margin-top:12px;font-size:13px;color:rgba(15,23,42,.55);line-height:1.6">恭喜获得云玩兑换码，在 TapTap 安卓客户端 - 我的游戏 - 右上角更多 - 兑换中心，兑换时长。</div>`;
      } else if (prize.kind === "cdkey") {
        extraHtml = `<div style="margin-top:12px;padding:10px 14px;background:rgba(15,23,42,.04);border-radius:8px;font-family:monospace;font-size:14px;letter-spacing:1px;word-break:break-all;color:#0F172A">${escapeHtml(prize.cdkey || "XXXX-XXXX")}</div><div style="margin-top:8px"><span style="font-size:13px;color:rgba(15,23,42,.55)">前往 TapTap 兑换中心使用</span></div>`;
      }
    }
    const body = prize
      ? `<div style="text-align:center;padding:16px 0"><div style="font-size:48px;margin-bottom:12px">${prize.icon}</div><div style="font-size:16px;font-weight:800;color:#0F172A">${escapeHtml(prize.title)}</div>${extraHtml}</div>`
      : `<div style="text-align:center;padding:16px 0"><div style="font-size:48px;margin-bottom:12px"></div><div style="font-size:16px;font-weight:800;color:#0F172A">很遗憾没抽到，再试一次吧~</div></div>`;
    const footerBtns = `${footerExtra}<button class="btn btn--brand" id="btnLotteryOk">知道了</button>`;
    openModal({
      title: "抽奖结果",
      bodyHtml: body,
      footerHtml: footerBtns,
    });
    $("#btnLotteryOk")?.addEventListener("click", () => {
      closeModal();
      if (inModal) openShopModal();
    });
    $("#btnLotteryWallet")?.addEventListener("click", () => {
      closeModal();
      openWalletModal();
    });
  }

  // 测试：指定必中类型
  $("#selTestForceKind")?.addEventListener("change", (e) => {
    state._testForceKind = e.target.value || "";
  });

  // 测试：重置今日抽奖机会
  $("#btnTestResetLottery")?.addEventListener("click", () => {
    if (state.daily) state.daily.welfareLotteryDay = "";
    saveState();
    toast("已重置今日抽奖机会");
    if (inModal) openShopModal();
  });

  // 我的奖品抽屉
  $("#btnTogglePrizes")?.addEventListener("click", () => {
    const body = $("#prizesDrawerBody");
    const arrow = $("#prizesArrow");
    if (!body) return;
    const open = body.classList.toggle("is-open");
    if (arrow) arrow.textContent = open ? "▲" : "▼";
  });
  $$("[data-prize-wallet]").forEach((b) =>
    b.addEventListener("click", () => { closeModal(); openWalletModal(); })
  );

  // 兑换按钮
  $$("[data-exchange]").forEach((b) =>
    b.addEventListener("click", () => {
      const id = String(b.dataset.exchange || "");
      const item = EXCHANGE_ITEMS.find((x) => x.id === id);
      if (!item) return;
      if (!Array.isArray(state.exchangeOwned)) state.exchangeOwned = [];
      if (state.exchangeOwned.includes(id)) return toast("已拥有");
      const exchangedCount = state.exchangeOwned.filter((eid) => eid === id).length;
      if (exchangedCount >= item.qty) return toast("库存不足");
      const enough = state.points >= item.cost;
      const body = `
        <div class="small" style="line-height:1.6">
          <div class="hint">
            <div style="font-size:32px;text-align:center;margin-bottom:8px">${item.icon}</div>
            <b>${escapeHtml(item.title)}</b>
            <div class="muted small" style="margin-top:6px">消耗 <b>${fmt(item.cost)}</b> 纪念币</div>
          </div>
          <div class="divider"></div>
          <div class="muted small">当前纪念币：<b>${fmt(state.points || 0)}</b></div>
          ${enough ? "" : `<div class="muted small" style="margin-top:6px">纪念币不足</div>`}
        </div>
      `;
      const footer = enough
        ? `<button class="btn" id="btnExCancel">取消</button><button class="btn btn--brand" id="btnExOk">${fmt(item.cost)} 纪念币兑换</button>`
        : `<button class="btn btn--brand" id="btnExOk">知道了</button>`;
      openModal({ title: enough ? "确认兑换" : "纪念币不足", bodyHtml: body, footerHtml: footer });
      $("#btnExCancel")?.addEventListener("click", () => {
        closeModal();
        if (inModal) openShopModal();
      });
      $("#btnExOk")?.addEventListener("click", () => {
        if (!enough) { closeModal(); if (inModal) openShopModal(); return; }
        state.points -= item.cost;
        state.exchangeOwned.push(id);
        if (!Array.isArray(state.exchangeRecords)) state.exchangeRecords = [];
        state.exchangeRecords.push({
          id: item.id, title: item.title, icon: item.icon,
          time: new Date().toISOString(),
          type: item.type || "", key: item.key || "",
        });
        saveState();
        if (item.type === "giftcode") {
          const giftBody = `<div style="text-align:center;padding:16px 0"><div style="font-size:48px;margin-bottom:12px">${item.icon}</div><div style="font-size:16px;font-weight:800;color:#0F172A">${escapeHtml(item.title)}</div><div style="margin-top:12px;padding:10px 14px;background:rgba(15,23,42,.04);border-radius:8px;font-family:monospace;font-size:14px;letter-spacing:1px;word-break:break-all;color:#0F172A">${escapeHtml(item.key || "")}</div><div style="margin-top:8px"><span style="font-size:13px;color:rgba(15,23,42,.55)">可前往游戏内兑换</span></div></div>`;
          openModal({ title: "兑换成功", bodyHtml: giftBody, footerHtml: `<button class="btn btn--brand" id="btnGiftOk">知道了</button>` });
          $("#btnGiftOk")?.addEventListener("click", () => { closeModal(); render(); if (inModal) openShopModal(); });
        } else {
          const hintText = item.id.includes("frame") ? "恭喜获得头像框，可在个人主页使用" : "恭喜获得徽章，可在个人主页使用";
          const successBody = `<div style="text-align:center;padding:16px 0"><div style="font-size:48px;margin-bottom:12px">${item.icon}</div><div style="font-size:16px;font-weight:800;color:#0F172A">${escapeHtml(item.title)}</div><div style="margin-top:12px"><span style="font-size:13px;color:rgba(15,23,42,.55)">${hintText}</span></div></div>`;
          openModal({ title: "兑换成功", bodyHtml: successBody, footerHtml: `<button class="btn btn--brand" id="btnExSuccessOk">知道了</button>` });
          $("#btnExSuccessOk")?.addEventListener("click", () => { closeModal(); render(); if (inModal) openShopModal(); });
        }
      });
    }),
  );

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
          <div><b>纪念币（可编辑）</b></div>
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

      <div>
        <div><b>卡片预览</b></div>
        <div class="muted small">平铺查看当前数据下所有生涯卡片的展示效果。</div>
        <div style="margin-top:8px">
          <button class="btn btn--ghost" id="btnPreviewCards" type="button">查看全部卡片</button>
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
    if (!state.loggedIn) {
      toast("已切换为未登录状态，返回开场页");
      showOpeningGate();
    } else {
      toast("已切换为登录状态");
      render();
    }
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
    chkSteam.checked = false;
    state.steamFavGame = "";
    state.steamFavGameIcon = "";
    state.steamAccountValue = 0;
    state.steamGamesCount = 0;
    state.steamPlayHours = 0;
    state._steamEmptyTest = true;
    toast("已切换为新注册玩家数据（含 Steam 清空，未应用）");
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

  $("#btnPreviewCards")?.addEventListener("click", () => {
    closeModal();
    openCardsPreview();
  });
}

function openCardsPreview() {
  const existing = document.getElementById("cardsPreviewOverlay");
  if (existing) existing.remove();

  const recap = recapDataForState(state);
  const viewHtml = recapInlineView(state, recap, { sortUnclaimedFirst: false });
  const parser = document.createElement("div");
  parser.innerHTML = viewHtml;
  const cards = Array.from(parser.querySelectorAll('.mini-card[data-reward-id^="snap_"]'));
  if (!cards.length) {
    toast("没有可展示的卡片");
    return;
  }
  const cardsHtml = cards.map(el => {
    el.style.cssText = "height:auto;min-height:0;flex:0 0 auto;width:340px;min-width:340px;transform:none;opacity:1;scroll-snap-align:none";
    el.querySelectorAll("button").forEach(btn => {
      btn.disabled = true;
      btn.style.pointerEvents = "none";
      btn.style.opacity = ".85";
    });
    return el.outerHTML;
  }).join("");

  const overlay = document.createElement("div");
  overlay.id = "cardsPreviewOverlay";
  overlay.innerHTML = `
    <div style="position:fixed;inset:0;z-index:9999;background:var(--bg,#f0f2f5);overflow-y:auto;display:flex;flex-direction:column">
      <div style="position:sticky;top:0;z-index:1;background:var(--bg,#f0f2f5);padding:12px 16px;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid var(--border,#e2e8f0)">
        <div style="font-size:16px;font-weight:900">全部生涯卡片预览（${cards.length} 张）</div>
        <button id="btnClosePreview" style="border:none;background:rgba(15,23,42,.08);border-radius:8px;padding:6px 16px;font-size:14px;font-weight:700;cursor:pointer;color:var(--text,#0f172a)">关闭</button>
      </div>
      <div style="flex:1;padding:16px;display:flex;flex-wrap:wrap;gap:16px;justify-content:center;align-content:flex-start">
        ${cardsHtml}
      </div>
    </div>
  `;
  document.body.appendChild(overlay);
  overlay.querySelector("#btnClosePreview")?.addEventListener("click", () => overlay.remove());
}

function getGamePlatform() {
  const ua = navigator.userAgent || "";
  if (/TapTap/i.test(ua)) return "app";
  if (/TapTapPC|Electron/i.test(ua)) return "pc";
  return "web";
}

function openGameDetail(url) {
  if (!url) return;
  const platform = getGamePlatform();
  const platformLabel = platform === "app" ? "App" : platform === "pc" ? "PC 客户端" : "Web 浏览器";
  openModal({
    title: "游戏详情页",
    bodyHtml: `<div style="text-align:center;padding:16px 0">
      <p style="font-size:14px;color:rgba(15,23,42,.7);line-height:1.8;margin:0 0 12px">点击游戏卡片后，正式环境将跳转到对应的游戏详情页。</p>
      <div style="display:inline-flex;align-items:center;gap:6px;padding:6px 14px;border-radius:8px;background:rgba(15,23,42,.04);margin:0 0 12px">
        <span style="font-size:12px;color:rgba(15,23,42,.45)">跳转平台：</span>
        <span style="font-size:12px;font-weight:700;color:rgba(15,23,42,.65)">${platformLabel}</span>
      </div>
      <p class="muted small" style="margin:0;word-break:break-all">${escapeHtml(url)}</p>
    </div>`,
    footerHtml: `<button class="btn btn--brand" id="btnGameDetailOk">知道了</button>`,
  });
  $("#btnGameDetailOk")?.addEventListener("click", closeModal);
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
        title: "TapTap 十周年活动授权协议",
        bodyHtml: `<div style="padding:16px;font-size:13px;line-height:1.8;color:var(--text-secondary);max-height:60vh;overflow-y:auto">
          <p>欢迎参与"TapTap十周年"活动！</p>
          <p>在参与TapTap十周年活动之前，请您仔细阅读并充分理解本协议及<a href="https://www.taptap.cn/doc/privacy-policy/" target="_blank" style="color:var(--brand)">《TapTap隐私政策》</a>，若您不同意本协议及《TapTap隐私政策》中的任何内容，请立即停止参加本活动。您开启"TapTap 十周年"活动将被视为已仔细阅读、充分理解并接受本协议及《TapTap隐私政策》下的所有条款。</p>
          <p><b>1.</b> 为了生成您的十周年生涯回顾，您同意授权TapTap使用您从注册TapTap平台开始至2026年4月1日期间的相关用户信息、使用记录，并据此进行报告分析，以向您提供个性化专属展示。<br>所涉及的用户信息、使用记录包括：您的账号信息（包括ID、昵称、头像、注册日期及注册天数）；应用启动时间及次数；预约游戏记录；下载游戏记录及游戏时长（含云玩、TapPlay功能）；评价记录；浏览记录；内容发布记录；点赞及获赞记录；游戏成就及战绩记录；STEAM数据记录；徽章取得记录；游戏购买及消费记录。<br>您理解并同意，上述信息是TapTap生成您的十周年生涯回顾的必备信息，如您拒绝授权，TapTap将无法为您提供您的十周年生涯回顾。未经您的书面同意，我们保证仅在本协议及《TapTap隐私政策》约定的范围使用您的个人信息。</p>
          <p><b>2.</b> 您的十周年生涯回顾依据您的授权范围由系统自动生成，请您理解其与实际情况可能存在偏差。</p>
          <p><b>3.</b> 您的十周年生涯回顾及其内容（包括但不限于软件、技术、程序、网页、文字、图片、音频、视频、页面设计、商标等）的知识产权由TapTap或实际权利人享有。</p>
          <p><b>4.</b> 请您注意，本次活动的结果页面会包含您的个人信息，当您选择分享您的十周年生涯回顾截图或结果页面时，其他人会看到您的相关信息，故请您谨慎选择。</p>
          <p><b>5.</b> 本产品/页面使用 LINE Seed 字体，LINE Seed 字体著作权归 LY Corporation 所有，并依据 SIL Open Font License, Version 1.1 授权发布。</p>
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

  if (!state.entryGateDone || !state.loggedIn) {
    // 首次进入 或 未登录 → 展示开场页
    await runOpeningGate();
    state.entryGateDone = true;
    saveState();
    location.hash = "#/home";
  } else {
    // 已登录 + 已通过开场 → 直接进入活动首页
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

