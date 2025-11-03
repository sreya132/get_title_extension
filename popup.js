document.getElementById("getTitleBtn").addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const title = tabs[0].title;
    document.getElementById("tabTitle").textContent = "My title is: " + title;
  });
});
