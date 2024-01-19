import express from "express"

const app = express();
const port = 3000;
const host = '0.0.0.0';

import mainRouter from "./routes"
app.use(express.json());

app.use("/", mainRouter)
app.listen(port, host, () => {
  console.log(`Servidor está ouvindo em http://${host}:${port}`);
});
