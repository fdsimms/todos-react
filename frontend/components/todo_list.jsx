React = require('react');
ReactDOM = require('react-dom');
TodoStore = require('../stores/todo_store.js');
TodoListItem = require('./todo_list_item');
TodoForm = require('./todo_form');

var TodoList = React.createClass({
  getInitialState: function () {
    return {todos: TodoStore.all()};
  },

  todosChanged: function () {
    this.setState({ todos: TodoStore.all()});
  },

  componentDidMount: function () {
    TodoStore.addChangedHandler(this.todosChanged);
    TodoStore.fetch();
  },

  componentWillUnmount: function () {
    TodoStore.removeChangedHandler(this.todosChanged);
    TodoStore.fetch();
  },

  render: function () {
    var todos = this.state.todos.map(function (el, idx) {
      return <TodoListItem
                  title={el.title}
                  body={el.body}
                  done={el.done}
                  key={idx}
                  itemId={el.id}>
                    {el.title}
              </TodoListItem>;
    });

    return (
          <div>
            <div className="todo-list">
              {todos}
            </div>
            <div className="form">
              <TodoForm />
            </div>
          </div>
    );
  }
});




module.exports = TodoList;
