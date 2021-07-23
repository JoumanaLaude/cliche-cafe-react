import FoodMenu from "./FoodMenu";
import DrinksMenu from "./DrinksMenu";
import BobaMenu from "./BobaMenu";
import { Button, Col, Container } from 'reactstrap';

function MenuPage() {
   return (
      <>
         <Container className="mt-5 pt-5">
            <Col sm="12" md={{ size: 6, offset: 3 }}>
               <p className="lead text-center">Cliche Cafe is currently serving our spring season menu.</p>
               <p className="text-center"><Button className="order-button">Order Online for Pickup</Button></p>
            </Col>

            <FoodMenu />
            <DrinksMenu />
            <BobaMenu />
         </Container>
      </>
   );
}

export default MenuPage;