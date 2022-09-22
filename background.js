// JavaScript source code
chrome.runtime.onMessage.addListener(
    (request, sender, sendResponse) => {
      if (request.message === "start BG timer")
        sendResponse({message: "hi to you"});
    });