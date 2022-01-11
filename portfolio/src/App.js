import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
     <Navbar/> 
     <About/>
     <Education/>
     <Experience/>
     <Skills/>
     <Projects/>
    </div>
  );
}

export default App;
