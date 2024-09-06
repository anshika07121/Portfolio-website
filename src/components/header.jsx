import '../css/header.css';
import { useState } from 'react'
import { Navbar , Nav, Container} from 'react-bootstrap'
import Home from './home';
import About from './about';
import Contact from './contact';
import Skills from './skills';
import Project from './project';


const Header = ()=>{

    const [showHome, setShowHome] = useState('');
    const [showAbout, setShowAbout] = useState('');
    const [showSkills, setShowSkills] = useState('');
    const [showProjects, setShowProjects] = useState('');
    const [showContact , setShowContact] = useState('');

    const handleClickHome = ()=>{
      setShowHome(!showHome);
    }
    const handleClickAbout = ()=>{
      setShowAbout(!showAbout);
    }
    const handleClickSkills = ()=>{
      setShowSkills(!showSkills);
    }
    const handleClickProjects = ()=>{
      setShowProjects(!showProjects);
    }
    const handleClickContact = ()=>{
      setShowContact(!showContact);
    }

  return(

<>

<Navbar collapseOnSelect expand="lg" bg="info" variant="dark" className='abc'>
      <Container>
        <Navbar.Brand >My Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto float-end po">
            <Nav.Link href="#home" onClick={handleClickHome}>Home</Nav.Link> 
            <Nav.Link href="#about" onClick={handleClickAbout}>About</Nav.Link>  <br/>
            <Nav.Link href="#skills" onClick={handleClickSkills}>Skills</Nav.Link> <br/>
            <Nav.Link href="#projects" onClick={handleClickProjects}>Projects</Nav.Link> <br/>
            <Nav.Link href="#contact" onClick={handleClickContact}>Contact</Nav.Link> <br/>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    { showHome && <Home/>}
    { showAbout && <About/>}
    { showSkills && <Skills/>}
    { showProjects && <Project/>}
    { showContact && <Contact/>}
</>

  )
}
export default Header