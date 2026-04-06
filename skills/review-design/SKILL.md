---
name: review-design
description: 通过 Figma MCP 读取设计稿，对照 PRD 审核覆盖度和交互完整性
---

# review-design — 设计稿审核工作流

输入参数：$ARGUMENTS（PRD 文档路径 + Figma 文件链接或关键词）

---

## 执行流程

### Step 1：定位 PRD 文档

与 review-prd 相同的逻辑定位 PRD 文档。如果 `$ARGUMENTS` 包含文件路径，直接使用；否则搜索让用户选择。

用 Read 工具完整读取 PRD 文档，提取模块清单。

### Step 2：获取 Figma 设计稿

通过 Figma MCP 工具读取设计稿：

1. 使用 `get_figma_data` 获取文件结构，列出所有页面/frame
2. 让用户确认哪些页面与当前 PRD 相关（或自动匹配命名）
3. 使用 `download_figma_images` 获取相关页面的截图

如果用户提供了 Figma 文件链接，从链接中提取 file key。

如果没有提供，询问用户：
```
请提供 Figma 设计稿链接，或输入设计稿在 Figma 中的文件名：
```

### Step 3：调用 Design Reviewer Agent 审核

使用 Agent 工具调用设计稿审核 agent：

```
subagent_type: "prd-workflow:Design Reviewer"
prompt: |
  请审核以下设计稿是否覆盖 PRD 需求。

  ## PRD 文档内容
  {粘贴 Step 1 读取的 PRD 内容}

  ## PRD 模块清单
  {从 PRD 中提取的模块列表}

  ## 设计稿信息
  {粘贴 Step 2 获取的页面列表和截图}

  请按以下维度审查：
  1. 覆盖度：每个 PRD 模块是否有对应设计页面
  2. 交互状态：默认态/空态/加载态/错误态/交互态是否齐全
  3. 工程可还原性：组件边界、间距尺寸、颜色字体是否清晰

  输出覆盖度矩阵和审查报告，给出 PASS 或 FAIL 裁定。
```

### Step 4：输出审核结果

将 Design Reviewer Agent 的审核报告展示给用户。

- **PASS** → 告知用户设计稿审核通过，可以进入开发阶段。
- **FAIL** → 列出需要补充的设计，建议用户在 Figma 中补充后重新审核。

### Step 5：自优化

回顾本次审核过程，检查是否有优化提案。有则询问用户是否同意修改 `agents/design-reviewer.md`。
