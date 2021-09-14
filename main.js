chrome.tabs.query({active:true},function(tab){
    url = tab[0].url;
    console.log(url);
});