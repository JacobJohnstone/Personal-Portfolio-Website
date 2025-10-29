import styles from "./contact.module.css";
import gmailIcon from "../../images/gmailIcon.webp";
import linkedinIcon from "../../images/linkedinIcon.webp";
import resumeIcon from "../../images/resumeIcon.png";

const Contact = () => {
    return (
        <section id="contact" className={styles.contactSection}>
            <h2 className={styles.sectionTitle}>Get In Touch</h2>
            <div className={styles.contactContent}>
                <p className={styles.contactText}>
                    I'm always open to discussing new opportunities, interesting
                    projects, or just connecting!
                </p>
                <div className={styles.contactLinks}>
                    <a
                        href="mailto:your.email@example.com"
                        className={styles.contactLink}
                        aria-label="Send email">
                        <img
                            src={gmailIcon}
                            alt="Email"
                            className={styles.contactIcon}
                        />
                        <span>Email</span>
                    </a>
                    <a
                        href="https://linkedin.com/in/your-profile"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.contactLink}
                        aria-label="LinkedIn profile">
                        <img
                            src={linkedinIcon}
                            alt="LinkedIn"
                            className={styles.contactIcon}
                        />
                        <span>LinkedIn</span>
                    </a>
                    <a
                        href="/assets/resume/Jacob-Johnstone-Resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.contactLink}
                        aria-label="View resume">
                        <img
                            src={resumeIcon}
                            alt="Resume"
                            className={styles.contactIcon}
                        />
                        <span>Resume</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;
