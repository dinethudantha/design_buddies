import React, { useState } from 'react'
import AdminPanelLayout from '../../../AdminPanelLayout'
import { Container, Row, Col, Form, Button, Card, Breadcrumb } from "react-bootstrap";
import { EyeFill, EyeSlashFill } from "react-bootstrap-icons";
import axios from 'axios';
import api, { getCsrfCookie } from '../../../../services/api';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

function CreateUser() {

    const navigate = useNavigate();

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

            getCsrfCookie();

            await axios.get("http://localhost:8000/sanctum/csrf-cookie", {
                withCredentials: true
            });

            // Register user
            const response = await axios.post("http://localhost:8000/register", formData, {
                withCredentials: true
            })

            if (response.status === 201 || response.status === 204) {
                toast.success(response.data.message || "User created successfully!");

                // Reset form if needed
                setFormData({
                    name: "",
                    email: "",
                    phoneNumber: "",
                    dateOfBirth: "",
                    address: "",
                    password: "",
                    password_confirmation: "",
                });


                
            }
        } catch (error) {
            if (error.response && error.response.status === 422) {
                // Validation errors
                const errors = error.response.data.errors;
                Object.values(errors).forEach(errArr => {
                    errArr.forEach(msg => toast.error(msg));
                });
            } else {
                toast.error(error.response?.data?.message || "Registration failed!");
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
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Username"
                                    />
                                </Form.Group>

                                <Form.Group controlId="formEmail" className="mb-3 col-6">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Email"
                                    />
                                </Form.Group>
                                <Form.Group controlId="formPhoneNumber" className="mb-3 col-6">
                                    <Form.Label>Phone Number</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="phoneNumber"
                                        value={formData.phoneNumber}
                                        onChange={handleChange}
                                        placeholder="+94 77 XXX XXXX"
                                    />
                                </Form.Group>
                                <Form.Group controlId="formDateOfBirth" className="mb-3 col-6">
                                    <Form.Label>Date of Birth</Form.Label>
                                    <Form.Control
                                        type="date"
                                        name="dateOfBirth"
                                        value={formData.dateOfBirth}
                                        onChange={handleChange}
                                        max={new Date().toISOString().split('T')[0]}
                                        placeholder="Date of Birth"
                                    />
                                </Form.Group>
                                <Form.Group controlId="formAddress" className="mb-3 col-12">
                                    <Form.Label>Address</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="address"
                                        value={formData.address}
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
                                            value={formData.password}
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
                                            value={formData.password_confirmation}
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