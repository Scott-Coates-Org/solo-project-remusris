browsingHistoryListToRender = []

chrome.runtime.onMessage.addListener(
    (message, sender, sendResponse) => {
        browsingHistoryListToRender.append(message)
    }

);