import { FaCertificate } from "react-icons/fa";
import { motion } from "framer-motion";
import "../css/Certifications.css";

type Certificate = {
    title: string;
    issuer: string;
    date: string;
    link?: string;
};

const certificates: Certificate[] = [
    {
        title: "Java Course Certificate",
        issuer: "Solo Learn",
        date: "Nov 2020",
        link: "https://www.sololearn.com/Certificate/CT-LVZRCLGX/pdf",
        type: "external"
    },
    {
        title: "IEEEXtreme Programming Competition 10.0",
        issuer: "IEEE",
        date: "Oct 2016",
        link: "/IEEE_Certificate.pdf",
        type: "internal"
    }
];

export const Certifications = () => {
    return (
        <section className="certificates-section">
            <h2 className="section-title-cert">
                <FaCertificate className="icon" /> Certificates
            </h2>
            <div className="certificates-grid">
                {certificates.map((cert, index) => (
                    <motion.div
                        key={index}
                        className="certificate-card"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="cert-title">{cert.title}</h3>
                        <p className="cert-issuer">{cert.issuer}</p>
                        <p className="cert-date">{cert.date}</p>
                        {cert.link && (
                            <a href={cert.link} target="_blank" rel="noopener noreferrer" className="cert-link">
                                View Certificate
                            </a>
                        )}
                    </motion.div>
                ))}
            </div>
        </section>
    );
};
