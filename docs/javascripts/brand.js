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

  document.querySelectorAll(".md-sidebar--primary .md-nav--primary > .md-nav__list > .md-nav__item").forEach((section) => {
    const isFieldWasSection = section.textContent.includes("FieldWas");
    const isSmartDurationSection = section.textContent.includes("Smart Duration Field");
    section.hidden = (app === "fieldwas" && isSmartDurationSection)
      || (app === "smart-duration" && isFieldWasSection);
  });
}());
