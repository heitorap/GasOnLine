import { Router } from 'express';
import CidadeController from '../controller/CidadeController';

const Route = Router();

Route.get("/postos", CidadeController.listarPostos);

export default Route;