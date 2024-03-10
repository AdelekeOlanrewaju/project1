$(document).ready(function(){
    $(".menu-icon").click(function(){
        $(".links").toggleClass("visible");
        $(".exit-icon").addClass("hidden");
        $("body").removeClass("fullscreen");
    });
});