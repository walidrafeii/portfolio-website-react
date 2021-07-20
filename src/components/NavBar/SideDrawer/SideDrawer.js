import React from 'react';
import ToolbarExternalLinks from '../Toolbar/ToolbarExternalLinks';
import ToolbarItems from '../Toolbar/ToolbarItems';
import { AiOutlineClose } from 'react-icons/ai';
import './SideDrawer.css';

const SideDrawer = (props) => {
  let drawerClasses = 'side-drawer';

  if (props.show) {
    drawerClasses = 'side-drawer open';
  }

  return (
    <nav className={drawerClasses}>
      <AiOutlineClose
        size={40}
        className='close-btn social__media-icon'
        onClick={props.closeSideDrawer}
      />
      <ToolbarItems
        className='side-drawer-items'
        closeSideDrawer={props.closeSideDrawer}
      />
      <ToolbarExternalLinks className='side-drawer-links' />
    </nav>
  );
};

export default SideDrawer;
