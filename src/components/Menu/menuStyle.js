import styled from 'styled-components';
import { Button } from 'reactstrap';

export const ItemName = styled.h4`
    font-family: Libre Baskerville, serif;
    font-size: 1.5em;
    text-align: center;
    color: #55433B;
`

export const ItemBox = styled.div`
    margin: auto;
    width: 90%;
    background: #fff1e3;
`

export const CartButton = styled(Button)`
    width: 10%;
    height: 45px;
    color: #fff1e3;
    background: #55433B;
    font-family: Libre Baskerville, serif;
    font-size: 24px;
    margin: .5em;
`