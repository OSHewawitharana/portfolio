import {Container, Nav, Navbar } from "react-bootstrap";
import {useEffect, useState} from "react";

import logo from '../assets/img/logo.svg';
import linkedin from '../assets/img/linkedin.svg';
import github from '../assets/img/github.svg';
import email from '../assets/img/email.svg';
import {HashLink} from "react-router-hash-link";
import { BrowserRouter as Router } from "react-router-dom";
export const NavBar = () => {
    const [ activeLink, setActiveLink ] = useState("home");
    const [ scrolled, setScrolled ] = useState(false);

    const contactLinks = {
        linkedin: "https://www.linkedin.com/in/oshewawitharana/",
        github: "https://github.com/OSHewawitharana",
        email: "mailto:oshanihewawitharana@email.com"
    };

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <Router>
            <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
                <Container>
                    <Navbar.Brand href="/">
                        <img src={logo} alt="OH" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" >
                        <span className="navbar-toggler-icon"></span>
                    </Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                        </Nav>
                        <span className="navbar-text">
                        <div className="social-icon">
                            <a href={contactLinks.linkedin} target="_blank"  rel="noopener noreferrer"><img src={linkedin} alt="" /></a>
                            <a href={contactLinks.github} target="_blank"  rel="noopener noreferrer"><img src={github} alt="" /></a>
                            <a href={contactLinks.email}  rel="noopener noreferrer"><img src={email} alt="" /></a>
                        </div>
                         <HashLink to='#connect'>
                            <button className="vvd"><span>Let’s Connect</span></button>
                         </HashLink>
                    </span>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Router>

    );
}