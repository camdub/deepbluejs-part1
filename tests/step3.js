/*
 * Create jQuery Selectors for each of the elements. For the sake of the tests,
 * you should have selectors with the names below.
 *
 * Create a method called something like cacheElements and call it from the init
 * method. Define all your selectors in this method.
 *
 * In the tests we use the raw selector, but in your code you should use
 * the find method on the closest parent, i.e.,
 * #new-todo is closest parent is #header, so you should juse $header.find().
 */

step(3, "jQuery Selectors");

test("Verify that there are jQuery selectors", function() {
  // there are 9 selectors that should be present, tested 2x
  expect(18);

  for(var prop in App) {
    if(App[prop] instanceof Function || prop.indexOf('$') === -1) continue;
    ok(App[prop] instanceof jQuery, 'Not a jQuery object');
  }

  equal(App.$todoApp[0], $('#todoapp')[0], 'Todo app selector is incorrect');
  equal(App.$header[0], $('#header')[0], 'Todo app selector is incorrect');
  equal(App.$main[0], $('#main')[0], 'Todo app selector is incorrect');
  equal(App.$footer[0], $('#footer')[0], 'Todo app selector is incorrect');
  equal(App.$newTodo[0], $('#new-todo')[0], 'Todo app selector is incorrect');
  equal(App.$toggleAll[0], $('#toggle-all')[0], 'Todo app selector is incorrect');
  equal(App.$todoList[0], $('#todo-list')[0], 'Todo app selector is incorrect');
  equal(App.$count[0], $('#todo-count')[0], 'Todo app selector is incorrect');
  equal(App.$clearBtn[0], $('#clear-completed')[0], 'Todo app selector is incorrect');
});
