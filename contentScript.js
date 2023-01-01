console.log("content script");

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        console.log(request.message)
        var div=document.createElement("div");
        document.body.appendChild(div);
        div.innerText="test123";
    }
  );