const webview = document.getElementById('webview');
const urlInput = document.getElementById('url');
const goBtn = document.getElementById('go');
const backBtn = document.getElementById('back');
const forwardBtn = document.getElementById('forward');
const reloadBtn = document.getElementById('reload');

// Go to URL
function navigateToURL() {
  let url = urlInput.value.trim();
  if (!/^https?:\/\//i.test(url)) {
    url = 'https://' + url;
  }
  webview.loadURL(url);
}

// Load on "Go" button
goBtn.addEventListener('click', () => {
  navigateToURL();
});

// Load on Enter key
urlInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    navigateToURL();
  }
});

// Back button
backBtn.addEventListener('click', () => {
  if (webview.canGoBack()) webview.goBack();
});

// Forward button
forwardBtn.addEventListener('click', () => {
  if (webview.canGoForward()) webview.goForward();
});

// Reload button
reloadBtn.addEventListener('click', () => {
  webview.reload();
});

// Update input when webview URL changes
webview.addEventListener('did-navigate', (e) => {
  urlInput.value = e.url;
});
