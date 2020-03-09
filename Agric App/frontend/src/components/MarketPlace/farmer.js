import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import './MarketPlace.css';
import profile from '../../assets/img/profile.png';


export default class Farmer extends Component {
    constructor(props) {

        super(props);
        this.state = {
            show: false,
            setShow: false
        };
    }
    render() {


        const handleClose = () => this.setState({
            setShow: false,
            show: false
        });
        const handleShow = () => this.setState({
            setShow: true,
            show: true
        });
        return (
            <div>
                <div className="header">
                    <a href="#" className="mb-2 ml-2 mt-2 submit-query" onClick={handleShow}>POST A JOB</a>
                </div>
                {/* form */}

                <div class="search-fields">
                    <div class="multiple query">
                        <form class="queryForm-inline">
                            <div class="mobile-form">
                                <label for="location">
                                    <i class="fa fa-location"></i>
                                </label>
                                <input type="search" placeholder="Location" />
                            </div>
                            <label for="farm type">Farm Type:</label>
                            <select class="filter">
                                <option disabled value="Farm type">Farm type</option>
                                <option value="Fish Farm">Fish Farm</option>
                                <option value="Plantation">Plantation</option>
                                <option value="Snail Farm">Snail Farm</option>
                                <option value="Cattle">Cattle</option>
                                <option value="Poultry">Poultry</option>

                            </select>

                            <label for="experience">Experience </label>
                            <select class="filter">
                                <option disabled value="Years of experience">Years of experience</option>
                                <option value="1 Year">1 Year</option>
                                <option value="2 Years">2 Years</option>
                                <option value="3 Years">3 Years</option>
                                <option value="4 Years">4 Years</option>
                                <option value="5 Years">5 Years</option>
                            </select>

                            <input type="submit" value="Search" className="submit-query" />
                        </form>
                    </div>
                </div>
                {/* */}
                <div className="main container">
                    <h2 className="text-center mb-4">View Currently Available Farmers</h2>
                    <CardDeck>
                        <Card>
                            <Card.Img variant="top" src={profile} alt="farmer's picture" />
                            <Card.Body className="text-center">
                                <Card.Title>Sausi Sanusi</Card.Title>
                                <p class="text-warning">+2347090060001</p>
                                <Card.Text>

                                    <p>3 Years Farming Experience</p>
                                    <p>Yams, Tomatoes, Maize, Green Vegetables</p>
                                    <p>Weeding, Pesticide Application and Cultivation</p>
                                    <p><strong>&#8358; 1,000 - 10,000</strong></p>

                                </Card.Text>

                            </Card.Body>
                            <Card.Footer>
                                <div class="message">
                                    <small className="text-muted">
                                        <span><i className="fa fa-envelope"></i></span>
                                    </small> Send Message
                                   </div>
                            </Card.Footer>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src={profile} alt="farmer's picture" />
                            <Card.Body className="text-center">
                                <Card.Title>Salako Hammed</Card.Title>
                                <p className="text-warning">+2347090060001</p>
                                <Card.Text className="bio">
                                    <p>2 Years Farming Experience</p>
                                    <p>Fruits Farming</p>
                                    <p>Weeding, Pesticide Application and Cultivation</p>
                                    <p><strong>&#8358; 1,000 - 10,000</strong></p>

                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <div class="message">
                                    <small className="text-muted">
                                        <span><i className="fa fa-envelope"></i></span>
                                    </small> Send Message
                                   </div>
                            </Card.Footer>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src={profile} alt="farmer's picture" />
                            <Card.Body className="text-center">
                                <Card.Title>Ajah Chukwudi</Card.Title>
                                <p class="text-warning">+2347090060001</p>
                                <Card.Text >

                                    <p>1 Year Farming Experience</p>
                                    <p>Fish Farming</p>
                                    <p>Fishery only</p>
                                    <p><strong>&#8358; 10,000 and above</strong></p>
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>

                                <div class="message">
                                    <small className="text-muted">
                                        <span><i className="fa fa-envelope"></i></span>
                                    </small> Send Message
                                   </div>

                            </Card.Footer>
                        </Card>
                    </CardDeck>
                </div>

                <Modal show={this.state.show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Find A Farmer</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group controlId="formGroupLocation">
                                <Form.Label>Location</Form.Label>
                                <Form.Control type="text" placeholder="Enter location" />
                            </Form.Group>
                            <Form.Group controlId="formGroupSize">
                                <Form.Label>Farm Size (in hectares)</Form.Label>
                                <Form.Control type="text" placeholder="Password" />
                            </Form.Group>
                            <Form.Group controlId="formGroupDuration">
                                <Form.Label>Time Duration</Form.Label>
                                <Form.Control type="text" placeholder="How long is this hire for?" />
                            </Form.Group>
                            <Form.Group controlId="formGroupExperience">
                                <Form.Label>Experience</Form.Label>
                                <Form.Control as="select">
                                    <option>Less than a year</option>
                                    <option>1 year</option>
                                    <option>2 years</option>
                                    <option>3 years</option>
                                    <option>4 years</option>
                                    <option>5 years</option>
                                    <option>Less than a year</option>
                                    <option>Above 5 Years</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group controlId="formGroupCropType">
                                <Form.Label>Crop Type</Form.Label>
                                <Form.Control as="select">
                                    <option>Tomato</option>
                                    <option>Maize</option>
                                    <option>Yam</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group controlId="formGroupLanguage">
                                <Form.Label>Preferred Farmer's Language</Form.Label>

                                <Form.Control as="select" multiple>
                                    <option>English</option>
                                    <option>Hausa</option>
                                    <option>Igbo</option>
                                    <option>Yoruba</option>
                                    <option>Pidgin</option>
                                    <option>English and any other language</option>
                                </Form.Control>
                                <small>Hold the shift tab to select multiple languages</small>
                            </Form.Group>

                            <Form.Group controlId="formGroupOther">
                                <Form.Label>Other Specifications</Form.Label>
                                <Form.Control as="textarea" rows="3" />
                            </Form.Group>


                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
          </Button>
                        <Button variant="success" onClick={handleClose}>
                            Post Job
          </Button>
                    </Modal.Footer>
                </Modal>
            </div>


        );
    }
}
