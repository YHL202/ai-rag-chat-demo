import Link from 'next/link';

export default function IntroPage() {
  return (
    <div style={{ backgroundColor: '#f8f5eb', minHeight: '100vh', paddingBottom: '60px' }}>
      
      {/* 顶部大标题 */}
      <section className="project-hero">
        <h1>项目介绍</h1>
        <p>面向黑龙江非遗文化的 RAG 智能问答应用</p >
      </section>

      {/* 核心流程图 */}
      <section className="flow-section">
        <div className="flow-step">
          <div className="icon">🗄️</div>
          <h3>非遗知识库</h3>
        </div>
        <div className="flow-arrow">→</div>
        <div className="flow-step">
          <div className="icon">🔍</div>
          <h3>向量检索</h3>
        </div>
        <div className="flow-arrow">→</div>
        <div className="flow-step">
          <div className="icon">📄</div>
          <h3>AI生成回答</h3>
        </div>
      </section>

      {/* 核心内容展示区 */}
      <section style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 20px' }}>
        
        {/* 模块一：高精度数据集 */}
        <div style={{ backgroundColor: '#ffffff', borderRadius: '20px', padding: '40px', boxShadow: '0 8px 24px rgba(0,0,0,0.04)', marginBottom: '40px' }}>
          <h3 style={{ fontSize: '24px', color: '#7c2020', borderBottom: '2px solid #f8f5eb', paddingBottom: '15px', marginBottom: '25px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span>📚</span> 专属高精度非遗数据集
          </h3>
          <div style={{ fontSize: '16px', lineHeight: '1.8', color: '#444' }}>
            <p style={{ marginBottom: '16px' }}>
              本系统拒绝使用网络泛泛的开源数据，由团队精心收集并构建了<strong>黑龙江省 42 项国家级非物质文化遗产</strong>的专属知识库，保证回答的绝对权威与精准。
            </p >
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px' }}>
              <div style={{ background: '#fdfcf9', padding: '15px', borderRadius: '10px', borderLeft: '4px solid #7c2020' }}>
                <strong style={{ display: 'block', marginBottom: '5px', color: '#2a1f18' }}>高密度知识颗粒</strong>
                <span style={{ fontSize: '14px', color: '#666' }}>每项非遗包含概况、技艺、传承人、文化价值等 5 大维度。</span>
              </div>
              <div style={{ background: '#fdfcf9', padding: '15px', borderRadius: '10px', borderLeft: '4px solid #7c2020' }}>
                <strong style={{ display: 'block', marginBottom: '5px', color: '#2a1f18' }}>多媒体融合</strong>
                <span style={{ fontSize: '14px', color: '#666' }}>内嵌原生 B 站纪录片与高清配图，打破纯文本局限。</span>
              </div>
              <div style={{ background: '#fdfcf9', padding: '15px', borderRadius: '10px', borderLeft: '4px solid #7c2020' }}>
                <strong style={{ display: 'block', marginBottom: '5px', color: '#2a1f18' }}>商业数据闭环</strong>
                <span style={{ fontSize: '14px', color: '#666' }}>关联真实非遗文创淘宝链接，实现科普到消费的转化。</span>
              </div>
            </div>
          </div>
        </div>

        {/* 模块二：核心技术亮点 (使用强制 Grid 布局，防止被旧 CSS 干扰) */}
        <div style={{ backgroundColor: '#ffffff', borderRadius: '20px', padding: '40px', boxShadow: '0 8px 24px rgba(0,0,0,0.04)' }}>
          <h3 style={{ fontSize: '24px', color: '#7c2020', borderBottom: '2px solid #f8f5eb', paddingBottom: '15px', marginBottom: '25px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span>✨</span> 核心技术亮点
          </h3>
          
          {/* 👇 这里强制使用两列网格布局，覆盖掉之前的单列或三列布局 👇 */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px' }}>
            
            {/* 亮点 1 */}
            <div style={{ backgroundColor: '#f8f5eb', padding: '24px', borderRadius: '16px', border: '1px solid #e8e0d5' }}>
              <h4 style={{ fontSize: '18px', color: '#2a1f18', fontWeight: 'bold', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span>🎯</span> 深度 RAG 架构
              </h4>
              <p style={{ fontSize: '14px', color: '#555', lineHeight: '1.7', margin: 0 }}>
                采用检索增强生成（RAG）技术，先查库再回答。彻底杜绝了大模型的“幻觉”问题，确保所有非遗知识 100% 准确可靠。
              </p >
            </div>

            {/* 亮点 2 */}
            <div style={{ backgroundColor: '#f8f5eb', padding: '24px', borderRadius: '16px', border: '1px solid #e8e0d5' }}>
              <h4 style={{ fontSize: '18px', color: '#2a1f18', fontWeight: 'bold', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span>🎬</span> 多模态图文渲染
              </h4>
              <p style={{ fontSize: '14px', color: '#555', lineHeight: '1.7', margin: 0 }}>
                突破纯文本限制，前端通过 React-Markdown 强力解析，在对话流中直接渲染 B站视频播放器与非遗精美图片。
              </p >
            </div>

            {/* 亮点 3 */}
            <div style={{ backgroundColor: '#f8f5eb', padding: '24px', borderRadius: '16px', border: '1px solid #e8e0d5' }}>
              <h4 style={{ fontSize: '18px', color: '#2a1f18', fontWeight: 'bold', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span>🛒</span> 商业价值闭环
              </h4>
              <p style={{ fontSize: '14px', color: '#555', lineHeight: '1.7', margin: 0 }}>
                将“非遗科普”与“文创电商”结合，AI 回答尾部自动触发商品推荐链接，探索出一条非遗文化变现的全新路径。
              </p >
            </div>

            {/* 亮点 4 */}
            <div style={{ backgroundColor: '#f8f5eb', padding: '24px', borderRadius: '16px', border: '1px solid #e8e0d5' }}>
              <h4 style={{ fontSize: '18px', color: '#2a1f18', fontWeight: 'bold', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span>🛡️</span> 严格的 Prompt 边界
              </h4>
              <p style={{ fontSize: '14px', color: '#555', lineHeight: '1.7', margin: 0 }}>
                系统注入了严格的“安全边界”指令，当用户提问与非遗无关时，AI 会礼貌拒绝，保证系统的纯粹性与专业度。
              </p >
            </div>

          </div>
        </div>

      </section>
    </div>
  );
}