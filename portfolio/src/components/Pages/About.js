import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './style.css';

export default function About(){
    return (
            <section className="resume-section" id="about">
                <div className="resume-section-content">
                    <h1 className="mb-0">
                        Daliya
                        <span className="text-primary">Benny</span>
                    </h1>
                    <div className="subheading mb-5">
                        <h5>
                        <a href="mailto:daliyaebenny@gmail.com">daliyaebenny@gmail.com</a></h5>
                    </div>
                    <p className="lead mb-5">Full Stack web developer with almost  3 years of experience in developing Java web applications(REST API ).Worked as System Engineer in Infosys for a premium US Retail client on implementing their E Commerce project.Certificate in FullStack development by the University of Washington . Excellent verbal, written, interpersonal and organizational skills, with the ability to work in large initiatives. A strong sense of focus and excellent attention to detail while working in fast-paced environments with aggressive timelines. </p>
                    <div className="social-icons">
                        <a className="social-icon" href="https://www.linkedin.com/in/daliya-benny/"><i className="fab fa-linkedin-in"></i></a>
                        <a className="social-icon" href="https://github.com/daliyaebenny/"><i className="fab fa-github"></i></a>
                        <a className="social-icon" href="assets/resume.docx"><i className="far fa-file"></i></a>
                        
                    </div>
                </div>
            </section>

    );
}