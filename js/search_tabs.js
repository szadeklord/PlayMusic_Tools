chrome.tabs.query({},function(array_of_tabs)
{
  for(var i = 0; i < array_of_tabs.length; i++)
  {
    if(array_of_tabs[i].url.indexOf("play.google.com") !== -1)
    {
      chrome.tabs.executeScript(array_of_tabs[i].id, {file:"/js/commands/add_to_library.js"});
    }
  }
});