import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import posto from "./routes/posto";
import cidade from './routes/cidade';

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/posto", posto);
app.use("/cidade", cidade);

app.listen(3000);