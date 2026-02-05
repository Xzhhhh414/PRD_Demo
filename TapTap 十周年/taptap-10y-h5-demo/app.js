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
 *   points: number;
 *   walletCoupons: number;
 *   claimedRewardIds: string[];
 *   inventory: { frames: string[]; badges: string[]; };
 *   equipped: { frame?: string; badge?: string; };
 *   playtest: { completed: string[]; feedback: Record<string,string> };
 *   mutualMessages?: Record<string, { text: string; ts: number; likes?: number }[]>;
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
  { id: "p1", title: "《雾灯之下》", desc: "10 分钟试玩 · 轻解谜 · 叙事氛围", points: 25 },
  { id: "p2", title: "《纸片机甲工坊》", desc: "10 分钟试玩 · 组装 · 轻战斗", points: 25 },
  { id: "p3", title: "《夜行列车：第7节车厢》", desc: "10 分钟试玩 · 推理 · 多结局", points: 30 },
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
    tags: ["射击", "吃鸡", "多人联机"],
    score: 8.8,
    tapExclusive: false,
    postUrl: "https://www.taptap.cn/moment/756862887149965161",
  },
  {
    id: "m3",
    title: "心动小镇",
    url: "https://www.taptap.cn/app/45213?os=pc",
    tags: ["治愈", "模拟经营", "多人联机"],
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
    { id: "f_ten_years", title: "头像框：十年同行", cost: 120, icon: "🟩" },
    { id: "f_discover", title: "头像框：发现者", cost: 180, icon: "🧭" },
  ],
  badges: [
    { id: "b_fair", title: "徽章：公正评审", cost: 160, icon: "⚖️" },
    { id: "b_maker", title: "徽章：TapMaker", cost: 200, icon: "🛠️" },
  ],
  lottery: {
    id: "lot_points",
    title: "积分抽点券",
    cost: 30,
    prize: { kind: "coupon", value: 10 },
    winRate: 0.08,
  },
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
    points: 0,
    walletCoupons: 0,
    claimedRewardIds: [],
    inventory: { frames: [], badges: [] },
    equipped: {},
    playtest: { completed: [], feedback: {} },
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
  };
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return fallback;
    const parsed = JSON.parse(raw);
    return { ...fallback, ...parsed };
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
    snap_spend: fixed(clamp(Math.floor(spendTotal / 100) * 10, 10, 300)),

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

function openModal({ title, bodyHtml, footerHtml, hideClose = false, lockClose = false }) {
  $("#modalTitle").textContent = title;
  $("#modalBody").innerHTML = bodyHtml || "";
  $("#modalFooter").innerHTML = footerHtml || "";
  const closeBtn = $("#modalClose");
  closeBtn?.classList.toggle("hidden", !!hideClose);
  closeBtn?.setAttribute("aria-hidden", hideClose ? "true" : "false");
  $("#modal")?.setAttribute("data-lock-close", lockClose ? "1" : "0");
  $("#modalBackdrop").classList.remove("hidden");
  $("#modal").classList.remove("hidden");
  $("#modalBackdrop").setAttribute("aria-hidden", "false");
}

