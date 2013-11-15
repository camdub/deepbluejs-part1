/*
 * Create a Todo constructor function in model.js that takes a title
 * as a parameter, then sets an ID property and a completed property.
 * The ID can be what ever you want as long as it's unique (a good idea
 * would be to use new Date().getTime()).
 */

step(1, 'Todo Model - Constructor');

test("Todo contsructor creats an object with title, id, and completed properties", function() {
  var t = new App.Todo('testing title');
  ok(t.title === 'testing title', 'Title wasn\'t set');
  ok(t.completed === false, 'Completed property wasn\'t set to false');
  ok(t.hasOwnProperty('id'), 'Id property was not set');
});
