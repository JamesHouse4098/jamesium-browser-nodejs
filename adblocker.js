module.exports = function setupAdblocker(session) {
  const blockList = ['doubleclick.net', 'ads.', 'googlesyndication', 'adservice.google.com'];
  session.webRequest.onBeforeRequest((details, callback) => {
    const shouldBlock = blockList.some(block => details.url.includes(block));
    callback({ cancel: shouldBlock });
  });
};
