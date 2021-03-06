import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import posto from "./routes/posto";
import cidade from './routes/cidade';
import combustivel from "./routes/combustivel";

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/posto", posto);
app.use("/cidade", cidade);
app.use("/combustivel", combustivel);

app.listen(80);