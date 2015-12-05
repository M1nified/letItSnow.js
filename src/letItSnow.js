/* @license MIT
 * letItSnow.js
 * @author M1nified http://prowebject.com
 * Requires: jquery 2.x & jquery-ui 1.11+ with Effects Core
 */
(function($) {
  $.fn.extend({
    letItSnow: function letItSnow(options) {
      var settings = $.extend({
        color: '#fff',
        size_min: 1,
        size_max: 5,
        zindex: 99999,
        maxcount: 100,
        wind: 250,
        easing_x: "easeInBack",
        easing_y: "easeInCubic",
        fall_time: 10000
      }, options)
      var spawning = true;
      $(window).on('blur', function stopAnimations() {
        spawning = false;
      })
      $(window).on('focus', function stopAnimations() {
        spawning = true;
      })
      return this.each(function letItSnowEach() {
        var height = $(document).innerHeight();
        var flightduration = settings.fall_time;
        var flake = function flake() {
          if (!spawning) {
            setTimeout(flake.bind(this), 2000);
            return;
          }
          var left = Math.floor(Math.random() * 100000 % ($(this).width() + settings.wind)) - settings.wind;
          var size = Math.ceil((Math.random() * 10) % settings.size_max) + settings.size_min;
          var timeout = Math.floor(Math.random() * 100000 % flightduration);
          var elem = $('<div class="snowflake" style="display:block; pointer-events: none; z-index:' + settings.zindex + ';position:absolute; top:0px; left:' + left + 'px; width:' + size + 'px; height:' + size + 'px; border-radius:100%;background-color:' + settings.color + ';"></div>');
          setTimeout(flakeSpawnDelay.bind(this, elem, flake, left), timeout)
        }.bind(this);
        var flakeSpawnDelay = function flakeSpawnDelay(elem, flake, left) {
          $(this).append(elem);
          elem.animate({
            left: left + settings.wind,
            top: height
          }, {
            duration: flightduration,
            specialEasing: {
              left: settings.easing_x,
              top: settings.easing_y
            },
            step: function step(now, fx) {
              if (fx.prop === 'left') {
                try {
                  if (now <= 0 || now + settings.size_max >= $(window).innerWidth()) {
                    $(this).hide();
                  } else {
                    $(this).show();
                  }
                } catch (e) {
                  $(this).stop();
                }
              }
            }
          }).promise().always(onFlakeDeath.bind(this, elem, flake));
        }
        var onFlakeDeath = function onFlakeDeath(elem, flake) {
          flake.call(this);
          elem.remove();
        }
        for (i = 0; i < settings.maxcount; i++) {
          flake();
        }
      })
    }
  });
}(jQuery))
