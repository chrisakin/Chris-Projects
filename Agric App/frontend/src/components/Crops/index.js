import React from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import { Link } from 'react-router-dom';
import './crops.css';
import tomato from '../../assets/img/tomato.png';
import beans from '../../assets/img/beans.png';
import corn from '../../assets/img/corn.png';
import cabbage from '../../assets/img/cabbage.png';
import cucumber from '../../assets/img/cucumber.png';
import carrot from '../../assets/img/carrot.png';

const Crops = () => {
    return (
        <div className="crops">
            <div className="row content">
                <div className="col-md-3">
                    <h1>Crops</h1>

                </div>
                <div className="col-md-9">
                   <CardDeck className="row mb-5">
                        <Card className="col-md-4 text-center">
                            <Card.Img variant="top" src={tomato} alt="tomato" className="crop-image" />
                            <Card.Body>
                                <Card.Title>Tomatoes</Card.Title>
                                <Card.Text>
                                    Lorem ipsum dolor sit amet, consectetur 
                                    adipiscing elit, sed do eiusmod tempor incididunt
                                    ut labore et dolore magna aliqua
                                </Card.Text>
                                <Link to="/tomato">
                                    <button className="learn-more grow-btn">
                                        <span className="circle">
                                            <span className="icon arrow"></span>
                                        </span>
                                        <span className="button-text">Grow</span>
                                    </button>
                                </Link>
                            </Card.Body>
                        </Card>
                        <Card className="col-md-4 text-center">
                            <Card.Img variant="top" src={beans} alt="beans" className="crop-image" />
                            <Card.Body>
                                <Card.Title>Beans</Card.Title>
                                <Card.Text>
                                    Lorem ipsum dolor sit amet, consectetur 
                                    adipiscing elit, sed do eiusmod tempor incididunt
                                    ut labore et dolore magna aliqua
                                </Card.Text>
                                <Link to="/crops/beans">
                                    <button className="learn-more grow-btn">
                                        <span className="circle">
                                            <span className="icon arrow"></span>
                                        </span>
                                        <span className="button-text">Grow</span>
                                    </button>
                                </Link>
                            </Card.Body>
                        </Card>
                        <Card className="col-md-4 text-center">
                            <Card.Img variant="top" src={corn} alt="maize" className="crop-image" />
                            <Card.Body>
                                <Card.Title>Maize</Card.Title>
                                <Card.Text>
                                    Lorem ipsum dolor sit amet, consectetur 
                                    adipiscing elit, sed do eiusmod tempor incididunt
                                    ut labore et dolore magna aliqua
                                </Card.Text>
                                <Link to="/crops/maize">
                                    <button className="learn-more grow-btn">
                                        <span className="circle">
                                            <span className="icon arrow"></span>
                                        </span>
                                        <span className="button-text">Grow</span>
                                    </button>
                                </Link>
                            </Card.Body>
                        </Card>
                   </CardDeck>
                   <CardDeck className="row">
                        <Card className="col-md-4 text-center">
                            <Card.Img variant="top" src={cabbage} alt="cabbage" className="crop-image" />
                            <Card.Body>
                                <Card.Title>Cabbage</Card.Title>
                                <Card.Text>
                                    Lorem ipsum dolor sit amet, consectetur 
                                    adipiscing elit, sed do eiusmod tempor incididunt
                                    ut labore et dolore magna aliqua
                                </Card.Text>
                                <Link to="/crops/cabbage">
                                    <button className="learn-more grow-btn">
                                        <span className="circle">
                                            <span className="icon arrow"></span>
                                        </span>
                                        <span className="button-text">Grow</span>
                                    </button>
                                </Link>
                            </Card.Body>
                        </Card>
                        <Card className="col-md-4 text-center">
                            <Card.Img variant="top" src={cucumber} alt="cucumber" className="crop-image" />
                            <Card.Body>
                                <Card.Title>Cucumber</Card.Title>
                                <Card.Text>
                                    Lorem ipsum dolor sit amet, consectetur 
                                    adipiscing elit, sed do eiusmod tempor incididunt
                                    ut labore et dolore magna aliqua
                                </Card.Text>
                                <Link to="/crops/cucumber">
                                    <button className="learn-more grow-btn">
                                        <span className="circle">
                                            <span className="icon arrow"></span>
                                        </span>
                                        <span className="button-text">Grow</span>
                                    </button>
                                </Link>
                            </Card.Body>
                        </Card>
                        <Card className="col-md-4 text-center">
                            <Card.Img variant="top" src={carrot} alt="carrot" className="crop-image" />
                            <Card.Body>
                                <Card.Title>Carrot</Card.Title>
                                <Card.Text>
                                    Lorem ipsum dolor sit amet, consectetur 
                                    adipiscing elit, sed do eiusmod tempor incididunt
                                    ut labore et dolore magna aliqua
                                </Card.Text>
                                <Link to="/crops/carrot">
                                    <button className="learn-more grow-btn">
                                        <span className="circle">
                                            <span className="icon arrow"></span>
                                        </span>
                                        <span className="button-text">Grow</span>
                                    </button>
                                </Link>
                            </Card.Body>
                        </Card>
                   </CardDeck>
                </div>
            </div>
        </div>
    )
}

export default Crops;
