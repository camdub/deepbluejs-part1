/*
 * Bind event handler to create a new Todo by pressing Enter.
 *
 * Create a method called bindEvents. In that method create a
 * jQuery event handler bound to the keyup jQuery event. The handler should
 * call a method on App that creates a new todo and then clears the text
 * field. Only save the Todo if there is text in the input (no blank todos).
 * (Gotacha here with the value of 'this' in the event handler).
 */

step(4, 'jQuery Event Handling - Part 1', function() {
  event = $.Event('keyup');
  event.keyCode = 13;
  event.which = event.keyCode;
  App.$newTodo.val('test todo');
  App.$newTodo.triggerHandler(event);
});

test('Input cleared on pressing Enter', function() {
  equal(App.$newTodo.val(), '', 'Input field not cleared out on submit');
});

test('Todo is successfully created', function() {
  var todos = JSON.parse(localStorage.getItem('test-todos'));
  equal(todos.length, 1, 'Todo was not created');
  equal(todos[0].title, 'test todo', 'Todo title doesn\'t match after creation');
});

test('Todo can\'t have a blank title', function() {
  App.$newTodo.val('');
  App.$newTodo.trigger(event);
  var todos = JSON.parse(localStorage.getItem('test-todos'));
  equal(todos.length, 1, 'Todo was created with a blank title');
});
