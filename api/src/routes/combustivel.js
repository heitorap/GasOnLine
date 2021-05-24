import { Router } from "express";
import CombustivelController from "../controller/CombustivelController";

const Route = Router();

Route.put('/:combustivel_type_id/posto/:posto_id', CombustivelController.update);

export default Route;