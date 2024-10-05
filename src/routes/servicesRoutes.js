import express from "express";
import { getServices } from "../controllers/servicesController.js";
const router = express.Router();

router.route("/").get(getServices);

export default router;
