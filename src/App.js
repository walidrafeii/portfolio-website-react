import './App.css';
import { About } from './components/About/About';
import { Contact } from './components/Contact/Contact';
import { Home } from './components/Home/Home';
import NavBar from './components/NavBar/NavBar/NavBar';
import { Projects } from './components/Projects/Projects';

const App = () => {
  return (
    <div className='App'>
      <NavBar />
      <div className='content-container'>
        <Home />
        <About />
        <Projects />
        <Contact />
      </div>
    </div>
  );
};
export default App;
