import { Router } from "express";
import * as todoController from "../controller/todoController";

const router = Router();

router.get("/", todoController.getAll);
router.get("/:id", todoController.getById);
router.post("/", todoController.create);
router.put("/:id", todoController.update);
router.delete("/:id", todoController.remove);

export default router;
