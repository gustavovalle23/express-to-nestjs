import express, { Request, Response, Express } from "express";
import { bootstrap } from "./nestjs-app-module";

const app: Express = express();
const port = 3000;

app.get("/express", (req: Request, res: Response) => {
  res.send("Hello from Express!");
});

/* 
// deprecated
app.listen(port, () => {
  console.log(`Express server is running on http://localhost:${port}`);
}); 
*/

bootstrap(app).then(() => {
  app.listen(port, () => {
    console.log(`Express server is running on http://localhost:${port}`);
  });
});
