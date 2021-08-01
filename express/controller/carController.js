import { addNewCar,getAllCars,carUpdateSold  } from "../services/car.js";

const addCar = async (req, res) => {
  const carDATA = req.body;
  const carAdded = await addNewCar(carDATA)
  return res.json(carAdded)
};


const getAll = async (req, res) => {
    const {sku,carName,carModel,price} = req.body;
    const allCars = await getAllCars({sku,carName,carModel,price})
    return res.json(allCars)
  };

const buyCar = async (req, res) => {
  const {id} = req.params
  await carUpdateSold(id)
  return res.json("Car Sold")
};
  
  const all = {addCar , getAll, buyCar}
  export default all