# Sherry｜筛粒 · 个人网站

手写静态站：一个 HTML、一个 CSS、两个 JS，零外部依赖（系统字体、SVG sprite、本地封面图）。
线上地址：<https://sherry-mc.github.io/>

## 结构

```
index.html          页面骨架（首屏 / 作品 / 关于 / 联系）
css/style.css       全部样式（变量在顶部 :root，改配色只动那里）
js/main.js          渲染作品卡、滚动显现、页头状态
data/works.js       ← 作品清单，加作品只改这个文件
assets/shots/*.jpg  作品封面（16:10，宽 1280 最好）
```

## 加一件作品

1. 把封面图放进 `assets/shots/`（建议 1280×800）。
2. 在 `data/works.js` 的数组里加一项：

```js
{
  title: '作品名',
  desc: '一两句话说明',
  tags: ['标签1', '标签2'],
  year: '2026',
  status: 'live',                       // live = 在线可点，soon = 占位卡
  href: 'https://example.com/',         // 外链写完整地址
  shot: 'assets/shots/xxx.jpg',
  alt: '封面图的文字描述',
  flag: '在线可玩'                       // 可选，封面左上角小标签
}
```

编号（01 / 02 …）按数组顺序自动生成，不用手写。

## 本地预览

```sh
cd ~/Desktop/portfolio
python3 -m http.server 8083
# 打开 http://localhost:8083
```

直接双击 `index.html` 也能看，只是 `file://` 下个别浏览器会限制某些特性。

## 上线

推到 `main` 即自动发布（仓库 Settings → Pages → Deploy from a branch → main / (root)）：

```sh
git add -A && git commit -m "更新作品" && git push
```

发布大约 30~60 秒生效。**改了 CSS / JS 记得同时改 `index.html` 里的 `?v=`**
（现在都是 `?v=20261029a`），否则浏览器会继续用缓存里的旧文件。

## 待改

- 联系邮箱：`3981292753@qq.com`（改的话在 `index.html` 里搜 `mailto:`）。
- 自我介绍：见 `index.html` 首屏 `.lede` 与「关于」第一段。
