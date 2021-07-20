import React from 'react';

const ToolbarItems = (props) => {
  console.log(props);
  const handleclick = (element) => {
    document.getElementById(element).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
    props.closeSideDrawer();
  };
  return (
    <div className={props.className}>
      <ul className='toolbar-item'>
        <li onClick={() => handleclick('home')}>Home</li>
        <li onClick={() => handleclick('about')}>About</li>
        <li onClick={() => handleclick('projects')}>Projects</li>
        <li onClick={() => handleclick('contact')}>Contact</li>
      </ul>
    </div>
  );
};

export default ToolbarItems;
