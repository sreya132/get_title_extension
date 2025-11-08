chrome.runtime.onMessage.addListener(async (message, sender, sendResponse) => {
  if (message.action === "startScraping") {
    const links = message.links;

    for (const link of links) {
      console.log("🌐 Opening:", link);

      // Open the test profile page
      const tab = await chrome.tabs.create({ url: link, active: true });

      // Wait for content script to scrape and send
      await new Promise((resolve) => setTimeout(resolve, 8000));

      // Close tab
      await chrome.tabs.remove(tab.id);

      await new Promise((resolve) => setTimeout(resolve, 3000));
    }

    sendResponse({ done: true });
  }
});
