'use client';
import { useChat } from '@ai-sdk/react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat();
  const chatEndRef = useRef<HTMLDivElement>(null);

  const [heritageIdx, setHeritageIdx] = useState(0);
  const [goodsIdx, setGoodsIdx] = useState(0);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // 完整的 42 项非遗数据
  const heritageSlides = [
    [{ title: '满族说部', desc: '满族先民口耳相传的长篇说唱叙事文学。', img: '/ich/1.jpg', q: '满族说部' }, { title: '蒙古族四胡音乐', desc: '蒙古族特色拉弦乐器，曲调辽阔深沉。', img: '/ich/2.jpg', q: '蒙古族四胡音乐' }],
    [{ title: '唢呐艺术', desc: '杨小班鼓吹乐棚，传统婚丧民俗中的吹打乐。', img: '/ich/3.jpg', q: '唢呐艺术' }, { title: '森林号子', desc: '大小兴安岭林区伐木、运木时统一节奏的劳动号子。', img: '/ich/4.jpg', q: '森林号子' }],
    [{ title: '鄂伦春族赞达仁', desc: '鄂伦春族歌唱艺术主体，旋律高亢自由。', img: '/ich/5.jpg', q: '鄂伦春族赞达仁' }, { title: '达斡尔族民歌', desc: '罕伯岱村原生态民歌，题材覆盖劳动、爱情。', img: '/ich/6.jpg', q: '达斡尔族民歌' }],
    [{ title: '赫哲族嫁令阔', desc: '赫哲族民歌总称，曲调婉转清新。', img: '/ich/7.jpg', q: '赫哲族嫁令阔' }, { title: '武家鼓吹乐棚', desc: '林甸武氏家族传承的民间鼓乐班。', img: '/ich/8.jpg', q: '武家鼓吹乐棚' }],
    [{ title: '鲁日格勒舞', desc: '达斡尔族传统集体歌舞，模拟鸟兽与劳动动作。', img: '/ich/9.jpg', q: '达斡尔族鲁日格勒舞' }, { title: '黑龙江评剧', desc: '结合黑土地人文风貌，唱腔高亢开阔。', img: '/ich/10.jpg', q: '黑龙江评剧' }],
    [{ title: '望奎县皮影戏', desc: '江北派皮影代表，雕工细腻，唱腔苍凉。', img: '/ich/11.jpg', q: '望奎县皮影戏' }, { title: '龙江皮影戏', desc: '江南派皮影，造型夸张活泼，注重特技。', img: '/ich/12.jpg', q: '龙江皮影戏' }],
    [{ title: '东北大鼓', desc: '以三弦伴奏，长篇叙事，长于长篇评书式故事。', img: '/ich/13.jpg', q: '东北大鼓' }, { title: '五常东北大鼓', desc: '下江分支，唱腔柔和，叙事细腻。', img: '/ich/14.jpg', q: '五常东北大鼓' }],
    [{ title: '海伦二人转', desc: '北派二人转代表，讲究唱、说、做、舞、绝。', img: '/ich/15.jpg', q: '海伦二人转' }, { title: '绥棱二人转', desc: '保留大量传统老曲牌，舞台表演克制内敛。', img: '/ich/16.jpg', q: '绥棱二人转' }],
    [{ title: '达斡尔族乌钦', desc: '达斡尔族说书体，艺人持四弦胡自弹自唱。', img: '/ich/17.jpg', q: '达斡尔族乌钦' }, { title: '赫哲族伊玛堪', desc: '世界级非遗，徒口说唱史诗，无乐器伴奏。', img: '/ich/18.jpg', q: '赫哲族伊玛堪' }],
    [{ title: '摩苏昆', desc: '说唱结合，记录山林狩猎生活与部族往事。', img: '/ich/19.jpg', q: '鄂伦春族摩苏昆' }, { title: '赵魁良戏法', desc: '中国古典手彩戏法，注重稳、准、快。', img: '/ich/20.jpg', q: '赵魁良戏法' }],
    [{ title: '方正剪纸', desc: '构图饱满，造型稚拙，擅长东北乡土题材。', img: '/ich/21.jpg', q: '方正剪纸' }, { title: '海伦剪纸', desc: '线条刚劲，擅长大场面叙事，黑土农耕题材。', img: '/ich/22.jpg', q: '海伦剪纸' }],
    [{ title: '麦秆剪贴', desc: '利用麦秆天然光泽，分层粘贴，半浮雕技法。', img: '/ich/23.jpg', q: '麦秆剪贴' }, { title: '渤海靺鞨绣', desc: '满族刺绣，针法多变，配色浓烈厚重。', img: '/ich/24.jpg', q: '渤海靺鞨绣' }],
    [{ title: '克东满族刺绣', desc: '针脚朴实密实，多用于荷包、枕头顶。', img: '/ich/25.jpg', q: '克东满族刺绣' }, { title: '宁安满族刺绣', desc: '纹样造型夸张变形，充满山野气息。', img: '/ich/26.jpg', q: '宁安满族刺绣' }],
    [{ title: '饶河桦树皮制作', desc: '折叠、咬合、缝制成型，不用铁钉，防水轻便。', img: '/ich/27.jpg', q: '饶河桦树皮制作' }, { title: '桦树皮船制作', desc: '鄂伦春族传统水上交通工具，全船不用铁钉。', img: '/ich/28.jpg', q: '桦树皮船制作' }],
    [{ title: '赫哲族鱼皮制作', desc: '鞣制大马哈鱼皮，缝制服饰与工艺品。', img: '/ich/29.jpg', q: '赫哲族鱼皮制作' }, { title: '鄂伦春族狍皮制作', desc: '兽皮发酵鞣制，防寒耐用，狩猎文化核心。', img: '/ich/30.jpg', q: '鄂伦春族狍皮制作' }],
    [{ title: '老汤精配制', desc: '传统复合调味料，文火熬煮，浓缩熟成。', img: '/ich/31.jpg', q: '老汤精配制' }, { title: '七台河刀剑锻制', desc: '折叠锻打，淬火控制硬度，手工打磨开刃。', img: '/ich/32.jpg', q: '七台河刀剑锻制' }],
    [{ title: '枇杷露传统制剂', desc: '传统膏滋炮制技艺，遵循古法配伍。', img: '/ich/33.jpg', q: '枇杷露传统制剂' }, { title: '老王麻子膏药', desc: '传统外用膏药，丹化、去火毒，百年老字号。', img: '/ich/34.jpg', q: '老王麻子膏药' }],
    [{ title: '五大连池药泉会', desc: '又称圣水节，多民族共同参与，祭泉祈福。', img: '/ich/35.jpg', q: '五大连池药泉会' }, { title: '古伦木沓节', desc: '祭祀火神的节日，点燃篝火，敬献祭品。', img: '/ich/36.jpg', q: '鄂伦春族古伦木沓节' }],
    [{ title: '瑷珲上元节', desc: '包含挂灯、走百病、扭秧歌，多民族共庆。', img: '/ich/37.jpg', q: '瑷珲上元节' }, { title: '朝鲜族花甲礼', desc: '为60岁长者举行的祝寿大礼，庄重严谨。', img: '/ich/38.jpg', q: '朝鲜族花甲礼' }],
    [{ title: '鄂温克族瑟宾节', desc: '意为欢乐祥和，有赛马、摔跤、抢枢等活动。', img: '/ich/39.jpg', q: '鄂温克族瑟宾节' }, { title: '达斡尔族传统婚俗', desc: '分提亲、定亲、过礼、迎亲等完整仪程。', img: '/ich/40.jpg', q: '达斡尔族传统婚俗' }],
    [{ title: '赫哲族传统婚俗', desc: '日出迎亲，拜天地、敬献鱼宴，渔猎特色。', img: '/ich/41.jpg', q: '赫哲族传统婚俗' }, { title: '赫哲族乌日贡大会', desc: '集说唱、歌舞、渔猎竞技于一体的民族盛会。', img: '/ich/42.jpg', q: '赫哲族乌日贡大会' }]
  ];

    // ===== 最新的真实文创商品数据（共13个，分7页） =====
    const goodsSlides = [
      [
        { title: '东北传统唢呐', desc: '黑土民俗乐器，平均孔东北唢呐。', img: '/goods/suona.jpg' },
        { title: '鄂温克民族娃娃', desc: '可爱卡通磁吸贴，旅游纪念。', img: '/goods/wenke.jpg' }
      ],
      [
        { title: '赫哲英雄阿木绘本', desc: '非遗故事绘本，民族英雄史诗。', img: '/goods/yimakan_huiben.jpg' },
        { title: '赫哲鱼皮挂件雕球', desc: '天然鱼皮雕球，随身吉祥挂件。', img: '/goods/yupihua_baijian_2.jpg' }
      ],
      [
        { title: '赫哲族非遗鱼皮零钱包', desc: '赫哲手工鱼皮，渔趣零钱小包。', img: '/goods/yupihua_baijian.jpg' },
        { title: '黑河鄂伦春桦树皮画', desc: '鄂伦春桦皮为材，山野手绘画作。', img: '/goods/huashupi_shouhe.jpg' }
      ],
      [
        { title: '东北蒙古四胡', desc: '草原弦乐器，红木高音，专业练习。', img: '/goods/sihu.jpg' },
        { title: '五大连池纪念币', desc: '火山原石造物，北国山石文创。', img: '/goods/coin.jpg' }
      ],
      [
        { title: '赫哲族鱼皮画《鱼神》', desc: '鱼神图腾画作，居家办公摆件。', img: '/goods/yushen.jpg' },
        { title: '天然鱼皮胸针', desc: '承载伊玛堪，图腾吉祥有余。', img: '/goods/yupihua_baijian_3.jpg' }
      ],
      [
        { title: '哈尔滨龙江皮影吊坠', desc: '光影非遗吊坠，传统工艺结合时尚。', img: '/goods/piying.jpg' },
        { title: '满族神话典籍', desc: '白山黑水传说，满族历史文化记录。', img: '/goods/manzu.jpg' }
      ],
      [
        { title: '复刻独角古帽摆件', desc: '山林民俗摆件，复刻传统狍角帽造型。', img: '/goods/paomao.jpg' },
        // 如果最后一页只有一个商品，可以复制一个或直接留空
        { title: '更多非遗文创', desc: '敬请期待', img: '/img01/yimakan_huiben.jpg' } 
      ]
    ];

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f8f5eb', overflowX: 'hidden' }}>
      
      

      <div style={{ display: 'flex', gap: '30px', padding: '30px 5%', maxWidth: '1500px', margin: '0 auto', boxSizing: 'border-box', height: 'calc(100vh - 80px)' }}>
        
        {/* ===== 左侧聊天区 ===== */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', backgroundColor: '#fff', borderRadius: '15px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', minWidth: 0, overflow: 'hidden' }}>
          <div style={{ padding: '20px 25px', fontSize: '18px', fontWeight: 'bold', borderBottom: '1px solid #f0f0f0' }}>基于RAG检索黑龙江非遗知识库</div>
          
          <div style={{ flex: 1, padding: '20px 25px', overflowY: 'auto' }}>
            {messages.length === 0 && (
              <div style={{ color: '#666', textAlign: 'center', marginTop: '50px' }}>你好！我是黑龙江非遗助手，请问你想了解什么？</div>
            )}
            {messages.map((m) => (
              <div key={m.id} style={{ display: 'flex', justifyContent: m.role === 'user' ? 'flex-end' : 'flex-start', marginBottom: '15px' }}>
                <div style={{ backgroundColor: m.role === 'user' ? '#78a094' : '#f1f1f1', color: m.role === 'user' ? '#fff' : '#333', padding: '10px 15px', borderRadius: '15px', maxWidth: '85%', wordBreak: 'break-word' }}>
                  <ReactMarkdown 
                    rehypePlugins={[rehypeRaw]}
                    components={{ iframe: (props) => <iframe {...props} style={{ width: '100%', height: '220px', border: 'none', borderRadius: '8px', marginTop: '10px' }} /> }}
                  >
                    {m.content}
                  </ReactMarkdown>
                </div>
              </div>
            ))}
            {isLoading && <div style={{ color: '#999' }}>AI 思考中...</div>}
            <div ref={chatEndRef} />
          </div>

          {/* 🚨 注意：这里给 form 加上了 id="chat-form" */}
          <form id="chat-form" onSubmit={handleSubmit} style={{ padding: '20px 25px', borderTop: '1px solid #f0f0f0', display: 'flex', gap: '10px' }}>
            <input type="text" value={input} onChange={handleInputChange} placeholder="输入你想了解的非遗项目" style={{ flex: 1, padding: '12px 20px', borderRadius: '25px', border: '1px solid #ccc', outline: 'none', backgroundColor: '#f8f5eb' }} />
            <button type="submit" style={{ padding: '0 25px', backgroundColor: '#7c2020', color: '#fff', border: 'none', borderRadius: '25px', cursor: 'pointer' }}>发送</button>
          </form>
        </div>

        {/* ===== 右侧推荐区 ===== */}
        <div style={{ width: '420px', display: 'flex', flexDirection: 'column', backgroundColor: '#fff', borderRadius: '15px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', minWidth: 0, overflow: 'hidden' }}>
          
          <div style={{ padding: '20px 25px', fontSize: '18px', fontWeight: 'bold', borderBottom: '1px solid #f0f0f0', color: '#333' }}>推荐与发现</div>

          <div style={{ flex: 1, padding: '20px 25px', overflowY: 'auto' }}>
            
            {/* 相关非遗推荐 */}
            <div style={{ marginBottom: '35px' }}>
              <h3 style={{ margin: '0 0 15px 0', fontSize: '16px', color: '#333' }}>相关非遗推荐</h3>
              <div style={{ position: 'relative' }}>
                <div style={{ overflow: 'hidden', borderRadius: '8px' }}>
                  <div style={{ display: 'flex', transition: 'transform 0.4s ease', transform: `translateX(-${heritageIdx * 100}%)` }}>
                    {heritageSlides.map((slide, i) => (
                      <div key={i} style={{ minWidth: '100%', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                        {slide.map((card, j) => (
                          <div key={j} style={{ minWidth: 0, cursor: 'pointer' }} onClick={() => {
                            // 🚨 核心修复：用 React 的方式更新 input，并自动触发发送
                            handleInputChange({ target: { value: card.q } } as any);
                            
                            // 延迟一点点，等 input 值更新后再触发表单提交
                            setTimeout(() => {
                              const form = document.getElementById('chat-form') as HTMLFormElement;
                              if (form) {
                                form.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }));
                              }
                            }, 50);
                          }}>
                            <img src={card.img} alt={card.title} style={{ width: '100%', height: '120px', objectFit: 'cover', borderRadius: '8px' }} />
                            <div style={{ fontSize: '15px', fontWeight: 'bold', marginTop: '10px' }}>{card.title}</div>
                            <div style={{ fontSize: '12px', color: '#888', marginTop: '6px', lineHeight: '1.5' }}>{card.desc}</div>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
                <button onClick={() => setHeritageIdx(p => p === 0 ? heritageSlides.length - 1 : p - 1)} style={{ position: 'absolute', top: '45%', transform: 'translateY(-50%)', left: '-12px', width: '28px', height: '28px', borderRadius: '50%', background: '#fff', border: '1px solid #ddd', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' }}>‹</button>
                <button onClick={() => setHeritageIdx(p => p === heritageSlides.length - 1 ? 0 : p + 1)} style={{ position: 'absolute', top: '45%', transform: 'translateY(-50%)', right: '-12px', width: '28px', height: '28px', borderRadius: '50%', background: '#fff', border: '1px solid #ddd', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' }}>›</button>
              </div>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '6px', marginTop: '20px', flexWrap: 'wrap' }}>
                {heritageSlides.map((_, i) => (
                  <div key={i} onClick={() => setHeritageIdx(i)} style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: i === heritageIdx ? '#7c2020' : '#ddd', cursor: 'pointer', transition: 'background-color 0.3s' }} />
                ))}
              </div>
            </div>

            {/* 文创好物推荐 */}
            <div>
              <h3 style={{ margin: '0 0 15px 0', fontSize: '16px', color: '#333' }}>文创好物推荐</h3>
              <div style={{ position: 'relative' }}>
                <div style={{ overflow: 'hidden', borderRadius: '8px' }}>
                  <div style={{ display: 'flex', transition: 'transform 0.4s ease', transform: `translateX(-${goodsIdx * 100}%)` }}>
                    {goodsSlides.map((slide, i) => (
                      <div key={i} style={{ minWidth: '100%', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                        {slide.map((card, j) => (
                          <div key={j} style={{ minWidth: 0 }}>
                            <img src={card.img} alt={card.title} style={{ width: '100%', height: '120px', objectFit: 'cover', borderRadius: '8px' }} />
                            <div style={{ fontSize: '15px', fontWeight: 'bold', marginTop: '10px' }}>{card.title}</div>
                            <div style={{ fontSize: '12px', color: '#888', marginTop: '6px', lineHeight: '1.5' }}>{card.desc}</div>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
                <button onClick={() => setGoodsIdx(p => p === 0 ? goodsSlides.length - 1 : p - 1)} style={{ position: 'absolute', top: '45%', transform: 'translateY(-50%)', left: '-12px', width: '28px', height: '28px', borderRadius: '50%', background: '#fff', border: '1px solid #ddd', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' }}>‹</button>
                <button onClick={() => setGoodsIdx(p => p === goodsSlides.length - 1 ? 0 : p + 1)} style={{ position: 'absolute', top: '45%', transform: 'translateY(-50%)', right: '-12px', width: '28px', height: '28px', borderRadius: '50%', background: '#fff', border: '1px solid #ddd', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 6px rgba(0,0,0,0.1)' }}>›</button>
              </div>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '6px', marginTop: '20px' }}>
                {goodsSlides.map((_, i) => (
                  <div key={i} onClick={() => setGoodsIdx(i)} style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: i === goodsIdx ? '#7c2020' : '#ddd', cursor: 'pointer', transition: 'background-color 0.3s' }} />
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}