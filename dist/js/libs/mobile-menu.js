"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var MobileMenu = /*#__PURE__*/function () {
  function MobileMenu() {
    _classCallCheck(this, MobileMenu);

    this.DOM = {};
    this.DOM.btn = document.querySelector('.mobile-menu__btn');
    this.DOM.jsbtn1 = document.querySelector('.js-btn1');
    this.DOM.jsbtn2 = document.querySelector('.js-btn2');
    this.DOM.jsbtn3 = document.querySelector('.js-btn3');
    this.DOM.container = document.querySelector('#global-container');
    this.eventType = this._getEventType();

    this._addEvent();
  }

  _createClass(MobileMenu, [{
    key: "_getEventType",
    value: function _getEventType() {
      return window.ontouchstart ? 'touchstart' : 'click';
    }
  }, {
    key: "_toggle",
    value: function _toggle() {
      this.DOM.container.classList.toggle('menu-open');
    }
  }, {
    key: "_addEvent",
    value: function _addEvent() {
      this.DOM.btn.addEventListener(this.eventType, this._toggle.bind(this));
      this.DOM.jsbtn1.addEventListener(this.eventType, this._toggle.bind(this));
      this.DOM.jsbtn2.addEventListener(this.eventType, this._toggle.bind(this));
      this.DOM.jsbtn3.addEventListener(this.eventType, this._toggle.bind(this));
    }
  }]);

  return MobileMenu;
}();
//# sourceMappingURL=mobile-menu.js.map
