import React, { useState } from 'react'
import AdminPanelLayout from '../../../AdminPanelLayout'
import { Container, Row, Col, Form, Button, Card, Breadcrumb } from "react-bootstrap";
import { EyeFill, EyeSlashFill } from "react-bootstrap-icons";
import axios from 'axios';
import api, { getCsrfCookie } from '../../../../services/api';

function CreateUser() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        dateOfBirth: '',
        address: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value

        })
    }


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // CSRF cookie for Sanctum
            // await axios.get("http://127.0.0.1:8000/sanctum/csrf-cookie", {
            //   withCredentials: true,
            // });

            await axios.get("http://localhost:8000/sanctum/csrf-cookie", {
                withCredentials: true
            });

            // Register user
            await axios.post("http://localhost:8000/register", formData, {
                withCredentials: true
            })

            if (response.status === 204 || response.status === 201) {
                console.log("User Created Successfully!!");
                navigate("/login");
            }
        } catch (error) {
            if (error.response && error.response.status === 422) {
                console.error("Validation Errors:", error.response.data.errors);
            } else {
                console.error("Registration failed:", error);
            }
        }
    }

    return (
        <AdminPanelLayout>

            <Row>
                <Col className='d-flex w-100 align-items-center justify-content-between'>
                    <h2 className="fw-bold mb-3">Add User</h2>
                    <Breadcrumb>
                        <Breadcrumb.Item active>Dashboard</Breadcrumb.Item>
                        <Breadcrumb.Item active>User</Breadcrumb.Item>
                        <Breadcrumb.Item>Add New User</Breadcrumb.Item>
                    </Breadcrumb>
                </Col>
            </Row>

            <Row>
                <Col>
                    <Card className="p-4 shadow-sm border-0 rounded-4 d-flex">
                        <div className="">
                            <h5 className="fw-bold">Account</h5>
                            <p className="text-muted">Fill in the information below to add a new account</p>
                        </div>

                        <Form onSubmit={handleSubmit}>
                            <Row className="mb-3">

                                <Form.Group controlId="formName" className="mb-3 col-6">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="name"
                                        onChange={handleChange}
                                        placeholder="Username"
                                    />
                                </Form.Group>

                                <Form.Group controlId="formEmail" className="mb-3 col-6">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        type="email"
                                        name="email"
                                        onChange={handleChange}
                                        placeholder="Email"
                                    />
                                </Form.Group>
                                <Form.Group controlId="formPhoneNumber" className="mb-3 col-6">
                                    <Form.Label>Phone Number</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="phoneNumber"
                                        onChange={handleChange}
                                        placeholder="+94 77 XXX XXXX"
                                    />
                                </Form.Group>
                                <Form.Group controlId="formPhoneNumber" className="mb-3 col-6">
                                    <Form.Label>Date of Birth</Form.Label>
                                    <Form.Control
                                        type="date"
                                        name="datePfBirth"
                                        onChange={handleChange}
                                        placeholder="Date of Birth"
                                    />
                                </Form.Group>
                                <Form.Group controlId="address" className="mb-3 col-12">
                                    <Form.Label>Address</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="address"
                                        onChange={handleChange}
                                        placeholder="Home Address"
                                    />
                                </Form.Group>


                                <Form.Group controlId="formPassword" className="mb-3 col-md-6">
                                    <Form.Label>Password</Form.Label>
                                    <div className="position-relative">
                                        <Form.Control
                                            type="password"
                                            name="password"
                                            onChange={handleChange}
                                            placeholder="Enter password"
                                        />
                                        <span

                                            className="position-absolute end-0 top-50 translate-middle-y me-3"
                                            style={{ cursor: "pointer", color: "#adb5bd" }}
                                        >
                                            {/* {showPassword ? <EyeSlashFill /> : <EyeFill />} */}
                                        </span>
                                    </div>
                                </Form.Group>

                                <Form.Group controlId="formConfirmPassword" className="mb-3 col-md-6">
                                    <Form.Label>Confirm password</Form.Label>
                                    <div className="position-relative">
                                        <Form.Control
                                            type="password"
                                            name="confirmPassword"
                                            onChange={handleChange}
                                            placeholder="Confirm password"
                                        />
                                        <span

                                            className="position-absolute end-0 top-50 translate-middle-y me-3"
                                            style={{ cursor: "pointer", color: "#adb5bd" }}
                                        >
                                            {/* {showConfirm ? <EyeSlashFill /> : <EyeFill />} */}
                                        </span>
                                    </div>
                                </Form.Group>

                            </Row>

                            <div className="text-end mt-4">
                                <Button variant="primary" type="submit" className="px-4 rounded-3">
                                    Save User
                                </Button>
                            </div>
                        </Form>
                    </Card>
                </Col>
            </Row>

        </AdminPanelLayout >
    )
}

export default CreateUser