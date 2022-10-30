$(document).ready(function() {
    // Slider
    $("#slider").load("/pages/slider.html");
    // Menu
    $("#nav").load("/pages/nav.html");
    // Tin tức
    $("#message_footer").load("/pages/message-footer.html");
    // Scroll to top
    $(window).scroll(function(){ 
        if ($(this).scrollTop() > 100) { 
            $('#scroll').fadeIn(); 
        } else { 
            $('#scroll').fadeOut(); 
        } 
    }); 
    $('#scroll').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 600); 
        return false; 
    }); 
});