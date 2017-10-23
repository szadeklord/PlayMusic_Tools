chrome.commands.onCommand.addListener(function(command) {
  
  if (command == "test_function")
  {
    test_function();
  }
});

function test_function()
{
  alert("Test is working");
}