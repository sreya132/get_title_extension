document.getElementById("startBtn").addEventListener("click", async () => {
  const text = document.getElementById("profileLinks").value.trim();
  if (!text) {
    alert("Please enter at least one profile URL!");
    return;
  }

  const links = text.split("\n").map((l) => l.trim()).filter(Boolean);

  chrome.runtime.sendMessage({ action: "startScraping", links });
  alert("Scraping started! Check the console for logs.");
});
