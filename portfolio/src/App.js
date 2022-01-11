
import './App.css';
import Navbar from './components/Pages/Navbar';
import About from './components/Pages/About';
import Education from './components/Pages/Education';
import Experience from './components/Pages/Experience';
import Skills from './components/Pages/Skills';
import Projects from './components/Pages/Projects';

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
