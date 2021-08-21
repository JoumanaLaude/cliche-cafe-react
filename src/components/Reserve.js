import React from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input } from "reactstrap";
import TitleText from './TitleText';
import { PageContent } from './PageContent'

function Reserve() {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Thank you for your reservation! Please contact us if you need to make any changes.`);
    };

    return (
        <Container className="text-center pt-4 px-5">
            <Row className="lead">
                <Col lg={6} pr={1}>
                    <TitleText title={PageContent.reserveSpace.title} content={PageContent.reserveSpace.bodyText} />

                    <Form onSubmit={handleSubmit}>
                        <FormGroup>
                            <Label for="yourName">Your Name: </Label><Input type="name" name="name" id="yourName" placeholder="Your Name" required={true} />< br />
                            <Label for="yourName">Phone (We will text you when order is ready): </Label><Input type="text" name="number" id="phoneNumber" placeholder="Phone Number" required={true} />< br />
                        </FormGroup>
                    </Form>
                </Col>
                <Col>
                    <img src={PageContent.reserveSpace.img} className="img-fluid rounded float-right d-none d-md-block" alt="Outdoor seating" />
                </Col>
            </Row>
        </Container>
    )
}

export default Reserve;
