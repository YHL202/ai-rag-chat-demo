'use client';

import { useChat } from '@ai-sdk/react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

export default function Chat() {
  // 
  const { messages, input, handleInputChange, handleSubmit, isLoading, error } = useChat();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex flex-col items-center py-8 px-4 font-sans">
      
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col h-[85vh] border border-gray-100">
        
        <header className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-4 px-6 text-center shadow-md z-10">
          <h1 className="text-2xl font-bold tracking-wider">黑龙江非遗 AI 问答系统</h1>
          <p className="text-blue-200 text-sm mt-1">黑土好风光，非遗韵悠长</p >
        </header>

        <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-gray-50/50">
          {/* 初始欢迎语 */}
          {messages.length === 0 && (
            <div className="flex flex-col items-center justify-center h-full text-gray-400 space-y-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-3xl">
                🏮
              </div>
              <p className="text-center">
                你好！我是小忆。<br/>
                你可以问我关于黑龙江非遗的相关问题。
              </p >
            </div>
          )}

          {/* 消息列表 */}
          {messages.map((m) => (
            <div key={m.id} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              
              {/* AI 头像 */}
              {m.role !== 'user' && (
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm mr-3 flex-shrink-0 mt-1">
                  AI
                </div>
              )}

              {/* 气泡内容 */}
              <div
                className={`max-w-[75%] p-4 rounded-2xl shadow-sm ${
                  m.role === 'user'
                    ? 'bg-blue-600 text-white rounded-tr-none'
                    : 'bg-white border border-gray-200 text-gray-800 rounded-tl-none'
                }`}
              >
                {/* 渲染 Markdown */}
                <div className="prose prose-sm max-w-none prose-p:leading-relaxed">
                <ReactMarkdown
  rehypePlugins={[rehypeRaw]} /*允许解析 HTML 标签 */
  components={{
    // 处理链接
    a: ({ node, ...props }) => (
      <a {...props} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 underline font-semibold" />
    ),
    // 处理图片
    img: ({ node, ...props }) => (
      < img {...props} className="max-w-full h-auto rounded-lg my-2 shadow-sm border" style={{ maxHeight: '250px' }} />
    ),
    // 处理 B 站视频 iframe 
    iframe: ({ node, ...props }) => (
      <div className="w-full my-3 rounded-xl overflow-hidden shadow-lg border border-gray-200 aspect-video">
        <iframe {...props} className="w-full h-full" allowFullScreen />
      </div>
    )
  }}
>
  {m.content}
</ReactMarkdown>
                </div>
              </div>
              
              {/* 用户头像 */}
              {m.role === 'user' && (
                <div className="w-8 h-8 rounded-full bg-gray-300 text-gray-700 flex items-center justify-center text-sm ml-3 flex-shrink-0 mt-1">
                  我
                </div>
              )}
            </div>
          ))}

          {/* 加载状态 */}
          {isLoading && (
            <div className="flex justify-start">
              <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm mr-3 flex-shrink-0 mt-1">
                AI
              </div>
              <div className="bg-white border border-gray-200 p-4 rounded-2xl rounded-tl-none flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                <span className="text-gray-500 text-sm ml-2">正在检索知识库...</span>
              </div>
            </div>
          )}

          {/* 错误提示 */}
          {error && (
            <div className="text-center text-red-500 text-sm bg-red-50 p-2 rounded border border-red-200">
              发生错误：{error.message}
            </div>
          )}
        </div>

        {/* 底部输入框区域 */}
        <div className="p-4 bg-white border-t border-gray-100">
          <form onSubmit={handleSubmit} className="flex gap-3">
            <input
              className="flex-1 p-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all text-gray-800 placeholder-gray-400"
              value={input}
              placeholder="请输入你想了解的非遗项目，例如：赵魁良戏法是什么？"
              onChange={handleInputChange}
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={isLoading}
              className="bg-blue-600 text-white px-8 py-4 rounded-xl font-semibold shadow-md hover:bg-blue-700 hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {isLoading ? '思考中' : '发送'}
            </button>
          </form>
          <p className="text-center text-xs text-gray-400 mt-3">
             RAG 智能检索
          </p >
        </div>

      </div>
    </div>
  );
}