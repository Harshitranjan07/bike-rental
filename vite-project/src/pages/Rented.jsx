import BikeCard from "../components/BikeCard";

function Rented({ bikes, returnBike }) {

  const rentedBikes = bikes.filter(
    (bike) => bike.isRented
  );

  let totalPrice = 0;

  rentedBikes.forEach((bike) => {
    totalPrice = totalPrice + bike.pricePerHour;
  });

  return (
    <div className="container">

      <h1>My Rented Bikes</h1>

      {rentedBikes.length === 0 ? (
        <h3>No bikes rented</h3>
      ) : (
        <div>

          <h3>Total Price Per Hour: ₹{totalPrice}</h3>

          <div className="bike-list">

            {rentedBikes.map((bike) => (
              <BikeCard
                key={bike.id}
                bike={bike}
                returnBike={returnBike}
              />
            ))}

          </div>

        </div>
      )}

    </div>
  );
}

export default Rented;