$(function(){
    var topPos = $('.floating').offset().top; //topPos - это значение от верха блока до окна браузера
    $(window).scroll(function() {
        var top = $(document).scrollTop();
        if (top > topPos) $('.floating').addClass('fixed');
        else $('.floating').removeClass('fixed');
    });


    $('a.menu-link[href^="#"]').bind('click.smoothscroll',function (e) {
        e.preventDefault();

        var target = this.hash,
            $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 1000, 'swing', function () {
            window.location.hash = target;
        });
    });

});

