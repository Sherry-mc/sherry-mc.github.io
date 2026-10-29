/* ==========================================================================
   站点逻辑 —— 渲染作品卡、滚动显现、页头状态
   全部原生 JS，没有依赖；核心只有「把 WORKS 变成 DOM」一件事。
   ========================================================================== */

(function () {
  'use strict';

  var doc = document;
  var root = window;
  var reduce = root.matchMedia && root.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function el(tag, cls) {
    var n = doc.createElement(tag);
    if (cls) n.className = cls;
    return n;
  }

  function svgIcon(id) {
    var svg = doc.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('class', 'ico');
    svg.setAttribute('aria-hidden', 'true');
    var use = doc.createElementNS('http://www.w3.org/2000/svg', 'use');
    use.setAttribute('href', '#' + id);
    svg.appendChild(use);
    return svg;
  }

  function pad2(n) {
    return (n < 10 ? '0' : '') + n;
  }

  /* ---------------- 作品卡 ---------------- */

  function liveCard(work, index) {
    var card = el('article', 'card reveal');

    var media = el('div', 'card-media');
    var img = el('img');
    img.src = work.shot;
    img.alt = work.alt || work.title;
    img.loading = 'lazy';
    img.decoding = 'async';
    img.width = 1280;
    img.height = 800;
    media.appendChild(img);

    var flag = el('span', 'card-flag');
    flag.appendChild(el('i'));
    flag.appendChild(doc.createTextNode(work.flag || '在线可玩'));
    media.appendChild(flag);
    card.appendChild(media);

    var body = el('div', 'card-body');

    var top = el('div', 'card-top');
    top.appendChild(el('span')).textContent = pad2(index + 1);
    top.appendChild(el('span')).textContent = work.year || '';
    body.appendChild(top);

    var h3 = el('h3', 'card-title');
    h3.appendChild(doc.createTextNode(work.title));
    h3.appendChild(svgIcon('i-arrow'));
    body.appendChild(h3);

    var desc = el('p', 'card-desc');
    desc.textContent = work.desc || '';
    body.appendChild(desc);

    if (work.tags && work.tags.length) {
      var ul = el('ul', 'card-tags');
      work.tags.forEach(function (t) {
        ul.appendChild(el('li')).textContent = t;
      });
      body.appendChild(ul);
    }
    card.appendChild(body);

    /* 铺满整张卡的链接：一个 tab 停靠点，读屏也能读到「打开某某」 */
    var hit = el('a', 'card-hit');
    hit.href = work.href;
    hit.target = '_blank';
    hit.rel = 'noopener noreferrer';
    hit.setAttribute('aria-label', '打开 ' + work.title + '（新窗口）');
    card.appendChild(hit);

    return card;
  }

  function soonCard(work, index) {
    var card = el('article', 'card is-soon reveal');

    var media = el('div', 'card-media');
    var mark = el('div', 'soon-mark');
    mark.appendChild(el('span', 'plus')).textContent = '+';
    mark.appendChild(doc.createTextNode('留一个位置'));
    media.appendChild(mark);
    card.appendChild(media);

    var body = el('div', 'card-body');

    var top = el('div', 'card-top');
    top.appendChild(el('span')).textContent = pad2(index + 1);
    top.appendChild(el('span')).textContent = '待补';
    body.appendChild(top);

    var h3 = el('h3', 'card-title');
    h3.textContent = work.title || '下一个作品';
    body.appendChild(h3);

    var desc = el('p', 'card-desc');
    desc.textContent = work.desc || '';
    body.appendChild(desc);

    card.appendChild(body);
    return card;
  }

  function renderWorks() {
    var grid = doc.getElementById('workGrid');
    var list = root.WORKS || [];
    if (!grid) return;
    var frag = doc.createDocumentFragment();
    list.forEach(function (work, i) {
      frag.appendChild(work.status === 'live' ? liveCard(work, i) : soonCard(work, i));
    });
    grid.appendChild(frag);
  }

  /* ---------------- 滚动显现 ---------------- */

  function initReveal() {
    var items = doc.querySelectorAll('.reveal');
    if (reduce || !root.IntersectionObserver) {
      Array.prototype.forEach.call(items, function (n) { n.classList.add('is-in'); });
      return;
    }
    var io = new root.IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        var n = e.target;
        /* 同一批出现时按顺序错开一点，像洗牌推上来 */
        var sibs = Array.prototype.slice.call(n.parentNode.children);
        var i = sibs.indexOf(n);
        n.style.transitionDelay = Math.min(i, 6) * 70 + 'ms';
        n.classList.add('is-in');
        io.unobserve(n);
      });
    }, { rootMargin: '0px 0px -12% 0px', threshold: 0.12 });
    Array.prototype.forEach.call(items, function (n) { io.observe(n); });
  }

  /* ---------------- 页头：滚过首屏才加底色 ---------------- */

  function initHead() {
    var head = doc.getElementById('siteHead');
    if (!head) return;
    var on = false;
    function sync() {
      var y = root.pageYOffset || doc.documentElement.scrollTop || 0;
      var next = y > 10;
      if (next === on) return;
      on = next;
      head.classList.toggle('is-stuck', on);
    }
    root.addEventListener('scroll', sync, { passive: true });
    sync();
  }

  function initYear() {
    var y = doc.getElementById('year');
    if (y) y.textContent = String(new Date().getFullYear());
  }

  renderWorks();
  initReveal();
  initHead();
  initYear();
})();
