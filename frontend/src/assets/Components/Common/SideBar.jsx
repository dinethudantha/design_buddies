import React from 'react'
import { Container, Row, Col, Nav, Accordion, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
function SideBar() {
    return (
        <>
            <aside className="sidebar right-shadow p-3 pt-0">
                <div className="logo-sec border-bottom d-flex align-items-center ">
                    <div className="brand d-flex align-items-center">
                        <div className="logo-circle">D</div>
                        <h5 className="mb-0 ms-2">Design Buddies</h5>
                    </div>
                </div>
                <div className="nav-items">
                    <Accordion defaultActiveKey="0" >
                        <div className="label">Main Home</div>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header className="nav-item"><i class="ri-dashboard-line"></i> Dashboard </Accordion.Header>
                            <Accordion.Body>
                                <Nav className="flex-column">
                                    <Nav.Link href="#link1">Sub-item 1.1</Nav.Link>
                                </Nav>
                            </Accordion.Body>
                        </Accordion.Item>
                        <div className="label">All Page</div>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header className="nav-item"><i class="ri-shopping-cart-line"></i> Ecommerce </Accordion.Header>
                            <Accordion.Body>
                                <Nav className="flex-column">
                                    <Nav.Link href="#link1">Add Product</Nav.Link>
                                    <Nav.Link href="#link1">Product List</Nav.Link>
                                </Nav>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header className="nav-item"><i class="ri-stack-line"></i> Category </Accordion.Header>
                            <Accordion.Body>
                                <Nav className="flex-column">
                                    <Nav.Link href="#link1">Category List</Nav.Link>
                                    <Nav.Link href="#link1">New Category</Nav.Link>
                                </Nav>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header className="nav-item"><i class="ri-box-3-line"></i> Attributes </Accordion.Header>
                            <Accordion.Body>
                                <Nav className="flex-column">
                                    <Nav.Link href="#link1">Attributes</Nav.Link>
                                    <Nav.Link href="#link1">Add Attributes</Nav.Link>
                                </Nav>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4">
                            <Accordion.Header className="nav-item"><i class="ri-file-add-line"></i> Order</Accordion.Header>
                            <Accordion.Body>
                                <Nav className="flex-column">
                                    <Nav.Link href="#link1">Order List</Nav.Link>
                                    <Nav.Link href="#link1">Order Details</Nav.Link>
                                    <Nav.Link href="#link1">Order Tracking</Nav.Link>
                                </Nav>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="5">
                            <Accordion.Header className="nav-item"><i class="ri-user-line"></i> User</Accordion.Header>
                            <Accordion.Body>
                                <Nav className="flex-column">
                                    <Nav.Link href="#link1">All User</Nav.Link>
                                    <Nav.Link><Link to="/create-user">Add New User</Link></Nav.Link>
                                    <Nav.Link href="#link1">Login</Nav.Link>
                                    <Nav.Link href="#link1">Signup</Nav.Link>
                                </Nav>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="6">
                            <Accordion.Header className="nav-item"><i class="ri-user-add-line"></i> Roles</Accordion.Header>
                            <Accordion.Body>
                                <Nav className="flex-column">
                                    <Nav.Link href="#link1">All Roles</Nav.Link>
                                    <Nav.Link href="#link1">Create Role</Nav.Link>
                                </Nav>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Nav className="flex-column">
                            <Nav.Link href="#link1"><i class="ri-image-2-line"></i> Gallery</Nav.Link>
                            <Nav.Link href="#link1"><i class="ri-pie-chart-line"></i> Report</Nav.Link>
                        </Nav>
                        <div className="label">Setting</div>
                        <Nav className="flex-column">
                            <Nav.Link href="#link1"><i class="ri-map-pin-line"></i> Location</Nav.Link>
                            <Nav.Link href="#link1"><i class="ri-settings-2-line"></i> Setting</Nav.Link>
                            <Nav.Link href="#link1"><i class="ri-edit-box-line"></i> Pages</Nav.Link>
                        </Nav>
                        <div className="label">Components</div>
                        <Nav className="flex-column">
                            <Nav.Link href="#link1"><i class="ri-database-2-line"></i> Components</Nav.Link>
                        </Nav>
                        <div className="label">Support</div>
                        <Nav className="flex-column">
                            <Nav.Link href="#link1"><i class="ri-question-line"></i> Help Center</Nav.Link>
                            <Nav.Link href="#link1"><i class="ri-customer-service-line"></i> FAQs</Nav.Link>
                            <Nav.Link href="#link1"><i class="ri-file-search-line"></i> Privacy Policy</Nav.Link>
                        </Nav>
                    </Accordion>

                </div>

            </aside>
        </>
    )
}

export default SideBar