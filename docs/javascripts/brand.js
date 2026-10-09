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

  const logoFiles = {
    fieldwas: "fieldwas-logo.png",
    "smart-duration": "smart-duration-logo.png",
  };

  if (logoFiles[app]) {
    const logoUrl = path.startsWith("/docs/")
      ? `/docs/assets/${logoFiles[app]}`
      : `/assets/${logoFiles[app]}`;

    document.querySelectorAll(".md-header__button.md-logo, .md-nav__button.md-logo").forEach((element) => {
      const image = document.createElement("img");
      image.src = logoUrl;
      image.alt = names[app];
      element.replaceChildren(image);
    });

    const favicon = document.querySelector('link[rel="icon"]');
    if (favicon) {
      favicon.href = logoUrl;
    }
  }

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
