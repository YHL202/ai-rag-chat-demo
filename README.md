# 黑龙江非遗 AI 问答系统 (RAG)

 **GitHub代码仓库（含完整开发提交记录）**：[https://github.com/YHL202/ai-rag-chat-demo](https://github.com/YHL202/ai-rag-chat-demo)
**在线演示地址**：[https://heilongjiangfeiyi-ich.xyz](https://heilongjiangfeiyi-ich.xyz)

本项目是为“传智杯”开发的基于大语言模型的 RAG（检索增强生成）知识问答系统。

## 核心功能
- **专属知识库**：收录了 42 项黑龙江省国家级非物质文化遗产名录。
- **精准检索**：利用 Upstash 向量数据库，精准匹配用户问题。
- **流式生成**：接入 DeepSeek 大模型，实现丝滑的流式对话体验。
- **多媒体展示**：内嵌 B 站非遗纪录片视频与文创产品购买链接。
- **安全与边界**：内置严格的 Prompt 控制，拒绝无关提问，杜绝 AI 幻觉。
- **精美 UI**：基于 Next.js 与 Tailwind CSS 打造现代化聊天界面。

## 技术架构
- 框架：Next.js 15 (App Router)
- UI：Tailwind CSS + React-Markdown
- 数据库：Upstash Vector
- 大模型：DeepSeek API

## 环境配置
在运行本项目前，请复制根目录下的 `.env.example` 文件并重命名为 `.env.local`，填入以下必要的环境变量：
```env
DEEPSEEK_API_KEY=你的_DeepSeek_API_Key
UPSTASH_VECTOR_REST_URL=你的_Upstash_URL
UPSTASH_VECTOR_REST_TOKEN=你的_Upstash_Token

## 安装运行指南
1.安装依赖环境
本项目使用 pnpm 作为包管理器，请在终端运行：
pnpm install
2.启动开发服务器
pnpm dev
3.初始化知识库
首次运行data/ich-knowledge.md 数据后，必须访问以下地址，将 Markdown 知识库转化为向量并存入云端数据库：
在浏览器访问  http://localhost:3000/api/init,看到页面显示“数据导入成功”即可
4.开始体验
在浏览器打开 http://localhost:3000 即可开始对话。

## 团队信息
参赛团队：一决
团队成员：余洪林、赖文娟、王樱