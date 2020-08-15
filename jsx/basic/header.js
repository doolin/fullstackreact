class HeaderDiv extends React.Component {
  render () {
    return (
      <div>
        <Header
          headerText="Hello World!"
        />
      </div>
    );
  }
}

class Header extends React.Component {
  render () {
    return (
      <h1>{this.props.headerText}</h1>
    );
  }
}

var mountElement = document.getElementById('root');
ReactDOM.render(HeaderDiv, mountElement);
