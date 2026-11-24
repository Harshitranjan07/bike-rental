function Home({ bikes }) {

  const totalBikes = bikes.length;

  const availableBikes = bikes.filter(
    (bike) => bike.isAvailable
  ).length;

  const rentedBikes = bikes.filter(
    (bike) => bike.isRented
  ).length;

  return (
    <div className="container">

      <h1>Welcome to Bike Rental</h1>

      <p>Find and rent your favourite bike.</p>

      <div className="summary">

        <div>
          <h2>{totalBikes}</h2>
          <p>Total Bikes</p>
        </div>

        <div>
          <h2>{availableBikes}</h2>
          <p>Available Bikes</p>
        </div>

        <div>
          <h2>{rentedBikes}</h2>
          <p>Rented Bikes</p>
        </div>

      </div>

    </div>
  );
}

export default Home;