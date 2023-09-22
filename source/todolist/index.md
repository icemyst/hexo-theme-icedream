---
date: 2023-08-25 19:07:08
aside: false
comments: false
type: todolist
---

<style>
/* 页面初始化 */
div#page {
    background: none;
    border: 0;
    padding: 0;
}

#article-container ul > li:not(.tab)::before {
    display: none;
}

#article-container ul > li:not(.tab) {
  padding: 0;
}

/* 页面初始化结束 */

.list_item {
    display: inline-block;
    width: calc(50% - .4rem);
    background: #fae4df;
    border-radius: 8px;
    padding: 10px 1rem 1.2rem;
    border: 2px dashed #f7a796;
    margin-right: 1rem;
    margin-bottom: 1rem;
}

[data-theme=dark] .list_item {
  background: #242424;
  border: 2px dashed #51908b;
}

.list_item h3 {
    margin: 0;
    border-bottom: var(--todo-border);
}
.list_item ul {
    font-size: 17px;
    padding: 0 !important;
    margin: 0;
}
 .list_item li{
    margin: 0 !important;
    border-bottom: var(--todo-border);
 }
.list_item li::marker {
  content: none;
}
li.achieve {
    opacity: .8;
    text-decoration: line-through;
}
@media screen and (max-width: 900px) {
  div#todolist {
    margin: 1rem 5px 0;
  }
}
@media screen and (max-width: 768px) {
  .list_item{
    width: 100%;
  }
}
</style>

<div class="author-content author-content-item album single" style="background: url(https://pic.imgdb.cn/item/64fc80bd661c6c8e5403c5d9.webp) top / cover no-repeat;">
  <div class="card-content">
    <div class="author-content-item-tips">清单</div>
    <span class="author-content-item-title">我的清单，收藏各种各样的网站</span>
    <div class="content-bottom">
      <div class="tips">想要记录的事还有很多，想要做的事源源不断</div>
    </div>
    <div class="banner-button-group">
      <a href="https://memos.nesxc.com" class="banner-button">
          <i class="fas fa-arrow-circle-right"></i>
          <span class="banner-button-text">清单</span>
        </a>
    </div>
  </div>
</div>

<div id="todolist-main"></div>

<script>
// 瀑布流函数，不用管
function waterfall(t){function e(t,e){var n=window.getComputedStyle(e);return parseFloat(n["margin"+t])||0}function n(t){return t+"px"}function r(t){return parseFloat(t.style.left)}function o(t){return t.clientWidth}function l(t){return function(t){return parseFloat(t.style.top)}(t)+function(t){return t.clientHeight}(t)+e("Bottom",t)}function i(t){return r(t)+o(t)+e("Right",t)}function u(t){t=t.sort((function(t,e){return l(t)===l(e)?r(e)-r(t):l(e)-l(t)}))}function a(e){o(t)!=h&&(e.target.removeEventListener(e.type,arguments.callee),waterfall(t))}"string"==typeof t&&(t=document.querySelector(t));var s=[].map.call(t.children,(function(t){return t.style.position="absolute",t}));t.style.position="relative";var f=[];s.length&&(s[0].style.top="0px",s[0].style.left=n(e("Left",s[0])),f.push(s[0]));for(var p=1;p<s.length;p++){var c=s[p-1],y=s[p];if(!(i(c)+o(y)<=o(t)))break;y.style.top=c.style.top,y.style.left=n(i(c)+e("Left",y)),f.push(y)}for(;p<s.length;p++){u(f);y=s[p];var d=f.pop();y.style.top=n(l(d)+e("Top",y)),y.style.left=n(r(d)),f.push(y)}u(f);var v=f[0];t.style.height=n(l(v));var h=o(t);window.addEventListener?window.addEventListener("resize",a):document.body.onresize=a}

// 清单函数
fetch('https://memos.nesxc.com/api/v1/memo?openId=77099f6f-86bf-4c45-baa6-d08428c0bf27&creatorId=70&tag=清单')
  .then(res => res.json())
  .then(data => {
    // 获取并处理数据
    data = data;
    let box = document.getElementById('todolist-main');
    data.forEach(item => {
      // 处理数据
      let content = item.content,
        title = content.match(/\[(.*?)\]/g)[0].replace(/\[(.*?)\]/,'$1');
        
      // 去掉多余内容，替换清单内容，并添加链接的处理
      content = content.replace(/#.*\s/g, '')
                       .replace(/(-\s\[\s\]\s)(.*)/g, `<li class="todolist-li"><i class="fa-regular fa-circle"></i><span>$2</span></li>`)
                       .replace(/(-\s\[x\]\s)(.*)/g, `<li class="todolist-li"><i class="fa-regular fa-circle-check"></i><span>$2</span></li>`)
                       .replace(/\[(.*?)\]\((.*?)\)/g, '<a target="_blank" href="$2">$1</a>');
                       
      // 渲染数据
      let div = document.createElement('div');
      div.className = 'list_item';
      div.innerHTML = `<h3>${title}</h3><ul>${content}</ul>`;
      box.appendChild(div);
    });
    waterfall('#todolist-main');
  })
  .catch(error => {
    console.error(error);
  });
</script>