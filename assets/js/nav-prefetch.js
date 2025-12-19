(function () {
  var seen = new Set();

  function shouldSkip(anchor) {
    var href = anchor.getAttribute("href") || "";
    if (!href || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:")) {
      return true;
    }

    var url;
    try {
      url = new URL(href, window.location.href);
    } catch (_) {
      return true;
    }

    if (url.origin !== window.location.origin) return true;
    if (url.pathname === window.location.pathname) return true;

    return false;
  }

  function prefetch(anchor) {
    if (shouldSkip(anchor)) return;

    var url = new URL(anchor.getAttribute("href"), window.location.href).toString();
    if (seen.has(url)) return;
    seen.add(url);

    var link = document.createElement("link");
    link.rel = "prefetch";
    link.href = url;
    link.as = "document";
    document.head.appendChild(link);
  }

  function handler(event) {
    var anchor = event.target.closest("a[href]");
    if (!anchor) return;
    prefetch(anchor);
  }

  var nav = document.querySelector("nav");
  if (!nav) return;

  nav.addEventListener("mouseenter", handler, true);
  nav.addEventListener("focusin", handler, true);
  nav.addEventListener("touchstart", handler, { passive: true });
})();
