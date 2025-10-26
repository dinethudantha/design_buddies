import React from "react";
import { Card, Row, Col } from "react-bootstrap";

const DashboardCards = () => {
    const cards = [
        { title: "Users", value: "26K", change: "-12.4%", color: "primary" },
        { title: "Income", value: "$6,200", change: "+40.9%", color: "info" },
        { title: "Conversion Rate", value: "2.49%", change: "+84.7%", color: "warning" },
        { title: "Sessions", value: "44K", change: "-23.6%", color: "danger" },
    ];

    return (
        <Row className="g-4 mt-3">
            {cards.map((card, idx) => (
                <Col md={3} key={idx}>
                    <Card bg={card.color} text="white" className="shadow-sm border-0">
                        <Card.Body>
                            <h5 className="mb-1">{card.value}</h5>
                            <p className="mb-2">{card.title}</p>
                            <small>{card.change}</small>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    );
};

export default DashboardCards;
