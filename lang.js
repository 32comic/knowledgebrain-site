(function () {
  var supported = ["en", "zh-Hans", "zh-Hant", "ja"];

  function normalize(code) {
    if (!code) return "en";
    var c = code.toLowerCase().replace("_", "-");
    if (c === "zh-hans" || c === "zh-cn" || c === "zh-sg" || c === "zh") return "zh-Hans";
    if (c === "zh-hant" || c === "zh-tw" || c === "zh-hk" || c === "zh-mo") return "zh-Hant";
    if (c.indexOf("ja") === 0) return "ja";
    if (c.indexOf("en") === 0) return "en";
    return "en";
  }

  function current() {
    var q = new URLSearchParams(location.search).get("lang");
    if (q && supported.indexOf(q) !== -1) return q;
    try {
      var saved = localStorage.getItem("kb-lang");
      if (saved && supported.indexOf(saved) !== -1) return saved;
    } catch (e) {}
    return normalize(navigator.language || (navigator.languages && navigator.languages[0]));
  }

  function apply(lang) {
    document.documentElement.lang = lang === "zh-Hans" ? "zh-CN" : lang === "zh-Hant" ? "zh-TW" : lang;
    document.querySelectorAll("[data-lang-panel]").forEach(function (el) {
      el.hidden = el.getAttribute("data-lang-panel") !== lang;
    });
    document.querySelectorAll("[data-set-lang]").forEach(function (btn) {
      btn.setAttribute("aria-pressed", btn.getAttribute("data-set-lang") === lang ? "true" : "false");
    });
    try { localStorage.setItem("kb-lang", lang); } catch (e) {}
    var url = new URL(location.href);
    url.searchParams.set("lang", lang);
    history.replaceState(null, "", url);
  }

  document.querySelectorAll("[data-set-lang]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      apply(btn.getAttribute("data-set-lang"));
    });
  });

  apply(current());
})();
