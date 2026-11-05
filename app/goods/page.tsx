import Link from 'next/link';

export default function GoodsPage() {
  const products = [
    { title: '伊玛堪绘本', desc: '非遗故事绘本，民族英雄史诗', img: '/img01/yimakan_huiben.jpg' },
    { title: '鱼皮画摆件', desc: '赫哲族鱼皮画，手工艺术品', img: '/img01/yupihua_baijian.jpg' },
    { title: '桦树皮手盒', desc: '鄂温克族桦树皮技艺', img: '/img01/huashupi_shouhe.jpg' },
    { title: '赫哲族纹样丝巾', desc: '鱼纹、云纹民族纹样', img: '/img01/hezhezu_wenyangsijin.jpg' },
    { title: '青牛葫芦烫画挂件', desc: '五常葫芦火绘，小巧国风挂饰', img: '/img01/qingniuhulu_guajian.jpg' },
    { title: '狍皮纹样金属书签', desc: '复刻鄂伦春传统山林纹样', img: '/img01/baopiwen_jinshushuqian.jpg' },
    { title: '望奎皮影装饰摆件', desc: '皮影人物复刻，东北非遗特色', img: '/img01/wangkui_piyin.jpg' },
    { title: '冰雕主题水晶摆件', desc: '复刻哈尔滨冰灯造型', img: '/img01/bingdiao_shuijingbaijian.jpg' },
    { title: '二人转脸谱手办', desc: '提取东北二人转经典扮相', img: '/img01/errenzhuanlianpu_shouban.jpg' },
    { title: '迷你四胡摆件', desc: '达斡尔乌钦伴奏乐器缩小版', img: '/img01/minisihu_baijian.jpg' },
    { title: '鲁日格勒纹样帆布包', desc: '达斡尔舞蹈纹样文创包袋', img: '/img01/lurigrlewenyang_fanbudai.jpg' },
    { title: '萨满民俗明信片套组', desc: '黑龙江民族民俗插画合集', img: '/img01/saman_minzu_mingxinpian.jpg' },
  ];

  return (
    <div>
      {}

      {/* 顶部大标题 */}
      <section className="cultural-hero">
        <h1>非遗文创好物</h1>
        <p>把黑龙江地域文化带回家</p >
      </section>

      {/* 商品网格 */}
      <section className="product-grid">
        {products.map((item, index) => (
          <div className="product-card" key={index}>
            < img src={item.img} alt={item.title} />
            <div className="product-info">
              <h3>{item.title}</h3>
              <p>{item.desc}</p >
              {/* 点击可以跳转或弹窗，这里放个占位链接 */}
              <a href=" ">查看详情</a >
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}