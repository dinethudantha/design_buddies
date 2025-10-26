import React from "react";
import { Navbar, Nav, Image } from "react-bootstrap";
import { Bell, Gear } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const TopNavbar = () => {
    return (
        <Navbar bg="light" expand="lg" className="px-3 shadow-sm text-white top-navbar">
            <Link to="/dashboard" className="navbar-brand text-white">
                Dashboard
            </Link>
            <Nav className="ms-auto align-items-center">
                <Bell className="me-3 " />
                <Gear className="me-3" />
                <Image
                    src="https://via.placeholder.com/40"
                    roundedCircle
                    width="40"
                    height="40"
                />
            </Nav>
        </Navbar>
    );
};

export default TopNavbar;
