;(function($, exports) {

    function Sticky(element, options) {


        this.options  = $.extend({}, Sticky.DEFAULTS, options);
        this.$window  = $(window);

        this.$element = $(element);

        this.$window.on('scroll', $.proxy(this.check, this));

        this.$$scrollTop;

        this.check();
    }

    Sticky.DEFAULTS = {};

    Sticky.RESET = 'bottom-fixed top-fixed';

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

        this.$$scrollTop = this.$$scrollTop || (scrollTop < 0 ? 0 : scrollTop);

        if(scrollTop <= 0) return;

        var affix;

        if(scrollHeight <= screenHeight) {
          affix = 'top';
        } else {
          var scroll = (scrollHeight - screenHeight) + 10;

          if(scroll <= scrollTop) {
            affix = 'bottom';
            // this.$element.removeClass('absolute');
          } else {
            if(scrollTop >= 1) {
              var offset = this.$element.offset();

              this.$element.css({
                'top': offset.top
              });

              this.$element.addClass('absolute');
            }

            affix = ''
          }
        }

        console.log('affix:', affix);
        this.$element.removeClass(Sticky.RESET).addClass(affix + (!!affix ? '-fixed' : ''));
    }

    // jQuery plugin
    // =============

    var old = $.fn.sticky

    $.fn.sticky = function (options) {
        return this.each(function () {
            new Sticky(this, options);
        });
    }

    $.fn.sticky.Constructor = Sticky;

    $.fn.sticky.noConflict = function () {
        $.fn.sticky = old;
        return this;
    }

})(window.jQuery, window);
