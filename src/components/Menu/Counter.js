import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from 'reactstrap';

function Counter() {
    const [counter, setCounter] = useState(() => { return 0 });

    function increment() {
        setCounter(counter + 1)
    };

    function decrement() {
        if (counter <= 0) {
            return;
        } else {
            setCounter(counter - 1);
        }
    };

    return (
        <>
            <CartButton onClick={decrement}> - </CartButton>
            <span>{counter}</span>
            <CartButton onClick={increment}> + </CartButton>
        </>
    );

}

export const CartButton = styled(Button)`
    width: 35px;
    height: 35px;
    color: #fff1e3;
    background: #55433B;
    margin: .5em;
`

export default Counter;