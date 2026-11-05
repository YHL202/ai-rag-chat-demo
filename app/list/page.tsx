'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function ListPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: '全部' },
    { id: 'folk-lit', name: '民间文学' },
    { id: 'skill', name: '传统技艺' },
    { id: 'folk-custom', name: '民俗' },
    { id: 'music', name: '传统音乐' },
    { id: 'dance', name: '传统舞蹈' },
    { id: 'opera-quyi', name: '戏曲曲艺' },
  ];

  // 完整提取队友的数据
  const heritageData = [
    // 民间文学
    { title: '赫哲族伊玛堪', cat: 'folk-lit', desc: '赫哲族长篇口头说唱史诗，无文字，以说唱讲述民族英雄、渔猎传说，列入联合国人类非遗名录。', img: '/img/yimakan.jpg' },
    { title: '鄂伦春族摩苏昆', cat: 'folk-lit', desc: '鄂伦春族长篇说唱文学，边说边唱，记录山林狩猎生活与民族英雄故事。', img: '/img/moshukun.jpg' },
    { title: '赫哲族特伦固', cat: 'folk-lit', desc: '赫哲族神话、传说、民间故事，讲述万物起源、民族起源与渔猎智慧。', img: '/img/telungu.jpg' },
    { title: '满族说部', cat: 'folk-lit', desc: '满族长篇口头叙事，包含部族历史、英雄史诗、神话传说，篇幅宏大。', img: '/img/shuobu.jpg' },
    // 传统技艺
    { title: '赫哲族鱼皮制作技艺', cat: 'skill', desc: '赫哲族古老渔猎技艺，加工大马哈鱼皮，缝制服饰、佩饰与生活用品。', img: '/img/yupi.jpg' },
    { title: '鄂伦春族狍皮制作技艺', cat: 'skill', desc: '利用狍兽皮革鞣制，缝制狍皮袍、帽子、背包，北方狩猎民族特色技艺。', img: '/img/paopi.jpg' },
    { title: '桦树皮制作技艺', cat: 'skill', desc: '取天然桦树皮，制作容器、器具、桦树皮小船，轻便防水，寒地特色。', img: '/img/huashupi.jpg' },
    { title: '北大荒版画', cat: 'skill', desc: '诞生于北大荒，以木刻版画展现黑土地垦荒、北国风光。', img: '/img/beidahuang.jpg' },
    { title: '麦秆剪贴', cat: 'skill', desc: '利用麦秆天然光泽，剪贴浮雕式人物、花鸟、山水装饰画。', img: '/img/maigan.jpg' },
    { title: '东北黑陶烧制技艺', cat: 'skill', desc: '黑龙江史前黑陶传承，手工制坯、低温烧制，古朴厚重。', img: '/img/heitao.jpg' },
    // 民俗
    { title: '鄂伦春族古伦木沓节', cat: 'folk-custom', desc: '鄂伦春火神祭祀节日，春季举办，篝火歌舞、赛马射箭，祭祀火神。', img: '/img/mutajie.jpg' },
    { title: '赫哲族乌日贡大会', cat: 'folk-custom', desc: '赫哲族民族盛会，民族歌舞、鱼皮工艺、体育竞技，传承渔猎文化。', img: '/img/wurigong.jpg' },
    { title: '朝鲜族花甲礼', cat: 'folk-custom', desc: '朝鲜族敬老民俗，老人60周岁举办祝寿仪式，感恩长辈。', img: '/img/huajiali.jpg' },
    // 传统音乐
    { title: '杨小班鼓吹乐棚', cat: 'music', desc: '黑龙江民间唢呐吹打乐，世代传承，用于婚丧、节庆民俗活动。', img: '/img/guchui.jpg' },
    { title: '兴安岭森林号子', cat: 'music', desc: '林区伐木工人劳动号子，伴随伐木、抬木劳动传唱，雄浑粗犷。', img: '/img/haozhi.jpg' },
    { title: '赫哲族嫁令阔', cat: 'music', desc: '赫哲族民间小调，旋律轻柔，描绘渔猎生活、江河风光。', img: '/img/jialinkuo.jpg' },
    // 传统舞蹈
    { title: '达斡尔族鲁日格勒舞', cat: 'dance', desc: '达斡尔民间集体舞，模拟动物姿态，妇女自娱舞蹈，节庆欢聚表演。', img: '/img/rurigelewu.jpg' },
    { title: '朝鲜族长鼓舞', cat: 'dance', desc: '挎长鼓边敲边舞，动作飘逸，朝鲜族经典民族舞蹈。', img: '/img/guwu.jpg' },
    // 戏曲曲艺
    { title: '东北二人转', cat: 'opera-quyi', desc: '东北民间说唱戏曲，一丑一旦，载歌载舞，黑土地特色曲艺。', img: '/img/errenzhuan.jpg' },
    { title: '望奎皮影戏', cat: 'opera-quyi', desc: '黑龙江江北派皮影，皮偶镂刻，灯光投影演唱故事。', img: '/img/wangpiyingxi.jpg' },
    { title: '东北大鼓', cat: 'opera-quyi', desc: '流传黑龙江多年，以鼓板伴奏说唱长篇故事，唱腔婉转。', img: '/img/dagu.jpg' },
  ];

  // 核心逻辑：根据搜索词和选中的分类过滤数据
  const filteredData = heritageData.filter(item => {
    const matchCat = activeCategory === 'all' || item.cat === activeCategory;
    const matchSearch = item.title.includes(searchTerm) || item.desc.includes(searchTerm);
    return matchCat && matchSearch;
  });

  return (
    <div>

      {/* 搜索栏 */}
      <div className="search-bar">
        <input 
          type="text" 
          placeholder="搜索非遗内容，如：二人转、伊玛堪、鱼皮衣" 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <section className="list-layout">
        {/* 左侧分类菜单 */}
        <aside className="category-menu">
          <h4>分类</h4>
          {categories.map(cat => (
            <a 
              key={cat.id}
              className={`cat-item ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.name}
            </a >
          ))}
        </aside>

        {/* 右侧非遗卡片网格 */}
        <div className="heritage-grid">
          {filteredData.map((item, index) => (
            <div className="heritage-card" key={index}>
              < img src={item.img} alt={item.title} />
              <div className="heritage-info">
                <h3>{item.title}</h3>
                <p className="heritage-desc">{item.desc}</p >
                <div className="heritage-bottom">
                  {/* 点击咨询按钮跳转到聊天页 */}
                  <Link href="/chat" className="ask-btn">进入AI咨询</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}