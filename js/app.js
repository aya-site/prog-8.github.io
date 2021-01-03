"use strict";
$(function () {
    var o = $(".follow"),
        s = $(".hero").height();
    console.log(s), o.hide(), $(window).scroll(function () {
        var i = $(window).scrollTop();
        $(".js--fade").each(function () {
            $(this).offset().top - $(window).height() + 250 < i && $(this).addClass("is--fade")
        }), s < i ? o.fadeIn() : o.fadeOut()
    })
});

$(function() {
    var topBtn = $('.cv');    
    topBtn.hide();
    //スクロールが1100に達したらボタン表示
    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            topBtn.fadeIn();
        } else {
            topBtn.fadeOut();
        }
    });
});

$(function () {
    //移動するスクリプト
    $('a[href^="#"]').click(function () {
        var href = $(this).attr('href');
        var target = $(href == '#' || href == '' ? 'html' : href);
        var position = target.offset().top;
        $('html,body').animate({
            scrollTop: position
        }, 500, 'swing');
        return false;
    });
});
