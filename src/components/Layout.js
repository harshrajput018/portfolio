import Certifications from './Certifications';
import Skills from './Skills';
import Nav from './Nav';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from './Contact'
export default function Layout() {
    return (
      <div className="App">
        <Nav />
        
        <Home />
        <About />
        <Projects />
        <Certifications />
        <Skills />
        <Contact />
        
       
      </div>
    );
    }  