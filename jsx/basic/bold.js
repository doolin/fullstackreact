// This script has to be run _after_ the DOM is loaded.
// The problem above was that I was loading the script
// in the header.
//
// If it's loaded in the header, it works in the console,
// but does not work when loaded from this file. It fails with
// `Uncaught Invariant Violation: Target container is not a DOM element.`

// index.html in this example
var mountElement = document.getElementById('root');

// Example 1 building from class works like so:
class Bold extends React.Component {
  render () {
    return React.createElement('b', null, 'Text from Bold class');
  }
}
ReactDOM.render(React.createElement(Bold, {}), mountElement)

// Example 2 also works, but will overwrite the previously
// mounted element from Example 1.
var boldElement = React.createElement('b', null, "Some text");
var h1Element = React.createElement('h1', null, "H1!");

ReactDOM.render([h1Element,boldElement], mountElement);
