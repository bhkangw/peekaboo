// Function to toggle blurring
const toggleBlur = (enable) => {
  const items = document.querySelectorAll(
    ".relative.grow.overflow-hidden.whitespace-nowrap"
  ); // Updated selector
  items.forEach((item) => {
    if (enable) {
      item.classList.add("blurred"); // Add blur class
    } else {
      item.classList.remove("blurred"); // Remove blur class
    }
  });
};

// Observe changes in the DOM for dynamically loaded history items
const observer = new MutationObserver(() => {
  toggleBlur(true); // Automatically blur new history items
});

observer.observe(document.body, { childList: true, subtree: true });

// Listen for messages from the popup to enable/disable blur
chrome.runtime.onMessage.addListener((message) => {
  if (message.action === "toggleBlur") {
    toggleBlur(message.enable);
  }
});
