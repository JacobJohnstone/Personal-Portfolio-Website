import styles from "./contact.module.css";

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
                        href="mailto:jjohnstone681@gmail.com"
                        className={styles.contactLink}
                        aria-label="Send email"
                    >
                        <img
                            src="/assets/images/socials/gmailIcon.webp"
                            alt="Email"
                            className={styles.contactIcon}
                        />
                        <span>Email</span>
                    </a>
                    <a
                        href="https://linkedin.com/in/jacobjohnstone"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.contactLink}
                        aria-label="LinkedIn profile"
                    >
                        <img
                            src="/assets/images/socials/linkedinIcon.webp"
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
                        aria-label="View resume"
                    >
                        <img
                            src="/assets/images/socials/resumeIcon.png"
                            alt="Resume"
                            className={styles.contactIcon}
                        />
                        <span>Resume</span>
                    </a>
                    <a
                        href="https://github.com/jacobjohnstone"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.contactLink}
                        aria-label="GitHub profile"
                    >
                        <img
                            src="/assets/images/technologies/githubIcon.png"
                            alt="GitHub"
                            className={styles.contactIcon}
                        />
                        <span>GitHub</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;
