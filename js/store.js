/*global localStorage,$, Store, window, App, Handlebars */
(function() {
  'use strict';

  App.Store = {
    namespace: 'todos'
  };

  App.Store.localStore = {
    all: function() {
      var todos = localStorage[App.Store.namespace];
      return (!todos) ? []: JSON.parse(todos);
    },

    save: function(todo) {
      var todos = this.all();
      todos.push(todo);
      localStorage[App.Store.namespace] = JSON.stringify(todos);
    }
  };

})();
