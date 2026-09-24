import { Router } from "express";
import {
  getMessage,
  getMessages,
  postMessage,
  removeMessage,
} from "../Controllers/index.js";

const router = Router();

router.get("/", getMessages);
router.get("/:messageId", getMessage);
router.post("/", postMessage);
router.delete("/:messageId", removeMessage);

export default router;
