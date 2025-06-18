import {FaBriefcase} from "react-icons/fa";
import '../css/WorkExperience.css';

type ExperienceItem = {
    role: string;
    company: React.ReactNode;
    duration: string;
    description: React.ReactNode;
    technologies: string[];
};

const experienceData: ExperienceItem[] = [
    {
        role: "Software Engineer Intern",
        company: <><a href="https://www.altechdatasolutions.com/" target="_blank" rel="noopener noreferrer">Altech Data Solutions, Melbourne</a></>,
        companyDescription: "A technology-driven company specializing in software development, artificial intelligence, and IT solutions, empowering businesses with innovative and scalable digital transformation services.",
        duration: "Oct 2024 – Jan 2025",
        description:
            <>
                Projects: Insure-Wallet <br/>
                Optimized frontend by refactoring MUI components and implementing responsive UI, boosting engagement by 20%. Integrated Clerk for secure authentication, reducing login issues by 40%. Collaborated across teams to improve system performance and cut page load times by 25%.
            </>,
        technologies: ["React", "Python", "Material UI", "Ant Design", "Clerk Auth", "Slack", "Github"]
    },
    {
        role: "Software Engineer",
        company: <><a href="https://www.softcodeit.com/" target="_blank" rel="noopener noreferrer">Softcodeit Solutions Pvt Ltd, Sri Lanka</a></>,
        companyDescription: "An innovative technology company dedicated to delivering cutting-edge software solutions and IT services tailored to empower businesses and drive digital transformation",
        duration: "Nov 2021 – Dec 2022",
        description:
            <>
                Project: <a href="https://app.aimswebplus.com/" target="_blank" rel="noopener noreferrer">Aimsweb
                Plus</a> <br/>Developed key features like report generation and optimized SQL queries while leading
                security improvements that reduced vulnerabilities by over 60%. Collaborated across multiple time zones
                in an Agile environment, implemented automated testing with Cucumber, maintained Liquibase scripts, and
                upheld high coding standards through rigorous code reviews.
            </>,
        technologies: ["Java", "Spring Boot", "Angular", "REST APIs", "MySQL", "AWS", "Jira", "SCSS"]
    },
    {
        role: "Software Engineer",
        company: <><a href="https://www.x-venture.io/" target="_blank" rel="noopener noreferrer">X-Venture Global Solutions Pvt Ltd, Sri Lanka</a></>,
        duration: "May 2021 – Nov 2021",
        companyDescription: "A global technology partner offering comprehensive services, including strategic API consulting, enterprise architecture, system integration, business continuity, and product delivery, to empower digital transformations and deliver tomorrow's innovations today.",
        description:
        <>
            Projects: Nextgen Travel Portal <br/>
            Led cross-functional collaboration and mentored junior developers across three time zones, enhancing team efficiency and ensuring timely project delivery. Contributed to architectural design, implemented scalable solutions using design patterns, and optimized APIs, boosting productivity by 15% through maintainable code and CI practices.
        </>,
        technologies: ["Angular", "SCSS", "BEM", "CSS", "Spring Boot", "Java 11", "Microservices", "DynamoDB", "PostgreSQL", "AWS", "Kubernetes", "Jira"]
    },
    {
        role: "Software Engineer",
        company: <><a href="https://www.dialog.lk/" target="_blank" rel="noopener noreferrer">Dialog Axiata PLC, Sri Lanka</a></>,
        duration: "Oct 2019 – May 2021",
        companyDescription: "Sri Lanka's leading telecommunications service provider, delivering cutting-edge mobile, broadband, and digital solutions to millions, with a strong focus on innovation and technology-driven growth.",
        description:
            <>
                Projects: STO Automation (Automate the process related to standing orders which are done manually),
                OneCRM Admin, OneCRM dashboard (Feature-rich, light-weight, customizable, and user-friendly application
                used by internal departments to fetch data & do operations), OneCRM Hotline System (Feature-rich,
                light-weight, customizable, and user-friendly customer care system that is used by Dialog Calling
                center, Front-line staff & franchise staff) <br/>
                Developed and maintained high-performance full-stack APIs handling 50+ TPS, while automating STO
                processes to cut manual effort by 70%. Enhanced system reliability with Hystrix, improved usability
                through intuitive design, and ensured maintainable, error-resistant code through best practices and
                cross-functional collaboration.
            </>,
        technologies: ["Angular", "SCSS", "Spring Boot", "Microservices", "Oracle Database", "Jasper Reports", "Bitbucket", "Jira", "MySQL", "Grafana", "JsPdf"]
    },
    {
        role: "Trainee Software Engineer",
        company: <><a href="https://www.alliontechnologies.com/" target="_blank" rel="noopener noreferrer">Allion Technologies, Sri Lanka</a></>,
        duration: "Sept 2018 – Mar 201",
        companyDescription: "A trusted provider of innovative software development solutions, specializing in Artificial Intelligence, Data Engineering, DevOps, and Cloud Engineering to deliver high-impact, tailored services to global organizations, governments, and technology startups.",
        description:
            <>
                Project: <a href="https://am.sonet.com.au/" target="_blank" rel="noopener noreferrer">SoNET</a>
                <br/>Maintained and improved the Sonet exam management system by resolving bugs, adding new features,
                and ensuring PSR-2 compliance for better code consistency. As a trainee, contributed to system
                reliability and user satisfaction through efficient support implementation and adaptability in learning
                new technologies.
            </>,
        technologies: ["HTML", "CSS", "XML", "jQuery", "JavaScript", "PHP", "Yii Framework", "PostgreSQL", "XSS", "IIS Server", "Tortoise Git"]
    }
];

const otherExperiences = [
    {
        role: "Concierge",
        company: <><a href="https://www.ubmc.com.au/" target="_blank" rel="noopener noreferrer">UBMC (Unity Building Management & Concierge), Melbourne</a></>,
        duration: "Sep 2023 – Present",
        description: "Delivered exceptional front desk service by fostering a welcoming environment for guests and residents, efficiently managing inquiries, coordinating service visits, and handling security incidents with professionalism. Utilized MyBoss and RMS systems to streamline daily operations and ensure smooth facility management."
    }
];

export const WorkExperience = () => {
    return (
        <section className="experience-section" id="workExperience">
            <div className="experience-container">
                <h2 className="section-title">💼 Professional Experience</h2>
                <div className="timeline">
                    {experienceData.map((exp, index) => (
                        <div className="timeline-item" key={index}>
                            <div className="timeline-icon professional-icon">
                                <FaBriefcase/>
                            </div>
                            <div className="timeline-content">
                                <h3>{exp.role}</h3>
                                <h4>{exp.company}</h4>
                                <span className="duration">{exp.duration}</span>
                                <p>{exp.description}</p>
                                {exp.technologies && (
                                    <div className="tech-stack">
                                        {exp.technologies.map((tech, idx) => (
                                            <span key={idx} className="tech-badge">
                                              {tech}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                <h2 className="section-title-other">💼 Other Experience</h2>
                <div className="timeline-other">
                    {otherExperiences.map((exp, index) => (
                        <div className="timeline-item" key={index}>
                            <div className="timeline-icon other-icon">
                                <FaBriefcase/>
                            </div>
                            <div className="timeline-content-other">
                                <h3>{exp.role}</h3>
                                <h4>{exp.company}</h4>
                                <span className="duration">{exp.duration}</span>
                                <p>{exp.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
