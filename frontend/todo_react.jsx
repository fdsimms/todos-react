React = require('react');
ReactDOM = require('react-dom');
TodoList = require('./components/todo_list');

var TodoReact = React.createClass({

  render: function () {
    return (
      <div>
        <TodoList />
      </div>
    );
  }

});

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<TodoReact />, document.getElementById('root'));
});
