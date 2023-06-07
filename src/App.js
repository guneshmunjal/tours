import React, { useState } from "react";
import {Tours} from './components/Tours';
import data from './data';
import Card from "./components/Card";
// import Card from "./components/Card";

const App = () => {

  const [tours,setTours] = useState(data);

  function removeTour(id){
     const newTours = tours.filter(tour => tour.id !==id);
     setTours(newTours);


     if(tours.length === 0) 
      return (
          <div className="refresh">
            <h2>No Tours Left</h2>
            <button className="btn-white" onClick={() => setTours(data)}>
              Refresh
            </button>
          </div>
      );
  }

  return (
<div>
<h1 className="centre" >Travellers</h1>
  <Tours tour = {tours} removeTour= {removeTour}></Tours>
 
</div>

  )
};

export default App;
