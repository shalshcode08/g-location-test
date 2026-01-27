import { Router } from "express";
import { saveLocation } from "../controllers/location.controller";

const router = Router();

router.post("/", saveLocation);

export default router;
