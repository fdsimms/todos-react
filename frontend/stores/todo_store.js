var _todos = [];
var _callbacks = [];

var TodoStore = {
  changed: function () {
    _callbacks.forEach(function (cb) {
      cb();
    });
  },

  addChangedHandler: function (handler) {
    _callbacks.push(handler);
  },

  removeChangedHandler: function (handler) {
    var index = _callbacks.indexOf(handler);
    if (index !== -1) {
      _callbacks.splice(index, 1);
    }
  },

  all: function () {
    return _todos;
  },

  fetch: function () {
    $.ajax({
      url: "/api/todos" ,
      type: "GET",
      dataType: "json",
      success: function (data) {
          _todos = data;
          TodoStore.changed();
      },
      error: function () {
        console.log("error");
      }
    });
  },

  create: function (todo) {

    $.ajax({
      url: "/api/todos",
      type: "POST",
      data: {todo: todo},
      dataType: "json",
      success: function (data) {
        _todos.push(data);
        TodoStore.changed();
      },
      error: function () {
        console.log("error");
      }
    });

  },

  destroy: function (id) {
    //use something else other than forEach? TODO
    _todos.forEach(function (todo, idx) {
      if (todo.id === id) {
        $.ajax({
          url: "/api/todos/" + id,
          type: "DELETE",
          dataType: "json",
          success: function (data) {
            _todos.splice(idx, 1);
            TodoStore.changed();
          },
          error: function () {
            console.log("error");
          }
        });
        return;
      }
    });
  },

  toggleDone: function (id) {
    var todo;
    _todos.forEach(function (el, idx) {
      if (el.id === id) {
        todo = el;
        todo.done = todo.done ? false : true;
        return;
      }
    });

    if (todo) {
      $.ajax({
        url: "/api/todos/" + id,
        type: "PATCH",
        dataType: "json",
        data: {todo: todo},
        success: function (data) {
          TodoStore.changed();
        },
        error: function () {
          console.log("error");
        }
      });
    }
  }
};

module.exports = TodoStore;
window.TodoStore = TodoStore;
