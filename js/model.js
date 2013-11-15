(function() {
  function Todo(title) {
    this.title = title.trim() || '';
    this.completed = false;
    this.id = new Date().getTime();
    this.storage.save(this);
  }
  Todo.prototype.storage = App.Store.localStore;

  App.Todo = Todo;
}());
