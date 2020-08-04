class HeaderDiv extends ReactComponent {
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

class Header extends ReactComponent {
  render () {
    return (
      <h1>{this.props.headerText}</h1>
    );
  }
}

var mountElement = document.getElementById('root');
ReactDOM.render(HeaderDiv, mountElement);
