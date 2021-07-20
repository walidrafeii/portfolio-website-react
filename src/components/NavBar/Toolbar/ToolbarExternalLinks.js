import React from 'react';
import { RiLinkedinLine } from 'react-icons/ri';
import { AiFillGithub } from 'react-icons/ai';

const ToolbarExternalLinks = ({ className }) => {
  return (
    <div className={className}>
      <ul>
        <li>
          <a
            href='https://www.linkedin.com/in/wrafei/'
            target='_blank rel="noreferrer'
            rel='noreferrer'
          >
            <RiLinkedinLine size={40} className='social__media-icon' />
          </a>
        </li>
        <li>
          <a
            href='https://github.com/walidrafeii'
            target='_blank'
            rel='noreferrer'
          >
            <AiFillGithub size={40} className='social__media-icon' />
          </a>
        </li>
        <li>
          <a
            href='https://drive.google.com/file/d/1DmjUJ_uwM9NWoTyDEqcpfzdGzdgmH98H/view?usp=sharing'
            target='_blank'
            rel='noreferrer'
          >
            <button className='btn_hover-fill'>Resume</button>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ToolbarExternalLinks;
