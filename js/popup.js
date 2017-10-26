document.addEventListener("DOMContentLoaded", function() 
{
  var checkPageButton = document.getElementById("btn-add-library");

  checkPageButton.addEventListener("click", function() 
  {
    loadjs("/js/search_tabs.js");
  }, false);

  get_current_song();
}, false);

function update_popup(song)
{
  if(song)
  {
    var content = "<div class='row'><div class='col-xs-offset-1 col-xs-2'><img class='img-small' src='" + song.song_image_url + "'></div><div class='col-xs-9 small'><div class='song-details'>" + song.song_title + "</br>" + song.song_artist + " - " + song.song_album + "</div></div>";
    
    document.getElementsByClassName("music")[0].innerHTML = content;
  }
}

function get_current_song()
{
  chrome.tabs.query({},function(array_of_tabs)
  {
    for(var i = 0; i < array_of_tabs.length; i++)
    {
      if(array_of_tabs[i].url.indexOf("play.google.com") !== -1)
      {
        chrome.tabs.sendMessage(array_of_tabs[i].id, {text: 'report_back'}, update_popup);
      }
    }
  });
}

function loadjs(file) 
{
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.src = file;

  document.body.appendChild(script);
}