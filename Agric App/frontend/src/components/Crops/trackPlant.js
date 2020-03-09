import React, { useState, useEffect } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { Link } from 'react-router-dom';
import seed from '../../assets/img/seed.png';
import sprout from '../../assets/img/sprout.png';
import green from '../../assets/img/green.png';
import tomato from '../../assets/img/tomato.png';
import wateringCan from '../../assets/img/watering-can.png';
import './crops.css';

const TrackPlant = () => {
    const [now, setNow] = useState(0);
    let image =  <img
                    src={seed}
                    className="d-inline-block align-top crop-image"
                    alt="React Bootstrap logo"
                />;
    let status = 'Your tomato is germinating';
    let move = now;

    const moveProgressBar = () => {
        move += 5;

        if ( move <= 100) {
            return setNow(move);
        }

    }

    if (now > 30 && now < 100) {
        image =  <img
                    src={sprout}
                    className="d-inline-block align-top crop-image"
                    alt="React Bootstrap logo"
                />;
        status = 'Your plant is budding';
    }

    if (now > 60 && now < 100) {
        image =  <img
                    src={green}
                    className="d-inline-block align-top crop-image"
                    alt="React Bootstrap logo"
                />;
        status = 'Your plant is ripening';
    }

    if (now === 100) {
        image =  <img
                    src={tomato}
                    className="d-inline-block align-top crop-image"
                    alt="React Bootstrap logo"
                />;
        status = 'Your plant is ready for harvest';
    }

    if (now % 15 === 0 && now !== 0) {
        image =  <img
                    src={wateringCan}
                    className="d-inline-block align-top crop-image"
                    alt="React Bootstrap logo"
                />;
        status = 'Time to water your plant';
    }

    return (
        <div className="track">
           <h2 className="text-center">Track Your Plant Growth</h2>
           <div className="growth-image">
               {image} 
           </div>
           <p className="status text-center mt-3">
               {status}
           </p>
           <div className="progress-tracker">
                <div className="dates d-flex justify-content-between">
                    <p>16/11/2019</p>
                    <p>16/06/2020</p>
                </div>
                <ProgressBar animated now={now} />
           </div>
           <div className="d-flex justify-content-center">
                {now < 100 ?
                    <button className="btn text-white start-btn" onClick={moveProgressBar}>
                        Start
                    </button> :
                    <Link to="/buy">
                        <button className="learn-more sell-btn">
                            <span className="circle">
                                <span className="icon arrow"></span>
                            </span>
                            <span className="button-text">Sell</span>
                        </button>
                    </Link>
                }
           </div>
        </div>
    )
}

export default TrackPlant;
