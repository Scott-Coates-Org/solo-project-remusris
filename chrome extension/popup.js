browsingHistoryListToRender = []

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        browsingHistoryListToRender.append(request.url);

        nonsenese = sender
    
    sendResponse({endPoint: "roger that"});
    }
);

