$(function() {
  $('#qunit, #qunit-fixture').show();
});

function step(number, description, setup) {
  setup = setup || function() {};
  module("Step " + number + ": " + description, {
    setup: function() {
      App.Store.namespace = 'test-todos';
      setup.call();
    },
    teardown: function() {
      // reset localStorage for each test
      localStorage.removeItem('test-todos');
      $('#todo-list').html('');
    }
  });
}
