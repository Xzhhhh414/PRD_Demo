# PRD Workflow Plugin

Plugin 提供本地 AI 工作流的 Agent、Skill 和开发流程工具。

工作流：Obsidian 写需求 → Figma 出设计 → Claude Code 编码，多 Agent 协作完成审核与实施。

## Agent 创建规则

**创建新 agent 时，必须先从系统全局 agent 列表中搜索同类能力，复用为通用能力层，再叠加项目规则。**

### 流程

1. **搜索全局 agent**：根据新 agent 的职责关键词，在 Claude Code 系统内置的 `subagent_type` 列表中搜索相关 agent
2. **列出候选**：展示名称和描述，让用户选择哪些作为通用能力的参考基础
3. **用户选择**：等待用户确认
4. **生成 agent 文件**：按以下结构生成：
  - **通用能力**（`## 通用能力`）：基于用户选定的全局 agent 能力，提炼为通用的方法论和检查清单，不限于某个项目
  - **项目规则**（`## 项目规则`）：结合当前项目的技术栈、约定和特殊需求，定义项目专属的规则和输出格式
5. **注册 agent**：更新本文件的 agent 列表计数

### 结构要求

所有 agent 文件必须遵循统一结构：

```markdown
---
name: Agent Name
description: 一句话描述
---

# Agent Name

你是 **agent-name**，[通用角色定位]。

---

## 通用能力

[从全局 agent 能力提炼的通用方法论、检查清单、原则]

---

## 项目规则

> 以下规则由使用本 plugin 的项目按需定义，持续迭代中。

[项目特定的技术栈、流程、输入输出格式]
```

## Skill 创建规则

**创建新 skill 时，必须判断其行为是否可脚本化。可脚本化的操作必须抽成独立脚本，SKILL.md 只做调用层。**

### 判断标准

| 可脚本化（必须创建脚本） | 不可脚本化（SKILL.md 直接编排） |
| --- | --- |
| 操作是确定性的 shell 命令序列（git、npm、文件操作等） | 需要 AI agent 做分析、判断、生成 |
| 输入输出可通过参数和 stdout 传递 | 需要读取上下文并做多轮决策 |
| 失败模式可通过 exit code + 日志处理 | 需要与用户交互确认 |

### 流程

1. **识别可脚本化操作**：分析 skill 的执行步骤，将确定性 shell 操作标记为"可脚本化"
2. **创建脚本**：在 skill 目录下创建 `.sh` 脚本，负责实际执行逻辑
  - 脚本必须 `set -euo pipefail`
  - 通过参数接收输入，通过 stdout 输出结果
  - 用 `❌ ERROR` / `⚠️` / `=== 完成 ===` 等关键字标记状态，供 SKILL.md 解析
  - 失败时输出 `HINT` 帮助诊断
3. **SKILL.md 只做调用层**：负责上下文收集、参数组装、调用脚本、解析结果、用户交互
4. **混合型 skill**：将可脚本化部分抽成脚本，SKILL.md 在对应 Step 中调用脚本

## Skill README 强制规则

**每个 skill 目录下必须有 `README.md`，且每次增删改 skill 时必须同步更新。**

1. **新增 skill** → 必须同时创建 `README.md`，包含：调用方式、执行流程概览、产出物、涉及 Agent/文件
2. **修改 skill** → 必须同步更新对应 `README.md`
3. **删除 skill** → 必须同时删除对应 `README.md`

### 流程图格式要求

README 中的「执行流程概览」必须使用**竖向方框 + 箭头**格式：

- 用 `┌─ 阶段名 ──┐ ... └──┘` 方框划分阶段
- 用 `│` 和 `▼` 表示竖向流转
- 分支用缩进 + `│` / `└` 表示（如 通过/不通过）
- 用 `★` 标记需要用户参与的节点

## 当前 Agent 统计：5 个

| Agent | 文件 | 职责 |
|-------|------|------|
| PRD Reviewer | `agents/prd-reviewer.md` | PRD / 设计文档审核 |
| Design Reviewer | `agents/design-reviewer.md` | Figma 设计稿审核 |
| Developer | `agents/developer.md` | 全栈代码开发 |
| Code Reviewer | `agents/code-reviewer.md` | 代码审查 |
| Test Runner | `agents/test-runner.md` | 测试生成与执行 |

## 当前 Skill 统计：4 个

| Skill | 路径 | 说明 |
|-------|------|------|
| review-prd | `skills/review-prd/` | PRD 审核工作流 |
| review-design | `skills/review-design/` | 设计稿审核工作流 |
| develop | `skills/develop/` | 完整开发工作流（主编排） |
| run-tests | `skills/run-tests/` | 测试执行工作流 |
