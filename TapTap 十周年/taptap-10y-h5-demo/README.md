# TapTap 十周年 H5 页面预览

这是一个**纯静态**的移动端 H5 页面预览，用于演示“十周年活动”线上交互闭环：
- 十周年回顾（可分享）
- 根据回顾数据领取福利（并支持“去绑定数据”补齐条件）
- 好游戏专题 & TapMaker GameJam 试玩获取积分
- 活动积分商店兑换头像框/徽章、积分抽点券
- “我的”页展示纪念痕迹（头像框/徽章/身份卡）

## 本地运行
直接双击打开 `index.html` 即可（无需安装依赖）。

## 发布成公网可访问地址（推荐三选一）

### 方案A：Netlify Drop（最快，5分钟）
1. 打开 `https://app.netlify.com/drop`
2. 将整个 `taptap-10y-h5-demo` 文件夹拖进去
3. 自动生成一个公开链接（可自定义站点名）

### 方案B：GitHub Pages（适合长期维护）
1. 新建一个 GitHub 仓库（public）
2. 上传本文件夹内容到仓库根目录
3. Settings → Pages → Deploy from branch → 选择 `main` / `/root`
4. 获得 `https://<org>.github.io/<repo>/` 链接

### 方案C：Vercel（适合团队协作/预览）
1. 新建 GitHub 仓库并推送代码
2. 在 Vercel 导入该仓库，Framework 选 “Other”
3. Build 留空（静态），Output 为仓库根目录
4. 自动生成公开链接

