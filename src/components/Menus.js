import React, { Component } from 'react';

class Menus extends Component {
   render() {
      return (
         <div className="container my-5 p-5">
            <div className="row">
               <div className="col-3">
                  <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                     <a className="nav-link active" id="v-pills-fullmenu-tab" data-toggle="pill" href="#v-pills-fullmenu" role="tab"
                        aria-controls="v-pills-fullmenu" aria-selected="true">Full Menu</a>
                     <a className="nav-link" id="v-pills-food-tab" data-toggle="pill" href="#v-pills-food" role="tab"
                        aria-controls="v-pills-food" aria-selected="false">Cafe Food</a>
                     <a className="nav-link" id="v-pills-drinks-tab" data-toggle="pill" href="#v-pills-drinks" role="tab"
                        aria-controls="v-pills-drinks" aria-selected="false">Cafe Drinks</a>
                     <a className="nav-link" id="v-pills-bubbletea-tab" data-toggle="pill" href="#v-pills-bubbletea" role="tab"
                        aria-controls="v-pills-bubbletea" aria-selected="false">Bubble Tea Bar</a>
                     <a className="nav-link" id="v-pills-order-tab" data-toggle="pill" href="#v-pills-order" role="tab"
                        aria-controls="v-pills-order" aria-selected="false"><strong>Order Online</strong></a>
                  </div>
               </div>
            </div>
         </div>
      )
   }
}

export default Menus;