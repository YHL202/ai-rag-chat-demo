import { ingestData } from '@/lib/rag';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const result = await ingestData();
    return NextResponse.json({ message: "数据导入成功！", result });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}