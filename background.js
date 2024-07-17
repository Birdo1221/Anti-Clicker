let isActive = false; // Start with protection off

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ isActive });
});

// Toggle function
chrome.action.onClicked.addListener(() => {
  isActive = !isActive;
  chrome.storage.sync.set({ isActive });
  chrome.action.setBadgeText({ text: isActive ? "ON" : "OFF" });
});

// Listen for changes
chrome.storage.onChanged.addListener((changes) => {
  if (changes.isActive) {
    isActive = changes.isActive.newValue;
    chrome.action.setBadgeText({ text: isActive ? "ON" : "OFF" });
  }
});
