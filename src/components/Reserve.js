import React from 'react';
import { Container, Row, Col, Form, FormGroup, Label, Input } from "reactstrap";
import TitleText from './TitleText';
import { PageContent } from './PageContent'
import outdoor from '../assets/images/pages/cafe-outside.jpg';

const Reserve = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Thank you for your reservation! Please contact us if you need to make any changes.`);
    };

    return (
        <>
            <Container className="text-center pt-4 px-5">
                <Row>
                    <Col lg={5} className="d-none d-lg-block">
                        <img src={outdoor} width="500" height="300" className="img-fluid rounded" alt="The cafe outside" />
                    </Col>
                    <Col>
                        <TitleText title={PageContent.loungeSection.title} content={PageContent.loungeSection.content} />
                    </Col>
                </Row>
                <Row className="lead">
                    <Col lg={6} pr={1}>
                        <TitleText title={PageContent.reserveSpace.title} content={PageContent.reserveSpace.bodyText} />

                        <Form onSubmit={handleSubmit}>
                            <FormGroup>
                                <Label for="yourName">Your Name: </Label><Input type="name" name="name" id="yourName" placeholder="Your Name" required={true} />< br />
                                <Label for="yourName">Phone (We will text you when order is ready): </Label><Input type="text" name="number" id="phoneNumber" placeholder="Phone Number" required={true} />< br />
                            </FormGroup>
                            <FormGroup>
                                <Label for="partySize">Select</Label>
                                <Input type="select" name="party" id="partySize">
                                    <option>1 person</option>
                                    <option>2 people</option>
                                    <option>3 people</option>
                                    <option>4 people</option>
                                </Input>
                            </FormGroup>
                            <FormGroup tag="fieldset">
                                <legend>Reservation type:</legend>
                                <FormGroup check>
                                    <Label check>
                                        <Input type="radio" name="radio1" />{' '}
                                        Cafe Table
                                    </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Label check>
                                        <Input type="radio" name="radio1" />{' '}
                                        Lounge Area
                                    </Label>
                                </FormGroup>
                            </FormGroup>
                        </Form>
                    </Col>
                    <Col>
                        <img src={PageContent.reserveSpace.img} className="img-fluid rounded float-right d-none d-md-block" alt="Outdoor seating" />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Reserve;
