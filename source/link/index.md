---
title: 友链
date: 2023-04-18 18:20:47
type: 'link'
aside: false
---

<h2>友链链接申请</h2>
<div>很高兴能和非常多的朋友们交流，如果你也想加入友链，可以在下方留言，我会在不忙的时候统一添加。</div>

## 我的友链

```yaml
- name: 冰梦
  link: https://bingmeng158.github.io
  avatar: https://bingmeng158.github.io/img/about.webp
  descr: 到不了的都叫远方，回不去的都叫故乡。
  siteshot:
```

{% folding ✅ 加入本站友链须知 %}

## 本站添加的友链要求

1. 能够正常访问
2. 含本站友链
3. 网站类型为<b>个人博客</b>

请（<a href="{% post_path 'link' %}#post-comment">点击这里快速添加</a>） 站点信息申请友情链接，申请后在我不忙的时候会统一添加，即使不通过也会给予邮件回复。

## 你提交的信息有可能被修改

如果有修改，我会将修改内容进行告知

1. 为了友链相关页面和组件的统一性和美观性，可能会对你的昵称进行缩短处理，例如昵称包含`博客`、`XX 的 XX`等内容或形式将被简化。
2. 为了图片加载速度和内容安全性考虑，头像实际展示图片均使用博客自己图床，所以无法收到贵站自己的头像更新，如果有迫切的更改信息需求，请在本页的评论中添加。
3. 为了保证鱼塘能够正确抓取文章，所有的友链链接要求为博客主页链接，而不是个人主页链接。

## 提交友链信息

为了避免图床问题，建议你将头像存储到贵站图床。

1. 我的名称: `冰梦`
2. 网站地址: `bingmeng158.github.io`
3. 描述: `到不了的都叫远方，回不去的都叫故乡。`
4. 头像: `bingmeng158.github.io/img/about.webp`

参照以下格式留言 📋 即可（示例如下）。

```yaml
昵称：冰梦
网站地址：https://bingmeng158.github.io
头像图片url：https://bingmeng158.github.io/img/about.webp
描述：到不了的都叫远方，回不去的都叫故乡。
站点截图:(可选)：
```

> 站点截图建议自己提供，尺寸尽量不要大于 300*300。
> 未提供站点预览图的，本站会根据贵站链接调用以下 API 自动获取贵站的站点截图。
> 对于做了反扒措施的站点，API 获取的将是反扒页面，望知悉。

站点截图建议使用以下 **API** 获取以匹配本站样式。

```markdown
https://image.thum.io/get/width/400/crop/800/allowJPG/wait/20/https://<你的域名>
```

{% endfolding %}

<p style="padding:0 0 0 .8rem">
    请<strong>勾选</strong>你符合的条件：
</p>
<div id="friendlink_checkboxs" style="padding:0 0 0 1.6rem">
    <p>
        <label class="checkbox">
            <input type="checkbox" id="checkbox1" onclick="checkForm()">
            我已添加 <b>冰刻无痕</b> 博客的友情链接
        </label>
    </p>
    <p>
        <label class="checkbox">
            <input type="checkbox" id="checkbox2" onclick="checkForm()">
            我的链接主体为 <b>个人</b>，网站类型为<b>博客</b>
        </label>
    </p>
    <p>
        <label class="checkbox">
            <input type="checkbox" id="checkbox3" onclick="checkForm()">我的网站现在可以在中国大陆区域正常访问
        </label>
    </p>
    <p>
        <label class="checkbox">
            <input type="checkbox" id="checkbox4" onclick="checkForm()">网站内容符合中国大陆法律法规
        </label>
    </p>
    <p>
        <label class="checkbox">
            <input type="checkbox" id="checkbox5" onclick="checkForm()">我的网站可以在1分钟内加载完成首屏
        </label>
    </p>
</div>

<script>
    var twikooSubmit = document.getElementsByClassName("tk-submit")[0];
    if (twikooSubmit) {
        twikooSubmit.style.opacity = "0";
    }
    function checkForm() {
        var checkbox1 = document.getElementById("checkbox1");
        var checkbox2 = document.getElementById("checkbox2");
        var checkbox3 = document.getElementById("checkbox3");
        var checkbox4 = document.getElementById("checkbox4");
        var checkbox5 = document.getElementById("checkbox5");
        var twikooSubmit = document.getElementsByClassName("tk-submit")[0];
        if (checkbox1.checked && checkbox2.checked && checkbox3.checked && checkbox4.checked && checkbox5.checked) {
            twikooSubmit.style.opacity = "1";
            twikooSubmit.style.height = "auto";
            twikooSubmit.style.overflow = "auto";
            var input = document.getElementsByClassName('el-textarea__inner')[0];
            let evt = document.createEvent('HTMLEvents');
            evt.initEvent('input', true, true);
            input.value = '昵称（请勿包含博客等字样）：\n网站地址（要求博客地址，请勿提交个人主页）：\n头像图片url（请提供尽可能清晰的图片，我会上传到我自己的图床）：\n描述：\n';
            input.dispatchEvent(evt);
            input.focus();
            input.setSelectionRange(-1, -1);
        } else {
            twikooSubmit.style.opacity = "0";
            twikooSubmit.style.height = "0";
            twikooSubmit.style.overflow = "hidden";
        }
    }
</script>

<style>
    .tk-comments > .tk-submit {
        opacity: 0;
        height: 0;
        transition: opacity .5s, height .5s;
        overflow: hidden;
    }
</style>
