function removeContainer() {
    const container = document.getElementById("avatarContainer");
    container.style.setProperty("display", "none");
}
 
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    //We're already restricted to roll20 by the manifest
    if (changeInfo.status != "complete" || !tab.url) {
        return;
    }    

    chrome.scripting.executeScript({
        target: { tabId },
        function: removeContainer
    });
});