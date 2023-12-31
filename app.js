import express from "express";
import { config } from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import ErrorMiddleware from "./middlewares/Error.js";

config({
  path: "./config/config.env",
});

const app = express();

// Middlewares
app.use(cors({
  origin: process.env.FRONTEND_URL,
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"],
}));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cookieParser());

// Routes
import courseRoutes from "./routes/courseRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import paymentRoutes from "./routes/paymentRoute.js";
import otherRoutes from "./routes/otherRoutes.js";

app.use("/api/v2", courseRoutes);
app.use("/api/v2", userRoutes);
app.use("/api/v2", paymentRoutes);
app.use("/api/v2", otherRoutes);

// Default route
app.get("/", (req, res) =>
  res.send(
    `<h1>Site is Working. Click <a href=${process.env.FRONTEND_URL}>here</a> to visit the frontend</h1>`
  )
);

// Error Handling Middleware
app.use(ErrorMiddleware);

export default app;
