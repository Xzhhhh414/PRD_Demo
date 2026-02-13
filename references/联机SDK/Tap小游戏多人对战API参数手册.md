# Tap小游戏多人对战API参数手册

## 一、核心API

### SDK生命周期

#### 1. TapBattleClient.Initialize
初始化SDK，自动创建Manager实例，注册事件处理器

**参数：**
- `eventHandler` (ITapBattleEventHandler) - 事件处理器接口实例

**返回：** 无

---

#### 2. TapBattleClient.FinalizeSDK
终止化SDK，自动销毁Manager实例，释放资源

**参数：** 无

**返回：** 无

---

### 连接管理

#### 3. TapBattleClient.Connect
连接多人对战服务器，返回playerId（玩家全局唯一标识）

**参数：**
- `option` (BattleConnectOption)
  - `success` (Action\<BattleConnectResult\>) - 成功回调
  - `fail` (Action\<TapCallbackResult\>) - 失败回调（可选）
  - `complete` (Action\<TapCallbackResult\>) - 完成回调（可选）

**参数数据结构：**
```csharp
public class BattleConnectOption
{
    public Action<BattleConnectResult> success;  // 成功回调
    public Action<TapCallbackResult> fail;       // 失败回调
    public Action<TapCallbackResult> complete;   // 完成回调
}

// 成功响应
public class BattleConnectResult
{
    public string playerId;   // 玩家ID - 服务器分配的全局唯一ID
    public string errMsg;     // 成功时为 "connect:ok"
}

// 失败/完成响应
public class TapCallbackResult
{
    public string errNo;      // 错误码（string类型）
    public string errMsg;     // 错误信息
}
```

**返回：** 通过success回调返回包含playerId的BattleConnectResult

---

#### 4. TapBattleClient.Disconnect
断开与服务器的连接

**参数：**
- `option` (BattleOption)
  - `success` (Action\<TapCallbackResult\>) - 成功回调（可选）
  - `fail` (Action\<TapCallbackResult\>) - 失败回调（可选）
  - `complete` (Action\<TapCallbackResult\>) - 完成回调（可选）

**参数数据结构：**
```csharp
public class BattleOption
{
    public Action<TapCallbackResult> success;   // 成功回调
    public Action<TapCallbackResult> fail;      // 失败回调
    public Action<TapCallbackResult> complete;  // 完成回调
}

public class TapCallbackResult
{
    public string errNo;      // 错误码（string类型）
    public string errMsg;     // 错误信息
}
```

**返回：** 通过回调返回TapCallbackResult

---

### 确定性随机数

#### 5. TapBattleClient.NewRandomNumberGenerator
创建确定性随机数生成器，使用种子确保多端同步

**参数：**
- `seed` (int) - 随机数种子（通常使用OnBattleStart事件返回的seed）

**参数说明：**
- seed值相同时，生成的随机数序列完全一致
- 通常从OnBattleStart事件中获取服务器分配的seed
- 该方法会将新创建的生成器设置为当前活跃实例

**返回：** 无

---

#### 6. TapBattleClient.RandomInt
使用当前活跃生成器生成随机整数

**参数：** 无

**返回：** int - 随机整数

---

#### 7. TapBattleClient.FreeRandomNumberGenerator
释放当前随机数生成器实例

**参数：** 无

**返回：** 无

---

## 二、房间相关API

### 房间管理

#### 8. TapBattleClient.CreateRoom
创建新房间，设置房间配置和玩家配置

**参数：**
- `option` (CreateRoomOption)
  - `data` (CreateRoomRequest) - 创建房间请求数据
  - `success` (Action\<CreateRoomSuccessResponse\>) - 成功回调
  - `fail` (Action\<TapCallbackResult\>) - 失败回调（可选）
  - `complete` (Action\<TapCallbackResult\>) - 完成回调（可选）

