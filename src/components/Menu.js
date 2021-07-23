import FoodMenu from "./FoodMenu";
import DrinksMenu from "./DrinksMenu";
import BobaMenu from "./BobaMenu";

function MenuPage() {
   return (
      <div className="container">
         <FoodMenu />
         <DrinksMenu />
         <BobaMenu />
      </div>
   );
}

export default MenuPage;