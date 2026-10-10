(() => {
  const page = document.body.dataset.page;
  if (!page) return;

  document.querySelectorAll(".sidebar-nav a[data-nav]").forEach((link) => {
    if (link.dataset.nav === page) {
      link.setAttribute("aria-current", "page");
    }
  });
})();
