'use client';
import { useChat } from '@ai-sdk/react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit, isLoading, error } = useChat();
  const chatEndRef = useRef<HTMLDivElement>(null);

  // 控制右侧轮播图的索引
  const [heritageIdx, setHeritageIdx] = useState(0);
  const [goodsIdx, setGoodsIdx] = useState(0);

  // 自动滚动到最新消息
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // 轮播数据（完全按照你队友的设计）
  const heritageSlides = [
    [
      { title: '伊玛堪', desc: '赫哲族口头说唱史诗，无乐器伴奏，说表交错。', img: '/img/yimakan.jpg', q: '赫哲族伊玛堪' },
      { title: '鱼皮制作技艺', desc: '大马哈鱼皮加工，古老渔猎手工技艺。', img: '/img/yupi.jpg', q: '赫哲族鱼皮制作技艺' }
    ],
    [
      { title: '鲁日格勒舞', desc: '达斡尔民间集体舞，模拟动物姿态。', img: '/img/rurigelewu.jpg', q: '达斡尔族鲁日格勒舞' },
      { title: '摩苏昆', desc: '鄂伦春长篇说唱，记录山林狩猎故事。', img: '/img/moshukun.jpg', q: '鄂伦春族摩苏昆' }
    ],
    [
      { title: '东北二人转', desc: '一丑一旦，载歌载舞的黑土地曲艺。', img: '/img/errenzhuan.jpg', q: '东北二人转' },
      { title: '桦树皮制作技艺', desc: '寒地民族轻便防水的传统工艺。', img: '/img/huashupi.jpg', q: '桦树皮制作技艺' }
    ]
  ];

  const goodsSlides = [
    [
      { title: '伊玛堪绘本', desc: '史诗绘本，面向年轻群体。', img: '/img01/yimakan_huiben.jpg' },
      { title: '鱼皮画摆件', desc: '手工镂刻，赫哲特色艺术品。', img: '/img01/yupihua_baijian.jpg' }
    ],
    [
      { title: '狍皮纹样书签', desc: '复刻鄂伦春传统山林纹样。', img: '/img01/baopiwen_jinshushuqian.jpg' },
      { title: '鲁日格勒帆布包', desc: '提取达斡尔舞蹈纹样设计。', img: '/img01/lurigrlewenyang_fanbudai.jpg' }
    ],
    [
      { title: '皮影装饰摆件', desc: '望奎皮影复刻，东北非遗特色。', img: '/img01/wangkui_piyin.jpg' },
      { title: '迷你四胡摆件', desc: '达斡尔乌钦伴奏乐器缩小版。', img: '/img01/minisihu_baijian.jpg' }
    ]
  ];

  return (
    <div>

      <div className="chat-layout">
        {/* 左侧聊天区域 */}
        <div className="chat-container">
          <div className="chat-title">基于RAG检索黑龙江非遗知识库</div>
          
          <div className="chat-content">
            {messages.length === 0 && (
              <div className="message bot-message">
                <div className="avatar">🤖</div>
                <div className="bubble">
                  你好！我可以为你讲解黑龙江各类非物质文化遗产，你可以直接提问，也可以在非遗名录选择项目。
                </div>
              </div>
            )}

            {messages.map((m) => (
              <div key={m.id} className={`message ${m.role === 'user' ? 'user-message' : 'bot-message'}`}>
                {m.role !== 'user' && <div className="avatar">🤖</div>}
                <div className="bubble">
                  {m.role === 'user' ? m.content : (
                    <>
                      <ReactMarkdown 
                        rehypePlugins={[rehypeRaw]}
                        components={{
                          a: (props) => <a {...props} target="_blank" style={{color: '#7c2020', textDecoration: 'underline', fontWeight: 'bold'}} />,
                          iframe: (props) => (
                            <div style={{ width: '100%', margin: '15px 0', borderRadius: '10px', overflow: 'hidden' }}>
                              <iframe {...props} style={{ width: '100%', height: '250px', border: 'none' }} allowFullScreen />
                            </div>
                          )
                        }}
                      >
                        {m.content}
                      </ReactMarkdown>

                      {/* 🚨 前端暴力兜底：强行挂视频和链接 */}
                      {m.content.includes('伊玛堪') && !m.content.includes('iframe') && (
                        <div style={{ width: '100%', margin: '15px 0', borderRadius: '10px', overflow: 'hidden' }}>
                          <iframe src="//player.bilibili.com/player.html?bvid=BV13R4y1D7De&page=1" style={{ width: '100%', height: '250px', border: 'none' }} allowFullScreen />
                        </div>
                      )}
                      {m.content.includes('伊玛堪') && !m.content.includes('点击购买') && (
                        <div style={{ marginTop: '15px' }}>
                          <a href=" " target="_blank" style={{ display: 'inline-block', padding: '8px 16px', background: '#7c2020', color: '#fff', borderRadius: '20px', textDecoration: 'none', fontSize: '14px' }}>
                            🛒 购买伊玛堪绘本 (点击跳转)
                          </a >
                        </div>
                      )}
                    </>
                  )}
                </div>
                {m.role === 'user' && <div className="avatar" style={{ background: '#78a094' }}>我</div>}
              </div>
            ))}
            {isLoading && <div className="message bot-message"><div className="avatar">🤖</div><div className="bubble">思考中...</div></div>}
            <div ref={chatEndRef} />
          </div>

          <form onSubmit={handleSubmit} className="input-area">
            <input type="text" placeholder="输入你想了解的非遗项目" value={input} onChange={handleInputChange} />
            <button type="submit" className="send-btn" disabled={isLoading}>发送</button>
          </form>
        </div>

        {/* 右侧侧边栏（完整版） */}
        <aside className="related-panel">
          <h3>相关非遗推荐</h3>
          <div className="slider-wrap">
            <div className="slider-outer">
              <button className="slider-arrow prev" onClick={() => setHeritageIdx(p => p === 0 ? heritageSlides.length - 1 : p - 1)}>‹</button>
              <button className="slider-arrow next" onClick={() => setHeritageIdx(p => p === heritageSlides.length - 1 ? 0 : p + 1)}>›</button>
              <div className="slider-viewport">
                <div className="slider-track" style={{ transform: `translateX(-${heritageIdx * 100}%)` }}>
                  {heritageSlides.map((slide, i) => (
                    <div className="slide" key={i}>
                      <div className="card-row">
                        {slide.map((card, j) => (
                          <div className="img-card" key={j} onClick={() => {
                            // 点击卡片直接把问题填入输入框
                            const inputEl = document.querySelector('.input-area input') as HTMLInputElement;
                            if(inputEl) inputEl.value = card.q;
                          }}>
                            < img src={card.img} alt={card.title} />
                            <div className="img-card-info">
                              <div className="img-card-title">{card.title}</div>
                              <div className="img-card-desc">{card.desc}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="dots-wrap">
              {heritageSlides.map((_, i) => (
                <div key={i} className={`dot ${i === heritageIdx ? 'active' : ''}`} onClick={() => setHeritageIdx(i)}></div>
              ))}
            </div>
          </div>

          <h3 style={{ marginTop: '20px' }}>文创好物推荐</h3>
          <div className="slider-wrap">
            <div className="slider-outer">
              <button className="slider-arrow prev" onClick={() => setGoodsIdx(p => p === 0 ? goodsSlides.length - 1 : p - 1)}>‹</button>
              <button className="slider-arrow next" onClick={() => setGoodsIdx(p => p === goodsSlides.length - 1 ? 0 : p + 1)}>›</button>
              <div className="slider-viewport">
                <div className="slider-track" style={{ transform: `translateX(-${goodsIdx * 100}%)` }}>
                  {goodsSlides.map((slide, i) => (
                    <div className="slide" key={i}>
                      <div className="card-row">
                        {slide.map((card, j) => (
                          <div className="img-card" key={j}>
                            < img src={card.img} alt={card.title} />
                            <div className="img-card-info">
                              <div className="img-card-title">{card.title}</div>
                              <div className="img-card-desc">{card.desc}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="dots-wrap">
              {goodsSlides.map((_, i) => (
                <div key={i} className={`dot ${i === goodsIdx ? 'active' : ''}`} onClick={() => setGoodsIdx(i)}></div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}