
## 一、核心API

### SDK生命周期
- `TapBattleClient.Initialize(eventHandler)` - 初始化SDK，自动创建Manager实例，注册事件处理器
- `TapBattleClient.FinalizeSDK()` - 终止化SDK，自动销毁Manager实例，释放资源

### 连接管理
- `TapBattleClient.Connect(option)` - 连接多人对战服务器，返回playerId（玩家全局唯一标识）
- `TapBattleClient.Disconnect(option)` - 断开与服务器的连接

### 确定性随机数
- `TapBattleClient.NewRandomNumberGenerator(seed)` - 创建确定性随机数生成器，使用种子确保多端同步
- `TapBattleClient.RandomInt()` - 生成随机整数，使用当前活跃生成器
- `TapBattleClient.FreeRandomNumberGenerator()` - 释放当前随机数生成器实例

---

## 二、房间相关API

### 房间管理
- `TapBattleClient.CreateRoom(option)` - 创建新房间，设置房间配置和玩家配置
- `TapBattleClient.MatchRoom(option)` - 自动匹配房间，根据匹配参数查找或创建房间
- `TapBattleClient.GetRoomList(option)` - 获取房间列表，查看当前可用房间
- `TapBattleClient.JoinRoom(option)` - 加入指定房间，通过房间ID直接加入
- `TapBattleClient.LeaveRoom(option)` - 离开当前房间
- `TapBattleClient.KickRoomPlayer(option)` - 踢出指定玩家（仅房主，未开战时可用）

### 对战控制（帧同步）
- `TapBattleClient.StartBattle(option)` - 开始对战，启动帧同步机制（仅房主）
- `TapBattleClient.SendInput(option)` - 发送玩家操作数据，用于帧同步
- `TapBattleClient.StopBattle(option)` - 停止对战，结束帧同步（仅房主）

### 属性更新
- `TapBattleClient.UpdatePlayerCustomStatus(option)` - 更新玩家自定义状态（如准备/未准备）
- `TapBattleClient.UpdatePlayerCustomProperties(option)` - 更新玩家自定义属性（如昵称、等级、头像）
- `TapBattleClient.UpdateRoomProperties(option)` - 更新房间属性（如房间名称、地图、模式）

### 消息通信
- `TapBattleClient.SendCustomMessage(option)` - 发送自定义消息给房间内玩家或指定玩家

> **频率限制**: `UpdateRoomProperties` 和 `SendCustomMessage` 这2个API共享每秒50次的调用频率限制

---

## 三、事件通知（ITapBattleEventHandler）

### 连接事件
- `OnDisconnected` - 连接断开时触发

### 房间事件
- `OnPlayerEnterRoom` - 玩家进入房间时触发
- `OnPlayerLeaveRoom` - 玩家离开房间时触发
- `OnPlayerKicked` - 玩家被踢出房间时触发

### 玩家事件
- `OnPlayerOffline` - 玩家掉线时触发
- `OnPlayerCustomStatusChange` - 玩家状态变更时触发
- `OnPlayerCustomPropertiesChange` - 玩家属性变更时触发

### 房间属性事件
- `OnRoomCustomPropertiesChange` - 房间属性变更时触发

### 对战事件
- `OnBattleStart` - 对战开始时触发，返回随机数种子
- `OnBattleFrame` - 接收帧同步数据，包含所有玩家的操作输入
- `OnBattleStop` - 对战停止时触发

### 消息事件
- `OnCustomMessage` - 收到自定义消息时触发

### 错误事件
- `OnBattleServiceError` - 多人对战服务发生错误时触发


