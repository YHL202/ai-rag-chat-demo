# 黑龙江非遗 AI 问答系统 (RAG)

 **GitHub 代码仓库（含完整开发提交记录）**：[https://github.com/YHL202/ai-rag-chat-demo](https://github.com/YHL202/ai-rag-chat-demo)
 **在线演示地址**：[https://heilongjiangfeiyi-ich.xyz](https://heilongjiangfeiyi-ich.xyz)

## 项目介绍
本项目是为“第九届传智杯”开发的基于大语言模型的 RAG（检索增强生成）知识问答系统。针对通用大模型在冷门非遗领域容易产生“幻觉”的痛点，本系统人工精编了黑龙江省 42 项国家级非物质文化遗产专属知识库，结合 Upstash 向量数据库与 DeepSeek 大模型，实现了精准、权威、图文并茂的智能问答。

## 技术架构
本项目采用 Serverless 全栈一体化架构。前端基于 Next.js 15 (App Router) 构建，通过 API 路由接收用户请求；后端将用户提问向量化后，在 Upstash 向量数据库中进行 RAG 语义检索；最后交由 DeepSeek 大模型生成流式回答，并通过 React-Markdown 实时渲染多媒体内容。

**核心依赖清单：**
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
```

## 安装运行指南

**1. 安装依赖环境**

本项目使用 pnpm 作为包管理器，请在终端运行：

```bash
pnpm install
```

**2. 启动开发服务器**

依赖安装完成后，运行以下命令启动本地服务：

```bash
pnpm dev
```

**3. 初始化知识库**

首次运行或更新了数据后，必须访问以下地址，将 Markdown 知识库转化为向量并存入云端数据库，否则 AI 无法检索资料。
请在浏览器访问：`http://localhost:3000/api/init`
（看到页面显示“数据导入成功”即可）

**4. 开始体验**

初始化完成后，在浏览器打开 `http://localhost:3000` 即可开始对话。

## 👥 团队信息
- **参赛团队**：一决战队
- **团队成员**：余洪林、赖文娟、王樱