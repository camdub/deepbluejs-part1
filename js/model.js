(function() {
  function Todo(title) {
    this.title = title.trim() || '';
    this.completed = false;
    this.id = new Date().getTime();
  }
  App.Todo = Todo;
}());
