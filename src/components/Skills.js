import java from "../assets/img/java.svg";
import php from "../assets/img/php.svg";
import html from "../assets/img/html.svg";
import css from "../assets/img/csslogo.svg";
import typescript from "../assets/img/typescript.svg";
import javascript from "../assets/img/javascript.svg";
import react from "../assets/img/react.svg";
import angular from "../assets/img/angular.svg";
import sb from "../assets/img/spring-boot.svg";
import laravel from "../assets/img/laravel.svg";
import mysql from "../assets/img/mysql.svg";
import postgresql from "../assets/img/postgresql.svg";
import dynamodb from "../assets/img/dynamodb.svg";
import microservice from "../assets/img/microservice.svg";
import docker from "../assets/img/docker.svg";
import aws from "../assets/img/aws.svg";
import githubAction from "../assets/img/github-action.svg";
import git from "../assets/img/git.svg";
import jira from "../assets/img/jira.svg";
import confluence from "../assets/img/confluence.svg";
import slack from "../assets/img/slack.svg";
import splunk from "../assets/img/splunk.svg";
import intelij from "../assets/img/intelij-ide.svg";
import bitbucket from "../assets/img/bit-bucket.svg";
import collaborator from "../assets/img/collaborator.svg";
import leadership from "../assets/img/leadership.svg";
import eventOrganizing from "../assets/img/event-organizing.svg";
import wellOrganized from "../assets/img/well-organized.svg";
import attentionToDetail from "../assets/img/attention-to-detail.svg";
import communicationSkill from "../assets/img/communication-skill.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"
import {Table} from "react-bootstrap";

export const Skills = () => {

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 8
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2
        }
    };

    const skillCategories = {
        "Programming Languages": [
            { name: "Java", logo: java },
            { name: "PHP", logo: php },
            { name: "JavaScript", logo: javascript },
            { name: "TypeScript", logo: typescript },
            { name: "HTML", logo: html },
            { name: "CSS", logo: css },
        ],
        "Frontend Frameworks": [
            { name: "React.js", logo: react },
            { name: "Angular", logo: angular },
        ],
        "Backend Frameworks": [
            { name: "Spring Boot", logo: sb },
            { name: "Laravel", logo: laravel },
        ],
        "Databases": [
            { name: "MySQL", logo: mysql },
            { name: "PostgresSQL", logo: postgresql },
            { name: "DynamoDB", logo: dynamodb },

        ],
        "Software Architecture": [
            { name: "Microservices", logo: microservice }
        ],
        "Cloud & CI/CD": [
            { name: "AWS", logo: aws },
            { name: "Github Action", logo: githubAction },
            { name: "Docker", logo: docker }
        ],
        "Version Control": [
            { name: "Git", logo: git },
            { name: "Jira", logo: jira },
            { name: "Bit Bucket", logo: bitbucket },
            { name: "Confluence", logo: confluence },
        ],
        "Other": [
            { name: "Splunk", logo: splunk },
            { name: "Slack", logo: slack },
            { name: "Intelij IDE", logo: intelij }
        ]
    };
    return (
        <section className="skill" id="skills">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx wow zoomIn">
                            <h2>Skills</h2>
                            <p>"Proficient in programming, frameworks, databases, and DevOps tools.
                                Experienced in building scalable applications, managing cloud services, and implementing efficient architectures."</p>

                            <Table striped bordered hover responsive>
                                <tbody>
                                {Object.entries(skillCategories).map(([category, skills]) => (
                                    <tr key={category}>
                                        <td className="text-left font-semibold">{category}</td>
                                        <td>
                                            <div className="d-flex flex-wrap gap-3">
                                                {skills.map((skill, index) => (
                                                    <div key={index} className="d-flex align-items-center gap-2">
                                                        <img src={skill.logo} alt={skill.name} className="skill-logo" width="30" height="30" />
                                                        <span>{skill.name}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </Table>

                            <h2>Soft Skills</h2>
                            <p>"Strong in teamwork, leadership, and communication.
                                Skilled in organizing, collaborating, and problem-solving to drive success in dynamic environments."</p>

                            <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                                <div className="item">
                                    <img src={communicationSkill} alt="Image" />
                                    <h5>Communication Skill</h5>
                                </div>
                                <div className="item">
                                    <img src={collaborator} alt="Image" />
                                    <h5>Collaborator</h5>
                                </div>
                                <div className="item">
                                    <img src={eventOrganizing} alt="Image" />
                                    <h5>Event Organizing</h5>
                                </div>
                                <div className="item">
                                    <img src={leadership} alt="Image" />
                                    <h5>Leadership</h5>
                                </div>
                                <div className="item">
                                    <img src={wellOrganized} alt="Image" />
                                    <h5>Well-Organized</h5>
                                </div>
                                <div className="item">
                                    <img src={attentionToDetail} alt="Image" />
                                    <h5>Attention To Details</h5>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
            <img className="background-image-left" src={colorSharp} alt="Image" />
        </section>
    );
}