**参数数据结构：**
```csharp
public class CreateRoomOption
{
    public CreateRoomRequest data;                      // 创建房间请求数据
    public Action<CreateRoomSuccessResponse> success;   // 成功回调
    public Action<TapCallbackResult> fail;              // 失败回调
    public Action<TapCallbackResult> complete;          // 完成回调
}

// 创建房间请求
public class CreateRoomRequest
{
    public RoomConfig roomCfg;      // 房间配置
    public PlayerConfig playerCfg;  // 玩家配置（可选）
}

// 房间配置
public class RoomConfig
{
    public int maxPlayerCount;          // 房间最大人数
    public string type;                 // 房间类型
    public string name;                 // 房间名称
    public string customProperties;     // 自定义房间属性（JSON字符串，最大2048字节，可选）
    public MatchParams matchParams;     // 匹配参数
}

// 玩家配置
public class PlayerConfig
{
    public int customStatus;            // 自定义玩家状态（可选）
    public string customProperties;     // 自定义玩家属性（JSON字符串，最大2048字节，可选）
}

// 匹配参数
public class MatchParams
{
    public string level;    // 玩家等级（string类型）
    public string score;    // 玩家积分（string类型）
}

// 成功响应
public class CreateRoomSuccessResponse
{
    public RoomInfo roomInfo;   // 完整房间信息
    public string errMsg;       // 成功时为 "createRoom:ok"
}

// 房间信息
public class RoomInfo
{
    public string createTime;           // 创建时间（时间戳）
    public string customProperties;     // 自定义房间属性（JSON字符串）
    public string id;                   // 房间ID
    public int maxPlayerCount;          // 房间最大人数
    public string name;                 // 房间名称
    public string ownerId;              // 房主ID
    public PlayerInfo[] players;        // 房间内玩家列表
    public string type;                 // 房间类型
}

// 玩家信息
public class PlayerInfo
{
    public string id;                   // 玩家ID
    public int status;                  // 玩家状态: 0=离线, 1=在线
    public int customStatus;            // 自定义玩家状态(可选)
    public string customProperties;     // 自定义玩家属性(可选,JSON字符串,最大2048字节)
}
```

**返回：** 通过success回调返回CreateRoomSuccessResponse，包含完整房间信息

---

#### 9. TapBattleClient.MatchRoom
自动匹配房间，根据匹配参数查找或创建房间

**参数：**
- `option` (MatchRoomOption)
  - `data` (MatchRoomRequest) - 匹配房间请求数据
  - `success` (Action\<MatchRoomSuccessResponse\>) - 成功回调
  - `fail` (Action\<TapCallbackResult\>) - 失败回调（可选）
  - `complete` (Action\<TapCallbackResult\>) - 完成回调（可选）

**参数数据结构：**
```csharp
public class MatchRoomOption
{
    public MatchRoomRequest data;                       // 匹配房间请求数据
    public Action<MatchRoomSuccessResponse> success;    // 成功回调
    public Action<TapCallbackResult> fail;              // 失败回调
    public Action<TapCallbackResult> complete;          // 完成回调
}

// 匹配房间请求
public class MatchRoomRequest
{
    public RoomConfig roomCfg;      // 房间配置（不需要name字段）
    public PlayerConfig playerCfg;  // 玩家配置（可选）
}

// 成功响应
public class MatchRoomSuccessResponse
{
    public RoomInfo roomInfo;   // 完整房间信息
    public string errMsg;       // 成功时为 "matchRoom:ok"
}
```

**注意：** MatchRoom的RoomConfig不需要设置name字段

**返回：** 通过success回调返回MatchRoomSuccessResponse，包含完整房间信息

---

#### 10. TapBattleClient.GetRoomList
获取房间列表，查看当前可用房间

**参数：**
- `option` (GetRoomListOption)
  - `data` (GetRoomListRequest) - 获取房间列表请求数据（可选）
  - `success` (Action\<GetRoomListSuccessResponse\>) - 成功回调
  - `fail` (Action\<TapCallbackResult\>) - 失败回调（可选）
  - `complete` (Action\<TapCallbackResult\>) - 完成回调（可选）

