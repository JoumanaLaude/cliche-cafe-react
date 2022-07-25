import React from 'react';
import { Button, Container, Row, Col, Form, FormGroup, Label, Input } from "reactstrap";
import TitleText from './TitleText';
import { PageContent } from './PageContent'
import outdoor from '../assets/images/pages/cafe-outside.jpg';

const Reserve = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Thank you for your reservation! Please contact us if you need to make any changes.`);
        window.location.reload(false);
    };

    return (
        <>
            <Container className="text-center pt-4 px-5">
                <Row>
                    <Col>
                        <TitleText title={PageContent.loungeSection.title} content={PageContent.loungeSection.content} />
                    </Col>
                    <Col lg={5} className="d-none d-lg-block">
                        <img src={outdoor} width="500" height="300" className="img-fluid rounded" alt="The cafe outside" />
                    </Col>
                </Row>
                <Row className="lead col-margin">
                    <Col sm={6}>
                        <img src={PageContent.reserveSpace.img} className="rsv-img img-fluid rounded d-none d-md-block" alt="Outdoor seating" />
                    </Col>
                    <Col sm={{ size: 5 }}>
                        <TitleText title={PageContent.reserveSpace.title} content={PageContent.reserveSpace.bodyText} />

                        <Form onSubmit={handleSubmit}>
                            <FormGroup>
                                <Label for="yourName">Your Name: </Label><Input sm={2} type="name" name="name" id="yourName" placeholder="Your Name" required={true} />< br />
                                <Label for="yourPhone">Phone: </Label><Input type="text" name="number" id="phoneNumber" placeholder="Phone Number" required={true} />< br />
                                <Label for="yourEmail">Email: </Label><Input type="text" name="email" id="email" placeholder="Email" required={true} />< br />
                            </FormGroup>
                            <FormGroup>
                                <Label for="partySize">Party size:</Label>
                                <Input type="select" name="party" id="partySize" required={true} >
                                    <option>1 person</option>
                                    <option>2 people</option>
                                    <option>3 people</option>
                                    <option>4 people</option>
                                </Input>
                            </FormGroup>
                            <FormGroup tag="fieldset">
                                <Label for="reservationType">Reservation type (skip if no preference):</Label>
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
                            <FormGroup>
                                <Label for="yourDate">Date</Label>
                                <Input type="date" name="date" id="yourDate" placeholder="date placeholder" required={true} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="yourTime">Time</Label>
                                <Input type="time" name="time" id="yourTime" placeholder="time placeholder" required={true} />
                            </FormGroup>
                            <FormGroup>
                                <Col>
                                    <Button onClick={handleSubmit} className="reserve-btn">Submit</Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Reserve;
