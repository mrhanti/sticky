(function($, exports) {

    function Sticky(element, options) {
        this.options  = $.extend({}, Sticky.DEFAULTS, options);
        this.$window  = $(window);

        this.$window.on('scroll', $.proxy(this.check, this));

        this.$element = $(element);

        this.pinned = false;

        // To delete later on
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
        });

        this.check();
    }

    Sticky.DEFAULTS = {
        bottomClassName: 'bottom-fixed',
        topClassName:    'top-fixed'
    };

    Sticky.prototype.check = function() {
        var
        options      = this.options,
        offset       = this.$element.offset(),

        scrollHeight = offset.top + this.$element.height(),
        scrollTop    = this.$window.scrollTop(),
        screenHeight = this.$window.height();

        console.log(this.$element.height());
        console.log(scrollHeight, screenHeight);
        if(scrollHeight <= screenHeight && !this.$element.hasClass(options.topClassName)) {
            this.$element.addClass(options.topClassName);
            return;
        }

        return;
        if(!this.pinned) {
            this.$element.removeClass(options.topClassName);
            this.$element.css({ 'top': '' });
        }


        if((scrollHeight - screenHeight) + 10 <= scrollTop) {
            if(!this.pinned) {
                this.$element.addClass(options.bottomClassName);

                this.pinned = true;
            }
        } else {
            if(this.pinned) {
                this.$element.removeClass(options.bottomClassName);

                this.pinned = false;
            }
        }
    }

    var Miamed = exports.Miamed || {};

    Miamed.Sticky = Sticky;

    exports.Miamed = Miamed;
})(window.jQuery, window);
