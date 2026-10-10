// Light/dark toggle. Follows the system setting until the reader
// picks one, then remembers that choice in this browser.
(function () {
  var root = document.documentElement;
  var button = document.querySelector(".theme-toggle");
  if (!button) return;

  function current() {
    var set = root.getAttribute("data-theme");
    if (set) return set;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  function label() {
    var next = current() === "dark" ? "light" : "dark";
    button.setAttribute("aria-label", "Switch to " + next + " theme");
    button.setAttribute("title", "Switch to " + next + " theme");
  }

  button.addEventListener("click", function () {
    var next = current() === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try { localStorage.setItem("theme", next); } catch (e) {}
    label();
  });

  label();
})();
