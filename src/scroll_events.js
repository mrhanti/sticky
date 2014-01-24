(function(){

    var

    special = $.event.special,

    dispatch = $.event.handle || $.event.dispatch,

    uid = 'D' + (+new Date());

    special.scrollstart = {

      setup: function() {

        var timer,
        handler = function(e) {

          if(timer == null) {
            e.type = 'scrollstart';
            dispatch.apply(this, arguments);
          } else {
            clearTimeout(timer);
          }

          timer = setTimeout( function(){
            timer = null;
          }, 100);

        };

        $(this).bind('scroll', handler);
      },

      teardown: function(){
        $(this).unbind('scroll');
      }
    };

})(window.jQuery);
