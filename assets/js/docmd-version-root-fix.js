(function () {
  if (window.__docmdVersionRootFixed) return;
  window.__docmdVersionRootFixed = true;

  var active = document.querySelector('.version-dropdown-item.active');
  var versionRoot = active && active.getAttribute('data-version-root');

  if (versionRoot) {
    window.DOCMD_VERSION_ROOT = versionRoot;
  }
})();