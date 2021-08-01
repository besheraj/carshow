import React, { useState, useEffect } from "react";
import { getAllCars } from "../api/api";
import Car from "./Car";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";

const Store = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    async function getAllAvailable() {
      try {
        const res = await getAllCars(false);
        const cars = await res.json();
        if (res.ok) {
          setCars([cars]);
        }
      } catch (err) {
        console.log(err)
      }
    }
    getAllAvailable();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
      <h1> Available Cars </h1>
      <h3> <Link to= {{pathname: "/record"}}>Sold Record</Link> </h3>
      <h3> <Link to= {{pathname: "/addcar"}}>Add New Car</Link> </h3>
      <Grid container spacing={3}>
        {cars ? (
          cars.map((car) =>
            car.map((car) => (
              <Grid key={car._id} item xs={6} sm={3}>
                <Car  car={car} />
              </Grid>
            ))
          )
        ) : (
          <h2> No Cars Available</h2>
        )}
      </Grid>     
    </div>
  );
};

export default Store;
