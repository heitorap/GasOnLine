import { Router } from "express";
import PostoController from "../controller/PostoController";

const Route = Router();

Route.get("/", PostoController.listar);
Route.get("/:id", PostoController.listById);
Route.get("/preco/cidade/:cidade_nome/tipo_combustivel/:id_tipo_combustivel", PostoController.listByPrice);

Route.post("/", PostoController.addPosto);
Route.post("/cidade", PostoController.listByCidade);

export default Route;