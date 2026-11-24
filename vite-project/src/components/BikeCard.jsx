import { Link } from "react-router";

function BikeCard({ bike, rentBike, returnBike }) {
  return (
    <div className="bike-card">

      <h3>{bike.name}</h3>

      <p>Brand: {bike.brand}</p>

      <p>Type: {bike.type}</p>

      <p>Price: ₹{bike.pricePerHour}/hour</p>

      <p>Location: {bike.location}</p>

      <p>
        Engine: {bike.engineCC === 0
          ? "Electric"
          : bike.engineCC + " cc"}
      </p>

      <p>
        Status: {bike.isAvailable
          ? "Available"
          : "Under Maintenance"}
      </p>

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

      <Link to={"/bikes/" + bike.id}>
        View Details
      </Link>

    </div>
  );
}

export default BikeCard;