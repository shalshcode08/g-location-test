import express from "express";
import cors from "cors";
import locationRoutes from "./routes/location.routes";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/location", locationRoutes);

export default app;
