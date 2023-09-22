---
date: 2022-10-20 15:51:42
type: "about"
aside: false
top_img: false
comments: false
---

<div class="poem-wrap">
  <div class="poem-border poem-left"></div>
  <div class="poem-border poem-right"></div>
    <h>念两句诗</h>
    <p id="poem">挑选中...</p>
    <p id="info">
  <script src="https://sdk.jinrishici.com/v2/browser/jinrishici.js" charset="utf-8"></script>
  <script type="text/javascript">
    jinrishici.load(function(result) {
      poem.innerHTML = result.data.content
      info.innerHTML = '【' + result.data.origin.dynasty + '】' + result.data.origin.author + '《' + result.data.origin.title + '》'
      document.getElementById("poem").value(poem);
      document.getElementById("info").value(info);
  });
  </script>
</div>


<div class="entry-content">
  <div id="hello-mashiro" class="popcontainer" style="min-height: 150px; padding: 2px 6px 4px; background-color: rgba(242, 242, 242, 0.5); border-radius: 10px;">
    <center>
    <p>
    </p>
    <h4>
    与&nbsp;<ruby>
    冰梦&nbsp;<rp>
    （</rp>
    <rp>
    ）</rp>
    </ruby>
    通话中：</h4>
    <p>
    </p>
    </center>
    <bot-ui></botui>
  </div>
<script src="../js/jelly.js"></script>
<link href="https://cdn.bootcss.com/botui/0.3.9/botui-theme-default.css" rel="stylesheet">
<link href="https://cdn.bootcss.com/botui/0.3.9/botui.min.css" rel="stylesheet">
</div>


