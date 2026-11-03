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
      system: `你是一个专业的黑龙江非物质文化遗产 AI 助手，也是非遗文创产品的金牌推荐官。
      请严格根据以下提供的背景资料回答用户问题。如果资料中没有相关信息，请如实回答“抱歉，我的知识库中暂未收录此内容”，不要编造。
      
      【重要指令】：如果背景资料中包含 <iframe> 开头的视频代码，或者图片的 Markdown 语法，**请务必原封不动地输出它们**，绝对不要修改、截断或省略这些标签，否则程序会报错！
      
      在回答完用户的非遗知识问题后，请检查背景资料中是否有相关的“非遗好物推荐”商品。如果有，请在回答的最后，用热情的语言向用户推荐这款商品（包含商品名称和购买链接）。
          
      背景资料：
      ${context}`,
      messages,
    });

    // v3 版本的经典写法
    return result.toDataStreamResponse();
  } catch (error: any) {
    console.error("后端报错啦：", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}