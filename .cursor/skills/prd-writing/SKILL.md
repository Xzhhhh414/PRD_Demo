---
name: prd-writing
description: 撰写和整理产品需求文档（PRD / 功能细案）。当用户需要写 PRD、整理需求文档、从 demo 反推需求、编写功能规格时使用。Use when writing PRDs, feature specs, requirement documents, or reverse-engineering specs from demos.
---

# 产品需求文档撰写

## 我的文档类型

| 类型 | 用途 | 模板 |
|------|------|------|
| **功能需求细案** | 面向开发测试，描述「做什么、怎么表现」 | `.cursor/rules/demo-feature-spec-template.md` |
| **完整 PRD** | 面向团队对齐，包含背景、目标、方案、成功指标 | 参考下方核心 Skills |

## 核心 Skills（按需阅读）

以下 4 个 skill 提供方法论指导。**不要一次性全部读取**，根据当前任务选择相关的：

| Skill | 路径 | 何时读取 |
|-------|------|----------|
| **撰写 PRD** | `.cursor/lenny-skills/skills/writing-prds/SKILL.md` | 从零写完整 PRD；需要框架指导 |
| **问题定义** | `.cursor/lenny-skills/skills/problem-definition/SKILL.md` | 需要厘清"为什么做"；问题陈述模糊 |
| **产品愿景** | `.cursor/lenny-skills/skills/defining-product-vision/SKILL.md` | 需要写愿景 / 长期方向描述 |
| **规格与设计文档** | `.cursor/lenny-skills/skills/writing-specs-designs/SKILL.md` | 写功能细案 / 交互规格；需要确定文档粒度 |

## 工作流程

1. **先问再写** — 向用户确认产品背景、目标用户、要解决的问题、成功指标
2. **问题先行** — 文档开头清晰描述问题和背景，不直接列功能
3. **定义成功** — 每份文档包含可衡量的成功标准
4. **说明 Why Now** — 解释为什么现在做这件事
5. **保持精简** — 聚焦关键结果，避免冗余细节

## 写作风格

- 用「若…则…」的条件式描述分支逻辑
- 状态与规则优先用**表格**呈现，提高可扫读性
- 同一模块内的要点用列表组织，步骤用有序列表
- 默认使用**中文**撰写

## 写功能需求细案时

1. 先读模板：`.cursor/rules/demo-feature-spec-template.md`
2. 按模板结构逐模块展开：入口 → 正常流程 → 状态与规则 → 数据依赖 → 边界与异常
3. 最后补充模块间关系

## 从 demo 反推需求时

1. 通读 demo 代码，梳理功能模块和交互流程
2. 提取状态管理、数据结构、条件分支
3. 按功能细案模板组织输出
4. 先输出结构大纲让用户确认，再逐模块填充
