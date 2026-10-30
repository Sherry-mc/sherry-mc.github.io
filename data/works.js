/* ==========================================================================
   作品清单 —— 想加作品只改这个文件
   --------------------------------------------------------------------------
   一件作品的写法：
     {
       title:  卡片标题（中文名）
       desc:   一两句话说明
       tags:   标签数组，3~4 个最好看
       year:   年份，卡片右上角
       status: 'live' = 在线可点；'soon' = 占位
       href:   作品地址（status 为 live 时必填，外链请写完整 https://）
       shot:   封面图路径（放在 assets/shots/ 下，建议 16:10、宽 1280）
       alt:    封面图的替代文字（无障碍与慢网都靠它）
       flag:   封面左上角的小标签，不写默认「在线可玩」
     }

   顺序就是页面里的顺序，卡片编号会自动从 01 开始排。
   ========================================================================== */

window.WORKS = [
  {
    title: '池核 POOLCORE',
    desc: '程序化生成的空旷泳池：第一视角 360° 环视，水、瓷砖、回声全是在你的浏览器里当场算出来的。',
    tags: ['Canvas 2D', '逐像素渲染', 'Web Audio'],
    year: '2026',
    status: 'live',
    href: 'https://sherry-mc.github.io/poolcore/',
    shot: 'assets/shots/poolcore.jpg',
    alt: '池核站点首页：空旷的室内泳池与「空旷的水与瓷砖」大标题',
    flag: '在线可玩'
  },
  {
    title: '合成大西瓜 · 果汁杯版',
    desc: '把水果丢进一只会晃的果汁杯里，同种相撞就合并。带物理引擎、会倾倒，还会漏。',
    tags: ['Matter.js', '物理', '单文件'],
    year: '2026',
    status: 'live',
    href: 'https://sherry-mc.github.io/watermelon-game/',
    shot: 'assets/shots/watermelon.jpg',
    alt: '合成大西瓜游戏画面：果汁杯里悬着一颗橘子，下方是「榨汁」按钮',
    flag: '在线可玩'
  },
  {
    title: 'TA 的普通一天',
    desc: '发作性睡病的互动体验：你是 TA，一名普通高中生，从早自习过到晚自习。每个岔口都要做选择，中间还藏着一段 30 秒的「鬼压床」。',
    tags: ['互动叙事', '声音设计', '单页'],
    year: '2026',
    status: 'live',
    href: 'https://sherry-mc.github.io/narcolepsy/',
    shot: 'assets/shots/narcolepsy.jpg',
    alt: '「TA 的普通一天」第三章：数学课上，两个选项「全班安静。」与「你没绷住，笑了」',
    flag: '在线可玩'
  },
  {
    title: '雨中的小海豹',
    desc: '一只趴在雨里的小海豹。纯手写 Canvas 场景：钢笔淡彩的质感、下不完的雨，拖一下还能绕着它转圈看。',
    tags: ['Canvas 2D', '钢笔淡彩', '单文件'],
    year: '2026',
    status: 'live',
    href: 'https://sherry-mc.github.io/rain-seal/',
    shot: 'assets/shots/rain-seal.jpg',
    alt: '雨中小海豹：一只白色小海豹趴在积水的方块上，天上在下雨，底部有一排配色按钮',
    flag: '在线可玩'
  },
  {
    title: '下一个作品',
    desc: '位置先留着。想好做什么就填进来 —— 改 data/works.js，把这段换成真实作品即可。',
    tags: ['待补'],
    year: '—',
    status: 'soon'
  }
];
