chrome.runtime.onInstalled.addListener(function () {
  chrome.storage.sync.set(
    { new_tab_url: "https://www.google.com/" },
    function () {
      console.log("New Tab URL Set");
    }
  );
});

chrome.tabs.onCreated.addListener(async function (tab) {
  const newURL = await chrome.storage.sync.get(["new_tab_url"])
    .then((result) => {
      return result.new_tab_url;
    });
  if (
    tab.pendingUrl == "chrome://newtab/" ||
    tab.pendingUrl == "edge://newtab/" ||
    tab.url == "chrome://newtab/" ||
    tab.url == "edge://newtab/"
  ) {
    chrome.tabs.update(tab.id, { url: newURL.toString() });
  }
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.url) {
    console.log("TabUpdated: " + changeInfo.url);
  }
});