**参数数据结构：**
```csharp
public class GetRoomListOption
{
    public GetRoomListRequest data;                     // 获取房间列表请求数据（可选）
    public Action<GetRoomListSuccessResponse> success;  // 成功回调
    public Action<TapCallbackResult> fail;              // 失败回调
    public Action<TapCallbackResult> complete;          // 完成回调
}

// 获取房间列表请求数据
public class GetRoomListRequest
{
    public string roomType;     // 房间类型（可选，不填则拉取全部类型的房间）
    public int offset;          // 偏移量（可选，默认0，第一次请求时为0）
    public int limit;           // 请求获取的房间数量（可选，默认20，最大100）
}

// 成功响应
public class GetRoomListSuccessResponse
{
    public RoomInfo[] rooms;    // 房间列表
    public string errMsg;       // 成功时为 "getRoomList:ok"
}
```

**返回：** 通过success回调返回GetRoomListSuccessResponse，包含房间列表

---

#### 11. TapBattleClient.JoinRoom
加入指定房间，通过房间ID直接加入

**参数：**
- `option` (JoinRoomOption)
  - `data` (JoinRoomRequest) - 加入房间请求数据
  - `success` (Action\<JoinRoomSuccessResponse\>) - 成功回调
  - `fail` (Action\<TapCallbackResult\>) - 失败回调（可选）
  - `complete` (Action\<TapCallbackResult\>) - 完成回调（可选）

**参数数据结构：**
```csharp
public class JoinRoomOption
{
    public JoinRoomRequest data;                        // 加入房间请求数据
    public Action<JoinRoomSuccessResponse> success;     // 成功回调
    public Action<TapCallbackResult> fail;              // 失败回调
    public Action<TapCallbackResult> complete;          // 完成回调
}

// 加入房间请求
public class JoinRoomRequest
{
    public string roomId;           // 房间ID
    public PlayerConfig playerCfg;  // 玩家配置（可选）
}

// 成功响应
public class JoinRoomSuccessResponse
{
    public RoomInfo roomInfo;   // 完整房间信息
    public string errMsg;       // 成功时为 "joinRoom:ok"
}
```

**返回：** 通过success回调返回JoinRoomSuccessResponse，包含完整房间信息

---

#### 12. TapBattleClient.LeaveRoom
离开当前房间

**参数：**
- `option` (LeaveRoomOption)
  - `success` (Action\<RoomValidationResponse\>) - 成功回调（可选）
  - `fail` (Action\<TapCallbackResult\>) - 失败回调（可选）
  - `complete` (Action\<TapCallbackResult\>) - 完成回调（可选）

**参数数据结构：**
```csharp
public class LeaveRoomOption
{
    public Action<RoomValidationResponse> success;  // 成功回调
    public Action<TapCallbackResult> fail;          // 失败回调
    public Action<TapCallbackResult> complete;      // 完成回调
}

// 验证响应
public class RoomValidationResponse
{
    public int resultCode;     // 结果码（0=成功, -1=失败, -2=未初始化）
    public string message;      // 消息
}
```

**返回：** 通过回调返回RoomValidationResponse

---

#### 13. TapBattleClient.KickRoomPlayer
踢出指定玩家（仅房主，未开战时可用）

**参数：**
- `option` (KickRoomPlayerOption)
  - `playerId` (string) - 被踢玩家的ID
  - `success` (Action\<RoomValidationResponse\>) - 成功回调（可选）
  - `fail` (Action\<TapCallbackResult\>) - 失败回调（可选）
  - `complete` (Action\<TapCallbackResult\>) - 完成回调（可选）

**参数数据结构：**
```csharp
public class KickRoomPlayerOption
{
    public string playerId;                         // 被踢玩家的ID
    public Action<RoomValidationResponse> success;  // 成功回调
    public Action<TapCallbackResult> fail;          // 失败回调
    public Action<TapCallbackResult> complete;      // 完成回调
}
```

**权限要求：** 仅房主可调用，且对战未开始

**返回：** 通过回调返回RoomValidationResponse

---

### 对战控制

#### 14. TapBattleClient.StartBattle
开始对战，启动帧同步机制（仅房主）

**参数：**
- `option` (StartBattleOption)
  - `success` (Action\<BattleValidationResponse\>) - 成功回调（可选）
  - `fail` (Action\<TapCallbackResult\>) - 失败回调（可选）
  - `complete` (Action\<TapCallbackResult\>) - 完成回调（可选）

