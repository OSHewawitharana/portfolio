import { Container, Row, Col } from "react-bootstrap";
import profile from "../assets/img/profile.jpg";
import { Download } from "react-bootstrap-icons";
import TrackVisibility from "react-on-screen";
import "../css/Banner.css";

export const Banner = () => {
    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                            {({ isVisible }) => (
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <h1>{`Hi, I'm Oshani! 👋`}</h1>
                                    <span className="tagline">Welcome to my Portfolio!</span>
                                    <p>
                                        I'm a dedicated Software Engineer with around 4 years of hands-on experience,
                                        mainly in the education and telecom industries. Specializing in Java and
                                        JavaScript, I thrive in agile teams and continuously aim to grow through
                                        professional development.
                                    </p>
                                    <button>
                                        <a href="/Oshani_Hewawitharana_Resume.pdf" target="_blank" rel="noopener noreferrer" download>
                                            Download Resume <Download size={25} />
                                        </a>
                                    </button>
                                </div>
                            )}
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <TrackVisibility>
                            {({ isVisible }) => (
                                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                                    <img src={profile} alt="Profile" />
                                </div>
                            )}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
