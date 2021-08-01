import Car from "../models/Car.js"

export async function addCar(data) {
    const car = new Car(data)
    const savedcar = await car.save()
    return savedcar
} 

export async function getCars(filter) {
    const all = await Car.find(filter)
    return all
} 

export async function updateCar(id, data) {
    const updated = await Car.updateOne({_id:id},{ $set: data})
    return updated
}