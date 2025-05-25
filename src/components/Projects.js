import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import colorSharp2 from "../assets/img/color-sharp2.png";
import TrackVisibility from 'react-on-screen';
import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

export const Projects = () => {

    const wireframes = [
        { original: "/asset_mgt/Add apartment.png", thumbnail: "/asset_mgt/Add apartment.png" },
        { original: "/asset_mgt/Add apartment inventory.png", thumbnail: "/asset_mgt/Add apartment inventory.png" },
        { original: "/asset_mgt/Add asset.png", thumbnail: "/asset_mgt/Add asset.png" },
        { original: "/asset_mgt/Add assets.png", thumbnail: "/asset_mgt/Add assets.png" },
        { original: "/asset_mgt/Add asset type.png", thumbnail: "/asset_mgt/Add asset type.png" },
        { original: "/asset_mgt/Add Storage Cage.png", thumbnail: "/asset_mgt/Add apartment.png" },
        { original: "/asset_mgt/Add inventory.png", thumbnail: "/asset_mgt/Add inventory.png" },
        { original: "/asset_mgt/Add Storage Cage Inventory.png", thumbnail: "/asset_mgt/Add Storage Cage Inventory.png" },
        { original: "/asset_mgt/Add Storage Location - Apartment.png", thumbnail: "/asset_mgt/Add Storage Location - Apartment.png" },
        { original: "/asset_mgt/Add Storage Location - Other.png", thumbnail: "/asset_mgt/Add Storage Location - Other.png" },
        { original: "/asset_mgt/Add Storage Location - Storage Cage.png", thumbnail: "/asset_mgt/Add Storage Location - Storage Cage.png" },
        { original: "/asset_mgt/Add Storage Location View 1.png", thumbnail: "/asset_mgt/Add Storage Location View 1.png" },
        { original: "/asset_mgt/Add Storage Location View 2.png", thumbnail: "/asset_mgt/Add Storage Location View 2.png" },
        { original: "/asset_mgt/Add to apartment.png", thumbnail: "/asset_mgt/Add to apartment.png" },
        { original: "/asset_mgt/Add to Storage Cage.png", thumbnail: "/asset_mgt/Add to Storage Cage.png" },
        { original: "/asset_mgt/Choose to move asset.png", thumbnail: "/asset_mgt/Choose to move asset.png" },
        { original: "/asset_mgt/Delete Asset.png", thumbnail: "/asset_mgt/Delete Asset.png" },
        { original: "/asset_mgt/Delete asset inventory.png", thumbnail: "/asset_mgt/Delete asset inventory.png" },
        { original: "/asset_mgt/Delete asset type.png", thumbnail: "/asset_mgt/Delete asset type.png" },
        { original: "/asset_mgt/Home view.png", thumbnail: "/asset_mgt/Home view.png" },
        { original: "/asset_mgt/Home_New.png", thumbnail: "/asset_mgt/Home_New.png" },
        { original: "/asset_mgt/Login.png", thumbnail: "/asset_mgt/Login.png" },
        { original: "/asset_mgt/Move Asset History.png", thumbnail: "/asset_mgt/Move Asset History.png" },
        { original: "/asset_mgt/Update asset.png", thumbnail: "/asset_mgt/Update asset.png" },
        { original: "/asset_mgt/View asset type.png", thumbnail: "/asset_mgt/View asset type.png" },
        { original: "/asset_mgt/View assets.png", thumbnail: "/asset_mgt/View assets.png" },
        { original: "/asset_mgt/View assets inventory.png", thumbnail: "/asset_mgt/View assets inventory.png" },
        { original: "/asset_mgt/View storage cage.png", thumbnail: "/asset_mgt/View storage cage.png" },
        { original: "/asset_mgt/View storage count.png", thumbnail: "/asset_mgt/View storage count.png" },
    ];

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                                    <h2>Projects</h2>
                                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                            {/*<Nav.Item>*/}
                                            {/*    <Nav.Link eventKey="first">Tab 1</Nav.Link>*/}
                                            {/*</Nav.Item>*/}
                                            <Nav.Item>
                                                <Nav.Link eventKey="second" active>UI/UX Wireframes</Nav.Link>
                                            </Nav.Item>
                                            {/*<Nav.Item>*/}
                                            {/*    <Nav.Link eventKey="third">Tab 3</Nav.Link>*/}
                                            {/*</Nav.Item>*/}
                                        </Nav>
                                        <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                                            <Tab.Pane eventKey="first">

                                            </Tab.Pane>
                                            <Tab.Pane eventKey="second">
                                                <Row>
                                                    <div className="p-4">
                                                        <h2 className="text-2xl font-semibold mb-4">Asset Management System</h2>
                                                        <p className="text-2xl font-semibold mb-4">Designed intuitive wireframes using Balsamiq to enhance user experience and improve navigation flow. The designs focus on usability, accessibility, and modern UI principles.</p>

                                                        <p>I designed these wireframes for a standalone application based on client requirements. Throughout the process, I presented the designs to the client for feedback and iterated on them accordingly, making necessary adjustments to align with their vision and needs.</p>
                                                        <ImageGallery items={wireframes} showPlayButton={false} showFullscreenButton={true} />
                                                    </div>
                                                </Row>
                                            </Tab.Pane>
                                            {/*<Tab.Pane eventKey="third">*/}
                                            {/*    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>*/}
                                            {/*</Tab.Pane>*/}
                                        </Tab.Content>
                                    </Tab.Container>
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} alt="Decorative background" />
        </section>
    )
}