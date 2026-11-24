import { useState } from "react";
import { Routes, Route } from "react-router";

import bikesData from "./data/bikes";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Bikes from "./pages/Bikes";
import BikeDetails from "./pages/BikeDetails";
import Rented from "./pages/Rented";

import "./App.css";

function App() {
  const [bikes, setBikes] = useState(bikesData);

  function rentBike(id) {
    const newBikes = bikes.map((bike) => {
      if (bike.id === id) {
        return { ...bike, isRented: true };
      }

      return bike;
    });

    setBikes(newBikes);
  }

  function returnBike(id) {
    const newBikes = bikes.map((bike) => {
      if (bike.id === id) {
        return { ...bike, isRented: false };
      }

      return bike;
    });

    setBikes(newBikes);
  }

  return (
    <div>
      <Navbar bikes={bikes} />

      <Routes>
        <Route
          path="/"
          element={<Home bikes={bikes} />}
        />

        <Route
          path="/bikes"
          element={
            <Bikes
              bikes={bikes}
              rentBike={rentBike}
              returnBike={returnBike}
            />
          }
        />

        <Route
          path="/bikes/:id"
          element={
            <BikeDetails
              bikes={bikes}
              rentBike={rentBike}
              returnBike={returnBike}
            />
          }
        />

        <Route
          path="/rented"
          element={
            <Rented
              bikes={bikes}
              returnBike={returnBike}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;