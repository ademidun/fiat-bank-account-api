import express, { Express, Request, Response } from "express";
import { transferAsset } from "./src/transfer";
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();
app.use(bodyParser.json());

const port = process.env.PORT || 8000;

app.get('/api/v1/transfer', async (req: Request, res: Response) => {
  

  const defaultTransferRequest = {
    "accountId": "123456",
    "sourceCurrencySymbol": "CAD",
    "destinationCurrencySymbol": "MATIC",
    "destinationAmount": 0.01,
    "destinationAddress": "0x27f7e8d7c63c414eae2bb07e1a9b9057a1d382cf",
    "chainId": "137",
  };

  try {
    const transferResult = await transferAsset(defaultTransferRequest.chainId,
      defaultTransferRequest.destinationAddress,
      defaultTransferRequest.destinationAmount)
    res.json(transferResult);
    return
  } catch (error) {
    console.log(error)
    res.json({error});
    return
  }

  
});

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to our Off-chain Banking API');

});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});