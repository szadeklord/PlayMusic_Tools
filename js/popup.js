document.addEventListener("DOMContentLoaded", function() 
{
  var song = get_current_song();
  
  if(song)
  {
    update_popup(song);
  }

  var checkPageButton = document.getElementById("btn-add-library");

  checkPageButton.addEventListener("click", function() 
  {
    loadjs("/js/search_tabs.js");
  }, false);
}, false);

function update_popup(song)
{

}

function get_current_song()
{

}

function loadjs(file) 
{
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.src = file;

  document.body.appendChild(script);
}