**参数数据结构：**
```csharp
public class StartBattleOption
{
    public Action<BattleValidationResponse> success;    // 成功回调
    public Action<TapCallbackResult> fail;              // 失败回调
    public Action<TapCallbackResult> complete;          // 完成回调
}

// 验证响应
public class BattleValidationResponse
{
    public int resultCode;     // 结果码（0=成功, -1=失败, -2=未初始化）
    public string message;      // 消息
}
```

**权限要求：** 仅房主可调用

**返回：** 通过回调返回BattleValidationResponse，实际对战开始会触发OnBattleStart事件

---

#### 15. TapBattleClient.SendInput
发送玩家操作数据，用于帧同步

**参数：**
- `option` (SendInputOption)
  - `data` (string) - 游戏操作数据（UTF-8字符串格式）
  - `success` (Action\<BattleValidationResponse\>) - 成功回调（可选）
  - `fail` (Action\<TapCallbackResult\>) - 失败回调（可选）
  - `complete` (Action\<TapCallbackResult\>) - 完成回调（可选）

**参数数据结构：**
```csharp
public class SendInputOption
{
    public string data;                                 // 游戏操作数据（UTF-8字符串）
    public Action<BattleValidationResponse> success;    // 成功回调
    public Action<TapCallbackResult> fail;              // 失败回调
    public Action<TapCallbackResult> complete;          // 完成回调
}
```

**使用场景：** 对战进行中

**返回：** 通过回调返回BattleValidationResponse，实际帧数据会通过OnBattleFrame事件广播

---

#### 16. TapBattleClient.StopBattle
停止对战，结束帧同步（仅房主）

**参数：**
- `option` (StopBattleOption)
  - `success` (Action\<BattleValidationResponse\>) - 成功回调（可选）
  - `fail` (Action\<TapCallbackResult\>) - 失败回调（可选）
  - `complete` (Action\<TapCallbackResult\>) - 完成回调（可选）

**参数数据结构：**
```csharp
public class StopBattleOption
{
    public Action<BattleValidationResponse> success;    // 成功回调
    public Action<TapCallbackResult> fail;              // 失败回调
    public Action<TapCallbackResult> complete;          // 完成回调
}
```

**权限要求：** 仅房主可调用

**返回：** 通过回调返回BattleValidationResponse，实际对战结束会触发OnBattleStop事件

---

### 属性更新

#### 17. TapBattleClient.UpdatePlayerCustomStatus
更新玩家自定义状态（如准备/未准备）

**参数：**
- `option` (UpdatePlayerCustomStatusOption)
  - `status` (int) - 自定义玩家状态值
  - `success` (Action\<UpdateValidationResponse\>) - 成功回调（可选）
  - `fail` (Action\<TapCallbackResult\>) - 失败回调（可选）
  - `complete` (Action\<TapCallbackResult\>) - 完成回调（可选）

**参数数据结构：**
```csharp
public class UpdatePlayerCustomStatusOption
{
    public int status;                                  // 自定义玩家状态（整型数值）
    public Action<UpdateValidationResponse> success;    // 成功回调
    public Action<TapCallbackResult> fail;              // 失败回调
    public Action<TapCallbackResult> complete;          // 完成回调
}

// 验证响应
public class UpdateValidationResponse
{
    public int resultCode;     // 结果码（0=成功, -1=失败, -2=未初始化）
    public string message;      // 消息
}
```

**返回：** 通过回调返回UpdateValidationResponse，状态变更会触发OnPlayerCustomStatusChange事件

---

#### 18. TapBattleClient.UpdatePlayerCustomProperties
更新玩家自定义属性（如昵称、等级、头像）

**参数：**
- `option` (UpdatePlayerCustomPropertiesOption)
  - `properties` (string) - 自定义玩家属性（UTF-8字符串，最大2048字节）
  - `success` (Action\<UpdateValidationResponse\>) - 成功回调（可选）
  - `fail` (Action\<TapCallbackResult\>) - 失败回调（可选）
  - `complete` (Action\<TapCallbackResult\>) - 完成回调（可选）

**参数数据结构：**
```csharp
public class UpdatePlayerCustomPropertiesOption
{
    public string properties;                           // 自定义玩家属性（UTF-8字符串，最大2048字节）
    public Action<UpdateValidationResponse> success;    // 成功回调
    public Action<TapCallbackResult> fail;              // 失败回调
    public Action<TapCallbackResult> complete;          // 完成回调
}
```

