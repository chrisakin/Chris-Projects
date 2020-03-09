import React, { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import tomato from '../../assets/img/tomato.png';
import StartPlantingForm from './startPlantingForm';
import './crops.css';

const Tomato = () => {
    const [modalShow, setModalShow] = useState(false);
    
    return (
        <div className="tomato">
            <div className="d-flex justify-content-center mb-4">
                <img
                    src={tomato}
                    className="d-inline-block align-top crop-image"
                    alt="React Bootstrap logo"
                />
                <h2>Tomato</h2>
            </div>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row className="details">
                    <Col sm={3} className="p-0">
                    <Nav variant="pills" className="flex-column">
                        <Nav.Item>
                            <Nav.Link eventKey="first">About</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="second">Best Practices</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="third">Market Place</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    </Col>
                    <Col sm={9} className="p-0">
                    <Tab.Content>
                        <Tab.Pane className="tab-details" eventKey="first">
                            <div className="text_boz">
                                <h4>Overview</h4>
                                <p>The tomato is the edible, often red, berry of the plant Solanum lycopersicum, commonly known as a tomato plant. The species originated in western South America and Central America.  </p>
                            </div>
                            <div className="text_boz">
                                <h5>Why should you plant Tomatoes?</h5>
                                <p>The tomato is the edible, often red, berry of the plant Solanum lycopersicum, commonly known as a tomato plant. The species originated in western South America and Central America.  </p>
                            </div>
                            <div className="text_boz">
                                <h5>Technical Stuff</h5>
                                <p>The tomato is the edible, often red, berry of the plant Solanum lycopersicum, commonly known as a tomato plant. The species originated in western South America and Central America.  </p>
                            </div>

                        </Tab.Pane>
                        <Tab.Pane className="tab-details" eventKey="second">
                        <div className="text_boz">
                                <h5>Planting</h5>
                                <p>The tomato is the edible, often red, berry of the plant Solanum lycopersicum, commonly known as a tomato plant. The species originated in western South America and Central America.  </p>
                            </div>
                            <div className="text_boz">
                                <h5>Monitoring</h5>
                                <p>The tomato is the edible, often red, berry of the plant Solanum lycopersicum, commonly known as a tomato plant. The species originated in western South America and Central America.  </p>
                            </div>
                            <div className="text_boz">
                                <h5>Harvesting</h5>
                                <p>The tomato is the edible, often red, berry of the plant Solanum lycopersicum, commonly known as a tomato plant. The species originated in western South America and Central America.  </p>
                            </div>
                            <div className="text_boz">
                                <h5>Location & Soil Type</h5>
                                <p>The tomato is the edible, often red, berry of the plant Solanum lycopersicum, commonly known as a tomato plant. The species originated in western South America and Central America.  </p>
                            </div>
                            <div className="text_boz">
                                <h5>Peak Seasons</h5>
                                <p>The tomato is the edible, often red, berry of the plant Solanum lycopersicum, commonly known as a tomato plant. The species originated in western South America and Central America.  </p>
                            </div>
                            <div className="text_boz">
                                <h5>Greenhouse Planting</h5>
                                <p>The tomato is the edible, often red, berry of the plant Solanum lycopersicum, commonly known as a tomato plant. The species originated in western South America and Central America.  </p>
                            </div>
                          
                        </Tab.Pane>
                        <Tab.Pane className="tab-details" eventKey="third">
                            <div className="text_boz">
                                <h5>Things to look out for in the market place</h5>
                            </div>
                            <div className="text_boz">
                                <h5>Seeds</h5>
                                <p>The tomato is the edible, often red, berry of the plant Solanum lycopersicum, commonly known as a tomato plant. The species originated in western South America and Central America.  </p>
                            </div>
                            <div className="text_boz">
                                <h5>Fertilizers</h5>
                                <p>The tomato is the edible, often red, berry of the plant Solanum lycopersicum, commonly known as a tomato plant. The species originated in western South America and Central America.  </p>
                            </div>
                            <div className="text_boz">
                                <h5>Equipment</h5>
                                <p>The tomato is the edible, often red, berry of the plant Solanum lycopersicum, commonly known as a tomato plant. The species originated in western South America and Central America.  </p>
                            </div>
                            <div className="text_boz">
                                <h5>Land</h5>
                                <p>The tomato is the edible, often red, berry of the plant Solanum lycopersicum, commonly known as a tomato plant. The species originated in western South America and Central America.  </p>
                            </div>
                            <div className="text_boz">
                                <h5>Labour</h5>
                                <p>The tomato is the edible, often red, berry of the plant Solanum lycopersicum, commonly known as a tomato plant. The species originated in western South America and Central America.  </p>
                            </div>
                            <div className="text_boz">
                                <h5>Market Rate</h5>
                                <p>The tomato is the edible, often red, berry of the plant Solanum lycopersicum, commonly known as a tomato plant. The species originated in western South America and Central America.  </p>
                            </div>
                            <div className="text_boz">
                                <h5>Planting Budget</h5>
                                <p>The tomato is the edible, often red, berry of the plant Solanum lycopersicum, commonly known as a tomato plant. The species originated in western South America and Central America.  </p>
                            </div>
                           
                        </Tab.Pane>
                    </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
            <ButtonToolbar className="grow-btn-container">
                <button className="learn-more grow-btn" onClick={() => setModalShow(true)}>
                    <span className="circle">
                        <span className="icon arrow"></span>
                    </span>
                    <span className="button-text">Start Planting</span>
                </button>

                <StartPlantingForm
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
            </ButtonToolbar>
        </div>
    )
}

export default Tomato;
