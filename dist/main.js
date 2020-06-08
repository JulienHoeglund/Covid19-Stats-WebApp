(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('riot'), require('axios')) :
  typeof define === 'function' && define.amd ? define(['riot', 'axios'], factory) :
  (global = global || self, factory(global.riot, global.axios));
}(this, (function (riot, axios) { 'use strict';

  axios = axios && Object.prototype.hasOwnProperty.call(axios, 'default') ? axios['default'] : axios;

  var App = {
    'css': null,

    'exports': {
      name : 'Covid19',

      components : {

      },

      async created(){
        const {data} = axios.get("https://api.covid19api.com/summary ");
        console.log(date);
      }
    },

    'template': function(template, expressionTypes, bindingTypes, getComponent) {
      return template('<h1>COVID 19</h1>', []);
    },

    'name': 'app'
  };

  riot.component(App)(document.getElementById('root'));

})));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsiLi4vc3JjL2FwcC5yaW90IiwiLi4vc3JjL21haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiPGFwcD5cbiAgPGgxPkNPVklEIDE5PC9oMT5cblxuICA8c2NyaXB0PlxuICBpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgIG5hbWUgOiAnQ292aWQxOScsXG4gICAgICBjb21wb25lbnRzIDoge1xuXG4gICAgICB9LFxuICAgICAgYXN5bmMgY3JlYXRlZCgpe1xuICAgICAgICBjb25zdCB7ZGF0YX0gPSBheGlvcy5nZXQoXCJodHRwczovL2FwaS5jb3ZpZDE5YXBpLmNvbS9zdW1tYXJ5IFwiKTtcbiAgICAgICAgY29uc29sZS5sb2coZGF0ZSk7XG4gICAgICB9XG4gICAgfVxuICA8L3NjcmlwdD5cblxuXG4gIDxzdHlsZT5cbiAgIFxuICA8L3N0eWxlPlxuPC9hcHA+XG4iLCJpbXBvcnQge2NvbXBvbmVudH0gZnJvbSAncmlvdCdcbmltcG9ydCBBcHAgZnJvbSAnLi9hcHAucmlvdCdcblxuXG5jb21wb25lbnQoQXBwKShkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpKVxuIl0sIm5hbWVzIjpbImNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O01BTU0sT0FBTzs7TUFDUCxhQUFhOzs7O01BR2IsTUFBTSxPQUFPLEVBQUU7UUFDYixNQUFNLENBQUMsSUFBSSxJQUFJLEtBQUssQ0FBQyxHQUFHLENBQUMscUNBQXFDLENBQUM7UUFDL0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUM7Ozs7Ozs7Ozs7O0FDUnpCQSxnQkFBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7Ozs7In0=
