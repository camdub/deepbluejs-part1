/*global $, Store, window, App, Handlebars */
jQuery(function($) {
  'use strict';

  $.extend(App, {
    init: function() {
      this.cacheElements();
      this.bindEvents();
    },
    cacheElements: function() {
      this.$todoApp = $('#todoapp');
      this.$header = this.$todoApp.find('#header');
      this.$main = this.$todoApp.find('#main');
      this.$footer = this.$todoApp.find('#footer');
      this.$newTodo = this.$header.find('#new-todo');
      this.$toggleAll = this.$main.find('#toggle-all');
      this.$todoList = this.$main.find('#todo-list');
      this.$count = this.$footer.find('#todo-count');
      this.$clearBtn = this.$footer.find('#clear-completed');
    },

    bindEvents: function() {
      this.$newTodo.on('keyup', this.create);
    },

    create: function(e) {
      var $input = $(this);
      var val = $.trim($input.val());

      if(e.which !== 13 || !val) {
        return;
      }
      new App.Todo(val);

      $input.val('');
    }
  });

  App.init();
});
