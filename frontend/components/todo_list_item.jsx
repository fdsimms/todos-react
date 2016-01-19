React = require('react');
ReactDOM = require('react-dom');
TodoDetailView = require('./todo_detail_view');

var TodoListItem = React.createClass({
  getInitialState: function () {
    return {displayed: false};
  },

  handleDestroy: function () {
    TodoStore.destroy(this.props.itemId);
  },

  handleDone: function () {
    TodoStore.toggleDone(this.props.itemId);
  },

  handleClick: function () {
    var displayed = this.state.displayed ? false : true;
    this.setState({displayed: displayed});
  },

  render: function () {
    var symbol = this.props.done ? "x" : "✓";

    return(
            <div>
              <div onClick={this.handleClick}>{this.props.title}</div>
              <br />
              <TodoDetailView
                body={this.props.body}
                displayed={this.state.displayed}
                handleDestroy={this.handleDestroy}/>

              <button className="toggleDone" onClick={this.handleDone}>
                	{symbol}
              </button>
            </div>
    );
  }
});

module.exports = TodoListItem;
