class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      currentPage: 'home'
    };
  }

  onNavLinkClick(link) {
    this.setState({
      currentPage: link
    });
  }

  render() {
    if (this.state.currentPage === 'home') {
      return (
        <div className="container">
          <Nav 
            clickNavLink= { this.onNavLinkClick.bind(this) }
          />
          <Home />
        </div>
      );
    }
    if (this.state.currentPage === 'blog') {
      return (
        <div className="container">
          <Nav 
            clickNavLink= { this.onNavLinkClick.bind(this) }
          />
          <Blog />
        </div>
      );
    }
    if (this.state.currentPage === 'projects') {
      return (
        <div className="container">
          <Nav 
            clickNavLink= { this.onNavLinkClick.bind(this) }
          />
          <Projects />
        </div>
      );
    }
    if (this.state.currentPage === 'contacts') {
      return (
        <div className="container">
          <Nav 
            clickNavLink= { this.onNavLinkClick.bind(this) }
          />
          <Contacts />
        </div>
      );
    }
  }
}

window.App = App;