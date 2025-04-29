const { contextBridge } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  navigate: (url) => {
    document.querySelector('webview').loadURL(url);
  }
});
