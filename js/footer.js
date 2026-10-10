// Bumped by scripts/stamp-updated.sh (or by hand) when you push site changes.
const SITE_LAST_UPDATED = "2026-10-11T04:02:41+05:30";

(() => {
  const date = new Date(SITE_LAST_UPDATED);
  const label = Number.isNaN(date.getTime())
    ? ""
    : date.toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric",
      });

  document.write(`
  <footer class="site-footer">
    <p>Malay Kedia</p>
    ${
      label
        ? `<p class="footer-updated">Last updated <time datetime="${SITE_LAST_UPDATED}">${label}</time></p>`
        : ""
    }
  </footer>
`);
})();
