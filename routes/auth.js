import express from "express";

const router = express.Router();

import { showMessage, register } from "../controllers/auth";

router.get("/:message", showMessage);
router.post("/register", register);

module.exports = router;
