import './App.css'
import About from './components/About/About';
import Contact from './components/contactme/Contact';
import Education from './components/Education/Education';
import Home from './components/Home/Home';
import Navbar from './components/NavBar/NavBar';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills/Skills';
import Footer from './components/Footer/Footer';



function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Education/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
