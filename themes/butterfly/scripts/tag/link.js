const urlFor = require("hexo-util").url_for.bind(hexo);
function link(args) {
  args = args.join(" ").split(",");
  let title = args[0];
  let sitename = args[1];
  let link = args[2];
  let imgUrl = args[3] || "";
  let InsideStation = false;

  link = link.trim();
  imgUrl = imgUrl.trim();

  // 获取网页favicon
  if (!imgUrl) {
    let urlNoProtocol = link.replace(/^https?\:\/\//i, "");
    imgUrl = "https://api.iowen.cn/favicon/" + urlNoProtocol + ".png";
  }

  if (imgUrl == "true") {
    InsideStation = true;
  }

  return `<div class='btf-tag-link'><a class="tag-Link" target="_blank" href="${urlFor(link)}">
    <div class="tag-link-tips">${InsideStation ? "站内地址" : "引用站外地址"}</div>
    <div class="tag-link-bottom">
        <div class="tag-link-left" style="background-image: url(${InsideStation ? "/img/512.png" : imgUrl});"></div>
        <div class="tag-link-right">
            <div class="tag-link-title">${title}</div>
            <div class="tag-link-sitename">${sitename}</div>
        </div>
        <i class="fas fa-angle-right"></i>
    </div>
    </a></div>`;
}

hexo.extend.tag.register("link", link, { ends: false });
