'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Home() {
  // 完美复刻队友的轮播图逻辑
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    '/img02/t1.jpg',
    '/img02/t2.jpg',
    '/img02/t3 (1).jpg',
    '/img02/t4 (1).jpg',
    '/img02/t5.jpg',
    '/img02/t6.jpg',
    '/img02/t7.jpg',
    '/img02/t8.jpg',
    '/img02/t9.jpg',
    '/img02/t10.jpg',
    '/img02/t11.jpg',
    '/img02/t12.jpg'
  ];

  // 自动轮播，每3秒切换一次
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div>

      {/* 首页核心区域 */}
      <section id="home" className="page show">
        <div className="hero">
          <div className="hero-text">
            <h1>黑龙江非遗 AI 问答系统</h1>
            <p>以检索增强生成连接地域文化与非遗知识</p >
            <div className="btn-group">
              <Link href="/chat" className="btn btn-primary">开始问答</Link>
              <Link href="/list" className="btn btn-outline">浏览名录</Link>
            </div>
          </div>
          
          {/* 右侧轮播图 */}
          <div className="hero-image">
            <div 
              className="hero-slider-track" 
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((src, index) => (
                <div className="hero-slide" key={index}>
                  < img src={src} alt={`非遗轮播 ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 底部三大功能卡片 */}
        <section className="features">
          <Link href="/chat" className="feature-card feature-btn">
            <div className="feature-icon icon-red">🤖</div>
            <div className="feature-text">
              <h3>AI智能问答</h3>
              <small>INTELLIGENT Q&A</small>
            </div>
          </Link>
          <Link href="/list" className="feature-card feature-btn">
            <div className="feature-icon icon-green">🌿</div>
            <div className="feature-text">
              <h3>非遗知识库</h3>
              <small>HERITAGE KNOWLEDGE</small>
            </div>
          </Link>
          <Link href="/goods" className="feature-card feature-btn">
            <div className="feature-icon icon-green">📜</div>
            <div className="feature-text">
              <h3>文创推荐</h3>
              <small>CULTURAL CREATION</small>
            </div>
          </Link>
        </section>
      </section>
    </div>
  );
}