import { Router } from "express";
import tiposController from "../controller/TiposCombustivelController"
const Route = Router();

Route.get("/", tiposController.listar);
Route.get("/:id", tiposController.listById);

Route.post("/", tiposController.addTipo);

export default Route;