/* Give each app section a recognizable header while preserving one shared site. */
(function applyAppBrand() {
  const path = window.location.pathname;
  const isFieldWas = path.includes("/fieldwas/");
  const isSmartDuration = path !== "/" && !isFieldWas;
  const app = isFieldWas ? "fieldwas" : (isSmartDuration ? "smart-duration" : "tmsm");
  const names = { fieldwas: "FieldWas", "smart-duration": "Smart Duration Field", tmsm: "TMSM Jira Apps" };
  document.documentElement.dataset.appBrand = app;
  document.querySelectorAll(".md-header__topic .md-ellipsis").forEach((element) => { element.textContent = names[app]; });
  const logo = document.querySelector(".md-header__button.md-logo");
  if (logo) {
    logo.setAttribute("aria-label", names[app]);
    logo.dataset.brandMark = app === "fieldwas" ? "F" : (app === "smart-duration" ? "D" : "T");
  }
}());
