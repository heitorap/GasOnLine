import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import posto from "./routes/Posto";
import tipo from "./routes/tipo"

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/posto", posto);
app.use("/tipo_combustivel", tipo);

app.listen(3000);