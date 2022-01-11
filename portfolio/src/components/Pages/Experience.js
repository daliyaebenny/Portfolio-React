import React from 'react';
export default function Experience(){
    return ( 
        
        <section className="resume-section" id="experience">
            <div className="resume-section-content">
                <h2 className="mb-5">Experience</h2>
                <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div className="flex-grow-1">
                        <h3 className="mb-0">Software Developer</h3>
                        <div className="subheading mb-3">Non- Profit organization,Bellevue,WA,USA</div>
                        <p>Web service for Login and registration module of an online education portal.</p>
                    </div>
                    <div className="flex-shrink-0"><span className="text-primary">2016 – 2017</span></div>
                </div>
                <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                    <div className="flex-grow-1">
                        <h3 className="mb-0">Systems Engineer</h3>
                        <div className="subheading mb-3">Infosys Ltd,Trivandrum,Kerala,India.</div>
                        <p>Java Rest API creation for shipcharge computation of a project build previously on IBM WCS platform.</p>
                    </div>
                    <div className="flex-shrink-0"><span className="text-primary">2014 – 2016</span></div>
                </div>   
            </div>
        </section>
      
        
    );
}