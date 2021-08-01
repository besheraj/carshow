import { Router } from "express";

import carController from "../controller/carController.js"
import asyncWrapper from "../utils/asyncWrapper.js"

const router = Router();

router.post("/car",asyncWrapper(carController.addCar))
router.get("/car",asyncWrapper(carController.getAll))
router.put("/car/sold/:id",asyncWrapper(carController.buyCar))

export default router