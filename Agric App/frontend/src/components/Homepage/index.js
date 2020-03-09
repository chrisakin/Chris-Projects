import React from 'react';
import './homepage.css';
import { Link } from 'react-router-dom';

const Homepage = () => {
    return (
        <div className="homepage">
            <div>
             <h1>Learn, Grow, and Earn <br/>from Farming</h1>
            </div>
            <div className="h1text">
                <p>
                Learn all you need to know to get you from novice to an expert farmer. Get all the knowledge, tools, and business connects with Farmly.
                </p>
            </div>
            <Link to="/crops">
                <button className="learn-more getstarted-btn">
                    <span className="circle">
                        <span className="icon arrow"></span>
                    </span>
                    <span className="button-text">Get Started</span>
                </button>
            </Link>
        </div>
    )
}

export default Homepage;