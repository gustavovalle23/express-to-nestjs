import express, { Request, Response } from "express";

const app = express();
const port = 3000;

app.get("/express", (req: Request, res: Response) => {
  res.send("Hello from Express!");
});

app.listen(port, () => {
  console.log(`Express server is running on http://localhost:${port}`);
});
