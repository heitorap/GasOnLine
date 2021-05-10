import { Router } from "express";
import PostoController from "../controller/PostoController";

const Route = Router();

Route.get("/", PostoController.listar);
Route.get("/:id", PostoController.listById);
Route.get("/cidade/:id", PostoController.listByCidade);
Route.get("/preco/cidade/:id", PostoController.listByPrice);

Route.post("/", PostoController.addPosto);

export default Route;