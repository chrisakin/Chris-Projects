import React, { Component } from 'react';
import './MarketPlace.css';
import farmer from '../../assets/img/farmer.png';
import tractor from '../../assets/img/tractor.png';
import watering from '../../assets/img/watering.png';
import { Link } from 'react-router-dom';

export default class Hire extends Component {
    render() {
        return (
            <div className="cloth">
                <div className="row content">
                    <div className="col-md-3">
                        <h1>Market
                            <br />Place</h1>

                    </div>
                    <div className="col-md-9">
                        <div className="wrapper container">
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="card-box">
                                        <img src={farmer} alt="Farmer" />
                                        <p className="title">Labour</p>

                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                                        <Link to="/farmer">
                                            <button className="learn-more">
                                                <span className="circle">
                                                    <span className="icon arrow"></span>
                                                </span>
                                                <span className="button-text">Explore</span>
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="card-box">
                                        <img src={tractor} alt="Tractor" />
                                        <p className="title">Equipments</p>

                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                                        <button className="learn-more">
                                            <span className="circle">
                                                <span className="icon arrow"></span>
                                            </span>
                                            <span className="button-text">Explore</span>
                                        </button>


                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="card-box">
                                        <img src={watering} alt="Watering" />
                                        <p className="title">Farm</p>

                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                                        <button className="learn-more">
                                            <span className="circle">
                                                <span className="icon arrow"></span>
                                            </span>
                                            <span className="button-text">Explore</span>
                                        </button>


                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}
