var dispatchMouseEvent = function(target, var_args) {
  var e = document.createEvent("MouseEvents");
  // If you need clientX, clientY, etc., you can call
  // initMouseEvent instead of initEvent
  e.initEvent.apply(e, Array.prototype.slice.call(arguments, 1));
  target.dispatchEvent(e);
};

var menu = document.querySelector("[data-id=now-playing-menu]");

dispatchMouseEvent(menu, 'mouseover', true, true);
dispatchMouseEvent(menu, 'mousedown', true, true);
dispatchMouseEvent(menu, 'click', true, true);
dispatchMouseEvent(menu, 'mouseup', true, true);

var element = document.getElementById(":a");

dispatchMouseEvent(element, 'mouseover', true, true);
dispatchMouseEvent(element, 'mousedown', true, true);
dispatchMouseEvent(element, 'click', true, true);
dispatchMouseEvent(element, 'mouseup', true, true);


