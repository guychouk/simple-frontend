export function getPageFromHash() {
  const currentHash = window.location.hash;
  const isValidPath = /^#\//.test(currentHash);
  if (!isValidPath) {
    return '/';
  }
  return currentHash.replace(/^#/, '') || '/';
}
