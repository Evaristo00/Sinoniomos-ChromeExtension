chrome.runtime.onInstalled.addListener(() => {
    console.log("This is background");

    chrome.contextMenus.create({
        id: "sinonimo",
        title: "buscar sinonimos",
        type: 'normal',
        contexts: ['selection']

    });
});

let msg = ""

chrome.contextMenus.onClicked.addListener(function(info,tab){
    msg = info["selectionText"]
    console.log(msg);
    console.log(info);
    (async () => {
        const [tab] = await chrome.tabs.query({active: true, lastFocusedWindow: true});
        const response = await chrome.tabs.sendMessage(tab.id, {message: msg});
        // do something with response here, not outside the function
        console.log(response);
      })();
});





//   chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
//     console.log(tabs[0].id);
//     chrome.tabs.sendMessage(tabs[0].id, {"massage": msg}, function(response) {});
//     });