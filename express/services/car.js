import { query } from "express";
import { addCar, getCars, updateCar } from "../database/repository/carRepo.js";

export async function addNewCar(data) {
  try {
    const newCar = await addCar(data);
    return newCar;
  } catch (err) {
    throw new Error(`Error: ${err} `);
  }
}

export async function getAllCars(filter) {
  try {

    let query = {}

    if (filter.sku) {
      query = {...query, sku: filter.sku}
    }
    if (filter.price) {
      query = {...query, price: filter.price}
    }
    if (filter.carName) {
      query = {...query, carName: filter.carName}
    }
    if (filter.carModel) {
      query = {...query, carModel: filter.carModel}
    }
    if (filter.isSold) {
      query = {...query, isSold: filter.isSold}
    }
    console.log(query)
    const getAllCars = await getCars(query);
    return getAllCars;
  } catch (err) {
    throw new Error(`Error: ${err} `);
  }
}

export async function carUpdateSold(id) {
  try {
    const sold = {
      isSold: true,
      isSoldTimeStamps: new Date()
    }
    const carSold = await updateCar(id, sold);
    if (!carSold){
      throw new Error("there is no car with this id");
    }
    return carSold;
  } catch (err) {
    throw new Error(`Error: ${err} `);
  }
}