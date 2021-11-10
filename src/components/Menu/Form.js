import ModalCard from './ModalCard';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import Cart from './Cart';
import { useCart } from 'react-use-cart';
import React, { useState } from 'react';
import data from './data';

function ModalForm() {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);

    const { emptyCart } = useCart();

    const thankYou = () => {
        alert(`Thank you for your order! ^_^ Please check your texts for updates!`);
        toggle();
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        thankYou();
        emptyCart();
    }

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Label for="yourName">Your Name: </Label><Input type="name" name="name" id="yourName" placeholder="Your Name" required={true} />< br />
                    <Label for="yourName">Phone (We will text you when order is ready): </Label><Input type="text" name="number" id="phoneNumber" placeholder="Phone Number" required={true} />< br />
                    <h3 align="center">Menu</h3>
                    {data.cafeMenu.map((item, index) => {
                        return (
                            <ModalCard
                                img={item.img}
                                name={item.name}
                                desc={item.desc}
                                origin={item.origin}
                                price={item.price}
                                item={item}
                                key={index}
                            />
                        )
                    })}

                    <br />
                    <h3 align="center">Your Cart</h3>
                    <Cart />
                    <p className="text-center">
                        <Button
                            className="order-button mt-4"
                            type="submit"
                        >
                            Submit Order
                        </Button>
                    </p>
                </FormGroup>
            </Form>

        </>
    );
};

export default ModalForm;