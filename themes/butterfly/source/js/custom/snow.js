var stop, staticx; var img = new Image(); img.src = "data:image/png;base64,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"; function Sakura(x, y, s, r, fn) { this.x = x; this.y = y; this.s = s; this.r = r; this.fn = fn; }
Sakura.prototype.draw = function (cxt) {
    cxt.save(); var xc = 40 * this.s / 4; cxt.translate(this.x, this.y); cxt.rotate(this.r); cxt.drawImage(img, 0, 0, 40 * this.s, 40 * this.s)
    cxt.restore();
}
Sakura.prototype.update = function () { this.x = this.fn.x(this.x, this.y); this.y = this.fn.y(this.y, this.y); this.r = this.fn.r(this.r); if (this.x > window.innerWidth || this.x < 0 || this.y > window.innerHeight || this.y < 0) { this.r = getRandom('fnr'); if (Math.random() > 0.4) { this.x = getRandom('x'); this.y = 0; this.s = getRandom('s'); this.r = getRandom('r'); } else { this.x = window.innerWidth; this.y = getRandom('y'); this.s = getRandom('s'); this.r = getRandom('r'); } } }
SakuraList = function () { this.list = []; }
SakuraList.prototype.push = function (sakura) { this.list.push(sakura); }
SakuraList.prototype.update = function () { for (var i = 0, len = this.list.length; i < len; i++) { this.list[i].update(); } }
SakuraList.prototype.draw = function (cxt) { for (var i = 0, len = this.list.length; i < len; i++) { this.list[i].draw(cxt); } }
SakuraList.prototype.get = function (i) { return this.list[i]; }
SakuraList.prototype.size = function () { return this.list.length; }
function getRandom(option) {
    var ret, random; switch (option) {
        case 'x': ret = Math.random() * window.innerWidth; break; case 'y': ret = Math.random() * window.innerHeight; break; case 's': ret = Math.random(); break; case 'r': ret = Math.random() * 6; break; case 'fnx': random = -0.5 + Math.random() * 1; ret = function (x, y) { return x + 0.5 * random - 1.7; }; break; case 'fny': random = 1.5 + Math.random() * 0.7
            ret = function (x, y) { return y + random; }; break; case 'fnr': random = Math.random() * 0.03; ret = function (r) { return r + random; }; break;
    }
    return ret;
}
function startSakura() {
    requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame; var canvas = document.createElement('canvas'), cxt; staticx = true; canvas.height = window.innerHeight; canvas.width = window.innerWidth; canvas.setAttribute('style', 'position: fixed;left: 0;top: 0;pointer-events: none;'); canvas.setAttribute('id', 'canvas_sakura'); document.getElementsByTagName('body')[0].appendChild(canvas); cxt = canvas.getContext('2d'); var sakuraList = new SakuraList(); for (var i = 0; i < 50; i++) { var sakura, randomX, randomY, randomS, randomR, randomFnx, randomFny; randomX = getRandom('x'); randomY = getRandom('y'); randomR = getRandom('r'); randomS = getRandom('s'); randomFnx = getRandom('fnx'); randomFny = getRandom('fny'); randomFnR = getRandom('fnr'); sakura = new Sakura(randomX, randomY, randomS, randomR, { x: randomFnx, y: randomFny, r: randomFnR }); sakura.draw(cxt); sakuraList.push(sakura); }
    stop = requestAnimationFrame(function () { cxt.clearRect(0, 0, canvas.width, canvas.height); sakuraList.update(); sakuraList.draw(cxt); stop = requestAnimationFrame(arguments.callee); })
}
window.onresize = function () { var canvasSnow = document.getElementById('canvas_snow'); }
img.onload = function () { startSakura(); }
function stopp() { if (staticx) { var child = document.getElementById("canvas_sakura"); child.parentNode.removeChild(child); window.cancelAnimationFrame(stop); staticx = false; } else { startSakura(); } }