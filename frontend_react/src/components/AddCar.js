import { useState } from "react";
import { useHistory } from "react-router-dom";
import { FormControl, FormGroup, Button, InputLabel , Input, Box } from "@material-ui/core";
import { addNewCar } from "../api/api";
import { Link } from "react-router-dom";

const AddCar = () => {
  const history = useHistory();

  const [sku, setSku] = useState("");
  const [price, setPrice] = useState();
  const [carModel, setCarModel] = useState("");
  const [carName, setCarName] = useState("");

  const add = async (car) => {
    try {
      const res = await addNewCar(car);
      if (res.ok) {
        history.push("/");
      }
    } catch (err) {
      console.log(err)
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    add({ sku, price, carModel, carName });
  };

  return (
    <div className="wrapper">
      <div className="inner">
        <form onSubmit={onSubmit}>
            <FormGroup>
          <FormControl>
            <InputLabel htmlFor="my-input">Car Name</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" type="text" required onChange={(e) => setCarName(e.target.value)}/>
          </FormControl>
          </FormGroup>

          <FormGroup>
          <FormControl>
            <InputLabel htmlFor="my-input">Car Model</InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" type="text" required onChange={(e) => setCarModel(e.target.value)}/>
          </FormControl>
          </FormGroup>

          <FormGroup>
          <FormControl>
            <InputLabel htmlFor="my-input">Sku </InputLabel>
            <Input id="my-input" aria-describedby="my-helper-text" type="text" required onChange={(e) => setSku(e.target.value)}/>
          </FormControl>
          </FormGroup>

          <FormGroup>
          <FormControl>
            <InputLabel htmlFor="standard-number">Price</InputLabel>
            <Input id="standard-number" aria-describedby="my-helper-number" type="number" required onChange={(e) => setPrice(e.target.value)}/>
          </FormControl>
          </FormGroup>

          <Box m={2}>
          <Button variant="contained" color="primary" type="submit" >
            Submit
          </Button>
          </Box>
          <Link to={{pathname:"/"}}>Back</Link>
        </form>
      </div>
    </div>
  );
};

export default AddCar;
