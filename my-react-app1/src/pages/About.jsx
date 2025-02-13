import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import Card from '../components/Card.jsx'
import '../components/styles.css';

function About(){
    return(
        
        <div className = "about">
            <Header/>
            <div>
                
                <div>
                <h2 className="about-title2">About Me</h2>
                
                <p className = " about-para"> My name is Alec Namey, I am currently a student studying<br></br>
                    at the University of California, Santa Cruz orgianlly from San Diego California.
                    <br></br>I have experince with a multitude of tools and frameworks, and am currently
                    poslishing<br></br> my frontend expertice.   
                </p>
                <h2 className="languages-title">Languages</h2>
                <div className="languages">
                        <div className="language">
                            <span>Java</span>
                            <div className="progress-bar">
                                <div className="progress java"></div>
                            </div>
                        </div>
                        <div className="language">
                            <span>Python</span>
                            <div className="progress-bar">
                                <div className="progress python"></div>
                            </div>
                        </div>
                        <div className="language">
                            <span>C++</span>
                            <div className="progress-bar">
                                <div className="progress cpp"></div>
                            </div>
                        </div>
                        <div className="language">
                            <span>JavaScript</span>
                            <div className="progress-bar">
                                <div className="progress JavaScript"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <h2 className="skills-title2">Skills</h2>
                <div className="skills-title">
                    <div className="skills">
                            <div className="skill">
                                <span>SQL</span>
                                <div className="progress-bar">
                                    <div className="progress sql"></div>
                                </div>
                            </div>
                            <div className="skill">
                                <span>React</span>
                                <div className="progress-bar">
                                    <div className="progress react"></div>
                                </div>
                            </div>
                            <div className="skill">
                                <span>CSS</span>
                                <div className="progress-bar">
                                    <div className="progress css"></div>
                                </div>
                            </div>
                            <div className="skill">
                                <span>VS Code</span>
                                <div className="progress-bar">
                                    <div className="progress vs-code"></div>
                                </div>
                            </div>
                        </div>
                </div>
                <h2 className="Experience-Title">Work Experience</h2>
                <div className="experience-container">
                    <div className="job">
                        <h3 className="company">Trevet, San Diego, CA</h3>
                        <p className="job-date">Jan. 2024 - Sept. 2024</p>
                        <p className="job-title">Information Technology Intern</p>
                        <ul className="job-duties">
                            <li>Maintained user software and hardware companywide.</li>
                            <li>Monitored server health virtually and in person.</li>
                            <li>Assisted users with tech issues by troubleshooting.</li>
                            <li>Transitioned printers from a server-based system to a cloud-based solution via Azure.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <Card className = "about-card" ></Card>
            <Footer/>
        </div>
    );

}
export default About