**返回：** 通过回调返回UpdateValidationResponse，属性变更会触发OnPlayerCustomPropertiesChange事件

---

#### 19. TapBattleClient.UpdateRoomProperties
更新房间属性（如房间名称、地图、模式）

**参数：**
- `option` (UpdateRoomPropertiesOption)
  - `data` (UpdateRoomPropertiesData) - 更新房间属性数据
  - `success` (Action\<UpdateValidationResponse\>) - 成功回调（可选）
  - `fail` (Action\<TapCallbackResult\>) - 失败回调（可选）
  - `complete` (Action\<TapCallbackResult\>) - 完成回调（可选）

**参数数据结构：**
```csharp
public class UpdateRoomPropertiesOption
{
    public UpdateRoomPropertiesData data;               // 更新房间属性数据
    public Action<UpdateValidationResponse> success;    // 成功回调
    public Action<TapCallbackResult> fail;              // 失败回调
    public Action<TapCallbackResult> complete;          // 完成回调
}

// 更新房间属性数据
public class UpdateRoomPropertiesData
{
    public string name;                 // 房间名称
    public string customProperties;     // 房间自定义属性（UTF-8字符串，最大2048字节）
}
```

> **频率限制**: `UpdateRoomProperties` 和 `SendCustomMessage` 这2个API共享每秒50次的调用频率限制

**返回：** 通过回调返回UpdateValidationResponse，房间属性变更会触发OnRoomCustomPropertiesChange事件

---

### 消息通信

#### 20. TapBattleClient.SendCustomMessage
发送自定义消息给房间内玩家或指定玩家

**参数：**
- `option` (SendCustomMessageOption)
  - `data` (SendCustomMessageData) - 自定义消息数据
  - `success` (Action\<BattleValidationResponse\>) - 成功回调（可选）
  - `fail` (Action\<TapCallbackResult\>) - 失败回调（可选）
  - `complete` (Action\<TapCallbackResult\>) - 完成回调（可选）

**参数数据结构：**
```csharp
public class SendCustomMessageOption
{
    public SendCustomMessageData data;                  // 自定义消息数据
    public Action<BattleValidationResponse> success;    // 成功回调
    public Action<TapCallbackResult> fail;              // 失败回调
    public Action<TapCallbackResult> complete;          // 完成回调
}

// 自定义消息数据
public class SendCustomMessageData
{
    public string msg;          // 自定义消息内容（UTF-8字符串，最大2048字节）
    public int type;            // 消息接收者类型：0-房间内所有玩家（不包括发送者），1-发送给指定玩家
    public string[] receivers;  // 接收方玩家ID列表（当type==1时有效，最多20个ID）
}
```

> **频率限制**: `UpdateRoomProperties` 和 `SendCustomMessage` 这2个API共享每秒50次的调用频率限制

**返回：** 通过回调返回BattleValidationResponse，接收方会触发OnCustomMessage事件

---

## 三、事件通知（ITapBattleEventHandler）

### 事件处理器接口

所有事件通过实现`ITapBattleEventHandler`接口来处理。在调用`TapBattleClient.Initialize(eventHandler)`时传入。

---

### 连接事件

#### 21. OnDisconnected
连接断开时触发

**事件参数：**
- `info` (DisconnectedInfo)

**参数数据结构：**
```csharp
public class DisconnectedInfo
{
    public string reason;   // 断开原因
    public int code;        // 错误代码
}
```

---

### 房间事件

#### 22. OnPlayerEnterRoom
玩家进入房间时触发

**事件参数：**
- `info` (PlayerEnterRoomInfo)

**参数数据结构：**
```csharp
public class PlayerEnterRoomInfo
{
    public string roomId;       // 房间ID
    public PlayerInfo playerInfo;   // 进入的玩家信息
}
```

---

#### 23. OnPlayerLeaveRoom
玩家离开房间时触发

**事件参数：**
- `info` (PlayerLeaveRoomInfo)

**参数数据结构：**
```csharp
public class PlayerLeaveRoomInfo
{
    public string playerId;     // 离开的玩家ID
    public string playerName;   // 离开的玩家名称
    public string roomId;       // 房间ID
}
```

