import { Container, Row, Col } from "react-bootstrap";
import profile from "../assets/img/profile.jpg";
import { Download } from 'react-bootstrap-icons';
import TrackVisibility from 'react-on-screen';
import {BrowserRouter as Router, Link} from "react-router-dom";

export const Banner = () => {

    return (
        <Router>
            <section className="banner" id="home">
                <Container>
                    <Row className="aligh-items-center">
                        <Col xs={12} md={6} xl={7}>
                            <TrackVisibility>
                                {({ isVisible }) =>
                                    <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                        <h1>{` Hi, I'm Oshani! 👋`}</h1>
                                        <span className="tagline">Welcome to my Portfolio!</span>
                                        <p>
                                            I'm a dedicated Software Engineer with around 04 years of
                                            hands-on experience mainly in the education and
                                            telecom industries. Specializes in Java and JavaScript, with
                                            a strong foundation in agile methodologies like Scrum.
                                            Committed to ongoing professional development and
                                            continuous learning.
                                        </p>
                                        <button onClick={() => console.log('connect')}>
                                            <Link to="/resume.pdf" target="_blank" download>Download Resume <Download size={25} /></Link>
                                        </button>
                                    </div>}
                            </TrackVisibility>
                        </Col>
                        <Col xs={12} md={6} xl={5}>
                            <TrackVisibility>
                                {({ isVisible }) =>
                                    <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                                        <img src={profile} alt="Profile"/>
                                    </div>}
                            </TrackVisibility>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Router>
    )
}