/*
 * Create an new object on the Store object called localStore. Then add a
 * function property on that object called save that takes an object and
 * saves it to an array in localstorage (Javascript arrays
 * have a method called push to add items). Remember to save the array in
 * localStorage under the Store's namespace property.
 *
 * Then add a call to this save method in the Todo constructor and pass
 * it the todo that is being created. In order to keep the todo interface
 * consistant, use Todo's prototype object and set a property called
 * storage equal to App.Store.localStore. If you do this correctly,
 * you should be able to access it via this.storage inside the constructor.
*/

step(2, "Todo Model - Saving a Todo");

test("Todo create method an object in localStorage", function() {
  var ns = App.Store.namespace;
  localStorage.removeItem(ns);

  var t = new App.Todo('hello again');
  var db = JSON.parse(localStorage.getItem(ns));

  equal(db.length, 1, 'Todo was not saved to localStore');
});

test("Todo has an Id and completed properties", function() {
  var t = new App.Todo('best todo');
  var localt = JSON.parse(localStorage.getItem(App.Store.namespace))[0];
  ok(localt.hasOwnProperty('id'), 'Todo doesn\'t have an id');
  ok(localt.hasOwnProperty('completed'), 'Todo doesn\'t have completed property');
});
