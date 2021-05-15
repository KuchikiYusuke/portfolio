(function($) {
    var $nav   = $('.p-menu-part');
    var $btn   = $('.c-toggle-btn');
    var $copy = $('.u-color-copy')
    var open   = 'open'; // class
    // menu open close
    $btn.on( 'click', function() {
      if ( ! $nav.hasClass( open ) ) {
        $nav.addClass( open );
        $copy.addClass( open);
      } else {
        $nav.removeClass( open );
        $copy.removeClass( open);
      }
    });
} )(jQuery);