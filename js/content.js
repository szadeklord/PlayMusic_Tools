// Listen for messages
chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
    // If the received message has the expected format...
    if (msg.text === 'report_back') {
        // Call the specified callback, passing
        // the web-page's DOM content as argument

        var albums = document.getElementsByClassName("player-album");
        var album = "";

        if(albums[0])
        {
            album = albums[0].innerHTML;
        }

        var song = {
            song_title: document.getElementById("currently-playing-title").innerHTML,
            song_artist: document.getElementById("player-artist").innerHTML,
            song_album: album,
            song_image_url: document.getElementById("playerBarArt").src
        };
        
        sendResponse(song);
    }
});