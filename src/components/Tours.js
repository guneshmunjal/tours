import React from "react";
import Card from "./Card";
import { useState } from "react";

// // function Tours({ tours, removeTour }) {
// //     console.log(tours);
// //   return (
// //     <div>
// //       <div>
// //         <h2>TRAVEL INDIA</h2>
// //       </div>
// //       {/* <div>
// //         {
// //         tours.map((tour) => {// returning a card for each  tour and giving 7 cards since data is of 7

// //            // return <Card  {...tour} removeTour={removeTour} />;
// //            return (<Card/>)

// //         }

// //        )
// //     }
// //       </div> */}

// //     </div>
// //   );
// }

//export default Tours;

export const Tours = (props) => {
  const tours = props.tour;
  console.log(props);
  const [newcard,setCard] = useState("hello");
  

  return (
    <div className="container">
      <h2>tours</h2>
      <div>
        {tours.map((tour) => {
          return <Card image={tour.image} newcard={newcard} destination ={tour.destination} info = {tour.info} price = {tour.price}/>;
        })}
      </div>
    </div>
  );
};
