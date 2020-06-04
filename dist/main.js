(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('riot')) :
  typeof define === 'function' && define.amd ? define(['riot'], factory) :
  (global = global || self, factory(global.riot));
}(this, (function (riot) { 'use strict';

  const name = 'there';

  var App = {
    'css': `app,[is="app"]{ --riot-color: #f04; } app h1,[is="app"] h1{ color: var(--riot-color); border-bottom: 1px solid var(--riot-color); }`,

    'exports': {
      title: `Hello ${ name }!`
    },

    'template': function(template, expressionTypes, bindingTypes, getComponent) {
      return template(
        '<h1 expr0="expr0"> </h1><p>This example shows how to use the riot.config.js:</p>',
        [{
          'redundantAttribute': 'expr0',
          'selector': '[expr0]',

          'expressions': [{
            'type': expressionTypes.TEXT,
            'childNodeIndex': 0,

            'evaluate': function(scope) {
              return scope.title;
            }
          }]
        }]
      );
    },

    'name': 'app'
  };

  riot.component(App)(document.getElementById('root'));

})));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsiLi4vc3JjL2FwcC5yaW90IiwiLi4vc3JjL21haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiPGFwcD5cbiAgPGgxPnsgdGl0bGUgfTwvaDE+XG4gIDxwPlRoaXMgZXhhbXBsZSBzaG93cyBob3cgdG8gdXNlIHRoZSByaW90LmNvbmZpZy5qczo8L3A+XG5cbiAgPHNjcmlwdD5cbiAgICBjb25zdCBuYW1lID0gJ3RoZXJlJ1xuXG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgdGl0bGU6IGBIZWxsbyAkeyBuYW1lIH0hYFxuICAgIH1cbiAgPC9zY3JpcHQ+XG5cbiAgPHN0eWxlPlxuICAgIDpob3N0IHtcbiAgICAgIC0tcmlvdC1jb2xvcjogI2YwNDtcbiAgICB9XG5cbiAgICBoMSB7XG4gICAgICBjb2xvcjogdmFyKC0tcmlvdC1jb2xvcik7XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tcmlvdC1jb2xvcik7XG4gICAgfVxuICA8L3N0eWxlPlxuPC9hcHA+XG4iLCJpbXBvcnQge2NvbXBvbmVudH0gZnJvbSAncmlvdCdcbmltcG9ydCBBcHAgZnJvbSAnLi9hcHAucmlvdCdcblxuY29tcG9uZW50KEFwcCkoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKSlcbiJdLCJuYW1lcyI6WyJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7OztFQUtJLE1BQU0sT0FBTzs7Ozs7O01BR1gsS0FBSyxFQUFFLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OzJCQVB0Qjs7Ozs7Ozs7OztBQ0VSQSxnQkFBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7Ozs7In0=
