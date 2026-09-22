(function applyAppBrand() {
  const path = window.location.pathname;
  const isFieldWas = path.includes("/fieldwas/");
  const isHome = path === "/" || path === "/docs/" || path === "/docs/index.html";
  const isSmartDuration = !isHome && !isFieldWas;
  const app = isFieldWas ? "fieldwas" : (isSmartDuration ? "smart-duration" : "tmsm");
  const names = { fieldwas: "FieldWas", "smart-duration": "Smart Duration Field", tmsm: "TMSM Jira Apps" };

  document.documentElement.dataset.appBrand = app;
  document.querySelectorAll(".md-header__topic .md-ellipsis").forEach((element) => {
    element.textContent = names[app];
  });

  function filterNavigation() {
    document.querySelectorAll(".md-sidebar--primary li").forEach((item) => {
      const label = item.querySelector(":scope > label, :scope > a");
      const title = label && label.textContent.trim();
      const shouldHide = (app === "fieldwas" && title === "Smart Duration Field")
        || (app === "smart-duration" && title === "FieldWas");
      item.hidden = false;
      item.style.display = shouldHide ? "none" : "";
    });
  }

  filterNavigation();
  window.setTimeout(filterNavigation, 100);
  window.setTimeout(filterNavigation, 500);
}());
