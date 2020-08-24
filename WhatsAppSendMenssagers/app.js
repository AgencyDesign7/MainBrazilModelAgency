
// chrome.runtime.sendMessage("WriteConsole",function(response){
// })

chrome.runtime.onMessage.addListener(function(message, sender, responseFunction){
    console.log(message)
})