function closeModal() {
  $("#modalBackdrop").classList.add("hidden");
  $("#modal").classList.add("hidden");
  $("#modalBackdrop").setAttribute("aria-hidden", "true");
  const closeBtn = $("#modalClose");
  closeBtn?.classList.remove("hidden");
  closeBtn?.setAttribute("aria-hidden", "false");
  $("#modal")?.setAttribute("data-lock-close", "0");
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

  const trackRect = track.getBoundingClientRect();
  const cardRect = card.getBoundingClientRect();
  const current = track.scrollLeft;
  const cardCenter = (cardRect.left - trackRect.left) + current + cardRect.width / 2;
  const targetLeft = Math.max(0, Math.round(cardCenter - trackRect.width / 2));
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

  const trackRect = track.getBoundingClientRect();
  const cardRect = card.getBoundingClientRect();
  const startLeft = track.scrollLeft;
  const cardCenter = (cardRect.left - trackRect.left) + startLeft + cardRect.width / 2;
  const endLeft = Math.max(0, Math.round(cardCenter - trackRect.width / 2));

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
  // Scroll after user confirms (may be after render)
  setTimeout(() => {
    const track = document.getElementById(trackId);
    if (!track) return;
    const cards = Array.from(track.querySelectorAll(".mini-card"));
    if (!cards.length) return;
    const cur = Math.max(0, Math.min(curIdx, cards.length - 1));
    const idx = Math.min(cur + 1, cards.length - 1);
    const target = cards[idx];
    if (!target) return;
    if (idx === cur) return; // already last: do nothing (avoid any snap animation)
    // Slightly slower animation to avoid "flash"
    animateTrackToCard(track, target, { durationMs: 560 });
  }, 80);
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
    shop: "积分商店",
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
  // Home-only for “回顾/好游戏/试玩”；仅保留商店为单独页面
  if (route === "discover" || route === "recap") {
    navigate("home");
    // wait for render, then scroll
    setTimeout(() => scrollToId(route === "recap" ? "section-recap" : "section-discover"), 60);
    return;
  }

  ensureCareerSnapshot(state);
  document.title = `TapTap 十周年 · ${routeTitle(route)}`;
  const main = $("#main");
  const recap = state.careerSnapshot?.recap || recapDataForState(state);

  // Header UI
  const backBtn = $("#btnBack");
  if (backBtn) backBtn.classList.toggle("hidden", route === "home");
  const subtitle = $("#headerSubtitle");
  if (subtitle) subtitle.textContent = route === "home" ? "" : routeTitle(route);

  if (route === "home") {
    main.innerHTML = homeView(state, recap);
    wireHome();
    return;
  }
  if (route === "shop") {
    main.innerHTML = shopView(state);
    wireShop();
    return;
  }

  main.innerHTML = notFoundView();
}

function scrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "start" });
}

function homeView(s, recap) {
  return `
    <section class="card">
      <div class="row" style="gap:12px">
        <div style="flex:1">
          <div style="display:flex; align-items:center; gap:8px; margin-bottom:4px">
            <div class="pill pill--brand">
              积分 <b>${fmt(s.points)}</b>
            </div>
            <button class="link-btn" id="btnGoShop" type="button">兑换奖励</button>
          </div>
          <div class="muted small">可兑换个人装饰和参与点券抽奖</div>
        </div>
        <div style="flex:1">
          <div style="display:flex; align-items:center; gap:8px; margin-bottom:4px">
            <div class="pill">
              已得点券 <b>${fmt(s.walletCoupons || 0)}</b>
            </div>
            <button class="link-btn" id="btnWallet" type="button">我的钱包</button>
          </div>
          <div class="muted small">可购买站内游戏、PC CDKey、云玩服务等</div>
        </div>
      </div>
    </section>

    <div id="section-recap"></div>
    ${recapInlineView(s, recap)}

    <div id="section-discover"></div>
    ${discoverInlineView(s)}
  `;
}

function wireHome() {
  $("#btnGoShop")?.addEventListener("click", () => navigate("shop"));
  $("#btnWallet")?.addEventListener("click", openWalletModal);

  wireRecapInline();
  wireDiscoverInline();
}

