import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
 export default function Projects(){
     return(
        
        <section className="resume-section" id="projects">
        <div className="resume-section-content">
        <h2 className="mb-5">Projects</h2> 
        <div className="workContainer">

            <div className="card img_cont" id="card1">
                <a href="https://daliyaebenny.github.io/Movie-Search/" target="_blank">
                <img src="./assets/img/movie_catalog.png" alt="Project1"/>
                <div className="bottom-left">
                    <h3>Movie Catalog</h3>
                  
                   <a href ="https://github.com/daliyaebenny/Movie-Search.git" target="_blank"> <i className="fab fa-github"></i></a>
                </div>
                </a>
            </div>
        
        
            <div className="card img_cont">
                <a href="https://protected-falls-91774.herokuapp.com/login">
                <img src="./assets/img/music_trivia.png" alt="Project2"/>
                <div className="bottom-left">
                    <h3>Music Trivia 2.0</h3>
                   
                    <a href ="https://github.com/ChonaC/Project-2-MUSICTRIVIA.git" target="_blank"> <i className="fab fa-github"></i></a>
                </div>
                </a>
            </div>
               
            <div className="card img_cont">
                <a href="#">
                <img src="../assets/images/project2.jpg" alt="Project3"/>
                <div className="bottom-left">
                    <h2>Project 3</h2>
                    <p>HTML,CSS</p>
                </div>
                </a>
            </div>
        
        
            <div className="card img_cont">
                <a href="#">
                <img src="../assets/images/project2.jpg" alt="Project4"/>
                <div className="bottom-left">
                    <h2>Project 4</h2>
                    <p>HTML,CSS</p>
                </div>
                </a>
            </div>
        
        
            <div className="card img_cont">
                <a href="#">
                <img src="../assets/images/project2.jpg" alt="Project5"/>
                <div className="bottom-left">
                    <h2>Project 5</h2>
                    <p>HTML,CSS</p>
                </div>
                </a>
            </div>
        </div>
        </div>
    </section>
     );
 }