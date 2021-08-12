import FoodMenu from "./FoodMenu";
import DrinksMenu from "./DrinksMenu";
import BobaMenu from "./BobaMenu";
import { Button, Col, Container } from 'reactstrap';

function MenuPage() {
   return (
      <>
         <Container className="pt-3">
            <Col lg={12}>
               <p className="lead text-center"><h2>Menu</h2>
               Cliche Cafe is currently serving our spring season menu.</p>
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