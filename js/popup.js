  document.addEventListener('DOMContentLoaded', function() {
    
    chrome.tabs.query({
    },function(array_of_tabs){
        var test = "";

        for(var i = 0; i < array_of_tabs.length; i++)
        {
             if(array_of_tabs[i].url.indexOf("play.google.com") !== -1)
             {
                    // chrome.tabs.executeScript(tabs[i].id, {file: "background.js"});
                    chrome.tabs.executeScript(array_of_tabs[i].id, {file:"background.js"});
             }
        }
    });
    setTimeout(CloseMe, 3000);
  }, false);

  function CloseMe() 
  {
      window.close();
  }