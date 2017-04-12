$(function(){
    var topPos = $('.floating').offset().top; //topPos - это значение от верха блока до окна браузера
    $(window).scroll(function() {
        var top = $(document).scrollTop();
        if (top > topPos) $('.floating').addClass('fixed');
        else $('.floating').removeClass('fixed');
    });
});

