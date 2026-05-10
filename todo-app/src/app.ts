import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import todoRoutes from "./routes/todoRoutes";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/heath", (_, res) => res.json({ status: "ok" }));
app.use("/api/todos", todoRoutes);

app.use((req, res) => {
  res.status(404).json({
    success: false,
    massage: `Rota nao encontrada ${req.method} ${req.path}`,
  });
});

export default app;
