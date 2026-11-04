// app/components/ChatMessage.tsx
'use client';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

export default function ChatMessage({ message }: { message: any }) {
  const isUser = message.role === 'user';

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      {!isUser && (
        <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm mr-3 flex-shrink-0 mt-1">
          AI
        </div>
      )}
      <div className={`max-w-[75%] p-4 rounded-2xl shadow-sm ${isUser ? 'bg-blue-600 text-white rounded-tr-none' : 'bg-white border border-gray-200 text-gray-800 rounded-tl-none'}`}>
        <div className="prose prose-sm max-w-none">
          <ReactMarkdown
            rehypePlugins={[rehypeRaw]}
            components={{
              a: (props) => <a {...props} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline font-semibold" />,
              img: (props) => < img {...props} className="max-w-full rounded-lg my-2 shadow-sm" style={{ maxHeight: '250px' }} />,
              iframe: (props) => (
                <div className="w-full my-3 rounded-xl overflow-hidden shadow-lg border aspect-video">
                  <iframe {...props} className="w-full h-full" allowFullScreen />
                </div>
              )
            }}
          >
            {message.content}
          </ReactMarkdown>
        </div>
      </div>
      {isUser && (
        <div className="w-8 h-8 rounded-full bg-gray-300 text-gray-700 flex items-center justify-center text-sm ml-3 flex-shrink-0 mt-1">
          我
        </div>
      )}
    </div>
  );
}