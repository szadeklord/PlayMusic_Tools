chrome.commands.onCommand.addListener(function(command) 
{
  if (command == "add_to_library")
  {
    add_to_library();
  }
});

function add_to_library()
{
  loadjs("/js/search_tabs.js");
}

function loadjs(file) 
{
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.src = file;

  document.body.appendChild(script);
}



