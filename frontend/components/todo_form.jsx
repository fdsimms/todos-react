React = require('react');
ReactDOM = require('react-dom');
TodoStore = require('../stores/todo_store');

var TodoForm = React.createClass({
  getInitialState: function () {
    return {title: "", body: ""};
  },

  updateTitle: function (event) {
    this.setState({title: event.target.value});
  },

  updateBody: function (event) {
    this.setState({body: event.target.value});
  },

  handleSubmit: function (event) {
    event.preventDefault();
    TodoStore.create({title: this.state.title, body: this.state.body});
    this.setState({title: "", body: ""});
  },

  render: function () {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="title">
          <input id="title" type="text" value={this.state.title} onChange={this.updateTitle} />
        </label><br/>

        <label htmlFor="body">
          <input id="body" type="text" value={this.state.body} onChange={this.updateBody} />
        </label><br/>

        <input type="submit" value="Submit" />
      </form>
    );
  }

});

module.exports = TodoForm;
