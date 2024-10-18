import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from'react-router-dom';

function Intro() {
    return (
        
        //         <div className="d-flex flex-column align-items-center justify-content-center py-5 vh-100">

        
        <div className="d-flex flex-column align-items-center justify-content-center py-5 vh-100">
            <div>
                <p className="text-warning align-items-left">Hello, my name is</p>
                <h1 className="display-4 fs-1 fw-bold text-secondary mb-3">Colin Douglas</h1>
                <h2 className="h6 text-muted mb-3">I am a Full-Stack Developer</h2>
                <p className="fs-sm mb-4">
                    I specialize in building and designing unique digital experiences. Currently, I am focused on
                    building responsive full-stack web applications
                </p>
            </div>
            <div>
                <Link to ='/portfolio'>
                <button className="btn btn-warning btn-lg px-4 py-3">
                    <span>See My Work </span>
                    <HiArrowNarrowRight />
                </button>
                </Link>
            </div>



        </div>
        
       
    );
}

export default Intro;