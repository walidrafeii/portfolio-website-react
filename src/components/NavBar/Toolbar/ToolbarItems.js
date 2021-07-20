import React from 'react';

const ToolbarItems = ({ className }) => {
  return (
    <div className={className}>
      <ul className='toolbar-item'>
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

export default ToolbarItems;
