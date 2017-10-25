chrome.commands.onCommand.addListener(function(command) {

  if (command == "add_to_library")
  {
    add_to_library();
  }
});

function add_to_library()
{
  chrome.tabs.query({
  },function(array_of_tabs){
      for(var i = 0; i < array_of_tabs.length; i++)
      {
          if(array_of_tabs[i].url.indexOf("play.google.com") !== -1)
          {
                  // chrome.tabs.executeScript(tabs[i].id, {file: "background.js"});
                  chrome.tabs.executeScript(array_of_tabs[i].id, {file:"js/add_to_library.js"});
          }
      }
  });
}