function recapInlineView(s, recap) {
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
  const snapshotCards = snapshotCardsAll.filter((c) => c.visible);

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
      <div class="h2" style="margin:0 0 8px">TapTap 生涯</div>
      <div style="margin-top:10px" class="carousel" aria-label="生涯数据卡片">
        <div class="hscroll carousel__track" id="recapCarouselSnap" role="list">
          ${snapshotCards.map((c, i) => miniCardHtml(c, i, s, snap)).join("")}
        </div>
        <div class="carousel__dots" id="recapDotsSnap" aria-label="生涯数据分页">
          ${snapshotCards
            .map(
              (_, i) =>
                `<button class="dot ${i === 0 ? "dot--active" : ""}" type="button" data-dot="${i}" aria-label="第 ${i + 1} 张"></button>`,
            )
            .join("")}
        </div>
      </div>
    `
    : `
      <div class="h2" style="margin:0 0 8px">TapTap 生涯</div>
      <div class="muted small">当前没有可展示的数据卡片。</div>
    `;

  const bindSection = `
    <div class="divider"></div>
    <div class="h2" style="margin:0 0 8px">将我的游戏世界融入TapTap</div>
    <div class="muted small">现在绑定数据也可领取奖励哦</div>
    <div style="margin-top:10px" class="carousel" aria-label="可补齐数据卡片">
      <div class="hscroll carousel__track" id="recapCarouselBind" role="list">
        ${bindCards.filter((c) => c.visible).map((c, i) => miniCardHtml(c, i, s, snap)).join("")}
      </div>
      <div class="carousel__dots" id="recapDotsBind" aria-label="可补齐数据分页">
        ${bindCards
          .map(
            (_, i) =>
              `<button class="dot ${i === 0 ? "dot--active" : ""}" type="button" data-dot="${i}" aria-label="第 ${i + 1} 张"></button>`,
          )
          .join("")}
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
    <div class="mini-card ${kindClass}" role="listitem" data-card-idx="${idx}">
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
  $("#btnToggleShare")?.addEventListener("click", () => {
    const recap = state.careerSnapshot?.recap || recapDataForState(state);
    const body = `
      <div class="small" style="line-height:1.55">
        ${shareCardHtml(state, recap, { variant: "recap" })}
      </div>
    `;
    const footer = `
      <button class="btn" id="btnShareRecap">复制分享文案</button>
      <button class="btn btn--brand" id="btnDownloadCard">下载分享卡</button>
    `;
    openModal({ title: "分享回顾", bodyHtml: body, footerHtml: footer });

    $("#btnShareRecap")?.addEventListener("click", async () => {
      const recap = state.careerSnapshot?.recap || recapDataForState(state);
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
      const reg = String(recap.regDate || "").trim();
      const downloads = Number(recap.downloadsCount || 0);
      const play = String(recap.playTimeTotal || "").trim();
      const favGame = String(recap.topGame1 || "").trim();
      const favGenre = oneTag(recap.topGenre1 || recap.favoriteGenre);
      const black = Number(recap.badgesBlackGoldTotal || 0);
      const plat = Number(recap.platinumAchievementsTotal || 0);
      const reviews = Number(recap.reviewsCount || 0);
      const zuiti = Number(recap.zuitiReviewsCount || recap.zuitiCount || 0);
      const criticYear = maxYear(recap.taptapCriticYears);

      const parts = [];
      if (reg) parts.push(`${reg} 加入`);
      if (downloads > 0) parts.push(`下载 ${fmt(downloads)} 个游戏`);
      if (play) parts.push(`总时长 ${play}`);
      if (favGame) parts.push(`最爱 ${favGame}`);
      if (favGenre) parts.push(`最爱类型 ${favGenre}`);
      if (black > 0) parts.push(`黑金徽章 ${fmt(black)} 个`);
      if (plat > 0) parts.push(`白金成就 ${fmt(plat)} 个`);
      if (reviews > 0) parts.push(`评价 ${fmt(reviews)} 条`);
      if (zuiti > 0) parts.push(`嘴替 ${fmt(zuiti)} 条`);
      if (criticYear) parts.push(`${criticYear} 玩赏家`);
      const text = `我的 TapTap 生涯回顾：${parts.join("，") || "一些很酷的数据"}。#十年同行`;
      try {
        await navigator.clipboard.writeText(text);
        toast("已复制分享文案");
      } catch {
        toast("复制失败（浏览器权限限制）");
      }
    });

    $("#btnDownloadCard")?.addEventListener("click", () => {
      // Preview-only: create a simple downloadable text file as placeholder
      const recap = state.careerSnapshot?.recap || recapDataForState(state);
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
      const criticYear = maxYear(recap.taptapCriticYears);
      const content = [
        "TapTap 十周年 · 生涯回顾分享卡",
        `加入：${String(recap.regDate || "").trim() || "—"}`,
        `下载：${fmt(Number(recap.downloadsCount || 0))} 个游戏`,
        `总时长：${String(recap.playTimeTotal || "").trim() || "—"}`,
        `最爱游戏：${String(recap.topGame1 || "").trim() || "—"}`,
        `最爱类型：${String(recap.topGenre1 || recap.favoriteGenre || "").trim() || "—"}`,
        `黑金徽章：${fmt(Number(recap.badgesBlackGoldTotal || 0))} 个`,
        `白金成就：${fmt(Number(recap.platinumAchievementsTotal || 0))} 个`,
        `评价：${fmt(Number(recap.reviewsCount || 0))} 条`,
        `嘴替：${fmt(Number(recap.zuitiReviewsCount || recap.zuitiCount || 0))} 条`,
        `最近一年玩赏家：${criticYear ? `${criticYear}` : "—"}`,
        `创作游戏：${fmt(Number(recap.devGamesCount || 0))} 款`,
        `聚光灯 GameJam：${String(recap.spotlightGamejam1Name || "").trim() || "—"}`,
        `TapMaker：${String(recap.tapmaker1Name || "").trim() || "—"}`,
        `积分：${state.points}`,
      ].join("\\n");
      const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
      const a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = "taptap-10y-share-card.txt";
      a.click();
      URL.revokeObjectURL(a.href);
      toast("已下载分享卡");
    });
  });

  const wireCarousel = (trackId, dotsId) => {
    const track = document.getElementById(trackId);
    const dotsWrap = document.getElementById(dotsId);
    if (!track || !dotsWrap) return;
    const cards = Array.from(track.querySelectorAll(".mini-card"));
    const dots = Array.from(dotsWrap.querySelectorAll("[data-dot]"));
    if (!cards.length || !dots.length) return;

    const setActive = (idx) => {
      dots.forEach((d, i) => d.classList.toggle("dot--active", i === idx));
      cards.forEach((c, i) => c.classList.toggle("mini-card--active", i === idx));
    };
    dots.forEach((d) =>
      d.addEventListener("click", () => {
        const idx = Number(d.dataset.dot || 0);
        const el = cards[idx];
        if (!el) return;
        el.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
        setActive(idx);
      }),
    );
    // Init at requested index to avoid “flash to first card” animation after render
    const req = carouselInitRequests[trackId];
    const initIdx = Math.max(0, Math.min(req?.idx ?? 0, cards.length - 1));
    // Temporarily disable card transitions during init restore
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
      if (e.target?.closest?.("button, a, input, textarea, select, [role='button'], [data-bind], [data-claim]")) return;
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
  };

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
        openRewardModal({
          title: "领取成功",
          grant,
          onConfirm: () => scheduleScrollToNextCard(trackId, currentIdx),
        });
        return;
      }

      // Bind reward
      const r = BIND_REWARDS.find((x) => x.id === id);
      if (!r) return;
      if (id === "bind_roles") {
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
        openRewardModal({
          title: "领取成功",
          grant,
          subtitle: `新绑定 ${fmt(pending)} 个角色`,
          onConfirm: () => scheduleScrollToNextCard(trackId, currentIdx),
        });
        return;
      }

      if (!r.isReady?.(state)) return;
      markClaimed(state, id);
      const grant = { points: r.grant?.points || 0, coupons: r.grant?.coupons || 0 };
      addPoints(state, grant.points || 0);
      addCoupons(state, grant.coupons || 0);
      saveState();
      render();
      openRewardModal({
        title: "领取成功",
        grant,
        subtitle: r.title,
        onConfirm: () => scheduleScrollToNextCard(trackId, currentIdx),
      });
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
  const completedCount = s.playtest.completed.length;
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
    const exclusiveHtml = g.tapExclusive ? `<span class="pill pill--brand mutual-exclusive">Tap独家</span>` : "";

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
          ${exclusiveHtml}
        </div>
        <div class="mutual-bottom row">
          <div class="mutual-marquee">${marquee}</div>
          <button class="btn btn--brand" type="button" data-mutual-open="${g.id}">留言</button>
        </div>
      </div>
    `;
  }).join("");

  const play = PLAYTEST_GAMES.map((p) => {
    const done = s.playtest.completed.includes(p.id);
    return `
      <div class="item" data-play="${p.id}">
        <div class="row">
          <div class="grow">
            <div class="item__title">${p.title}</div>
            <div class="item__desc">${p.desc}</div>
          </div>
          <span class="${pillClass(done ? "ok" : "warn")}">${done ? "已完成" : `+${p.points} 积分`}</span>
        </div>
        <div class="item__meta">
          <span class="tag">TapMaker 试玩</span>
          <button class="btn ${done ? "" : "btn--brand"}">${done ? "查看反馈" : "进入试玩"}</button>
        </div>
      </div>
    `;
  }).join("");

  return `
    <section class="card">
      <div class="row">
        <p class="h1 grow">发现好游戏</p>
      </div>
      <p class="muted small" style="margin:6px 0 0">
        TapTap 的坚持：<b>发现好游戏</b> · <b>零分成</b> · <b>评分真实</b>
      </p>
      <div class="divider"></div>
      <div class="list">${mutualList}</div>
    </section>

    <section class="card">
      <div class="row">
        <p class="h2 grow">TapMaker GameJam 试玩场地</p>
        <span class="pill">已完成：<b>${completedCount}</b> / ${PLAYTEST_GAMES.length}</span>
      </div>
      <p class="muted small" style="margin:6px 0 0">
        试玩获取积分，支持优秀作品在 TapTap 发行。
      </p>
      <div class="list">${play}</div>
    </section>
  `;
}

function wireDiscoverInline() {
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

  $$("[data-play]").forEach((el) =>
    el.addEventListener("click", () => {
      const p = PLAYTEST_GAMES.find((x) => x.id === el.dataset.play);
      if (!p) return;
      const done = state.playtest.completed.includes(p.id);
      const existing = state.playtest.feedback[p.id] || "";

      const body = `
        <div class="small" style="line-height:1.55">
          <div class="h2">${p.title}</div>
          <div class="item__desc" style="margin-top:8px">${p.desc}</div>
          <div class="divider"></div>
          <div class="muted small">试玩流程：完成试玩 → 写一句反馈 → 获得积分。</div>
          <div style="margin-top:10px">
            <div class="small"><b>一句反馈</b></div>
            <textarea id="txtFeedback" rows="3" style="width:100%; margin-top:6px; border-radius:12px; border:1px solid var(--border); background: rgba(255,255,255,.02); color: var(--text); padding:10px; resize:none;">${escapeHtml(existing)}</textarea>
          </div>
        </div>
      `;

      const footer = `
        ${done ? "" : `<button class="btn btn--brand" id="btnCompletePlay">完成试玩 +${p.points}积分</button>`}
        <button class="btn" id="btnSaveFeedback">${done ? "更新反馈" : "先保存反馈"}</button>
        <button class="btn" id="btnClosePlay">关闭</button>
      `;

      openModal({ title: "试玩详情", bodyHtml: body, footerHtml: footer });

      $("#btnClosePlay")?.addEventListener("click", closeModal);
      $("#btnSaveFeedback")?.addEventListener("click", () => {
        const v = $("#txtFeedback")?.value?.trim() || "";
        state.playtest.feedback[p.id] = v;
        saveState();
        toast("已保存反馈");
      });
      $("#btnCompletePlay")?.addEventListener("click", () => {
        const v = $("#txtFeedback")?.value?.trim() || "";
        state.playtest.feedback[p.id] = v;
        if (!state.playtest.completed.includes(p.id)) state.playtest.completed.push(p.id);
        addPoints(state, p.points);
        saveState();
        closeModal();
        render();
        toast(`试玩完成，获得 ${p.points} 积分`);
      });
    }),
  );

  wireStepMarquees();
}

function shopView(s) {
  const frameCards = SHOP_ITEMS.frames.map((f) => shopItemCard("frame", f, s)).join("");
  const badgeCards = SHOP_ITEMS.badges.map((b) => shopItemCard("badge", b, s)).join("");
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
        <span class="${pillClass("warn")}">小概率中奖</span>
      </div>
      <div class="item" style="margin-top:10px">
        <div class="row">
          <div class="grow">
            <div class="item__title">${SHOP_ITEMS.lottery.title}</div>
            <div class="item__desc">每次消耗 ${SHOP_ITEMS.lottery.cost} 积分，中奖获得点券 ${SHOP_ITEMS.lottery.prize.value}。</div>
          </div>
          <span class="pill">-${SHOP_ITEMS.lottery.cost} 积分</span>
        </div>
        <div class="item__meta">
          <span class="tag">中奖率：约 ${(SHOP_ITEMS.lottery.winRate * 100).toFixed(0)}%</span>
          <button class="btn btn--brand" id="btnLottery">开始抽奖</button>
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
    if (state.points < SHOP_ITEMS.lottery.cost) return toast("积分不足");
    state.points -= SHOP_ITEMS.lottery.cost;
    const win = Math.random() < SHOP_ITEMS.lottery.winRate;
    if (win) state.walletCoupons = (state.walletCoupons || 0) + SHOP_ITEMS.lottery.prize.value;
    saveState();
    render();
    if (win) toast(`恭喜你：点券 +${SHOP_ITEMS.lottery.prize.value}`);
    else toast("这次没抽中，下次再试试");
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

  const defaultRecap = () => recapDataForState({ ...state, boundData: false });
  const currentRecap = () => state.careerSnapshot?.recap || defaultRecap();

  inp.value = String(state.points ?? 0);
  txt.value = JSON.stringify(currentRecap(), null, 2);
  chkSteam.checked = !!state.boundSteam;
  inpRoles.value = String(state.boundRolesCount ?? 0);
  inpRolesClaimed.value = String(state.claimedRoleRewardsCount ?? 0);

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
  const hint = document.getElementById("openingHint");

  // Ensure the activity page won't appear during opening
  appRoot.classList.add("hidden");
  opening.classList.remove("hidden");
  opening.setAttribute("aria-hidden", "false");

  const prefersReduce = !!window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
  const readyDelay = prefersReduce ? 120 : 1700;

  // After the opening show ends, reveal the CTA button
  const t = setTimeout(() => {
    opening.classList.add("opening--ready");
    if (hint) hint.textContent = "";
    if (btn) btn.classList.remove("hidden");
  }, readyDelay);

  return new Promise((resolve) => {
    // If button missing for any reason, auto-enter after a short delay.
    if (!btn) {
      setTimeout(() => {
        clearTimeout(t);
        opening.classList.add("opening--exit");
        appRoot.classList.remove("hidden");
        opening.classList.add("hidden");
        opening.setAttribute("aria-hidden", "true");
        resolve();
      }, readyDelay + 300);
      return;
    }

    btn.addEventListener(
      "click",
      () => {
        clearTimeout(t);
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
  // By default, reset demo state on each page load (avoid manual reset).
  // Add `?persist=1` to the URL if you want to keep localStorage state.
  try {
    const params = new URLSearchParams(location.search || "");
    const persist = params.get("persist") === "1";
    if (!persist) {
      localStorage.removeItem(STORAGE_KEY);
      state = loadState();
    }
  } catch {
    // ignore
  }

  // Opening show gate: do not render activity page until user enters.
  await runOpeningGate();

  // Enter into current activity page (home) after opening
  location.hash = "#/home";

  // Back
  $("#btnBack")?.addEventListener("click", () => navigate("home"));

  // Modal close
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

  // Debug
  $("#btnOpenDebug")?.addEventListener("click", openDebug);

  // Route changes
  window.addEventListener("hashchange", render);
  render();
}

init();

