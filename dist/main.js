(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('riot')) :
  typeof define === 'function' && define.amd ? define(['riot'], factory) :
  (global = global || self, factory(global.riot));
}(this, (function (riot) { 'use strict';

  const name = 'coucou';

  var App = {
    'css': `app,[is="app"]{ --riot-color: #f04; } app h1,[is="app"] h1{ color: var(--riot-color); border-bottom: 1px solid var(--riot-color); }`,

    'exports': {
      title: `Hello ${ name }!`
    },

    'template': function(template, expressionTypes, bindingTypes, getComponent) {
      return template('<h1 expr3="expr3"> </h1><p>Le covid19</p>', [{
        'redundantAttribute': 'expr3',
        'selector': '[expr3]',

        'expressions': [{
          'type': expressionTypes.TEXT,
          'childNodeIndex': 0,

          'evaluate': function(scope) {
            return scope.title;
          }
        }]
      }]);
    },

    'name': 'app'
  };

  riot.component(App)(document.getElementById('root'));

})));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsiLi4vc3JjL2FwcC5yaW90IiwiLi4vc3JjL21haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiPGFwcD5cbiAgPGgxPnsgdGl0bGUgfTwvaDE+XG4gIDxwPkxlIGNvdmlkMTk8L3A+XG5cblxuICA8c2NyaXB0PlxuICAgIGNvbnN0IG5hbWUgPSAnY291Y291J1xuXG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgdGl0bGU6IGBIZWxsbyAkeyBuYW1lIH0hYFxuICAgIH1cbiAgPC9zY3JpcHQ+XG5cblxuICA8c3R5bGU+XG4gICAgOmhvc3Qge1xuICAgICAgLS1yaW90LWNvbG9yOiAjZjA0O1xuICAgIH1cblxuICAgIGgxIHtcbiAgICAgIGNvbG9yOiB2YXIoLS1yaW90LWNvbG9yKTtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1yaW90LWNvbG9yKTtcbiAgICB9XG4gIDwvc3R5bGU+XG48L2FwcD5cbiIsImltcG9ydCB7Y29tcG9uZW50fSBmcm9tICdyaW90J1xuaW1wb3J0IEFwcCBmcm9tICcuL2FwcC5yaW90J1xuXG5jb21wb25lbnQoQXBwKShkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpKVxuIl0sIm5hbWVzIjpbImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0VBTUksTUFBTSxPQUFPOzs7Ozs7TUFHWCxLQUFLLEVBQUUsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDOzs7Ozs7Ozs7Ozs7O3lCQVJ0Qjs7Ozs7Ozs7O0FDRVJBLGdCQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQzs7OzsifQ==
