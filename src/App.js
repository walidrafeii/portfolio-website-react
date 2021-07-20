import './App.css';
import Toolbar from './components/Toolbar/Toolbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';
import { Component } from 'react';

class App extends Component {
  state = {
    SideDrawerOpen: false,
    width: 0,
    height: 0,
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { SideDrawerOpen: !prevState.SideDrawerOpen };
    });
  };

  closeDrawerHandler = () => {
    return this.setState({ SideDrawerOpen: false });
  };

  handleScreenResize = () => {
    if (this.state.width <= 720) {
      this.closeDrawerHandler();
    }
  };

  componentDidMount() {
    window.addEventListener('resize', this.handleScreenResize);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleScreenResize);
  }

  render() {
    let backdrop;
    if (this.state.SideDrawerOpen) {
      backdrop = <Backdrop closeSideDrawer={this.closeDrawerHandler} />;
    }
    return (
      <div style={{ height: '100%' }}>
        <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
        <SideDrawer
          closeSideDrawer={this.closeDrawerHandler}
          show={this.state.SideDrawerOpen}
        />
        {backdrop}
      </div>
    );
  }
}

export default App;
