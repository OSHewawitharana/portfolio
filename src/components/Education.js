import {Accordion} from "react-bootstrap";
import {ReactElement} from "react";
import '../css/Education.css';

type EducationItem = {
    degree: string;
    university: string;
    duration: string;
    highlights: string;
    extraCurricular: string;
    awards: string;
};

const educationData: EducationItem[] = [
    {
        degree: "Master of Information Technology",
        university: "Southern Cross University (SCU), Melbourne",
        duration: "2022 – 2024",
        units: "Programming IoT, Fundamentals of Cloud Computing, ",
        highlights: "CGPA: 6.00",
        awards: "Recognition of Academic Excellence in 2021",
        extraCurricular: "Member of Student Uni Mentor Program, Member of Student Representative Council"
    },
    {
        degree: "Bachelor of Science in Computer Science",
        university: "University of Colombo School of Computing (UCSC), Sri Lanka",
        duration: "2016 – 2019",
        units: "Automata Theory, HCI (Human Computer Interaction), Middleware, Networking, Project Management, Quality Assurance, Fundamental of Programming, Data Structures and Algorithm, Database, Computer Systems",
        extraCurricular: "Committee member of ISACA Student Group, Member of IEEE Student Group, Organizing committee member for various events including iHACK 1.0 and 2.0, iCloud 1.0, ICS conference"
    }
];

export const Education = (): ReactElement => {
    return (
        <section className="education-section" id="education">
            <h2 className="education-title">Education</h2>
            <Accordion defaultActiveKey="0" className="education-accordion">
                {educationData.map((edu, index): ReactElement => (
                    <Accordion.Item eventKey={index.toString()} key={index}>
                        <Accordion.Header>{edu.degree}</Accordion.Header>
                        <Accordion.Body>
                            <p><strong>University:</strong> {edu.university}</p>
                            <p><strong>Duration:</strong> {edu.duration}</p>
                            {edu.highlights && (
                                <p><strong>Highlights:</strong> {edu.highlights}</p>
                            )}

                            <p><strong>Unit:</strong> {edu.units}</p>
                            {edu.awards && (
                                <p><strong>Award:</strong> {edu.awards}</p>
                            )}
                            <p><strong>Extra-Curricular:</strong> {edu.extraCurricular}</p>
                        </Accordion.Body>
                    </Accordion.Item>
                ))}
            </Accordion>
        </section>
    );
};
