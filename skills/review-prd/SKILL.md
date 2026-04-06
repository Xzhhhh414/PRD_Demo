---
name: review-prd
description: 审核 PRD / 设计文档的完整性、可操作性和边界条件覆盖度
---

# review-prd — PRD 审核工作流

输入参数：$ARGUMENTS（PRD 文档路径）

---

## 执行流程

### Step 1：定位 PRD 文档

如果 `$ARGUMENTS` 是文件路径，直接使用。

如果 `$ARGUMENTS` 是关键词，在项目目录下搜索包含该关键词的 `.md` 文件，列出匹配结果让用户选择：

```
找到以下匹配的文档：
1. docs/xxx-prd.md
2. docs/yyy-spec.md

请选择要审核的文档：
```

等待用户确认后继续。

### Step 2：读取 PRD 文档

用 Read 工具完整读取用户确认的 PRD 文档。

### Step 3：调用 PRD Reviewer Agent 审核

使用 Agent 工具调用 PRD 审核 agent：

```
subagent_type: "prd-workflow:PRD Reviewer"
prompt: |
  请审核以下 PRD 文档。

  ## PRD 文档内容
  {粘贴 Step 2 读取的完整文档内容}

  请按以下维度逐项审查：
  1. 完整性：模块覆盖、流程覆盖、角色覆盖、状态覆盖、数据依赖
  2. 可操作性：可开发、可测试、无歧义、可追溯
  3. 边界条件：空状态、异常状态、并发操作、极端输入、权限边界
  4. 一致性：术语、数据、交互、模块间依赖

  Read 每个相关文件后，输出审查报告，给出 PASS 或 FAIL 裁定。
```

### Step 4：输出审核结果

将 PRD Reviewer Agent 的审核报告展示给用户。

- **PASS** → 告知用户 PRD 审核通过，可以进入设计阶段。
- **FAIL** → 列出需要修改的问题，建议用户回到 Obsidian 修改后重新审核。

### Step 5：自优化

回顾本次审核过程，检查是否有：
- PRD Reviewer Agent 遗漏的审查维度
- 审查标准需要调整的地方

有优化提案时，询问用户是否同意修改 `agents/prd-reviewer.md`。
