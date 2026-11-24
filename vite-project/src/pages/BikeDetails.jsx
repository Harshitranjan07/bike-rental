import { useState } from "react";
import { useParams, Link } from "react-router";

function BikeDetails({ bikes, rentBike, returnBike }) {

  const { id } = useParams();

  const bike = bikes.find(
    (bike) => bike.id === Number(id)
  );

  const [hours, setHours] = useState(1);

  if (!bike) {
    return <h2>Bike Not Found</h2>;
  }

  const totalRent = bike.pricePerHour * hours;

  return (
    <div className="container">

      <h1>Bike Details</h1>

      <div className="bike-card">

        <h2>{bike.name}</h2>

        <p>Brand: {bike.brand}</p>

        <p>Type: {bike.type}</p>

        <p>Location: {bike.location}</p>

        <p>Price Per Hour: ₹{bike.pricePerHour}</p>

        <p>Mileage: {bike.mileage}</p>

        <p>
          Engine: {bike.engineCC === 0
            ? "Electric "
            : bike.engineCC + " cc"}
        </p>

        <p>
          Status: {bike.isAvailable
            ? "Available"
            : "Under Maintenance"}
        </p>

        <h3>Select Rental Hours</h3>

        <button
          onClick={() => {
            if (hours > 1) {
              setHours(hours - 1);
            }
          }}
        >
          -
        </button>

        <span className="hours">{hours}</span>

        <button
          onClick={() => {
            if (hours < 12) {
              setHours(hours + 1);
            }
          }}
        >
          +
        </button>

        <h3>Total Rent: ₹{totalRent}</h3>

        {bike.isAvailable && (
          <div>
            {bike.isRented ? (
              <button onClick={() => returnBike(bike.id)}>
                Return Bike
              </button>
            ) : (
              <button onClick={() => rentBike(bike.id)}>
                Rent Bike
              </button>
            )}
          </div>
        )}

        {!bike.isAvailable && (
          <p>Under Maintenance</p>
        )}

      </div>

      <Link to="/bikes">Back to Bikes</Link>

    </div>
  );
}

export default BikeDetails;