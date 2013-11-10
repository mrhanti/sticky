$(function() {

    var $el = $('.sticky');
    var $window = $(window);

    var screenHeight = $window.height();
    var scrollHeight;
    scrollHeight = $el[0].scrollHeight;

    var scrollTop;

    var elementHeight = $el.height();
    var offset = $el.offset();

    var pinned = false;

    var bottom;

    var defaultCssPosition = $el.css('position') || 'static';

    $window.on('scroll', function() {
        scrollTop = $(this).scrollTop();

        // if(scrollHeight <= screenHeight) {
        //     $el.addClass('affix-bottom');
        //     $el.css({
        //         'top': '0'
        //     });
        //     console.log('content not longer than screen');

        //     return;
        // }

        // if(!pinned) {
        //     $el.removeClass('affix-bottom');
        //     $el.offset({ 'top': '' });
        // }

        if((scrollHeight - screenHeight) + 30 <= scrollTop) {
            if(!pinned) {
                bottom = scrollTop - (scrollHeight - screenHeight);

                $el.addClass('affix-bottom');

                $el.css({
                    'bottom': '0'
                });

                pinned = true;
            }
        } else {
            if(pinned) {
                $el.removeClass('affix-bottom');

                $el.css({
                    'bottom': ''
                });

                pinned = false;
            }
        }

    });

    // $('.show-more').click(function(e) {
    //     e.preventDefault();
    //     e.stopPropagation();

    //     $('.text').css('height', '800px');
    //     return;
    // });
});
