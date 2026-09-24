import { Router } from "express";
import { getSession } from "../Controllers/index.js";

const router = Router();

router.get("/", getSession);

export default router;
