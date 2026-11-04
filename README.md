# 黑龙江非遗 AI 问答系统 (RAG)

在线预览体验地址：[https://heilongjiangfeiyi-ich.xyz](https://heilongjiangfeiyi-ich.xyz)

本项目是为“传智杯”开发的基于大语言模型的 RAG（检索增强生成）知识问答系统。

## 核心功能
- **专属知识库**：收录了 42 项黑龙江省国家级非物质文化遗产名录。
- **精准检索**：利用 Upstash 向量数据库，精准匹配用户问题。
- **流式生成**：接入 DeepSeek 大模型，实现丝滑的流式对话体验。
- **多媒体展示**：内嵌 B 站非遗纪录片视频与文创产品购买链接。
- **安全与边界**：内置严格的 Prompt 控制，拒绝无关提问，杜绝 AI 幻觉。
- **精美 UI**：基于 Next.js 与 Tailwind CSS 打造现代化聊天界面。

## 技术栈
- 框架：Next.js 15 (App Router)
- UI：Tailwind CSS + React-Markdown
- 数据库：Upstash Vector
- 大模型：DeepSeek API

## 本地运行
```bash
pnpm install
pnpm dev