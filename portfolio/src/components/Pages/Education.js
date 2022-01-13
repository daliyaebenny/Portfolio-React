import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './style.css';
 export default function Education(){
     return (
        <section className="resume-section" id="education">
        <div className="resume-section-content">
            <h2 className="mb-5">Education</h2>
            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                <div className="flex-grow-1">
                    <h3 className="mb-0">Mahatma Gandhi University</h3>
                    <div className="subheading mb-3">Bachelor of Technology</div>
                    <div>Computer Science </div>
                    <p>GPA: 8.5</p>
                </div>
                <div className="flex-shrink-0"><span className="text-primary">2010 -2014</span></div>
            </div>
            
        </div>
        </section>

     );
 }