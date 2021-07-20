import React from 'react';
import Toolbar from '../Toolbar/Toolbar';
import SideDrawer from '../SideDrawer/SideDrawer';
import Backdrop from '../../Backdrop/Backdrop';
class NavBar extends React.Component {
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

export default NavBar;
