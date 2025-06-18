import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavBar} from "./components/NavBar";
import {Banner} from "./components/Banner";
import {Skills} from "./components/Skills";
import {Projects} from "./components/Projects";
import {Contact} from "./components/Contact";
import {Education} from "./components/Education";
import {WorkExperience} from "./components/WorkExperience";
import {Footer} from "./components/Footer";
import {Certifications} from "./components/Certifications";

function App() {
    return (
        <div className="App">
            <NavBar />
            <Banner />
            <WorkExperience />
            <Education />
            <Skills />
            <Projects />
            <Certifications />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;