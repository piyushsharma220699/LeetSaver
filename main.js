var SOURCE_CODE = "https://github.com/piyushsharma220699/LeetSaver";

function open_github(){
    window.open(SOURCE_CODE,"_blank");
}

document.getElementById("linktocode").addEventListener("click",open_github);

// GET THE URL OF THE LINK WHERE THE EXTENSION GETS OPENED

var URL;

chrome.tabs.query({active:true},function(tab){
    URL = tab[0].url;
    console.log(URL);
});