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
    const context = await retrieveContext(latestMessage);

    const result = await streamText({
      model: deepseek('deepseek-chat'),
      system: `你是一个专业的黑龙江非遗 AI 助手，也是非遗文创产品的金牌推荐官。
请严格根据以下提供的背景资料回答用户问题。

【最高排版指令】：你的回答必须分点分行，使用 Markdown 格式（如 - 列表、**加粗**），让用户一目了然。
【多媒体强制输出】：如果背景资料中包含 <iframe> 开头的视频代码或 ![]() 图片，你必须原封不动地输出，绝对不许删改或省略！
【好物推荐强制输出】：仔细检查背景资料！如果资料中有“非遗好物推荐”、“购买链接”等商品信息，你必须在回答的最后，热情推荐该商品，并**直接输出购买链接**（如 [点击购买](链接)）。

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