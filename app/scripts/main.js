$(function() {

    var $el = $('.sticky');
    var $window = $(window);

    var screenHeight = $window.height();
    var scrollHeight;

    var scrollTop;

    var elementHeight = $el.height();
    var offset = $el.offset();

    var pinned = false;

    var bottomFixedClassName = 'bottom-fixed';
    var topFixedClassName    = 'top-fixed';

    scrollHeight = offset.top + $el.height();

    var pinnedTop = false;

    $window.on('scroll', function() {

        scrollTop = $(this).scrollTop();
        scrollHeight = offset.top + $el.height();


        if(scrollTop <= 0) {
            return;
        }

        if(scrollHeight <= screenHeight) {
            $el.addClass(topFixedClassName);
            return;
        }


        var affix = (scrollHeight - screenHeight) + 10 <= scrollTop ? bottomFixedClassName : '';

        $el.removeClass([bottomFixedClassName, topFixedClassName].join(' '))
            .addClass(affix);

    });

    $('.show-more').click(function(e) {
        e.preventDefault();
        e.stopPropagation();

        $('.text').css({'height': '800px', 'overflow': ''});
        return;
    });

    $('.show-less').click(function(e) {
        e.preventDefault();
        e.stopPropagation();

        $('.text').css({'height': '400px', 'overflow': 'hidden'});
        return;
    })
});