---

#### 24. OnPlayerKicked
玩家被踢出房间时触发

**事件参数：**
- `info` (PlayerKickedInfo)

**参数数据结构：**
```csharp
public class PlayerKickedInfo
{
    public string playerId;     // 被踢的玩家ID
    public string reason;       // 被踢原因
}
```

---

### 玩家事件

#### 25. OnPlayerOffline
玩家掉线时触发

**事件参数：**
- `info` (PlayerOfflineInfo)

**参数数据结构：**
```csharp
public class PlayerOfflineInfo
{
    public string playerId;     // 掉线的玩家ID
    public string playerName;   // 掉线的玩家名称
}
```

---

#### 26. OnPlayerCustomStatusChange
玩家状态变更时触发

**事件参数：**
- `info` (PlayerCustomStatusChangeInfo)

**参数数据结构：**
```csharp
public class PlayerCustomStatusChangeInfo
{
    public string playerId;     // 玩家ID
    public int status;          // 新的自定义状态
}
```

---

#### 27. OnPlayerCustomPropertiesChange
玩家属性变更时触发

**事件参数：**
- `info` (PlayerCustomPropertiesChangeInfo)

**参数数据结构：**
```csharp
public class PlayerCustomPropertiesChangeInfo
{
    public string playerId;                     // 玩家ID
    public Dictionary<string, object> properties;   // 新的自定义属性（字典）
}
```

---

### 房间属性事件

#### 28. OnRoomCustomPropertiesChange
房间属性变更时触发

**事件参数：**
- `info` (RoomPropertiesChangeInfo)

**参数数据结构：**
```csharp
public class RoomPropertiesChangeInfo
{
    public string id;                                   // 房间ID
    public string name;                                 // 房间名称
    public Dictionary<string, object> customProperties; // 自定义属性（字典）
}
```

---

### 对战事件

#### 29. OnBattleStart
对战开始时触发，返回随机数种子

**事件参数：**
- `info` (BattleStartInfo)

**参数数据结构：**
```csharp
public class BattleStartInfo
{
    public string roomId;       // 房间ID
    public string battleId;     // 对战ID，房间内唯一
    public int startTime;       // 对战开始时间
    public int seed;            // 随机数种子，用于NewRandomNumberGenerator
}
```

**重要说明：** 对战开始后，使用 info.seed 作为参数调用 TapBattleClient.NewRandomNumberGenerator(info.seed) 创建确定性随机数生成器

---

#### 30. OnBattleFrame
接收帧同步数据，包含所有玩家的操作输入

**事件参数：**
- `frameData` (string) - 帧同步数据的JSON字符串

**参数数据结构（JSON解析后）：**
```csharp
public class BattleFrameSynchronization
{
    public int id;              // 帧序号
    public PlayerInput[] inputs; // 所有玩家的输入数组
}

// 玩家输入数据
public class PlayerInput
{
    public string playerId;    // 玩家ID
    public string data;         // 操作数据
    public string serverTms;   // 服务器时间戳
}
```

**使用说明：** 需要将frameData字符串解析为BattleFrameSynchronization对象

---

#### 31. OnBattleStop
对战停止时触发

**事件参数：**
- `info` (BattleStopInfo)

**参数数据结构：**
```csharp
public class BattleStopInfo
{
    public string roomId;     // 房间ID
    public string battleId;   // 对战ID
    public int reason;        // 结束原因: 0=房主主动结束, 1=超时结束(30分钟)
}
```

---

### 消息事件

#### 32. OnCustomMessage
收到自定义消息时触发

**事件参数：**
- `info` (CustomMessageInfo)

**参数数据结构：**
```csharp
public class CustomMessageInfo
{
    public string playerId;     // 消息发送者玩家ID
    public string msg;          // 自定义消息内容（UTF-8字符串）
}
```

---

### 错误事件

#### 33. OnBattleServiceError
多人对战服务发生错误时触发

**事件参数：**
- `info` (BattleServiceErrorInfo)

**参数数据结构：**
```csharp
public class BattleServiceErrorInfo
{
    public string errorMessage;     // 错误消息
    public int errorCode;           // 错误代码
}
```

---

