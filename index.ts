import { Request, Response } from "express";

const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to our Off-chain Banking API');
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});