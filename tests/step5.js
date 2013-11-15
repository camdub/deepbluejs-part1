/*
 * Render the list of Todos each time a Todo is created.
 *
 * 1. Create an all() method on the Todo object that will return all todos.
 * This should be a class method, not an instance method. It should
 * be a proxy to your store object, i.e., all it should do is call
 * a method with the same name on the localStore object. You will need to
 * use the Todo's prototype property to get the storage object.
 *
 * 2. Create an all() method on the Store.localStore object that returns a list
 * of todos from localStorage.
 *
 * 3. Create a new template in index.html, then use a jQuery selector to
 * cache the *compiled* template (use Handlebars.compile) with the name todoTemplate.
 *
        <li data-id="{{id}}">
          <div class="view"
            <input class="toggle" type="checkbox">
            <label>{{title}}</label>
            <button class="destroy"></button>
          </div>
          <input class="edit" value="{{title}}">
        </li>
 *
 * 4. Create a render method in app.js that gets all of the todos, pass the
 * list to the template function and then put the results into $todoList.
 */
step(5, 'Rendering Templates');

test('all() method returns the list of all todos', function() {
  new App.Todo('all');
  var list = App.Todo.all();
  ok($.isArray(list), 'Doesn\'t return a list');
  equal(list.length, JSON.parse(localStorage.getItem('test-todos')).length, 'returned different number or todos');
});

test('Template is cached', function() {
  ok(App.todoTemplate instanceof Function, 'todoTemplate is not a compiled Handlebars template');
});

test('Template rendered when a new Todo is created', function() {
  event = $.Event('keyup');
  event.keyCode = 13;
  event.which = event.keyCode;
  App.$newTodo.val('test todo');
  App.$newTodo.triggerHandler(event);

  equal(App.$todoList.children('li').length, 1, 'Todo template wasn\'t rendered');
});
