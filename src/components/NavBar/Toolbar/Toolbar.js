import React from 'react';
import ToolbarExternalLinks from './ToolbarExternalLinks';
import ToolbarItems from './ToolbarItems';
import logo from '../../../static/images/Memoji-Icon.png';
import './Toolbar.css';
import { AiOutlineBars } from 'react-icons/ai';

class Toolbar extends React.Component {
  constructor() {
    super();
    this.state = {
      show: true,
      scrollPos: 0,
    };
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    this.setState({
      scrollPos: document.body.getBoundingClientRect().top,
      show: document.body.getBoundingClientRect().top > this.state.scrollPos,
    });
  };

  render() {
    return (
      <header className='toolbar__header'>
        <nav className={this.state.show ? 'active' : 'hidden'}>
          <img className='toolbar__logo' src={logo} alt='Logo' />
          <ToolbarItems className='toolbar_navigation-items' />
          <ToolbarExternalLinks className='toolbar_external-links' />
          <AiOutlineBars
            className='hamburger_icon'
            size={30}
            onClick={this.props.drawerClickHandler}
          />
        </nav>
      </header>
    );
  }
}

export default Toolbar;
