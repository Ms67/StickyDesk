/* StickyDesk 官网交互：导航吸顶阴影 + 滚动进场 */
(function () {
  "use strict";

  // 导航滚过一屏后加底部分隔线
  var nav = document.getElementById("nav");
  var onScroll = function () {
    if (!nav) return;
    nav.classList.toggle("is-stuck", window.scrollY > 8);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // 滚动进场：优先用 IntersectionObserver，不支持的浏览器直接全部显示
  var items = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    for (var i = 0; i < items.length; i++) items[i].classList.add("in");
    return;
  }

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (!e.isIntersecting) return;
      // 同屏内错开一点，滚下来时像逐个落位
      var el = e.target;
      var delay = el.dataset.delay ? parseInt(el.dataset.delay, 10) : 0;
      window.setTimeout(function () { el.classList.add("in"); }, delay);
      io.unobserve(el);
    });
  }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });

  for (var j = 0; j < items.length; j++) {
    // 同一组卡片按顺序给 60ms 阶梯延迟，避免整块同时弹出
    if (items[j].classList.contains("card")) {
      var sibs = items[j].parentNode.querySelectorAll(".card");
      var idx = Array.prototype.indexOf.call(sibs, items[j]);
      items[j].dataset.delay = String((idx % 4) * 70);
    }
    io.observe(items[j]);
  }
})();
