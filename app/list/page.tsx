'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function ListPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  // 分类菜单
  const categories = [
    { id: 'all', name: '全部' },
    { id: 'folk-lit', name: '民间文学' },
    { id: 'music', name: '传统音乐' },
    { id: 'dance', name: '传统舞蹈' },
    { id: 'opera', name: '传统戏剧' },
    { id: 'quyi', name: '曲艺' },
    { id: 'skill', name: '传统技艺' },
    { id: 'art', name: '传统美术' },
    { id: 'custom', name: '民俗' },
  ];

  const heritageData = [
    { id: 1, title: '满族说部', cat: 'folk-lit', desc: '满族先民口耳相传的长篇说唱叙事文学。', img: '/ich/1.jpg' },
    { id: 2, title: '蒙古族四胡音乐', cat: 'music', desc: '蒙古族特色拉弦乐器，曲调辽阔深沉。', img: '/ich/2.jpg' },
    { id: 3, title: '唢呐艺术', cat: 'music', desc: '杨小班鼓吹乐棚，传统婚丧民俗中的吹打乐。', img: '/ich/3.jpg' },
    { id: 4, title: '森林号子', cat: 'music', desc: '大小兴安岭林区伐木、运木时统一节奏的劳动号子。', img: '/ich/4.jpg' },
    { id: 5, title: '鄂伦春族赞达仁', cat: 'music', desc: '鄂伦春族歌唱艺术主体，旋律高亢自由。', img: '/ich/5.jpg' },
    { id: 6, title: '达斡尔族民歌', cat: 'music', desc: '罕伯岱村原生态民歌，题材覆盖劳动、爱情。', img: '/ich/6.jpg' },
    { id: 7, title: '赫哲族嫁令阔', cat: 'music', desc: '赫哲族民歌总称，曲调婉转清新。', img: '/ich/7.jpg' },
    { id: 8, title: '武家鼓吹乐棚', cat: 'music', desc: '林甸武氏家族传承的民间鼓乐班。', img: '/ich/8.jpg' },
    { id: 9, title: '达斡尔族鲁日格勒舞', cat: 'dance', desc: '达斡尔族传统集体歌舞，模拟鸟兽与劳动动作。', img: '/ich/9.jpg' },
    { id: 10, title: '黑龙江评剧', cat: 'opera', desc: '结合黑土地人文风貌，唱腔高亢开阔。', img: '/ich/10.jpg' },
    { id: 11, title: '望奎县皮影戏', cat: 'opera', desc: '江北派皮影代表，雕工细腻，唱腔苍凉。', img: '/ich/11.jpg' },
    { id: 12, title: '龙江皮影戏', cat: 'opera', desc: '江南派皮影，造型夸张活泼，注重特技。', img: '/ich/12.jpg' },
    { id: 13, title: '东北大鼓', cat: 'quyi', desc: '以三弦伴奏，长篇叙事，长于长篇评书式故事。', img: '/ich/13.jpg' },
    { id: 14, title: '五常东北大鼓', cat: 'quyi', desc: '下江分支，唱腔柔和，叙事细腻。', img: '/ich/14.jpg' },
    { id: 15, title: '海伦二人转', cat: 'quyi', desc: '北派二人转代表，讲究唱、说、做、舞、绝。', img: '/ich/15.jpg' },
    { id: 16, title: '绥棱二人转', cat: 'quyi', desc: '保留大量传统老曲牌，舞台表演克制内敛。', img: '/ich/16.jpg' },
    { id: 17, title: '达斡尔族乌钦', cat: 'quyi', desc: '达斡尔族说书体，艺人持四弦胡自弹自唱。', img: '/ich/17.jpg' },
    { id: 18, title: '赫哲族伊玛堪', cat: 'quyi', desc: '世界级非遗，徒口说唱史诗，无乐器伴奏。', img: '/ich/18.jpg' },
    { id: 19, title: '鄂伦春族摩苏昆', cat: 'quyi', desc: '说唱结合，记录山林狩猎生活与部族往事。', img: '/ich/19.jpg' },
    { id: 20, title: '赵魁良戏法', cat: 'skill', desc: '中国古典手彩戏法，注重稳、准、快。', img: '/ich/20.jpg' },
    { id: 21, title: '方正剪纸', cat: 'art', desc: '构图饱满，造型稚拙，擅长东北乡土题材。', img: '/ich/21.jpg' },
    { id: 22, title: '海伦剪纸', cat: 'art', desc: '线条刚劲，擅长大场面叙事，黑土农耕题材。', img: '/ich/22.jpg' },
    { id: 23, title: '麦秆剪贴', cat: 'art', desc: '利用麦秆天然光泽，分层粘贴，半浮雕技法。', img: '/ich/23.jpg' },
    { id: 24, title: '渤海靺鞨绣', cat: 'art', desc: '满族刺绣，针法多变，配色浓烈厚重。', img: '/ich/24.jpg' },
    { id: 25, title: '克东满族刺绣', cat: 'art', desc: '针脚朴实密实，多用于荷包、枕头顶。', img: '/ich/25.jpg' },
    { id: 26, title: '宁安满族刺绣', cat: 'art', desc: '纹样造型夸张变形，充满山野气息。', img: '/ich/26.jpg' },
    { id: 27, title: '饶河桦树皮制作', cat: 'skill', desc: '折叠、咬合、缝制成型，不用铁钉，防水轻便。', img: '/ich/27.jpg' },
    { id: 28, title: '桦树皮船制作', cat: 'skill', desc: '鄂伦春族传统水上交通工具，全船不用铁钉。', img: '/ich/28.jpg' },
    { id: 29, title: '赫哲族鱼皮制作', cat: 'skill', desc: '鞣制大马哈鱼皮，缝制服饰与工艺品。', img: '/ich/29.jpg' },
    { id: 30, title: '鄂伦春族狍皮制作', cat: 'skill', desc: '兽皮发酵鞣制，防寒耐用，狩猎文化核心。', img: '/ich/30.jpg' },
    { id: 31, title: '老汤精配制', cat: 'skill', desc: '传统复合调味料，文火熬煮，浓缩熟成。', img: '/ich/31.jpg' },
    { id: 32, title: '七台河刀剑锻制', cat: 'skill', desc: '折叠锻打，淬火控制硬度，手工打磨开刃。', img: '/ich/32.jpg' },
    { id: 33, title: '枇杷露传统制剂', cat: 'skill', desc: '传统膏滋炮制技艺，遵循古法配伍。', img: '/ich/33.jpg' },
    { id: 34, title: '老王麻子膏药', cat: 'skill', desc: '传统外用膏药，丹化、去火毒，百年老字号。', img: '/ich/34.jpg' },
    { id: 35, title: '五大连池药泉会', cat: 'custom', desc: '又称圣水节，多民族共同参与，祭泉祈福。', img: '/ich/35.jpg' },
    { id: 36, title: '鄂伦春族古伦木沓节', cat: 'custom', desc: '祭祀火神的节日，点燃篝火，敬献祭品。', img: '/ich/36.jpg' },
    { id: 37, title: '瑷珲上元节', cat: 'custom', desc: '包含挂灯、走百病、扭秧歌，多民族共庆。', img: '/ich/37.jpg' },
    { id: 38, title: '朝鲜族花甲礼', cat: 'custom', desc: '为60岁长者举行的祝寿大礼，庄重严谨。', img: '/ich/38.jpg' },
    { id: 39, title: '鄂温克族瑟宾节', cat: 'custom', desc: '意为欢乐祥和，有赛马、摔跤、抢枢等活动。', img: '/ich/39.jpg' },
    { id: 40, title: '达斡尔族传统婚俗', cat: 'custom', desc: '分提亲、定亲、过礼、迎亲等完整仪程。', img: '/ich/40.jpg' },
    { id: 41, title: '赫哲族传统婚俗', cat: 'custom', desc: '日出迎亲，拜天地、敬献鱼宴，渔猎特色。', img: '/ich/41.jpg' },
    { id: 42, title: '赫哲族乌日贡大会', cat: 'custom', desc: '集说唱、歌舞、渔猎竞技于一体的民族盛会。', img: '/ich/42.jpg' },
  ];

  // 筛选逻辑
  const filteredData = heritageData.filter(item => {
    const matchCat = activeCategory === 'all' || item.cat === activeCategory;
    const matchSearch = item.title.includes(searchTerm) || item.desc.includes(searchTerm);
    return matchCat && matchSearch;
  });

  return (
    <div>

      <div className="search-bar">
        <input 
          type="text" 
          placeholder="搜索非遗内容，如：二人转、伊玛堪、鱼皮衣" 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <section className="list-layout">
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

               
                <div className="heritage-grid" style={{ alignItems: 'start' }}>
          {filteredData.map((item) => (
            <div className="heritage-card" key={item.id} style={{ height: 'fit-content' }}>
              <img src={item.img} alt={item.title} />
              <div className="heritage-info">
                <h3>{item.title}</h3>
                <p className="heritage-desc">{item.desc}</p>
                <div className="heritage-bottom">
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