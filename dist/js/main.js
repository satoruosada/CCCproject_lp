"use strict";

document.addEventListener('DOMContentLoaded', function () {
  var cb = function cb(el, inview) {
    if (inview) {
      var ta = new TweenTextAnimation(el);
      ta.animate();
    }
  };

  var so = new ScrollObserver('.tween-animate-title', cb);

  var _inviewAnimation = function _inviewAnimation(el, inview) {
    if (inview) {
      el.classList.add('inview');
    } else {
      el.classList.remove('inview');
    }
  };

  var so2 = new ScrollObserver('.appear', _inviewAnimation);
  var header = document.querySelector('.header');

  var _navAnimation = function _navAnimation(el, inview) {
    if (inview) {
      header.classList.remove('triggered');
    } else {
      header.classList.add('triggered');
    }
  };

  var so3 = new ScrollObserver('.nav-trigger', _navAnimation, {
    once: false
  });
  new MobileMenu();
});
//# sourceMappingURL=main.js.map
