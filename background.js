// chrome.commands.onCommand.addListener(function(command) {
  
//   alert(command);

//   if (command == "activate_plugin")
//   {
//     add_to_library();
//   }
// });

// function add_to_library()
// {
  
  
// }
 
 function eventFire(el, etype){
  if (el.fireEvent) {
    el.fireEvent('on' + etype);
  } else {
    var evObj = document.createEvent('Events');
    evObj.initEvent(etype, true, false);
    el.dispatchEvent(evObj);
  }
}

eventFire(document.getElementById(':a'), 'click');