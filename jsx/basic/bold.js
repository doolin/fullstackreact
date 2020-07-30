class Bold extends React.Component {
  render () {
    return React.createElement('b');
  }
}

// ReactDOM.render(React.createElement(Bold, {}), mountElement)

// This works in the console, but does not work
// when loaded from this file. It fails with
// `Uncaught Invariant Violation: Target container is not a DOM element.`
// Not sure what to do about it yet. I could read the React
// source code for help.
//
// This script has to be run _after_ the DOM is loaded.
// The problem above was that I was loading the script
// in the header.
var mountElement = document.getElementById('root');
var boldElement = React.createElement('b', null, "Some text");
ReactDOM.render(boldElement, mountElement);
