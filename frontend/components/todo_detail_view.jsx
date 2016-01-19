React = require('react');
ReactDOM = require('react-dom');

var TodoDetailView = React.createClass({

  handleClick: function () {

  },

  render: function () {
    var renderedContent = <div></div>;

    if (this.props.displayed) {
      renderedContent =
      <div>
        <div>{this.props.body}</div>
        <button className="delete" onClick={this.props.handleDestroy}>
          Delete
        </button>
      </div>;
    }


    return renderedContent;
  }
});

module.exports = TodoDetailView;
