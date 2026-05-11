import "dotenv/config";
import express from "express";
import cors from "cors";
import { connectDB } from "./db/connect.js";
import bacallaRouter from "./routes/bacalla.js";

const app = express();
const PORT = process.env.PORT || 3001;

const corsOptions = {
  origin: process.env.FRONTEND_URL,
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type"],
};

app.use(cors());
app.use(express.json());

app.use("/api/bacalla", bacallaRouter);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor escoltant al port ${PORT}`);
    console.log(`CORS permès per: ${process.env.FRONTEND_URL}`);
  });
});

// ── Versió sense MongoDB (Nivell 1 i 2) ───────────────────────────────────
// import 'dotenv/config';
// import express from 'express';
// import cors from 'cors';
// import bacallaRouter from './routes/bacalla.js';
//
// const app = express();
// const PORT = process.env.PORT || 3001;
//
// const corsOptions = {
//   origin: process.env.FRONTEND_URL,
//   methods: ['GET', 'POST', 'PUT', 'DELETE'],
//   allowedHeaders: ['Content-Type'],
// };
//
// app.use(cors(corsOptions));
// app.use(express.json());
//
// app.use('/api/bacalla', bacallaRouter);
//
// app.listen(PORT, () => {
//   console.log(`Servidor escoltant al port ${PORT}`);
//   console.log(`CORS permès per: ${process.env.FRONTEND_URL}`);
// });
