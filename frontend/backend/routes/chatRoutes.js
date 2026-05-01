import express from "express";
import { createChat, getChats, addMessage } from "../controllers/chatController.js";
import protect from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", protect, createChat);
router.get("/", protect, getChats);
router.post("/message", protect, addMessage);

export default router;