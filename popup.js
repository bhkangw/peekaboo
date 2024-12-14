// Toggle blur setting
document.getElementById("toggleBlur").addEventListener("change", (event) => {
  const enable = event.target.checked;
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, { action: "toggleBlur", enable });
  });
});
