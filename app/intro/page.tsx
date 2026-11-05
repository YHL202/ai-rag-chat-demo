import Link from 'next/link';

export default function IntroPage() {
  return (
    <div>

      {/* 标题区 */}
      <section className="project-hero">
        <h1>项目介绍</h1>
        <p>面向黑龙江非遗文化的RAG问答应用</p >
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

      {/* 底部说明卡片 */}
      <section className="info-grid">
        <div className="info-card">
          <h3>技术方案</h3>
          <p>采集黑龙江非遗知识，构建结构化知识库与向量索引，用户提问后检索相关内容并生成图文回答。</p >
        </div>
        <div className="info-card">
          <h3>项目亮点</h3>
          <div className="tag-list">
            <span className="tag">地域文化主题</span>
            <span className="tag">RAG检索增强</span>
            <span className="tag">图文结果展示</span>
            <span className="tag">文创联动推荐</span>
          </div>
        </div>
      </section>
    </div>
  );
}