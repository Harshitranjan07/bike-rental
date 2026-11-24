import { Link } from "react-router";

function Navbar({ bikes }) {
  const rentedBikes = bikes.filter((bike) => bike.isRented);

  return (
    <nav>
      <h2>Bike Rental</h2>

      <div>
        <Link to="/">Home</Link>

        <Link to="/bikes">Bikes</Link>

        <Link to="/rented">
          Rented ({rentedBikes.length})
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;