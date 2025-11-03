# Tab Title Viewer Chrome Extension

A simple Chrome extension that displays the title of the currently active browser tab when a button is clicked.

## 📌 Features
- Shows the active tab's title instantly.
- Clean and minimal popup UI.
- Lightweight and easy to use.

## 🛠️ Installation (Developer Mode)
1. Download or clone this repository.
2. Open **Google Chrome**.
3. Go to `chrome://extensions/`
4. Enable **Developer mode** (top-right corner).
5. Click **Load unpacked**.
6. Select the folder containing this extension.

## 📂 Files Included
- `manifest.json` — Extension config file.
- `popup.html` — UI for the popup.
- `popup.js` — Script to fetch and show tab title.

## 🚀 How to Use
1. Click on the extension icon from the toolbar.
2. Press the button in the popup.
3. The title of the current tab will appear on the screen.

## 🧑‍💻 Permissions Used
- `activeTab` — Access current tab information.
- `tabs` — Read the title of the current tab.

## 📄 Manifest Example
```json
{
  "manifest_version": 3,
  "name": "Tab Title Viewer",
  "version": "1.0",
  "author": "Sreyashi Saha",
  "description": "Shows the title of the current tab when a button is clicked.",
  "permissions": ["tabs", "activeTab"],
  "action": {
    "default_popup": "popup.html"
  }
}
