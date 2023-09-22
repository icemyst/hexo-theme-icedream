// 适配pjax
function whenDOMReady() {
    if (location.pathname == '/photos/') photos();
}
whenDOMReady()
document.addEventListener("pjax:complete", whenDOMReady)

// 自适应
window.onresize = () => {
    if (location.pathname == '/photos/') waterfall('.gallery-photos');
};

// 函数 以下为23-06-10更新区域
function photos() {
    let url = 'https://memos.nesxc.com' // 修改api
    fetch(url + '/api/v1/memo?openId=77099f6f-86bf-4c45-baa6-d08428c0bf27&creatorId=70&tag=相册').then(res => res.json()).then(data => {
        let html = '',
            imgs = []
        data.forEach(item => {
            let ls = item.content.match(/\!\[.*?\]\(.*?\)/g)
            if (ls) imgs = imgs.concat(ls)
            if (item.resourceList.length) {
                item.resourceList.forEach(t => {
                    if (t.externalLink) imgs.push(`![](${t.externalLink})`)
                    else imgs.push(`![](${url}/o/r/${t.id}/${t.publicId}/${t.filename})`)
                })
            }
        })

        if (imgs) imgs.forEach(item => {
            let img = item.replace(/!\[.*?\]\((.*?)\)/g, '$1'),
                time, title, tat = item.replace(/!\[(.*?)\]\(.*?\)/g, '$1')
            if (tat.indexOf(' ') != -1) {
                time = tat.split(' ')[0]
                title = tat.split(' ')[1]
            } else title = tat

            html += `<div class="gallery-photo"><a href="${img}" data-fancybox="gallery" class="fancybox" data-thumb="${img}"><img class="no-lazyload photo-img" loading='lazy' decoding="async" src="${img}"></a>`
            title ? html += `<span class="photo-title">${title}</span>` : ''
            time ? html += `<span class="photo-time">${time}</span>` : ''
            html += `</div>`
        })

        document.querySelector('.gallery-photos.page').innerHTML = html
        imgStatus.watch('.photo-img', () => { waterfall('.gallery-photos') })
        window.Lately && Lately.init({ target: '.photo-time' })
    }).catch()
};