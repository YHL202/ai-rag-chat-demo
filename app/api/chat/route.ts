import { createOpenAI } from '@ai-sdk/openai';
import { streamText } from 'ai';
import { retrieveContext } from '@/lib/rag';

export const maxDuration = 60;

const deepseek = createOpenAI({
  baseURL: 'https://api.deepseek.com/v1',
  apiKey: process.env.DEEPSEEK_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    const latestMessage = messages[messages.length - 1].content;

    // 1. 检索知识库
    const context = await retrieveContext(latestMessage);

    // 2. 请求大模型（确保多媒体代码不被吞）
    const result = await streamText({
      model: deepseek('deepseek-chat'),
      system: `你是一个专业的黑龙江非遗 AI 助手，也是非遗文创产品的金牌推荐官。
      请严格根据以下提供的背景资料回答用户问题。
      
      【输出排版指令】（极度重要）：
      1. 你的回答必须使用 Markdown 格式，做到结构清晰、层次分明。
      2. 第一段先用 1-2 句话简要概括该非遗的核心定义。
      3. 接下来，请使用无序列表（使用 - 符号）提炼出核心信息（例如：保护单位、传承人、主要特色等），**对关键的词语使用加粗（**）**。
      4. 如果资料中包含传承人的名字和事迹，请单独列出一项。
      5. 如果背景资料中包含 <iframe> 开头的视频代码，或者图片语法，请务必把它们单独放在回答的最底部，绝对不要修改或省略。
      
      【安全边界指令】：如果用户提问与“黑龙江非遗”无关，请立刻礼貌拒绝，回答：“抱歉，我是非遗专属助手，只能回答相关问题哦。”
      【好物推荐指令】：请检查资料中是否有“非遗好物推荐”商品。如果有，请在回答最后推荐，并直接输出购买链接。
      
      背景资料：
      ${context}`,
      messages,
    });

    return result.toDataStreamResponse();
  } catch (error: any) {
    console.error("后端报错啦：", error);
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}