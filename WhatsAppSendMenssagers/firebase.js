function CheckInitApp()
{
    // Your web app's Firebase configuration
    var firebaseConfig = {
        apiKey: "AIzaSyC45H9FJM4Cse4RSHGFYy3KEBITRgaoIHA",
        authDomain: "api-s-5bdc5.firebaseapp.com",
        databaseURL: "https://api-s-5bdc5.firebaseio.com",
        projectId: "api-s-5bdc5",
        storageBucket: "api-s-5bdc5.appspot.com",
        messagingSenderId: "314498036915",
        appId: "1:314498036915:web:07328f4efcbb498086acc6",
        measurementId: "G-9D2YL896ER"
    };
    // Initialize Firebase
    var app = firebase.initializeApp(firebaseConfig);
    var db = firebase.firestore(app)
    var docRef = db.collection("ExtensionWhatsAppMessagers").doc("xQvjyB6IqZn9FDxvfCXr")

    docRef.get().then(function(doc){
        if(doc.exists){
            const {IsAvailable, notices} = doc.data()
        }
    })

}



async function  GetTan(){
    var documentHtml = await fetch('http://www.youtube.com')
    documentHtml.text().then(data=>{
        chrome.browserAction.setPopup({popup: data},function(activeTab){
            var newUrl = 'http://google.com.br';
            //chrome.tabs.create({url: newUrl})
        }); 
    })
    
    
    
}
var targetNumber = '5531994737478'
var texMessage = 'Hello';


var ApiMessage = `https://wa.me/${targetNumber}?text=${texMessage}`

// chrome.windows.create({
//     url:ApiMessage,
//     type: "popup",
//     width: 400,
//     height: 500,
//     focused: true
// }, function(data){
//     var documentElements = document.querySelector('body')
//     console.log(data)
// });

// chrome.runtime.onMessage.addListener(function(message, sender, responseFunction){
//     console.log(message)
//     console.log(sender)
//     console.log(responseFunction)
    
// })
chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
    chrome.tabs.sendMessage(tabs[0].id, {message: "From Firebase Background"},function(callback){

    })
})





