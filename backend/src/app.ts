import express from "express";
import cors from "cors";

import authRoutes from "./routes/auth.routes";
import tripRoutes from "./routes/trip.routes";

const app = express();

app.use(cors());

app.use(express.json());

app.get("/", (_req, res) => {
  res.send("Traveloop Backend Running");
});

app.use("/api/auth", authRoutes);

app.use("/api/trips", tripRoutes);

export default app;