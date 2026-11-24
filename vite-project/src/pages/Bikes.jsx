import { useState } from "react";
import BikeCard from "../components/BikeCard";

function Bikes({ bikes, rentBike, returnBike }) {

  const [type, setType] = useState("All");

  const filteredBikes = bikes.filter((bike) => {
    if (type === "All") {
      return true;
    }

    return bike.type === type;
  });

  return (
    <div className="container">

      <h1>All Bikes</h1>

      <label>Filter by Type: </label>

      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
      >
        <option value="All">All</option>
        <option value="Scooter">Scooter</option>
        <option value="Bike">Bike</option>
        <option value="Electric">Electric</option>
      </select>

      <div className="bike-list">

        {filteredBikes.map((bike) => (
          <BikeCard
            key={bike.id}
            bike={bike}
            rentBike={rentBike}
            returnBike={returnBike}
          />
        ))}

      </div>

    </div>
  );
}

export default Bikes;