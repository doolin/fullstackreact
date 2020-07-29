class Bold extends React.Component {
  render () {
    return React.createElement('b');
  }
}

var mountElement = document.getElementById('root');
var boldElement = React.createElement('b');
ReactDOM.render(boldElement, mountElement)
// ReactDOM.render(React.createElement(Bold, {}), mountElement)