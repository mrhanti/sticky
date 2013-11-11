;(function($, exports) {
    var Miamed = exports.Miamed || {};


    function Sticky(element, options) {
        this.options  = $.extend({}, Sticky.DEFAULTS, options);
        this.$window  = $(window);

        this.$element = $(element);

        this.$window.on('scroll', $.proxy(this.check, this));

        this.check();
    }

    Sticky.DEFAULTS = {
        bottomClassName: 'bottom-fixed',
        topClassName:    'top-fixed'
    };

    Sticky.prototype.check = function() {
        if (!this.$element.is(':visible')) {
            return;
        }

        var

        sticky,

        options      = this.options,

        scrollHeight = this.$element[0].scrollHeight,

        scrollTop    = this.$window.scrollTop(),

        screenHeight = this.$window.height();


        if(scrollTop <= 0) return;


        console.log(scrollHeight - screenHeight + 10, scrollTop);
        var affix = (scrollHeight <= screenHeight) ? options.topClassName :
                    ((scrollHeight - screenHeight) + 10 <= scrollTop) ? options.bottomClassName : '';

        this.$element.removeClass([options.bottomClassName, options.topClassName].join(' '))
            .addClass(affix);
    }

    Miamed.Sticky = Sticky;

    exports.Miamed = Miamed;

})(window.jQuery, window);
