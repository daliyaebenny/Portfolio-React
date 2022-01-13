import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

export default function Navbar(){
    // window.addEventListener('DOMContentLoaded', event => {

    //     // Activate Bootstrap scrollspy on the main nav element
    //     const sideNav = document.body.querySelector('#sideNav');
    //     if (sideNav) {
    //         new bootstrap.ScrollSpy(document.body, {
    //             target: '#sideNav',
    //             offset: 74,
    //         });
    //     };
    
    //     // Collapse responsive navbar when toggler is visible
    //     const navbarToggler = document.body.querySelector('.navbar-toggler');
    //     const responsiveNavItems = [].slice.call(
    //         document.querySelectorAll('#navbarResponsive .nav-link')
    //     );
    //     responsiveNavItems.map(function (responsiveNavItem) {
    //         responsiveNavItem.addEventListener('click', () => {
    //             if (window.getComputedStyle(navbarToggler).display !== 'none') {
    //                 navbarToggler.click();
    //             }
    //         });
    //     });
    
    // });
 

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
        <a className="navbar-brand js-scroll-trigger" href="#page-top">
            <span className="d-block d-lg-none">Daliya Benny</span>
            <span className="d-none d-lg-block"><img className="img-fluid img-profile rounded-circle mx-auto mb-2" src="./assets/img/profile.JPG" alt="Profile picture of Daliya" /></span>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav">
                <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#about">About</a></li>
                <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#experience">Experience</a></li>
                <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#education">Education</a></li>
                <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#skills">Skills</a></li>
                <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#projects">Projects</a></li>
               
            </ul>
        </div>
    </nav>
    );
}