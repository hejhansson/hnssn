function getWidth(){return $(window).innerWidth()}!function(){"use strict";var t=$(".information_item"),i=getWidth();if(i>980&&($(".portfolio_item").hover(function(){t.find("h2").html($(this).data("client")),t.find("p").html($(this).data("info")),t.find("span").html("<small>Tryck på bilden för att besöka sidan.</small>")}),$(".portfolio_item").mouseout(function(){t.find("h2").html(""),t.find("p").html(""),t.find("span").html("")})),i>980){var n=0;$(window).scroll(function(t){var i=$(this).scrollTop();i>n?(console.log("down"),$(".site-header .col-sm-3").css("width","5%"),$(".site-header .col-sm-3 a").html("AH")):(setTimeout(function(){$(".site-header .col-sm-3 a").html("Alexander Hansson")},200),$(".site-header .col-sm-3").css("width","25%")),n=i})}}();
//# sourceMappingURL=../maps/main.js.map