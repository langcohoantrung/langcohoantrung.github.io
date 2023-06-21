$(document).ready(function() {
    // // Audio youtube 
    var player;

    $.getScript("https://www.youtube.com/iframe_api", function() {
        if (window.location.href === 'https://langcohoantrung.github.io/') {
            loadVideo();
        }
    });

    function loadVideo() {
        window.YT.ready(function() {
            player = new window.YT.Player("player", {
                height: "0",
                width: "0",
                videoId: "J4vv6NWmnwA",
                events: {
                    onReady: onPlayerReady,
                    onStateChange: onPlayerStateChange
                }
            });
        });
      
        function onPlayerReady(event) {
            player.seekTo(0, true);
            event.target.playVideo();
        }
      
        function onPlayerStateChange(event) {
            // TODO
        }
    }

    $('.play-video').click(function(){
        player.playVideo();
    });

    $('.stop-video').click(function(e){
        player.stopVideo();
    });
    
    $('.pause-video').click(function(){
        player.pauseVideo();
    });
});
