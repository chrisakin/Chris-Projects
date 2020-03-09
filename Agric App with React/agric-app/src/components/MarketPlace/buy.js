import React from 'react';
import { Row, Col, Nav, } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab'

import Fruits from './fruits';

export default function Buy() {
    return (
        <div className="container">
            <Tab.Container id="left-tabs-example" defaultActiveKey="first" >
                <Row className="mt-4">
                    <Col sm={2} >
                        <input type="search" placeholder="Search" className="form-control" />
                        <Nav variant="pills" className="flex-column mt-4">
                            <Nav.Item>
                                <Nav.Link eventKey="first">Fruits and Vegetables</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Tuber and Roots</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">Livestock</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="fourth">Cash Crops</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="fifth">Grains and Cereals</Nav.Link>
                            </Nav.Item>

                        </Nav>

                    </Col>
                    <Col sm={10}>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <Fruits />
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <Fruits />
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </div>
    )
}
