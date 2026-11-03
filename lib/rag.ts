import { Index } from '@upstash/vector';
import fs from 'fs';
import path from 'path';

const index = new Index({
  url: process.env.UPSTASH_VECTOR_REST_URL!,
  token: process.env.UPSTASH_VECTOR_REST_TOKEN!,
});

// 1. 将非遗文本存入数据库
export async function ingestData() {
  const filePath = path.join(process.cwd(), 'data', 'ich-knowledge.md');
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  
  const chunks = fileContent.split('##').filter(c => c.trim().length > 0);

  for (let i = 0; i < chunks.length; i++) {
    await index.upsert({
      id: `ich-chunk-${i}`,
      data: chunks[i],
      metadata: { text: chunks[i] }
    });
  }
  return { success: true, count: chunks.length };
}

// 2. 根据用户提问，从数据库检索最相关的 3 段内容
export async function retrieveContext(query: string) {
  // 打印查询内容，便于调试
  console.log("正在检索的问题:", query);

  try {
    const results = await index.query({
      data: query,
      topK: 3,
      includeMetadata: true,
      includeData: true, // 确保返回原始文本
    });

    // 兼容读取 data 或 metadata.text
    return results
      .map((r) => r.data || r.metadata?.text || "")
      .join("\n\n");
  } catch (error) {
    // 打印完整错误，方便定位
    console.error("Upstash 检索详细报错:", error);
    throw error;
  }
}