
import './App.css';
import Home from './components/Home';
import About from './components/About';
import SocialLinks from './components/SocialLinks';
import Projects from './components/Projects';
 import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

function App() {
  return ( 
    <>
  <Home/>
  <About/>
  <Projects/>
    </>
  )
}

export default App;
