import Link from 'next/link';

export default function GoodsPage() {
  const products = [
    { title: '东北传统唢呐', desc: '黑土民俗乐器，平均孔东北唢呐，明轩坊官方旗舰店。', img: '/goods/suona.jpg', link: 'https://s.taobao.com/search?q=东北唢呐乐器' },
    { title: '鄂温克民族娃娃贴饰', desc: '鄂温克瑟宾民俗，可爱卡通动漫磁吸贴，内蒙古旅游纪念。', img: '/goods/wenke.jpg', link: 'https://e.tb.cn/h.j7yNyrdR640DOci?tk=araL6cNpmcECZ005' },
    { title: '赫哲英雄阿木绘本', desc: '非遗故事绘本，民族英雄史诗，赫哲族文化传承。', img: '/goods/yimakan_huiben.jpg', link: 'https://e.tb.cn/h.j7BrwdjknVha83D?tk=96cL6cnvODRHU287' },
    { title: '赫哲鱼皮挂件雕球', desc: '天然鱼皮雕球，随身吉祥挂件，车挂包挂，解永亮作品。', img: '/goods/yupihua_baijian.jpg', link: 'https://e.tb.cn/h.j8A3V0GG3Lkjz4a?tk=xSOr6cN8gGL' },
    { title: '赫哲族非遗鱼皮零钱包', desc: '赫哲手工鱼皮，渔趣零钱小包，大马哈鱼皮手工艺品。', img: '/goods/yupihua_baijian_2.jpg', link: 'https://e.tb.cn/h.j8A5KqodOOWHqA1?tk=ue096cNP9Q7' },
    { title: '黑河鄂伦春桦树皮画', desc: '鄂伦春桦皮为材，山野手绘画作，传统非遗手工制品。', img: '/goods/huashupi_shouhe.jpg', link: 'https://e.tb.cn/h.jSuC9rbTz3m4CJM?tk=hR1x6cnQlqe' },
    {  title: '东北蒙古四胡', desc: '东北传统四胡，草原弦乐器，红木高音，专业初学练习。', img: '/goods/sihu.jpg', link: 'https://s.taobao.com/search?q=蒙古四胡乐器' },
    { title: '五大连池文创纪念币', desc: '火山原石造物，北国山石文创，桌面摆件纪念章。', img: '/goods/coin.jpg', link: 'https://e.tb.cn/h.jRSP6Rr1vXiHqYN?tk=RLw06cNFp7F' },
    {  title: '赫哲族鱼皮画《鱼神》', desc: '赫哲鱼皮刻画，鱼神图腾画作，居家办公特色摆件。', img: '/goods/yushen.jpg', link: 'https://s.taobao.com/search?q=赫哲族鱼神鱼皮画' },
    { title: '天然鱼皮胸针', desc: '承载伊玛堪，赫哲族鱼皮画摆台，图腾吉祥有余伴手礼。', img: '/goods/yupihua_baijian_3.jpg', link: 'https://s.taobao.com/search?q=赫哲族鱼皮胸针' },
    { title: '哈尔滨龙江皮影吊坠', desc: '光影非遗吊坠，传统工艺与时尚结合，精美配饰。', img: '/goods/piying.jpg', link: 'https://e.tb.cn/h.j7CozdXXLSe6YWm?tk=vcPL6cmr6FP' },
    { title: '满族神话典籍', desc: '白山黑水传说，满族历史文化记录，珍藏读物。', img: '/goods/manzu.jpg', link: 'https://e.tb.cn/h.jSFA1COIhsgQmeG?tk=LxfN6cMOH8q' },
    {  title: '复刻狍角帽摆件', desc: '山林民俗摆件，复刻传统狍角帽造型，民族特色文创。', img: '/goods/paomao.jpg', link: 'https://s.taobao.com/search?q=狍角帽摆件' },
  ];

  return (
    <div>

      <section className="cultural-hero">
        <h1>非遗文创好物</h1>
        <p>把黑龙江地域文化带回家</p>
      </section>

      <section className="product-grid">
        {products.map((item, index) => (
          <div className="product-card" key={index}>
            <img src={item.img} alt={item.title} />
            <div className="product-info">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <a 
                href={item.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block mt-2 px-4 py-2 bg-[#7c2020] text-white rounded-lg text-sm hover:bg-red-800 transition"
              >
                {item.link !== '#' ? '去淘宝购买' : '暂无购买链接'}
              </a>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}