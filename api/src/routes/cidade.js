import { Router } from 'express';
import CidadeController from '../controller/CidadeController';

const Route = Router();

Route.get("/", CidadeController.listar);
Route.get("/:cidade/postos", CidadeController.listarPostos);

Route.post("/cadastrar", CidadeController.cadastrar);

export default Route;